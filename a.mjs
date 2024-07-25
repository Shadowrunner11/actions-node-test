import { a } from './b.mjs'
import { readdirSync } from 'node:fs'
console.log(a())

console.log('redingg', readdirSync('.', {
    encoding: 'utf8'
}))

console.log(readdirSync(process.argv[1], {
    encoding: 'utf8'
}))

console.log({args: process.argv})

