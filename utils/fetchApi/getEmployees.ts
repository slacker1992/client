import { employeeType } from "@/typings";

export const getEmployees = async () => {
  const res = await fetch("http://localhost:4000/employee/list");
  const data = await res.json();
  console.log(data);

  //   const employeeList: employeeType[] = data.employee;
  //   return employeeList;
};

export const getOneEmployee = async (id: number) => {
  const res = await fetch(`http://localhost:4000/employee/${id}`);
  const data = await res.json();

  const employeeList: employeeType[] = data.employee;
  return employeeList;
};
