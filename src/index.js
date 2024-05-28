import React from "react"
import { createRoot } from "react-dom/client";
import Start from './start'
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
//   <React.StrictMode>
    <Start />
//   </React.StrictMode>
);