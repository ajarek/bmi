 const wynik = document.querySelector('.wynik');
 const btn = document.querySelector('button')
 class Bmi {
     constructor(wzrost, waga) {
         this.wzrost = wzrost;
         this.waga = waga;
     }
     get wynik() {
         return this.liczWynik();
     }
     liczWynik() {
         return this.waga / Math.pow(this.wzrost, 2) * 10000;
     }
 }
 btn.addEventListener('click', () => {
     let wz = document.getElementById('wzrost').value;
     let wg = document.getElementById('waga').value;
     wz = Math.abs(wz);
     wg = Math.abs(wg)
     const calc = new Bmi(wz, wg);

     if (calc.wynik < 18.6) {
         wynik.innerHTML = calc.wynik.toFixed(2);
         wynik.style.color = 'blue';
     }
     if (calc.wynik > 18.6 && calc.wynik <= 24.9) {
         wynik.innerHTML = calc.wynik.toFixed(2);
         wynik.style.color = 'green';
     }
     if (calc.wynik > 24.9) {
         wynik.innerHTML = calc.wynik.toFixed(2)
         wynik.style.color = 'red';
     }
 })