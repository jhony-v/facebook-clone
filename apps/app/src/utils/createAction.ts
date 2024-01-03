export default function createAction(type: string): Function {
  return (payload: Object): Object => ({
    type,
    ...(payload !== null && {
      payload
    })
  });
}
