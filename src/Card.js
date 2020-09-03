import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import './Card.css';
export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Paper className="card">
     <h2 >Spin the wheel now to get rewarded</h2> 
      
      <p>Tap on Spin or rotate the wheel anti-clockwise
and release to start spinning </p>
    </Paper>);
  }
}
