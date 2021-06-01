import { useState, Fragment, useEffect } from "react";
import './App.css';
import { fetchingFunction } from "./modules/fetching-function";
import { TitleButton } from "./modules/title-button";
import {exampleTitlesData, exampleSkillsData} from "./modules/example-data"
import { TitlesList } from "./modules/titles-list";

function App() {
  console.log("I just rendered")
  const [titles, setTitles] = useState(exampleTitlesData.data);
  const [chosenTitles, setChosenTitles] = useState([]);
  const [skills, setSkills] = useState(exampleSkillsData.data);
  const [chosenTitlesIncreasing, setChosenTitlesIncreasing] = useState(true);
  const [displayedSkills, setDisplayedSkills] = useState([]);
  const [loading, setLoading] = useState(true);

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
    let newSkillsArray = [...skills];
    let newDisplayedSkillsArray = [displayedSkills];
    let skillToAdd = newSkillsArray.pop();
    newDisplayedSkillsArray.push(skillToAdd);
    setSkills(newSkillsArray);
    setDisplayedSkills(newDisplayedSkillsArray);
  }

  useEffect(async () => {
    const fetchedTitles = await fetchingFunction("title", "language", 100);
    const fetchedSkills = await fetchingFunction("skills", "language", 100);
    setTitles(fetchedTitles.data);
    setSkills(fetchedSkills.data);
    setLoading(false);
  }, [fetchingFunction]);

  useEffect(() => {
    if(chosenTitlesIncreasing){
      addASkill();
    }
  }, [chosenTitlesIncreasing])

  return (
    <div className="main-box">
      <TitlesList sectionClass="main-titles-list" sectionTitle="Job Postings" titles={titles} buttonFunction={addTitle} buttonText="Add Title" />
      
      <TitlesList sectionClass={`chosen-titles-list ${chosenTitlesIncreasing ? "green-text": "red-text"} `} sectionTitle="Wanting to Hire" titles={chosenTitles} buttonFunction={removeTitle} buttonText="Remove Title" />
      
    </div>
  );
}

export default App;

//URL { href: "https://emsiservices.com/emsi-open-proxy-service/postings/us/title?q=python&limit=50"

