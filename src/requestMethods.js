import axios  from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE5ZTRiOWU0NTEzOTlkM2MzY2MzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzM2Njg0MCwiZXhwIjoxNjc3NjI2MDQwfQ.UnK-5tK8AJwyo7WQedY-yokdb3pJemVUc55ay2kgm9I";

export const publicRequest = axios.create({
    baseURL : BASE_URL
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header:{token:`Bearer ${TOKEN}`}

});