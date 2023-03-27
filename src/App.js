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
            <h1 className="mainTitle">Inscrições para o jics </h1>
            <h2 className="mainSubtitle">inscrições do dia ** até o dia **</h2>
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
