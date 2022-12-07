import React, { Component } from "react";
/*
  A bare bone react application 
*/
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <p>FRAP applications are fun and powerful</p>
//       </div>
//     );
//   }
// }

/*
  Components in React application
*/
// class Thing1 extends Component {
//   render() {
//     return (
//       <div className="Thing1">
//         <h2>Stuff here</h2>
//       </div>
//     );
//   }
// }

// class Thing2 extends Component {
//   render() {
//     return (
//       <div className="Thing2">
//         <p>
//           <strong>More stuff here</strong>
//         </p>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <p>FRAP applications are fun and powerful</p>
//         <Thing1 />
//         <Thing2 />
//         <Thing2 />
//       </div>
//     );
//   }
// }

/*
  Data in components example
*/
class Thing1 extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Thing1">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

class Thing2 extends Component {
  render() {
    const { gratitude } = this.props;
    return (
      <div className="Thing2">
        <p>
          I am grateful for <strong>{gratitude}</strong>
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>FRAP applications are fun and powerul</p>
        <Thing1 title="Grateful">Today...</Thing1>
        <Thing2 gratitude="hot coffee" />
        <Thing2 gratitude="bug-free code" />
      </div>
    );
  }
}

export default App;
