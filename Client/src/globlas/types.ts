export const Status = {
  SUCCESS: "success",
  LOADING: "LOADING",
  ERROR: "error",
} as const;

export type StatusType = (typeof Status)[keyof typeof Status];