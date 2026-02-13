import ModalButton from "@/components/UI/modalButton/ModalButton";
import Link from "next/link";
import Image from "next/image";

const AsideCard = () => {
  return (
    <aside className="hidden bg-secondary/40 rounded-main lg:flex lg:flex-col gap-4 justify-center items-center px-4 py-8 max-h-fit max-w-[25dvw] min-w-[20dvw] sticky top-30">
      <div className="relative w-20 aspect-square rounded-[50%] overflow-hidden">
        <Image
          src="/images/mainFoto.webp"
          alt="vlad"
          fill
          className="object-cover"
        />
      </div>
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
      <p className="aside-description text-center">
        Адвокат, керівник судової практики
      </p>
      <ModalButton>call me now</ModalButton>
    </aside>
  );
};

export default AsideCard;
