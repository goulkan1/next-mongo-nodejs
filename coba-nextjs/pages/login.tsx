import React, { SyntheticEvent, useState } from 'react'
import Layout from '../layout/Layout'
import {useRouter} from 'next/router'

const login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://localhost:8000/api/login',{
        method: 'POST', 
        headers: { 'Content-Type': 'application/json'},
        credentials:'include', 
        body: JSON.stringify({email,password})})
        .then(response => console.log(response))
        .catch(error => alert('Error! ' + error.message))
        await router.push('/')
    }
    return (
        <Layout>
           <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
    <input type="email"  className="form-control" placeholder="Email address" required 
    onChange={e=> setEmail(e.target.value)}/>
   
    <input type="password"  className="form-control" placeholder="Password" required onChange={e=> setPassword(e.target.value)}/>
   
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
        </Layout>
        
    )
}

export default login
