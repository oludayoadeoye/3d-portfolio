import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Oludayo Adeoye
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to Discover How We Can Elevate Your Business Together</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Kindly reach out to Me, here!!!

          <br />
          <a href="https://www.linkedin.com/in/oludayo-adeoye" target="_blank" >LinkedIn: https://www.linkedin.com/in/oludayo-adeoye</a>


          <br />
          <a href="https://github.com/oludayoadeoye" target="_blank" >

            GitHub:https://github.com/oludayoadeoye (Personal)</a>

        </p>
      </div>
    </div>
  );
};
