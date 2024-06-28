import { useState } from 'react';
import Navbar from './component/Navbar.jsx';
import Head from './component/header.jsx';
import Product from './component/product.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-slate-900 h-screen w-full'>
        <Navbar />
        <Head/>
        <Product/>
      </div>
    </>
  );
}

export default App;
