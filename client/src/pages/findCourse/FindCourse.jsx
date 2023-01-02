import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ROUTE_NAMES } from "../../router/RouteNames";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import "../../styles/FindCourse.scss";
import { findCourseAC, resetCourseDetails } from "../../actions/FindCourseActions";

const FindCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userDetails?.firstName);
  const courseDetails = useSelector((state) => state.courseReducer.courseDetails);
  const [code, setCode] = useState("");

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleFindCourse = () => {
    dispatch(findCourseAC(code));
  };

  useEffect(() => {
    if (courseDetails) navigate(ROUTE_NAMES.joincourse.replace(':guid', courseDetails.course.code));
  }, [courseDetails]);
  return (
    <div>
      <Banner>
        <div>
          <Link to={ROUTE_NAMES.root}>BACK TO MY ACCOUNT</Link>
        </div>
        <div className="welcome-text">
          Welcome, {userName}! Let's find your course.
        </div>
      </Banner>
      <Section>
        <div className="text-heading">Enter your course section ID</div>
        <div className="find-course-text">
          Find your 6 character course section ID on your course flyer. Contact
          your instructor if you didn't receive a course flyer.
        </div>
        <div className="find-course-input-block">
          <input
            type={"text"}
            placeholder={"Course Section ID"}
            className="course-id-input-text"
            value={code}
            onChange={handleInputChange}
          />
          <button className="continue-btn" onClick={handleFindCourse}>
            CONTINUE
          </button>
        </div>
        <div className="find-course-text">
          Don't have your course section ID?{" "}
          <Link to={ROUTE_NAMES.searchcourse}>
            Search for courses at your school
          </Link>
        </div>
      </Section>
    </div>
  );
};
export default FindCourse;
