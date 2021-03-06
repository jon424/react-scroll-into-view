import React from "react";
import colors from "../css-colors";
import "../App.css";

//https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function ScrollJack() {
  return (
    <div className="App">
      {/* {colors.map((color) => (
        <FadeInSection key={color}>
          <div className="box" style={{ backgroundColor: color }}>
            <span>{color}</span>
          </div>
        </FadeInSection>
      ))} */}
      <div className="scroll-jack">
      <FadeInSection>
        <div className="jack">
          <div className="img">image</div>
          <div className="content">content</div>
        </div>
      </FadeInSection>
      </div>
    </div>
  );
}

export default ScrollJack;
