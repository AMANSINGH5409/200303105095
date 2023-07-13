import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000"

/** Make API Request  */

// login
export async function login({ companyName, ownerName, ownerEmail, rollNo }) {
    try {
        const user = {
            "companyName": "Train Central",
            "clientID": "15d146f1-8734-4355-9e50-38742b63ff51",
            "clientSecret": "uFkaowCKoRccTyTJ",
            "ownerName": "Ram",
            "ownerEmail": "ram@abc.edu",
            "rollNo": "12"
        }
        const data = await axios.post('/user/auth', user);

        console.log(data);

    } catch (error) {
        return {
            error: "Username doesn't exist...!"
        }
    }
}

// register 
export const register = async ({ companyName, ownerName, ownerEmail, rollNo, accessCode }) => {
    try {
        // console.log(user);
        const response = await axios.post('/user/register', { companyName, ownerName, ownerEmail, rollNo , accessCode})
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}