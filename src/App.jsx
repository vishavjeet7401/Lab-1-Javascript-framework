import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import Greeting from './components/Greeting';
import './main.css';


const App = () => {
  const [name, setName] = useState("");
  return (
    <Container>
<input
    onChange={({target: {value}}) => setName(value)}
    placeholder="Enter your name"
  />
  <Greeting name={name}/>    </Container>
  );
};

export default App;