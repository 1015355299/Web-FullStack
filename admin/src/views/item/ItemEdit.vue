<template>
  <div class="about">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      <el-breadcrumb-item>{{ id ? '编辑' : '新建' }}物品</el-breadcrumb-item>
    </el-breadcrumb>


    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-col :span="10">
          <el-input v-model="model.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="afterUpload"
          :headers="getAuthHeaders()"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    afterUpload(res) {
      this.$set(this.model, 'icon', res.url)
    },
    async save() {
      if (this.id) {
        // console.dir(this.model)
        await this.$http.put(`rest/items/${this.id}`, this.model)
      } else {
        await this.$http.post('rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/items/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>
