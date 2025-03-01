import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Email address" />
      <button>Join a Waitlist</button>
    </form>
  );
};

export default FormEvent;
