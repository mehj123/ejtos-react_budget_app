import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.cost}
        <select style={{ background: 'green' }} className="custom-select alert-success" id="inputGroupSelect01" >
                        <option style={{ background: 'green' }}  defaultValue>Currency(£ Pound)</option>
                        <option  style={{ background: 'green' }} value="Marketing" name="marketing"> $ Dollar</option>
                <option value="Sales" name="sales">£ Pound</option>
                <option style={{ background: 'green' }} value="Finance" name="finance">€ Euro</option>
                <option style={{ background: 'green' }} value="HR" name="hr">₹ Ruppee</option>
                  </select> 
        
        </td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
