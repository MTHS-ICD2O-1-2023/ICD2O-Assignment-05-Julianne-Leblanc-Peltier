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
  const numberOfTimes = parseInt(document.getElementById("number-of-times").value)

  for (counter = 1; counter < numberOfTimes; counter++) {
    operator *= -1
    denominator += 2
    answer += (operator * NUMERATOR) / denominator
  }

  document.getElementById("answer").innerHTML = answer
}
