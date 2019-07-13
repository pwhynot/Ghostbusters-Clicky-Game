import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
      
      <img alt={props.name} src={props.image} 
      value= {props.id} 
      onClick= {() => props.handleClick(props.id)}
      />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          
        </ul>
        
      </div>
    </div>
  );
}

export default Card;