
import { useState } from 'react';
import EducationExperience from "./EducationExperience.jsx"
import GeneralInfo from "./GeneralInfo.jsx"
import PracticalExperience from "./PracticalExperience.jsx"
import CV from "../assets/data"
import "../styles/FullCv.css"

function FullCv(){
  
  const [cv, setCv] = useState(CV);
  const [edit, setEdit] = useState(true)

  function onEdit(e){
    e.preventDefault()
    setEdit(true);
  }

  function onSubmit(e){
    e.preventDefault();
    setEdit(false);
    setCv(...cv);
  }

  function onRemoveEducationExperience(e){
    e.preventDefault();
    cv.educationExperience.pop();
    const newCv = {...cv}
    setCv(newCv);
  }

  function addEducationExperience(e){
    e.preventDefault();
    const newEducationExperience = {school: "",
                                    title: "",
                                    date: new Date(),
                                    id: crypto.randomUUID()};
    const newCv = {...cv}
    newCv.educationExperience.push(newEducationExperience)
    setCv(newCv);
  }

  function onRemoveWorkingExperience(e){
    e.preventDefault();
    cv.practicalExperience.pop();
    const newCv = {...cv}
    setCv(newCv);
  }

  function addWorkingExperience(e){
    e.preventDefault();
    const newWorkingExperience = {  company: "",
                                    positionTitle: "",
                                    dateFrom: new Date(),
                                    dateUntil: new Date(),
                                    id: crypto.randomUUID()};
    const newCv = {...cv}
    newCv.practicalExperience.push(newWorkingExperience)
    setCv(newCv);
  }

  return (

    <>
      <form >
        <GeneralInfo cv={cv} edit={edit}></GeneralInfo>

        <EducationExperience cv={cv} edit={edit} onRemoveEducationExperience={onRemoveEducationExperience} onAddEducationExperience ={addEducationExperience}></EducationExperience>
      
        <PracticalExperience cv={cv} edit={edit} addExperience={addWorkingExperience} onRemoveWorkingExperience={onRemoveWorkingExperience}></PracticalExperience>
        <br />
        <button onClick={onEdit}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>

  )
}


export default FullCv;