import axios from "axios";
import React, { useEffect, useState } from "react";
import About from "./Components/About/About";

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
      {user?.map(item => {
        return (
          <About name={item?.name}/>
        )
      })}
    </>
  );
}

export default App;