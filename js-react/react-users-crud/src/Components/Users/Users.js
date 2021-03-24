import React from 'react';

const TRow = props => {
  let users = null;

  users = props.users.map(user => {
    return (
      <tr key={`${user.id.value}${user.login.salt.split(0, -3)}`} onClick={props.click} data-key={`${user.id.value}${user.login.salt.split(0, -3)}`}>
        <th>{user.name.first}</th>
        <th>{user.name.last}</th>
        <th>
          {user.location.city}, {user.location.country}
        </th>
        <th>{user.gender}</th>
        <th>{user.login.username}</th>
      </tr>
    );
  });

  return <tbody>{users}</tbody>;
};

export default TRow;
