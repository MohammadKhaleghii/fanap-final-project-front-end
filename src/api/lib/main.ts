import axios from "axios";
import {SearchProductsOutput} from "../dto/search-output";

export const getSliders = () =>
  axios.get("https://fanap-final-project-json-server.vercel.app/sliders");

export const getArticles = () =>
  axios.get("https://fanap-final-project-json-server.vercel.app/articles");

export const getCategories = () =>
  axios.get("https://fanap-final-project-json-server.vercel.app/categories");

export const getTopProducts = () =>
  axios.get("https://fanap-final-project-json-server.vercel.app/topProducts");

export const getTestimonial = () =>
  axios.get("https://fanap-final-project-json-server.vercel.app/testimonial");

export const getSearchProducts = (params?: SearchProductsOutput) =>
  axios.get(
    "https://fanap-final-project-json-server.vercel.app/searchProducts",
    {
      params,
    }
  );
