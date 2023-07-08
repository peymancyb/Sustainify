import React from 'react'
import { View } from 'react-native'
import { WalletConnect, QRCodeModal, SessionProvider } from '@walletconnect/react-native'

const WalletConnectScreen = () => {
  const walletConnector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    dappName: 'My React Native App'
  })

  walletConnector.createSession()

  walletConnector.on('session', (error, payload) => {
    if (error) {
      // handle error
    } else {
      // use the payload data to update your app's state
    }
  })

  return (
    <SessionProvider>
      <WalletConnect />
      <QRCodeModal />
      <View>
        {/* Your app's components go here */}
      </View>
    </SessionProvider>
  )
}

export default WalletConnectScreen