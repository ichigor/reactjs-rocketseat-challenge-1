import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader">
    <img className="img" src={props.avatar} alt="avatar" />
    <p className="name">{props.name}</p>
    <p className="subtitle">{props.time}</p>
    <hr />
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
