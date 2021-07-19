import vnode from "./vnode.js";

//低配版h函数 必须接受3个参数 缺一不可
//相当于它的重载功能较弱
//也就是说 调用的时候形态必须是下面的三种之一
//h('div',{},'test')
//h('div',{},[])
//h('div',{},h())
export default function (a, b, c) {
  //检查参数个数
  if (arguments.length != 3) {
    throw new Error("sorry");
  }
  //检查c的类型
}
