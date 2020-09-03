import React from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './Circle';
import Card from './Card';
export class App extends React.Component {

  constructor() {
    super();
    this.places = ['Better luck next time!', '2X Savings', '₹100 Cashback', '₹20 💸', '₹50 💸', '1.5X Savings','2X Savings','₹50 💸'];
  }
  render() {
  return (
    <div className="App">
      <Circle items={this.places}/>
      <div className="logo">
      <img src={logo} alt="Logo" />
     
      </div>
      <Card/>
     <p> Have a question? <a className="link">Get help</a></p>
    </div>
  );
  }
}

export default App;
