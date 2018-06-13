import auth0 from "auth0-js";

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
}