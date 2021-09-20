import { Card } from "semantic-ui-react";


const Doctor = ({doctor}) => {
  console.log(doctor)

  return (
    <>
      <Card.Header>{doctor.name}</Card.Header>
      <Card.Meta>{doctor.phone}</Card.Meta>
    </>
  )
};

export default Doctor;

