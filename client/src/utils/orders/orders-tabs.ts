export const checkIfDefualtValueIsEmpty = (obj: Record<string, any>) => {
  const newdefaultOrders: Record<string, any> = { ...obj };
  for (const key of Object.keys(newdefaultOrders)) {
    const filter = newdefaultOrders[key].filter;
    if (
      (typeof filter === 'string' && filter === '') ||
      (Array.isArray(filter) && filter.length === 0) ||
      (typeof filter === 'object' && filter !== null && filter.from === '' && filter.to === '')
    ) {
      delete newdefaultOrders[key];
    }
  }

  return newdefaultOrders;
};
