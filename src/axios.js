import axios from "axios";

// base url

const instance= axios.create({
    baseURL:"http://198.101.12.193:30000/"
});

export default instance;