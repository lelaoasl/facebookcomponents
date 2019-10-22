import React from 'react';

import '../../components/header/header.styles.css';
import profileLogo from '../../assets/149071.svg';

const Header = () => {
  return(
    <div className="header">
      <span>facebook.</span>
      <div className="right">Meu perfil
        <img src={profileLogo} />
      </div>
    </div>
  )
 

}

export default Header;
