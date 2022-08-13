import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";

const CourseList = function(props){
    return (
        <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author Id</th>
                <th>Category</th>
                <th>Delete Course</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map(course =>{
                return <tr key={course.id}>
                    <td><Link to={"/course/" + course.slug}>{course.title}</Link></td>
                    <td>{course.authorId}</td>
                    <td>{course.category}</td>
                    <td><button className="btn btn-outline-danger" onClick={()=> props.deleteCourse(course.id)}>Delete</button></td>
                </tr>
            })}
        </tbody>
    </table>
    );
}

CourseList.propTypes = {
    courses: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            authorId: propTypes.number.isRequired,
            category: propTypes.string.isRequired
        })
    ).isRequired
}

export default CourseList;