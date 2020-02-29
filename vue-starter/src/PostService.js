import axios from 'axios';

const apiBaseUrl = 'http://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

export default class PostService {
    getAllPosts() {
        return axios.get(`${apiBaseUrl}/posts`, {redir_token:'4qF5mh6Qf4NgSNsbvj_Dk-DkFdJ8MTU4Mjk3NzYwN0AxNTgyODkxMjA3&v=VEhFLM8tw0o'});
    }
}