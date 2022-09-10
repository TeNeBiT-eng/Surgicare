import React from "react";
import "./consultation.css";

const Consultation = () => {
  return (
    <section className="section4" id="consultation">
      <main>
        <h3>Book An Appointment</h3>

        <form>
          <div className="form-group">
            <div>
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="phone">Phone No</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div class="form-group">
            <div>
              <label htmlFor="gender">Gender</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="gender"
                id="gender"
                placeholder="Enter your gender e.g male"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="age">Age</label>
            </div>
            <div className="input-group">
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Enter age"
              />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="date">Date</label>
            </div>
            <div className="input-group">
              <input type="date" name="date" id="date" />
            </div>
          </div>

          <div className="btn-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Consultation;

// ref={form} onSubmit={sendEmail}
