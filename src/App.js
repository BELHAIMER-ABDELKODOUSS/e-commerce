import React from 'react';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import Authentication from './Pages/Authentication/Authentication';
import {Route,Routes,Router,Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './Redux/user/user-action';
import {connect} from 'react-redux';

class App extends React.Component{
  
  unSubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
}
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/shop" element={<ShopPage/>} />
          <Route exact path="/auth" 
          element={ this.props.currentUser ? (<Navigate to='/' />) : (<Authentication/>)} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
