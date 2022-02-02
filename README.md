# Professional README Generator

Version 1.0

Deployment Date: February 2, 2022

Source Code: https://github.com/jehulie/Readme-Generator

---

## Overview:

This is a command-line interface for generating a high quality, professional README file by prompting the user to answer a series of questions through the CLI.

---

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Development](#development)

---

## Installation:

To install this application, the user should clone the repository from the GitHub link listed above. Then install node with the inquirer package by opening the terminal and entering the command, npm install inquirer.

---

## Usage:

From your CLI, run the command, node index.js, to initate a series of prompts for generating the content to populate different README sections. Your answers to each question will populate each section dynamically and automatically create the table of contents for your README file.

![A user enters input in command line in response to prompts.](./Main/assets/demo-readme-cli.gif)

When the user has answered all prompts, the responses are converted to markdown format and the fs.write package will create the README.md file automatically.

![A demo of generated README.md file.](./Main/assets/demo-readme-samplefile.gif)

Click the link below for a video demo of the entire process:<br>
https://watch.screencastify.com/v/qJq9TFk66oYyhawzcvdx

---

## Development:

Original Contributor: Julie Chu

Built with: Node.js - inquirer and fs.write packages, Javascript