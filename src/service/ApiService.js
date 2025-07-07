import { API_BASE_URL } from "../api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken != null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status == 403) {
        window.location.href = "/login"; // redirect
        return;
      } else {
        const error = new Error("http error! " + response.status);
        throw error;
      }
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO).then((response) => {
    if (!response) {
      alert("로그인 실패!");
    } else if (response.token) {
      // 로컬스토리지에 토큰 저장
      localStorage.setItem("ACCESS_TOKEN", response.token);
      window.location.href = "/";
    }
  });
}

export function signout() {
  localStorage.setItem("ACCESS_TOKEN", null);
  window.location.href = "./login";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO);
}

export function socialLogin(provider) {
  const frontendUrl = window.location.protocol + "//" + window.location.host;
  window.location.href =
    API_BASE_URL +
    "/auth/authorize/" +
    provider +
    "?redirect_url=" +
    encodeURIComponent(frontendUrl);
}
