"use client"
import '@particle-network/connect-react-ui/dist/index.css';
import {ConnectButton} from '@particle-network/connect-react-ui'
import React from "react"
const page = () => {
  return (
    <main className="flex h-[100vh] w-[100vw] bg-[#264653] justify-center items-center">
        <div className=" border w-[24vw] h-[50vh] rounded-md"> 
        {/* <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openConnectModal, openChainModal, accountLoading }) => {
                return (
                    <div>
                        <button onClick={openConnectModal} disabled={!!account}>
                            Open Connect
                        </button>
                        <br />
                        <br />
                        <button onClick={openAccountModal} disabled={!account}>
                            Open Account
                        </button>
                        <br />
                        <br />
                        <button onClick={openChainModal} disabled={!account}>
                            Open Switch Network
                        </button>
                        <div>
                            <h3>account</h3>
                            <p>{account}</p>
                        </div>
                    </div>
                );
            }}
        </ConnectButton.Custom> */}
        <ConnectButton/>
        </div>
    </main>
  )
}

export default page