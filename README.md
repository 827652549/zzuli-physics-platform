## 大学物理实验数据处理平台

[PPT展示](https://827652549.github.io/zzuli_wuli.pptx)
｜[Swagger开发接口文档](http://47.103.4.115:8091/docs/)
## 简介
**项目描述**:

&emsp;&emsp;该项目是校物理教师组委托开发，用于简化本科阶段物理实验数据处理操作的响应式在线Web平台。

> ✅该项目后端服务器已经部署，直接启动项目即刻预览！

**核心技术**:

&emsp;&emsp;React、Redux、Ant Design、Axios、Styled-Components

**数据流图**:

![react-redux运用下的数据流图](https://s2.ax1x.com/2020/02/25/3tTGuT.md.jpg)

**功能说明**:

1. 学生将实验课数据导入平台中，系统自动处理数据并导出相关实验报告。所有学生相关数据都会保存到数据库中，以供老师在后台系统中查阅总结。
2. 每个实验有不同数据表单，并能播放在线视频。
3. 在平台提供的附加功能中有相关的实验相关参考资料.


**责任描述**:

1. 制定系统的设计方案.
2. 负责前台所有前端页面的设计和编码.
3. 利用swagger文档和服务端进行数据交换.

**技术要点**：

1. 使用React+Redux语法搭建整个项目,并对数据集中管理.
2. 使用Ant Design的UI组件库打造整体设计风格,并快速构建组件.
3. 使用react-router-dom进行路由转发.
4. 使用Axios向服务端请求和响应数据.
5. 使用Styled-Components实现样式的统一管理

### 启动项目
>确保你的主机已经正确安装了Node

1. 将项目文件夹下载到本地
2. `npm install`安装依赖
3. `npm run start`启动项目


&emsp;&emsp;为了方便运行本项目,服务器代码已经部署到云端,并在项目的`package.json`中设置了云服务器代理.所以你在安装完依赖库之后,就能方便地运行和学习本项目.

### 使用说明
- 为了方便预览最终效果,已经将模拟数据写入到代码中，直接提交即可。
- 直接在对应实验页面如**热导率的测量**点击“提交”按钮即可将模拟数据写入到state中。
- 如果你想录入你的数据或修改数据,直接在第一个页面录入你所有的物理实验操作数据即可。
- 只有`实验项目A-->热导率的测量`展示了完整的实验功能，其他实验数据材料物理组老师并未提供，所以本项目暂时仅作为学习和交流React使用。
### 其他说明
- 项目仅供前端开发者交流学习使用，物理算法不予公开。
- 请勿用于商业用途或不法用途。


![首页](https://s2.ax1x.com/2020/02/23/33Aj4f.jpg)

![实验数据填写](https://s2.ax1x.com/2020/02/23/33EII0.jpg)

![导出的实验报告](https://s2.ax1x.com/2020/02/23/33E5aq.jpg)






