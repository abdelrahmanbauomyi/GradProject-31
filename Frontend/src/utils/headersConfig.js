const headersConfig = (url) => {
  return {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": `http://localhost:8000/${url}`,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true,
  };
};
export default headersConfig;
