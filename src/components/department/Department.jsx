import React from "react";
import "./department.css";
import Dept from "../../Assets/svgs/departmentSvg.svg";

const Department = () => {
  return (
    <section className="section2">
      <main>
        <h3>Our Departments</h3>

        <div className="department_container">
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Laboratory Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Surgical Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Pediatrics Department</div>
          </div>

          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Radiology Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Paraclinical Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Reproductive/Fertility Department</div>
          </div>

          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Pharmaceutical Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Patheological Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Physiotherapy Department</div>
          </div>
          <div className="department">
            <div>
              <img src={Dept} alt="" />
            </div>
            <div>Department of Medical advice & consultation</div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Department;
