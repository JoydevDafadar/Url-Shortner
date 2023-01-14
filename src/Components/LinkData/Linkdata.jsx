import React, { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import FetchFromAPI from '../../utils/FetchFromAPI'
import './Linkdata.scss'

const Linkdata = ({inputValue}) => {

const [shortData, setShortData] = useState("Enter URL First");
const [copid, setCopid] = useState(false);
const [Loading, setLoading] = useState(false);
const [error, setError] = useState();

useEffect( () => {

  // console.log( inputValue );
  try{

    setLoading( true );

    FetchFromAPI( inputValue )
    .then( ( data ) => {
      setShortData( data?.result?.full_short_link );
    })

  }catch( err ) {
    setError( err );
  }finally{
    setTimeout(()=>{
      setLoading( false );
    },500)
  }
  

}, [inputValue] )

useEffect( () => {

  setTimeout( () => {
    setCopid( false );
  }, 5000)

}, [copid] )

// if( Loading ){
//   return(
//     <p className='noData'>Loading...</p>
//   )
// }
if( error ){
  return(
    <p className='noData'>Something Went Wrong :( </p>
  )
}

  return Loading?
  <p className='noData'>Loading...</p>
  : (
    <div className='result'>
      <p>{shortData}</p>
      <CopyToClipboard 
      text={shortData}
      onCopy={() => setCopid(true)}
      >
        <button className={copid ? "copid" : ""}>Copy To ClipBoard</button>
      </CopyToClipboard>
    </div>
  )
}

export default Linkdata