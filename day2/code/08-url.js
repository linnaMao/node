const url = require('url')

let urlPath = url.parse('/comments?name=毛丽真&message=1232的', true)
console.log(urlPath)