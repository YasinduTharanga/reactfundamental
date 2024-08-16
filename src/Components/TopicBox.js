import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  const topicbox ="My Favourite food is";
  const priceList= "which is";
  return (
    <div>
        <div className="topicbox">
            <span className="text">{topicbox} {props.food} {priceList} {props.price}
              {props.children}
            </span>
        </div>
    </div>
  )
}
