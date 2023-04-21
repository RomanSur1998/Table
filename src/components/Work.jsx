import React, { useState } from "react";
import "./Work.css";

const Work = () => {
  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
    { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
  ];
  employees.map((elem) => {
    console.log(elem.name);
  });

  return (
    <div>
      {employees.map((elem) => {
        console.log(elem.name);
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>SurName</th>
                <th>Day</th>
                <th>SalaryPerDay</th>
                <th>SalaryPerDay</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{elem.name}</td>
                <td>{elem.surname}</td>
                <td>
                  <input type="text" value={elem.days} />
                </td>
                <td>
                  <input type="text" value={elem.salaryPerDay} />
                </td>
                <td>{elem.salaryPerDay * elem.days}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Work;
