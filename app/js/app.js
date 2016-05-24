  import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//MAIN APP COMPONENT//
export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      propList: [{}]
    };
  }

  handleSubmit(e){
    e.preventDefault();
    var context = this;

    var obj = {};
    obj.lat = this.refs.lat.getDOMNode().value;
    obj.long = this.refs.long.getDOMNode().value;
    // obj.lat = 37.805576;
    // obj.long = 122.422947;

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function(){
    //   if(xhttp.status === 200){
    //     context.setState({propList: JSON.parse(xhttp.responseText)});
    //   }
    // };
    // xhttp.open("POST", "http://localhost:3000/api", true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(JSON.stringify(obj));

    fetch('http://localhost:3000/api',{
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }

          // Examine the text in the response  
          response.json().then(function(data) {  
            context.setState({propList: data});
            console.log(data);  
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
        context.setState({propList: [{}]});
      });
  }

  render(){
    var context = this;

    var propList = this.state.propList;

    var displayProperties = function(){
      console.log(propList, "propList")
      if (propList[0].address != undefined){
        return propList.map(function(property){
          return (
            <Property className="cards" list={property} key={property.id}/>
          );
        });
      } else {
        return (
          <div> No results to display </div>
        )
      } 
    }();

    return (
      <div className="container">
        <h1>Trulia Coding Challenge</h1>
        <form className="col-sm-12" style={styles.form}>
          <div> <input placeholder="Latitude" ref="lat" name="lat"/> </div>
          <div> <input placeholder="Longitude" ref="long" name="long"/> </div>
          <div> <input className="btn " type="submit" value="submit" onClick={this.handleSubmit.bind(this)} /> </div>
        </form>
        <div style={styles.outerbox}>
            {displayProperties}
        </div>
      </div>
    );
  }
}

//PROPERTY COMPONENT//
export class Property extends Component {
  render() {
    return (
      <div style={styles.cards}>
        <div style={styles.innercard}>
          <div style={styles.h2}>{this.props.list.address}</div>
          <div style={styles.h2}>{this.props.list.city} </div>
          <img style={styles.img} src={this.props.list.image_url} alt="Property image not found."/>
          <div style={styles.h3}>{this.props.list.distance} miles away</div>
        </div>
      </div>
    );
  }
}

var styles = {
  cards: {
    width: '33%',
    height: '33%',
    border: '1px black',
    paddingbottom: '20px',
  },

  innercard: {
    width: '95%',
    height: '90%',
    border: '2px solid #B8B5BB',
    marginTop: '15px',

  },

  h2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '19px',
    fontWeight: '500',
    textAlign: 'center',
    color: '#20c063',
  },

  h3: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: '700',
    textAlign: 'center',
  },

  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    overflow: 'hidden',
  },

  outerbox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },

  form: {
    marginBottom: '30px',
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);
