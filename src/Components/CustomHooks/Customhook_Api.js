import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
export default function Customhook_Api() {
  const [Data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
  return (
    <div>
      <div>
        <h2>
          All data is stored in usefetch.js and just call here we call anywhere
          this file just import and used it
        </h2>
        {Data.map((element) => (
          <>
            <div className="ms-5">
              <h3>{element.firstName}</h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
