import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = ({items}: {items: number}) => {
  const skeletonItems = new Array(items).fill(0);
  return (
    <>
      {skeletonItems.map((item) => (
        <div key={item} className="bg-white rounded border border-gray p-2 ">
          <Skeleton className="rounded-md w-full h-[200px]" />
          <Skeleton count={3} className="w-full pt-3" />
        </div>
      ))}
    </>
  );
};
export default ProductCardSkeleton;
