import axios from "axios";
import { useEffect, useState } from "react";


export const UpdateDoc = () => {

  const [doctorName, setDoctorName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");

  useEffect (() => {
    loadDoctor();
  }, []);

  const updateDoctor = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  const loadDoctor = async () => {
    try {
      const res = await axios.get("/api/doctors/13");
      const doctor = res.data;
      setDoctorName(doctor.name);
      setDoctorPhone(doctor.phone);
    } catch (err) { 
      console.log(err);
    }

  };

  return(
    <div>
      <h2>Update Doctor Here</h2>
        <form onSubmit={updateDoctor}>
          <p>Doctor Name:</p>
          <input 
            value={doctorName} 
            onChange={(e) => {setDoctorName(e.target.value)}}
          />

          <p>Doctor Phone:</p>
          <input
            value={doctorPhone}
            onChange={(e) => {setDoctorPhone(e.target.value)}}
          />
          <button>Submit!</button>

        </form>
    </div>
  )
};