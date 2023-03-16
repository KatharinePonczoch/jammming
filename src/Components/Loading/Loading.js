import React, { Component } from "react";
import "./Loading.css";

export default class Loading extends Component {
  render() {
    return (
      <div class="loadingDiv">
        <div class="loader"></div>
        <div>
          <h3>Saving Playlist</h3>
        </div>
      </div>
    );
  }
}
