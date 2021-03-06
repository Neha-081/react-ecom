import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';



const CartDropdown=({cartItems,history,dispatch})=>(
<div className='cart-dropdown'>
    <div className='cart-items'>
        {
        cartItems.length?
        cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
    :
    <span className='empty-message'>Your Cart is Empty</span>
    }
    </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())   //hide dropdown on checkout page when go to checkout button clicks
            
            }}>GO TO CHECKOUT</CustomButton>
</div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems  //state dont rerendered if changes are not regarding to cart items
}
    
)

export default withRouter(connect(mapStateToProps)(CartDropdown));