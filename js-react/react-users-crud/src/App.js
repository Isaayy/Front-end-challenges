import React, { useState } from 'react';
import './App.scss';

import Users from './Components/Users/Users';
import Button from './Components/Button/Button';

const App = () => {
  const [usersState, updateUsers] = useState({ users: [], selectedUsersId: [] });

  const getUserHandler = () => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        const users = [...usersState.users];
        users.push(data.results[0]);
        updateUsers({ users: users, selectedUsersId: usersState.selectedUsersId });
      });
  };

  const selectUserHandler = e => {
    const ID = e.currentTarget.dataset.key;
    let ids = [...usersState.selectedUsersId];

    // Toggle between select and unselect
    e.currentTarget.classList.toggle('background-add');
    if (ids.includes(ID)) ids = ids.filter(id => id !== ID);
    else ids.push(ID);

    updateUsers({ users: usersState.users, selectedUsersId: ids });
  };

  const deleteUserHandler = () => {
    let users = [...usersState.users];
    let ids = [...usersState.selectedUsersId];

    if (ids.length == 0) {
      alert('Please select users you want to delete');
      return;
    }

    users = users.filter(user => !ids.includes(`${user.id.value}${user.login.salt.split(0, -3)}`));
    ids = [];

    updateUsers({ users: users, selectedUsersId: ids });
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
        <Users users={usersState.users} click={selectUserHandler.bind(1)}></Users>
      </table>
    </div>
  );
};

export default App;
