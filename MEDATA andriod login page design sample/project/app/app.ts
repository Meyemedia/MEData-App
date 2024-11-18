import { Application } from '@nativescript/core';
import { initGoogleSignIn } from './services/auth.service';

// Initialize Google Sign-In
initGoogleSignIn();

Application.run({ moduleName: 'app-root' });