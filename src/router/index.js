import { createRouter, createWebHistory } from 'vue-router';

//ADMIN----------------------------------------------
import loginPages from '../layouts/loginLayout.vue';

import profile from '../pages/profilePage.vue';
import updateProfile from '../pages/updateProfilePage.vue';

import manufactureHome from '../pages/manufacturePages/homePage.vue';
import revenueStatistics from '../pages/manufacturePages/revenueStatistics.vue';

import listStaff from '../pages/manufacturePages/listStaff.vue';
import profileStaff from '../pages/manufacturePages/detailStaff.vue';
import newStaff from '../pages/manufacturePages/newStaff.vue';
import payrollStaff from '../pages/manufacturePages/payrollStaff.vue';
import updateStaff from '../pages/manufacturePages/updateStaff.vue'

import listShipment from '../pages/manufacturePages/listShipment.vue';
import detailShipment from '../pages/manufacturePages/detailShipment.vue';
import newShipment from '../pages/manufacturePages/newShipment.vue';
import updateShipment from '../pages/manufacturePages/updateShipment.vue';

import listProduct from '../pages/manufacturePages/listProduct.vue';
import detailProduct from '../pages/manufacturePages/detailProduct.vue';
import updateProduct from '../pages/manufacturePages/updateProduct.vue';
import newProduct from '../pages/manufacturePages/newProduct.vue';

import listProcess from '../pages/manufacturePages/listProcess.vue';
import detailProcess from '../pages/manufacturePages/detailProcess.vue';
import addActiveProcess from '../pages/manufacturePages/addActiveProcess.vue';

//CONSUMER----------------------------------------------
import homePageConsumer from '../pages/consumer/homePage.vue';
import processManufacture from '../pages/consumer/processManufacture.vue';
import productInfo from '../pages/consumer/productInfo.vue';
import contactPage from '../pages/consumer/contactPage.vue';
import introducePage from '../pages/consumer/introducePage.vue';
import productPage from '../pages/consumer/productPage.vue';
import productDetail from '../pages/consumer/productDetail.vue';
import NotFound from '../pages/error/notFound.vue';


//import defaultLayoutManufacture from '../layouts/defaultLayoutManufacture.vue';

const routes = [
    //------------------------------MANAGEMENT (Router admin)--------------------------------

    //CA NHAN------------------------------------
    {
        //Dang nhap
        path: '/login',
        name: 'login',
        component: loginPages
    },

    {
        //Trang chu
        path: '/trangchu',
        name: 'Thong-ke-SX',
        component: manufactureHome
    },

    {
        //Trang chu
        path: '/thongkedoanhthu',
        name: 'Thong-ke-DT',
        component: revenueStatistics
    },

    {
        //Thong tin ca nhan
        path: '/canhan',
        name: 'TT-ca-nhan',
        component: profile,
    },
    {
        //Cap nhat thong tin ca nhan
        path: '/capnhat-tt',
        name: 'Cap-nhat-tt-ca-nhan',
        component: updateProfile
    },

    //QL NHAN VIEN------------------------------------
    {
        //Danh sach nhan vien
        path: '/danhsachnhanvien',
        name: 'Danh-sach-nhan-vien',
        component: listStaff
    },
    {
        //Thong tin chi tiet nhan vien
        path: '/chitietnhanvien/:id',
        name: 'Chi-tiet-NV',
        component: profileStaff,
        props: {
            title: 'THÔNG TIN NHÂN VIÊN__:',
        }
    },
    {
        //Cap nhat thong tin nhan vien
        path: '/capnhat-tt-nhanvien/:id',
        name: 'Cap-nhat-nhan-vien',
        component: updateStaff
    },
    {
        //Bang luong nhan vien
        path: '/bangluongnhanvien',
        name: 'Bang-luong-nhan-vien',
        component: payrollStaff
    },
    {
        //Them moi nhan vien
        path: '/themnhanvien/',
        name: 'Them-moi-nhan-vien',
        component: newStaff
    },

    //QL LO HANG------------------------------------
    {
        //Danh sach lo hang
        path: '/danhsachlohang',
        name: 'Danh-sach-LH',
        component: listShipment
    },
    {
        //Thong tin chi tiet lo hang
        path: '/chitietlohang/:id',
        name: 'Chi-tiet-LH',
        component: detailShipment
    },
    {
        //Them lo hang moi
        path: '/themlohangmoi',
        name: 'Them-LH',
        component: newShipment
    },
    {
        //Cap nhat thong tin lo hang
        path: '/capnhatthongtin-lohang/:id',
        name: 'Cap-nhat-LH',
        component: updateShipment
    },

    //QL SAN PHAM
    {
        //Danh sach san pham
        path: '/danhsachsanpham',
        name: 'Danh-sach-SP',
        component: listProduct
    },
    {
        //Chi tiet san pham
        path: '/chitietsanpham/:id',
        name: 'Chi-tiet-SP',
        component: detailProduct,
        props: {
            title: 'THÔNG TIN SẢN PHẨM__:',
        }
    },
    {
        //Cap nhat san pham
        path: '/capnhatsanpham/:id',
        name: 'Cap-nhat-SP',
        component: updateProduct
    },
    {
        //Them moi san pham
        path: '/themsanpham',
        name: 'Them-SP',
        component: newProduct
    },

    //QL QUI TRINH------------------------------------
    {
        //Danh sach quy trinh
        path: '/danhsachquytrinh',
        name: 'Danh-sach-quy-trinh',
        component: listProcess
    },
    {
        //Danh sach quy trinh
        path: '/chitietquytrinh/:id',
        name: 'Chi-tiet-quy-trinh',
        component: detailProcess
    },

    {
        //Danh sach quy trinh
        path: '/themhoatdongmoi/:id',
        name: 'Them-hoat-dong-moi',
        component: addActiveProcess
    },


    //------------------------------CONSUMER (Router consumer)--------------------------------
    {
        //Trang chu khach hang
        path: '/',
        name: 'Khach-hang',
        component: homePageConsumer
    },

    {
        //Quy trinh san xuat va tra cu san pham
        path: '/tracuusanpham',
        name: 'Tra-cuu-SP',
        component: processManufacture
    },

    {
        //Quy trinh san xuat cua san pham
        path: '/tracuusanpham/:id',
        name: 'Tra-cuu-quy-trinh-SP',
        component: productInfo
    },

    {
        //Danh sach san pham
        path: '/sanpham',
        name: 'Ds-SP',
        component: productPage
    },

    {
        //Danh sach san pham
        path: '/sanpham/:idProduct',
        name: 'SP-chi-tiet',
        component: productDetail,
        props: true
    },

    {
        //Thong tin lien lac
        path: '/lienhe',
        name: 'lien-he',
        component: contactPage
    },

    {
        //Gioi thieu
        path: '/giothieu',
        name: 'gioi-thieu',
        component: introducePage
    },

    //LOI------------------------------------
    {
        //Khong tim thay url
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next()
});
export default router;
