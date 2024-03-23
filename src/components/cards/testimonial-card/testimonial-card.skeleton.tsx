import Skeleton from "react-loading-skeleton";

const TestimonialCardSkeleton = ({items}: {items: number}) => {
  const skeletonItems = new Array(items).fill(0);
  return (
    <>
      {skeletonItems.map((_, index) => (
        <div key={index}>
          <Skeleton className="rounded-[50%]  h-[160px]" />
          <Skeleton count={3} />
        </div>
      ))}
    </>
  );
};
export default TestimonialCardSkeleton;
