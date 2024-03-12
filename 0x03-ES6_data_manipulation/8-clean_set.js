export default function cleanSet(set, startString) {
  const list = [];

  if (
    typeof set !== 'object'
        || typeof startString !== 'string'
        || startString.length === 0
  ) {
    return '';
  }

  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      list.push(element.slice(startString.length));
    }
  });

  return list.join('-');
}
