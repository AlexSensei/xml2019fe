import BaseApiService from "./BaseApiService";
import {
  ARTICLES_ALL,
  AUTHOR_ARTICLES_STATUSES,
  ARTICLE,
  REVIEW_ARTICLES,
} from "../mockData.js/articles";

const ENDPOINTS = {
  ARTICLES: "/api/articles",
  MY_ARTICLES: "/api/articles",
};

class ArticleService extends BaseApiService {
  submitArticle = (data) => {
    const formData = new FormData();
    formData.append("article", data.article[0]);
    formData.append("coverLetter", data.coverLetter[0]);

    return this.apiClient.post(ENDPOINTS.ARTICLES, formData);
  };

  // getMyArticles = () => this.apiClient.get(ENDPOINTS.MY_ARTICLES);

  getArticles = (data) => ({ data: ARTICLES_ALL });

  getMyArticles = () => ({
    data: AUTHOR_ARTICLES_STATUSES,
  });

  getArticle = () => ({
    data: ARTICLE,
  });

  getReviewArticles = () => ({
    data: REVIEW_ARTICLES,
  });
}

export default new ArticleService();
