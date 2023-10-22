import React from "react";

function useSizes(initialState: number[]) {
  const [sizes, setSizes] = React.useState(initialState);

  function generateSizes(event: any) {
    const { value } = event.target;
    const listNumbers = value.split(",");

    let numbers = listNumbers.map((n: string) => parseInt(n, 10));
    numbers = numbers.filter((n: number) => !isNaN(n));

    setSizes(numbers);

    if (numbers.length === 0) {
      setSizes(initialState);
    }
  }

  const sizesOrderedAsc = [...sizes].sort((a, b) => b - a);

  const sizesOrdered = [...new Set(sizesOrderedAsc)];

  return {
    generateSizes,
    sizesOrdered,
  };
}

export default useSizes;
