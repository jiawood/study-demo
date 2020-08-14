//实现事件触发类
//先绑定事件，然后事件和函数一一对应，on绑定函数，然后emit触发函数
class EventEmitter {
  constructor() {
    this._events = Object.create(null)  //由事件名称映射到事件处理函数  {'eventName':[f1,f2,f3]}
  }

  //on就是把事件名和函数对应
  on(eventName, func) {
    if(eventName in this._events){
      this._events[eventName].push(func)
    }else{
      this._events[eventName] = [func]
    }
    return this  //return this 可以让该类实现链式调用  如 .on('foo',() => {console.log(1)}).on('click',() => {console.log('click)})
  }

  //emit触发事件里面对应的函数
  emit(eventName, ...eventArgs) {
    let handlers = this._events[eventName]
    if(handlers){
      for(let handler of handlers){
        handler.call(this, ...eventArgs)
      }
      return true
    }
    return false
  }

  //off删除某些事件的某些触发函数
  off(eventName,handler){
    //如果第二个参数不传的话，直接删除整个自定义事件
    if(!handler){
      delete this._events[eventName]
    }else{
      if(this._events[eventName]){
        this._events[eventName] = this._events[eventName].filter((it) => it != handler)
        if(this._events[eventName].length == 0){
          delete this._events[eventName]
        }
      }
    }
    return this
  }
}


class Readstream extends EventEmitter {

}

let rs = new Readstream()

rs.on('foo', function(a,b) {
  console.log(a,b)
})

rs.on('foo',(a,b) => {
  console.log(a+b)
})

rs.emit('foo',1,2)
