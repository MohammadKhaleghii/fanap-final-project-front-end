import {FC} from "react";
import {ProductCardProps} from "./product-card.interface";
import thousandSeparator from "@/utilities/thousand-separator";
import Link from "next/link";
import {useRouter} from "next/router";

const ProductCard: FC<ProductCardProps> = ({
  id,
  description,
  title,
  imagePath,
  cost,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`product/${id}`)}
      className="bg-white rounded border border-gray p-2 cursor-pointer"
    >
      <img
        className="rounded-md w-full h-[200px]"
        src={imagePath}
        alt={title}
      />
      <Link
        href={`product/${id}`}
        className="text-xl text-right font-bold py-4 hover:text-primary cursor-pointer"
      >
        {title}
      </Link>
      <p className="text-sm text-[#5E6E89] pb-2">{description}</p>
      <div className="text-left font-bold text-primary">
        {thousandSeparator(cost)} <span>تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;
