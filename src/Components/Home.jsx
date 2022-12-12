import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="img-container">
        {/* <img
          className="home-bg-img"
          src="https://images.pexels.com/photos/3824706/pexels-photo-3824706.jpeg"
          alt="splat"
        ></img> */}
      </div>
      <div className="home">
        <div className="slant">
          <h1 className="hi">Hi, I'm</h1>
          <h1 className="name"> ALEX MILLER.</h1>
        </div>
        <p className="blurb">I used to make beer and now I make websites.</p>
      </div>
    </>
  );
}
