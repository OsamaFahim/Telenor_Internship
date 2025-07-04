import {useState} from 'react';
import InputForm from './Input_Form';
import ListDisplay from './ListDisplay';
import type { FormData } from '../utility/types';
import {ImportDataFromJson} from '../utility/LoadDataFromJson';

const Root: React.FC = () => {
    const [FormList, SetFormList] = useState<FormData[]>([]);
    const [archiveList, setarchiveList] = useState<FormData[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    //We can edit the same form for editing the data
    const handleAddForm = (newForm: FormData) => {
        if (editIndex === null) {
            SetFormList(prev => [...prev, newForm]);
        } else {
            setEditIndex(null);
            //goes through every item in the array, and if index mathces it updates it with the newForm else it returns the same item
            SetFormList(prev => prev.map((item, index) => index === editIndex ? newForm : item))
        }
    }

    const handleUpdate = (index: number) => {
        setEditIndex(index);
    }

    const handleDelete = (index: number) => {
        //.filter is used for removing elements
        SetFormList(prev => prev.filter((_, i) => i!== index));
    }

    const handleArchive = (index: number) => {
        SetFormList(prev => prev.filter((_, i) => i!== index));
        setarchiveList(prev => [...prev, FormList[index]]);
    }

    const handleLoadDataFromJSON = () => {
        const datafromJSON = ImportDataFromJson();
        SetFormList(prev => [...prev, ...datafromJSON]);
    }

     //As returning multiple TSX elements, so it must be wrapped either in a div or a Fragment<>
    return (
        <div>
            {/*Wrap heading and flex in a single flex container for top alignment*/}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '450px' }}>
                <div>
                    <h1>Form Submission</h1>
                    {<button onClick={handleLoadDataFromJSON}>Load JSON</button>}
                    <br/><br/>
                    <InputForm onAdd={handleAddForm}/>
                    <h2>Below are the archived elements</h2>
                    {archiveList.length === 0 ? (
                        <p>No elements archived right now</p> 
                    ) : (
                        <ul>
                            {archiveList.map((item, index) => (
                                <li key={index}>
                                    {item.firstName} - {item.Surname} - {item.emailAddress} - {item.mobileNumber}
                                    <ul>
                                        {item.distributor && <li>Distributor</li>}
                                        {item.product_provider && <li>Product Provider</li>}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div style={{marginTop: '40px'}}>
                    <ListDisplay
                        formList={FormList} 
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        onArchive={handleArchive}
                    />
                </div>
            </div>
        </div>
    )
}

export default Root;