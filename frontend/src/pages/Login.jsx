import React from 'react'

const Login = () => {

  const [state,setState]=useState('Sign Up')

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const onSubmitHandler=async (event)=>{
    event.preventDefault()
  }

  return (
    <form classname='min-h-[80vh] flex items-center'>
        <div classname='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc -600 text-sm shadow-lg'>
          <p classname='text-2xl font-semibold'>{state==='Sign Up' ? "Create Acoount":"Login"}</p>
          <p>Please{state==='Sign Up' ? "sign up":"log in"}Book appointment</p>
          <div classname='w-full'>
            <p>Full Name</p>
            <input classname='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>
          <div classname='w-full'>
            <p>Email</p>
            <input classname='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
          </div>
          <div classname='w-full'>
            <p>Password</p>
            <input classname='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setPassword(e.target.name)} value={password} required/>
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state==='Sign Up' ? "Create Acoount":"Login"}</button>
          {
            state==="Sign Up"
            ?<p>Already have an account?<span className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create and new account?<span className='text-primary underline cursor-pointer'>Click here</span></p>
          }
        </div>
    </form>
  )
}

export default Login