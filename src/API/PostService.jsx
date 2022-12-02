import axios from "axios";
 
export default class PostService {
  static async getDataShowCase() {
    const response = await axios.get("http://localhost:3000/showcase");
    return response;
  }

  static async getDash() {
    const response = await axios.get("http://localhost:3000/showcase-dash");
    return response;
  }

  static async getFiltersRam() {
    const response = await axios.get(`http://localhost:3000/filter-ram`);
    return response;
  }

  static async getFiltersMemory() {
    const response = await axios.get(`http://localhost:3000/filter-memory`);
    return response;
  }

  static async getProducts(
    limit = 6,
    page,
    ram,
    memory,
    categoryID = 2,
    price_min,
    price_max
  ) {
    const response = await axios.get(`http://localhost:3000/${categoryID}`, {
      params: {
        _limit: limit,
        _page: page,
        ram: ram,
        memory: memory,
        price_gte: price_min,
        price_lte: price_max,
      },
    }); 
    return response;
  }

  static async ProductSearch(categoryID = 1, value) {
    const response = await axios.get(`http://localhost:3000/${categoryID}?name_like=${value}`)
    return response;
  }

  
}
