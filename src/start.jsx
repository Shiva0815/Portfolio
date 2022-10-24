import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Loader from "./components/loader/Loader";

const Start = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            
            <Route path="/App" element={<App />} />
            <Route path="/" element={<Loader />}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Start