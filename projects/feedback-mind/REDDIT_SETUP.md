# Reddit API 設置指南

## 第一步：創建 Reddit App

1. **登錄 Reddit**
   - 打開 https://www.reddit.com
   - 用你的帳號登錄

2. **進入 App 設置**
   - 前往 https://www.reddit.com/prefs/apps
   - 點擊 "create an app" 或 "create another app"

3. **填寫 App 資訊**
   - **name:** `FeedbackMind Bot` (或任何名字)
   - **app type:** 選擇 **Script**
   - **description:** `AI tool for analyzing user feedback`
   - **about url:** (留空或填你的網站)
   - **redirect uri:** `http://localhost:3000`

4. **取得 Credentials**
   - 創建後會看到：
     - `client_id`（在 app name 下面的字串）
     - `client_secret`（secret 字串）

---

## 第二步：把 credentials 給我

完成後，請告訴我：
- `client_id`: _____________
- `client_secret`: _____________

---

## 第三步：我來測試

拿到後我會：
1. 設定環境變數
2. 測試發文功能
3. 發布驗證貼文
