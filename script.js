// ================= LIGHT/DARK THEME TOGGLE =================
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
if(localStorage.getItem('theme')==='light'){ document.body.classList.add('light-mode'); themeIcon.textContent='☀'; }
toggleButton.addEventListener('click',()=>{
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')){
    themeIcon.textContent='☀'; localStorage.setItem('theme','light');
  }else{
    themeIcon.textContent='🌙'; localStorage.setItem('theme','dark');
  }
});

// ================= HOME PARTICLE ANIMATION =================
const homeCanvas=document.getElementById('home-bg');
const ctx=homeCanvas.getContext('2d');
let particles=[];
function resizeHome(){ homeCanvas.width=window.innerWidth; homeCanvas.height=document.getElementById('home').offsetHeight; }
window.addEventListener('resize',resizeHome);
resizeHome();
class Particle{constructor(){this.x=Math.random()*homeCanvas.width;this.y=Math.random()*homeCanvas.height;this.size=Math.random()*3+1;this.speedX=(Math.random()-0.5)*0.5;this.speedY=(Math.random()-0.5)*0.5;}update(){this.x+=this.speedX;this.y+=this.speedY;if(this.x<0)this.x=homeCanvas.width;if(this.x>homeCanvas.width)this.x=0;if(this.y<0)this.y=homeCanvas.height;if(this.y>homeCanvas.height)this.y=0;}draw(){ctx.fillStyle='rgba(29,185,84,0.6)';ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fill();}}
function initParticles(){particles=[];const n=Math.floor(homeCanvas.width*homeCanvas.height/15000);for(let i=0;i<n;i++)particles.push(new Particle());}
initParticles();
function connectParticles(){let maxD=120;for(let a=0;a<particles.length;a++){for(let b=a;b<particles.length;b++){let dx=particles[a].x-particles[b].x;let dy=particles[a].y-particles[b].y;let dist=Math.sqrt(dx*dx+dy*dy);if(dist<maxD){ctx.strokeStyle='rgba(29,185,84,'+(1-dist/maxD)+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(particles[a].x,particles[a].y);ctx.lineTo(particles[b].x,particles[b].y);ctx.stroke();}}}}
function animate(){ctx.clearRect(0,0,homeCanvas.width,homeCanvas.height);particles.forEach(p=>{p.update();p.draw();});connectParticles();requestAnimationFrame(animate);}
animate();
// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}