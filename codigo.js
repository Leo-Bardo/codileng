var servicios = document.getElementById("servicios");
var campana = document.getElementById("campana");
var w = document.getElementById("web");
var android = document.getElementById("android");
var sales = document.getElementById("salesforce");
var lin = document.getElementById("linux");
var tutos = document.getElementById("tutoriales");
var diversion = document.getElementById("diversion");

function mostrarServicios() {
  if (servicios.style.display === "none") {
    servicios.style.display = "block";
    campana.style.display = "none";
  }
}
function esconderServicios() {
  if (campana.style.display === "none") {
    servicios.style.display = "none";
    campana.style.display = "block";
  }
}

function mostrarWeb() {
  if (w.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "block";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarAndroid() {
  if (android.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "block";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarSalesforce() {
  if (sales.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "block";
    lin.style.display = "none";
    tutos.style.display = "none";
  }
}

function mostrarLinux() {
  if (lin.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "block";
    tutos.style.display = "none";
  }
}

function mostrarTutoriales() {
  if (tutos.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "block";
  }
}

function mostrarJuegos(){
  if (diversion.style.display === "none") {
    servicios.style.display = "none"
    w.style.display = "none";
    android.style.display = "none";
    sales.style.display = "none";
    lin.style.display = "none";
    tutos.style.display = "none";
    diversion.style.display = "block";
  }
}

function verCanvas(){
  mostrarJuegos();
  const canvas = document.querySelector("#draw");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = "#BADASS";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 50;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  function draw(e){
      if(!isDrawing) return;
      console.log(e);
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY;
      hue ++;
      if(hue >= 360){
          hue = 0;
      }
      if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
          direction = !direction;
      }
      if(direction){
          ctx.lineWidth ++;
      }else{
          ctx.lineWidth --;
      }
      
  }

  canvas.addEventListener('mousedown', (e) =>{

      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchstart', () => isDrawing, false);
  canvas.addEventListener('touchmove', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  })
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
