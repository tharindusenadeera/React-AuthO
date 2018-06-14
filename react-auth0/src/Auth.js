/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = "/secret";
const Login_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "tharindusenadeera.auth0.com",
        clientID: "J59szmVomUsQZ0XHz8SrbynH9Jj4TMK4",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://tharindusenadeera.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expireAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expireAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = Login_FAILURE_PAGE;
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expireAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expireAt;

    }
}