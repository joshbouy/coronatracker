import React from 'react';

/*import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
*/ 

/* Not this ^, But this v */

import {Cards, Chart, CountryPicker, Footer, Header} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        // fetch the data
        // set the state

        

        const fetchedData = await fetchData(country);

        //console.log(country);

        //console.log(fetchedData);

        this.setState({data: fetchedData, country: country});
        

    }

    render() {
        const {data, country} = this.state;

        return (
        <div className = {styles.container}>
            <img src={coronaImage} className={styles.image}></img>
            <Header />
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country ={country}/>
            <Footer />
        </div>
        
        );
    }
}

export default App;