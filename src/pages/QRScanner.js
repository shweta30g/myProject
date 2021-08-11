import React from 'react'
import QRCode from 'react-qr-code'

export default function QRScanner() {
    return (
        <div>
            <QRCode
                value= "https://www.instagram.com/"
                size= {290}
                level= {"H"}
                includeMargin={true}
                />
        </div>
    )
}

