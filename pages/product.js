import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Products() {
  const { query, push } = useRouter();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (query.page !== page) {
      setPage(query.page ? Number(query.page) : 0);
    }
  }, [query, page]);

  const handlePushState = (page) => {
    // [BUG]
    window.history.pushState(null, "", `/product?page=${page}`);

    // NOT BUG
    // push({
    //   query: {
    //     page,
    //   },
    // });
  };

  console.log("render Product page", page);

  return (
    <div>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div
            className="d-flex"
            key={index}
            onClick={() => handlePushState(index)}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              border: "1px solid #111",
              cursor: "pointer",
              backgroundColor: index === page ? "black" : "white",
              color: index === page ? "white" : "black",
            }}
          >
            {index}
          </div>
        );
      })}
    </div>
  );
}
