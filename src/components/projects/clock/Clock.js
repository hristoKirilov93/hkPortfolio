/* eslint-disable no-undef */
import React, { Component } from 'react';
import Navbar from '../../layout/Navbar';
import '../clock/Clock.css'
import { Helmet } from "react-helmet";


class Clock extends Component {
  componentDidMount() {
    const tick = () => {
      const clock = document.querySelector('.clock');
      const now = new Date();

      const addZero = i => {
        if (i < 10) {
          i = '0' + i;
        }
        return i;
      }

      const h = addZero(now.getHours());
      const m = addZero(now.getMinutes());
      const s = addZero(now.getSeconds().toString());

      const html = `${h}:${m}:${s}`;
      if (clock !== null) {
        clock.innerHTML = html;
      }
    }
    setInterval(tick, 1000);
  }
  render() {
    return (
      <div className="clockBody">
        <Helmet>
          <title>Kirilov's Clock</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Navbar />
        <div id="hello" className="container text-center mt-5">
          <div className="clockContainer">
            <h1 className="font-weight-bold pt-4">THE TIME IS</h1>
            <div className="clock"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;