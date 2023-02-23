import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
const cardPart = document.createElement("div");
cardPart.classList.add("card");

const headLinePart = document.createElement("div");
headLinePart.classList.add("headline");
headLinePart.textContent = makale.anabaslik;
cardPart.append(headLinePart);

const authorPart = document.createElement("div");
authorPart.classList.add("author");
cardPart.append(authorPart);

const image = document.createElement("div");
image.classList.add("img-container");
authorPart.append(image);

const imgPart = document.createElement("img");
imgPart.setAttribute("src", makale.yazarFoto);
image.append(imgPart)

const name = document.createElement("span");
name.textContent = makale.yazarAdi + "tarafından";
authorPart.append(name)

cardPart.addEventListener("click",()=>{
  console.log(cardPart.querySelector(".headline").textContent);
});
return cardPart;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

const seciciEkle3 = document.querySelector(secici);
axios
.get("http://localhost:5001/api/makaleler")
.then((res)=>{
  console.log(res);
  for(const [key,value] of Object.entries(res.data.makaleler)){
    value.forEach((e) => {
      seciciEkle3.append(Card(e));
    })
  }
  
  })


}

export { Card, cardEkleyici }
