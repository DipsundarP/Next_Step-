import React, { useState } from "react";

function Touch() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setLoading(true);

    
    if (
      !formData.first ||
      !formData.last ||
      !formData.email ||
      !formData.phone ||
      !formData.organisation
    ) {
      setMessage("❌ Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "https://next-step-backend-bqug.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Email sent successfully!");
        setFormData({
          first: "",
          last: "",
          email: "",
          phone: "",
          organisation: "",
          message: "",
        });
      } else {
        setMessage(`❌ Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="py-5" id="contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6">
              <h3 className="fw-bold fs-2 mb-4">Get in touch</h3>
              <form onSubmit={handleSubmit} className="row g-4">
                <div className="col-md-6">
                  <label>
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="first"
                    value={formData.first}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="last"
                    value={formData.last}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label>
                    Organisation <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btnPrimary">
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>

              {/* Success/Error Message */}
              {message && (
                <p
                  className="mt-3"
                  style={{ color: message.startsWith("✅") ? "green" : "red" }}
                >
                  {message}
                </p>
              )}
            </div>

            {/* Contact Info Section */}
            <div className="col-md-6 col-lg-5">
              <p>6A, Kiran Sankar Roy Road, Kolkata-700001, India</p>
              <p>engage@nextsteps.net.in</p>
              <p>+91 9830320209 / 9836285620</p>
              <p>
                Follow us:
                <a
                  href="https://www.linkedin.com/company/next-steps-communications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  <i className="ri-linkedin-box-fill fs-4"></i>
                </a>
                <a
                  href="https://wa.me/919836285620"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  <i className="ri-whatsapp-fill fs-4"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Touch;