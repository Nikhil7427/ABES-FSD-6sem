import { readFile, writeFile } from "../day_04/readAndWriteFile.js";
const FILE = '../day_04/students.json';

const updateFileData = async (id, data) => {
    const students = await readFile(FILE);
    if (!students) {
        console.log("user is not existing");
        return;
    }
    const user = students.filter((student) => student.id === id);
    if(user.length === 0){
        console.log("user is not existing");
    }else{
        const filterData = students.map((student) => student.id === id ? { ...student, ...data } : student);
        await writeFile(FILE, JSON.stringify(filterData, null, 2));
    }
}

updateFileData(15, { first_name: 'ABC', last_name: 'XYZ' });