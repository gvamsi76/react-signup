import React from 'react'
import { useForm } from './useForm'
import  validate from './validateInfo'
import './Form.css'

export const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} =useForm(submitForm,validate)
  return (
   <div className='form-content-right'>
       <form className='form'onSubmit={handleSubmit}>
            <h1>Signup below</h1>
           <div className='form-inputs'>
            <label htmlFor='username' className='form-label'>Username</label> 
                <input id='username' type='text' name='username' 
                className='form-input' placeholder='Enter user name'
                value={values.username} onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
           </div>
           <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input id='email' type='text' name='email' 
                className='form-input' placeholder='Enter user email'
                value={values.email} onChange={handleChange}/>
                 {errors.email && <p>{errors.email}</p>}
           </div>
           <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>Password </label>
                <input id='password' type='password' name='password' 
                className='form-input' placeholder='Enter user Password'
                value={values.password} onChange={handleChange}/>
                 {errors.password && <p>{errors.password}</p>}
           </div>
           <div className='form-inputs'>
            <label htmlFor='password2' className='form-label'>Conform password</label>
                <input id='password2' type='password' name='password2' 
                className='form-input' placeholder='Enter user password'
                value={values.password2} onChange={handleChange}/>
                 {errors.password2 && <p>{errors.password2}</p>}
           </div>
           <button className='form-input-btn' type='submit'>Signup</button>
           <span className='from-input-login'>Alredy have an Account? Login<a href='#'>here</a></span>
       </form>
   </div>

  )
}
