const dateFormatted = (isoDate) => {
  const date = new Date(isoDate);
  // Extraer el año, mes y día
  const year = date.getFullYear();
  // Los meses son 0-indexados, por lo que sumamos 1
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  // Formatear en el formato YYYY-MM-DD
  return `${year}-${month}-${day}`;
};
export default dateFormatted;
