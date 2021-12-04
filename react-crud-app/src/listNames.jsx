import React from 'react'

const ListNamesComponent = ({ names = [], onEdit, onDelete }) => {

  return (
    <ul>
      {names.map((name) => (
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