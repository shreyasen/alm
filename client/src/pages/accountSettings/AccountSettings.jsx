import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import { ROUTE_NAMES } from "../../router/RouteNames";

const AccountSettings = () => {
    const userDetails = useSelector(state => state.user.userDetails);
    return (
        <div>
            <Banner>
                <div>
                    <Link to={ROUTE_NAMES.root}>GO TO HOME</Link>
                </div>
            </Banner>
            <Section>
                <div className="text-heading">Account Settings</div>
                <div>
                    <div>
                        <label>Name</label>
                        <p>{userDetails?.firstName} {userDetails?.lastName}</p>
                    </div>
                    <hr />
                    <div>
                        <label>Email</label>
                        <p>{userDetails?.email}</p>
                    </div>
                    <hr />
                    <div>
                        <label>Password</label>
                        <p>*******</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}
export default AccountSettings;
