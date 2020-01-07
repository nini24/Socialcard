import React from 'react';
import ReactDOM from 'react-dom';
import image from './mat.jpg';
import './index.css';


class Card extends React.Component {
  render() {
    return (
      <div className ="bodice" style = {{height:"100vh"}}>
      <div className = "contact">
        <img className =" pic" src = {image} alt ="hello" />
        
      <h1> Pico Farad </h1>
      <p className = "mail"> <b>Email</b>: Pico@yes.com</p>
      <p><b> Phone number:</b> +2349067649</p>
      <p>UI/UX Designer</p>
      <a href = "www.seee.com"> <button>Link to my portfolio</button></a>
       
      </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Card />,
  document.getElementById('root')
);
