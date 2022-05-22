import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/auth/user", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{}</div>;
}
