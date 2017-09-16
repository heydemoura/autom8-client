import React from 'react';

const generateCardClass = (props) => {
  const defaultClass = 'card pin';
  return `${defaultClass} ${!props.power ? 'card-toggle-on' : ''}`;
};

const generateIconClass = (props) => {
  const icon = !props.power ? 'mdi-lightbulb-on-outline' : 'mdi-lightbulb-outline';
  return `card-icon mdi ${icon}`;
};

export default (props) => (
  <div className={generateCardClass(props)} {...props}>
    <div className="card-body">
      <i className={generateIconClass(props)}></i>
      <span className="vdivider"></span>
      <h5 className="pin-name">
        {props.name}
      </h5>
      <div>
      </div>
    </div>
  </div>
);
