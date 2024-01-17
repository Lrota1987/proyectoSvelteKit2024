import { writable } from "svelte/store";


const storeIsTeacherStudent = writable ({
    isTeacher : false,
    isStudent : false
    
});

export default {... storeIsTeacherStudent}; 