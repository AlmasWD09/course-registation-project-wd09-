import { IoBookOutline } from "react-icons/io5";
import PropTypes from "prop-types"


const Course = ({ course,handleCourseName,handleCreaditHour }) => {
    const { cover_img, course_name, description, price, credit_hour } = course || {};
    
// console.log(handleCreaditHour);
    return (
        <div>
            <div className="bg-base-100 shadow-xl space-y-3">
                <figure><img className="h-[300px] object-cover" src={cover_img} alt="exercise" /></figure>
                <div className="text-start p-4 space-y-3">
                    <h2 className="font-bold">{course_name}</h2>
                    <p>{description.slice(0,80)}</p>
                    <div className="flex gap-10">
                        <p className="font-bold">$  Price: {price}</p>
                        <div className="flex items-center gap-3">
                        <p className="text-xl text-indigo-800">< IoBookOutline /></p>
                        <p className="font-bold">Cradit: {credit_hour}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button
                        onClick={()=>{
                            handleCourseName(course);
                            handleCreaditHour(course.credit_hour, course.price, course.credit_hour)
                        }}
                        className="w-full btn bg-indigo-300 text-indigo-950 font-bold text-lg">Selected
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


// prop-types setup
Course.propTypes = {
    course:PropTypes.object.isRequired,
    handleCourseName:PropTypes.func.isRequired,
    handleCreaditHour:PropTypes.func.isRequired,
}

export default Course;