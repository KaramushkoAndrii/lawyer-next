"use client";

import { Button } from "@heroui/react";

const AsideCard = () => {
  return (
    <aside className="hidden lg:block">
      <div className="aside-foto"></div>
      <h3 className="aside-title">заголовок</h3>
      <div className="aside-contacts">
        <ul>
          <li>Контакт 1</li>
          <li>Контакт 2</li>
        </ul>
      </div>
      <p className="aside-description">Описание</p>
      <Button>Связаться</Button>
    </aside>
  );
};

export default AsideCard;
