import axios from "axios";

const employeeBaseURL = axios.create({
  // baseURL: "http://localhost:4000/employee/",
  baseURL: "https://employee-management-phi.vercel.app/employee/",
});

export default employeeBaseURL;
