import React from 'react';
import UserGreeting from './UserGreeting';
import UserInfo from './UserInfo';
import './App.css';
function App(){
 const user = {
  name:'MANJULA',
  age:20
  };
  return(
 div className="card">
    <h2>Sharing Data Using Props</h2>
	<UserGreeting name={user.name}/>
	<UserInfo name={user.name}age={user.age}/>
   </div>
  </d <div className="app-container">
   <iv>
 );
}
export default App;