import React, { useState, useEffect } from 'react'

export const Stories = () => {
  const [stories, setStories] = useState([])
  useEffect(() => {
    (async () => {
      const result = await fetch('/api/stories')
      const data = await result.json()
      setStories(data)
    })()
  }, [])

  return (
    <div>
      {stories.map(story => {
        const { title, body, _id } = story
        return (
          <div key={_id}>
            <p style={{ fontWeight: 'bold' }}>{title}</p>
            <p> {body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Stories