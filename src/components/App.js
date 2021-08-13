import React from 'react';
import BookList from './BookList';


class App extends React.Component{
    state={
        books:[
            {
                // id:1,
                title: "Hayvan Çiftliği",
                author:"George Orwell",
                pageNum:152,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0000000105409-1.jpg",
                topic:"Fazla çalıştırılan ve kötü muamele gören hayvanlar bir gün toplanıp yaşadıkları çiftliği ele geçirirler. Sonunda söz sahibi olmuşlardır, çiftlikte daha adil ve eşit bir toplum oluşturmaya kararlıdırlar. Domuzların öncülüğünde bu yeni düzeni kurmak için çalışmaya başlarlar. Bu düzen ilk başta çiftliğin gelişmesini sağlasa da zamanla hayvanların öngöremediği sorunlar ortaya çıkacak ve eskisinden daha acımasız bir rejim kurulacaktır."
                },
                {
                // id:2,
                title:"Kırmızı Pazartesi",
                author:"Gabriel Garcia Marquez",
                pageNum:111,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0000000064101-1.jpg",
                topic:"Kolombiyalı büyük yazar Gabriel García Márquez'in 1981'de yayımlanan yedinci romanı Kırmızı Pazartesi, işleneceğini herkesin bildiği, engel olmak için kimsenin bir şey yapmadığı bir namus cinayetinin öyküsü. Hem Kolombiya'da, hem de yayımlandığı dünyanın dört bir yanındaki pek çok ülkede sarsıcı etkileri olmuş bir roman. Usta yazar, çocukluğunu geçirdiği kasabada yıllar önce yaşanmış bir cinayet olayını aktarıyor. Romanın kahramanı Santiago Nasar'ın öldürüleceği daha ilk satırlardan belli. Kırmızı Pazartesi, yalnızca bir cinayetin arka planını değil, bir halkın ortak davranış biçimlerinin potresini de çiziyor. Böylece, sonuna dek ilgiyle okuyacağınız bu kısa ve ölümsüz roman, bir toplumsal ruhçözümü niteliği de kazanmış oluyor."
                
                },
                {
                // id:3,
                title:"Satranç",
                author:"Stefan Zweig",
                pageNum:98,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0000000402142-1.jpg",
                topic:"Satranç, “İncecik bir kitaba, tarihin en büyük acılarını sığdırmak mümkün müdür?” sorusunun cevabı niteliğini taşıyor. Avusturyalı Yazar Stefan Zweig tarafından 1942 yılında kaleme alınan eser, sembolik ve özlü anlatımıyla II. Dünya Savaşı’nın tüm yıkıcılığını dile getiriyor."
                },
                {
                // id:4,
                title:"Bülbülü Öldürmek",
                author:"Harper Lee",
                pageNum: 360,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0001863920001-1.jpg",
                topic:"“İstediğin kadar saksağan vur vurabilirsen, ama uunutma, bülbülü öldürmek günahtır.”Tüm zamanların en sevilen hikâyelerinden biri olan, kırktan fazla dile çevrilen, Oscar ödüllü bir sinema filmi için temel oluşturan ve yirminci yüzyılın en iyi romanlardan biri seçilen Pulitzer ödüllü Bülbülü Öldürmek, Amerika’nın acımasız bir önyargı ile zehirlenmiş güneyinde geçen, sürükleyici, yürek burkan ve dikkat çekici bir büyüme hikâyesi. Büyüleyici güzellikler ve vahşi eşitsizlikler dünyasında haksız yere korkunç bir suçla suçlanan bir “zenci”yi savunmak için her şeyi riske atan bir adamın hikâyesi çocuk kahramanın gözünden anlatılıyor."
                },
                {
                // id:5,
                title:"Beyaz Zambaklar Ülkesinde",
                author:"Grigory Petrov",
                pageNum: 136,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0001917612001-1.jpg",
                topic:"Grigori Petrov, yayımlandığı dönemde Balkanlarda olduğu kadar genç Türkiye’de de büyük bir ilgiyle karşılanan Beyaz Zambaklar Ülkesinde eserinde, uzun yıllar ulus kimliğine sahip olamamış, işgaller, toplumsal eşitsizlikler, yoksulluk ve türlü güçlüklerle boğuşmuş küçücük bir ülkenin her yönden kalkınmasının hikâyesi büyük bir hayranlık ve sevgiyle anlatır. Bir avuç aydının kılavuzluğunda halkın her kesiminden insan, aydınlar, işçiler, köylüler, sanatçılar, zanaatkârlar, eğitimciler örneğine az rastlanan bir çabayla küçük ülkelerine, uluslarına sahip çıkarlar."
                },
                {
                // id:6,
                title:"Bin Muhteşem Güneş",
                author:"Khaled Hosseini",
                pageNum:250,
                imageUrl:"https://i.idefix.com/cache/500x400-0/originals/0000000266552-1.jpg",
                topic:"Uçurtma Avcısı romanıyla dünya çapında büyük beğeni toplayan Khaled Hosseini, ikinci kitabı Bin Muhteşem Güneş ile okurlarının beklentisini yine fazlasıyla karşılıyor. Afgan asıllı yazar, Uçurtma Avcısı gibi bu romanında da doğduğu toprakların kader çıkmazını konu ediniyor. Yaşamlarının kesişmesi üzerine sıkı dost olan iki kadının anlatıldığı Bin Muhteşem Güneş, yüreklere dokunan öyküsüyle zihinlerde iz bırakıyor. Bu romanı okurken, siz de içinde kendinizi bulacağınız bambaşka yaşamlara tanıklık edeceksiniz."
                }
                
        ]
    }
    render(){
        return <div><BookList books={this.state.books}/></div>
    }
}

export default App;