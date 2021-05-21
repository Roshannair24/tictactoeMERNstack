import React from "react";

///////////////////
function clickme() {
  console.log("touch me");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: " " };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((response) => response.text())
      .then((response) => this.setState({ apiResponse: response }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <h1>yo app</h1>
        <p> {this.state.apiResponse }</p>
        <div className="position">
          <div id="container">
            <div id="0" onClick={clickme}>
              <i className="fa fa-times"></i>
            </div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="buttondashboard">
          <button className="btn btn-success">
            <i className="fa fa-play    icondim"></i>
          </button>
          <button className="btn btn-success              ">
            <span className="material-icons      icondim  ">restart_alt</span>
          </button>
        </div>
      </div>
    );
  }
}
////////////////////

// function clickme() {
//   console.log("touch me");
// }

// function App() {
//   return (
//     <div>
//       <h1>yo app</h1>

//       <div className="position">
//         <div id="container">
//           <div id="0" onClick={clickme}>
//             <i className="fa fa-times"></i>
//           </div>
//           <div></div>
//           <div></div>

//           <div></div>
//           <div></div>
//           <div></div>

//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>

//       <div className="buttondashboard">
//         <button className="btn btn-success">
//           <i className="fa fa-play    icondim"></i>
//         </button>
//         <button className="btn btn-success              ">
//           <span className="material-icons      icondim  ">restart_alt</span>
//         </button>
//       </div>
//     </div>
//   );
// }

//////////////////////

export default App;
