import React from 'react';
import {connect} from 'react-redux';
import {getMedian} from "../../store/actions/getMedian";
import PrimeInput from "../components/input";

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <PrimeInput />
      </main>
    )
  }
}
