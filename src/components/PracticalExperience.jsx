import DataUnit from "./DataUnit";
import { Fragment } from 'react';

function  PracticalExperience({cv, edit, onSubmit}){
  const practicalExperience = cv.practicalExperience;

  return (
    < >   
      <h2>Practical Experience</h2>
      <ul>
        {practicalExperience.map((xp) => {
          return (
          <Fragment key={xp.company+xp.positionTitle}>   
            <DataUnit
                    type={"text"}
                    data={practicalExperience[0].company}
                    edit={edit}
                    text={"Company"}
                    name={"company"}
                    onSubmit={onSubmit}
            ></DataUnit>
        </Fragment>);
        })}
      </ul>
      </>
  )

}


export default PracticalExperience;