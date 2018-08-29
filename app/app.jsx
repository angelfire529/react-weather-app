import  React from 'react';
import ReactDOM from 'react-dom';
import  {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Main} from '../app/components/main';
import Weather from '../app/components/weather';
import {About} from '../app/components/about';
import Examples from '../app/components/examples';

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation()

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path='about' component={About}/>
    <Route path='examples' component={Examples}/>
    
    <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
