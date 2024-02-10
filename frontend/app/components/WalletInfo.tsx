"use client"

import React from "react";

const WalletInfo = () =>{
    function shortString(str?: string):string {
        if(str) {
            if(str.length <= 10) {
                return str;
            }
            return `${str.slice(0,5)}...${str.slice(str.length - 5, str.length)}`;
        }
        return '';
    }

    function isHexString(value: string, length?: number): boolean {
if(typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) return false;

if(typeof length !== 'undefined' && length>0 && value.length !== 2+2*length) return false;

return true;
    }
    return (
        <div>
        <h1>Wallet Info User</h1>
        </div>
    )
}

export default WalletInfo;
