# button按钮
<p>常用的操作按钮</p>


### 基础用法
<p>基础的按钮用法</p>
<el-view>
    <div class='demo-block'>
        <el-row>
            <el-button> 默认按钮 </el-button>
            <el-button type='primary'> 主要按钮 </el-button>
            <el-button type='success'> 成功按钮 </el-button>
            <el-button type='info'> 信息按钮 </el-button>
            <el-button type='warning'> 警告按钮 </el-button>
            <el-button type='danger'> 警告按钮 </el-button>
        </el-row>
        <el-row>
            <el-button plain> 默认按钮 </el-button>
            <el-button type='primary' plain> 主要按钮 </el-button>
            <el-button type='success' plain> 成功按钮 </el-button>
            <el-button type='info' plain> 信息按钮 </el-button>
            <el-button type='warning' plain> 警告按钮 </el-button>
            <el-button type='danger' plain> 警告按钮 </el-button>
        </el-row>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
    </div>
</el-view>

```vue
<el-view>
    <el-row>
        <el-button> 默认按钮 </el-button>
        <el-button type='primary'> 主要按钮 </el-button>
        <el-button type='success'> 成功按钮 </el-button>
        <el-button type='info'> 信息按钮 </el-button>
        <el-button type='warning'> 警告按钮 </el-button>
        <el-button type='danger'> 警告按钮 </el-button>
    </el-row>
    <el-row>
        <el-button plain> 默认按钮 </el-button>
        <el-button type='primary' plain> 主要按钮 </el-button>
        <el-button type='success' plain> 成功按钮 </el-button>
        <el-button type='info' plain> 信息按钮 </el-button>
        <el-button type='warning' plain> 警告按钮 </el-button>
        <el-button type='danger' plain> 警告按钮 </el-button>
    </el-row>
    <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
</el-view>
```

### 禁用状态
<p></p>
<el-view>
    <div class='demo-block'>
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain disabled>朴素按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="success" plain disabled>成功按钮</el-button>
            <el-button type="info" plain disabled>信息按钮</el-button>
            <el-button type="warning" plain disabled>警告按钮</el-button>
            <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>
    </div>
</el-view>

```vue
<el-view>
    <el-row>
        <el-button disabled>默认按钮</el-button>
        <el-button type="primary" disabled>主要按钮</el-button>
        <el-button type="success" disabled>成功按钮</el-button>
        <el-button type="info" disabled>信息按钮</el-button>
        <el-button type="warning" disabled>警告按钮</el-button>
        <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <el-row>
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" plain disabled>主要按钮</el-button>
        <el-button type="success" plain disabled>成功按钮</el-button>
        <el-button type="info" plain disabled>信息按钮</el-button>
        <el-button type="warning" plain disabled>警告按钮</el-button>
        <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>
</el-view>
```
### 文字按钮
<p></p>
<el-view>
    <el-row class='demo-block'>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
    </el-row>
</el-view>

```vue
<el-view>
    <el-row class='demo-block'>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
    </el-row>
</el-view>
```

### 图标按钮
<p></p>
<el-view>
    <el-row class='demo-block'>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
</el-view>


```vue
<el-view>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
</el-view>
```
### 按钮组
<p></p>
<el-view>
    <el-row class='demo-block'>
        <el-button-group style="margin-right: 20px;">
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
    </el-row>
</el-view>

```vue
<el-view>
    <el-button-group style="margin-right: 20px;">
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
</el-view>
```
### 加载中
<p></p>
<el-view>
    <el-row class='demo-block'>
        <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>
</el-view>

```vue
<el-view>
    <el-button-group style="margin-right: 20px;">
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
</el-view>
```

### 大小
<p></p>
<el-view>
    <div class='demo-block'>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>
    </div>
</el-view>

```vue
<el-view>
    <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
    </el-row>
</el-view>
```