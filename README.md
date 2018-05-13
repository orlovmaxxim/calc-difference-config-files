# Differ calc project
[![Maintainability](https://api.codeclimate.com/v1/badges/463bc0ea7c3e3fcafc8f/maintainability)](https://codeclimate.com/github/orlovmaxxim/project-lvl2-s225/maintainability)
[![Build Status](https://travis-ci.org/orlovmaxxim/project-lvl2-s225.svg?branch=master)](https://travis-ci.org/orlovmaxxim/project-lvl2-s225)

### This project is сalculation of differences between files
#### 3 formats are supported : Json, Ini and Yaml

1. Instal global project: ```npm i -g differ-calc-omxx```
2. For dif files use console commands:
  - _gendiff before.json after.json_
3. You can choose the output format (main, plain or json)
    - _gendiff --format main before.json after.json_
    - _gendiff --format plain before.json after.json_
    - _gendiff --format json before.json after.json_

### Description of output formats
| Main | Plain | Json |
| ------ | ------ | ----- |
| Output in a format like to 'git diff' | Output in flat format | Output in a Json format |

Example of Main format:
```
host: github.com
- timeout: 30
+ timeout: 10
- proxy: 123.222.22.22
+ verbose: true
```
Example of Plain Format:
```
Property 'timeout' was updated. From 30 to 10
Property 'proxy' was removed
Property 'verbose' was added with value: true
```
Example of Json Fromat:
```
[
  {
    "typer": "notChange",
    "name": "host",
    "current": "github.com"
  },
  {
    "typer": "change",
    "name": "timeout",
    "current": 30,
    "changed": 10
  },
  {
    "typer": "remote",
    "name": "proxy",
    "current": "123.222.22.22"
  },
  {
    "typer": "added",
    "name": "verbose",
    "changed": true
  }
]
```