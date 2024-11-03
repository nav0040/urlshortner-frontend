import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../slices/userSlice'

const Header = () => {

  const { user } = useSelector((state)=> state.user)
  const dispatch=useDispatch()

  return (
    <div className='bg-slate-900'>
      <div className="container p-2 mx-auto">
           <nav className='py-5'>
            <div className='text-base text-white flex justify-between'>
              <span>URL Shortner</span>
              {
                user && 
                <span className='cursor-pointer' onClick={()=>dispatch(logout())}>Logout</span>

              }
            </div>
           </nav>
      </div>
    </div>
  )
}

export default Header