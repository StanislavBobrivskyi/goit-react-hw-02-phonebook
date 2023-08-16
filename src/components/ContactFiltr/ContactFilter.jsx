import React from 'react';

export function ContactFilter({ filter, onChangeFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
}
