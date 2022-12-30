import React from 'react';
import PropTypes from 'prop-types';
import { PUBLIC_URL } from 'config/env';

export default function Hero(props) {
  const { title, description, children } = props;
  return (
    <div data-testid="hero" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src={`${PUBLIC_URL}/assets/icon.png`}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p data-testid="description" className="py-6">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  title: '',
  description: '',
  children: '',
};
