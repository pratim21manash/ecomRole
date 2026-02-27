import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
   const [user, setUser] = useState({
      email: '',
      Password: ''
   })

   const hanndleChange = (e) => {
      const input = e.target
      const key = input.name
      const value = input.value.trim()
      setUser({
        ...user,
        [key]: value,
      })
   }

   return (
    <div className='overflow-hidden bg-slate-300 h-screen flex items-center justify-center animate__animated animate__fadeIn'>
        <div className='bg-white p-8 w-7/12 shadow-lg rounded-lg grid grid-cols-2'>
            <img 
                src='/login.png'
                className='rounded-l-lg'
            />

            <div className='flex flex-col justify-center px-10 gap-6'>

                <h1 className='text-2xl font-semibold text-gray-600'>Admin Panel</h1>

                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-zinc-800 font-medium'>Email</label>
                        <input 
                            name='email'
                            className='border border-gray-200 rounded p-2'
                            placeholder='Enter your email'
                            onChange={hanndleChange}
                        />
                        <small className='text-rose-500 font-semibold text-sm'>This is an error</small>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-zinc-800 font-medium'>Password</label>
                        <input 
                            name='password'
                            type='password'
                            className='border border-gray-200 rounded p-2'
                            placeholder='***********'
                            onChange={hanndleChange}
                        />
                        <small className='text-rose-500 font-semibold text-sm'>This is an error</small>
                    </div>

                    <button className='p-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 active:scale-80 duration-300'>Login</button>
                </form>

                <div className='flex flex-col gap-2'>
                    <Link to="#" className='text-[#27BE8C] font-medium hover:underline'>Forgot password ?</Link>
                    <Link to="#" className='text-[#27BE8C] font-medium hover:underline'>Create an account</Link>
                </div>

                <h1>{user.email}</h1>
                 <h1>{user.Password}</h1>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin