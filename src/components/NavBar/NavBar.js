import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';
import { useStyles } from './NavBarStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../images/logo.png'
// import { UserContext } from '../../App';


export const NavBar = () => {
    //   const [loggedUser] = useContext(UserContext)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    //routing functionality
    const history = useHistory()
    const goToHomePage = () => {
        history.push('/')
    }
    const goToOrdersPage = () => {
        history.push('/orders')
    }
    const goToLoginPage = () => {
        history.push('/login')
    }
    const goToAdminPage = () => {
        history.push('/admin')
    }

    //handling mobile menu functionality
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button onClick={goToHomePage}>Home</Button>
            </MenuItem>
            <MenuItem onClick={goToOrdersPage}>
                <IconButton><ShoppingCartIcon /></IconButton>
            </MenuItem>
            <MenuItem>
                <Button onClick={goToAdminPage}>Admin</Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                {
                    //   loggedUser.email ? (
                    //     <IconButton>
                    //       <img src={loggedUser.photoURL} alt={loggedUser.name} style={{ width: '30px', borderRadius: '50%' }} />
                    //     </IconButton>
                    //   ) : (
                    //     <Button onClick={goToLoginPage}>Login</Button>
                    //   )
                }
                <Button onClick={goToLoginPage}>Login</Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" style={{ backgroundColor: 'rgba(0,0,0,0.4)', boxShadow: '0 0 0 0' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <img src={logo} alt="logo" style={{ height: '60px', marginLeft: '-30px' }} />
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={goToOrdersPage} style={{color: '#fff'}}><ShoppingCartIcon /></IconButton>
                        <Button onClick={goToAdminPage} className={classes.button}>Admin</Button>
                        {/* {
                            loggedUser.email ? (
                                <IconButton>
                                    <img src={loggedUser.photoURL} alt={loggedUser.name} style={{ width: '30px', borderRadius: '50%' }} />
                                </IconButton>
                            ) : (
                                <Button onClick={goToLoginPage} className={classes.button}>Login</Button>
                            )
                        } */}
                        <Button onClick={goToLoginPage} className={classes.button}>Login</Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}