/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./TableCareer.css";

export default function TableCareer() {
  function buildTable() {
    const rows = [];
    for (const i of Array(15).keys()) {
      // console.log(i);
      rows.push(
        <tr
          className="tableCareer bg-gray-300 border border-grey-500 md:border-none block md:table-row"
          key={i}
        >
          <Link
            to="/detail"
            className="p-2 md:border md:border-grey-500 text-left block md:table-cell hover:text-red-600 hover:underline hover:underline-offset-2"
          >
            <span className="inline-block w-1/3 md:hidden font-bold">
              Open Positions
            </span>
            Jamal Rios
          </Link>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              An Office
            </span>
            jrios1
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              A Prouct Team
            </span>
            Senior
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              A Craft
            </span>
            582-3X2-6233
          </td>
        </tr>
      );
    }
    return rows;
  }
  return (
    <div className="container py-16 mx-auto">
      <div className="grid justify-items-stretch mb-8">
        <h1 className="text-8xl pr-6 pt-10 text-black font-sans font-extrabold">
          {" "}
          Work with us{" "}
        </h1>
      </div>

      <div className="flex justify-center mb-10">
        <div className="pt-5 min-w-full">
          <table className=" min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
              <th className="bg-gray-200 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                <div className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <p className="text-gray-300">
                    {" "}
                    Open Positions : <span className="text-black">573</span>
                  </p>
                </div>
              </th>

              <th className="bg-gray-200 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                <div className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="bg-gray-200 rounded-xl flex justify-between px-3"
                    style={{ width: "200px" }}
                  >
                    {" "}
                    Select an Office
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </th>

              <th className="bg-gray-200 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="bg-gray-200 rounded-xl flex justify-between px-3"
                    style={{ width: "200px" }}
                  >
                    {" "}
                    Select a Prouct Team
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </th>

              <th className="bg-gray-200 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="bg-gray-200 rounded-xl flex justify-between px-3"
                    style={{ width: "180px" }}
                  >
                    {" "}
                    Select a Craft
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mt-1 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </th>

              {/* <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  User Name
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Email Address
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Mobile
                </th>
                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Actions
                </th> */}
            </thead>

            <tbody className="block md:table-row-group">{buildTable()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
