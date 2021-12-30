import './header.styles.scss';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';


const Header=({currentUser})=>(
    <div className='header'>
  <Link to='/' className='logo-container'>
  <Logo className='logo'/>
  </Link>
  <div className='options'>
      <Link className='option' to='/shop'>
          SHOP
           </Link>
           <Link className='option' to='/shop'>
          CONTACT
           </Link>
           {
             currentUser?
             <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
             :
             <Link className='option' to='/signin'>SIGN IN</Link>

           }
           <CartIcon/>
  </div>

    </div>
)


const mapStateProps=state=>({
  currentUser:state.user.currentUser
})

export default connect(mapStateProps)(Header);