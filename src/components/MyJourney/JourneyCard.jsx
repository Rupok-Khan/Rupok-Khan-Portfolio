import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function JourneyCard({ icon, iconLabel, title, description }) {
    return (
        <div className="my-journey">
                <div className="journey-card">
                    <div className="journey-icon">
                        {icon ? <FontAwesomeIcon icon={icon} /> : <span className="journey-letter-icon">{iconLabel}</span>}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            
        </div>
    );
};

export default JourneyCard;
