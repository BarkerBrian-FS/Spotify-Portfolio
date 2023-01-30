import React from 'react'

function Track() {
  return (
    <section>
    <a href={search.song_url}>
      <img src={search.album_image} alt={search.song} width="200" />
      <p> {search.song}</p>
    </a>
  </section>
  )
}

export default Track