import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Lain1() {

  const mode = useSelector(state => state.mode)
  return (
    <div>
      <Container className={mode}>LAIN 1</Container>
    </div>
  )
}









// ini kalo pake Class Component

// import React, { Component } from 'react'
// import { connect } from "react-redux";
// import './App.css';
// import { Container } from 'react-bootstrap';

// class Lain1 extends Component {
//   render() {
//     return (
//       <div>
//         <Container className={this.props.mode}>LAIN1</Container>
//       </div>
//     )
//   }
// }

// export const mapStateToProps = (state) => {
//   return { mode: state.mode };
// };

// export default connect(mapStateToProps)(Lain1)
