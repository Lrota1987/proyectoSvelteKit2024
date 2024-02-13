export const load = async ({fetch}) => {

    const response = await fetch("http://localhost:4001/students");
    const student = await response.json();

    return { student };
}