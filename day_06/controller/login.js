import { readFile } from "../Utils/readFile.js";
const FILE = "../users.json";
const userLogin = async (userDetail) => {
    const {email, password} = userDetail;
    const users = await readFile(FILE);

    if (users.length === 0) {
        console.log("User does not exist");
        return;
    }

    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        console.log("User does not exist");
        return;
    }
    (user[0].password === password) ? console.log("Login Succesfull") : console.log("Incorrect Password");
}

userLogin({email:"fsommerlin0@youku.com",password:"iI2()ni*kq),N8Q"}); //login successful
userLogin({email:"fsommerlin0@youku.com",password:"12345"}); //incorrect password
userLogin({email:"abc@gmail.com",password:"12345"}) //user is not existing

