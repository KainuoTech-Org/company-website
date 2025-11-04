# EmailJS 配置指南

## 步骤 1: 注册 EmailJS 账户

1. 访问 [EmailJS 官网](https://www.emailjs.com/)
2. 点击 "Sign Up" 注册免费账户（每月可免费发送 200 封邮件）
3. 使用邮箱注册或通过 Google 账户登录

## 步骤 2: 添加邮件服务

1. 登录后，进入 [Email Services](https://dashboard.emailjs.com/admin)
2. 点击 "Add New Service"
3. 选择您的邮件服务提供商（推荐使用 Gmail）
4. 按照提示连接您的邮箱账户
5. 记下生成的 **Service ID**（例如：`service_abc1234`）

## 步骤 3: 创建邮件模板

1. 进入 [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. 点击 "Create New Template"
3. 设置模板内容：

```
Subject: 新的联系表单消息 - 凯诺创享科技

来自客户的消息：

邮箱: {{user_email}}

留言内容:
{{message}}

---
此邮件由网站联系表单自动发送
```

4. 在 "To email" 字段填入：`{{to_email}}` 或直接填写 `contact@kainuotech.com`
5. 保存模板并记下 **Template ID**（例如：`template_xyz5678`）

## 步骤 4: 获取 Public Key

1. 进入 [Account](https://dashboard.emailjs.com/admin/account)
2. 找到 "API Keys" 部分
3. 复制 **Public Key**（例如：`gH8Km3_pQr9Stu2Vw`）

## 步骤 5: 更新网站代码

在 `index.html` 文件中，找到以下代码并替换：

```javascript
// 第 701 行附近
emailjs.init("YOUR_PUBLIC_KEY"); // 替换为您的 Public Key

// 第 724 行附近
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

替换后的示例：

```javascript
emailjs.init("gH8Km3_pQr9Stu2Vw");

emailjs.send('service_abc1234', 'template_xyz5678', templateParams)
```

## 步骤 6: 测试表单

1. 保存并提交代码到 GitHub
2. 等待网站部署完成
3. 访问网站的"联系我们"板块
4. 填写表单并点击"发送"
5. 检查您的邮箱是否收到测试邮件

## 常见问题

### Q: 如果使用 Gmail，需要特殊设置吗？
A: 是的，Gmail 需要：
- 开启"两步验证"
- 生成"应用专用密码"
- 在 EmailJS 中使用应用专用密码连接

### Q: 表单发送失败怎么办？
A: 检查：
1. Public Key 是否正确
2. Service ID 和 Template ID 是否匹配
3. 打开浏览器控制台查看错误信息
4. 确认 EmailJS 账户额度未超限

### Q: 可以自定义发件人名称吗？
A: 可以，在 EmailJS 的 Service Settings 中设置 "From Name"

## 安全提示

- Public Key 可以公开在前端代码中（EmailJS 设计如此）
- 不要暴露其他敏感信息（如 Private Key）
- 建议在 EmailJS Dashboard 中设置域名白名单，防止滥用

## 完成后

配置完成后，请删除此文件或将其添加到 `.gitignore`，因为其中可能包含您的实际配置信息。

```bash
# 删除此文件
rm EMAILJS_SETUP.md

# 或添加到 .gitignore
echo "EMAILJS_SETUP.md" >> .gitignore
```

