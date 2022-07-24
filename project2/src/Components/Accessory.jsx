import React from 'react'
import "./Style.css"

function Accessory() {
    return (
    <div>
        <div>
            <h1 >
                Phụ Kiện
            </h1>
        </div>
        <div className='Samsung'>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2021/12/MHLQ3-600x600-1.jpeg" />
                <div>
                    <h3>Ví da Iphone</h3>
                    <p>Giá tiền:3.000.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/01/MHXH3_AV4_GEO_US.jpg" />
                <div>
                    <h3>Sạc Magsafe</h3>
                    <p>Giá tiền:2.000.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2021/08/cu%CC%89111.png" />
                <div>
                    <h3>Sạc 20W</h3>
                    <p>Giá tiền:500.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2021/07/1-12-e1625197512628.jpeg" />
                <div>
                    <h3>Ốp Lưng Iphone</h3>
                    <p>Giá tiền:300.000đ</p>
                </div>
            </div>
            
        </div>
        <a>Xem Tất Cả Phụ kiện</a>
    </div>
    )
}

export default Accessory