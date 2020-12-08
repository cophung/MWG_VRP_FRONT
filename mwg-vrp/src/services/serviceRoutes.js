import axios from "axios";

export const serFetchRoutes = async () => {
  try {
    const response = await axios.get(
      "https://mwg-vrp.herokuapp.com/api/getRoutes"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
