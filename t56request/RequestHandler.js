import Cookies from "js-cookie";

import {
    BASE_API_URL,
    REQUEST_TIMEOUT,
    MAX_CONTENT_LENGTH
}from ".../constants/APP";
import { config } from "process";

const axios = require("axios").default;

function getToken () {
    return Cookies.get("access_Tokena");
}

function getHeaders () {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken() ? `Bearer ${getToken()}` : ""
    };
}

const RequestHandler = axios.create({
    baseURL: BASE_API_URL,
    timeout: REQUEST_TIMEOUT,
    headers: getHeaders(),


    withCredentials: false,

    responseType: "json",

    responseEncoding: "utf8",

    xsrfCookieName: "XSRF-TOKEN",

    onUploadProgress: function (progressEvent) {

    },

    onDownloadProgress: function (progressEvent) {

    },

    maxContentLength: MAX_CONTENT_LENGTH,


    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
});

RequestHandler.interceptors.request.use(config => {
    Object.assign(config.headers, getHeaders());

    return config;
});

RequestHandler.interceptors.response.use(function (response) {
    if(response && !response.data.success) {
        alert(response.data.message)
    }

    return response;
}, function (error) {
    return Promise.reject(error)
});

export default RequestHandler;