import axios from "axios";

export default {
  getNews(searchValue) {
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${searchValue}&pageSize=20&sortBy=relevancy&apiKey=5a0c57e2736642acbab8e4a24471809d`,

      // data: `{"search_terms":"${title}","location":"uk","page":"1"}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("News", JSON.stringify(response.data));
        // localStorage.setItem("Response", JSON.stringify(response.data));

        // console.log(test);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
