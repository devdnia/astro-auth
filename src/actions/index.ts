import { loginUser, loginWithGoogle, logout, registerUser } from './auth';

export const server = {
    // actions

    // auth
    registerUser,
    logout,
    loginUser,
    loginWithGoogle,

}