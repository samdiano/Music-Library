import React, { useEffect } from "react";
import _ from "lodash";
import { getParamValues } from "../../util/AuthUtil";

const Redirect: React.FC = (props: any) => {
  useEffect(() => {
    const { history, location } = props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/home");
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", `${expiryTime}`);
      history.push("/home");
    } catch (error) {
      history.push("/");
    }
  });
  return null;
};

export default Redirect;
