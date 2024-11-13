import axios from "axios";
import Global from "./../Global";

export default class ServiceEmpleado {
  login(login) {
    return new Promise(function (resolve, reject) {
      let request = "Auth/Login";
      let url = Global.urlApiEmpleados + request;
      axios
        .post(url, login)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
