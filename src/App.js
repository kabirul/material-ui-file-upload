import React from "react";
import "./style/global.css";
import { Typography } from "@material-ui/core";
import UploadFiles from "./components/UploadFiles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container" style={{ width: "600px", margin: "auto" }}>
      <div className="mg20">      
          <a href="https://github.com/kabirul">
			    <img src="https://amicacs.com/assets/images/logo.png" className="imground" alt="" /> 
			  </a> 	
         </div>
<Typography variant="h6">Material UI File Upload</Typography>
      <UploadFiles />
	  <Footer />
    </div>
  );
}

export default App;
