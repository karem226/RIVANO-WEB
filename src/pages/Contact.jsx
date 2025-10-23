import React, {useState} from 'react';
export default function Contact(){ 
  const [sent,setSent] = useState(false);
  function onSubmit(e){ e.preventDefault(); setSent(true); }
  return (
    <section className="container">
      <h2 className="section-title">CONTACT</h2>
      <form onSubmit={onSubmit} className="contact-grid card">
        <label>Name<input name="name" required/></label>
        <label>Email<input name="email" type="email" required/></label>
        <label style={{gridColumn:'1 / -1'}}>Message<textarea name="message" rows="6" required/></label>
        <div style={{gridColumn:'1 / -1'}}><button className="btn btn-primary" type="submit">Send Message</button>{sent && <span style={{marginLeft:12}}>Sent (demo)</span>}</div>
      </form>
    </section>
  );
}