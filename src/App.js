import React, { Component } from "react";
import logo from "./Flixie_logo-01.png";
import "./App.css";
import { Container } from "reactstrap";
import MovieList from "./MovieList";
import Spinner from "react-spinkit";
import SearchBar from '@opuscapita/react-searchbar';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import SortMov from "./SortMov";

const api_key = "13832345b924b204e79d85b719bc624f";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  async componentDidMount() {
    const timeout = ms => new Promise(res => setTimeout(res, ms));

    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1`;
    let response = await fetch(url);
    let data = await response.json();

    await timeout(4000);
    this.setState({
      movies: data.results,
      isLoading: false
    });
  }

  async handleInputChange(inputText) {
    if (inputText.length > 0) {
      try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${inputText}`;
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
          movies: data.results
        });
      } catch (err) {
        alert(err);
      }
    }
  }

  async sortByRating() {
    let data = await (await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
    )).json();
    this.setState({
      movies: data.results
    });
  }

  async sortByPop() {
    let data = await (await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    )).json();
    this.setState({
      movies: data.results
    });
  }

  async sortByRelease() {
    //hoist function?
    let data = await (await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
    )).json();
    data.results.sort(function (mov1, mov2) {
      if (mov1.release_date > mov2.release_date) return -1;
      if (mov1.release_date < mov2.release_date) return 1;
    });
    this.setState({ movies: data.results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"

          />
        </header>
        <Container>
          {this.state.isLoading ? (
            <Spinner name="line-spin-fade-loader" color="red" />
          ) : (
              <div>
                <SearchBar
                  inputClassName="search-bar" className="oc-search-bar"
                  type="text"
                  value={this.state.value}
                  onSearch={e => this.handleInputChange(e)}
                  searchPlaceHolder="Search Movie"
                />
                <div className="filter_wrapper_right">
                  <SortMov
                    sortByRating={this.sortByRating.bind(this)}
                    sortByPop={this.sortByPop.bind(this)}
                    sortByRelease={this.sortByRelease.bind(this)}
                  />
                </div>
                <MovieList movies={this.state.movies} />
              </div>
            )}
        </Container>
      </div>
    );
  }
}

export default App;
