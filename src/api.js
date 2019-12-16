import axios from "axios";
import {ActionsCreator} from "./reducer/data/data.js";

const Config = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

const configureAPI = (dispatch, redirect) => {
  const api = axios.create({
    baseURL: Config.BASE_URL,
    timeout: Config.TIMEOUT,
    withCredentials: Config.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 400) {
      dispatch(ActionsCreator.changeLoadingStatus(false));
      dispatch(ActionsCreator.getErrorInfo(`Check the correctness of the entered data.`));
    }

    if (error.response.status === 401) {
      redirect(`/login`);
      dispatch(ActionsCreator.changeLoadingStatus(false));
      dispatch(ActionsCreator.getErrorInfo(``));
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
