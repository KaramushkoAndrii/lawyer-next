"use client";

import { Form, Input, Button } from "@heroui/react";
import advatageList from "@/data/advantageList";

const FormSection = () => {
  return (
    <section className="form-section">
      <div className="form-section__header">
        <h3>Адвокат</h3>
        <h3>Владислав Рясний</h3>
        <p>Залиште заявку на юридичну допомогу прямо зараз</p>
      </div>
      <Form>
        <Input
          type="tel"
          name="number"
          label="here is your phone"
          errorMessage="number is not valid"
        />
        <Button type="submit">Submit</Button>
      </Form>
      <ul className="advantage-list flex flex-col gap-4">
        {advatageList.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
};

export default FormSection;
