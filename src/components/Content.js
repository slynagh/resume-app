import Objective from "../content/Objective";
import ContentWorkHistory from "../content/WorkHistory";
import ContentSkills from "../content/Skills";
import ContentEducation from "../content/Education";
import ContentPointsOfInterest from "../content/PointsOfInterest";
import ContentLinks from "../content/Links";
import ContentReferences from "../content/References";
import ContentProfessionalAcheivements from "../content/ProfessionalAchievements";

function getContent(name) {
  switch (name) {
    case "Objective":
      return <Objective />;
    case "ProfessionalAchievements":
      return <ContentProfessionalAcheivements />;
    case "WorkHistory":
      return <ContentWorkHistory />;
    case "Skills":
      return <ContentSkills />;
    case "Education":
      return <ContentEducation />;
    case "PointsOfInterest":
      return <ContentPointsOfInterest />;
    case "Links":
      return <ContentLinks />;
    case "References":
      return <ContentReferences />;
    default:
      return <Objective />;
  }
}

const Content = (props) => <div {...props}>{getContent(props.name)}</div>;

export default Content;
