import React from 'react';
import '../styles/UserAccount.css';

const UserAccount = ({ name, hobbies }) => {
  return (
    <div className="container">
      {/* Display the name */}
      <h1>Hello, my name is {name}!</h1>
      
      {/* Display the list of hobbies */}
      <h2>My Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* Contact form */}
      <h2>Contact Me:</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <br></br>
        <label>
          Message:
          <textarea placeholder="Write your message"></textarea>
        </label>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default UserAccount;
