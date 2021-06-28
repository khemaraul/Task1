// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { authActions } from '../../store';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    // const dispatch = useDispatch();
    // const isAuth = useSelector(state => state.auth.isAuthenticated);
    // const logoutHandler = () => {
    //     dispatch(authActions.logout());
    // }
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Cafe Coffee</div>
            <div className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/welcome' activeClassName={classes.active}>
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' activeClassName={classes.active}>
                            Products
                        </NavLink>
                    </li>
                    {/* <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li> */}
                </ul>
            </div>
        </header>
    )
}

export default MainNavigation;