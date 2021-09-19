import React, { useEffect, useState } from "react";
import axios from 'axios';
import Doctor from "./Doctor";
import { Button, Icon } from "semantic-ui-react";



export default function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");

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

  const deleteDoctor = async (id) => {
    await axios.delete(`/api/doctors/${id}`); //delete on backend
    setDoctors(doctors => doctors.filter(doctor => doctor.id != id)); //delete on front end
  };

  const addDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/doctors", 
        { name: doctorName, phone: doctorPhone }
      );

      setDoctorName("");
      setDoctorPhone("");

      loadDoctors();
    } catch(err) {
      console.log(err.response);
    }
  };

  const renderDoctors = () => {

    return doctors.map( doctor => {
      return (
        <div key={doctor.id}>
          <Doctor doctor={doctor} />
          <Button icon color='purple' onClick={() => deleteDoctor(doctor.id)}>
            <Icon name='delete'/>
          </Button>
        </div>

      );
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Add Doctor Here</h2>
        <form onSubmit={addDoctor}>
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
      {renderDoctors()}
    </div>
  );
}
