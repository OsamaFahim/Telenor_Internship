//Creating an interface to map the input form data, have chosen 6 fields, 
// First name, surname, email address, mobile number, distributor, product provider After creating the interface, I will 
// be uiing it in my state to manage the form Data so that i dont have to use multiple states
//for all the fields
export interface FormData {
    firstName: string;
    Surname: string;
    emailAddress: string;
    mobileNumber: string;
    distributor: boolean;
    product_provider: boolean;
}