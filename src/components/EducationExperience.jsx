import DataUnit from "./DataUnit";
import { Fragment } from 'react';

function EducationExperience({cv, edit, onSubmit}){
  const educationExperience = cv.educationExperience;

  return (
    <>
      <h2>Education Experience</h2>
      <ul>
        {educationExperience.map((xp) => {
          return (
          <Fragment key={xp.school+xp.title}>      
            <DataUnit
              type={"text"}
              data={xp.school}
              edit={edit}
              text={"School"}
              name={"school"}
              onSubmit={onSubmit}
              >

            </DataUnit>
        </Fragment>);
        })}
      </ul>
    </>

  )
}



export default EducationExperience;