import React from "react";
import "./style.css"

const score = 0;
const highScore = 0;
const wrong = "";

const style = {
    HeaderStyle: {
        marginTop: 0,
        height: "12vh",
        textAlign: "center",
        width: "100%",
        background: "black",
        color: "white"
    }
}
function Header(props) {
    return (
    <div style={style.HeaderStyle} className="headerDiv">
        <h2 id="instructions">Click an image to gain points, click the same image twice game over!</h2>
        <h3>Score: { score } | High Score: { highScore } | Wrong: { wrong }</h3>
    </div >
    );
}
export default Header;