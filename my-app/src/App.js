import './assets/css/style.css';
import SignIn  from './SignIn';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingUp from './SignUp';
import Bookings from './Bookings';
import Trip from './Trip';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SingUp/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/trip' element={<Trip/>}/>
      </Routes>
  </div>
  );
}


export default App;
