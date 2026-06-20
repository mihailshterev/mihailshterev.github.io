import mIcon from "../assets/favicon.ico";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import type { RefObject } from "react";
import { NavBar } from "./NavBar";
import { RxCross1 } from "react-icons/rx";

type SectionRef = RefObject<HTMLDivElement | null>;

interface HeaderProps {
  scroll: (elementRef: RefObject<HTMLElement | null>) => void;
  homeRef: SectionRef;
  aboutMeRef: SectionRef;
  projectsRef: SectionRef;
  spotifyRef: SectionRef;
  contactsRef: SectionRef;
}

export const Header = ({ scroll, homeRef, aboutMeRef, projectsRef, spotifyRef, contactsRef }: HeaderProps) => {
  const [burgirVisible, setBurgirVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleBurgir = () => {
    setBurgirVisible(!burgirVisible);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <div className="header">
        <img onClick={() => scroll(homeRef)} src={mIcon} alt="" />
        {windowWidth > 660 ? (
          <ul>
            <li>
              <button onClick={() => scroll(homeRef)}>Home</button>
            </li>
            <li>
              <button onClick={() => scroll(aboutMeRef)}>About Me</button>
            </li>
            <li>
              <button onClick={() => scroll(projectsRef)}>Projects</button>
            </li>
            <li>
              <button onClick={() => scroll(spotifyRef)}>Music</button>
            </li>
            <li>
              <button onClick={() => scroll(contactsRef)}>Contact</button>
            </li>
          </ul>
        ) : (
          <div>
            {!burgirVisible ? (
              <FaBars className="burgir" onClick={toggleBurgir} />
            ) : (
              <RxCross1 className="burgir" onClick={toggleBurgir}></RxCross1>
            )}
          </div>
        )}
      </div>
      {burgirVisible && windowWidth < 660 && (
        <NavBar scroll={scroll} elRefs={[homeRef, aboutMeRef, projectsRef, spotifyRef, contactsRef]} />
      )}
    </div>
  );
};
