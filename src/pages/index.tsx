import {ArticleInput} from "@/api/dto/article-input";
import {CategoryInput} from "@/api/dto/category-input";
import {SliderInput} from "@/api/dto/slider-input";
import {TestimonialInput} from "@/api/dto/testimonial-input";
import {TopProductInput} from "@/api/dto/top-products-input";
import {
  getArticles,
  getCategories,
  getSliders,
  getTestimonial,
  getTopProducts,
} from "@/api/lib/main";
import ArticleCard from "@/components/cards/article-card";
import ArticleCardSkeleton from "@/components/cards/article-card/article-card.skeleton";
import CategoryCard from "@/components/cards/category-card";
import CategoryCardSkeleton from "@/components/cards/category-card/category-card.skeleton";
import ProductCard from "@/components/cards/product-card";
import ProductCardSkeleton from "@/components/cards/product-card/product-card.skeleton";
import TestimonialCard from "@/components/cards/testimonial-card";
import TestimonialCardSkeleton from "@/components/cards/testimonial-card/testimonial-card.skeleton";
import Heading from "@/components/heading";
import Slider from "@/components/slider";
import SliderSkeleton from "@/components/slider/slider.skeleton";
import PublicLayout from "@/layouts/public/public-layout";
import Head from "next/head";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function HomePage() {
  // slider states
  const [sliders, setSliders] = useState<SliderInput[]>();
  const [sliderLoading, setSliderLoading] = useState<boolean>(true);

  // articles states
  const [articles, setArticles] = useState<ArticleInput[]>();
  const [articlesLoading, setArticlesLoading] = useState(true);

  // categories states
  const [categories, setCategories] = useState<CategoryInput[]>();
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  // top products
  const [topProducts, setTopProducts] = useState<TopProductInput[]>();
  const [topProductsLoading, setTopProductsLoading] = useState(true);

  //
  const [testimonials, setTestimonials] = useState<TestimonialInput[]>();
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);

  useEffect(() => {
    // Fetch sliders
    getSliders()
      .then((slidersResult) => {
        setSliders(slidersResult.data);
        setSliderLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sliders:", error);
      });

    // Fetch articles
    getArticles()
      .then((articlesResult) => {
        setArticles(articlesResult.data);
        setArticlesLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });

    // Fetch categories
    getCategories()
      .then((categoriesResult) => {
        setCategories(categoriesResult.data);
        setCategoriesLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch top products
    getTopProducts()
      .then((topProductsResult) => {
        setTopProducts(topProductsResult.data);
        setTopProductsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching top products:", error);
      });

    // Fetch testimonials
    getTestimonial()
      .then((testimonialsResult) => {
        setTestimonials(testimonialsResult.data);
        setTestimonialsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  return (
    <PublicLayout>
      <Head>
        {" "}
        <title>صفحه اصلی</title>
      </Head>
      {/* slider */}
      <section className="py-5 centered-container">
        {!sliderLoading && sliders ? (
          <Slider slides={sliders}></Slider>
        ) : (
          <SliderSkeleton />
        )}
      </section>
      {/* category */}
      <section className="py-5 centered-container">
        <div className="grid lg:grid-cols-6 sm:grid-cols-3  grid-cols-2 gap-x-3 gap-y-3 ">
          {categoriesLoading && !categories ? (
            <CategoryCardSkeleton items={6} />
          ) : (
            categories &&
            categories.map((item) => (
              <CategoryCard
                categoryID={item.categoryID}
                imagePath={item.imagePath}
                title={item.title}
                key={item.categoryID}
              />
            ))
          )}
        </div>
      </section>

      {/* top products */}
      <section className="py-5 centered-container">
        <Heading
          title="محصولات برتر"
          subTitle="بهترین محصولات موجود در سایت محمد حسین خالقی پور"
        />
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-x-3 gap-y-3 pt-3">
          {!topProducts && topProductsLoading ? (
            <ProductCardSkeleton items={6} />
          ) : (
            topProducts &&
            topProducts.map((item) => (
              <ProductCard
                key={item.id}
                cost={item.cost}
                description={item.description}
                id={item.id}
                imagePath={item.imagePath}
                title={item.title}
              />
            ))
          )}
        </div>
      </section>
      {/* testimonial */}
      <section className="w-full bg-[#56B280] bg-opacity-10  py-[90px]">
        <Heading
          title="نظرات"
          subTitle="بهترین نظرات  در سایت محمد حسین خالقی پور"
        />
        <div className="centered-container pt-4">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3 ">
            {testimonialsLoading && !testimonials ? (
              <TestimonialCardSkeleton items={4} />
            ) : (
              testimonials &&
              testimonials.map((item) => (
                <TestimonialCard
                  description={item.description}
                  imagePath={item.imagePath}
                  rate={item.rate}
                  writer={item.writer}
                  key={item.writer}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* article */}
      <section className="py-5 centered-container">
        <Heading
          title="مقالات"
          subTitle="اخرین مقالات مرتبط مرتبط با تکنولوژی"
        />
        <div className="py-5  grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-4 ">
          {articles && !articlesLoading ? (
            articles.map((item) => (
              <ArticleCard
                key={item.title}
                title={item.title}
                description={item.description}
                imagePath={item.imagePath}
              />
            ))
          ) : (
            <ArticleCardSkeleton items={4} />
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
