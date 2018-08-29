import React, { Component } from 'react';
import {Nav}  from './nav';

export const Main = props =>{
    return (
        <div>
            <Nav />
            <div className="grid-x align-center">
            <div className="cell small-2 medium-6 large-4 text-center">{props.children}</div>
            </div>
        </div>
         
     );
 };
