import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function smoothCurve(a, b) {
  const midY = (a.y + b.y) / 2;
  return ` C ${a.x.toFixed(1)} ${midY.toFixed(1)} ${b.x.toFixed(1)} ${midY.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function spiralPath(cx, cy, R) {
  const maxT = Math.PI * 3;
  const steps = 64;

  let d = "";

  for (let k = 1; k <= steps; k++) {
    const t = (k / steps) * maxT;
    const r = R * (1 - 0.22 * (t / maxT));
    const ang = -Math.PI / 2 + t;
    const x = cx + r * Math.cos(ang);
    const y = cy + r * Math.sin(ang);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }

  return d;
}

export const ConnectorThread = ({ wrapperRef, sectionRefs, musicIndex = 3 }) => {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [path, setPath] = useState("");
  const [nodes, setNodes] = useState([]);
  const [musicFrac, setMusicFrac] = useState(0.6);

  const { scrollYProgress } = useScroll();
  const drawn = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.0005 });

  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) {
      return;
    }

    const compute = () => {
      const sections = sectionRefs.map((r) => r.current);
      if (sections.some((s) => !s)) {
        return;
      }

      const W = wrap.offsetWidth;
      const H = wrap.offsetHeight;
      const cx = W / 2;
      const amp = Math.min(W * 0.3, 380);
      const sideFor = (i) => (i % 2 === 0 ? cx - amp : cx + amp);

      const centers = sections.map((s) => s.offsetTop + s.offsetHeight / 2);
      const anchors = centers.map((cy, i) => ({ x: sideFor(i), y: cy }));

      const start = { x: anchors[0].x, y: 0 };
      const end = { x: anchors[anchors.length - 1].x, y: H };
      const R = Math.min(amp * 0.55, 120);

      const seq = [start, ...anchors, end];
      let d = `M ${start.x.toFixed(1)} ${start.y.toFixed(1)}`;
      let curr = start;

      for (let i = 1; i < seq.length; i++) {
        const target = seq[i];
        const isMusic = i - 1 === musicIndex;
        if (isMusic) {
          const top = { x: target.x, y: target.y - R };
          d += smoothCurve(curr, top);
          d += spiralPath(target.x, target.y, R);
          curr = { x: target.x, y: target.y + R * 0.78 };
        } else {
          d += smoothCurve(curr, target);
          curr = target;
        }
      }

      setSize({ w: W, h: H });
      setPath(d);
      setNodes(anchors.map((a, i) => ({ ...a, music: i === musicIndex })));
      setMusicFrac(centers[musicIndex] / H);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(wrap);
    window.addEventListener("resize", compute);
    window.addEventListener("load", compute);
    const settle = setTimeout(compute, 600);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      window.removeEventListener("load", compute);
      clearTimeout(settle);
    };
  }, [wrapperRef, sectionRefs, musicIndex]);

  if (!size.w) {
    return <svg className="connector-thread" aria-hidden="true" />;
  }

  const greenStart = Math.max(0, musicFrac - 0.1).toFixed(3);
  const greenEnd = Math.min(1, musicFrac + 0.1).toFixed(3);

  return (
    <svg className="connector-thread" width={size.w} height={size.h} viewBox={`0 0 ${size.w} ${size.h}`} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2={size.h} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c9b8ff" />
          <stop offset={greenStart} stopColor="#8fb6ff" />
          <stop offset={musicFrac.toFixed(3)} stopColor="#1ED760" />
          <stop offset={greenEnd} stopColor="#7fdcb0" />
          <stop offset="1" stopColor="#a9c6ff" />
        </linearGradient>
        <filter id="threadGlow" x="-30%" y="-5%" width="160%" height="110%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#5b3fc0" floodOpacity="0.85" />
        </filter>
      </defs>

      <path d={path} stroke="url(#threadGrad)" strokeWidth="2" strokeOpacity="0.15" strokeLinecap="round" fill="none" />

      <motion.path
        d={path}
        stroke="url(#threadGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        filter="url(#threadGlow)"
        style={{ pathLength: drawn }}
      />

      {nodes.map((n, i) =>
        i === 0 ? null : (
          <circle key={i} cx={n.x} cy={n.y} r={n.music ? 4 : 5} fill={n.music ? "#1ED760" : "#e7ddff"} filter="url(#threadGlow)" />
        ),
      )}
    </svg>
  );
};
