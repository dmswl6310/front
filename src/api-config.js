let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname == "localhost") {
  backendHost =
    "first-prod-on-todo-api-service.ap-northeast-2.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;
