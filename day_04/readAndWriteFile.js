import fs from 'fs/promises';

export const readFile = async(path) => {
    try{
        const data = await fs.readFile(path,'utf-8');
        return JSON.parse(data);
    }
    catch(error) {
        console.log("unable to read file");
    }
}
// readFile("./students.json")
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error"));

export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data);
        console.log("data has been written succesfully.");
    } catch(error) {
        console.log("unable to write data");
    }
}


