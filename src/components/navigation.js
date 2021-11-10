import React from "react";
import { Link } from "react-router-dom";

//styles
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Nav = () => {
  return (
    <nav>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Ankete</Link>
        </Breadcrumb.Item>{" "}
        {/*not the correct method! <a> is nested in <a>*/}
        <Breadcrumb.Item active>Rezultati</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
  );
};

export default Nav;
