# X/Twitter API 設置指南

## 第一步：申請 Developer 帳號

1. **進入 X Developer Portal**
   - 打開 https://developer.x.com
   - 用你的 X 帳號登錄

2. **申請 Developer 訪問**
   - 點擊 "Apply"
   - 選擇 "Making products" 或 "Academic research"
   - 填寫：
     - **Name:** 你的名字
     - **Country:** United States
     - "What are you building?" 填：
       > "Building an AI tool to help indie hackers analyze user feedback automatically"
   - 勾選同意條款
   - 點擊 "Submit"

3. **等待批准**（通常幾分鐘內）

---

## 第二步：創建 Project 和 App

1. **進入 Dashboard**
   - 批准後，進入 https://developer.x.com/dashboard

2. **創建 Project**
   - 點擊 "Create project"
   - **Name:** `FeedbackMind`
   - 選擇 **Free** 等級（500 posts/month 免費）

3. **創建 App**
   - 在 Project 內，點擊 "Create App"
   - **Name:** `feedbackmind-bot`（必須 unique）
   - 取得：
     - `Consumer Key`
     - `Secret Key`
     - `Bearer Token: AAAAAAAAAAAAAAAAAAAAAE0z8QEAAAAAHrnnHWKPQZEZcTP9OhfT7enCSuI%3DsVPhzFWPiDOYR1GVAqN1v7HC5I33p9NE5vI0nuZ94KJ7bg7jOj`

4. **生成 Access Token**
   - 進入 App 設置
   - 點擊 "Generate" 或 "Create" (under Access Token and Secret)
   - 取得：
     - `Access Token`
     - `Access Token Secret`

---

## 第三步：把 credentials 給我

完成後，請告訴我：
- `Consumer Key`: JZn62M7d38VUf4Mp15mp7nLtm
- `Consumer Key Secret`: FjCIXLwJlr2iaufv1g6RgvlAGNUkQRWrOTLRhSnzyMixg2vIOE
- `Access Token`: 1632650511521566720-3B2PloiJJ00YONFxGcOMHVdyPfluM3
- `Access Token Secret`: g7nCzP17BVn89XZUVjLApVtsLkGc4zZXMdEuil2zD8dMH
- `Client ID`: Uk10QmkybnlvQTF3bml5cFlSNlQ6MTpjaQ
- `Client Secret`: IfECMvV5eMwTyiiMjyrl4Jmj9MHGelu8DzXwrAoXtQAQhBq-a6

---

## 費用說明

| 等級 | 費用 | 每月發文數 |
|------|------|-----------|
| Free | $0 | 500 |
| Basic | $100 | 10,000 |

**對於初期驗證來說，Free tier 足夠了！**

---

## 第四步：我來測試

拿到後我會：
1. 設定環境變數
2. 測試發布推文
3. 開始驗證痛點
