import { CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes'

const defaultState = {
    inputValue:"今天要做些什么",
    list:[]
} //默认数据

export default (state = defaultState, action)=>{   //方法函数
    console.log(state,action)
    if (action.type === CHANGE_INPUT){
        //reducer里只能接收state，不能改变state， 所以要声明一个新变量，然后用return返回去
        let newState = JSON.parse(JSON.stringify(state)); //深拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list
        return newState;
    }
    return state 
}