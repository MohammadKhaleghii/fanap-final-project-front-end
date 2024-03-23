import Skeleton from "react-loading-skeleton";

const ArticleCardSkeleton = ({items}: {items: number}) => {
  const skeletonItems = new Array(items).fill(0);
  return (
    <>
      {skeletonItems.map((_, index) => (
        <div
          key={index}
          className="border border-gray rounded-lg p-4 shadow-lg w-full"
        >
          <Skeleton className="rounded-lg pb-4 h-[200px] w-full" />
          <Skeleton count={3} />
        </div>
      ))}
    </>
  );
};
export default ArticleCardSkeleton;
