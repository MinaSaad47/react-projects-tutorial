import React from "react";
import Button from "../components/Button";

import { FaSun, FaLaptop } from "react-icons/fa";

function ButtonPage() {
  return (
    <div>
      <Button primary outline>
        <FaSun /> primary
      </Button>
      <br />
      <Button secondary rounded>
        <FaLaptop /> rounded secondary
      </Button>
      <br />
      <Button success outline>
        outline success
      </Button>
      <br />
      <Button danger outline>
        outline danger
      </Button>
      <br />
      <Button>plain</Button>
    </div>
  );
}

export default ButtonPage;
