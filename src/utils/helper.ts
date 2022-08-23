const genUniqId = (len: number = 6, radix?: number) => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const uniqId: any[] = [];
  let i: number = 0;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) {
      // tslint:disable-next-line: no-bitwise
      uniqId[i] = chars[0 | (Math.random() * radix)];
    }
  } else {
    let r;

    uniqId[8] = uniqId[13] = uniqId[18] = uniqId[23] = '-';
    uniqId[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uniqId[i]) {
        // tslint:disable-next-line: no-bitwise
        r = 0 | (Math.random() * 16);
        // tslint:disable-next-line: no-bitwise
        uniqId[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uniqId.join('');
};

const timeoutIds: any = {};
const genTimeout = (time?: number) => {
  const timerId = genUniqId();

  return {
    timerId,
    run: (runTime?: number, callback?: any) => {
      const cb = typeof runTime === 'number' ? callback : runTime;
      if (timeoutIds[timerId]) {
        clearTimeout(timeoutIds[timerId]);
      }
      timeoutIds[timerId] = setTimeout(cb, runTime || time);
    },
    clear: () => {
      if (timeoutIds[timerId]) {
        clearTimeout(timeoutIds[timerId]);
        timeoutIds[timerId] = null;
        delete timeoutIds[timerId];
      }
    },
  };
};

export default {
  genTimeout,
  genUniqId,
};
