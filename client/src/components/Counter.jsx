import React from 'react'

function Counter() {
  return (
    <div>
      {/* <!-- Counter --> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counterPanel mb-3">
              <div className="itemList stats">
                <div className="d-flex justify-content-center">
                  <h4 className="counting" data-count="60">
                    0
                  </h4>
                  <h4 className="counting">+</h4>
                </div>
                <p>Clients</p>
              </div>

              <div className="itemList stats">
                <div className="d-flex justify-content-center">
                  <h4 className="counting" data-count="30">
                    0
                  </h4>
                  <h4 className="counting">+</h4>
                </div>
                <p>Team Size</p>
              </div>

              <div className="itemList stats">
                <div className="d-flex justify-content-center">
                  <h4 className="counting" data-count="150">
                    0
                  </h4>
                  <h4 className="counting">+</h4>
                </div>
                <p>Projects Delivered</p>
              </div>

              <div className="itemList stats">
                <div className="d-flex justify-content-center">
                  <h4 className="counting" data-count="14">
                    0
                  </h4>
                  <h4 className="counting">+</h4>
                </div>
                <p>Sectors Catered</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="text-center">
              Delivering tailored storytelling to meet each industry's unique
              requirement.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- //End --> */}
    </div>
  );
}

export default Counter
