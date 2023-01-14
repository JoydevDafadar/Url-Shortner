import axios from 'axios'

// api web site
// https://shrtco.de/docs
const BASE_URL = 'https://api.shrtco.de/v2/shorten'

// url=example.org/very/long/link.html

const FetchFromAPI = async( url ) => {
  
    const {data} = await axios.get( `${BASE_URL}?url=${url}` );

    return data;

}

export default FetchFromAPI