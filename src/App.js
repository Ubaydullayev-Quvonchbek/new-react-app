import axios from "axios";
import React, { useEffect, useState } from "react";
import MyCard from "./Components/MyCard/MyCard";

function App() {
  const [user, setUser] = useState()
  const GetUser = (user) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setUser(res.data)
    })
  }
  useEffect(() => {
    GetUser()
  }, [])
  return (
    <>
      <MyCard />
    </>
  );
}

export default App;