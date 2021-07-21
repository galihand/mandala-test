import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from './store/actions/productActions';

function App() {
  const dispatch = useDispatch()
  const [state, setState] = useState({ showDetail: false, focus: {} })
  const { products, isLoading, isFailed } = useSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  const showDetailHandler = (item) => {
    setState(state => ({
      ...state, showDetail: true, focus: item
    }))
  }

  return (
    <React.Fragment>
      <header>
      </header>
      <div className='content'>
        <h1 className='title'>Data Products</h1>
        {
          isLoading ?
            <h3 className='loading'>Loading...</h3> :
            isFailed ?
              <div className='error'>
                <h3>Something happen. Reload page</h3>
                <div className='reload' onClick={() => window.location.reload(false)}>
                  reload
                </div>
              </div> :
              <div className='table'>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(item =>
                      <tr key={item.id} onClick={() => showDetailHandler(item)}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
        }

        {state.showDetail &&
          <div>
            <h1 className='title'>Detail Product</h1>
            <div className='box-detail'>
              <img src={state.focus.image} alt={state.focus.image} width={200} />
              <ul className='list-detail'>
                <li>
                  Title: {state.focus.title}
                </li>
                <li>
                  Category: {state.focus.category}
                </li>
                <li>
                  Price: {state.focus.price}
                </li>
                <li>
                  Description: {state.focus.description}
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
      <footer>
      </footer>
    </React.Fragment>
  )
}

export default App;
