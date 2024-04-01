import {FC} from "react";
import {PostCardProps} from "./article-card.interface";
import Link from "next/link";

const ArticleCard: FC<PostCardProps> = ({imagePath, title, description}) => {
  return (
    <div className="border border-gray rounded-lg p-4 shadow-lg w-fit">
      <img
        src={imagePath}
        alt=""
        className="rounded-lg pb-4 h-[200px] w-full transition hover:scale-105"
      />
      <Link
        href={""}
        className="text-xl font-bold hover:text-primary duration-200 "
      >
        {title}
      </Link>
      <p className="text-sm text-[#5E6E89] pt-4">{description}</p>
    </div>
  );
};

export default ArticleCard;
