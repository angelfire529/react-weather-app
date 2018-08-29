import React, { Component } from 'react';
import {Link} from 'react-router';

class Examples extends Component {
    render() {
        return (
           <div>
               <h1 className="text-center">Examples</h1>
               <p>Welcome to examples page!</p>
               <ol>
                   <li>
                       <Link to="/?location=Philadelphia">Philadelphi, PA</Link>
                   </li>
                   <li>
                       <Link to="/?location=Rio">Rio, Brazil</Link>
                   </li>
               </ol>
           </div>
        );
    }
}

export default Examples;