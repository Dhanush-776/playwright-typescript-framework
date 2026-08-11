export interface LoginData {
    username: string;
    password: string;
    shouldLogin: boolean;
    expectedError?: string;
}

export const loginData: LoginData[] = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        shouldLogin: true
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        shouldLogin: false,
        expectedError: 'Epic sadface: Sorry, this user has been locked out.'
    },
    {
        username: 'standard_user1',
        password: 'wrong_password',
        shouldLogin: false,
        expectedError: 'Epic sadface: Username and password do not match any user in this service'
    }
];