import axios from "axios";

export default {
  getSalary(title) {
    const options = {
      method: "GET",
      url: "https://infosalary.p.rapidapi.com/",
      params: { job_title: `${title}` },
      headers: {
        "X-RapidAPI-Key": "15d799340fmsh4511f77c045618dp1abc52jsn422d40512112",
        "X-RapidAPI-Host": "infosalary.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("Salary", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
