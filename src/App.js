import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [fullName,setFullName]=useState('');
  
  const submission =(e)=>{
    e.preventDefault();
    const fullName=`${firstName} ${lastName}`
    setFullName(fullName);
  }
  const handleChangeFirst=(e)=>{
    setFirstName(e.target.value);
  }
  const handleChangeLast=(e)=>{
    setLastName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={submission}>
      <div>
      <label htmlFor="firstName">First Name:</label>
      <input type='text' value={firstName} onChange={handleChangeFirst} required/>
      </div>
      <div>
      <label htmlFor="lastName">Last Name:</label>
      <input type='text'value={lastName} onChange={handleChangeLast} required/>
      </div>
      <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
