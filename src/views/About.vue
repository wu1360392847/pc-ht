<template>
  <div class="about">
    <el-container style="height:100%">
      <!-- 头部 -->
      <el-header height="50px">
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content grid-content-logo">
              <div class="content-logo">
                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
              </div>
              <div class="content-click-menu">
                <i class="el-icon-s-fold" v-if="isCollapse" @click="isCollapse = false"></i>
                <i class="el-icon-s-unfold" v-if="!isCollapse" @click="isCollapse = true"></i>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content grid-content-box">
              <el-dropdown trigger="click" @command="handleCommand">
                <div class="content-user el-dropdown-link">
                  <div class="content-user-img">
                    <el-avatar src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-avatar>
                  </div>
                  <div class="content-user-name">用户名称</div>
                </div>
                <el-dropdown-menu slot="dropdown" style="width:135px;top:45px;">
                  <el-dropdown-item style="line-height: 45px;" command="a">个人信息</el-dropdown-item>
                  <el-dropdown-item style="line-height: 45px;" command="b">修改密码</el-dropdown-item>
                  <el-dropdown-item style="line-height: 45px;" command="c">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container style="height:0">
        <!-- left 侧边导航栏 -->
        <el-aside class="el-aside-me" :style="isCollapse? 'transition:width 0.3s;width:64px' : 'transition:width 0.5s;width:200px'">
          <el-menu :default-active="$route.name" class="el-menu-vertical-demo" @open="handleOpen" @select="handleSelect" @close="handleClose" :collapse="isCollapse" :router="true">
            <!-- 个人信息栏，但能收缩 -->
            <el-menu-item index class="users" :style="isCollapse ? '' : 'height:140px;border-bottom: 1px solid #e6e6e6;'">
              <i class="el-icon-user" :style="isCollapse ? '' : 'display: none'"></i>
              <span slot="title" :style="isCollapse ? '' : 'display: none'">个人信息</span>
              <div class="user-box" :style="isCollapse ? 'display: none' : ''">
                <div class="box-top">
                  <div class="head-portrait">
                    <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt />
                  </div>
                  <div class="head-name">
                    <div class="names">用户名称</div>
                    <div class="names-rank">
                      <span class="names-rank-style">管理员</span>
                    </div>
                  </div>
                </div>
                <div class="box-bottom">
                  <el-tooltip class="item" effect="dark" content="个人信息" placement="bottom">
                    <i class="el-icon-user-solid" style="font-size:18px" @click="mymessage()"></i>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="修改密码" placement="bottom">
                    <i class="el-icon-s-open" style="font-size:18px" @click="mypassword()"></i>
                  </el-tooltip>
                  <el-popover placement="bottom" width="160" v-model="visible">
                    <p>确认退出系统吗？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                      <el-button type="primary" size="mini" @click="exitlogin">确定</el-button>
                    </div>
                    <el-tooltip class="item" slot="reference" effect="dark" content="退出" placement="bottom">
                      <i class="el-icon-error" style="font-size:18px;margin: 0px 0px 35px 0;"></i>
                    </el-tooltip>
                  </el-popover>
                </div>
              </div>
            </el-menu-item>
            <!-- 个人信息栏，但能收缩 -->
            <!-- 菜单 -->
            <el-menu-item index="house">
              <i class="el-icon-house"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="view">
              <i class="el-icon-view"></i>
              <span slot="title">管理</span>
            </el-menu-item>
            <el-menu-item index="videocamera">
              <i class="el-icon-video-camera"></i>
              <span slot="title">影像管理</span>
            </el-menu-item>
            <el-menu-item index="headset">
              <i class="el-icon-headset"></i>
              <span slot="title">媒体管理</span>
            </el-menu-item>
            <el-menu-item index="edit">
              <i class="el-icon-edit"></i>
              <span slot="title">评论管理</span>
            </el-menu-item>
            <el-menu-item index="receiving">
              <i class="el-icon-receiving"></i>
              <span slot="title">推送管理</span>
            </el-menu-item>
            <el-menu-item index="notebook">
              <i class="el-icon-notebook-2"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="phoneoutline">
              <i class="el-icon-phone-outline"></i>
              <span slot="title">联系电话</span>
            </el-menu-item>
            <el-menu-item index="guide">
              <i class="el-icon-guide"></i>
              <span slot="title">版本管理</span>
            </el-menu-item>
            <el-submenu index="folderopened">
              <template slot="title">
                <i class="el-icon-folder-opened"></i>
                <span slot="title">素材管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="folderopened1">图文素材</el-menu-item>
                <el-menu-item index="folderopened2">图片素材</el-menu-item>
                <el-menu-item index="folderopened3">音频素材</el-menu-item>
                <el-menu-item index="folderopened4">视屏素材</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="dateset">
              <i class="el-icon-date"></i>
              <span slot="title">常规管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- right content -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      isCollapse: false,
      visible: false,
      errorHandler() {
        return true
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    handleSelect(key, keyPath) {
      if (key === '') {
        this.isCollapse = false
      }
    },
    mymessage() {
      this.$router.push('/about/mymessage')
    },
    mypassword() {
      this.$router.push('/about/mypassword')
    },
    exitlogin() {
      this.$router.push('/login')
      this.visible = false
    },
    handleCommand(command) {
      if (command === 'a') {
        this.$router.push('/about/mymessage')
      } else if (command === 'b') {
        this.$router.push('/about/mypassword')
      } else if (command === 'c') {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
}

.el-header {
  text-align: center;
  padding: 0 0;
  height: 50px;
  line-height: 50px;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.el-aside::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}
/*定义滚动条轨道 内阴影+圆角*/
.el-aside::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #f1f1f1;
}
/*定义滑块 内阴影+圆角*/
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #b4b4b4;
}
.el-aside {
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto;

  .el-menu-item-group__title {
    padding: 0 !important;
  }

  .el-menu-item {
    height: 50px;
    line-height: 50px;
  }
  .is-active {
    background-color: #dbdbdb;
    color: #646669;
  }
}

.el-main {
  background-color: #ecf0f5;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}

.el-menu {
  border-right: 0;
}

.el-col {
  padding-left: 0 !important;
  padding-right: 0 !important;
  min-width: 240px;
}

.el-row {
  margin-left: 0 !important;
  margin-right: 0 !important;
  min-width: 720px;
}

.grid-content {
  height: 50px;
}
.grid-content-logo {
  display: flex;

  .content-logo {
    width: 200px !important;
    min-width: 200px !important;

    img {
      width: 200px !important;
      height: 50px;
    }
  }

  .content-click-menu {
    width: 40px !important;
    min-width: 40px;
    border-right: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    padding-left: 5px;
  }
}

// 顶部个人信息
.grid-content-box {
  text-align: right;
  .el-dropdown {
    top: -5px;
    .content-user {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      height: 50px;
      line-height: 50px;
      margin: 0 20px;
      cursor: pointer;

      .content-user-img {
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        margin: 0 10px;

        .el-avatar--circle {
          vertical-align: middle;
          vertical-align: -webkit-baseline-middle;
        }
      }

      .content-user-name {
        font-size: 15px;
      }
    }
  }
}
// 个人信息栏，但能收缩
.users:hover {
  background-color: #fff !important;
}

.users {
  background-color: #fff !important;
  padding: 0 5px !important;

  .user-box {
    width: 200px;
    height: 140px;

    .box-top {
      height: 114px;
      display: flex;
      align-items: center;

      .head-portrait {
        margin: 0 auto;
        width: 50px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          overflow: hidden;
        }
      }

      .head-name {
        width: 100%;
        height: 56px;
        line-height: 0;
        padding: 0 8px;
        margin-top: 10px;

        .names {
          width: 130px;
          height: 23px;
          line-height: 23px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .names-rank {
          height: 23px;
          line-height: 23px;
          margin-top: 5px;

          .names-rank-style {
            display: inline-block;
            height: 20px;
            border-radius: 5px;
            background: #8bc34a;
            padding: 1px 6px;
            color: #fff;
            font-size: 12px;
          }
        }
      }
    }

    .box-bottom {
      height: 20px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 6px;
    }
  }
}
</style>
