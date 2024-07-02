function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of groceryMap) {
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  }
}

export default updateUniqueItems;
