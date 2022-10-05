import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Loader from "./components/loader/Loader";

const Start = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="*" element={<Loader />}/>
            <Route path="/App" element={<App />} />
        </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Start