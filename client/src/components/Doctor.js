

const Doctor = ({doctor}) => {
  console.log(doctor)

  return (
    <div>
      <h2>{doctor.name}</h2>
      <div>{doctor.phone}</div>
    </div>
  )
};

export default Doctor;

