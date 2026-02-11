// import fs from 'fs/promises';
import fs from 'fs';
const makeDir = async (path) => {
    try {
        await fs.mkdir(path);
        console.log("Directory has been created succesfully");
    }
    catch (error) {
        console.log("unable to make new directory");
    }
}

makeDir("../day_04");

const readDir = async (path) => {
    try {
        const data = await fs.readdir(path);
        console.log(data);
    }
    catch (error) {
        console.log("unable to read file");
    }
}

readDir("../day_04");

const removeDir = async (path) => {
    try {
        await fs.rmdir(path);
        console.log("directory removed succesfully");
    }
    catch (error) {
        console.log("unable to remove file");
    }
}

removeDir("../day_04");

