import React from "react";

const User = ({ users, ...props }) => {
  return (
    <div>
      {users?.map(({ email, address, isEmailConfirmed }) => (
        <p>
          {email} - {address} || {isEmailConfirmed}
        </p>
      ))}
    </div>
  );
};

export default User;
