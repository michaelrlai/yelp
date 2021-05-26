import React, { useContext, useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantContext);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
      console.log(response);
    } catch (err) {}
  };

  return (
    <div className="mb-4">
      <form className="row g-3 mx-auto" action="">
        <div className="col">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="col">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="col-3">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select"
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$ </option>
          </select>
        </div>
        <div className="col-auto">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
