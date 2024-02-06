"use client"
import '@particle-network/connect-react-ui/dist/index.css';
import {ConnectButton} from '@particle-network/connect-react-ui'
import React, { useState, useEffect } from "react"
import { useAccount } from '@particle-network/connect-react-ui';
import { useRouter } from 'next/navigation';
import  Form from '../components/Form.jsx';
import { useWalletMetas } from '@particle-network/connect-react-ui';
import { ParticleNetwork } from '@particle-network/auth';
import {getUserInfo} from '@particle-network/auth';
const page =  () => {
    // check if user has logged into the particle account, if userAccount exists, redirect him to homepage
    const [user, setUser] = useState(false);
    const account = useAccount();

    const router = useRouter();
    const userInfo = particle.auth.getUserInfo();
    
    useEffect(() => {
        
        console.log(userInfo);
        
    
    }, [account])

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
        {account && 
        <div>
           
            <Form/>
            <button onClick={() => router.push('/')}>Homepage</button>
        </div>
        }
        </div>
    </main>
  )
}

export default page