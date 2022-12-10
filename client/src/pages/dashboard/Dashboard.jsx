import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import "../../styles/Dashboard.scss";
import { ROUTE_NAMES } from "../../router/RouteNames";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/alm/user/details", {
      headers: {Authorization: `Bearer ${Cookies.get("JWT-TOKEN")}`},
    })
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
  }, []);

  const handleAddCourse = () => {
    navigate(ROUTE_NAMES.findcourse);
  }

  return (
    <div>
      <Banner>
        <div className="welcome-text">Welcome, {user?.firstName}!</div>
        <div>
          {/* <div>{user?.email}</div> */}
        </div>
      </Banner>
      <Section>
        <div className="courses-and-books-inner-header">
          <div className="text-heading">Courses and Books</div>
          <div>
            <button className="add-course-btn" onClick={handleAddCourse}>+ Add Course</button>
          </div>
        </div>
        <div className="no-course-block">
            <p>You don't have any course or book right now. Please add new course or book.</p>
          </div>
      </Section>
    </div>
  );
};
export default Dashboard;
