import React, { Component } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";
//AIzaSyAImznlpVIDBVGBz2An66ahcvp_yrKwTu4

class Searchbar extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
          id="auto-complete"
          type="text"
          name="name"
          className="form-control"
          placeholder="Find by firstname ..."
          onChange={this.props.onChange}
        />
        <div className="input-group-append">
          <button
            onClick={this.props.onFind}
            className="input-group-text bg-info text-light"
            id="basic-addon2"
          >
            Find
          </button>
        </div>
        <GooglePlacesAutocomplete onSelect={console.log} />
        {/* <Autocomplete
          style={{ width: "90%" }}
          onPlaceSelected={place => {
            console.log(place);
          }}
          types={["(regions)"]}
          componentRestrictions={{ country: "ru" }}
        /> */}
      </div>
    );
  }
}

export default Searchbar;
