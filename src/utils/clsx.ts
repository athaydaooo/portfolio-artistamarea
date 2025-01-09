function clsx(...classes: (string | null)[]): string {
  return classes.join(" ");
}

export default clsx;
