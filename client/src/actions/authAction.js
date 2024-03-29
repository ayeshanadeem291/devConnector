//register
import axios from 'axios';
import {GET_ERRORS,SET_CURRENT_USER} from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode'

export const registeruser = (userData,history) => dispatch =>{
axios
.post('/api/users/register',userData)
 .then(res=> history.push('/login')) 
.catch(err =>
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
    );    
};

//login -get usertoken 
export const loginUser = (userData)=> dispatch =>{
   axios.post('/api/users/login',userData)
   .then(res=> {
  // save to local storage
  const {token} = res.data;
  //set token to localstorage
  localStorage.setItem('jwtToken',token);
  //set token to auth header
  setAuthToken(token);
  //decode token to get userdata
  const decoded = jwt_decode(token);
  //set current user
  dispatch(setCurrentUser(decoded));
   })
   .catch(err => 
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
    )
};

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type :SET_CURRENT_USER,
        payload:decoded
    }
}
//log user out
 export const logoutUser = () => dispatch =>{
     //remove token from local storage
     localStorage.removeItem('jwtToken');
     //remove auth header for future request
     setAuthToken(false);
     //set currrent user to empty object which will set isAuthenticated to false
     dispatch(setCurrentUser({}));

 }