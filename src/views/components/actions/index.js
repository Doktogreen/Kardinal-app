import React from "react";
import api from "./apiServices";
import swal from "sweetalert";
// import { history } from "../../../history";
// import { FETCH_ONBOARDING } from "./types";

import { Storage } from "../../../utilities/storage/storage";

export const EmailValidation = async (data) => {
  // const [isSent, setIsSent] = useState(data.isSent)
  let email = data.workEmail;
  let body = {
    email: email,
  };
  return await api
    .post(`/api/accounts/validate_email`, body)
    .then((response) => {
      const resData = response;
      if (resData.message === "success") {
        setTimeout(
          swal("Please check your email inbox or spam for verification code"),
          2000
        );
        return true;
      } else {
        swal(resData.error);
        return false;
      }
    })
    .catch((err) => {});
  // })
};

export const CodeConfirmation = async (info) => {
  let data = {
    email: info.workEmail,
    otp: `${info.isCode}`,
  };
  return await api
    .post(`/api/accounts/confirm_email`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.message !== "failed") {
        setTimeout(
          swal(
            "Congratulations, you are now being redirected to the next page" 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const RegisterUser = async (info) => {
  console.log(info)
  let data ={
    "username": info.userName,
    "email": info.email,
    "password1": info.password,
    "password2": info.password,
    "job_role": info.role,
    "phone_number":info.number,
    "credit_required": info.credit,
    "company_name": info.companyName,
    "location":info.location,
    "company_size": info.companySize,
    "credit_amount": info.amount,
    "credit_period": info.period,
    "travel_volume": info.volume,
    "annual_travel_budget": info.budget
}
  return await api
    .post(`/auth/registration/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.message !== "failed") {
        window.localStorage.setItem(
          "token", (responseData.key)
        )
        setTimeout(
          swal(
            "Congratulations, you are now being redirected to the next page"
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

export const LoginService = async (info) => {
  const data = {
    username: info.username,
    password: info.password
  };
  return await api
    .post(`/auth/login/`, data)
      .then((response) => {
        let responseData = response.data;
        console.log(responseData)
          if ( responseData.key ) {
            window.localStorage.setItem(
              "key", responseData["key"]
            );
            setTimeout(
              swal(
                "Welcome back, you are now being redirected to your account."
              ),
              3000
            );
            return true;
          } else {
            setTimeout(swal(responseData.non_field_errors), 3000);
          }
          return false;
        }
      )
    .catch((err) => {
      setTimeout(() => {
        return swal(err.data.message)
      }, 3000);
    });
}

export const PasswordResetCode = async (data) => {
  // const [isSent, setIsSent] = useState(data.isSent)
  let email = data.workEmail;
  let body = {
    email: email,
  };
  return await api
    .post(`/auth/password_reset/`, body)
    .then((response) => {
      const resData = response;
      if (resData.status === "Ok") {
        setTimeout(
          swal("Please check your email inbox or spam for verification code"),
          2000
        );
        return true;
      } else {
        swal(resData.error);
        return false;
      }
    })
    .catch((err) => {});
  // })
};

export const PasswordReset = async (info) => {
  let data = {
    email: info.workEmail,
    token: `${info.isCode}`,
  };
  return await api
    .post(`/auth/password_reset/confirm/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.status === "Ok") {
        setTimeout(
          swal(
            "Password reset, you can now login." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};

// export function appLogout (dispatch){
//     const email = Storage.getItem("user")["username"];
//     const body = {email: email};
//     api
//       .post("/api/users/logout", body)
//       .then(() => {
//         Storage.removeItem("user");
//         dispatch({ type: "LOGOUT" });
//         history.push("/login");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     }

// export const setCurrentUsers = (response) => {
//   console.log(response);
//   return (dispatch) =>
//     dispatch({ type: "AUTHENTICATION_SUCCESS", response });
// };

/*----------------------
      SETTINGS
----------------------*/
export const PasswordChange = async (info) => {
  let data = {
    old_password: info.oldPassword,
    new_password1: info.newPassword,
    new_password2: info.confirmPassword
  };
  return await api
    .post(`/auth/password/change/`, data)
    .then((response) => {
      const responseData = response;
      if (responseData.details === "New password has been saved") {
        setTimeout(
          swal(
            "Congratulations ! New password has been saved." 
          ),
          3000
        );
        return true;
      } else {
        setTimeout(swal(responseData.data), 3000);
      }
      return false;
    })
    .catch((err) => {});
};