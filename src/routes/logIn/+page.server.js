import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    async login( { request, cookies} ) {
        const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
    
        let wrongName = false;
        let wrongPass = false;
    
        let rightName = false;
        let rightPass = false;
    
        let isStudent = false;
        let isTeacher = false;

		if (!username) {
			return fail(400, { usernameMissing: true });
		}

		if (!password) {
			return fail(400, { passwordMissing: true, username });
		}

        const response = await fetch('http://localhost:4001/students');
        const students = await response.json();


        const response2 = await fetch('http://localhost:4001/teachers');
        const teachers = await response2.json();

        for (let student of students) {
            if (student.name === username) {
                wrongName = false;
                rightName = true;
                
            }
            else {
                wrongName = true;
                rightName = false;
            }
            if (student.password === password) {
                wrongPass = false;
                rightPass = true;

            }
            else {
                wrongPass = true;
                rightPass = false;
            }

            if (rightName===true && rightPass===true) {
                isStudent  = true;
                break;
            }
        }
        if (rightName===false || rightPass===false) {
            for (let teacher of teachers) {
            if (teacher.name === username) {
                wrongName = false;
                rightName = true;
            }
            else {
                wrongName = true;
                rightName = false;
            }
            if (teacher.password === password) {
                wrongPass = false;
                rightPass = true;
            }
            else {
                wrongPass = true;
                rightPass = false;
            }
            if (rightName===true && rightPass===true) {
                isTeacher = true;
                break;
            }
        }
        }

        if (wrongName === true) {

            return fail(400, { nameDoesntExists: true});
        }
        if (wrongPass === true) {
            return fail(400, { passDoesntExists: true});
        }
    
        
        if (isStudent) {
            cookies.set('login', username, { path: '/' });
            cookies.set('role', 'student', { path: '/' });
            throw redirect(303, '/studentPage');
        }
        if (isTeacher) {
            cookies.set('login', username, { path: '/' });
            cookies.set('role', 'teacher', { path: '/' });
            throw redirect(303, '/teacherPage');
        }



    },
    logout: ({ cookies, url }) => {
        cookies.delete('login', {path: '/'});
        throw redirect(303, url.searchParams.get('redirectTo') || '/');
    }
}; 