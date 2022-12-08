import React, { Component } from "react";

class Collatz extends Component {
  constructor(props) {
    super(props);

    let x = this.props.number;
    let outputString = x.toString();

    while (typeof x === "number" && x !== 1) {
      if (x % 2 === 1) {
        x = 3 * x + 1;
      } else {
        x = x / 2;
      }
      outputString += " " + x;
    }
    this.outputString = outputString;
  }

  render() {
    const { number } = this.props;
    const outputString = this.outputString;

    return (
      <div className="Collatz">
        <h2>Collatz Sequence for {number}</h2>
        <p>{outputString}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    const number = 20;
    const wikilink = "https://en.wikipedia.org/wiki/Collatz_conjecture";
    return (
      <div className="App">
        <h1>Collatz Conjecture</h1>
        <p>
          The <a href={wikilink}>Collatz Conjecture</a>&nbsp; states that for
          any positive integer, <i>x</i>, repeatedly applying <i>3x + 1</i> if
          odd and <i>x/2</i> if even will eventually lead to 1.
        </p>
        <p>No one knows if this is true.</p>

        <Collatz number={number} />
      </div>
    );
  }
}

export default App;
