import React from "react";

class DisplayImage extends React.Component {
  render() {
    console.log(this.props.link);
    const { link, desc, Id } = this.props.link;
    return (
      <div>
        <img src={link} />
      </div>
    );
    // const { href } = this.props.link;
    // return <img alt={Description} id={id} src={href}></img>;
  }
}
export default DisplayImage;
