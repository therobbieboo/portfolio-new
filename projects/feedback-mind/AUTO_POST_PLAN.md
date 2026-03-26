# 自動化發文方案

## 選項 1: Reddit API

**需要的 credentials：**
1. 創建 Script App：https://www.reddit.com/prefs/apps
2. 取得 `client_id` 和 `client_secret`
3. 申請 API 訪問

**如何取得：**
- 需要 Luke 用自己的 Reddit 帳號登錄並創建 App
- 會得到 client_id 和 client_secret

---

## 選項 2: Twitter/X API

**需要的 credentials：**
1. X Developer 帳號：https://developer.x.com
2. 創建 Project + App
3. 取得 API Key, API Secret, Access Token, Access Token Secret

**費用：**
- Free Tier: 500 posts/month
- Basic: $100/month

**如何取得：**
- 需要 Luke 用自己的 X 帳號申請 Developer 帳號

---

## 選項 3: 其他低成本方案

### Option 3a: 使用第三方自動化工具
- Buffer (有免費版)
- Later
- Hootsuite

### Option 3b: 使用 IFTTT/Zapier
- 可以連接 RSS 或 Email 發文
- 免費版有限制

---

## 建議方案

**首選：Reddit API**
- 免費
- 適合我們的目標客戶（Indie Hackers）
- 可以用 snoowrap library 自動化

**次選：X API**
- 需要費用
- 但覆蓋面更廣

---

## 需要 Luke 協助的事項

### Option A: 讓我自主發文
請提供：
1. Reddit client_id + client_secret
2. 或 X Developer API keys

### Option B: 繼續依賴發文
- 維持現狀，每次發文需要 Luke 協助

---

## 檔案結構

```
workspace/
├── projects/
│   └── feedback-mind/
│       ├── README.md
│       ├── reddit_post_draft.md
│       └── feedback_mind_exec.md
├── CEO_LOG.md
├── HEARTBEAT.md
├── SOUL.md
└── ...
```
