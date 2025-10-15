'use server';

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7; // seconds in one week

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection('users').doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: 'User already exists. Please sign in.',
      };
    }

    await db.collection('users').doc(uid).set({
      name,
      email,
      uid,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: 'Account created successfully!',
    };

  } catch (e: any) {
    console.error('Error creating a user:', e);

    if (e.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'This email is already in use',
      };
    }

    return {
      success: false,
      message: 'Failed to create an account',
    };
  }
}
export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
   const userRecord= await auth.getUserByEmail('email')
   if (!userRecord){
    return{
        sucess:false,
        message:'user does not exist. Create an account instead'

    }
   }
   await setSessionCookie(idToken);
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: 'Failed to login to the account',
    };
  }
}

export async function setSessionCookie(idToken: string) {
  const expiresIn = ONE_WEEK * 1000;

  try {
    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
    const cookieStore = await cookies();

    cookieStore.set({
      name: 'session',
      value: sessionCookie,
      maxAge: ONE_WEEK,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
    });

    return { success: true, message: 'Session cookie set successfully' };
  } catch (error) {
    console.error('Error setting session cookie:', error);
    return { success: false, message: 'Failed to set session cookie' };
  }
}