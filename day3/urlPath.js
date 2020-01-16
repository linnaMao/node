let url = '/comments?name=jack&message=hello'
let url1 = url.split('?')
let url2 = url1[1].split('&')
url2.forEach(item => {
  console.log(item.split('='))
})