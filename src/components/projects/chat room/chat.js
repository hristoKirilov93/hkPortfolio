/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../../layout/Navbar';
import './chatroom.css'

class ChatUI extends Component {
  state = {
    nickname: '',
    message: '',
    created_at: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  componentDidMount() {
    db.collection('messages').orderBy('created_at').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type === 'added') {
          const li = document.querySelector('.mssgs ul');
          const when = dateFns.distanceInWordsToNow(change.doc.data().created_at.toDate(), { addSuffix: true });

          li.innerHTML += `
          <div class="mt-2">
          <div class="d-inline-flex">
            <span class="form-control putNameOn">${change.doc.data().nickname}</span>
            <small class="form-control px-1 py-2 when">${when}</small>
          </div>
            <li class="form-control mssgBckg">${change.doc.data().message}</li>
          </div>
          `
        }
      })
    })

  }
  handleNickname = e => {
    e.preventDefault();
    const nickname = document.querySelector('#nickname').value;
    const nicknameForm = document.querySelector('.nicknameForm');
    const showWhenNickname = document.querySelector('.showWhenNickname');

    if (nickname) {
      nicknameForm.style.display = 'none';
      showWhenNickname.style.display = 'block'
    }

  }
  handleSubmit = e => {
    e.preventDefault();
    const showWhenNickname = document.querySelector('.showWhenNickname');
    showWhenNickname.reset();

    const now = new Date();

    db.collection('messages').add({
      nickname: this.state.nickname,
      message: this.state.message,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    })

  }
  render() {
    return (
      <div className="chatBody">
        <Navbar />
        <div className="container mt-5 d-flex justify-content-center">
          <div className="chatContainer pt-4 px-3 text-center">
            <h2 className="display-4">Live Chat</h2>
            <form onSubmit={this.handleNickname} className="mt-4 nicknameForm">
              <div className="form-group d-inline-flex chooseNickname">
                <input type="text" className="form-control" id="nickname" onChange={this.handleChange} placeholder="Your nickname here" />
                <input type="submit" style={{ display: 'none' }} />
              </div>
              <p className="form-text text-info">Something cool, please</p>
            </form>

            <form onSubmit={this.handleSubmit} className="showWhenNickname mb-5" style={{ display: 'none' }}>
              <div className="form-group mssgs">
                <ul className="mb-5 pb-5 pl-0 text-left"></ul>
              </div>
              <div className="form-group mx-5">
                <input type="text" className="form-control" id="message" onChange={this.handleChange} placeholder="Write a message" />
                <input type="submit" style={{ display: 'none' }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatUI;