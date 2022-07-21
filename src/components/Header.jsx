import React from 'react'
import "./styles.css"
import {FaSearch , FaShoppingCart} from "react-icons/fa";

function Header() {
  return (
    <div>
        <div className='container--header'>
            <div><img src="https://shopdunk.com/wp-content/uploads/2021/10/Property-1White.svg"></img></div>
            <div>Iphone</div>
            <div>Ipad</div>
            <div>Mac</div>
            <div>Watch</div>
            <div>Âm thanh</div>
            <div>Phụ Kiện</div>
            <div>Dịch vụ</div>
            <div>Khuyến Mại</div>
            <div>Trả Góp</div>
            <div><FaSearch /></div>
            <div><FaShoppingCart /></div>
        </div>
    </div>
  )
}

export default Header