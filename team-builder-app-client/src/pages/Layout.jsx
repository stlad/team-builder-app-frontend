import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import classes from './Layout.module.css'


const Layout = () => {
    return (
        // <>
        <main className={classes.wrapper}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.outlet}>
                <Outlet />
            </div>
            <Footer />
        </main>
        // </>
    )
}


export default Layout;