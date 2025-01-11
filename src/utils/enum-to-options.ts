const enumToOptions = (enumObj: Record<string, string>) => {
  return Object.keys(enumObj).map((key) => ({
    label: key, // Usa a chave do enum como label
    value: enumObj[key], // Usa o valor do enum como value
  }));
};

export default enumToOptions;
