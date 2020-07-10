import React from 'react'

export default function ShowStudents() {

    state = { students: [] }


    componentDidMount = async () => {
        const a = await fetch("https://http://localhost:5000/students")
            .then(res => res.json())
    }
    console.log(res)
    return (
        <div>

        </div>
    )
}
