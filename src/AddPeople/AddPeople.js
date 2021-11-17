import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const AddPeople = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleName = e=>{
        setName(e.target.value);
    }
    const handleEmail = e=>{
        setEmail(e.target.value);
    }
    const handleImage = e=>{
        setImage(e.target.files[0])
    }
    const handleSubmit = e=>{
      e.preventDefault();
      if(!image){
          return;
      }
      const formData = new FormData();
      formData.append('name', name);
    formData.append('email', email);
    formData.append('image', image);

    fetch('http://localhost:5000/people', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  // console.log('Success:', data);
  if(data.insertedId){
    setSuccess('people added successfully')
    console.log('people added successfully')
  }
})
.catch(error => {
  console.error('Error:', error);
});
    }
    return (
        <div>
            <h2>Add people</h2>
            <form onSubmit={handleSubmit}>
            <TextField sx={{width:'50%'}} onChange={handleName} required label="name" variant="standard" /><br/>
            <TextField sx={{width:'50%'}} onChange={handleEmail} required label="email" variant="standard" /><br/>
            <Input accept="image/*" onChange={handleImage} type="file" /><br/>
  <Button variant="contained" type="submit">
    Add People
  </Button>
         
            </form>
            {success && <p style={{color: 'green' }}>{success}</p>}
        </div>
    )
}

export default AddPeople
