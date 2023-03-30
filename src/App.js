import React from "react";
import FormMain from "./Components/FormMain";
import {ReactComponent as ReactLogo} from "./logo.svg";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <ReactLogo className='logo'/>
            <h1 className="mainTitle">Inscrições para o JICs </h1>
            <h2 className="mainSubtitle">Inscrições disponíveis do dia 30/03 até o dia 02/04!</h2>
            <FormMain />
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
        </div>
    );
};

export default App;
