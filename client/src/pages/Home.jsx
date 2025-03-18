import React from "react";

function Home() {
  return (
    <div>
            

      {/* <!-- Founder Panel --> */}
      <section className="teamPanel" id="founder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 text-center mb-2">
              <h2 className="title mb-3 fw-semibold">Founders</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="director">
                <img
                  src="assets/images/soham.jpg"
                  className="img-fluid"
                  alt="soham"
                />
                <div className="content">
                  <h4>
                    Soham Ghosh <small>Co-Founder</small>
                  </h4>
                  <p>
                    Our ability to deliver tailored content and strategy,
                    combined with bespoke communication, is essential for
                    engaging with stakeholders. Through our collaterals, we
                    build trust, align goals, and foster meaningful,
                    transparent, and impactful communication.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="director">
                <img
                  src="assets/images/soumik.jpg"
                  className="img-fluid border-black"
                  alt="soumik"
                />
                <div className="content">
                  <h4>
                    Soumik Ghosh <small>Co-Founder</small>
                  </h4>
                  <p>
                    Exceptional service at Next Steps builds client trust,
                    fosters long-term relationships, and drives successful
                    outcomes. By prioritizing responsiveness, reliability, and
                    personalized support, we create value that extends beyond
                    each project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //End --> */}

      
      {/* <!-- Footer --> */}
      
    </div>
  );
}
export default Home;
