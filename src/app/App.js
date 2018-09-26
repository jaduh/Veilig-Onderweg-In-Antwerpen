import React, { Component } from 'react';

import './App.css';
import {Header} from './Components/Header';
import {Ongelukken} from './Components/Ongelukken';


// // const ongelukken =[
// //   {
// //   datum: '3 juli 2018',
// //   fiets: true,
// //   auto: true,
// //   voetganger:false,
// //   omschrijving:'Bij een aanrijding in de Lange Dijkstraat is gisteren een 28-jarige fietser overleden. Het ongeval roept net als dat van vorige week vragen op rond de verkeersveiligheid voor fietsers.',
// //   objectID:0,
// //   },

// //     {
// //       datum: '7 juli 2018',
// //       fiets: true,
// //       auto: true,
// //       voetganger:false,
// //       omschrijving:'Bij een aanrijding in de Lange Dijkstraat is gisteren een 28-jarige fietser overleden. Het ongeval roept net als dat van vorige week vragen op rond de verkeersveiligheid voor fietsers.',
// //       objectID:1,
// //       },

// ];

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Ongelukken/>
     
      




        {/* <header className="App-header">
         
          <h1 className="App-title">Veilig onderweg <span className="block">in Antwerpen</span> </h1>
          {ongelukken.map(function(item){
            return<div>{item.datum}</div>
          })}
        </header> */}
    
      </div>
    );
  }
}


export default App;
