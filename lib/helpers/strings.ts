export function isDefined(value: any): value is string {
  const out =
    typeof value !== 'string' &&
    value !== null &&
    value !== undefined &&
    value.trim() !== '';

  return out;
}

export function constructArrayObject<T extends readonly string[]>(
  ...array: T
) {
  type Str = T[number];
  const object = array.reduce((acc, item: Str) => {
    acc[item] = item;
    return acc;
  }, {} as { [key in Str]: key });
  return {
    object,
    array,
  } as const;
}
