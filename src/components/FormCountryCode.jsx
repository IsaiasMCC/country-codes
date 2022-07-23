import Reac, { useState, useEffect } from 'react'
import Countries from '../components/Countries.json'
const FormCountryCode = () => {
    const [countries, setCountries] = useState(Countries.countries);
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryName, setCountryName] = useState('');
    const [stateList, setStateList] = useState(false);
    const [filterCountry, setFilterCountry] = useState('');
    const [filterState, setFilterState] = useState(false);


    const handlePostalCode = (e, country) => {
        setStateList(false);
        setCountryName(country.name_es);
        setPostalCode(country.dial_code);
        setPhoneNumber(country.dial_code + " ");
    }
    const handleFilterCountry = (e) => {
        let char = "";
        let filterText = e.target.value;
        if(filterText.length === 1){
            char = filterText[0].toUpperCase();
            console.log(filterText[0].toUpperCase());
        }
        setFilterCountry(filterText);
        if(e.target.value === ""){
            setCountries(Countries.countries);
        } 
        else {
            const result = Countries.countries.filter( country => country.name_es.includes(char + filterCountry.substring(1)));
            setCountries(result);
        }
    }
    return (

        <div className='flex'>
            <form className='bg-white w-1/2 px-5 py-5 mx-auto mt-40 rounded-md shadow-lg'
            >

                <div className='flex flex-col mb-5'>
                    <li className='flex mb-2 text-center bg-blue-100 border-blue-300 border-2 rounded-md hover:cursor-pointer hover:bg-blue-300'
                        onClick={() => setStateList(!stateList)}
                    >
                        <img src={`/phone_icon.svg`} width="25px" height="20px" className='mr-5'></img>
                        <label className='hover:cursor-pointer'> Telefono</label>
                    </li>
                    { stateList &&
                        <div className='flex flex-col mb-5'>
                            <label> Buscar pais: </label>
                            <input
                                type="text"
                                className='border-gray-300 border-2  rounded-md focus:bg-gray-200 hover:border-gray-500 '
                                // onClick={() => setStateList(false)}
                                value={filterCountry }
                                onChange={ handleFilterCountry }
                            />
                        </div>
                    }   
                    {
                        !stateList ? null :
                            <ul className='border-gray-300 border-2 rounded-md hover:border-gray-500 h-48 scroll-y overflow-y-scroll'>
                                {

                                    countries.map(country =>

                                        <li className='flex hover:bg-blue-300 cursor-pointer font-medium'
                                            onClick={(e) => handlePostalCode(e, country)}
                                        >
                                            {`${country.name_es}  ${country.dial_code} `}

                                        </li>
                                    )
                                }
                            </ul>
                    }

                </div>

                {!stateList &&
                    <div className='flex flex-col mb-5'>
                        <label className='font-bold text-stone-800'> Datos para el enlace de tu telefóno de contacto </label>
                    </div>
                }
                <div className='flex flex-col mb-5'>
                    <label> Número telefonico: </label>
                    <input
                        type="text"
                        className='border-gray-300 border-2  rounded-md focus:bg-gray-200 hover:border-gray-500 '
                        onClick={() => setStateList(false)}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className='w-full bg-blue-400 text-white py-1 border-2 rounded-md hover:cursor-pointer hover:bg-blue-500 '
                        type='submit'
                        value='Guardar Información'
                    />
                </div>
            </form>
        </div>
    )
}

export default FormCountryCode