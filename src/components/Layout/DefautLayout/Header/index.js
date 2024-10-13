import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LongMenu from '../../../LongMenu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            {/* logo*/}
            <img
                src="https://inkythuatso.com/uploads/images/2021/11/logo-ctu-inkythuatso-01-09-14-23-02.jpg"
                alt="logo"
                className={cx('logo')}
            />

            <div className={cx('title')}>
                <div>
                    <h2 className={cx('title-main')}>CNT</h2>
                    <h4>E-learning</h4>
                </div>
            </div>
            {/*search*/}
            {/*menu */}
            <button className={cx('more-btn')}>
                <LongMenu />
            </button>
        </header>
    );
}

export default Header;
