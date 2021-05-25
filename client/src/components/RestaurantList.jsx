import React from 'react';

const RestaurantList = () => {
  return (
    <div>
      <table className="table table-hover align-middle">
        <thead className="">
          <tr className="table-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
