import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: -22.907104,
          lng: -47.06324
        }}
        zoom={8}
        onClick={this.onMapClicked}
      />
    );
  }
}
const style = {
  width: "100%",
  height: "100%"
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAImznlpVIDBVGBz2An66ahcvp_yrKwTu4"
})(MapContainer);
