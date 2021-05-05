import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        icon: "sun"
    },
    winter: {
        text: "Burr, ot is chilly",
        icon: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text: seasonText, icon: seasonIcon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}> 
            <i className={`icon-left ${seasonIcon} icon massive`} />
            <h1>{seasonText}</h1>
            <i className={`icon-right ${seasonIcon} icon massive`} />
        </div>
    );
    
};

export default SeasonDisplay;