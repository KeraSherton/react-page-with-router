import React from "react";
import "../styles/ContactPage.css";
import { useState } from "react";
import { Prompt } from "react-router-dom";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="contact_box">
      <Prompt when={message} message="Nice try Sauron! You didn't send them :(" />

      <form className="contact_form">
        <label className="contact_label">Send hobbits to Mordor!</label>
        <textarea 
          className="contact_textarea fancy_input"
          placeholder="Write message..."
          required
          onSubmit={e => e.preventDefault()}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button className="contact_button" onClick={()=> alert("Good job! You saved Middle-earth!")}>Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
