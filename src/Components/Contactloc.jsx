import React from "react";


 const Contact = () => {
  return(
    <>
        <section className="contactlog">
            <h2 className="contact-header">Contact___</h2>
          <div className="contact-content">

          <div className="contact">
            <div className="first_name">
            <span>First Name </span>
            <input type="text" placeholder="Full Name" />
            </div>
            <div className="last_name">
            <span>Last Name </span>
            <input type="text" placeholder="Last Name" />
            </div>
            <div className="email">
            <span>Email </span>
            <input type="email" placeholder="Email" />
            </div>
            <div className="contact">
            <span>Contact </span>
            <input type="text" />
            </div>
            <div className="message">
            <span>Message </span> 
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div className="submit">
              <button>Submit</button>
              </div>
              
          </div>
          <div className="location">
            
          </div>
          </div>
        </section>
    </>
  )
 };

 export default Contact;