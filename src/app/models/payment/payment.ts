export interface Payment {
    account: string;
    amount: number;
    description: string;
    paymentDate: Date;
    recurringYN: boolean;
    recurringFrequency: string;
    occurrences: number;
}
