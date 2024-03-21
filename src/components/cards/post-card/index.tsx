import {FC} from "react";
import {PostCardProps} from "./post-card.interface";
import Link from "next/link";

const PostCard: FC<PostCardProps> = ({imagePath, title, description}) => {
  return (
    <div className="border border-gray rounded-lg p-4 shadow-lg w-fit">
      <img src={imagePath} alt="" className="rounded-lg pb-4 h-[200px]" />
      <Link href={"#"} className="text-xl font-bold ">
        {title}
      </Link>
      <p className="text-sm text-[#5E6E89] pt-4">{description}</p>
    </div>
  );
};

export default PostCard;
