import React from 'react';

import ContentObjective from '../content/Objective';
import ContentWorkHistory from '../content/WorkHistory';
import ContentSkills from '../content/Skills';
import ContentEducation from '../content/Education';
import ContentPointsOfInterest from '../content/PointsOfInterest';
import ContentLinks from '../content/Links';
import ContentReferences from '../content/References';
import ContentProfessionalAcheivements from '../content/ProfessionalAchievements';

function Content(props){
    const MyContent = (function() {
        switch(props.name){
            case "Objective" : return ContentObjective;
            case "ProfessionalAchievements" : return ContentProfessionalAcheivements;
            case "WorkHistory" : return ContentWorkHistory;
            case "Skills" : return ContentSkills;
            case "Education" : return ContentEducation;
            case "PointsOfInterest" : return ContentPointsOfInterest;
            case "Links" : return ContentLinks;
            case "References" : return ContentReferences;
            default : return ContentObjective;
        }
    })();

    return(
        <MyContent {...props} />
    );
}

export default Content;