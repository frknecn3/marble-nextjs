import { CarouselProps } from "react-multi-carousel"

type NavbarElement={
    value:string
    label:string
}

export function random(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

export const NavbarElementsArray:NavbarElement[] = [
    {
        value:'',
        label:'ANASAYFA'
    },
    {
        value:'faq',
        label:'SSS'
    },
    {
        value:'contact',
        label:'İLETİŞİM'
    },
    {
        value:'about',
        label:'HAKKIMIZDA'
    },
]

export type MarbleType = {
    name:string
    photo:string
}

export const marbleTypes = [
    {
        name:'Burdur Beige',
        photo:'/images/marbles/burdurbeige.jpg'
    },
    {
        name:'Cyprus Grey',
        photo:'/images/marbles/cyprusgrey.jpg'
    },
    {
        name:'Licorice Grey',
        photo:'/images/marbles/licoricegrey.jpg'
    },
    {
        name:'Bursa Beige',
        photo:'/images/marbles/bursabeige.jpg'
    },
    {
        name:'Daisy Blue',
        photo:'/images/marbles/daisyblue.jpg'
    },
    {
        name:'Grey Osmoe',
        photo:'/images/marbles/greyosmoe.jpg'
    },
    {
        name:'Indigo Night',
        photo:'/images/marbles/indigonight.jpg'
    },
    {
        name:'Pasha White',
        photo:'/images/marbles/pashawhite.jpg'
    },
    {
        name:'Patara Beige',
        photo:'/images/marbles/patarabeige.jpg'
    },
]

export const sliderImages = [...Array(22)].map((item,i)=>
    (`/images/slider/${i+1}.jpg`
)

)

export const qna = [
    {
        q:"Türkiye dışına hizmet veriyor musunuz?",
        a:"Evet veriyoruz."
    },
    {
        q:"Hangi illere hizmetiniz mevcut?",
        a:"Türkiye'nin 81 iline hizmetimiz mevcuttur."
    },
    {
        q:"Ortalama montaj süresi nedir?",
        a:"Montaj sürelerimiz konum ve yoğunluk gibi faktörlere göre değişmektedir. Temsilcilerimizle iletişim kurarak daha detaylı bilgi alabilirsiniz."
    },
]

export const longText = `Porta Marble olarak, mermerin doğallığını ve zarafetini dünya genelinde müşterilerimize sunmayı amaçlayan bir dış ticaret firmasıyız. Mermerin eşsiz güzellik ve dayanıklılığını, yaratıcı tasarımlarla birleştirerek iç ve dış mekanlara özgün bir dokunuş katıyoruz

Köklü bir geleneğe sahip mermer sektöründe, mermer ocaklarımızın sağladığı benzersiz kaynaklarla işimizi özelleştiriyoruz. Mermer ocaklarımız, en kaliteli ve çeşitli mermer yataklarının bulunduğu bölgelerde yer almaktadır. Bu sayede, doğal taşın farklı renkleri, desenleri ve dokularını geniş bir yelpazede müşterilerimize sunabiliyoruz

Amacımız, yaratıcı mimarlar, iç mekan tasarımcıları, inşaat profesyonelleri ve bireysel müşteriler için benzersiz ve sürdürülebilir mermer çözümleri sunmaktır. Müşterilerimizin vizyonlarına ve ihtiyaçlarına uygun olarak özelleştirilmiş ürünlerimizle, mekanların güzellik ve estetik açısından en yüksek potansiyellerine ulaşmalarına yardımcı oluyoruz

Porta Marble olarak, kalite, güvenilirlik ve müşteri memnuniyetini en üst düzeyde tutmayı taahhüt ediyoruz. Küresel pazarda rekabet ederken, sürdürülebilir üretim yöntemleri ve çevreye duyarlılık da önceliklerimiz arasında yer alıyor

Mermerin gücü ve güzellikle buluştuğu yerde, Porta Marble olarak sizleri ağırlamaktan mutluluk duyarız`

export const responsiveType = {
    threeElement:{
        
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
    ,
    singleElement:{
        
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
  };

  export type newCarouselProps = Omit<CarouselProps,'responsive'|'children'>

  export const imageTexts = [
    'Mermer hiç bu kadar güzel olmamıştı.',
    'İhtişamlı ve gösterişli.',
    'Estetiğiyle büyüleyen mermer dokunuşları.',
    'Gözlerinizi alamayacağınız bir şölen.'
  ]