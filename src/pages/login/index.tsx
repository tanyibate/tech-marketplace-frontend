import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "../../components/layout/Layout";
import Error from "./error";
import Success from "./success";
import { useForm } from "react-hook-form";
import FormField from "../../components/form/FormField";
import FormRow from "../../components/form/FormRow";
import LoginWithProvider from "../../components/login-with-provider/LoginWithProvider";
import googleIcon from "../../assets/icons/google_icon.png";
import facebookIcon from "../../assets/icons/facebook_icon.png";
import appleIcon from "../../assets/icons/apple_icon.png";
import { login } from "../../store/actions/loginActions";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";

export default function Index() {
  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(login());
  };

  return (
    <Switch>
      <Route exact path={path}>
        <Layout login={true}>
          <Form
            submit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
          >
            <h2 className="text-4xl font-bold pb-6">Login</h2>
            <h5 className="text-sm font-bold pb-4 text-orange">
              Plese enter your login details.
            </h5>
            <FormRow numOfCols={1}>
              <FormField label={"Email"} type={"email"}></FormField>
              <FormField label={"Password"} type={"password"}></FormField>
            </FormRow>
            <Button
              {...{
                type: "submit",
                backgroundColor: "orange",
                fontColor: "white",
              }}
            >
              Login
            </Button>
            <div className="flex items-center mb-8">
              <hr className="flex-1 border-silver" />
              <span className="flex-1 text-center font-bold text-silver">
                OR
              </span>
              <hr className="flex-1 border-silver" />
            </div>
            <div className="w-full space-y-2">
              <LoginWithProvider
                {...{
                  provider: "Google",
                  providerImage: googleIcon,
                  backgroundColourHexCode: "#ffffff",
                  providerFunction: () =>
                    (window.location.href = `${process.env.REACT_APP_BACKEND_API_URL}${process.env.REACT_APP_GOOGLE_LOGIN_ENDPOINT}`),
                }}
              />
              <LoginWithProvider
                {...{
                  provider: "Facebook",
                  providerImage: facebookIcon,
                  backgroundColourHexCode: "#1877f2",
                  fontColor: "#ffffff",
                  providerFunction: () => null,
                }}
              />
              <LoginWithProvider
                {...{
                  provider: "Apple",
                  providerImage: appleIcon,
                  backgroundColourHexCode: "#000000",
                  fontColor: "#ffffff",
                  providerFunction: () => null,
                }}
              />
            </div>
          </Form>
        </Layout>
      </Route>
      <Route path={`${path}/success`}>
        <Success />
      </Route>
      <Route path={`${path}/error`}>
        <Error />
      </Route>
    </Switch>
  );
}
