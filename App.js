import {Route,Routes} from 'react-router-dom';
import FirstView from './FirstView/FirstView';
import SignIn from './signIn/signin';
import Home from './home/Home';
const App=()=>{
return <Routes>
  <Route path="/" element={<FirstView/>}/>
 <Route path="/login" element={<SignIn/>}/>
 <Route path="/home" element={<Home/>}/>

</Routes>

};
export default App;
