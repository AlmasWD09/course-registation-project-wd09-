import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Cources = () => {
    const [cources, setCources] = useState([]);
    const [courseNames, setCourseNames] = useState([]); // course name collection for state
    const [craditHours, setCraditHours] = useState(0); // creadit hour collection for state
    const [totalPrice, setTotalPrice] = useState(0); // total price collection for state
    const [craditRemaingHour, setCraditRemaingHour] = useState(10);// cradit hour remaining state
    const [count, setCount] = useState(9); // totla course collection state


// course name
    const handleCourseName = (course) =>{
        const newCourseName = [...courseNames,course];
        setCourseNames(newCourseName)
        // course count
        const newCount = count - 1;
        setCount(newCount)
    }
console.log(count);
// Total creadit Hour
const handleCreaditHour = (hour,price,remainingHour) =>{
    const newHour = craditHours + hour;
    setCraditHours(newHour)
    // Total price
    const newTotlaPrice = totalPrice + price;
    setTotalPrice(newTotlaPrice)

    // Remaining Hours
    const newRemaninigHours = craditRemaingHour - remainingHour;
    setCraditRemaingHour(newRemaninigHours)
}

// console.log(craditRemaingHour);

    useEffect(()=>{
        const loadData = async () =>{
            const url = './data.json'
            const res = await fetch(url)
            const data = await res.json()
            setCources(data);
        }
        loadData();
    },[])

    return (
        <div>
            <h1 className="font-bold my-8">cources: <span className="bg-indigo-400 text-white px-2 py-1 ml-3 ring-4  ring-green-500 rounded-full cursor-pointer">{count}</span></h1>
     <div className="flex justify-between gap-4">
     <div className="w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    cources.map((course, idx) =>{
                        return (
                            <Course key={idx}
                            course = {course}
                            handleCourseName = {handleCourseName}
                            handleCreaditHour = {handleCreaditHour}
                            ></Course>
                        )
                    })
                }
            </div>

            {/* right side course title */}
            <div className="w-[15%]">
                <h1 className="font-bold text-indigo-400">Credit Hour Remaining {craditRemaingHour} hr</h1>
                <p className="my-4 border-b-2 border-indigo-400"></p>
                <p className="font-bold">Course Name</p>
                <div className="">
                    {
                     courseNames.map((title,idx) =>{
                        return (
                            <li className="list-decimal" key={idx}>{title.course_name}</li>
                        )
                     })
                    }
                </div>
                <div className="my-4 border-b-2 border-indigo-400">
                    <p className="font-bold">Total Credit Hour : {craditHours}</p>
                </div>
                <p className="font-bold my-4">Total Price : {totalPrice} USD</p>
            </div>
     </div>
        </div>
    );
};

export default Cources;