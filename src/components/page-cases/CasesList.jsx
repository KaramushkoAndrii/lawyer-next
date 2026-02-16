"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import CaseCategoryList from "./CaseCategoryList";

const CasesList = ({ list }) => {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Пункт 1" title="Категория 1">
        <CaseCategoryList list={list} />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Пункт 2" title="Категория 2">
        <CaseCategoryList list={list} />
      </AccordionItem>
    </Accordion>
  );
};

export default CasesList;
