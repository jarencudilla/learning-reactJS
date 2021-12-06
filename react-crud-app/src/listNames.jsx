import React, { useState, useEffect } from 'react'

const ListNamesComponent = ({ 
  names = [],
  searchKeyword = '',
  onEdit,
  onDelete
}) => {
  const [filteredNames, setfilteredNames] = useState(names)

  useEffect(() => {
    if (searchKeyword === '') {
      setfilteredNames(names)
    } else {
      setfilteredNames(
        names.filter((name) => {
          return name.firstName.toLowerCase().includes(searchKeyword.toLowerCase())
        })
      )
    }
  
    }, [names, searchKeyword])
  
  return (
    <ul>
      {filteredNames.map((name) => (
        <li key={name.id} style={{ display: 'flex', gap: 10 }}>
          <div onClick={() => onEdit(name)}>
            {`${name.id} ${name.firstName} ${name.lastName}`}
          </div>
          <button onClick={() => onDelete(name.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default ListNamesComponent