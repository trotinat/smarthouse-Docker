export function compareWithIds(object1: any, object2: any) {
  return object1 && object2 && object1.id === object2.id;
}
