import axios from "axios";

export const serFetchInitialDetailOrders = async () => {
  try {
    const response = await axios.get(
      "https://mwg-vrp.herokuapp.com/api/getDetailOrders"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
