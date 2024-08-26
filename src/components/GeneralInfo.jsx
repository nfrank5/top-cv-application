import DataUnit from "./DataUnit";
import { useState } from 'react';

function GeneralInfo({ cv, edit, onSubmit }) {

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
            onSubmit={onSubmit}
          ></DataUnit>
          <br />
          <DataUnit
            type={"text"}
            data={generalInfo.lastName}
            edit={edit}
            text={"Last Name"}
            name={"lastName"}
            onSubmit={onSubmit}
          ></DataUnit>
          <br />
          <DataUnit
            type={"email"}
            data={generalInfo.email}
            edit={edit}
            text={"E-mail"}
            name={"email"}
            onSubmit={onSubmit}
          ></DataUnit>
          <br />
          <DataUnit
            type={"tel"}
            data={generalInfo.phone}
            edit={edit}
            text={"Telephone"}
            name={"telephone"}
            onSubmit={onSubmit}
          ></DataUnit>
          <br />
        </ul>
    </>
  );
}

export default GeneralInfo;
