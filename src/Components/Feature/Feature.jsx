import React from 'react'
import './Feature.css'
const Feature = () => {
    return (
        <div className="feature-container">
             <h2 className="feature-title">Các chức năng chính</h2>
            <div className="h-64 grid grid-rows-2 grid-flow-col gap-6 mr-8 ml-8">
                <button className='h-32  btn text-white bg-color-button rounded'>Quản Lý Tòa Nhà</button>
                <button className='h-32  btn text-white bg-color-button rounded'>Hợp Đồng Điện Tử</button>
                <button className='h-32  btn text-white bg-color-button rounded'>Dịch Vụ & Tiện Ích Phòng Thuê</button>
                <button className="h-32  btn text-white bg-color-button rounded">Quản Lý Hóa Đơn</button>
                <button className="h-32  btn text-white bg-color-button rounded">Chốt Phòng & Dịch Vụ</button>
                <button className="h-32  btn text-white bg-color-button rounded">Chat - Báo Cáo Sự Cố</button>
            </div>
           

        </div>
        
    );
};

export default Feature
