// Q:实现对象 a, 使 a.x === 1 a.x === 2 a.x === 3 成立


// 1. Object.defineProperty
// const a = Object.defineProperty({}, 'x', {
//   get: function () {
//     return ++this.y
//   },
// })
// a.y = 0
// console.log(a.x)
// console.log(a.x)
// console.log(a.x)

// Q:实现 x == 1 x == 2 x == 3 成立

const x = {
  val: 0,
  toString: function () {
    this.val++
    return this.val
  }
}

console.log(x == 1)
console.log(x == 2)
console.log(x == 3)