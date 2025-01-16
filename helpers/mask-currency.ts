export const maskCurrency = (valor: string) => {
  const onlyNumbers = valor.replace(/\D/g, "")

  const decimal = (parseInt(onlyNumbers, 10) / 100).toFixed(2)

  return decimal.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
