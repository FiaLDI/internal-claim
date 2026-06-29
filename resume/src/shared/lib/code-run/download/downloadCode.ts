export const downloadCode = (code: string, title?: string) => {

  const blob = new Blob([code], { type: "text/plain" })

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = `${title}-${crypto.randomUUID()}-solution.txt`

  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
