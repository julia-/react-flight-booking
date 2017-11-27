import React from 'react';

function Emoji({
  emotion = 'happy',
  cat = false
}) {
  let text = ''

  if (cat) {
    if (emotion === 'sad') {
      text = '😭'
    }
    else if (emotion === 'love') {
      text = '😻'
    }
    else if (emotion === 'fear') {
      text = '😱'
    }
    else {
      text = '😺'
    }
  }
  else {
    if (emotion === 'sad') {
      text = '😭'
    }
    else if (emotion === 'love') {
      text = '😻'
    }
    else if (emotion === 'fear') {
      text = '😱'
    }
    else {
      text = '😄'
    }
  }

  return (
    <span>
      { text }
    </span>
  )
}

export default Emoji