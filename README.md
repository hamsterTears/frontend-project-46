### Hexlet tests and linter status:
[![Actions Status](https://github.com/hamsterTears/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/hamsterTears/frontend-project-46/actions)
<a href="https://codeclimate.com/github/hamsterTears/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/77a302ea4166a35c8856/maintainability" /></a>
<a href="https://codeclimate.com/github/hamsterTears/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/77a302ea4166a35c8856/test_coverage" /></a>

   Difference Calculator.

A difference calculator is a program that determines the difference between two data structures.

Utility features:

    - Support for different input formats: yaml, json
    - Report generation in the form of plain text, stylish and json

For help type: gendiff -h


Installation:

#clone this repository on your machine with SSH key

  $ git@github.com:hamsterTears/frontend-project-46.git

#go to directory where you downloaded it

  $ cd directory-name

# run the one of these command to install all necessary dependencies

  $ make install
or
  $ npm ci

# this command is responsible for linking commands from package.json to "./bin" directory

$npm link

#run utility
  $ node bin/gendiff.js -f <format> <filepath1> <filepath2>

#run help 
  $ make help





Compares and shows differences between 2 JSON files:

<a href="https://asciinema.org/a/568233" target="_blank"><img src="https://asciinema.org/a/568233.svg" /></a>
https://asciinema.org/a/568233


Compares and shows differences between 2 YAML files:

<a href="https://asciinema.org/a/569678" target="_blank"><img src="https://asciinema.org/a/569678.svg" /></a>
https://asciinema.org/a/569678


Compares and shows differences in Stylish-format between 2 YAML or JSON files:

<a href="https://asciinema.org/a/570423" target="_blank"><img src="https://asciinema.org/a/570423.svg" /></a>
https://asciinema.org/a/570423

Compares and shows differences in Plain-format between 2 YAML or JSON files:

<a href="https://asciinema.org/a/571929" target="_blank"><img src="https://asciinema.org/a/571929.svg" /></a>
https://asciinema.org/a/571929

Compares and shows differences in json-format between 2 YAML or JSON files:

<a href="https://asciinema.org/a/571997" target="_blank"><img src="https://asciinema.org/a/571997.svg" /></a>
https://asciinema.org/a/571997