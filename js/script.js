// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function myButtonClicked() {
  const NUMERATOR = 4
  let denomenator = 1
  let counter = 0
  let answer = null
  let numberOfTimes = parseInt(document.getElementById("number-of-times").value)

  while (true) {
    if (numberOfTimes = counter) {
      break
    }
    denomenator += 2
    answer = NUMERATOR / denomenator
    answer *= -1

    counter += 1
  }
}