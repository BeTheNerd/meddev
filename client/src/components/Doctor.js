

const Doctor = ({doctor}) => {
  console.log(doctor)
  return (
    <div>
      {doctor.name}
      {doctor.phone}
    </div>
    
  )
};

export default Doctor;