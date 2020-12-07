import axios from "axios";

async function getRoute() {
  try {
    const response = await axios.get(
      "https://mwg-vrp.herokuapp.com/api/getRoutes"
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getRoute;
