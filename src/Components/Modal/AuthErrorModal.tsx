import React from 'react';
import styles from './AuthErrorModal.module.css';

type AuthErrorPageProps = {
    error: string;
    onClose: () => void ,
}
const AutherrorModal:React.FC<AuthErrorPageProps> = ({
    onClose,
    error
}) => {
  const inlineStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: "16% auto",

};  

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <span onClick={onClose} className={styles.cross}><img src={require('../../Assets/cross.png')} alt="cross..." /></span>
        <div className={styles.content_img}>
        <img src={require('../../Assets/errorLogo.png')} alt="Opps..." />
        <div style={inlineStyle}>
        <div className={styles.loginFail}>Login Fail</div>
        <p className={styles.errorMessage}>{error}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AutherrorModal