import React, { useState } from 'react';
import './App.scss';

import Users from './Components/Users/Users';
import Button from './Components/Button/Button';

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

  const deleteUserHandler = () => {
    console.log('a');
  };

  return (
    <div className="App">
      <Button click={getUserHandler} event="add" />
      <Button click={deleteUserHandler} event="delete" />
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
