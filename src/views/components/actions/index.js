import React, { useState } from "react";
import api from "./apiServices";
import swal from "sweetalert";
import { history } from "../../../history";
import {
  FETCH_ONBOARDING,
} from "./types";
import { Storage } from "../../../utilities/storage/storage";

export const EmailValidation = (data) => {
  const [isSent, setIsSent] = useState(data.isSent)
  let email = data.email;
  Storage.setItem("email", email);
  api
    .post(`/api/accounts/validate_emai/`, email)
    .then((response) => {
      const resData = response;
      if (resData.message === "success") {
        setIsSent(true);
        setTimeout(
          swal("Please check your email inbox or spam for verification code"),
          2000
        );
         console.log("Email Valid: ", resData);
      } else {
        console.log("Invalid Email: ", resData);
        setIsSent(isSent);
        swal( resData.error);
      }
    }).catch((err) => {

    })
}

export const CodeConfirmation = (info) => {
  // const [data, setData] = useState([])
  const [isSent, setIsSent] = useState(info.isSent)
  const [isPage, setIsPage] = useState(info.isPage)
  let data = {
    email: info.workEmail,
    otp: info.isCode
  };
  // setData(verifiedData);
  api
    .post(`/api/accounts/confirm_emai/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.message !== "failed") {
        setIsSent(true);
        setTimeout(
          swal("Congratulations, you are now being redirected to the next page"),
          3000
        );
        setIsPage(isPage + 1);
         console.log("Email Valid: ", responseData);
      } else {
        console.log("Invalid Email: ", responseData);
        setIsSent(isSent);
        setTimeout(
          swal(responseData.data),
          3000
        );
        setIsPage(isPage);
      }
    }).catch((err) => {

    })
}

export function appLogout (dispatch){
    const email = Storage.getItem("user")["username"];
    const body = {email: email};
    api
      .post("/api/users/logout", body)
      .then(() => {
        Storage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    }

export const setCurrentUsers = (response) => {
  console.log(response);
  return (dispatch) =>
    dispatch({ type: "AUTHENTICATION_SUCCESS", response });
};
