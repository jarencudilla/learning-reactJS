import React, {useState} from 'react'

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [listNames, setListNames] = useState([])
  
  const handleSave = () => {
    setListNames([...listNames, { firstName, lastName}])
  }

  const handleEdit
  


  return (
    <div>
      <div>
        <label>First Name</label>
        <input type='text' value={firstName} onChange={(e) =>{
          const {value} = e.target
          setFirstName(value)
        }} />
      </div>
    <div>
      <label>Last Name</label>
      <input type='text' value={lastName} onChange={(e) =>{
        const {value} = e.target
        setLastName(value)
        }} />
      </div>
      <button onClick={handleSave}>Save</button>
      <br />
      <ul>
        {listNames.map}  
      </ul>    

    </div>
    



  );
}

export default App;
