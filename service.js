import axios from 'axios';


    const headers= {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }

//fetching dashborad songs
export const fetchCharts=async()=> {
    try {
      const response = await axios.get('https://shazam.p.rapidapi.com/charts/track', {
        params: {
          locale: 'en-US',
          pageSize: '20',
          startFrom: '0'
        },
        headers
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching charts:', error);
      throw error; // rethrow the error or handle it as needed
    }
  }
  
  //fetching searched songs
  export const fetchSearched=async(payload)=>{
    console.log(payload,"payload")
    try {
      const response = await axios.get('https://shazam.p.rapidapi.com/search', {
        params: {
          term: payload,
          locale: 'en-US',
          offset: '0',
          limit: '5'
        },
        headers
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching charts:', error);
      throw error; // rethrow the error or handle it as needed
    }
  }