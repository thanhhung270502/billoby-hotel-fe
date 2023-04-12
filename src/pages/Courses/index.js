import { useEffect, useState } from 'react';
import { getCourseInfo } from '~/api/api';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3000/courses")
        //     .then(response => {
        //         setCourses(response.data)
        //         console.log(response.data);
        //     })
        //     .catch(err => err)

        (
            async () => {
                await getCourseInfo().then((data) => {
                    setCourses(data)
                    console.log(data);
                })
            }
        )()
    }, []);

    return (
        <div className="container">
            <h1>Hello World!</h1>
            <div>
                {courses.map((value, index) => (
                    <p>{value.name}</p>
                ))}
            </div>
        </div>
    );
}

export default Courses;
