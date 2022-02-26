import React from "react";
import './Sign-In.scss';
import InputForm from '../Input-Form/InputForm';
import CustomButton from '../Custom-Button/Custom-Button';
import {signInWithGoogle} from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange=(event)=>{
        const {value,name}=event.target;
        
        this.setState({[name]:value},()=>{console.log(this.state.email)})
    }

    render() {
        return (
             <div className="sign-in">
                 <h2 className="title">I already have an account</h2>
                 <span>Sign in with your email and password</span> 

                 <form action="" onSubmit={this.handleSubmit}>
                    <InputForm 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        name='email' 
                        label='Email'
                        required 
                    />
                    <InputForm 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        name='password' 
                        label='Password' 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form" >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIN >Sign In With Google</CustomButton>
                    </div>
                 </form>
             </div>
        )
    }
}

export default SignIn
