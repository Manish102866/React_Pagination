import React, { useState, useMemo } from 'react';
import Pagination from '../pagination';
import data from './db/media-db.json';
import './app.scss';

let PageSize = 20;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

    const currentMediaData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
    <div className='container'>
    <header>React Pagination Demo</header>
        {currentMediaData.map(item => {
            return (
                <ul>
                    <li><img src={ item.img_path } alt=""></img></li>
                    <li><span>Image Name:</span> <label>{item.img_name}</label></li>
                    <li><span>Description:</span> <label className='des' >{item.description}</label></li>
                    <li><span>Date:</span> <label>{item.date}</label></li>
                </ul>
            );
          })}
    </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <footer>Design & Developed By Manish Joshi</footer>
    </>
  );
}