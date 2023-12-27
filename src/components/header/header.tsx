import { FC } from 'react';
import stylesHeader from './header.module.scss';
import { ReactComponent as IconStatusServer }  from '../../image/icons/icon-status-server.svg';
import { ReactComponent as IconLogo }  from '../../image/icons/icon-logo.svg';
import { Link } from 'react-router-dom';

export const Header: FC = (): JSX.Element => {

  return <header className={stylesHeader.container}>
    <div className={stylesHeader.statusContainer}>
        <IconStatusServer className={stylesHeader.statusIcon}/>
        <span className={stylesHeader.statusText}>статус сервера</span>
    </div>
    <Link to={{pathname: '/'}} className={stylesHeader.logoContainer}>
        <IconLogo className={stylesHeader.iconLogo}/>
        <h1 className={stylesHeader.label}>Мнемокадр</h1>
    </Link>
    <div className={stylesHeader.profileContainer}>
        <Link to={{pathname: '/profile'}} className={stylesHeader.profileSummaryContainer} aria-label='к профилю'>
            <img src='https://i.pinimg.com/originals/cd/5b/d2/cd5bd2a823895a737b37f575ee5cf7c2.jpg' className={stylesHeader.profileSummaryAvatar} alt='аватар' />
             <div className={stylesHeader.profileSummaryTextContainer}>
                 <h2 className={stylesHeader.profileSummaryLabel}>Профиль:</h2>
                 <span className={stylesHeader.profileSummaryUsername}>user_01</span>
             </div>
        </Link>
        <Link to={{pathname: '/logout'}} className={stylesHeader.buttonLogout} aria-label='выход из профиля'/>
    </div>
  </header>;
};
