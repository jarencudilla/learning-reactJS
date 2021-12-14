import React from 'react'

const ListPeople = ({ people = [] }) => {
  return (
    <ul>
      {people.map((person) => (
        <li>{person?.name}</li>
      ))}
    </ul>
  )
}

export default ListPeople