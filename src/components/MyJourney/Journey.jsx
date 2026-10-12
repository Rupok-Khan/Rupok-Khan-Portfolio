import JourneyCard from "./JourneyCard";
import "../../assets/css/journey.css";

import {
  faGraduationCap,
  faCode,
  faChartColumn
} from "@fortawesome/free-solid-svg-icons";

import {
  faReact
} from "@fortawesome/free-brands-svg-icons";

const Journey = () => {
    const journeyData = [
  {
    title: "CSE",
    description: "Building strong foundations",
    icon: faGraduationCap
  },

  {
    title: "Web Development",
    description: "Exploring real-world applications",
    icon: faCode
  },

  {
    title: "React",
    description: "Building interactive user interfaces",
    icon: faReact
  },

  {
    title: "Next.js",
    description: "Creating modern full-stack applications",
    iconLabel: "N"
  },

  {
    title: "Interactive Web",
    description: "Building impactful solutions",
    icon: faChartColumn
  }
];
    return (
       <section className="my-journey-section" id="journey">
            <div className="journey-header">
                <h1>My Journey</h1>

                <p>A path of continuous learning and growth</p>
            </div>
       

            <div className="journey-cards">
               {
                journeyData.map((item, index) =>(
                  <div className="journey-step" key={item.title}>
                    <JourneyCard
                        icon={item.icon}
                        iconLabel={item.iconLabel}
                        title={item.title}
                        description={item.description}
                    />
                    {index < journeyData.length - 1 && <span className="journey-arrow" aria-hidden="true">→</span>}
                  </div>
                ))

               }
            </div>
            <aside className="journey-callout">
              <span className="journey-rocket" aria-hidden="true">🚀</span>
              <p>Currently on a journey to become a skilled software developer and contribute to meaningful products.</p>
              <a className="journey-connect" href="#contact">Let's Connect <span aria-hidden="true">→</span></a>
            </aside>
            
       </section>
    );
};

export default Journey;
