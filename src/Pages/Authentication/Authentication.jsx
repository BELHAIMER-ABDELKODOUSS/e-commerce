import React from "react";

import './Authentication.scss';
import SignIn from '../../Components/Sign-In/Sign-In';
import SignUp from '../../Components/Sign-Up/SignUp';

const Authentication=()=>(
<div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
</div>
);

export default Authentication;
