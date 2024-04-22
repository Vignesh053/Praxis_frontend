import axios from "axios";

const apiBaseURL = "http://localhost:8080/auth/";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorCode = error?.response?.status;
    if (errorCode === 401 || errorCode === 403) {
      logout();
      alert("Session expired, please login again");
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const isLoginOrRegister =
      config.url.includes("/login") || config.url.includes("/register");

    if (!isLoginOrRegister) {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = (registerObj) =>
  axios.post(apiBaseURL + "register", registerObj);

export const loginUser = async (username, password) =>{
    const response = await axios.post(apiBaseURL + "login", { username, password });

    return response;
}
  


export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (username, id, role, docId) => {
  sessionStorage.setItem("authenticatedUser", username);
  sessionStorage.setItem("userId", id);
  sessionStorage.setItem("role", role);
  sessionStorage.setItem("docOrPat", docId)
};

export const getuserId = () => {
  const userId = sessionStorage.getItem("userId");
  return userId;
};

export const getuserrole = () => {
  const userrole = sessionStorage.getItem("role");
  return userrole;
};

export const isUserLoggedIn = () => {
  let user = getuserId();

  if (user != null) {
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  sessionStorage.clear();
  localStorage.clear();
};

export async function getUser(id) {
  try {
    const response = await axios.get(`${apiBaseURL}getuser/${id}`);
    return response.data;
  } catch (error) {
    console.error("error occured while fetching user", error);
  }
}
