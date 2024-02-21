"use client"
import '@particle-network/connect-react-ui/dist/index.css';
import {ConnectButton} from '@particle-network/connect-react-ui'
import React, { useState, useEffect } from "react"
import { useAccount } from '@particle-network/connect-react-ui';
import { useRouter } from 'next/navigation';
import { LogInWithAnonAadhaar } from '@anon-aadhaar/react'
const page = () => {
    // check if user has logged into the particle account, if userAccount exists, redirect him to homepage
    const [user, setUser] = useState(false);
    const account = useAccount();
    const router = useRouter();

  return (
       <main className="flex justify-center items-center h-screen w-screen bg-[#264653]">
     <div className="border w-[24vw] h-[50vh] rounded-md flex flex-col justify-center items-center">  {/* <ConnectButton.Custom>
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
       <ConnectButton style={{ marginBottom: '5rem' }} />
        <div style={{ marginBottom: '4rem' }}></div>
        {/* LogInWithAnonAadhaar component with bottom margin */}
        <LogInWithAnonAadhaar style={{ marginBottom: '1em' }} />
        {account && 
        <div>
            <button onClick={() => router.push('/')}>Homepage</button>
        </div>
        }
        </div>
    </main>
  )
}

export default page