 
function raschitat() {
   cvet  = document.getElementById('cvet').value;
   switch (cvet) {
      case "Metal":
         cena = 4540;
         break
      case "Plastick":
         cena = 480;
         break   
       case "chrom":
         cena = 380;
         break   
      default:
         cena = 4540;
         break
   }
   shirina  = document.getElementById('shirina').value;
   dlina  = document.getElementById('dlina').value;
   if(shirina == ""){
   alert("Вы не указали ширину");
   } else if(dlina == ""){
   alert("Вы не указали длину");
   } else {
   ploschad = parseFloat (shirina)* parseFloat (dlina);
   document.getElementById('ploschad').innerHTML = "Площадь равна: "+ ploschad +" кв. м.";
   stoimost = ploschad*cena;
   document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
   }
   }