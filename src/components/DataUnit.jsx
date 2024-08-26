import { useState } from 'react'


function DataUnit({ type, data, edit, name, text }) {

  const [value, setValue] = useState(data);

  if (edit) {
    return (
      <li>
        <label htmlFor={name}>{text}: </label>
        <input type={type}
               value={value}
               onChange={(event) => setValue(event.target.value)}
               id={name}
               name={name} />
      </li>
    );
  } else {
    
    return (<li>{text + ": " + value}</li>);
  }
}

export default DataUnit;
