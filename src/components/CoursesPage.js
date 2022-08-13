import React, { useState,useEffect } from "react";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import store from "../stores/courseStore";
import { deleteCourse, loadCourses } from "../actions/courseActions";

const CoursesPage = function(){
    const [courses, setCourses] = useState(store.getCourses());
    useEffect(()=>{
        store.addChangeListner(onChange);    
        if(store.getCourses().length === 0) loadCourses();
        return ()=> store.removeChangeListner(onChange);    
    },[]);

    function onChange(){
        setCourses(store.getCourses());
    }

    function handleDeleteCourse(id){
        deleteCourse(id);
    }

    return  <>
                <h1>Courses</h1>
                <Link to="/course" className="btn btn-primary">Add Course</Link>
                <CourseList courses={courses} deleteCourse={handleDeleteCourse} />
            </>
    
}

export default CoursesPage;