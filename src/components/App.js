import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading.js'
import SubHeading from './SubHeading.js'
import InputQuery from './InputQuery.js'
import SubmitButton from './SubmitButton.js'

export default const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}


