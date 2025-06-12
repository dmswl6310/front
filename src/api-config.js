let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname == "localhose") {
  backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;
