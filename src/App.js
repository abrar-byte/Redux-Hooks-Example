import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Lain1 from "./Lain1";
import Lain2 from "./Lain2";

export default function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);
  console.log(mode);
  return (
    <div className="text-center">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Button
            onClick={() => dispatch({ type: "gantiMode", mode: "bg-warning" })}
            className="bg-warning text-dark"
          >
            YELLOW
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            onClick={() => dispatch({ type: "gantiMode", mode: "bg-light" })}
            className="bg-light text-dark"

          >
           LIGHT
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            onClick={() => dispatch({ type: "gantiMode", mode: "bg-primary" })}
            className="bg-primary text-dark"

          >
           PRIMARY
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            onClick={() => dispatch({ type: "gantiMode", mode: "bg-danger" })}
            className="bg-danger text-dark"
            
          >
           DANGER
          </Button>
        </Nav.Item>
      </Nav>
      <br/>

      <Container className={mode}>App</Container>
      <br />
      <Lain1 />
      <br />
      <Lain2 />
    </div>
  );
}










// ini kalo pake Class Component

// import { connect } from "react-redux";
// import './App.css';
// import { Container } from 'react-bootstrap';

// import React, { Component } from 'react'
// import Lain1 from "./Lain1";
// import Lain2 from "./Lain2";

// class App extends Component {
//   ganti = (p) => {
//     this.props.gantiMode(p)

//   }
//   render() {
//     console.log(this.props.gantiMode);
//     return (
//       <div>
//         <button className="bg-warning" onClick={() => this.ganti("bg-warning")}>kuning</button>
//         <button className="bg-light" onClick={() => this.ganti("bg-light")}>putih</button>
//         <button className="bg-primary" onClick={() => this.ganti("bg-primary")}>biru</button>
//         <button className="bg-danger" onClick={() => this.ganti("bg-danger")}>merah</button>
//         <button className="bg-success" onClick={() => this.ganti("bg-success")}>hijau</button>
//         <Container className={this.props.mode} >APP
//         </Container>
//         <br />
//         <Lain1 />
//         <br />
//         <Lain2 />
//       </div>
//     )
//   }
// }

// export const mapStateToProps = (state) => {
//   return { mode: state.mode };
// };
// // state jadikan props

// const mapDispatchToProps = (dispatch) => {
//   return {
//     gantiMode: (p) => dispatch({ type: "gantiMode", mode: p }),

//   };
// };
// // setState jadikan props
// // label dari type nanti digunakan untuk di store, jadi store harus disamakan dengan yang di sini
// export default connect(mapStateToProps, mapDispatchToProps)(App)

