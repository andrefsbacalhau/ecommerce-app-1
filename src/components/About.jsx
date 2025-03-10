import React from "react";
import about4 from "../assets/AboutImgs/about4.jpg";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-10 px-5">
          <div className="w-full grid place-items-center">
            <img
              src={about4}
              alt=""
              className="w-full object-cover border border-black brightness-85"
            />
          </div>
          <div className="about-section-text">
            <h1 className="about-section-title">About us</h1>
            <p className="about-section-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              sequi corrupti non quae explicabo quod blanditiis perspiciatis
              deleniti unde ducimus et sed neque voluptatum praesentium
              voluptatibus eius placeat alias delectus eaque sint, ipsum
              ratione, magnam amet recusandae. In, nisi hic! Vel rerum
              perferendis distinctio sunt alias odio quos unde natus dolorem
              magni voluptates nostrum veritatis ut minus quis corporis modi,
              neque quidem sit autem laborum ipsa. Optio veritatis libero
              aliquid recusandae eos quo qui est voluptatum aperiam,
              voluptatibus error et voluptate, perferendis ut quaerat at veniam
              doloribus consequatur nulla laborum illo, quam dolore id?
              Necessitatibus, soluta praesentium? Consequuntur dolores autem,
              saepe quos laborum molestiae magni consequatur amet ut ipsum,
              perferendis dolorem tempora possimus? Odit saepe pariatur odio
              totam doloribus fugiat exercitationem quis! Quae quisquam tempora
              mollitia placeat qui? Voluptate qui suscipit expedita
              necessitatibus voluptates maxime recusandae totam, dicta quasi
              eligendi, id vitae molestiae accusantium! Quod amet recusandae
              minima ducimus dolore maxime eaque voluptatem perspiciatis laborum
              veniam, iusto, vitae facere magnam reiciendis eos, laudantium sint
              non voluptatibus? Delectus iste quis nulla necessitatibus
              repellendus accusamus, rerum sunt sequi culpa minus. Tempore
              excepturi cum sint, voluptates quae ea? Molestiae rem laudantium
              fugit et hic voluptatum consectetur nemo quod eligendi nihil, qui
              doloremque corporis.
            </p>
            <span className="text-base mt-10 text-end text-zinc-400">
              Click to check more of our{" "}
              <span className="underline cursor-pointer hover:text-white transition-all duration-500">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer hover:text-white transition-all duration-500">
                addicional conditions
              </span>{" "}
              .
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
