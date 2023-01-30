import React from 'react'

import Artists from "./Artists";
import Albums from "./Albums";
import Songs from "./Songs";

function Results() {
  return (
    <div className="results">
      <section>
        <h2>
          Artists 
        </h2>
        {searchResults.map((search) => {
          return <Artists search={search} key={search.uri} />;
        })}
      </section>
      <section>
        <h2>
          Albums 
        </h2>
        {searchResults.map((search) => {
          return <Albums search={search} key={search.uri} />;
        })}
      </section>
      <section>
        <h2>
          Songs 
        </h2>
        {searchResults.map((search) => {
          return <Songs search={search} key={search.uri} />;
        })}
      </section>
    </div>
  )
}

export default Results