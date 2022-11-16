import axios from "axios";

export default class PostService {
  static async getFilters() {
    const response = await axios.get(`http://localhost:3000/filter-ozy`);
    return response;
  };

  static async getIphones(limit, page, ozy, id) {
    const response = await axios.get(`http://localhost:3000/iphones`, {
      params: {
        _limit: limit,
        _page: page,
        ozy: ozy,
        id: id
      },
    });
    return response;
  };
  static async getMac(limit = 12, page = 1) {
    const response = await axios.get(`http://localhost:3000/macbook`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  };
  static async getTablet(limit = 12, page = 1) {
    const response = await axios.get(`http://localhost:3000/tablet`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  };
  static async getWatch(limit = 12, page = 1) {
    const response = await axios.get(`http://localhost:3000/watch`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }
}
