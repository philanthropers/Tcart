import React from 'react';

export default function MessageBox(props) {
  console.log(props);
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {/* {props.children} */}
      <p>Something went wrong</p>
    </div>
  );
}

