import axios from "axios";
import {ActionsCreator} from './reducer/user/user';

const Config = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  TIMEOUT: 5000,
  WITH_CREDENTIALS: true
};

const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: Config.BASE_URL,
    timeout: Config.TIMEOUT,
    withCredentials: Config.WITH_CREDENTIALS
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionsCreator.requiredAuthorization());
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {configureAPI};
