import React, { Component } from "react";
import { events } from "./events";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false
    };
  }

  handleClick = () => {
    if (this.state.like) {
      this.props.minusLike();
    } else {
      this.props.plusLike();
    }
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    return (
      <div style={{ width: "150px", marginRight: "30px" }}>
        <img width="150px" src={this.props.event.image} />
        <h2>{this.props.event.title}</h2>
        <p>{this.props.event.description}</p>
        {this.state.like ? (
          <img onClick={this.handleClick} width="20" src="like.png" />
        ) : (
          <img onClick={this.handleClick} width="20" src="unlike.png" />
        )}
      </div>
    );
  }
}

function LikeCount(props) {
  return <p>Количество лайков: {props.count}</p>;
}

function Events(props) {
  return (
    <div>
      <p>Список событий</p>
      <div style={{ display: "flex" }}>
        {props.events.map((event, index) => {
          return (
            <Event
              key={event.id}
              event={event}
              plusLike={props.plusLike}
              minusLike={props.minusLike}
            />
          );
        })}
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likeCount: 0
    };
  }

  plusLike = () => {
    this.setState({
      likeCount: this.state.likeCount + 1
    });
  };

  minusLike = () => {
    this.setState({
      likeCount: this.state.likeCount - 1
    });
  };

  render() {
    return (
      <div>
        <Events
          events={events}
          plusLike={this.plusLike}
          minusLike={this.minusLike}
        />
        <LikeCount count={this.state.likeCount} />
      </div>
    );
  }
}

export default App;
