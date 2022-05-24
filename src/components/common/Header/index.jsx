import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../../logo.svg'

export default function Header() {
    return (
        <div className="w-full h-20 flex justify-between items-center pl-6 pr-8 py-3">
            <div className="flex items-end gap-2">
                <img src={LOGO} alt="logo" />
                <p className="mb-2">Kênh Người Bán</p>
            </div>
            <Link to="/" className="text-highlight">
                Trang chủ Hihihi
            </Link>
        </div>
    )
}
