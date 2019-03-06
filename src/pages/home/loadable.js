import React from 'react';
import Loadable from 'react-loadable';
import './loadable.js';


function Loading(props) {
    if (props.error) {
        return <div>Error!</div>;
    } else if (props.pastDelay) {
        return (
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        );
    } else {
        return null;
    }
}

const LoadableBar = Loadable({
    loader: () => import('./'),
    loading:Loading,
});

export default ()=><LoadableBar/>;
