const cardStatus = document.querySelectorAll('.card-status')

cardStatus.forEach((item) => {
  const status = item.getAttribute('class').split(' ')[1]
  console.log("🚀 ~ file: app.js:3 ~ status:", status)

  const statusText = ['Available', 'Unavailable', 'Booking', 'Done']
  const result = statusText.find((item) => item.toLowerCase() === status)
  console.log("🚀 ~ file: app.js:9 ~ cardStatus.forEach ~ result:", result)
  
  item.textContent = result;
})


