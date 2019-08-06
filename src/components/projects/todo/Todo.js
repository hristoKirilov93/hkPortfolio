/* eslint-disable no-undef */
import React, { Component } from 'react';
import Navbar from '../../layout/Navbar';
import '../todo/Todo.css';
import { Helmet } from "react-helmet";

class Todo extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const todo = document.querySelector('input').value.trim();
    const addForm = document.querySelector('form');
    const ul = document.querySelector('.todoUl');

    if (todo) {
      const html = `
        <li class="mx-auto my-2"><i class="far fa-check-circle float-right bg-success ml-2"></i>
        ${todo}
        </li>`
      ul.innerHTML += html;
      addForm.reset();
    }

    ul.addEventListener('click', e => {
      if (e.target.parentElement.localName === 'li') {
        e.target.parentElement.remove();
      }
    })
  }
  render() {
    return (
      <div className="todoBody">
        <Helmet>
          <title>Kirilov's Todo List</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Navbar />
        <div className="container">
          <div className="todoContainer mx-auto mt-5 text-center">
            <h1 className="my-4 font-weight-bold">Todo List</h1>
            <ul className="todoUl"></ul>
            <form onSubmit={this.handleSubmit} className="add-todo text-center mt-4">
              <input type="text" placeholder="Add new todo . . ." className="input-todos form-control shadow-none p-2 mx-auto" />
              <button className="my-3 font-weight-bold">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Todo;