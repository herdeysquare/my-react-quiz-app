import { useEffect, useState, } from 'react';
// import { useHistory } from 'react-router-dom';
import React from 'react';
import './Quiz.css';
// import Questions from './Questions'

const QuizComponent = () => {



const [countries, setCountries] = useState([]);
// const history = useHistory()



useEffect(()=>{fetch('https://restcountries.com/v3.1/all')
.then(response =>response.json())
.then (data=>{const countryNames = data.map(country => country.name.common);
  setCountries(countryNames.sort((a, b) => a.localeCompare(b)));
})
.catch(error =>console.error('Error fetching countries', error));},[]);


const handleSubmit = (event) => {
  event.preventDefault();


  // history.push('/Questions');
};

  return (<header className='background'>
    <div className="info">

      <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Username:<input type="text" placeholder='Enter a name' required /></label>


      <label htmlFor="select">Country:<select type="option" required>
        <option value="1">Select</option>
        {countries.map(country=>(<option key={country} value={country}>{country}</option>))}</select></label>


      <label htmlFor="Gender">Gender <select name="Gender" id="" ><option type="text">select</option><option type="dropdown">Male</option>
      <option type="dropdown">Female</option></select></label>


      <label htmlFor="email">E-mail:<input type="email" required/></label>


      <button type="submit">Submit</button>
      </form>
    </div>
  </header>

  );
};

export default QuizComponent;
