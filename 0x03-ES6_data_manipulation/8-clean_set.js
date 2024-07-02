export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const results = [];
  set.forEach(value => {
    if (value.startsWith(startString)) {
      results.push(value.slice(startString.length));
    }
  });
  return results.join('-');
}
