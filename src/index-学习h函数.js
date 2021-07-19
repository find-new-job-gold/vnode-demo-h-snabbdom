import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
  } from "snabbdom";
  
  const patch = init([classModule, propsModule, styleModule, eventListenersModule]);
  var myVnode_first = h('a',{props:{'href': 'www.baidu.com'}},'baidu');
  console.log(myVnode_first);

  const myVnode2 = h('div',{},'2');
  const container = document.getElementById('container');
  patch(container, myVnode2);