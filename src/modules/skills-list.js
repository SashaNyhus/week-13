import { ImperialAd } from "./imperial-ad"

export const SkillsList = ({skillsArray, posterData, posterIndex}) => {
    console.log(skillsArray)
    let skillList = skillsArray.map(skillObj => <li>{`${skillObj.name} (${skillObj.properties.skill_type})`}</li>)
    return <div className="skills-box">
        <ImperialAd posterData={posterData} posterIndex={posterIndex}/>
        <h1 className="section-header">In-Demand Skills</h1>
        <ul>
            {skillList}
        </ul>
    </div>
}

// ${skillObj.properties.skill_type}