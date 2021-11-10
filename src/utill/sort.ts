const onSwap = (array: number[], x: number, y: number):number[] => {
  const swap = array[x];
  array[x] = array[y];
  array[y] = swap;
  return array;
};

const onQuickSwap = (array: number[], x: number, y: number, v: number):number[] => {
  array[y] = array[x];
  array[x] = v;
  return array
}

const onMergeSwap = (sorted: number[], buffer: number[]) => {
  let temp = sorted;
  sorted = buffer;
  buffer = temp;
  return [temp, sorted, buffer];
}

export function* selectionSort(array: number[], setCurosor: (cursor: number) => void) {
  let minIndex = 0;

  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    setCurosor(array[i]);
    yield onSwap(array, minIndex, i);
  }
}

export function* bubbleSort(array: number[], setCurosor: (cursor: number) => void) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        setCurosor(array[j]);
        yield onSwap(array, j, j + 1);
      }
    }
  }
}

export function* insertionSort(array: number[], setCurosor: (cursor: number) => void) {
  let length = array.length;

  for (let i = 1; i < length; i++) {
    let index = i;

    while (array[index] !== undefined && array[index - 1] > array[index]) {
      setCurosor(array[index]);
      yield onSwap(array, index, index - 1);
      index--;
    }
  }
}

// non recursive
export function* quickSort(a: number[], setCurosor: (cursor: number) => void, l?: number, r?: number) {
  l = l || 0;
  r = r || a.length - 1;

  let i = 2;
  let s = [l, r];
  let [x, y, p, v] = [0, 0, 0, 0];

  while (i > 0) {
    r = s[--i];
    l = s[--i];

    if (l < r) {
      x = l;
      y = r - 1;

      p = l;
      v = a[p];
      a[p] = a[r];

      while (true) {
        while (x <= y && a[x] !== undefined && a[x] < v) x++;
        while (x <= y && a[y] !== undefined && a[y] >= v) y--;
        if (x > y) break;

        setCurosor(a[x]);
        yield onSwap(a, x, y);
      }

      setCurosor(a[x]);
      yield onQuickSwap(a, x, r, v);

      s[i++] = l;
      s[i++] = x - 1;
      s[i++] = x + 1;
      s[i++] = r;
    }
  }
}

//non recursive
export function* mergeSort(array: number[]) {
  const length: number = array.length;
  let sorted:number[] = [...array];
  let buffer: number[] = new Array(length);
  let temp:number[] = [];

  for (let size = 1; size < length; size *= 2) {
    for (let leftStart = 0; leftStart < length; leftStart += 2 * size) {
      let left: number = leftStart;
      let right: number = Math.min(left + size, length);
      let i: number = left;

      const leftLimit: number = right;
      const rightLimit: number = Math.min(right + size, length);

      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
    }

    [temp, sorted, buffer] = onMergeSwap(sorted, buffer);

    yield sorted;
  }
}
