import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { Loader, Lock, Mail, User } from "lucide-react";

import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import Input from '../components/Input';
import axios from '../instances/config.js'
import { login } from '../slices/userSlice.js';
const Login = () => {

  const { user } = useSelector((state)=> state.user)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('/auth/login', {
                email, password
            });
            console.log(res);


           dispatch(login(res.data))
           toast.success("Login successful");
          


            navigate('/');

        } catch (error) {
            console.log(error);
            // toast.error(error.response.data.message);
            setLoading(false);


        }
            
      
  
    };
  
    useEffect(() => {
        if(user){
          navigate('/');
        }
      }, [user])


  return (
  

    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='flex flex-col justify-center items-center h-[100vh] w-full'
>


    <div className='p-8 w-[400px]  bg-white border bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl '>
        <h2 className='text-3xl  font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
        Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
            
            <Input
                icon={Mail}
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                icon={Lock}
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />



            <motion.button
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
             font-bold rounded-lg shadow-lg hover:from-green-600
             hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
             focus:ring-offset-gray-900 transition duration-200'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                disabled={loading}

            >
                {loading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Login"}
            </motion.button>
        </form>
    </div>
    <div className='px-8 py-4 bg-opacity-50 flex justify-center items-center gap-2 mt-2 rounded-md'>
        <p className='text-sm text-gray-400'>Don't have an account ? {" "}</p>
        <Link to={"/signup"} className='text-green-400 hover:underline'>
            Register
        </Link>
    </div>

</motion.div>

  )
}

export default Login