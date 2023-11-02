import { configuration as config } from './configuration.js'

const fetchExchangeData = async (url) => {
  try {
    const response = await fetch('https://cors.io/?' + url, {
      cache: 'no-store',
      headers: { Accept: 'text/plain' },
    })
    const textData = await response.text()
    console.log('CNB response:', textData)
    return textData
  } catch (error) {
    throw new Error(`Failed to fetch exchange data: ${error}`)
  }
}

;(async () => {
  const result = await fetchExchangeData(config.CNB_URL)
  const div = document.querySelector('#root')
  div.innerHTML = result
})()
