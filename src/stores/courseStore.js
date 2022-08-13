import {EventEmitter} from "events";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../appDispatcher";

const CHANGE_EVENT = "change";
let _courses = [];
class CourseStore extends EventEmitter{
    addChangeListner(callback){
        this.on(CHANGE_EVENT,callback);
    }

    removeChangeListner(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getCourses(){
        return _courses;
    }

    getCourseBySlug(slug){
        return _courses.find(course => course.slug === slug);
    }
}

const store = new CourseStore();

dispatcher.register(action=>{
    switch(action.actionType){
        case actionTypes.SAVED_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            _courses = action.courses;
            store.emitChange();
            break;
        case actionTypes.EDIT_COURSES:
            _courses = _courses.map(course => course.id === action.course.id ? action.course : course);
            store.emitChange();
            break;
        case actionTypes.DELETE_COURSE:
            _courses = _courses.filter(course => course.id !== action.courseId);
            store.emitChange();
            break;
        default:
            //nothing to do here
    }
})
export default store;