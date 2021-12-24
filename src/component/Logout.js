import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../action'
const Logout = () => {
    const dispatch=useDispatch()
    const datauser= useSelector((state)=>state.updateUser.user)
    return (
        <div>
        {
            datauser.map((elem)=>{
                return(
                    <>
                    <h1>hello {elem.data}</h1>
                    <button onClick={()=>dispatch(logout())}>Logout</button>
                    </>
                )
            })
        }
            
        </div>
    )
}

export default Logout
