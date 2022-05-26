import React, { useState } from 'react';
import { data,statuses } from '../data';

const Home = () => {
  const [items,setItems] = useState(data);
  console.log(items);
  return (
    <div>
      Home page
    </div>
  );
};

export default Home;