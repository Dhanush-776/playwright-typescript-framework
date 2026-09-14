export type LoginOutcome = 'success' | 'locked_out' | 'invalid-credentials';

export interface LoginData {
    username: string;
    password: string;
    expectedOutcome: LoginOutcome;
    expectedError?: string;
}

export const loginData: LoginData[] = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        expectedOutcome: 'success',
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedOutcome: 'locked_out',
        expectedError: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        username: 'standard_user1',
        password: 'wrong_password',
        expectedOutcome: 'invalid-credentials',
        expectedError: 'Epic sadface: Username and password do not match any user in this service'
    }
];