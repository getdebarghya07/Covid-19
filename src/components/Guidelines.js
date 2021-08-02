import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Guidelines.css";
const Guidelines = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://api.rootnet.in/covid19-in/notifications"
      );
      // console.log(res);
      const actualData = await res.json();
      console.log(actualData.data.notifications);
      setData(actualData.data.notifications);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div id="Guidelines" className="container-fluid mt-5">
        <h1 className="guideline-head"> Covid Guidelines </h1>
        <div className="table-responsive">
          <table className="table-hover table">
            <thead className="thead-dark">
              <tr>
                <th>No</th>
                <th>Latest News</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <a href={curElem.link}>{curElem.title}</a>
                    </td>
                    {/* <th>{curElem.title}</th>
                    <td>{curElem.link}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Guidelines;
