import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '47ddf0f3bdc548068065a148e291a988'
    }
})
