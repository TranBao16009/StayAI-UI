const BASE_API = process.env.REACT_APP_API_BASE_URL;
const USE_MOCKS = process.env.REACT_APP_USE_MOCK_BACKEND === "true";

export function fetchData(endpoint, options = {}) {
  return new Promise(async (resolve, reject) => {
    if (!endpoint) {
      console.error("fetchData: endpoint is required");
      reject(new Error("fetchData: endpoint is required"));
      return;
    }

    try {
      let response;

      if (USE_MOCKS) {
        console.log("Endpoint: ", endpoint);
        response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          ...options,
        });

        if (!response.ok) {
          throw new Error(`Mock API error! Status: ${response.status}`);
        }
      } else {
        response = await fetch(`${BASE_API}${endpoint}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          ...options,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const data = response;
      resolve(data); // Resolve the Promise with the JSON response
    } catch (error) {
      console.error("Fetch error:", error);
      reject(error); // Reject the Promise with the error
    }
  });
}
