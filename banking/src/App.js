import React, {useState} from 'react'

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [id, setId] = useState(-1)
  const [listNames, setListNames] = useState([])
  const [status, setStatus] = useState('add')
  
  const handleSave = () => {
    setListNames([...listNames, { firstName, lastName}])
  }

  const handleSave = () => {
    if 

  }
  
 const handleEdit = (val) => {
   const {id, firstName, lastName} = val
   setFirstName(firstName)
   setLastName(lastName)
   setId(id)
   setStatus('edit')
 }

 const handleDelete = (id) => {
   setListNames
 }

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
        {listNames.map((name) => (
          <li
        )}  
      </ul>    

    </div>
    



  );
}

export default App;
