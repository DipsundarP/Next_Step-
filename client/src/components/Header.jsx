import React from 'react'

function Header() {
  return (
    <div>
      {/* <!-- Header --> */}
      <section className="banner" id="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-xl-4 col-xxl-3">
              <div className="bannerContent">
                <img
                  src="assets/images/logo.png"
                  width="250px"
                  alt=""
                  className="mb-5"
                  style={{
                    marginLeft: "70px",
                  }}
                />
                <h4
                  style={{
                    marginLeft: "70px",
                  }}
                >
                  We are a boutique agency crafting compelling corporate
                  narratives, expertly tailored and delivered across platforms
                  to engage diverse stakeholders.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="irotate">
          <div className="thisis slidem">
            <div>Strategic.</div>
            <div>Personified.</div>
            <div>Effective.</div>
          </div>
        </div>
      </section>
      {/* <!-- //End --> */}
    </div>
  );
}

export default Header
