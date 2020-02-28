import axios from 'axios';

const apiBaseUrl = 'http://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

export default class PostService {
    getAllPosts() {
        return axios.get(`${apiBaseUrl}/posts`);
    }
}