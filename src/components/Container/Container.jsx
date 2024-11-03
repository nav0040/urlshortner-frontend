import React, { useEffect, useState } from 'react'
import FormContainer from '../FormContainer/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUrls } from '../../slices/urlSlice'
import DataTable from '../DataTable/DataTable'

const Container = () => {

  const { user } = useSelector((state)=> state.user)
  const { urls } = useSelector((state)=> state.url)


  const [data, setData] = useState([])

  const dispatch = useDispatch();

  const fetchTableData = async()=>{
     dispatch(fetchUrls(user._id))
  }

  useEffect(() => {
    fetchTableData()
  }, [])
  

  return (
    <div>
      <FormContainer />
      <DataTable data={urls} />
    </div>
  )
}

export default Container