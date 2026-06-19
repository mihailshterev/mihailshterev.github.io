import { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import { SiSpotify, SiApplemusic, SiYoutubemusic } from "react-icons/si";

const SPOTIFY_ARTIST_ID = "5x0JssU826Vd1fIz7scsPu";

export const SpotifySection = ({ elRef }) => {
  const isInView = useInView(elRef, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={elRef} className="spotify-section">
      <div className="spotify-container">
        <motion.div
          className="spotify-content"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animationControls}
          transition={{ duration: 1 }}
        >
          <div className="spotify-heading">
            <FaSpotify className="spotify-heading-icon" />
            <h2>My Music</h2>
            <div className="equalizer" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <p>When I'm not writing code, I'm making music. Check out my Spotify and follow along if you enjoy the vibe.</p>

          <div className="spotify-embed-card">
            <iframe
              title="Spotify artist player"
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>

          <div className="streaming-links">
            <a href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`} target="_blank" rel="noreferrer" aria-label="Spotify">
              <SiSpotify />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
