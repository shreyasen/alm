import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { ROUTE_NAMES } from "../../router/RouteNames";

const AccessCourse = () => {
    const navigate = useNavigate();
    const handleGoToDashboard = () => {
        navigate(ROUTE_NAMES.root);
    }
    return (
        <div>
            <Banner>
                <div className="welcome-text">You're in! Access your course</div>
            </Banner>
            <Section>
                <div className="text-heading">Here is your course details</div>
                <button className="go-to-dashboard-button" onClick={handleGoToDashboard}>Go to dashboard</button>
            </Section>
        </div>
    )
}
export default AccessCourse;
