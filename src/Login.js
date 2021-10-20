 /* eslint-disable */ 
import React from "react";
import Sawo from "sawo";
require('dotenv').config()
function Login() { 

React.useEffect(() => {
  var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: process.env.REACT_APP_API_SAWO,
      onSuccess: (payload) => {
        // console.log(payload); 
        setPayload(payload)
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
 }, []); 
 return (
         <div
          id="sawo-container"
          style={{ height: "300px", width: "300px" }}
        ></div>
  );
}
export default Login;