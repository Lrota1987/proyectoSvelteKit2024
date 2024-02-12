
export const load = async ({ parent }) => {
    const { username } = await parent();
    const user = username;
    var arrayTest = [];
    const response = await fetch(`http://localhost:4001/teachers`);
    const teachers = await response.json();

    const response2 = await fetch(`http://localhost:4001/students`);
    const students = await response2.json();

    for (var student of students) {
        if (user === student.name) {
            for (var teacher of teachers) {
                if (teacher.id === student.teacher) {
                    arrayTest = teacher.test;
                }
            }
        }
    }
    
    return { arrayTest };
}



