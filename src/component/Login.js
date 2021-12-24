import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loggedin } from '../action'
const Login = () => {
    const dataInfo = useSelector((state)=>state.updateUser.user)

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    function formHandle(e){
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={formHandle}>
            <h1>Login here</h1>
                <input type='text'
                    placeholder='enter username'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input type='text'
                    placeholder='enter password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button onClick={()=>dispatch(loggedin(username),setUsername(''),setPassword(''))}>Login</button>
            </form>
            {/* {
        dataInfo.map((elem)=>{
          return (
            <>
            <h3 key={elem.id} style={{color:'red'}}>{elem.data}</h3>
            
            </>
          )
        })
      } */}
        </div>
    )
}

export default Login
