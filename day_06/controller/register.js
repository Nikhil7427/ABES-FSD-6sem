import { readFile, writeFile } from "../Utils/readFile.js";
const FILE = "../users.json";
const userRegistration = async (userDetails) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender) {
        console.log("users entries are not complete. unable to register");
        return;
    }
    const users = await readFile(FILE);
    if (users.length === 0) {
        // register
    }
    const existingUser = users.find((u)=>u.email===email);
    if(existingUser){
        console.log("Already Registered");
        return;
    }
    // register

}