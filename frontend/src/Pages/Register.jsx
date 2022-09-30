import {useState,useEffect} from 'react'
import {FaUser} from 'react-icons/fa'


const Register = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        password2:"",
    })
    const {name,email,password,password2}=formData
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
           [e.target.name]:e.target.value
        }))

    }
    const onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <>
    <section className='heading'>
            <h1><FaUser/> Register</h1>
            <p>Please create an account</p>
    </section>
    <section>
        <form onSubmit={onSubmit}>
            <div className='form-group'><input type="text" placeholder='Enter your name' value={name} className='form-control' id='name' name='name'  onChange={onChange}/></div>
            <div className='form-group'><input type="email" placeholder='Enter your email' value={email} className='form-control' id='email' name='email' /></div>

            <div className='form-group'> <input type="password" placeholder='Enter your password' value={password} id='password' className='form-control' name='password' /></div>
            <div className='form-group'><input type="password" placeholder='Confirm your password' value={password2} id='password2'className='form-control' name='password2' /></div>
            <div className='form-group'><button type='submit' className='btn btn-block'>Register</button></div>
        </form>
    </section>
        </>
  )
}

export default Register