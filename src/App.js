import React, { Component } from "react";
import "./App.css";
import studentsArray from "./data/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: studentsArray,
      class: true,
    };
  }

  selectRandomNum = () => {
    const { students } = this.state;

    const min = 0; // 0 index
    const max = students.length;

    // Can equal min, cannot equal max
    let randomNum = Math.random() * (max - min) + min;

    // Round down so we can select the index range of the studentsArray
    let rounded = Math.floor(randomNum);

    this.selectRandomName(rounded);
  };

  selectRandomName = (randNum) => {
    this.setState({
      students: [this.state.students[randNum]],
    });
  };

  resetStudents = () => {
    this.setState({
      students: studentsArray,
    });
  };

  render() {
    const { students } = this.state;

    const displayArray = students.map((student) => {
      return `${student}`;
    });

    // Reset Button will show if one student is displaying
    const button =
      students.length > 1 ? (
        <button className = 'All-Students' onClick={() => this.selectRandomNum()}>Randomizer</button>
      ) : (
        <button className = 'One-Student' onClick={() => this.resetStudents()}>Reset</button>
      );

    return (
      <div className="App">
        <p>{`[ ${displayArray} ]`}</p>
        <div>{button}</div>
      </div>
    );
  }
}

export default App;
