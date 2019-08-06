/* eslint-disable no-eval */
/* eslint-disable no-undef */
import React, { Component } from "react";
import Navbar from '../../layout/Navbar';
import '../calculator/Calc.css';
import { Helmet } from 'react-helmet';

export default class Calc extends Component {

  componentDidMount() {

    const form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
    })

    document.addEventListener('keydown', n => {
      const stringChar = n.key;

      switch (stringChar) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '-':
        case '+':
        case '/':
        case '*':
        case '.':
          this.insert(stringChar);
          break;
        case 'Enter':
          this.equal();
          break;
        case 'Delete':
          this.back();
          break;
        default:
          break;
      }
    });

    document.addEventListener('click', e => {
      const num = e.target.value;

      switch (num) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '-':
        case '+':
        case '/':
        case '*':
        case '.':
          this.insert(num);
          break;
        case '=':
          this.equal();
          break;
        case '<':
          this.back();
          break;
        case 'C':
        case 'CE':
          this.clean();
          break;
        default:
          break;
      }
    })
  }

  insert(num) {
    const textview = document.querySelector('.textview');
    const lastChar = textview.value;
    if (lastChar) {
      try {
        eval(lastChar);
        if (this.lastIndexNotNumberCharInString(lastChar) < lastChar.lastIndexOf('.') && num === '.') {
          return '';
        }
      } catch (err) {
        if (isNaN(num)) {
          return '';
        }
      }
    } else {
      if (isNaN(num)) {
        return '';
      }
    }
    textview.value += num;
  };

  lastIndexNotNumberCharInString(char) {
    var j = -1;
    for (var i = 0; i < char.length; i++) {
      if (isNaN(char.charAt(i)) && char.charAt(i) !== '.') {
        j = i;
      }
    }
    return j;
  }

  equal() {
    const textview = document.querySelector('.textview');
    if (textview.value !== null) {
      const result = textview.value;
      textview.value = eval(result);
      return '';
    }
  }

  clean() {
    const textview = document.querySelector('.textview');
    const form = document.querySelector('form');

    if (textview.value) {
      form.reset();
      return '';
    }
    return '';
  }

  back() {
    const textview = document.querySelector('.textview');
    const result = textview.value;
    textview.value = result.substring(0, result.length - 1);
    return '';
  }

  render() {
    return (
      <div className="calcBody">
        <Helmet>
          <title>Kirilov's Calculator</title>
        </Helmet>
        <Navbar />
        <div className="calc container">
          <div className="calc d-flex justify-content-center mt-2 mb-3">
            <form className="calc mt-5 text-center p-3">
              <div className="calc form-group">
                <input className="calc textview p-2" name="textview" readOnly />
              </div>
              <div className="calc form-group mb-0">
                <button className="calc btn btn-info" value="<" onClick={this.insert}><span>{'<'}</span></button>
                <button className="calc btn btn-info" value="CE" onClick={this.insert}>CE</button>
                <button className="calc btn btn-info" value="C" onClick={this.insert}>C</button>
                <button className="calc btn btn-info" value="/" onClick={this.insert}>/</button>
              </div>
              <div className="calc form-group mb-0">
                <button className="calc btn btn-secondary" value="7" onClick={this.insert}>7</button>
                <button className="calc btn btn-secondary" value="8" onClick={this.insert}>8</button>
                <button className="calc btn btn-secondary" value="9" onClick={this.insert}>9</button>
                <button className="calc btn btn-info" value="*" onClick={this.insert}>*</button>
              </div>
              <div className="calc form-group mb-0">
                <button className="calc btn btn-secondary" value="4" onClick={this.insert}>4</button>
                <button className="calc btn btn-secondary" value="5" onClick={this.insert}>5</button>
                <button className="calc btn btn-secondary" value="6" onClick={this.insert}>6</button>
                <button className="calc btn btn-info" value="-" onClick={this.insert}>-</button>
              </div>
              <div className="calc form-group mb-0">
                <button className="calc btn btn-secondary" value="1" onClick={this.insert}>1</button>
                <button className="calc btn btn-secondary" value="2" onClick={this.insert}>2</button>
                <button className="calc btn btn-secondary" value="3" onClick={this.insert}>3</button>
                <button className="calc btn btn-info" value="+" onClick={this.insert}>+</button>
              </div>
              <div className="calc form-group mb-1">
                <button className="calc btn btn-secondary zero" value="0" onClick={this.insert}>0</button>
                <button className="calc btn btn-secondary" value="." onClick={this.insert}>.</button>
                <button className="calc btn btn-info" value="=" onClick={this.insert}>=</button>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}