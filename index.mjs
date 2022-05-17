#! /usr/bin/env node

import { faces } from './faces.mjs'
import yargs from 'yargs'

const result = Math.floor(Math.random() * 6 + 1)

const { argv } = yargs(process.argv)

if (argv.int) {
  console.log(result)
} else {
  console.log(faces[result])
}
