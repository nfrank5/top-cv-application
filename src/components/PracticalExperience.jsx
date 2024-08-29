import DataUnit from "./DataUnit";
import { Fragment } from 'react';

function  PracticalExperience({cv, edit,onRemoveWorkingExperience, addExperience}){
  const practicalExperience = cv.practicalExperience;

  return (
    < >   
      <h2>Practical Experience</h2>
      <ul>
      {practicalExperience.map((xp) => {
          return (
          <li key={xp.id}>  
            <DataUnit
              type={"text"}
              data={xp.company}
              edit={edit}
              text={"Company"}
              name={"company"}
              >
            </DataUnit>
            <DataUnit
              type={"text"}
              data={xp.positionTitle}
              edit={edit}
              text={"Position Title"}
              name={"positionTitle"}
              >
            </DataUnit>
            <DataUnit
              type={"date"}
              data={xp.dateFrom.toISOString().slice(0, 10)}
              edit={edit}
              text={"From"}
              name={"dateFrom"}
              >
            </DataUnit>
            <DataUnit
              type={"date"}
              data={xp.dateUntil.toISOString().slice(0, 10)}
              edit={edit}
              text={"Until"}
              name={"dateUntil"}
              >
            </DataUnit>
        </li>);
        })}
      </ul>
      <button onClick={addExperience}>Add</button>
      <button onClick={onRemoveWorkingExperience}>Remove</button>
      </>
  )

}


export default PracticalExperience;