import React from 'react'
import "./Style.css"

function Service() {
    return (
    <div>
        <div>
            <h1 >
                Dịch vụ
            </h1>
        </div>
        <div className='Samsung'>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/04/apple-care.png" />
                <div>
                    <h3>Apple Care</h3>
                    <p>Giá tiền:600.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/04/BHKC-02-1-1024x1024.png" />
                <div>
                    <h3>Bảo hành Kim Cương</h3>
                    <p>Giá tiền:300.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/04/Microsoft-Office-1.png" />
                <div>
                    <h3>Microsoft Office</h3>
                    <p>Giá tiền:1.000.000đ</p>
                </div>
            </div>
            <div className='Oppo'>
                <img className="hieu2"src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-3524ea6/wp-content/uploads/2022/04/Apple-school-manager-1.png" />
                <div>
                    <h3>Apple School Manager</h3>
                    <p>Dành cho trường học</p>
                </div>
            </div>
            
        </div>
        <a>Xem Tất Cả dịch vụ</a>
    </div>
    )
}

export default Service