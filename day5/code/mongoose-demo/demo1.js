const mongoose = require('mongoose');

// 连接mongodb数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// 创建一个模型
// 就是在设计数据库
// MongoDB是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose这个包就可以让你的设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

for(let i=0; i<100; i++) {
  // 实例化一个Cat
  const kitty = new Cat({ name: 'Zildjian' + i });

  // 持久化保存kitty实例
  kitty.save().then(() => console.log('meow'));
}