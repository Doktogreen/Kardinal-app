import React, { useState, useMemo } from 'react';
import Pagination from '../pagination';
import data from '../pagination/mock-data.json';
import './style.scss';

let PageSize = 10;

export default function Table() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            let code_fn = item.first_name.toLowerCase();
            let code_ln = item.last_name.toLowerCase();
            let code_email = item.email.toLowerCase();
            return (
              <tr>
                <td>{item.id}</td>
                <td className={`${code_fn}`}>{item.first_name}</td>
                <td className={`${code_ln}`}>{item.last_name}</td>
                <td className={`${code_email}`}>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
