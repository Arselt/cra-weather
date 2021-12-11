import React from 'react';

import WeatherSearch from './WeatherSearch';
import Forecast from './Forecast';
import Error from './States/Error';
import Loader from './States/Loader'

import useForecast from '../hooks/useForecast';

function Page() {

  	const { isError,isLoading, forecast, submitRequest } = useForecast();

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
				{forecast && <Forecast/>}
			</div>

		</React.Fragment>
	);
}

export default Page;