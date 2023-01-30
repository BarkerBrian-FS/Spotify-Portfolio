import React from 'react'

function Artist() {
  return (
    <section>
      <a href={search.artist_url}>
        <img src={search.album_image} alt={search.artist}  />
        <p> {search.artist}</p>
      </a>
    </section>
  )
}

export default Artist