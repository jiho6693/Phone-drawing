let bg;
let img;
let motion = false;
let ios = false;

// below code is essential for ios13 and above. 
// A click is needed for the device to request permission 
if (typeof DeviceMotionEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
        ios = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  
  })
} else {
  // we are not on ios13 and above
  // todo
  // add detection for hardware for other devices
  // if(got the hardware) {
  // motion = true;
  // }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  
}

function draw() {
  
  
  let yMotion = round(0 + rotationX * 10)
  let xMotion = round(0 + rotationY * 10)
     fill(255, 100, 50)
   ellipse(xMotion, yMotion, 72, 72);
  
  
  
  
  
}