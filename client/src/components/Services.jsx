import React from 'react'

function Services() {
  return (
    <div>
      <section className="pt-5" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 text-center mb-2">
              <h2 className="title mb-3 fw-semibold">Services</h2>
            </div>
          </div>
        </div>
        <div className="serviceMain">
          <div className="serviceBox corporate">
            <div className="serviceContent">
              <h5>Corporate Reporting</h5>
              <p>Transforming ideas into impactful narratives</p>
              <ul>
                <li>Annual reports</li>
                <li>Impact reports</li>
                <li>Integrated reports</li>
                <li>ESG reports</li>
                <li>Interim reports and results</li>
                <li>Investor presentations</li>
                <li>Sustainability reports</li>
                <li>Corporate presentations</li>
              </ul>
            </div>
          </div>
          <div className="serviceBox engagement">
            <div className="serviceContent">
              <h5>Internal Engagement</h5>
              <p>Connecting with stakeholders to inspire action</p>
              <ul>
                <li>Topic-specific communications</li>
                <li>Leadership communication</li>
                <li>Newsletters</li>
                <li>Environment graphics</li>
              </ul>
            </div>
          </div>
          <div className="serviceBox brand">
            <div className="serviceContent">
              <h5>Brand Communications</h5>
              <p>Shaping brands for lasting impression </p>
              <ul>
                <li>Brand positioning and identity</li>
                <li>Photoshoots</li>
                <li>Websites</li>
                <li>Films and animated videos</li>
                <li>Social media posts</li>
                <li>Coffee table books</li>
                <li>Milestone communication</li>
                <li>Year-end giveaways</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //End --> */}
    </div>
  );
}

export default Services
