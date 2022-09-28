import axios from "axios";
import auth from "./auth"
import user from "./user";
import events from "./events";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

const services = {
    auth: auth(instance),
    user: user(instance),
    events: events(instance)
}

export default services;