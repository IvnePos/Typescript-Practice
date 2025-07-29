function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg);
  return arg;
}

loggingIdentity([111.22, 2]);
