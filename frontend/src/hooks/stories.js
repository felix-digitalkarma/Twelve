import React from 'react'
import { Link } from '@reach/router';

const Stories = () => {
  return (
    <div>
      <h2>Stories</h2>
      <ul>
        <li>
          <Link to="/stories/123">John's Story</Link>
        </li>
        <li>
          <Link to="/stories/abc">Bill's Story</Link>
        </li>
      </ul>
    </div>
  );
}

export default Stories;