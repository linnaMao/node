function add(x, y, callback) {
  console.log(1)
  setTimeout(() => {
    let ret = x + y
    callback(ret)
  }, 1000);
}

add(10, 20, (ret) => {
  console.log(ret)
})
