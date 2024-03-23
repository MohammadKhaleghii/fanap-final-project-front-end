import Skeleton from "react-loading-skeleton";

const CategoryCardSkeleton = ({items}: {items: number}) => {
  const arrayItems = new Array(items).fill(0);
  return arrayItems.map((item) => (
    <Skeleton key={item} className="h-52 w-20" />
  ));
};
export default CategoryCardSkeleton;
