import axios from "axios";

export default axios.create(
    {
        baseURL:"https://online-clinic-99063-default-rtdb.firebaseio.com/"
    }
)