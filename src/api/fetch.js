import authAxios from "./request"

export const getData = async () => {
  const response = await authAxios().get('read.php')
    .then((response) => response.data).catch((error) => error);
  return response; 
}

export const insertData = async (SKU, Name, Price, Measure) => {
  const response = await authAxios().post('create.php', {
      SKU, 
      Name,
      Price,
      Measure
  })
    .then((res) => res.data).catch((error) => error);
  return response;
}

export const deleteData = async (ids) => {
  const response = await authAxios().post('delete.php',
    ids
  ).then((res) => res).catch((error) => error);

  return response;
}