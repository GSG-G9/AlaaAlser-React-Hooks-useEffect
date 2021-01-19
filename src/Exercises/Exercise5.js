import React, { useState, useEffect } from 'react';

function Exercise5() {
  const [data, setData] = useState(null);

  useEffect(() => {

  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((res) => res.json())
  .then((data) => setData(data));
  }, []);

  return (
    <div className='container'>
      {data?.map((item) => (
        <ul>
          <li> Name : {item.name}</li>
          <li> Email : {item.email}</li>
          <li> Phone : {item.phone}</li>
          <li> Address : {item.address.city}, {item.address.street} , {item.address.suite}</li>
          <li> Website : {item.website}</li>
          <li> Company name : {item.company.name}</li>
          <img src={`https://robohash.org/${item.username}.png`} alt='' />
        </ul>
      ))}
    </div>
  );
}

export default Exercise5;
