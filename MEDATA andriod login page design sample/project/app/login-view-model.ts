import { Observable } from '@nativescript/core';
import { signInWithGoogle, connectWallet } from './services/auth.service';

export class LoginViewModel extends Observable {
    constructor() {
        super();
    }

    async onSignIn() {
        try {
            // Implement regular sign in logic
            console.log('Regular sign in');
        } catch (error) {
            console.error('Sign in error:', error);
        }
    }

    async onGoogleSignIn() {
        try {
            const user = await signInWithGoogle();
            console.log('Google sign in successful:', user);
        } catch (error) {
            console.error('Google sign in error:', error);
        }
    }

    async onWalletConnect() {
        try {
            const connector = await connectWallet();
            console.log('Wallet connected:', connector);
        } catch (error) {
            console.error('Wallet connection error:', error);
        }
    }

    onSignUp() {
        // Implement navigation to sign up page
        console.log('Navigate to sign up');
    }
}