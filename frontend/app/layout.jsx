"use client";
import { useMemo } from "react";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";
import "./globals.css";
import Navbar from "./components/Navbar";
import {AuthCoreContextProvider} from '@particle-network/auth-core-modal';
import { merge } from "lodash";
import {Provider} from 'react-redux';
import store from './store/store';

export const isServer = () => typeof window === 'undefined';


export default function RootLayout({ children }) {


  const authCoreOptions = useMemo(() => {
    const cacheOption = isServer() ? {} : JSON.parse(localStorage.getItem('customModalOptions') || '{}');
    return merge(
        {
            projectId: '475c5396-812f-4e77-91db-55ff668bdabe',
            clientKey: 'capkMAUCfx3KFqwOhcoASzrOEOwVv6QYl6vNh6Di',
            appId: 'f70669fd-580f-4bf3-be15-da018fff4a90',
            themeType: 'light',
            language: 'en',
            promptSettingConfig: {
                promptPaymentPasswordSettingWhenSign: 2,
                promptMasterPasswordSettingWhenLogin: 2,
            },
            customStyle: {
                fontFamily: '"SF-Pro", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
            },
            wallet: {
                visible: true,
                preload: true,
            },
        },
        cacheOption
    );
}, []);

  <script
                    id="onpageshow"
                    data-cfasync="false"
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (sessionStorage.getItem('auth-core-oauth-start') === 'true') {
                                if(!location.search.includes('particleThirdpartyParams')){
                                    window.location.reload(true)
                                }
                                sessionStorage.removeItem('auth-core-oauth-start');
                            }
                            window.onpageshow = function (e) {
                                if (e.persisted) {
                                    sessionStorage.removeItem('auth-core-oauth-start');
                                    window.location.reload(true)
                                }
                            };
      `,
                    }}
                />
  return (
    <html>

      <AuthCoreContextProvider options={authCoreOptions}>
        <Provider store={store}>

      
        <body className="bg-white">{children}
        <Navbar />
        </body>
        </Provider>
        </AuthCoreContextProvider>
    </html>
      
  );
}
