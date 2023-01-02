import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import "../../styles/Dashboard.scss";
import { ROUTE_NAMES } from "../../router/RouteNames";
import { getEnrollments } from "../../apis";

const Dashboard = () => {
  const navigate = useNavigate();
  const userDetails = useSelector(state => state.user.userDetails);
  const [list, seList] = useState([]);

  const handleAddCourse = () => {
    navigate(ROUTE_NAMES.findcourse);
  }

  useEffect(() => {
    getEnrollments()
    .then((res) => {seList(res.data)})
  }, []);

  return (
    <div>
      <Banner>
        {console.log(list)}
        <div className="welcome-text">Welcome, {userDetails?.firstName}!</div>
        <div>
          {/* <div>{userDetails?.email}</div> */}
        </div>
      </Banner>
      <Section>
        <div className="courses-and-books-inner-header">
          <div className="text-heading">Courses and Books</div>
          <div>
            <button className="add-course-btn" onClick={handleAddCourse}>+ Add Course</button>
          </div>
        </div>
        {list.length ? (
          <div>
            course
          </div>
        ) : (
          <div className="no-course-block">
            <p>You don't have any course or book right now. Please add new course or book.</p>
          </div>
        )}
        
      </Section>
    </div>
  );
};
export default Dashboard;
