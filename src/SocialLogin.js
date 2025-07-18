import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SocialLogin = (props) => {
  const location = useLocation();
  const getUrlParameter = (name) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    return params.get(name);
  };

  const token = getUrlParameter("token");
  console.log("토큰 파싱:" + token);

  if (token) {
    console.log("로컬 스토리지에 토큰 저장" + token);
    localStorage.setItem("ACCESS_TOKEN", token);
    return <Navigate to={{ pathname: "/", state: { from: location } }} />;
  } else {
    return <Navigate to={{ pathname: "/login", state: { from: location } }} />;
  }
};

export default SocialLogin;
