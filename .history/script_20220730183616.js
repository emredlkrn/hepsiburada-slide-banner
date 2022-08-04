const {
    createApp
} = Vue

createApp({
    data() {
        return {
            activeKategori: 1,
            photo2: [],
            kategoriler: [{
                    kategori_id: 1,
                    kategori_adi: "Sana Özel"
                }, {
                    kategori_id: 2,
                    kategori_adi: "Bugüne Özel"
                },
                {
                    kategori_id: 3,
                    kategori_adi: "Kampanyalar"
                },
            ],
            photo: [{
                    kategori_id: 2,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 2,
                    imgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-banner.jpg",
                    imgBgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background.jpg",
                    imgNimiURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background-min.jpg",
                    kategori_rengi: "#fff"
                },
                {
                    kategori_id: 1,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 1,
                    imgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-banner.jpg",
                    imgBgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background.jpg",
                    imgNimiURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background-min.jpg",
                    kategori_rengi: "#fff"
                },
                {
                    kategori_id: 1,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 1,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 2,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 2,
                    imgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-banner.jpg",
                    imgBgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background.jpg",
                    imgNimiURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background-min.jpg",
                    kategori_rengi: "#fff"
                },
                {
                    kategori_id: 2,
                    imgURL: "img/banner1.jpg",
                    imgBgURL: "img/banner1-bg.jpg",
                    imgNimiURL: "img/banner1-mini.jpg",
                    kategori_rengi: "#000"
                },
                {
                    kategori_id: 2,
                    imgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-banner.jpg",
                    imgBgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background.jpg",
                    imgNimiURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background-min.jpg",
                    kategori_rengi: "#fff"
                },
            ]
        }
    },
    mounted() {
        this.photo2 = this.photo;
        this.photo2 = this.photo.filter(i => i.kategori_id == this.activeKategori)
    },
    methods: {
        showBanner(e) {
            this.activeKategori = e;
            this.photo2 = this.photo.filter(i => i.kategori_id == this.activeKategori)

            //Ürün Görseli Bulunmuyorsa varsayılan bir görsel gönderecektir
            if (this.photo2.length == 0) {
                this.photo2 = [{
                    kategori_id: this.activeKategori,
                    imgURL: "no-gorsel.jpg",
                    imgBgURL: "https://oncaurun.com/Data/EditorFiles/slider/image/ayni-gun-kargo-background.jpg",
                    imgNimiURL: "no-gorsel.jpg",
                    kategori_rengi: "#fff"
                }, ]
            }
        }
    },
}).mount('#app')

var swiper = new Swiper(".mySwiper", {

    spaceBetween: 10,
    slidesPerView: 12,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {

    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },



});

function update() {
    swiper2.update();
    swiper.update();
}
setInterval(() => {
    const bg = $('.mySwiper2 .swiper-slide-active').attr("set-data")
    const color = $('.mySwiper2 .swiper-slide-active').attr("data-color")
    $('.bg-photo').css('background-image', 'url(' + bg + ')');
    $('.cat-btn').css('color', color);

}, 100);