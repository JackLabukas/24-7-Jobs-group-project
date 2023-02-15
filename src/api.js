import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const jobArr = [];

export default {
  getJobByTitle(title) {
    const options = {
      method: "POST",
      url: "https://linkedin-jobs-search.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c1ec80a3b6msh5a59fdbd8715fddp1e8eb2jsn5706ec8ba70f",
        "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
      },
      data: `{"search_terms":"${title}","location":"uk","page":"1"}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        jobArr.push(response.data);
        console.log(jobArr);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};

export { jobArr };
