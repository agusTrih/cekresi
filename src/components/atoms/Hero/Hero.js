import React from 'react';
import PropTypes from 'prop-types';

export default function Hero(props) {
  const { title, description } = props;
  return (
    <div data-testid="hero" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt=""
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p data-testid="description" className="py-6">
            {description}
          </p>
          <button className="btn btn-primary" type="button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Hero.defaultProps = {
  title: '',
  description: '',
};
