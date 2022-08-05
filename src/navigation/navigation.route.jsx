import { NavigationContainer, LogoContainer, CartCount } from './navigation.styles';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'

const Navigation = () => {
    const { count } = useSelector((store) => store.cart);
    const navigate = useNavigate();

    const navigateToCart = () => {
        navigate("/cart");
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/cart">{count}</LogoContainer>
            </NavigationContainer>
            <Outlet />
        </>
    );
}

export default Navigation;