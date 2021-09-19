import axios from "axios"


const NewPasientForm = () => {

  const submitHandler = async () => {
    try {
        await axios.post(`/api/doctors/${props.match.perams.id}/pasients`),
        {id: props.match.params.id,
        name: pasientName,
        phone: pasientPhone
        }
        props.history.push(`/api/doctors/${props.match.perams.id}/pasients`);
      catch (err) {
        console.log(err.response)
      }
    }
  }

}

return (
  <div>
    <form onSubmit={submitHandler}>
      <p>Name:</p>
      <imput value={pasientName}/>

    <p>Phone:</p>  
    <imput value={pasientPhone}/>

    <button>Add Patient:</button>

    </form>


  </div>

)

export default NewPasientForm;