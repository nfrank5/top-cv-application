
import { useState } from 'react';
import EducationExperience from "./EducationExperience.jsx"
import GeneralInfo from "./GeneralInfo.jsx"
import PracticalExperience from "./PracticalExperience.jsx"
import CV from "../assets/data"

function FullCv(){
  
  const [cv, setCv] = useState(CV);

  

  const [edit, setEdit] = useState(true)

  function onEdit(e){
    e.preventDefault()
    setEdit(true);
  }

  function onSubmit(e){
    e.preventDefault();
   
    console.log(e)
    const newCv = {...cv}; 
    //newCv.firstName = e.target.form.firstName.value;
    
    /* 
      lastName: e.target.form.lastName.value,
      email: e.target.form.email.value,
      phone: e.target.form.telephone.value,};
 */    setEdit(false);
    setCv(newCv);
  }

  return (

    <>
      <form >
        <GeneralInfo cv={cv} edit={edit} onSubmit={onSubmit}></GeneralInfo>

        <EducationExperience cv={cv} edit={edit} onSubmit={onSubmit}></EducationExperience>
      
        <PracticalExperience cv={cv} edit={edit} onSubmit={onSubmit}></PracticalExperience>

        <button onClick={onEdit}>Edit</button>
        <button onClick={onSubmit}>Submit</button>
      </form>
    </>

  )
}


export default FullCv;