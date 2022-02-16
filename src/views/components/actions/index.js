import React from "react";
import api from "./apiServices";
import swal from "sweetalert";
import { history } from "../../../history";
import {
  FETCH_ONBOARDING,
} from "./types";
import { Storage } from "../../../utilities/storage/storage";
import EmailModal from "./emailVerificationModal";

export const EmailVerification = (data) => {
  let email = data.email;
  let page = data.increasePage;
  api
    .post(`/api/accounts/validate_emai/`, email)
    .then((response) => {
      const resData = response;
      if (resData.message !== "failed") {
         history.push(<EmailModal
            response={resData}
            page={page}
          />
         )
      } else {
        swal( resData.error)
      }
    }).catch((err) => {

    })
}
export const login = (data) => {
  api
    .post(`/api/users/login`, data)
    .then((response) => {
      const resData = response
      if (resData.message === "Login Successful") {
        swal("Good job!", resData.message, "success");
      } else {
        swal("Oops!", resData.message, "error")
      }
      if (resData.user) {
        Storage.setItem(
          "kyc", resData["kyc-status"]
        );
        Storage.setItem("user", resData.user);
        Storage.setItem(
          "userDetails", resData["user-details"]
        );
        Storage.setItem(
          "token", (resData["user-details"].token)
        ); if (resData["user-details"].account_type === "Business") {
          Storage.setItem(
            "responseIndividual", resData["user-business-details"]
          );
        } else {
          Storage.setItem(
            "responseIndividual", resData["user-individual-details"]
          );
        }

        Storage.setItem(
          "account", resData["user-details"].account_type
        );
        Storage.setItem(
          "wallet", resData["wallet-balance"]
        )
        if (
          resData[
            `user-${resData[
              "user-details"
            ].account_type.toLowerCase()}-details`
          ].onboarded === true
        ) {
          history.push("/dashboard");
        } else {
          history.push("/onboarding");
        }
      } else {
        // swal(resData.message)
      }
    })
    .catch((response, err) => {
      // swal(response.message);
    });
};

// REset Password Token
export const resetpasswordToken = (data) => () => {
  api
    .post(`/api/users/reset_password`, data)
    .then((response) => {
      if (response.message === "Reset Password Mail Sent") {
        swal("Good Job!", response.message, "succcess");
      } else {
        swal("Oops!", response.message, "error");
      }
    })
    .catch((err) => {
      if (err.response !== undefined) {
        swal(err.response.message);
      }
    });
};

// Reset Password
export const resetpassword = (data) => () => {

  var uuid = Storage.getItem("userDetails")["uuid"];
  const body = {
    uuid: uuid,
    email: data.email,
    reset_token: data.reset_token,
    new_password: data.new_password,
    confirm_password: data.confirm_password,
  };
  api
    .post(`/api/users/verify_reset_password`, body)
    .then((response) => {
      const resData = response
      if (resData.message !== "Invalid Token") {
        swal("Good Job!", resData.message, "success");
        history.push("/login");
      } else {
        swal("Oops!", resData.message, "error");
      }
      if (resData.user) {
        Storage.setItem(
          "kyc", resData["kyc-status"]
        ); Storage.setItem(
          "tokens", resData["token"]
        );
        Storage.setItem("user", resData.user);
        Storage.setItem(
          "userDetails", resData["user-details"]
        );
        if (resData["user-details"].account_type === "Business") {
          Storage.setItem(
            "responseIndividual", resData["user-business-details"]
          );
        } else {
          Storage.setItem(
            "responseIndividual", resData["user-individual-details"]
          );
        }

        Storage.setItem(
          "account", resData["user-details"].account_type
        );
        Storage.setItem(
          "wallet", resData["wallet-balance"]
        );
      }
    })
    .catch((err) => {
      if (err.response !== undefined) {
        swal(err.response.data.message);
      }
    });
};

export const loadfetchIndividualOnboarding = (result) => {
  return {
    // type: FETCH_INDIVIDUAL_ONBOARDING,
    payload: result,
  };
};

export const individualOnboard = (values)  => {
  const details = Storage.getItem("userDetails");
  const uuid = details.uuid;
  const { identification_number, identification_type, phone } = values;
  const data = { uuid, phone, identification_number, identification_type, bvn: identification_type };
  api
    .post(`/api/users/onboard/`, data, true)
    .then((response) => {
      if (response.onboarded === true) {
        swal("Good Job!", response.message, "success");
        history.push("/dashboard");
      }
      else {
        swal("Oops!", "onboarding Unsuccesssful", "error");
      }
    })
    .catch((err) => {
      if (err.response !== undefined) {
        swal(JSON.stringify(err.response.data));
      }
    });
};

export const loadfetchBusinessOnboarding = (result) => {
  return {
    // type: FETCH_BUSINESS_ONBOARDING,
    payload: result,
  };
};

export const businessOnboard = (data) => {
  const details = Storage.getItem("userDetails");
  const uuid = details.uuid;
  const wallet = {
    uuid,
    is_test: false,
  };
  api
    .post(`/api/users/onboardBusiness/${uuid}/`, data, true)
    .then((res) => {
      if (res.onboarded) {
        swal("Good Job!", res.message, "success");
        api
          .post(`/api/wallet/reserved-account/`, wallet)
          .then((res) => {
            if (res) {
              history.push("/dashboard");
            }
          })
          .catch((err) => console.log(err));
      } else {
        swal("Oops!", res.message, "error")
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onboarding = (data) => {
  let bvn = data.bvn;
  api
    .post(`/api/users/register`, data)
    .then((res) => {
      const resData = { ...res }
      if (resData.message !== "Email already exists") {
        swal("Good job!", resData.message, "success");
        history.push("/onboarding");
      } else {
        swal("Oops!", resData.message, "error");
      }
      if (resData.user) {
        Storage.setItem(
          "kyc", resData["kyc-status"]
        );
        Storage.setItem("user", resData.user);
        Storage.setItem(
          "userDetails", resData["user-details"]
        );
        Storage.setItem(
          "token", (resData["user-details"].token)
        ); if (resData["user-details"].account_type === "Business") {
          Storage.setItem(
            "responseIndividual", resData["user-business-details"]
          );
        } else {
          Storage.setItem(
            "responseIndividual", resData["user-individual-details"]
          );
        }

        Storage.setItem(
          "account", resData["user-details"].account_type
        );
        Storage.setItem(
          "wallet", resData["wallet-balance"]
        )
        let uuid = resData["user-details"]["uuid"];

        const body = {
          bvn: bvn.toString()
        }
        api
          .post(`/api/wallet/reserved-account/${uuid}/`, body, true)
          .then((res1) => {
          })
          .catch((err) =>
            console.error({
              url: err.API,
              status: err.status,
              message: err.message,
            })
          );
      }

    })
};

export function appLogout (dispatch){
    const email = Storage.getItem("user")["username"];
    const body = {email: email};
    api
      .post("/api/users/logout", body)
      .then(() => {
        Storage.removeItem("token");
        Storage.removeItem("response");
        Storage.removeItem("refresh_token");
        Storage.removeItem("kyc");
        Storage.removeItem("user_Details");
        Storage.removeItem("account");
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
