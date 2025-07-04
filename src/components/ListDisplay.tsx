import type { FormData } from "../utility/types"

interface Props {
    formList: FormData[]; 
    onDelete: (index: number) => void;
    onUpdate: (index: number) => void;
    onArchive: (index: number) => void;
}

const ListDisplay: React.FC<Props> = ({formList, onUpdate, onDelete, onArchive}) => {
    return (
        <div style = {{marginTop: 0}}>
            <h1 style = {{marginTop: 0}}> All Enteries: </h1>
            {formList.length === 0 ?  (
              <p> No entries now </p> ) :
              (
                <ul>
                    {formList.map((item, index) => (
                        /*key helps react identify the list item effectively, it knows that the element at key=3 is the same (in the original DOM),
                        so it doesnot rerender it*/
                        <li key = {index}>
                            {item.firstName} - {item.Surname} - {item.emailAddress} - {item.mobileNumber}
                            <ul>
                                {/*Conditional rendering trick in react*/}
                                {item.distributor && <li>Distributor</li>}
                                {item.product_provider && <li>Product Provider</li>}
                            </ul>
                            {/*Action Buttons*/}
                            <button type = "button" onClick={() => onUpdate(index)}>Update</button>
                            <button type = "button" onClick={() => onDelete(index)}>Delete</button>
                            <button type = "button" onClick={() => onArchive(index)}>Archive</button>
                        </li>
                    ))}
                </ul>
              )
            }
        </div>
    )
}

export default ListDisplay