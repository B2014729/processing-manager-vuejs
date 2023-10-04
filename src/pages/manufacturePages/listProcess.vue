<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">QUY TRÌNH SẢN XUẤT__:</h5>
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 1 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT RAU CỦ NGẮN HẠN</p>
                            </div>
                            <img src="https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-mot-so-loai-rau.png"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 1 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT LÚA GẠO</p>
                            </div>
                            <img src="https://tansonnhatairport.vn/wp-content/uploads/2018/11/gia-lua-gao.jpg"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 2 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT CÀ CHUA</p>
                            </div>
                            <img src="https://www.aia.com.vn/vi/song-khoe/loi-khuyen/dinh-duong/an-ca-chua-song-co-tac-dung-gi.thumb.800.480.png?ck=1682571121"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>



                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 1 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT BẮP CẢI</p>
                            </div>
                            <img src="https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng%208/Ng%C3%A0y_18/Thanh/maxresdefault-1.jpg"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 1 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT RAU CỦ NGẮN HẠN</p>
                            </div>
                            <img src="https://anhdep123.com/wp-content/uploads/2020/11/hinh-anh-mot-so-loai-rau.png"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { name: 1 } }" class="center">
                        <div class="article-card">
                            <div class="content">
                                <p class="date">Jan 1, 2022</p>
                                <p class="title">QUY TRÌNH SẢN XUẤT CÀ CHUA</p>
                            </div>
                            <img src="https://www.aia.com.vn/vi/song-khoe/loi-khuyen/dinh-duong/an-ca-chua-song-co-tac-dung-gi.thumb.800.480.png?ck=1682571121"
                                alt="article-cover" />
                        </div>
                    </router-link>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
    },
}
</script>
<style lang="css" scoped>
.header-text {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 0;
    color: #848484;
}

.article-card {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 300ms;
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.article-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.article-card .content {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: 30px 20px 20px 20px;
    height: auto;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.article-card .date,
.article-card .title {
    margin: 0;
}

.article-card .date {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 4px;
}

.article-card .title {
    font-size: 17px;
    color: #fff;
}
</style>