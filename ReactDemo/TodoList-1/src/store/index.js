import { createStore, applyMiddleware,compose } from 'redux';  //引入createStore方法
import reducer from './reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer,enhancer);    //创建数据存储仓库
 
export default store;  //暴露出去  


//本可以直接这样写，但是因为createStore只能引入两个参数，已经配置了chrome插件，所以要使用增强函数
// const store = createStore(
//     reducer, 
//     applyMiddleware(thunk)
// )

