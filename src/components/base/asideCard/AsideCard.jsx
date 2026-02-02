"use client";

// import { Button } from "@heroui/react";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import { useModalStore } from "@/store/useModalStore";
import { Avatar } from "@heroui/react";

const AsideCard = () => {
  const { openModal } = useModalStore();

  const openHandler = () => {
    openModal();
  };
  return (
    <aside className="hidden bg-secondary/40 rounded-main lg:flex lg:flex-col gap-4 justify-center items-center p-4">
      {/* <div className="aside-foto"></div> */}
      <Avatar src="/images/MainFoto.webp" alt="vlad" className="w-20 h-20" />
      <h3 className="aside-title">Рясний Владислав Денисович</h3>
      <div className="aside-contacts">
        <ul>
          <li className="flex flex-col items-center">
            <h4>email</h4>
            <h3>
              <Link href={`mailto:advokatvlad988@gmail.com`} target="_blank">
                advokatvlad988@gmail.com
              </Link>
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <h4>Номер телефону</h4>
            <h3>
              <Link href={"tel:0982892372"}>0982892372</Link>
            </h3>
          </li>
        </ul>
      </div>
      <p className="aside-description">Адвокат, керівник судової практики</p>
      <Button onPress={openHandler}>Звязатись зараз</Button>
    </aside>
  );
};

export default AsideCard;
