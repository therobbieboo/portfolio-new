# 網頁伺服器部署方案

## 選項 1: Vercel（最推薦 🏆）

**費用：** 免費（個人用途）

**優點：**
- 免費額度：100GB 流量/月
- 自動 HTTPS
- 全球 CDN，速度快
- 一鍵部署

**流程：**

```
1. 註冊 https://vercel.com（用 GitHub 登錄）
2. 安裝 Vercel CLI：
   npm i -g vercel
3. 進入專案資料夾：
   cd /root/.openclaw/workspace/projects/feedback-mind
4. 部署：
   vercel
5. 選擇選項：
   - Set up and deploy? Yes
   - Which scope? Your username
   - Want to override settings? No
6. 完成！會給你一個網址
```

---

## 選項 2: Netlify

**費用：** 免費

**流程：**

```
1. 註冊 https://netlify.com
2. 把 landing-page.html 拖進去
3. 完成！自動上線
```

---

## 選項 3: GitHub Pages

**費用：** 免費

**流程：**

```
1. 創建 GitHub repo
2. 上傳 landing-page.html
3. 進入 Settings → Pages
4. 選擇 main branch
5. 完成
```

---

## 選項 4: 傳統伺服器（需要技術）

| 服務商 | 費用 | 特點 |
|--------|------|------|
| DigitalOcean | $4/月 | 最便宜 |
| AWS EC2 | $5/月 | 功能齊全 |
| Linode | $5/月 | 穩定 |

**需要自己：**
- 安裝 Nginx/Apache
- 上傳檔案
- 設定 HTTPS（用 Let's Encrypt）

---

## 🎯 建議

**首選：Vercel**
- 免費
- 快速
- 以後可以輕鬆升級

**次選：Netlify**
- 更簡單
- 拖放上傳

---

## 📋 你需要做的

### Vercel 方案：

1. **註冊 Vercel**
   - 打開 https://vercel.com
   - 用 GitHub 帳號登錄（推薦）

2. **安裝 Node.js**（如果沒有）
   - 我可以幫你檢查

3. **部署**
   - 我執行命令
   - 給你網址

---

你想要用哪個方案？