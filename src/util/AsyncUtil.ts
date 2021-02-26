export const asyncActionName = (basename: string) => ({
  loading: `${basename}_LOADING`,
  failure: `${basename}_FAILING`,
  success: `${basename}_SUCCESS`,
});

export const asyncActions = (actionName: string) => ({
  loading: (bool: boolean) => ({
    type: asyncActionName(actionName).loading,
    payload: bool,
  }),
  success: (payload: any) => ({
    type: asyncActionName(actionName).success,
    payload,
  }),
  failure: (bool: boolean, error: string) => ({
    type: asyncActionName(actionName).failure,
    payload: { error, status: bool },
  }),
});
