import React from "react";
import { events } from "./events";

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Description(props) {
  return <p>{props.description}</p>;
}

function Image(props) {
  return <img width="125px" src={props.image} />;
}
class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Image image={this.props.image} />
        <Title title={this.props.title} />
        <Description description={this.props.description} />
        {this.state.like ? (
          <img
            onClick={() => {
              this.setState({
                like: false
              });
              this.props.minus();
            }}
            width="30px"
            src="like.png"
          />
        ) : (
          <img
            width="30px"
            src="unlike.png"
            onClick={() => {
              this.setState({
                like: true
              });
              this.props.plus();
            }}
          />
        )}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    count: 0
  };

  plusLike = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  minusLike = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <p>Колличество лайков: {this.state.count}</p>
        <Event
          title="Лекция по ReactJS"
          description="Базовая теория"
          image="1.jpg"
          plus={this.plusLike}
          minus={this.minusLike}
        />
      </div>
    );
  }
}

export default App;
