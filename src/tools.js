const compose = (...fns) => x =>
  fns.reduceRight((acc, fn) => fn(acc), x)

const exclaim = x => `${x}!`
const repeat = x => `${x} ${x}`
const map = cb => array => array.map(cb)
const split = sep => str => str.split(sep)
const join = sep => str => str.join(sep)
const uppercase = x => x.toUpperCase()
const lowerCase = str => str.toLowerCase()
const trace = message => x => (console.log(message, x), x)