"use client"
import '@particle-network/connect-react-ui/dist/index.css';
import {ConnectButton} from '@particle-network/connect-react-ui'
import React, { useState, useEffect } from "react"
import { useAccount } from '@particle-network/connect-react-ui';
import { useRouter } from 'next/navigation';
import  Form from '../components/Form.jsx';
import { useWalletMetas } from '@particle-network/connect-react-ui';
import { ParticleNetwork } from '@particle-network/auth';
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";


const page =  () => {
    // check if user has logged into the particle account, if userAccount exists, redirect him to homepage
    const [user, setUser] = useState(false);
    const account = useAccount();

    const router = useRouter();
    
    
    useEffect(() => {
        
        console.log(account);
        
    
    }, [account])

  return (
    <ModalProvider
        options={{
          projectId: "475c5396-812f-4e77-91db-55ff668bdabe",
          clientKey: "capkMAUCfx3KFqwOhcoASzrOEOwVv6QYl6vNh6Di",
          appId: "f70669fd-580f-4bf3-be15-da018fff4a90",
          chains: [Ethereum, EthereumGoerli],
          particleWalletEntry: {
            //optional: particle wallet config
            displayWalletEntry: true, //display wallet button when connect particle success.
            defaultWalletEntryPosition: WalletEntryPosition.BR,
            supportChains: [Ethereum, EthereumGoerli],
            customStyle: {}, //optional: custom wallet style
          },
          securityAccount: {
            //optional: particle security account config
            //prompt set payment password. 0: None, 1: Once(default), 2: Always
            promptSettingWhenSign: 1,
            //prompt set master password. 0: None(default), 1: Once, 2: Always
            promptMasterPasswordSettingWhenLogin: 1,
          },
          wallets: evmWallets({
            projectId: "0a2f8d6bfd8b3c602f8c5e7d48b9ae71", //replace with walletconnect projectId
            showQrModal: false,
          }),
        }}
        theme={"auto"}
        language={"en"} //optional：localize, default en
        walletSort={["Particle Auth", "Wallet"]} //optional：walelt order
        particleAuthSort={[
          //optional：display particle auth items and order
          "email",
          "phone",
          "google",
          "apple",
          "facebook",
        ]}
      >
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
    </ModalProvider>
  )
}

export default page