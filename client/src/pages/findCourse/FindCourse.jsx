import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../router/RouteNames";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import "../../styles/FindCourse.scss";

const FindCourse = () => {
    return (
        <div>
            <Banner>
                <div>
                    <Link to={ROUTE_NAMES.root}>BACK TO MY ACCOUNT</Link>
                </div>
                <div className="welcome-text">Welcome, Shreya! Let's find your course.</div>
            </Banner>
            <Section>
                    <div className="text-heading">Enter your course section ID</div>
                    <div className="find-course-text">Find your 6 character course section ID on your course flyer. Contact your instructor if you didn't receive a course flyer.</div>
                    <div className="find-course-input-block">
                        <input type={"text"} placeholder={"Course Section ID"} className="course-id-input-text" />
                        <button className="continue-btn">CONTINUE</button>
                    </div>
                    <div className="find-course-text">Don't have your course section ID? <Link to={ROUTE_NAMES.searchcourse}>Search for courses at your school</Link></div>
                
            </Section>
        </div>
    )
}
export default FindCourse;
