import React from 'react'

const icons = require('./Icons');

const Icon = ({ icon, className, size, disabled }) => {
  if (!icons[icon]) {
    return null;
  }

  const MappedIcon = icons[icon];

  return <MappedIcon size={size} className={className} disabled={disabled} />;
};

export default Icon