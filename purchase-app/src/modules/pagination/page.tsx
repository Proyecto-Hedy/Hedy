import React from "react";
import styles from "./pagination.module.css";

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
  const canGoPrevious = skip > 0;
  const canGoNext = skip + limit < total;

  return (
    <div className={styles.pagination}>
      {canGoPrevious && (
        <button
          className={`${styles.button} ${styles.previous}`}
          onClick={onPreviousClick}
        >
          Previous
        </button>
      )}
      {canGoNext && (
        <button
          className={`${styles.button} ${styles.next}`}
          onClick={onNextClick}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
