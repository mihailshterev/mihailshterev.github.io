import type { RefObject } from "react";

interface NavBarProps {
  scroll: (elementRef: RefObject<HTMLElement | null>) => void;
  elRefs: RefObject<HTMLDivElement | null>[];
}

export const NavBar = ({ scroll, elRefs }: NavBarProps) => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <button onClick={() => scroll(elRefs[0])}>Home</button>
        </li>
        <li>
          <button onClick={() => scroll(elRefs[1])}>About Me</button>
        </li>
        <li>
          <button onClick={() => scroll(elRefs[2])}>Projects</button>
        </li>
        <li>
          <button onClick={() => scroll(elRefs[3])}>Music</button>
        </li>
        <li>
          <button onClick={() => scroll(elRefs[4])}>Contact</button>
        </li>
      </ul>
    </div>
  );
};
