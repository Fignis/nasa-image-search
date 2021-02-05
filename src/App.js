import React from "react";
import Search from "./components/search";
import api from "./components/api";
import ImgSection from "./components/ImgSection";

class App extends React.Component {
  state = { imgs: [] };
  getTheData = async (word) => {
    try {
      const res = await api.get("search?q=", {
        params: { q: word },
      });
      const {
        collection: { items },
      } = res.data;
      this.setState({ imgs: items });
      console.log(this.state.imgs);
    } catch (err) {
      console.log(`api request ${err}`);
    }
  };
  render() {
    return (
      <div>
        <Search onSend={this.getTheData} />
        <ImgSection results={this.state.imgs} />
      </div>
    );
  }
}

export default App;
