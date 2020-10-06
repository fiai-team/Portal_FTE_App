/*
 * Copyright (c) 2020. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import axios from "axios";
const LAN = false;
const ServerPath = LAN ? "http://fte.uci.cu:8080" : "http://localhost:8080";

class ServerManager {

    async getSlideItems() {
        return await axios.get(`${ServerPath}/media/slide`);
    }

    async getAlerts() {
       return await axios.get(`${ServerPath}/data/alerts`);
    }

    async getGalleryEntries() {
        return await  axios.get(`${ServerPath}/media/gallery/most-recent`);
    }

    async getMostRecentPosts(){
        return await axios.get(`${ServerPath}/data/posts/most-recent`);
    }

    async getPostByTagId(id) {
        return await axios.post(`${ServerPath}/data/posts/by-tag-id`, {id});
    }

    async getPostById(id) {
        return await axios.post(`${ServerPath}/data/posts/by-id`, {id});
    }

    async ping() {
        return await axios.get(`${ServerPath}/ping`, {
            timeout: 500
        });
    }

    async getCouncilOfDirection() {
        return await axios.get(`${ServerPath}/data/faculty/direction-council`);
    }

    async getMostRead() {
        return axios.get(`${ServerPath}/data/posts/most-read`)
    }

    async getFortesData() {
        return axios.get(`${ServerPath}/data/production/fortes`)
    }
}

export {
    ServerPath
};

export default new ServerManager();
