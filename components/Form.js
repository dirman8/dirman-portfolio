import React from 'react'

const Form = () => {
  return (
    <form method="POST" name="contactform" className="contactForm">
      <input type="hidden" name="form-name" value="contactForm" />

      <input type="text" name="name" placeholder="Enter your name" />

      <input type="email" name="email" placeholder="Enter your email" />

      <textarea name="message" placeholder="Messaage"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form