import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const StoryCard = (story) => {
  const { _id, user, title, body, shared } = story;
  const random = Math.random();
  const url = `https://picsum.photos/200/250?random=${random}`;

  return (
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className="d-inline-block mb-2 text-primary">{user.firstName} {user.lastInitial}</strong>
        <h5 className="mb-0">{title}</h5>
        <div className="mb-1 text-muted"><Moment format="ll">{shared}</Moment></div>
        <p className="card-text mb-auto">{body.substring(0, 100)}...</p>
        <Link to={`/stories/${_id}`} className="stretched-link">More</Link>
      </div>
      <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img bg-dark" width="200" height="250" src={url} />
      </div>
    </div>
  )
}

export default StoryCard
