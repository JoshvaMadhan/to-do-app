import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Approutes.jsx";
import { Authprovider } from "./context/authcontext.jsx";
import { ThemeProvider } from "./context/themecontext.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
       <BrowserRouter>
       <Authprovider>
        <ThemeProvider>
          <ToastContainer/>
        <AppRoutes/>
        </ThemeProvider>

       </Authprovider>
       
       </BrowserRouter>
    </>
  )
}

export default App;
