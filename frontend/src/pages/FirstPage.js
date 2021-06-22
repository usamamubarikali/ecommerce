import React, { useContext } from 'react';
import { User } from "../context/Auth/UserContext";


const FirstPage = () => {
    const user = useContext(User)
    
    return (
        <div>
            FirstPage
        </div>
    )
}

export default FirstPage;
