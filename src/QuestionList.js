import React from 'react'
import { Link } from 'react-router-dom'
import * as data from './data'
console.log(data);



const QuestionList = (props) => {

  return (
    <ul>
      {data.default.map(item => {
        return (<li key={item.id}><Link to={`/${item.id}`}>{item.answer}</Link></li>)
      })}
    </ul>
  )
}

export default QuestionList
