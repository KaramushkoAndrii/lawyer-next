import { Link } from "@/i18n/routing";
import Image from "next/image";

const CaseCard = ({ card }) => {
  return (
    <li className="relative bg-red-50 overflow-hidden rounded-main">
      <Link href={card.url}>
        <Image
          src={card.background}
          alt={card.title}
          fill
          className="object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full content-[''] bg-black/50" />

        <p className="relative flex justify-center items-center text-center z-10 text-white px-8 py-16">
          {card.title}
        </p>
      </Link>
    </li>
  );
};

export default CaseCard;
