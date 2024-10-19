import { MouseEvent } from "react";
import classNames from "classnames";

interface PaginationProps {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showLimit?: number;
  loading?: boolean;
}

type PaginationItemProps = {
  label: string;
  disabled: boolean;
  active: boolean;
  onClick: () => void;
};

const PaginationLink = ({
  label,
  disabled,
  active,
  onClick,
}: PaginationItemProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (disabled || active) return;
    onClick();
  };
  const anchorClass = classNames(
    ["pagination-link", "p-2"]
      .concat(disabled ? ["disabled"] : [])
      .concat(active ? ["active"] : []),
  );

  return (
    <a className={anchorClass} href={"#"} onClick={handleClick}>
      {active ? <b>{label}</b> : <span>{label}</span>}
    </a>
  );
};

const PaginationItem = (props: PaginationItemProps) => {
  return (
    <li>
      <PaginationLink {...props} />
    </li>
  );
};

const Pagination = ({
  pages,
  currentPage,
  onPageChange,
  showLimit = 4,
  loading = false,
}: PaginationProps) => {
  const getPaginationButtons = () => {
    const buttons: (string | number)[] = [];

    if (pages <= showLimit) {
      for (let i = 1; i <= pages; i++) {
        buttons.push(i);
      }
    } else {
      const leftSide = Math.max(1, currentPage - Math.floor(showLimit / 2));
      const rightSide = Math.min(
        pages,
        currentPage + Math.floor(showLimit / 2),
      );

      if (leftSide > 1) {
        buttons.push(1);
        if (leftSide > 2) buttons.push("...");
      }

      for (let i = leftSide; i <= rightSide; i++) buttons.push(i);

      if (rightSide < pages) {
        if (rightSide < pages - 1) buttons.push("...");
        buttons.push(pages);
      }
    }

    return buttons;
  };

  const handleClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) onPageChange(page);
  };

  return (
    <ul className={"pagination p-2 layout-h g-1"}>
      <PaginationItem
        label={"First"}
        disabled={currentPage === 1 || loading}
        active={false}
        onClick={() => handleClick(1)}
      />
      <PaginationItem
        label={"Prev"}
        disabled={currentPage === 1 || loading}
        active={false}
        onClick={() => handleClick(currentPage - 1)}
      />

      {getPaginationButtons().map((page, i) => (
        <PaginationItem
          key={i}
          label={page as string}
          disabled={page === currentPage || page === "..." || loading}
          active={page === currentPage}
          onClick={() => handleClick(page)}
        />
      ))}

      <PaginationItem
        label={"Next"}
        disabled={currentPage === pages || loading}
        active={false}
        onClick={() => handleClick(currentPage + 1)}
      />
      <PaginationItem
        label={"Last"}
        disabled={currentPage === pages || loading}
        active={false}
        onClick={() => handleClick(pages)}
      />
    </ul>
  );
};

export default Pagination;
