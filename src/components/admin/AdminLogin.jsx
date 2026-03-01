import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const schema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email")
    .test("is-gmail", "Only gmail id is allowed", (values) => {
        values && values.toLowerCase().endsWith("gmail.com")
    }),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Atleast one uppercase required")
    .matches(/[a-z]/, "atleast one lowercase required")
    .matches(/[0-9]/, "Atleast one number required")
    .matches(/[^A-Za-z0-9]/, "At least one special character required")
})

const AdminLogin = () => {

  const login = (values) => {
    alert("Login Successful")
    console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: login
  })

  return (
    <div className='overflow-hidden bg-slate-300 h-screen flex items-center justify-center animate__animated animate__fadeIn'>
      <div className='bg-white p-8 w-7/12 shadow-lg rounded-lg grid grid-cols-2'>
        
        <img 
          src='/login.png'
          alt="login"
          className='rounded-l-lg'
        />

        <div className='flex flex-col justify-center px-10 gap-6'>

          <h1 className='text-2xl font-semibold text-gray-600'>
            Admin Panel
          </h1>

          <form 
            className='flex flex-col gap-4'
            onSubmit={formik.handleSubmit}
          >

            {/* Email Field */}
            <div className='flex flex-col gap-1'>
              <label className='text-zinc-800 font-medium'>
                Email
              </label>
              <input 
                name='email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-gray-200 rounded p-2'
                placeholder='Enter your email'
              />

              {formik.touched.email && formik.errors.email && (
                <small className='text-rose-500 font-semibold text-sm'>
                  {formik.errors.email}
                </small>
              )}
            </div>

            {/* Password Field */}
            <div className='flex flex-col gap-1'>
              <label className='text-zinc-800 font-medium'>
                Password
              </label>
              <input 
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='border border-gray-200 rounded p-2'
                placeholder='***********'
              />

              {formik.touched.password && formik.errors.password && (
                <small className='text-rose-500 font-semibold text-sm'>
                  {formik.errors.password}
                </small>
              )}
            </div>

            <button 
              type="submit"
              className='p-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 active:scale-95 duration-200'
            >
              Login
            </button>

          </form>

          <div className='flex flex-col gap-2'>
            <Link 
              to="#" 
              className='text-[#27BE8C] font-medium hover:underline'
            >
              Forgot password?
            </Link>
            <Link 
              to="#" 
              className='text-[#27BE8C] font-medium hover:underline'
            >
              Create an account
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminLogin