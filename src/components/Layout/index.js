import React from 'react';
/* eslint-disable */
import './style.css';

import { Story } from '../Story';
import { Post } from '../Post';
import { Suggestion } from '../Suggestion';

export default function Layout() {
    return (
        <div>

            <div className="mainGrid">

                <div className="first-column" style={{gridArea: "firstColumn"}}>
                <div className="box">
                    <Story />
                </div>
                <div className="box" style={{margin: "30px 0"}}>
                    <Post />
                </div>
                </div>


                <div style={{gridArea: "secondColumn"}}>
                <div className="suggestionBox">
                    <Suggestion />
                </div>
                </div>

                
            </div>

        </div>
    );
}