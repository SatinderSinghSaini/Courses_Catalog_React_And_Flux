import React ,{useEffect, useState} from "react";
import CourseForm from "./CourseForm";
import { useNavigate,useParams } from "react-router-dom";
import {toast} from "react-toastify";
import store from "../stores/courseStore";
import { loadCourses, saveCourse } from "../actions/courseActions";

const ManageCoursePage = props =>{
    const navigate = useNavigate();
    const {slug} = useParams();
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        title: "",
        authorId: null,
        slug: "",
        category: ""
    });
    const [courses, setCourses] = useState(store.getCourses());
    useEffect(()=>{
        store.addChangeListner(onChange);
        if(courses.length === 0) loadCourses();
        else if(slug){            
            setCourse(store.getCourseBySlug(slug));
        }
        return ()=> store.removeChangeListner(onChange);
    },[slug,courses]);

    function onChange(){
        setCourses(store.getCourses());
    }

    function handleChange({target}){
        setCourse({
            ...course,
            [target.name]: target.value
        })
    }

    function isFormValid(){
        const _errors = {};
        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author ID is required";
        if(!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!isFormValid()) return;
        saveCourse(course).then(()=>{
            navigate("/courses");
            toast.success("Course Saved");
        });
    }
    
    return (
        <>
            <h1>Manage Course</h1>
            <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    );
}

export default ManageCoursePage;