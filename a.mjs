import { a } from './b.mjs'
import { readdirSync } from 'node:fs'
console.log(a())

console.log(readdirSync('.', {
    encoding: 'utf-8'
}))

console.log(readdirSync(process.argv[1], {
    encoding: '.'
}))

console.log({args: process.argv})

