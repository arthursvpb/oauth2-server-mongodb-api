import OAuth2Server from 'oauth2-server';

declare global {
  namespace Express {
    interface Application {
      oauth: OAuth2Server;
    }
  }
}
