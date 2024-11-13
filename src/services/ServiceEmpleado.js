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

  getPerfilEmpleado() {
    return new Promise(function (resolve) {
      let request = "api/Empleados/PerfilEmpleado";
      let url = Global.urlApiEmpleados + request;
      let headers = {
        Authorization: `Bearer ${Global.token}`,
      };
      axios.get(url, { headers }).then((response) => {
        resolve(response);
      });
    });
  }
  getSubordinados() {
    return new Promise(function (resolve) {
      let request = "api/Empleados/Subordinados";
      let url = Global.urlApiEmpleados + request;
      let headers = {
        Authorization: `Bearer ${Global.token}`,
      };
      axios.get(url, { headers }).then((response) => {
        resolve(response);
      });
    });
  }
}
