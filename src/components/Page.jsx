import React from 'react';

import WeatherSearch from './WeatherSearch';
import Forecast from './Forecast';
import Error from './States/Error';
import Loader from './States/Loader'

import useForecast from '../hooks/useForecast';

function Page() {

  	const { isError, isLoading, forecast, submitRequest } = useForecast();

  	const onSubmit = (value) => {
    	submitRequest(value)
  	}

	return (
		<React.Fragment>
			<header className="WeatherHeader">
				<h1> ClimArselt </h1>
				<WeatherSearch submitSearch={onSubmit}/>
			</header>
			
			<div className='StateChanger'>
				{isError && <Error message={isError} />}
				{isLoading && <Loader/>}
				{forecast && <Forecast forecast={forecast}/>}
			</div>
			
			<footer>
				<p>
					Hey, you can search for famous cities Weather Forecast here.
					This is a Single Page Aplication built on Create-React-App using the MetaWeather API with axios and formatting dates with moment.js.
				</p>
			</footer>
		</React.Fragment>
	);
}

export default Page;