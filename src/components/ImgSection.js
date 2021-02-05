import React from "react";
import DisplayImage from "./DisplayImage";

const ImgSection = ({ results }) => {
  //map the results from nasa to the properties we want
  const links = results.map((element) => {
    //we want the link to the image, the ID of the image and the image description.
    return {
      link: element.links[0].href,
      nasaId: element.data[0].nasa_id,
      desc: element.data[0].description,
    };
  });
  //map the object to the displayImage component.
  const mappedLinks = links.map((link) => {
    console.log(link);
    return <DisplayImage link={link} key={link.nasaId} />;
  });

  return <div>Records:{mappedLinks}</div>;

  //  const linkData = results.map((result) => result.data[0]);
  //return <div>{links}</div>;
  // console.log(elements);
};

export default ImgSection;
