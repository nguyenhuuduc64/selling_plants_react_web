import Content from '../Content';
import Header from '../Header';
import classNames from 'classnames/bind';
import styles from './defaltLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Content />
            </div>
        </div>
    );
}

export default DefaultLayout;
