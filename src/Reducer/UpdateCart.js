import { addItem,addTodo } from "../action";
 const initialstate=0;
export const updatecart=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD_TO_CART': return state+1;
        default: return state;
    }
}
const initialData={
   list: []
}
export const updatelist =(state=initialData,action)=>{
    switch(action.type){
        case 'ADD_TODO': 
            const {id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
            ]
            }
        case 'DELETE_TODO':
            // const {id,data}=action.payload;
            const newList=state.list.filter((elem)=>elem.id !== action.id)
            return{
                ...state,
                list:newList
            }
        default : return state;
    }
} 

const initialUser={
    user:[]
}
export const updateUser=(state=initialUser,action)=>{
    switch(action.type){
        case 'LOG_IN':
          const {id,data}=action.payload;
          return{
            ...state,
        user:[
                ...state.user,
                {
                    id:id,
                    data:data
                }
        ]
        
        }
        case 'LOG_OUT': return {
            ...state,
            user:[]
        }
        default : return state;
    }
}