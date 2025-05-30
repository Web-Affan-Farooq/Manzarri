import TypeIcons from '@/@types/icons'
import React from 'react'

const Easypaisa = ({className, size, ...props}:TypeIcons) => {
  return (
    <>
<svg width={size? String(size.width) : "25"} height={size? String(size.height) : "25"}  viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='#000000' strokeLinejoin='round' className={`${className}`}><path className="a" d="M24.6025,4.5c8.516,0,15.42,5.7166,15.42,12.7693S33.12,28.6141,24.6025,28.6141Q12.4689,28.3687,7.4111,20.972A1.6469,1.6469,0,0,1,7.1663,19.73Q10.0575,5.2982,24.6025,4.5Zm-.5751,7.9439q-7.3449.7437-8.9894,6.9928,2.2406,1.9754,8.9894,2.1927c4.5207-.0711,7.2591-1.389,7.3129-4.4525C31.0589,13.7933,27.7687,12.3159,24.0274,12.4439Z"/><path className="a" d="M6.396,24.71C8.9221,31.9571,15.8885,35.99,23.05,35.99c5.9392,0,9.8755-2.5707,11.94-6.4492L41.6456,33.71c-2.32,5.6749-9.1977,9.79-17.3225,9.79-10.0289,0-18.617-6.7591-17.93-18.5113C6.393,24.8952,6.394,24.8017,6.396,24.71Z"/></svg>
    </>
  )
}

export default Easypaisa