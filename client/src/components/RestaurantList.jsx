import React, { useContext, useEffect } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-hover align-middle">
        <thead className="">
          <tr className="table-dark">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button className="btn btn-warning btn-sm">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              );
            })}
          {/*           <tr>
            <td>mdconalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning btn-sm">Update</button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mdconalds</td>
            <td>new york</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning btn-sm">Update</button>
            </td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
