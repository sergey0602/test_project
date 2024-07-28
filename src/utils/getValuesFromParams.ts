export const getValuesFromParams = (params: URLSearchParams, fields: string[]) => {
  const values: { field: string; value: string; }[] = [];

  fields.forEach((field: string) => {
    values.push({ field, value: params.get(field) as string})
  });

  return values;
}
