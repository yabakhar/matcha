import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

export default function ComfirmAccount() 
{
    const [searchParams] = useSearchParams();
    function postValidatEmail(token) {
        axios.post("http://localhost:1337/user/validate_email",{token}); 
    }
    useEffect(() => {
        const token = searchParams.get('token');
        if (token) postValidatEmail(token);
    }, [searchParams]);
    
    return(
        <div><p>ahahahhah</p></div>
    )
}