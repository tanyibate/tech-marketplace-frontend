import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { getUser } from "../../utils/userMethods";
import { login } from "../../store/actions/loginActions";
import { useDispatch } from "react-redux";

export default function Success() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUser()
      .then((res) => {
        dispatch(login(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <Layout>
      <div>Success</div>
    </Layout>
  );
}
