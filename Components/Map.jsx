import React from "react";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
      width="600"
      height="450"
      frameborder="0"
      className="w-full h-full rounded-2xl border-4 py-4 px-4"
      // style="border:0"
      allowFullScreen={true}
    ></iframe>
  );
};

export default Map;
