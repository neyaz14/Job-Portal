import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  withCredentials: true
});

const useAxiosSecure = () => {

  const { signout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(res => {
      return res;
    }, err => {
      // console.log("error caught in interceptor", err);
      if (err.status === 401 || err.status === 403) {
        console.log('Need to be loggedOut ');
        signout()
          .then(() => {
            // alert('User logged out ');
            navigate('/login')
          })
          .catch(err => { console.log(err) })
      }
      return Promise.reject(err)
    })
  }, [])
  return instance;
};

export default useAxiosSecure;