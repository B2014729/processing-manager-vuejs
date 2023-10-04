<template>
    <div class="body">
        <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png">
            <h3>Sign in here</h3>
            <form @submit.prevent="onSubmit">

                <div class="inputBox">
                    <input id="uname" type="text" v-model="username" placeholder="Username">
                    <input id="pass" type="password" v-model="password" placeholder="Password">
                    <div class="d-flex">
                        <input style="width: auto; margin-top: 6px; margin-right: 5px;" type="checkbox" @click="showpass">
                        Show password
                    </div>
                </div>

                <span class="messages-error" v-if="error['wronginfo']">
                    <i class="fa-solid fa-triangle-exclamation"></i> Tên đăng nhập hoặc mật khẩu không đúng!
                </span>
                <span class="messages-error" v-if="error['emptyinfo']">
                    <i class="fa-solid fa-triangle-exclamation"></i> Tên đăng nhập hoặc mật khẩu không thể rỗng!
                </span>

                <input type="submit" value="Login">
            </form>
            <a href="#">Forget Password<br></a>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import accountService from '@/service/account.service';
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },

    setup() {
        let error = ref([]);

        return {
            error
        }
    },
    methods: {
        showpass() {
            const inputPass = document.getElementById("pass");
            if (inputPass.type == 'password') {
                inputPass.type = 'text';
            } else {
                inputPass.type = 'password';
            }
        },

        async onSubmit() {
            this.error['wronginfo'] = false;
            if (this.username === '' || this.password === '') {
                this.error['emptyinfo'] = true;
            } else {
                this.error['emptyinfo'] = false;
                try {
                    await accountService.login(this.username, this.password).then((result) => {
                        if (result.message) {
                            //Day view ve trang home neu dang nhap thanh cong
                            this.$router.push({ name: 'Thong-ke-SX', params: { id: result.data[0].id } });
                        }
                    });
                } catch (err) {
                    console.log(err)
                    this.$router.push({ name: 'login' });
                    this.error['wronginfo'] = true;
                }
            }
        }
    }
}
</script>

<style lang="css" scoped>
.body {
    margin: 0;
    padding: 0;
    background: url('https://t3.ftcdn.net/jpg/04/39/59/32/360_F_439593202_3ZYjuJk9ukG0zzWnNEaUxZKXF01Z0zWu.jpg') no-repeat;
    background-size: auto;
    height: 100vh;
    font-family: sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden
}

@media screen and (max-width: 600px) {
    .body {
        background-size: cover;
    }
}

#particles-js {
    height: 100%
}

.loginBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    min-height: 200px;
    background: transparent;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box
}

.user {
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
    width: 15%;
}

h3 {
    margin: 0;
    padding: 0 0 20px;
    color: #ffffff;
    text-align: center
}

.loginBox input {
    width: 100%;
    margin-bottom: 20px
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
    border: none;
    border-bottom: 2px solid #262626;
    outline: none;
    height: 40px;
    color: #ffffff;
    background: transparent;
    font-size: 16px;
    padding-left: 20px;
    box-sizing: border-box
}

.loginBox input[type="text"]:hover,
.loginBox input[type="password"]:hover {
    color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0 0 5px rgba(64, 64, 64, 0.3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus {
    border-bottom: 2px solid #888888
}

.inputBox {
    position: relative
}

.inputBox span {
    position: absolute;
    top: 10px;
    color: #c0c0c0
}

.loginBox input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    font-size: 16px;
    background: #59238F;
    color: #fff;
    border-radius: 20px;
    cursor: pointer
}

.loginBox a {
    color: #a7a7a7;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    display: block
}

a:hover {
    color: #585858
}

p {
    color: #0000ff
}

.messages-error {
    color: rgb(250, 192, 31);
    font-size: 14px;
}
</style>