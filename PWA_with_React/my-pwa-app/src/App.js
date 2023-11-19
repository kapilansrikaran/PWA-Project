// import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import video from"./videos/Sculpts.mp4";


function App() {
  // const [Data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://orangevalleycaa.org/api/videos");
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div className="App">
      <header className="App-header">
        <h1> Art Videos</h1>
      </header>

      {/* {Data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))} */}
      <br/>
        <video src={video} controls height={200} />
    </div>
  );
}

export default App;
