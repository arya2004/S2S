"use client";
import { ModalProvider } from "@particle-network/connect-react-ui";
import { WalletEntryPosition } from "@particle-network/auth";
import { Ethereum, EthereumGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
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
        <body>{children}
        <Navbar />
        </body>
      </ModalProvider>
    </html>
  );
}
