import React, { useState } from "react";
import "./PaginationComponent.css";

export const PaginationComponent = () => {
  const data = [
    [
      {
        id: "01",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      { id: "02", text: "Faucibus pulvinar elementum integer enim" },
      { id: "03", text: "Faucibus pulvinar elementum integer enim" },
    ],
    [
      { id: "04", text: "Sed do eiusmod tempor incididunt ut labore" },
      { id: "05", text: "Ut enim ad minim veniam, quis nostrud exercitation" },
      { id: "06", text: "Duis aute irure dolor in reprehenderit in voluptate" },
    ],
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < data.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2 className="title">Преимущества</h2>
        <h1 className="brand-title">
          BRAND<strong>XY</strong>
        </h1>
        <ul className="list">
          {data[currentPage].map((item) => (
            <li key={item.id}>
              <div className="item">
                <div className="item-id">{item.id}</div>
                <div className="item-text">{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
        <div className="pagination-controls">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            &lt;
          </button>
          <span className="pagination-indicator">
            {currentPage + 1} / {data.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === data.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
