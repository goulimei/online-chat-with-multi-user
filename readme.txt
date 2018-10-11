基于express框架和Socket.IO，实现多人在线聊天功能。通过监听connect事件，避免TCP连接异常关闭；通过emit和on事件，收发聊天信息，并通过broadcast，将消息广播给其他在线用户。利用static中间件，托管静态文件，通过dom节点，动态添加聊天信息节点。
启动chatServer.js服务端后，通过访问http://localhost:3000，即可。
