import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {}
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  return (
    <div>
      <table className="table table-dark table-hover align-middle">
        <thead className="table-primary">
          <tr className="">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() => {
                    handleRestaurantSelect(restaurant.id);
                  }}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>reviews</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="btn btn-warning btn-sm"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
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
