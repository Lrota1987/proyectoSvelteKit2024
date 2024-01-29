import { fail, redirect} from '@sveltejs/kit';

export const actions = {
    async registrer({ request, cookies }) {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');
        const teacherName = form.get('teachername');
        const role = form.get('role');
        if (!username) {

			return fail(400, { usernameMissing: true });
		}

		if (!password) {
			return fail(400, { passwordMissing: true, username });
		}
            
            const response = await fetch('http://localhost:4001/teachers');
            const teachers = await response.json();

            const response3 = await fetch('http://localhost:4001/students');
            const students = await response3.json();

            let teacherId=0;

    
            if (response.ok) {
                    for (var student of students) {
                        if (student.name === username) {
                            return fail(400, { usernameAlreadyInUse: true});
                        }
                    }
            
                    for (var teacher of teachers) {
                        if (teacher.name === username) {
                            return fail(400, { usernameAlreadyInUse: true});
                        }
                    }
                    if (role === 'students') {
                        let teacherNameOk = false;
                        for (teacher of teachers) {
                            if (teacher.name === teacherName) {
                                teacherNameOk = true;
                                teacherId=teacher.id;
                            }

                            
                        }
                        if (!teacherNameOk) {
                            return fail(400, { teacherNameNotExists: true});
                        }
                    }
                
            }
            else {
                console.error("Failed to load the data from the db :", response.statusText);
            }
            if (role === 'students' ) {
                const pickedId = students[students.length -1].id +1;
            
                const newProfile = {
                    id: pickedId,
                    name: username,
                    password: password,
                    teacher: teacherId
                };

                const response2 = await fetch('http://localhost:4001/students', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newProfile)
                });

                if (response2.ok) {
                    const result = await response2.json();
                    console.log(`New profile added: ${result}`);
                    cookies.set('login', newProfile.name, {
                        path: '/'
                    });
                    cookies.set('role', 'student', { path: '/' });
                    console.log(cookies.get('login'));

                    throw redirect(303, '/studentPage');
                }
                else {
                    console.error(`Failed to add new profile ${response2.statusText}`);
                }
            }

            if (role === 'teachers' ) {
                const pickedId = teachers[teachers.length -1].id +1;
            
                const newProfile = {
                    id: pickedId,
                    name: username,
                    password: password,
                    test:[]
                };

                const response2 = await fetch('http://localhost:4001/teachers', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newProfile)
                });

                if (response2.ok) {
                    const result = await response2.json();
                    console.log(`New profile added: ${result}`);
                    cookies.set('login', newProfile.name, {
                        path: '/'
                    });
                    cookies.set('role', 'teacher', { path: '/' });

                    throw redirect(303, '/teacherPage');
                }
                else {
                    console.error(`Failed to add new profile ${response2.statusText}`);
                }
            }

        

    }
}; 