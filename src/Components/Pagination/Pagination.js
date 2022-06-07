import "bulma/css/bulma.min.css";
export default function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <>
      <div>
        {pages.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </div>
    </>
  );
}
