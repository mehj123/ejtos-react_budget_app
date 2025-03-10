import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                     {
                                // Budget component
                                <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                       {
                        //Remaining component
                            <div className='col-sm'>
                            <Remaining />
                </div>
                        }        

                        {
                           //ExpenseTotal component
                            <div className='col-sm'>
                            <ExpenseTotal /><br/>
                            </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                             //ExpenseList component
                             <div className='col-sm'>
                                <h2>Allocation</h2>
                             <ExpenseList />
                             </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                            //ExpenseItem component
                            <div className='col-sm'>
                            <ExpenseItem />
                            </div>
                        }        

                        {
                            /* Add AllocationForm component here under */
                            //AllocationForm component
                            <div className='col-sm'>
                                 <h2>Change Allocation</h2>
                            <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
