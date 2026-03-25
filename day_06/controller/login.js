import { readFile } from "../Utils/readFile.js";
// const FILE = "../users.json";
export const userLogin = async (userDetail, FILE) => {
    const { email, password } = userDetail;
    const users = await readFile(FILE);

    if (users.length === 0) {
        return { status: 400, message: "User does not exist" };
    }

    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        return { status: 400, message: "User does not exist" };
    }
   return  (user[0].password === password) ? {status:200, message:"Login Successfull"} : {status:500,message:"Incorrect password"};
}

// userLogin({ email: "fsommerlin0@youku.com", password: "iI2()ni*kq),N8Q" }); //login successful
// userLogin({ email: "fsommerlin0@youku.com", password: "12345" }); //incorrect password
// userLogin({ email: "abc@gmail.com", password: "12345" }) //user is not existing


