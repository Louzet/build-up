import axios from 'axios';

function register(user) {
    return axios.post(
        "http://localhost:8000/api/members",
        user
    );
}

export default {
    register
};