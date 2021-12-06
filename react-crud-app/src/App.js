import React, { useState, useEffect } from 'react'
import ListNamesComponent from './listNames'

let uid = -1
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [id, setId] = useState(-1)
  const [listNames, setListNames] = useState([])
  const [status, setStatus] = useState('add')
  const [filteredListNames, setFilteredListNames] = useState([])

  const handleSave = () => {
    if (status === 'add') {
      uid += 1
      setListNames([...listNames, { id: uid, firstName, lastName }])
    } else if (status === 'edit') {
      const editName = listNames.find((name) => name.id === id)
      setListNames(
        listNames.map((name) => {
          if (name.id === editName.id) {
            return {
              id,
              firstName,
              lastName,
            }
          }
          return name
        })
      )
    }

    setFirstName('')
    setLastName('')
    setStatus('add')
    setSearchKeyword('')
  }

  const handleEdit = (val) => {
    const { id, firstName, lastName } = val
    setFirstName(firstName)
    setLastName(lastName)
    setId(id)
    setStatus('edit')
  }

  const handleDelete = (id) => {
    setListNames(
      listNames.filter((name) => {
        return name.id !== id
      })
    )

    setFirstName('')
    setLastName('')
    setId(-1)
    setStatus('add')
    setSearchKeyword('')
  }

  const handleSearch = (event) => {
    const { value } = event.target

    setSearchKeyword(value)
    // const filteredNames = listNames.filter((name) => {
    //   return name.firstName.toLowerCase().includes(value.toLowerCase())
    // })
    // setFilteredListNames(filteredNames)
  }

  return (
    <div>
      <div>
        <div>{status}</div>
        <label>first name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            const { value } = e.target
            setFirstName(value)
          }}
        />
      </div>
      <div>
        <label>last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            const { value } = e.target
            setLastName(value)
          }}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <br />
      <br />
      <br />
      <div>
        search keyword
        <input type="text" value={searchKeyword} onChange={handleSearch} />
      </div>

      <ListNamesComponent
        names={listNames}
        searchKeyword={searchKeyword}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App