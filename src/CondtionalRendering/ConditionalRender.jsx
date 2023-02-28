import React,{useState}from 'react'

const ConditionalRender = () => {
    let[authUser,setAuthUser]=useState(true)
    let AcceptedUser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>Logo</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ol>
            </nav>
            </>
        )
    }
    let NotAcceptedUser=()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>ForgetPassword</li>
                    <li>cancel</li>
                </ol>
            </nav>
            </>
        )
    }

  return (
    <>
    {authUser?<AcceptedUser/>:<NotAcceptedUser/>}
    </>

  )
}

export default ConditionalRender
