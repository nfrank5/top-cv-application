import DataUnit from "./DataUnit";
import { useState } from 'react';

function GeneralInfo({ cv, edit }) {

  const generalInfo = cv.generalInfo;


  return (
    <>
      <h2>General Info</h2>
        <ul>
          <DataUnit
            type={"text"}
            data={generalInfo.firstName}
            edit={edit}
            text={"First Name"}
            name={"firstName"}
          ></DataUnit>
          <DataUnit
            type={"text"}
            data={generalInfo.lastName}
            edit={edit}
            text={"Last Name"}
            name={"lastName"}
          ></DataUnit>
          <DataUnit
            type={"email"}
            data={generalInfo.email}
            edit={edit}
            text={"E-mail"}
            name={"email"}
          ></DataUnit>
          <DataUnit
            type={"tel"}
            data={generalInfo.phone}
            edit={edit}
            text={"Telephone"}
            name={"telephone"}
          ></DataUnit>
        </ul>
    </>
  );
}

export default GeneralInfo;
