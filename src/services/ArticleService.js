import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  SUBMIT: '/api/auth/me'
};

class ArticleService extends BaseApiService {
  submitArticle = data => {
    // const formData = new FormData();
    // formData.append('article', data.article[0]);
    // formData.append('coverLetter', data.coverLetter[0]);
    // return this.apiClient.post(ENDPOINTS.ME, formData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve() : reject('Error');
      }, 1500);
    });
  };
}

export default new ArticleService();
