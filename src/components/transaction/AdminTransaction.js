import "./AdminTransactions.css";
import React from "react";
import { BiFilter } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdMoreHoriz, MdOutlineModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
export default function () {
    return (
        <div className="container">
            <h1 className="amenities-h1">Transactions</h1>
            <div className="table-header">
                <div className="amenity-filter-search">
                    <BiFilter className="filter-icon table-icons-hover" />
                    <div className="amenities-search-container">
                        <FaSearch className="search-icon table-icons-hover" />
                        <input className="amenities-search-input"
                            type="text"
                            placeholder="Search" />
                    </div>
                </div>
            </div>
            <table className="amenities-table">
                <tr>
                    <th className="first-column">
                        <input className="table-checkbox" type="checkbox" />
                    </th>
                    <th>Booking Id</th>
                    <th>Reference</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Payment Method</th>
                    <th>Transaction Date</th>
                    <th>            <MdMoreHoriz className="table-icons table-icons-hover" />          </th>
                </tr>
                <tr>
                    <td className="first-column">
                        <input type="checkbox" />
                    </td>
                    <td>1001</td>
                    <td>BKB1200</td>
                    <td>{17000}</td>
                    <td>Active</td>
                    <td>Bank Transfer</td>
                    <td>23-01-2023</td>
                    {/* <td className="table-icons">
                        <MdOutlineModeEditOutline className="table-icons-hover" />
                        <MdOutlineDeleteForever className="table-icons-hover" />
                        <MdMoreHoriz className="table-icons-hover" />
                    </td> */}
                </tr>
                <tr>
                    <td className="first-column">
                        <input type="checkbox" />
                    </td>
                    <td>1002</td>
                    <td>BLL3200</td>
                    <td>{4000}</td>
                    <td>Inactive</td>
                    <td>Cash</td>
                    <td>07-01-2023</td>

                </tr>
                <tr>
                    <td className="first-column">
                        <input type="checkbox" />
                    </td>
                    <td>1003</td>
                    <td>BJV6600</td>
                    <td>{34500}</td>
                    <td>Active</td>
                    <td>Bank Transfer</td>
                    <td>19-02-2023</td>

                </tr>
            </table>
        </div>);
}