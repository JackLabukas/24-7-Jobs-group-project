import axios from "axios";

export default {
  getJobByTitle(title) {
    const options = {
      method: "POST",
      url: "https://linkedin-jobs-search.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f9870d5895msh47816a415e89849p191ddcjsndf029b7fe54c",
        "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
      },
      data: `{"search_terms":"${title}","location":"uk","page":"1"}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("Response", JSON.stringify(response.data));

        // console.log(test);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
