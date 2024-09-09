import React from "react";
import "./Styles/Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useContextHook } from "../Providers/ContextProvider";

const Home = () => {
  const buttonStyles = {
    height: "150px",
  };
  const { userData, schoolName, isLogin } = useContextHook();
  const navigate = useNavigate();

  return <></>;
};

export default Home;
