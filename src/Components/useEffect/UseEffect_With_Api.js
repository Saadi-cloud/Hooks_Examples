import React, { useEffect, useState } from 'react'

function useEffect_with_Api() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch("https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1001")
        .then(res => res.json())
        .then(Data => (setData(Data)))
        .catch(error => console.log("error occured", error));
        
    },[])
    


  return (
    <div>
      {Data.map(element => (
        
        <>
        <div className='ms-5'>
        <p>{element.id}</p>
        <p>{element.imageUrl}</p>
        <p>{element.firstName}</p>
        <p>{element.lastName}</p>
        <p>{element.email}</p>
        <p>{element.contactNumber}</p>
        <p>{element.age}</p>
        <p>{element.dob}</p>
        <p>{element.salary}</p>
        <p>{element.address}</p>
        </div>
        </>

      ))}
    </div>
  )
}

export default useEffect_with_Api;
