import React from 'react';

export const verbColor = value => {
  switch (value) {
    case 'get':
      return {
        normal: '#61affe',
        lighter: 'rgba(97,175,254,.1)',
      };
    case 'post':
      return {
        normal: '#49cc90',
        lighter: 'rgba(73,204,144,.1)',
      };
    case 'put':
      return {
        normal: '#fca130',
        lighter: 'rgba(252,161,48,.1)',
      };
    case 'delete':
      return {
        normal: '#f93e3e',
        lighter: 'rgba(249,62,62,.1)',
      };
    default:
      return {
        normal: '#fff',
        lighter: '#fff',
      };
  }
};

const Verb = ({ value, style }) => {
  const verbStyle = {
    padding: '0.2rem 0.5rem',
    backgroundColor: verbColor(value).normal,
    color: '#fff',
  };

  return <p style={Object.assign(verbStyle, style)}>{value.toUpperCase()}</p>;
};

export default Verb;
