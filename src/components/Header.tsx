import styles from './Header.module.css'

import igniteLogo from '../assents/Ignite-logo.svg';

export function Header() {
    return(    
        <header className={styles.header}>   
          <img src={igniteLogo} alt="Logotipo do ignite"/>    
        </header> 
    );
}