import React, { Component } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import './App.css';

const api_key = "13832345b924b204e79d85b719bc624f";

export default class SortMov extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      movies: [],
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <Dropdown className="dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle outline color="secondary" size="sm">
            SORT MOVIE
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={() => this.props.sortByRating()}>
              Rating
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.props.sortByPop()}>
              Popularity
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.props.sortByRelease()}>
              Release Date
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Button className="btn-refresh" size="sm" onClick={() => window.location.reload()}><i className="fas fa-sync"></i></Button>
      </div>
    );
  }
}


