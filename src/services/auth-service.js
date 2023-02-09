import axios from "axios";

const API_URL = "http://stagging.mjcutter.com/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL, +"register", {
      email: user.email,
      password: user.password,
      confirm_password: user.confirm_password,
    });
  }
}

export default new AuthService();
