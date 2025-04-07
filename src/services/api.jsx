import axios from "axios";
 
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/twitch/v1',
    timeout: 5000,
})
export const login = async (data) =>{
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}
