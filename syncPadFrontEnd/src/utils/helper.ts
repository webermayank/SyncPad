// helpers.ts
export const debounce = (func:(...args : any[])=> void, delay : number) => {
  let timeout : any;
  return function (...args:any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};
