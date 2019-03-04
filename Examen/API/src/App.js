import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
//    const express = require("express");
//    const bodyParser = require("body-parser");
  //   const archivos = require('fs');
  // //  var app = express();
  //   //DB Handler
  //     var db = {
  //     //Indicar BD o abrir conexion
  //     initDB: function () {
  //       var fs = require("fs");
  //       var contents = fs.readFileSync("artista.json");
  //       this.artistas = JSON.parse(contents);
  //     },

  //     saveArtistas: function (infoArtista) {
  //       archivos.writeFileSync('artistas.json', JSON.stringify(this.artistas),
  //         function (error) {
  //           if (error) {
  //             console.log('Hubo un error al escribir en el archivo')
  //             console.log(error);
  //           }
  //         });
  //     }
  //   }
    
    //   getArtistaBy: function (filter, value) {
    //     console.log("filtro: " + filter + "valor: " + value);
    //     var selected = null;
    //     this.artistas.forEach(artista => {
    //       console.log(artista);
    //       console.log(artista[filter]);
    //       if (artista[filter] == value) {
    //         selected = artista;
    //         return selected;
    //       }
    //     });
    //     return selected;
    //   },

    // app.route("/artista")
    //   .get((req, res) => {
    //     db.initDB();
    //     res.json(db.artistas);
    //   })
    //   .post((req, res) => {
    //     db.initDB();
    //     var artista = req.body;
    //     console.log("Objeto post recibido");
    //     console.log(artista);
    //     db.artistas.push(artista);
    //     db.saveArtistas();
    //     res.json({ 'status': 'OK' });
    //   })

    // app.get('/artistas/:name', (req, res) => {
    //   db.initDB();
    //   var name = req.params.name;
    //   var artista = db.getArtistaBy('name', name);
    //   res.json(artista);
    // });

    super(props);    
    this.state = {
      query: "", // my query
      artist: null,  // my response.
    }
  }



  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'accessToken'

    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });
      })

  }

  render() {   

    let artist = {
      name: '',
      popularity: '',
      followers: {
        total: ''
      }
    };
    if (this.state.artist !== null) {
      artist = this.state.artist;
    }

    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark navbar-expand-md navbar-expand-sm">
          <a href="" className="navbar-brand">Spotify API</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#Mimenu"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="Mimenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <input type="text"
                  onChange={event => { this.setState({ query: event.target.value }) }}
                  placeholder="Artista..." />
              </li>
              <li className="nav-item">
                <button
                  onClick={() => this.search()}
                  className="btn btn-primary" type="button">Buscar
              </button>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <table className="table table-condensed ">
          <tbody>
            <tr >
              <td align="center" width="150px">Artista</td>
              <td align="center" width="150px">Followers</td>
              <td align="center" width="150px">Popularity</td>
            </tr>
            <tr>
              <td align="center"> {artist.name} </td>
              <td align="center"> {artist.followers.total} </td>
              <td align="center"> {artist.popularity} </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>

    )
  }
}
export default App;
