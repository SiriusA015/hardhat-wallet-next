import { useEffect, useState } from "react"
import { injected } from "../components/wallet/connectors"
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const [registerCount, setRegCount] = useState("0")
  const [_register, setRegister] = useState()
  const [contractAddress, setAddress] = useState("0x6d8a922295858b3A4390C5c66cf6cC2e38319650")

  return (
  
    <div className="flex flex-col items-center justify-center">
      <div class="btn-group btn-group-lg">
          <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-500 hover:bg-blue-800">Connect to MetaMask</button>
          <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-500 hover:bg-blue-800">Disconnect</button>
      </div>
    
      {active ? <span>Connected with </span> : <span>Not connected</span>}
     
      <button className="py-2 mt-10 mb-4 text-lg font-bold text-white rounded-lg w-40 bg-green-500 hover:bg-blue-800">Register Wallet</button>
      <h5>registered count is {registerCount}</h5>
    </div>
  )
}
