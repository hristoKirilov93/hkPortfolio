/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import Navbar from '../../layout/Navbar'
import '../quiz/Quiz.css'

export default class Quiz extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    form.reset();
    form.textContent = '';
    const removeWhenDone = document.querySelector('#removeWhenDone');
    removeWhenDone.remove();
    document.querySelector('.quizBody').style.height = '100%';
    db.collection('questions').get().then(snapshot => {
      snapshot.docs.forEach(change => {
        const values = Object.values(change.data());
        let correctAnswer = [];
        let result = 0;

        form.addEventListener('click', e => {
          let userAnswer = e.target.textContent;
          const label = e.path[4].className;
          document.querySelector(`.${label}`).remove();
          let questionNum = label[label.length - 1];
          if (userAnswer === correctAnswer[questionNum]) {
            result += 10;
            document.querySelector('.quizBody').style.height = '100vh';
          }
          if (form.innerText === '') {
            let html = `
            <h4 class="rounded text-center text-white font-weight-bold bg-success mt-5 p-3">
            Congrats, you have ${result} points!
            </h4>   
            `
            form.innerHTML = html;
          }
        })

        for (let i = 0; i < values.length; i++) {
          correctAnswer.push(values[i].ca);
          let html = `
          <div class="question${i}">
            <div id="questions" class="my-4 p-2 bg-danger rounded mx-3">
            <div class="d-flex justify-content-center">
                <p class="rounded bg-white py-2 px-3 text-secondary">Question ${i + 1} of 10</p>
                </div>
                <div class="form-check pt-2">
                <h5 class="text-center">${values[i].q}</h5>
                  <div class="float-left bg-white rounded px-2">
                    <label class="form-check-label" for="a${i + 10}">${values[i].ans.sa}</label>
                  </div>
                  <div class="float-right bg-white rounded px-2">
                    <label class="form-check-label" for="a${i}">${values[i].ans.fa}</label>
                  </div>
                </div>
            </div>
            </div>
            `
          form.innerHTML += html;
        }
      });
    })
  }

  render() {
    return (
      <div className="quizBody">
        <div className="cursor"></div>
        <Navbar />
        <div className="container">

          <div id="removeWhenDone" className="d-flex my-3 justify-content-center">
            <h2 className="py-2 px-4 rounded bg-white text-dark">Show me Your Skills</h2>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-center">
              <input id="button" type="submit" value="Start the Quiz!" className="btn btn-lg bg-danger font-weight-bold text-white mt-5" />
            </div>
          </form >

        </div >
      </div >
    )
  }
}