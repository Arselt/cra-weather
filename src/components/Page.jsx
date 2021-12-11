import React from 'react';

import WeatherSearch from './WeatherSearch';
import Forecast from './Forecast';
import Error from './States/Error';
import Loader from './States/Loader'

import useForecast from '../hooks/useForecast';

function Page() {

  	const { isError,isLoading, forecast } = useForecast();

  	const onSubmit = (value) => {
    	console.log({value});
  	}

	return (
		<React.Fragment>
			<header className="WeatherHeader">
				<h1> ClimArselt </h1>
				<WeatherSearch submitSearch={onSubmit}/>
			</header>
			
			{isError && <Error message={isError} />}
			{isLoading && <Loader/>}
			{forecast && <Forecast/>}

		</React.Fragment>
	);
}

export default Page;