import React from "react";

interface PaginationProps {
  limit: number;
  skip: number;
  total: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  limit,
  skip,
  total,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        className="btn btn-primary"
        onClick={onPreviousClick}
        disabled={skip === 0}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={onNextClick}
        disabled={skip + limit >= total}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
