"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import CaseCategoryList from "./CaseCategoryList";

const CasesList = ({ list }) => {
  return (
    <Accordion>
      {list.map((item) => (
        <AccordionItem
          key={item.header}
          aria-label={item.header}
          title={item.header}
        >
          <CaseCategoryList list={item.cases} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CasesList;
