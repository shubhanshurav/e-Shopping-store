// src/App.js
import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import { getUserDetails } from "./services/operations/profileAPI"
// import { useDispatch, useSelector } from "react-redux"
import "./style/index.css";
import RoutesConfig from "./components/Routes";

function App() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const { user } = useSelector((state) => state.profile)

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       const token = JSON.parse(localStorage.getItem("token"))
//       dispatch(getUserDetails(token, navigate))
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
  return (
    <div>
      <RoutesConfig />
    </div>
  );
}

export default App;
