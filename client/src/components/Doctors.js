import React, { useEffect, useState } from "react";
import axios from 'axios';
import Doctor from "./Doctor";


export default function Doctors() {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try{
      const res = await axios.get("/api/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderDoctors = () => {

    return doctors.map( doctor => {
      return (
        <div key={doctor.id}>
          <Doctor doctor={doctor} />
        
        </div>

      );
    });
  };

  return (
    <div>
      <h1>Home</h1>
      {renderDoctors()}
    </div>
  );
}
