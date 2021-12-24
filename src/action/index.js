export const addItem=()=>{
    return ({
        type:'ADD_TO_CART',
    
    })
}
export const addTodo =(data)=>{
    return({
        type:'ADD_TODO',
        payload:{
            id: Math.floor(Math.random()*1000000),
            data:data
        }
    })
}
export const deleteTodo=(id)=>{
    console.log(id,'idaa')
    return({
        type:'DELETE_TODO',
        id

    })
}
export const loggedin=(data)=>{
    console.log(data)
    return({
        type:'LOG_IN',
        payload:{
            id: Math.floor(Math.random()*10),
            data:data
        }
    })
}
export const logout=()=>{
    return({
        type:'LOG_OUT',
        
    })
}

