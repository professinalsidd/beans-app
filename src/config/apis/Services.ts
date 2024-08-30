import Axios from "../axios/axios";
class Services {
  static facts = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/facts?limit=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static animal = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/animals?name=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static recipe = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/recipe?query=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static plants = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/planets?name=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static weather = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/weather?city=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static cocktail = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/cocktail?name=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static calories = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${params}`
      )
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static randomImages = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/randomimage?category=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static stars = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/stars?name=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static celebrity = (params: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://api.api-ninjas.com/v1/celebrity?name=${params}`)
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
  static helicopter = (params: any, params2: any) => {
    return new Promise((resolve, reject) => {
      Axios.get(
        `https://api.api-ninjas.com/v1/helicopter?manufacturer=${params}&model=${params2}`
      )
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default Services;
