import React, { Fragment } from "react";
import "./styles.css";
import Header from "./Layouts/Header";
import MovieList from "./Layouts/MovieList";
import Search from "./Layouts/Search";
import MovieScourceList from "./resource/resource";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Search />
      <div className="App">
        <MovieList
          movieList="MovieScourceList"
          btnName="Remove"
          list="My List"
        />
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen! Test</h2> */}
      </div>
    </Fragment>
  );
}
