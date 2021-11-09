const onSwap = (arr, x, y) => {
  const swap = arr[x];
  arr[x] = arr[y];
  arr[y] = swap;
  return arr;
};

export function* selectionSort(array, setCurosor) {
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

export function* bubbleSort(array, setCurosor) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        setCurosor(array[j]);
        yield onSwap(array, j, j + 1);
      }
    }
  }
  return array;
}

export function* insertionSort(arr, setCurosor) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let index = i;

    while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
      yield onSwap(arr, index, index - 1);
      index--;
    }
  }
}

export function* quickSort(a, setCurosor, l, r) {
  var i, s, p, v, x, y;

  l = l || 0;
  r = r || a.length - 1;

  i = 2;
  s = [l, r];

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

      a[r] = a[x];
      a[x] = v;

      yield a;

      s[i++] = l;
      s[i++] = x - 1;
      s[i++] = x + 1;
      s[i++] = r;
    }
  }
}
