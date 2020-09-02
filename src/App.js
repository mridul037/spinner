import React from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './Circle';
import Card from './Card';
export class App extends React.Component {

  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  }
  render() {
  return (
    <div className="App">
      <Circle items={this.places}/>
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <Card></Card>
    </div>
  );
  }
}

export default App;
