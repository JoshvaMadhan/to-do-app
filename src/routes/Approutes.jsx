import {Routes,Route,Navigate} from 'react-router-dom';
import {SignIn}  from '../pages/signin.jsx';
import {SignUp}  from '../pages/signup.jsx';
import { ErrorProvider } from '../context/Errorcontext.jsx';
import { Navbar } from '../components/Navbar.jsx';
import { useAuth } from '../context/authcontext.jsx';
import Landing from '../components/Landing.jsx';
import Tasklist from '../pages/tasklist.jsx';

export const AppRoutes = ()=>{
    const {user} = useAuth();
    return(
        <>
       <Navbar/>
        <ErrorProvider>
       <Routes>

        <Route path='/login' element={!user ? <SignIn/> : <Navigate to='/tasks'/>}></Route>
        <Route path='/register' element={!user ?<SignUp/>:<Navigate to='/tasks'/>}></Route>
        <Route path='/' element={ <Landing/>}></Route>
        <Route path='/tasks' element={<Tasklist/>}></Route>
       </Routes>
       </ErrorProvider>
        </>
    )
}