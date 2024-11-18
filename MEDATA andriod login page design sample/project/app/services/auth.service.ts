import { GoogleSignIn } from '@nativescript/google-signin';
import { WalletConnect } from '@walletconnect/client';

export function initGoogleSignIn() {
    GoogleSignIn.init({
        clientId: 'YOUR_GOOGLE_CLIENT_ID'
    });
}

export async function signInWithGoogle() {
    try {
        const user = await GoogleSignIn.signIn();
        return user;
    } catch (error) {
        console.error('Google Sign-In Error:', error);
        throw error;
    }
}

export async function connectWallet() {
    const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org'
    });

    if (!connector.connected) {
        await connector.createSession();
    }

    return connector;
}