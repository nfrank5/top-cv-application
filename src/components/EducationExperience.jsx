import DataUnit from "./DataUnit";

function EducationExperience({cv, edit, onAddEducationExperience, onRemoveEducationExperience}){
  const educationExperience = cv.educationExperience;


  return (
    <>
      <h2>Education experience</h2>
      <ul>
        {educationExperience.map((xp) => {
          console.log(xp.date)
          return (
          <li key={xp.id}>  
            <DataUnit
              type={"text"}
              data={xp.school}
              edit={edit}
              text={"School"}
              name={"school"}
              >
            </DataUnit>
            <DataUnit
              type={"text"}
              data={xp.title}
              edit={edit}
              text={"Title"}
              name={"title"}
              >
            </DataUnit>
            <DataUnit
              type={"date"}
              data={xp.date.toISOString().slice(0, 10)}
              edit={edit}
              text={"Date"}
              name={"date"}
              >
            </DataUnit>
        </li>);
        })}
      </ul>
      <button onClick={onAddEducationExperience}>Add</button>
      <button onClick={onRemoveEducationExperience}>Remove</button>
    </>

  )
}



export default EducationExperience;