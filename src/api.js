import axios from "axios";
import {ActionsCreator as ActionsCreatorData} from "./reducer/data/data.js";
import {ActionsCreator as ActionsCreatorUser} from "./reducer/user/user.js";
import {ConfigApi, RequestUrl, ClientErrorResponses} from "./constants/constants.js";

const configureAPI = (dispatch, redirect) => {
  const api = axios.create({
    baseURL: ConfigApi.BASE_URL,
    timeout: ConfigApi.TIMEOUT,
    withCredentials: ConfigApi.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === ClientErrorResponses.BAD_REQUEST) {
      dispatch(ActionsCreatorData.changeLoadingStatus(false));
      dispatch(ActionsCreatorData.getErrorInfo(`Check the correctness of the entered data.`));
    }

    if (error.response.status === ClientErrorResponses.UNAUTHORIZED) {
      redirect(RequestUrl.LOGIN);
      dispatch(ActionsCreatorData.changeLoadingStatus(false));
      dispatch(ActionsCreatorUser.requiredAuthorization(true));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
