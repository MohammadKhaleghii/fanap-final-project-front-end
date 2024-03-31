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
      onClick={() => router.push(`/product/${id}`)}
      className="bg-white rounded border border-gray p-2 cursor-pointer"
    >
      <div className="lg:w-full flex items-center justify-center">
        <img
          className="rounded-md lg:w-full h-[200px] text-center"
          src={imagePath}
          alt={title}
        />
      </div>
      <Link
        href={`/product/${id}`}
        className="text-lg text-right font-bold py-4 hover:text-primary cursor-pointer mt-2 inline-block"
      >
        <span className="lg:hidden block">
          {title.length > 20 ? `${title.slice(0, 40)} ...` : title}
        </span>
        <span className="lg:block hidden">
          {title.length > 20 ? `${title.slice(0, 20)} ...` : title}
        </span>
      </Link>
      <p className="text-sm text-[#5E6E89] pb-2">{description}</p>
      <div className="text-left font-bold text-primary">
        {thousandSeparator(cost)} <span>تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;
