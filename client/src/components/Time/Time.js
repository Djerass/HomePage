import React, { Component } from "react";

import styles from "./Time.module.scss";

class Time extends Component {
  constructor() {
    super();
    const timeObj = new Date();
    const hour = timeObj.getHours();
    const minute = timeObj.getMinutes();
    this.state = {
      hours: hour < 10 ? `0${hour}` : hour,
      minutes: minute < 10 ? `0${minute}` : minute
    };
  }
  componentDidMount = () => {
    this.interval = setInterval(() => {
      const timeObj = new Date();
      timeObj.getTime();
      const hour = timeObj.getHours();
      const minute = timeObj.getMinutes();
      this.setState({
        hours: hour < 10 ? `0${hour}` : hour,
        minutes: minute < 10 ? `0${minute}` : minute
      });
    }, 60000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render = () => {
    let greetings;
    if (this.state.hours >= 4 && this.state.hours < 12) {
      greetings = "Good morning";
    } else if (this.state.hours >= 12 && this.state.hours < 17) {
      greetings = "Good afternoon";
    } else {
      greetings = "Good evening";
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.time}>
          {this.state.hours}:{this.state.minutes}
        </div>
        <div className={styles.greeting}>{greetings}</div>
      </div>
    );
  };
}

export default Time;
