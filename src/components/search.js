import React from "react";
import { Container, Input } from "@material-ui/core";

class Search extends React.Component {
  state = { word: "" };
  onSearch = (e) => {
    e.preventDefault();
    this.props.onSend(this.state.word);
  };

  render() {
    console.log(this.state.word);
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.onSearch}>
          <Input
            label="Search"
            value={this.state.word}
            onChange={({ target: { value } }) => {
              this.setState({ word: value });
            }}
          ></Input>
        </form>
      </Container>
    );
  }
}
export default Search;
