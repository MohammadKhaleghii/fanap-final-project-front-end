import Link from "next/link";
import {useRouter} from "next/router";
import {FC} from "react";
import {CategoryCardProps} from "./category-card.interface";

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  imagePath,
  categoryID,
}) => {
  const router = useRouter();
  return (
    <div
      className="p-4 border-gray rounded-lg bg-[#ebe7e7] flex items-center justify-center flex-col gap-y-4 transition ease-in delay-100  hover:translate-y-2 hover:scale-105 hover:bg-primary hover:text-white cursor-pointer"
      onClick={() => router.push(`/search/?categoryID=${categoryID}`)}
    >
      <img src={imagePath} alt={title} className=" lg:h-24 h-20 rounded-lg" />
      <Link className="font-bold " href={`/search/?categoryID=${categoryID}`}>
        {title}
      </Link>
    </div>
  );
};
export default CategoryCard;
