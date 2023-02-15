import axios from "axios";

const employeeBaseURL = axios.create({
  baseURL: "http://localhost:4000/employee/",
});

export default employeeBaseURL;
