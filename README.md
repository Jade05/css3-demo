#基于node、express框架
#展示css3特效
#记录代码
#积累基础组件
#具体查看方式
目前暂时支持直接输入url，回车查看。
在本地安装好后，启动服务，再在浏览器中输入url
例如，当你启动的服务端口为3000时，要查看筛子模型的特效，可以在浏览器中输入 http://localhost:3000/shaizi

具体有什么特效模型，可以查看app.js中，类似app.get('/shaizi', shaizi.shaizi)的字眼，即路由配置

当积累多了之后，能够整理出展示页面。

为了便于浏览，现将可访问的url枚举如下：

http://localhost:3000/shaizi
http://localhost:3000/movingCloud

PS：再强调一遍，以上url对于path部分是普适的，但对于host和port，即主机和端口部分，请务必考虑你安装启动服务后的实际情况进行修改。

Best wishes!