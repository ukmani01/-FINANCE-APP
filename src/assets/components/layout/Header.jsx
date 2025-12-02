
import { Link } from 'react-router-dom'
import { useState } from "react"
import { HiOutlineSearch, HiBell, HiSun, HiMoon } from "react-icons/hi";
import avatar from './avatar.png'
import "./sh.css"
export default function Header() {
  const [mood, toggle] = useState()
  const [o, setQ] = useState("")
  const toals = { balance: 1222.2 }


  return (
    <header className="header">
      <div className="control-input">
        <div className="better-wey-icon">
          <HiOutlineSearch className="  icon-spcial " />
          <input className="border rounded-2xl border-gray-400" value={o} onChange={(e) => setQ(e.target.value)} />
        </div>

        <div className="balance">
          <h6 className="text-gray-800 font-[Source-Sans-Pro]">Balance</h6>
          <p >{toals.balance}</p>
        </div>
      </div>
      <div className="icons">
        <button>{<HiBell />}</button>
        <button>{<HiMoon />}</button>
        <Link className="Link" to="/profile">
          <div className="with-icon" />
          <div className="">
            <div className=" text-gray font-[Montserrat">you</div>
            <img className="h-8 w-10 object-cover rounded-full" src={avatar} alt="" />
          </div>
        </Link>
      </div>

    </header>


  )
}