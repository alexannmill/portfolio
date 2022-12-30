import "./Styles/Projects.css";

export default function BeerBlog() {
  return (
    <div className="beerblog">
      {/* //add anchor for nav */}
      <h1 className="beerblogtitle">
        <strong> BEER BLOG </strong>
      </h1>
      <h3>Coming Soon!</h3>
      <p>
        I would cringe at every time someone told me that a blog helps you stand
        out in the tech world. So in the midst of a career change and being in a
        world of new and uncomfortable territory, I thought what better time to
        blog about beer! This keeps brewing fresh and sharp and avoiding
        sounding like a moron trying to talk smart on something I know I
        shouldn't be giving advice on yet.
      </p>
      <p>
        {" "}
        Here I will be sharing homebrew recipes, most of which will be ones that
        were on tap at Herald Street. I will also cover some some key concepts
        for beginners along with tips and how-tos for growing up our own
        cultures.
      </p>
    </div>
  );
}
