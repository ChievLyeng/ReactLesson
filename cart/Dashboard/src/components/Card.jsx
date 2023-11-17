import { Link } from 'react-router-dom';
import OutlinedCard from "../commonComponent/Card";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store';
import { fetchProducts } from '../store';
import { fetchOrder } from '../store';

function SummaryData() {

  const dispatch = useDispatch();

  const { isLoading: userLoading, data: userData, error: userError } = useSelector((state) => state.users);
  const { loadingProduct, productData, productError } = useSelector((state) => state.products);
  const { orderLoading, orders, orderError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUser());
    dispatch(fetchOrder());
  }, [dispatch]);

  if (userLoading || loadingProduct || orderLoading) {
    return <p>Loading...</p>;
  }

  if (userError || productError || orderError) {
    return <p>Error loading data.</p>;
  }

  console.log("data",userData)
  console.log("data",orderLoading)
  console.log()





  return (
    <>
      <div className='container-all'>
        <div className='container'>
          <div className='sub-container'>

            <Link to="" className='link'>
              <OutlinedCard
                title="Total Products"
                value="1"
                icon={<Inventory2Icon />}
              />
            </Link>

            <Link to="" className='link' >
              <OutlinedCard
                title="Total Users"
                value=""
                icon={<PersonOutlineIcon />}
              />
            </Link>

          </div>

          <div className="sub-container">

            <Link to="" className='link' >
              <OutlinedCard
                title="Total Orders"
                value="3050"
                icon={<ShoppingBagIcon />}
              />
            </Link>

            <Link to="" className='link' >
              <OutlinedCard
                title="Total Reviews"
                value="3050"
                icon={<ReviewsIcon />}
              />
            </Link>

            </div>
          </div>
        </div>
    </>
  );
}

export default SummaryData;
