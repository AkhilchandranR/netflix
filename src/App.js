
import './App.css';
import Row from './Row';
import requests from './request';
import Navbar from './Navbar';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending now" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
