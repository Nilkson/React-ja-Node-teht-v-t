import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Button = ({ icon, icon2 }) => {
  return (
    <div className={icon} >
        <FontAwesomeIcon icon={icon} />
        {/* <i className={`fas fa-3x fa-${icon}`}></i> */}
    </div>
  );
};

export default Button;
