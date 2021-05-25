import React from 'react';

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form className="row g-3 mx-auto" action="">
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
        <div className="col-2">
          <select className="form-select">
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$ </option>
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
