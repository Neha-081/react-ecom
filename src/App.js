import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfile} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

unsubscribeFromAuth=null;


  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
   if(userAuth){
    const userRef=await createUserProfile(userAuth)  //check if our database has updated at that reference with any new data.
    userRef.onSnapshot(snapShot=>{
   this.setState({
     currentUser:{
       id:snapShot.id,
       ...snapShot.data()
     }
   })
  //  console.log(this.state);   //object of current user

    }) ;

   
    }
    this.setState({currentUser:userAuth});   //currentuser to null
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }




  render(){
    return (
      <div>
    {/* header will be always present and rendered */}
        <Header  />  
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  
}

export default App;


