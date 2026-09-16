export interface CheckOutData{
    firstName: string;
    lastName: string;
    postalCode: string;
}

export function createCheckoutData(
    overrides: Partial<CheckOutData> = {}
): CheckOutData{
    return {
        firstName: 'Dhanush',
        lastName: 'Kumar',
        postalCode: '560045',
        ...overrides 
    }
}