// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  const NUMERATOR = 4
  let denominator = 1
  let answer = NUMERATOR / denominator
  let operator = 1
  let output = " 4 / 1"
  const numberOfTimes = parseInt(document.getElementById("number-of-times").value)
  document.getElementById("output").innerHTML = null
  document.getElementById("answer").innerHTML = null

  for (counter = 1; counter < numberOfTimes; counter++) {
    operator *= -1
    denominator += 2
    answer += (operator * NUMERATOR) / denominator
    if (operator < 0) {
      output += " - " + "(" + NUMERATOR + " / " + denominator + ")"
    } else {
      output += " + " + "(" + NUMERATOR + " / " + denominator + ")"
    }
  }

  document.getElementById("output").innerHTML = output
  document.getElementById("answer").innerHTML = " = " + answer
}
