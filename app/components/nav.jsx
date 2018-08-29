import React, { Component } from 'react';
import { IndexLink} from 'react-router';

 export class Nav extends Component {
     constructor(props) {
         super();
         this.props = props;
     }

    onSearch = (e) => {
        e.preventDefault();

        const location = this.refs.search.value;
        const encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = `#/?location=${encodedLocation}`;
        }
    }
   render () {
    return(
        <div className="top-bar">
            <div className="top-bar-left">
            <ul className="menu">
            <li className="menu-text">React Weather App</li>
             <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeigt: 'bold'}}>Get Weather</IndexLink>
             </li>
             <li>
             <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeigt: 'bold'}}>About</IndexLink>
             </li>
             <li>
             <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeigt: 'bold'}}>Examples</IndexLink>
             </li>
            </ul>
            </div>
            <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
            <ul className="menu">
                <li>
                    <input type="search" ref="search" placeholder="Search"/>
                </li>
                <li><button type="submit" className="button">Search</button></li>
            </ul>
            </form>
            </div>
        </div> 
     );
   }
}

