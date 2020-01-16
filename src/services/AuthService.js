import BaseApiService from './BaseApiService';

const ENDPOINTS = {
  SIGN_IN: '/api/auth/login',
  SIGN_UP: '/api/auth/register',
  LOGOUT: '/api/auth/logout'
};

class AuthService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token);
    }

    this.http.setUnauthorizedCallback(this.destroySession);
  }

  login = async loginData => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGN_IN, loginData);

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  signUp = async signUpData => {
    const { data } = await this.apiClient.post(ENDPOINTS.SIGN_UP, signUpData);

    this.createSession(data);

    this.attachAuthHeader(data.access_token);

    return data;
  };

  logout = () => {
    this.apiClient.post(ENDPOINTS.LOGOUT);
    this.destroySession();
    this.http.setUnauthorizedCallback(() => {});
  };

  createSession = token => {
    localStorage.setItem('access_token', token.access_token);
  };

  destroySession = () => {
    localStorage.removeItem('access_token');

    this.removeAuthHeader();
  };

  attachAuthHeader = token => {
    this.http.attachHeaders({
      Authorization: `Bearer ${token}`
    });
  };

  getToken = () => {
    const token = localStorage.getItem('access_token');

    return token || null;
  };

  removeAuthHeader = () => {
    this.http.removeHeaders(['Authorization']);
  };
}

export default new AuthService();
