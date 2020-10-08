import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../../main.css'

const Greeting = (props) => {
  return (
    <Jumbotron>
     <p>
      Hi {props.name}, ! I hope you have an amazing day, Regards: Vishav 🙂
    </p>
    </Jumbotron>
  );
};
export default Greeting;