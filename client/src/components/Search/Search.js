import React, { Component } from "react";

import style from "./Search.module.scss";

const googleURI = "https://www.google.com/search?q=";
const bingURI = "https://www.bing.com/search?q=";
const duckDuckGoURI = "https://duckduckgo.com/?q=";

// const bingIco = `<i className="fab fa-y-combinator" /> Bing`;
// const googleICO = `<i className="fab fa-google" /> Google`;
// const duckIco = `<i className="fab fa-telegram-plane" /> Duck`;

export default class Search extends Component {
  state = {
    searchInput: "",
    engineSelect: duckDuckGoURI
  };

  formChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    window.location.href = `${this.state.engineSelect}${this.state.searchInput}`;
  };

  render = () => {
    return (
      <form
        className={style.form}
        onSubmit={this.formSubmitHandler}
        style={{ color: "white" }}
      >
        <div className={style.formGroup}>
          <label>
            <i className="fas fa-search" />
          </label>
          <input
            type="text"
            placeholder="Search"
            onChange={this.formChangeHandler}
            name="searchInput"
          />
          <select
            style={{ fontFamily: "Arial, FontAwesome" }}
            value={this.state.engineSelect}
            onChange={this.formChangeHandler}
            name="engineSelect"
          >
            <option value={googleURI}>Google</option>
            <option value={bingURI}>Bing</option>
            <option value={duckDuckGoURI}>DuckDuckGo</option>
          </select>
        </div>
      </form>
    );
  };
}
