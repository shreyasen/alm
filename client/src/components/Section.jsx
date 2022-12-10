import '../styles/Section.scss';

const Section = ({ children }) => {
    return (
        <div className="common-section-block">
            <div className='inner-section'>{children}</div></div>
    )
}
export default Section;