import React from 'react';

import './content.less';

const Contect = (props) => {
  return (
      <div>
        Data
      </div>
  )
}

const formatDate = (data) => {
  const date = new Date(data);
  let dd = date.getDate();
  let mm = date.getMonth()+1;
  const yyyy = date.getFullYear();

  if( dd<10 ) {
    dd = '0' + dd;
  }
  if( mm<10 ) {
    mm = '0' + mm;
  }

  const result = dd + '/' + mm + '/' + yyyy;
  return result;
}

export default Contect;