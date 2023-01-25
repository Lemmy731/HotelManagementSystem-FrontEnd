

import "./UserTransaction.css";
import Active from '../../../assets/Active.svg'
import Inactive from '../../../assets/Inactive.svg';
import Edit from '../../../assets/Edit.svg';
import Delete from '../../../assets/Delete.svg';
import Filter from '../../../assets/Filter.svg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import React, { useState } from "react";
import { FaEllipsisH, FaAngleLeft, FaAngleRight } from "react-icons/fa";


function UserTransactions() {
    const [transactions, setTransactions] = useState([ ]);
    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
    };
    const [currentPage, setCurrentPage] = useState(1);
    let [transactionsPerPage,setTransactionPerPage] = useState(0);
    const page = (transactionsPerPage) => {
        if (transactions.length < 10) {
            return transactionsPerPage = transactions.length;
        }
        else {
            return transactionsPerPage = 10;
        }

    }


    // Get current transactions
    const indexOfLastTransaction = currentPage * page(transactionsPerPage);
    const indexOfFirstTransaction = indexOfLastTransaction - page(transactionsPerPage);
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    // Change page
    //const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleEdit = (editedTransaction) => {
        const updatedTransactions = transactions.map(transaction => {
            if (transaction.id === editedTransaction) {
                return editedTransaction;
            }
            return transaction;
        });
        setTransactions(updatedTransactions);
    }
    function handleDelete(transactionid) {
        setTransactions(transactions.filter(transaction => transaction.id !== transactionid));
    }
    const activeUsers = transactions.filter(x=> x.status ===true).length;

    return (

        <div className="UsertranTable">
            <h2>Transactions</h2>
            <div className="UserTransactionSearchBar">
                <img src={Filter} alt='Your SVG'/>
                <div className="UserTransactionsearchInput">
                    <HiMagnifyingGlass className="UserTransactionSearchIcon" />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <table>
                <tr>
                    <th className="UserTranCheckBox">
                        <input type="checkbox" />
                    </th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>RATE</th>
                    <th>BALANCE</th>
                    <th>DEPOSIT</th>
                    <th>STATUS</th>
                    <th>
                        <FaEllipsisH />
                    </th>
                </tr>
                {currentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <th className="UserTranCheckBox">
                            <input type="checkbox" />
                        </th>
                        <th>{transaction.name}</th>
                        <th>{transaction.description}</th>
                        <th>{transaction.rate}</th>
                        <th>{transaction.balance}</th>
                        <th>{transaction.deposit}</th>
                        <th>{transaction.status ? <img alt="Your SVG" src={Active} /> : <img alt="Your SVG" src={Inactive} />}</th>
                        <th className="Action">
                            <img alt="Your SVG" src={Edit} onClick={() => handleEdit(transaction.id)} />
                            <img alt="Your SVG" src={Delete} onClick={() => handleDelete(transaction.id)} />...
                        </th>
                    </tr>
                ))}
            </table>
            <div className="Transaction-pagination">
                <div>
                    <h4>ACTIVE CUSTOMERS {activeUsers}/ {transactions.length} </h4>
                    
                </div>
                <div className="Footer">
                    <label htmlFor="Transaction-dd">
                        <b>Rows per page </b>
                    </label>
                    {/* <select id="Transaction-dd" name="number">
                        <option value="null"> </option>
                        <option value="five">5</option>
                        <option value="ten">10</option>
                        <option value="twenty">20</option>
                    </select> */}
                    <input
                        type="number"
                        id="Transaction-dd"
                        name="number"
                        value={transactionsPerPage}
                        onChange={event => setTransactionPerPage(event.target.value)}
                    />
                    <div>
                        <h4>
                            {indexOfFirstTransaction + 1}-{indexOfLastTransaction} of {transactions.length}
                        </h4>
                        <div>        {currentPage !== 1 && (
                            <FaAngleLeft onClick={() => handlePageChange(currentPage - 1)} />)}
                            {currentPage !== totalPages && (
                                <FaAngleRight onClick={() => handlePageChange(currentPage + 1)} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserTransactions;

