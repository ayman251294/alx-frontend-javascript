export default function updateUniqueItems(map) {
  const temp = map;

  if (temp instanceof Map) {
    for (const [key, value] of temp) {
      if (value === 1) {
        temp.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }

  return temp;
}
