import { HeartOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import './style.scss'
import { Container } from '@components'
import Logo from '@images/shop.png'
import { Badge, Button, Input } from 'antd'
import { HeaderDrawer } from '@ui'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore, useLikeStore } from '@store'

function Header() {
  const navigate = useNavigate()
  const {carts}:any = useCartStore()
  const {likes}:any = useLikeStore()
  
  return (
    <header>
        <div className='header-top'>
            <p>Sign up and get 20% off to your first order. Sign Up Now</p>
            <Link className='link' to={'login'}>Sing-in</Link>
        </div>
      <Container>
          <nav>
            <HeaderDrawer />  
            <div className='nav-left'>
                <img style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={Logo} alt="IMG LOGO" />
                <ul>
                  <li>Shop</li>
                  <li>On Sale</li>
                  <li>New Arrivals</li>
                </ul>
            </div>
            
            <div className='nav-right'>
      
                <p onClick={() => navigate('/category')} style={{cursor: 'pointer'}}>Brands</p>
                <Button><SearchOutlined/></Button>
                <div className='input-div'>
                  <Input className='header-search' placeholder='Search for products...'/>
                 
                  <div>
                  <Badge  className='badge' count={carts?.length}>
                  <ShoppingCartOutlined onClick={() => navigate('/cart')}/>
                  </Badge>
                  <Badge className='badge' count={likes?.length}>
                    <HeartOutlined onClick={() => navigate('/like')}/>
                  </Badge>
                </div>
                </div>
            </div>
            
          </nav>
      </Container>
    </header>
  )
}

export default Header