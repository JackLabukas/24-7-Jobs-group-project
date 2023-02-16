import axios from "axios";

export default {
  getSalary(title) {
    const options = {
      method: "GET",
      url: "https://infosalary.p.rapidapi.com/",
      params: { job_title: `${title}` },
      headers: {
        "X-RapidAPI-Key": "d553593baemsh1e4a30be39fe1ebp1cca13jsn9335e7d2e755",
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
