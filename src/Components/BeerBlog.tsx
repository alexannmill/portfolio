import React from "react";
import "./Styles/Projects.css";
import {motion} from "framer-motion"

export default function BeerBlog() {
  return (
    <motion.div 
      className="beerblog"
      
      >
      <h1 className="beerblogtitle">
        <strong> BEER BLOG </strong>
      </h1>
      <h2>Coming Soon!</h2>
      <p className="beerblogblurb">
        I would cringe at every time someone told me that a blog helps you stand
        out in the tech world. So in the midst of a career change and being in a
        uncomfortable territory, I thought what better time share my knowledge and
        blog about beer! This keeps brewing fresh and sharp and avoids
        sounding like a moron trying to talk smart on something I know I
        shouldn't be giving advice on ... yet.
      </p>
      <p className="beerblogblurb">
        {" "}
        Here I will be sharing homebrew recipes, most of which will be ones that
        were on tap at Herald Street (where I used to brew). I will also cover some some key concepts
        for beginners along with tips and how-tos for growing up our own
        cultures.
      </p>
    </motion.div>
  );
}
