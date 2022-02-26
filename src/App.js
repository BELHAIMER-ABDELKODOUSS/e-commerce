import React from 'react';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import ShopPage from './Pages/Shop/ShopPage';
import Authentication from './Pages/Authentication/Authentication';
import {Route,Routes,Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import {auth} from './firebase/firebase.utils';


class App extends React.Component{
  
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
  })
}
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header  currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/shop" element={<ShopPage/>} />
          <Route exact path="/auth" element={<Authentication/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
