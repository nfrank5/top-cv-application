import { useState } from 'react'
import { Fragment } from 'react';


function DataUnit({ type, data, edit, name, text }) {

  const [value, setValue] = useState(data);

  if (edit) {
    return (
      <Fragment>
        <label htmlFor={name}>{text}: </label>
        <input type={type}
               value={value}
               onChange={(event) => setValue(event.target.value)}
               id={name}
               name={name} />
      </Fragment>
    );
  } else {
    
    return (<p>{text + ": " + value}</p>);
  }
}

export default DataUnit;
