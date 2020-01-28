let users = [
  {id: 1, name: '张三'},
  {id: 2, name: '张三'},
  {id: 3, name: '张三'},
  {id: 4, name: '张三'}
]


Array.prototype.myFind = function(func) {
  for(let i=0; i<this.length; i++) {
    if (func(this[i], i)) {
      return this[i]
    }
    // console.log(this.length)
  }
}

let ret = users.myFind(function(item, index) {
  return item.id === 4
})

console.log(ret)

// let ret = users.myFind((item, index) => {
//   return item.id === 1
// })

// console.log(ret)