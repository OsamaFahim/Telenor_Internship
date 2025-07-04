import React, { useState } from 'react';
import type { FormData } from '../utility/types';

//Creating a prop interface, to pass the formdata to the parent component
interface Props {
    onAdd: (data: FormData) => void;
}

//Helper function to reset the values
const ResetForm = (): FormData => ({
    firstName: '', Surname: '', emailAddress: '', mobileNumber: '',
    distributor: false, product_provider: false
});

//An InputForm component that will handle the data input usng state management (useState hook)
//Also changing the function signature so that, the component can receive the props from the parent componenet
const InputForm: React.FC<Props> = ({ onAdd }) => {
    //State management using useState hook which initially all the string values to empty strings and all the false values
    //to false
    const [formData, setFormData] = useState<FormData>(ResetForm())

    //Now i will create a function to handle the submit button click
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //console.log('Form submitted:', formData);
        onAdd(formData);
        setFormData(ResetForm())
    }

    //e contains the value of the input element that has been changed
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;
        // [] in [name] allows us to use the value of the variable as the key (property name in object)
        setFormData(prev => ({
            ...prev, [name]: type === "checkbox" ? checked : value //checked is a boolean 
        }));
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                name = "firstName"
                type = "text"
                placeholder = "First Name"
                value = {formData.firstName}
                onChange={handleChange}
                required   
            />
            <br/>
            <input
                name = "Surname"
                type = "input"
                placeholder = "Last Name"
                value = {formData.Surname}
                onChange={handleChange}
                required
            />
            <br/>
            <input
                name = "emailAddress"
                type = "text"
                value = {formData.emailAddress}
                placeholder = "Email Address"
                onChange={handleChange}
                required
            />
            <br/>
            <input
                name = "mobileNumber"
                type = "tel" //shows a numeric keypad in mobile devices, 
                            // and allows users to enter phone number, including spaces and +,- etc
                placeholder = "Phone Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
            />
            <br/>

            {/*using label to show the text next to the checkbox*/}
            <label>
                Distributor
                <input
                    name = "distributor"
                    type = "checkbox"
                    checked = {formData.distributor}
                    onChange={handleChange}
                />
            </label>
            <br/>
             <label>
                product_provider
                <input
                    name = "product_provider"
                    type = "checkbox"
                    checked = {formData.product_provider}
                    onChange={handleChange}
                />
            </label>
            <br/> <br/>
            <button type = "submit"> Add </button>  
        </form>
    );
}

export default InputForm