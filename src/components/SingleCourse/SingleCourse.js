import React from "react";
import "./SingleCourse.css";
import { Button} from "react-bootstrap";
const SingleCourse = (props) => {
  const { title, price } = props.course;
  return (
    <div className="single-course">
              
              <h4>Course title: {title}</h4>
                <h6>Price: ${price}</h6>
                <Button onClick={() => props.handleCourse(props.course)} className="enroll-btn" variant="primary">Enroll now</Button>
             
              
    </div>
  );
};

export default SingleCourse;
