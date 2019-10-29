//register
import axios from 'axios';
import {GET_ERRORS} from './types';
export const registeruser = (userData)=> dispath =>{
         axios.post('/api/users/register',userData)
 .then(res=> console.log(res.data)) 
.catch(err=>
    dispatchEvent({
        type:GET_ERRORS,
        payload:err.response.data
    })
    );    
};