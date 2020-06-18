import React, { Component } from "react";
import "./App.css";
import studentsArray from "./data/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: studentsArray,
      display: "Ben', 'Corey', 'Chase', 'Daniel', 'Lespy', 'Gibbons', 'Jason",
      class: true
    };
  }

  selectRandomNum = () => {
    const { students } = this.state;
    const min = 0; // 0 index
    const max = students.length;

    //Can equal min, cannot equal max
    let randomNum = Math.random() * (max - min) + min;

    // round down so we can select the index range of the studentsArray
    let rounded = Math.floor(randomNum);
    
    this.selectRandomName(rounded)
    
  };

  selectRandomName = (randNum) => {
    this.setState({
      display: this.state.students[randNum],
    });
  };

  render() {
    let text_class = this.state.class ? "fadeOut" : "Name"

    return (
      <div className="App">
        <p className={text_class}>{`[ '${this.state.display}' ]`}</p>
        <div>
          <button onClick={() => this.selectRandomNum()}>RANDOMIZER</button>
        </div>
      </div>
    );
  }
}

export default App;
