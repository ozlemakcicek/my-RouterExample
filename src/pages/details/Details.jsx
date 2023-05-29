import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const navigate=useNavigate();
  const {namee} = useParams();


  const [ülke, setUlke] = useState([]);

//! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${namee}`)
    .then((res)=>res.json())
    .then((data)=> setUlke(data))

    
  }, [namee]);  

 
  
  return (
    <Container className="text-center mt-4 ">
      {ülke.map(
        ({ flags, name, capital, continents,car, population, startOfWeek }, id) => (
          <div key={id} className='ekran'>
            <img src={flags.png} alt="" />
            <h4 className='mt-4'>Name: {name.common}</h4>
            <h5>Capital: {capital}</h5>
            <h5>Continent: {continents}</h5>
            <h5>Population: {population}</h5>
            <h5>Start of week: {startOfWeek}</h5>
            <h5>Car: {car.signs}</h5>
            
            <div className='mt-4 '>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                GO BACK
              </button>
              <button className="btn btn-warning ms-4" onClick={() => navigate("/")}>
                GO HOME
              </button>
            </div>
          </div>
        )
      )}
    </Container>
  );
 
}

export default Details