// Complete a function `reorderElement` that accepts an input array, an index, and a reordering operation,
// and returns a reordered array.
//
// The following reordering operations should be supported:
//
// moveToStart:        move the element at `index` to the start of the array
// moveOneTowardStart: move the element at `index` one position closer to the start of the array
// moveOneTowardEnd:   move the element at `index` one position closer to the end of the array
// moveToEnd:          move the element at `index` to the end of the array
//
// The function should return an unmodified array when given an invalid index.
const arrayMove = (arr, fromIndex, toIndex) => {
  let element = arr[fromIndex]
  if (toIndex >= 0 && element !== undefined) {
    arr.splice(fromIndex, 1)
    arr.splice(toIndex, 0, element)
  }
}

const reorderElement = <T>(
    input: Readonly<T[]>,
    index: number,
    operation:
        | "moveToStart"
        | "moveOneTowardStart"
        | "moveOneTowardEnd"
        | "moveToEnd"
): T[] => {
  let buffer = [...input];
  switch(operation) {
    case 'moveToStart':
      arrayMove(buffer, index, 0)
      break
    case 'moveOneTowardStart':
      arrayMove(buffer, index, index - 1)
      break
    case 'moveOneTowardEnd':
      arrayMove(buffer, index, index + 1)
      break
    case 'moveToEnd':
      arrayMove(buffer, index, input.length)
      break
  }

  return buffer;
};

export default reorderElement;
