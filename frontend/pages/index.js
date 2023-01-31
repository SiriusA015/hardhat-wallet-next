import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { injected } from "../components/wallet/connectors"
import { ethers } from "ethers";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const [registerCount, setRegCount] = useState("0")
  const [_register, setRegister] = useState()

  const [contractAddress, setAddress] = useState("0x3e67438347295858b3A4390C5c66cf6cC24535d745")

  const _initialize = () => {
    
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = require("../contracts/Register.json");
    setRegister(new ethers.Contract(
           contractAddress,
           contract.abi,
           _provider.getSigner())
      )
  };

  const connect = async () => {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)

      _initialize();

    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])


  const register = async ()=> {
   
    try {
    //  if(!_register.isRegister(contractAddress)){

          console.log(registerCount)
          const tx = await _register.register();
          setRegCount(_register.getCount()) 
      // }else{
      //   alert("Already Registered!")
      // }
   
    } catch (ex) {
      console.log("error occurs")
      console.log(ex)
    }
  }

  return (
  
    <div className="flex flex-col items-center justify-center">
      <div class="btn-group btn-group-lg">
          <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-500 hover:bg-blue-800">Connect to MetaMask</button>
          <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-500 hover:bg-blue-800">Disconnect</button>
      </div>

      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
     
      <button onClick={register} className="py-2 mt-10 mb-4 text-lg font-bold text-white rounded-lg w-40 bg-green-500 hover:bg-blue-800">Register Wallet</button>
      <h5>registered count is {registerCount}</h5>
    </div>
  )
}
