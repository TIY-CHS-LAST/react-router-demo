import React from 'react'
import * as data from './data'

const QuestionDetail = ({ match }) => {
  console.log('our id',match.params.id);
  const matchedQuestion = data.default.find(item => item.id === Number(match.params.id))
  console.log('matchedQuestion', matchedQuestion);
  return (
    <h1>{JSON.stringify(matchedQuestion)}</h1>
  )
}

export default QuestionDetail
