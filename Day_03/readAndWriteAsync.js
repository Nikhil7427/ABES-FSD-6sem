import fs from "fs/promises";

const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("data has been written succesfully");
    }catch (error) {
        console.log("unable to perform write operation");
    }

}

const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        console.log(data);
    }catch(error) {
        console.log("unable to read file");
    }
}

const appendFile = async (path, data) => {
    try{
        await fs.appendFile(path, data);
        console.log(" data has bees appended succesfully");
    }
    catch(error) {
        console.log("unable to append data");
    }
}

console.log("before write");
writeFile("./example.txt", "This data has been written through async function"); 
console.log("after write");

console.log("before read");
readFile("./example.txt");
console.log("after read");

console.log("before append");
appendFile("./example.txt", "this data has been appended through async function");
console.log("after append");