import React, { useState } from 'react';
import './App.scss';

import Users from './Components/Users/Users';

const App = () => {
  const [usersState, addUser] = useState({ users: [] });

  const getUserHandler = () => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        const users = [...usersState.users];
        users.push(data.results[0]);
        addUser({ users: users });
      });
  };

  return (
    <div className="App">
      <button onClick={getUserHandler} className="btn btn--add">
        Add user
      </button>
      <button onClick={getUserHandler} className="btn btn--delete">
        Delete user
      </button>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Username</th>
          </tr>
        </thead>
        <Users users={usersState.users}></Users>
      </table>
    </div>
  );
};

export default App;
