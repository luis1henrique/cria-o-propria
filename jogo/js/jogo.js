const canvas = document.querySelector('Canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 1024
const canvasHeight = 576

canvas.width = canvasWidth
canvas.height = canvasHeight

let prevTime = 2

animate()

function animate(){
    window.requestAnimationFrame(animate)
    
    ctx.fillRect(0,0,canvasWidth, canvasHeight)

    let delta = (performance.now() - prevTime) / 1000

    prevTime = performance.now()
    console.log('FPS: ${fps}')
}
