import "./Styles/Home.css";
import photo from "./imgs/IMG_0528.JPG";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="img-container">
          <img className="home-bg-img" src={photo} alt="me"></img>
        </div>
        <div className="slant">
          <h1 className="hi">Hi, my name is </h1>
          <h1 className="name"> Alex Miller.</h1>
          <p className="blurb">
            Brewer turned Software Developer. I enjoy creating applications that
            have a seamless user experience; maintaining continuity with themes,
            responses, and expectations.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
