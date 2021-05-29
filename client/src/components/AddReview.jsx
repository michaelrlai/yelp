import React, { useState } from 'react';

const AddReview = () => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');

  return (
    <div className="mb-2">
      <form action="">
        <div className="row mb-2">
          <div className="col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label htmlFor="rating">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="form-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="Review">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            name="Review"
            id="Review"
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
