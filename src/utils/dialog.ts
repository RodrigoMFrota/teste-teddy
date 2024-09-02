export const openDialogById = (id: string) => {
  return (document.getElementById(id) as HTMLFormElement).showModal();
};

export const closeDialogById = (id: string) => {
  return (document.getElementById(id) as HTMLFormElement).close();
};
