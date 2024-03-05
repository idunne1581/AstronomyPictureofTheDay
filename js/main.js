document.querySelector('button').addEventListener('click',getFetch)



function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=xOUnzd54iacdm20L863b632XFFOTegHAHezJdHJN&date=${choice}`

  fetch(url)

  .then(res => res.json())
  .then(data => {
    const p = document.querySelector('p')
    p.innerHTML = '';
    // const img = document.querySelector('img')
    // img.innerHTML ='';
    // const iframe = document.querySelector('iframe')
    // iframe.innerHTML = '';

    console.log(data)
    if (data.media_type === 'image') {
      document.querySelector('img').src = data.hdurl
    } else if (data.media_type === 'video'){
      document.querySelector('iframe').src = data.url
    }
    if(data.media_type === undefined) {
      document.querySelector('p').innerText = 'No image available, please select a date after June 16th 1995'
      document.querySelector('p').style.color = 'red'
      document.querySelector('p').style.fontSize = '20px'
      document.querySelector('p').style.textAlign = 'center'
    } else {
      document.querySelector('p').innerText = data.explanation
      document.querySelector('p').style.color = 'black'
      document.querySelector('p').style.fontSize = '15px'
    }
})
  .catch(err => {
    console.log(`error ${err}`)
  })
}
