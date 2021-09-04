import React from 'react'
import PropTypes from 'prop-types';
const Profile = ({name,adresse,mm,children,mes}) => {
  return (
    <div>
      {name}<br></br>
      {adresse}<br></br>
      {mm}<br></br>
      {children}
      {mes}<br></br>
      <button onClick={mes}>click</button>
    </div>
  )
}
Profile.propTypes = {
  name: PropTypes.string,
  adresse: PropTypes.string,
  mm: PropTypes.string,
  children: PropTypes.string,
  mes: PropTypes.string,
}
export default Profile
