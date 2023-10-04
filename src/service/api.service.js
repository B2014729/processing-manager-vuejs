import axios from 'axios';

const commonCofig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonCofig,
    });
}