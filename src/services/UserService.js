import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  ME: '/api/auth/me'
};

class UserService extends BaseApiService {
  getUser = () => this.apiClient.get(ENDPOINTS.ME);
}

export default new UserService();
