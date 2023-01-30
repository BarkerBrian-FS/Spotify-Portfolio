import React from 'react'

function Album() {
  return (
    <section>
      <a href={search.album_url}>
        <img src={search.album_image} alt={search.album} width="200" />
        <p> {search.album}</p>
      </a>
    </section>
  )
}

export default Album