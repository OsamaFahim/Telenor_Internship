//Importing all the contents of InternTaskResponse.json file
import jsonData from '../../InternTaskResponse.json';  //an array of objects, each represent entry
import type { FormData } from './types'; //custom data type in utility which is representing the data

export const ImportDataFromJson = (): FormData[] => {
    //this is an array of objects of any shape, this allows us to use 
    return (jsonData as any[]).map((entry) => {  
        //Retriving data according to the schema
        const firstAddress = entry.addresses?.[0];  //only one address is provided for the json file

        const formData: FormData = {
            firstName: firstAddress?.firstName || '',
            Surname: firstAddress?.surname || '',
            emailAddress: entry.emailAddress || '',
            mobileNumber: entry.mobileNumber || '',
            distributor: entry.distributor ||  false,
            product_provider: entry.productProvider || false,
        };
        
        return formData;
    });
};