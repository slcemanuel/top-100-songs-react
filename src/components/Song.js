import React from 'react';

const Song = ({ id, complete, title, updateSong, deleteSong }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ complete ? styles.complete : {} } className="center">
        {title}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateSong(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteSong(id)}>
      Delete
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

export default Song;