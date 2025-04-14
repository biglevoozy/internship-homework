export function actionLogger() {
  return (next) => {
    return (action) => {
      console.log(action.type);
      const result = next(action);

      return result;
    };
  };
}
