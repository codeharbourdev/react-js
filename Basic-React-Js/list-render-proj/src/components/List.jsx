import React from 'react'

const List = (props) => {
  return (
    props.movies.map((movie) => 
        <tbody>
            <tr>
                <td>{movie.id}</td>
                <td>{movie.movie}</td>
                <td>{movie.actor}</td>
            </tr>
        </tbody>
    )
  )
}

export default List

