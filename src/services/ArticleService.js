import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  ARTICLES: '/api/articles',
  MY_ARTICLES: '/api/articles'
};

class ArticleService extends BaseApiService {
  submitArticle = data => {
    const formData = new FormData();
    formData.append('article', data.article[0]);
    formData.append('coverLetter', data.coverLetter[0]);

    return this.apiClient.post(ENDPOINTS.ARTICLES, formData);
  };

  getMyArticles = () => this.apiClient.get(ENDPOINTS.MY_ARTICLES);
}

export default new ArticleService();
