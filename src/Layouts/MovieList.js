import React from "react";
import SingleMovie from "./SingleMovie";
import MovieSourceList from "../resource/resource";

class MovieList extends React.Component {
  render() {
    const name = this.props.btnName;
    const listName = this.props.list;
    const list = MovieSourceList.mylist; //this.props.MovieList[this.props.movieList];

    const clickName =
      name === "Remove" ? this.props.removeMovie : this.props.addMovie;

    return (
      <div>
        <h2 className="title">{listName}</h2>
        <ul className="card-content">
          {list.map(item => {
            return (
              <li key={item.id}>
                <SingleMovie item={item} button={name} onClick={clickName} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MovieList;
