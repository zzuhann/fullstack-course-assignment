function generateId(arr) {
  const maxId =
    arr.length > 0 ? Math.max(...arr.map((note) => Number(note.id))) : 0;
  return String(maxId + 1);
}
