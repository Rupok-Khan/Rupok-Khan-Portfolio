import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../assets/css/hero.css";
function Skill({ name, icon: Icon }) {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={Icon} className="skill-icon" />

      <span className="skill-name">{name}</span>

    </div>
  );
}

export default Skill;
