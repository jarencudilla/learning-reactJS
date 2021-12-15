import React, { useState, useEffect } from 'react'
// import ListNamesComponent from './ListNames'

const initialList = [
  {
    id: 0,
    firstName: '',
    lastName: '',
  },
  {
    id: 1,
    firstName: '',
    lastName: '',
  },
]

let uid = initialList.length - 1
const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [id, setId] = useState(-1)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [listNames, setListNames] = useState([])
  const [status, setStatus] = useState('add')
  const [isLoading, setIsLoading] = useState(false)

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
  }

  useEffect(() => {
    setIsLoading(true)
    const fetchList = setTimeout(() => {
      setListNames(initialList)
      setIsLoading(false)
    }, 4000)

    return () => {
      clearTimeout(fetchList)
    }
  }, [])

  return (
    <div>
      <div>
        <div>{status}</div>
        <label>first name</label>
        <input
          type='text'
          value={firstName}
          onChange={(e) => {
            const { value } = e.target
            setFirstName(value)
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          value={lastName}
          onChange={(e) => {
            const { value } = e.target
            setLastName(value)
          }}
        />
      </div>
      <button onClick={}>Add 1 Person</button>
      <button onClick={}>Fetch</button>
      <br />
      <br />
      <br />
      <div>
        Search 
        <input type='text' value={searchKeyword} onChange={handleSearch} />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ListNamesComponent
          names={listNames}
          searchKeyword={searchKeyword}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
}

export default App
