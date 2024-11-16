export default function debounce(func: (...args: any[]) => void, timeout = 300, context = {}) {
  let timer: any = null;
  // @ts-ignore
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
}
