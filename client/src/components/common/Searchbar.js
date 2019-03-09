import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input
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
      </div>
    );
  }
}

export default Searchbar;
