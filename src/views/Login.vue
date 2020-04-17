<template>
  <div class="login">
    <div class="login-frombox">
      <div class="frombox-title">登录</div>
      <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
          <el-form-item label prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item label prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item label prop="code">
            <el-input type="text" v-model="ruleForm.code" autocomplete="off" placeholder="请输入验证码"></el-input>
          </el-form-item>

          <el-form-item>
            <div class="iscode" style="height:40px">
              <img style="height:40px" src="../assets/img/code.png" alt="看不清了" />
              <span @click="invisibilityClick">看不清？换一张验证码</span>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" :loading="loading" style="width:100%" size="medium" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <div class="nopasswrod">
          <router-link to tag="span">忘记密码</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输用户名'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        pass: '',
        code: ''
      },
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      },
      loading: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.loading = true
          this.$router.push('/about')
        } else {
          this.loading = false
          return false;
        }
      });
    },
    invisibilityClick() {
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../assets/img/login-bg.jpg') center no-repeat;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  .login-frombox {
    width: 300px;
    height: 375px;
    padding: 5px 20px;
    background-color: #fff;
    margin: 10% 0 0 0;
    border-radius: 5px;
    position: relative;
    .frombox-title {
      height: 30px;
      line-height: 30px;
      padding: 20px 0;
      text-align: center;
    }
    .iscode {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      img {
        height: 40px;
        width: 125px;
      }
      span {
        height: 40px;
        line-height: 40px;
        background-color: #4b5d67;
        color: #fff;
        cursor: pointer;
        padding: 0 6px;
      }
    }
    .nopasswrod {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 12px auto;
      text-align: center;
      font-size: 12px;
      span:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>
