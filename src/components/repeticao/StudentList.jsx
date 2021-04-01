import React from 'react'
import studentData from '../../data/student'

const StudentList = () =>  {

    const students = studentData;

    const Lis = students.map((student) => {
            return (
                <li key={student.id}>
                    {student.id}) {student.name} - {student.grade}
                </li>
            )
        }
    )

    return (
        <div>
            <ul>
                {Lis}
            </ul>
        </div>
    )
}

export default StudentList;
