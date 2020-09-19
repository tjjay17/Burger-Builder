import React, {useState,useEffect} from 'react';
import MessageBoard from '../Components/UI/MessageBoard/MessageBoard';
import Aux from './Auxiliary';


const errorHandler = (Component,axios) => {
    return (props) => {
        const [error, setError] = useState({ error:null});

       // useEffect(() => {
            let reqInt = axios.interceptors.request.use(req => {
                setError({ error: null });
                return req;
            });

            let resInt = axios.interceptors.response.use(res => res, error => {
                console.log(JSON.stringify(error));
                setError({ error: error });
                return error;
            });
       // });

        useEffect(
            () => {
                axios.interceptors.request.eject(reqInt);
                axios.interceptors.response.eject(resInt);
            }
        );

        function clearMessage() {
            setError({ error: null });
        }
        return (
            <Aux>
                {error.error ? < MessageBoard show cancel={clearMessage}> {error.error.stack}</MessageBoard> : null}
                <Component {...props} />
            </Aux>
        );
    }
}

export default errorHandler;