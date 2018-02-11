import React from "react";
import Event from "./event";
import { events } from "./events";

function EventsList(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.events.map(event => {
        return (
          <Event
            key={event.id}
            item={event}
            addFavourite={props.addFavourite}
          />
        );
      })}
    </div>
  );
}

function FavouriteList(props) {
  console.log(props);
  if (props.list.length == 0) {
    return <p>Нет избранных событий</p>;
  }

  return <div>{props.list.map(item => <p key={item.id}>{item.title}</p>)}</div>;
}

class App extends React.Component {
  state = {
    favList: []
  };

  addFavourite = event => {
    this.state.favList.push(event);
    this.setState({
      favList: [...this.state.favList]
    });
  };

  render() {
    return (
      <div>
        <EventsList events={events} addFavourite={this.addFavourite} />
        <FavouriteList list={this.state.favList} />
      </div>
    );
  }
}

export default App;
