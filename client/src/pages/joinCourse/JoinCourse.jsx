import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ROUTE_NAMES } from "../../router/RouteNames";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { findCourseAC } from "../../actions/FindCourseActions";
import "../../styles/JoinCourse.scss";

const JoinCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { guid } = useParams();
  const courseDetails = useSelector(state => state.courseReducer.courseDetails?.course);
  useEffect(() => {
    dispatch(findCourseAC(guid));
  }, []);

  const handleStartCourse = () => {
    navigate(ROUTE_NAMES.accesscourse);
  }
  return (
    <div>
      <Banner>
        <div>
          <Link to={ROUTE_NAMES.root}>BACK TO MY ACCOUNT</Link>
        </div>
        <div className="welcome-text">Join your course</div>
      </Banner>
      <Section>
        <div className="text-heading">Here is your course details</div>
        <div className="course-title">Title: {courseDetails?.courseName}</div>
        <div className="course-code">Code: {courseDetails?.code}</div>
        <div className="course-instructors">Instructors:</div>
        <ul className="instructors-list">
            {courseDetails?.instructors.map((ins, i) => (
                <li key={ins.login_name}>{ins.first_name} {ins.last_name}</li>
            ))}
        </ul>
        <button className="join-course-button" onClick={handleStartCourse}>JOIN COURSE</button>
      </Section>
    </div>
  );
};
export default JoinCourse;
