import { BASE_URL } from "./baserul";
import { commonAPI } from "./commonAPI";

// register

export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
