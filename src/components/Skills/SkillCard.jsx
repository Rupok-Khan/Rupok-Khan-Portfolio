import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SkillCard = ({ icon, iconLabel, title, tone = "blue" }) => {
    return (
            <div className="skills-card">
                <div className={`skills-card-icon ${tone}`}>
                    {icon ? <FontAwesomeIcon icon={icon} /> : <span className="skill-letter-icon">{iconLabel}</span>}
                </div>
                <h3>{title}</h3>
            </div>
    );
};

export default SkillCard;
