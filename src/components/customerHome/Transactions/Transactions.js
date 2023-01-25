import React from "react";
import "./Transactions.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiFilter } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Transactions() {
  return (
    <div className="tranTable">
      <h2>Transaction</h2>
      <div className="earchBar">
        <span>
          <BiFilter className="TransactionFilterIcon" />
        </span>
        <div className="earchInput">
          <HiMagnifyingGlass className="earchIcon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table>
        <tr>
          <th className="TranCheckBox">
            <input type="checkbox" />
          </th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>RATE</th>
          <th>BALANCE</th>
          <th>DEPOSIT</th>
          <th>STATUS</th>
          <th>
            <FaEllipsisH className="ellipsis" />
          </th>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
        <tr>
          <td className="TranCheckBox">
            <input type="checkbox" />
          </td>
          <td>Kadin Herwitz</td>
          <td>Lorem Ipsumdolor sit</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>70.00 INR</td>
          <td>1/0</td>
          <div className="TransactionCrud">
            <span>
              <MdModeEdit />
            </span>
            <span>
              <RiDeleteBin5Fill />
            </span>
            <span>
              <FaEllipsisH />
            </span>
          </div>
        </tr>
      </table>
      <div className="Transaction-pagination">
        <div className="T-h4">
          <h4 className>ACTIVE CUSTOMERS: 479/708 </h4>
        </div>
        <div className="page-count">
          <div className="T-dd">
            <label for="Transaction-dd">
              <b>Rows per page</b>
            </label>
            <select id="Transaction-dd" name="number">
              <option value="null"> </option>
              <option value="five">5</option>
              <option value="ten">10</option>
              <option value="twenty">20</option>
            </select>
          </div>
          <div className="T-h4-2">
            <span>
              <h4>1-10 of 708</h4>
            </span>
            <div>
              <span className="AngledArrow">
                <FaAngleLeft />
              </span>
              <span className="AngledArrow">
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
