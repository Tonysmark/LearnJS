# JavaScript学习笔记

> 很多东西学习以后会忘记,希望记录下来

### 1.DOM零级事件

- 先对HTML中的DOM进行查询/检索,然后再对该Dom对象绑定一个事件,只不过这个事件是匿名函数
- 说到匿名函数就不得不说`this`方法,ES5中和ES6中匿名函数的变化导致`this`的指向不同

```javascript
btn.onclick = function(){
    console.log(this) //这里的this 仅仅指的就是对btn这个DOM元素的引用
}
// ES6 
btn.onclick = ()=>{
    console.log(this) //这里的this 并不是对当前元素的引用
}
```
- 检测一个值是不是数字`isNaN(value)==false`
- 事件触发调用函数不写`()` 
    - ex: `window.onload =  Fname;`  