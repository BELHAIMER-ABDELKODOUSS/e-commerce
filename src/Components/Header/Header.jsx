import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.scss';
import { auth } from "../../firebase/firebase.utils"; 

const Header=({currentUser})=>(
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/'>
                Contact
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=>{auth.signOut()}}>SIGN OUT</div>:
                <Link className="option" to='/auth'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;