'use server';

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    // Code to create a user will go here
  } catch (e: any) {
    console.error('Error creating a user:', e);

    if (e.code === 'auth/email-already-exists') {
      return {
        success: false,
        message: 'This email is already in use',
      };
    }
  }
}
