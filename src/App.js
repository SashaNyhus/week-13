import { useState, Fragment, useEffect } from "react";
import './App.css';
import { fetchingFunction } from "./modules/fetching-function";
import { TitleButton } from "./modules/title-button";
import {exampleTitlesData, exampleSkillsData} from "./modules/example-data"
import { TitlesList } from "./modules/titles-list";
import { SkillsList } from "./modules/skills-list";
import { posterData } from "./modules/poster-data";
import { ImperialAd} from "./modules/imperial-ad";

function App() {
  console.log("App just rendered")
  const [titles, setTitles] = useState(exampleTitlesData.data);
  const [chosenTitles, setChosenTitles] = useState([]);
  const [skills, setSkills] = useState(exampleSkillsData.data);
  const [chosenTitlesIncreasing, setChosenTitlesIncreasing] = useState();
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [posterIndex, setPosterIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const fetchedTitles = await fetchingFunction("title", "language", 100);
    const fetchedSkills = await fetchingFunction("skills", "language", 100);
    setTitles(fetchedTitles.data);
    setSkills(fetchedSkills.data);
    setLoading(false);
  }

  const addTitle = (indexOfTitleToAdd) => {
    let newTitles = [...titles];
    let newChosenTitles = [...chosenTitles];
    let titleToAdd = newTitles[indexOfTitleToAdd];
    console.log(titleToAdd.name + " is being added");
    newTitles.splice(indexOfTitleToAdd, 1);
    newChosenTitles.push(titleToAdd);
    setTitles(newTitles);
    setChosenTitles(newChosenTitles);
    setChosenTitlesIncreasing(true);
    addASkill();
  }

  const removeTitle = (indexOfTitleToRemove) => {
    let newTitles = [...titles];
    let newChosenTitles = [...chosenTitles];
    let titleToRemove = chosenTitles[indexOfTitleToRemove];
    console.log(titleToRemove.name + " is being removed");
    newChosenTitles.splice(indexOfTitleToRemove, 1);
    newTitles.push(titleToRemove);
    setTitles(newTitles);
    setChosenTitles(newChosenTitles);
    setChosenTitlesIncreasing(false);
  }

  const addASkill = () => {
    if(skills.length){
      let newSkillsArray = [...skills];
      let newDisplayedSkillsArray = [...displayedSkills];
      let skillToAdd = newSkillsArray.pop();
      newDisplayedSkillsArray.push(skillToAdd);
      setSkills(newSkillsArray);
      setDisplayedSkills(newDisplayedSkillsArray);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPosterIndex(i => (i + 1))
  }, [chosenTitles])


  //Tried using useEffect for this, but it would always run with older versions of the displayed skills list and never increase the array length beyond 1
  // useEffect(() => {
  //   if(chosenTitlesIncreasing){
  //     addASkill();
  //   }
  // }, [chosenTitlesIncreasing])
  return (
    <div className="main-box">
      {loading ? 
        <h1 className="loading-text">Loading Job Data</h1> :
        <div className="jobs-box">
          <TitlesList sectionClass="main-titles-list" sectionTitle="Job Postings" titles={titles} buttonFunction={addTitle} buttonText="Add Title" />
          <TitlesList sectionClass={`chosen-titles-list ${chosenTitlesIncreasing ? "green-text": "red-text"} `} sectionTitle="Wanting to Hire" titles={chosenTitles} buttonFunction={removeTitle} buttonText="Remove Title" />
          {displayedSkills.length ?
            <SkillsList skillsArray={displayedSkills} /> :
            <div className="skills-box"> 
              {/* Couldn't get image source to work properly :/
              <ImperialAd posterData={posterData} posterIndex={posterIndex}/> */}
            </div>
            } 
        </div>
      }
    </div>
  );
}

export default App;

//URL { href: "https://emsiservices.com/emsi-open-proxy-service/postings/us/title?q=python&limit=50"

