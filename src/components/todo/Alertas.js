import React, {useEffect} from 'react'

const Alertas = ({type, msg, removeAlert, list}) => {
 useEffect(() =>{
    const timeout = setTimeout(() => {
        removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
 }, [removeAlert]);

 return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alertas;