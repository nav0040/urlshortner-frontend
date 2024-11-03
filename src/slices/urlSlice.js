import { createSlice } from '@reduxjs/toolkit';
import axios from '../instances/config';
import toast from 'react-hot-toast';

const initialState = {
    urls: [],
  };

  const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
      setUrls(state, action) {
        state.urls = action.payload;
      },
      addUrl(state, action) {
        state.urls.push(action.payload);
      },
    
    },
  });


export const { setUrls, addUrl, setError } = urlSlice.actions;

export default urlSlice.reducer;


export const fetchUrls = (userId) => async (dispatch, getState) => {
    const token = getState().user.user.token;

    // console.log(token);
    
    try {
      const response = await axios.post('/url/all',{userId}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setUrls(response.data));
    console.log(response);
    
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };


  export const createShortUrl = (urlData) => async (dispatch, getState) => {
    const token = getState().user.user.token;
    // console.log(token);
    
    try {
      const response = await axios.post('/url/shorten', urlData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(addUrl(response.data));
    console.log(response);
    toast.success('URL shortened successfully');

    
    } catch (error) {
       console.log(error.response.data.message);
       toast.error(error.response.data.message);
       
    }
  };