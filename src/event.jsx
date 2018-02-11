import React from "react";

export default class Event extends React.Component {
  render() {
    return (
      <div style={{ width: "150px", marginRight: "10px" }}>
        <img width="100%" src={this.props.item.image} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <img
          onClick={() => this.props.addFavourite(this.props.item)}
          width="40"
          src={this.props.item.like ? "like.png" : "unlike.png"}
        />
      </div>
    );
  }
}
