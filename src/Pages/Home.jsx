import React from 'react'
import TopicBox from '../Components/TopicBox'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <TopicBox food="Rice" price="Rs.450">
        <radio>Yes</radio>
      </TopicBox>
      <TopicBox food="Kottu" price="Rs.350">
        <button>Click Me</button>
      </TopicBox>
      <TopicBox food="Prawns" price="Rs.650">
        <label>Hello</label><textarea></textarea>
      </TopicBox>
    </div>
  )
}
