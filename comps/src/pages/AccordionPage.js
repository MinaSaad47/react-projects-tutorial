import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      label: "click me",
      content:
        "more and more info more and more info more and more info more and more info more and more info",
    },
    {
      label: "info",
      content:
        "more and more info more and more info more and more info more and more info more and more info",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
