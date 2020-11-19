import React, { useEffect, useState } from "react";
import "./Course.css";
import SingleCourse from "../SingleCourse/SingleCourse";
import data from '../../fakeData/fakeData'
import Cart from "../Cart/Cart";

const Course = () => {
  const [courses, setCourses] = useState(data);
  const [courseCount, setCourseCount] = useState([]);

 

  const handleCourse = (course) => {
    const newCount = [...courseCount, course];
    setCourseCount(newCount);
  };
  return (
    <div className="course">
      <div className="course-container">
        {courses.map((course) => (
          <SingleCourse
            handleCourse={handleCourse}
            course={course}
          ></SingleCourse>
        ))}
      </div>
      <div className="cart-container">
        <Cart courseCount={courseCount}></Cart>
      </div>
    </div>
  );
};

export default Course;
