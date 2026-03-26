# X API App 設置 - 詳細步驟

## 當你創建 App 時，填寫以下資料：

### App Info

| 欄位 | 填寫內容 | 說明 |
|------|---------|------|
| **App name** | `feedbackmind-bot` | 必須 unique |
| **Callback URI / Redirect URL** | `http://localhost:3000` | 開發用，隨便填一個網址即可 |
| **Website URL** | `https://github.com` | 隨便填一個網址 |

### Organization Info (可選)

| 欄位 | 填寫內容 |
|------|---------|
| **Organization name** | `Inner Product` 或不填 |
| **Organization URL** | `https://github.com` 或不填 |
| **Terms of Service** | `https://github.com` 或不填 |
| **Privacy Policy** | `https://github.com` 或不填 |

---

## ⚠️ 重要：設定權限

創建 App 後：

1. **進入 App 設置頁面**
2. 找到 **User authentication settings** 或 **App permissions**
3. 設定：
   - **OAuth 1.0a**: 選擇 **Read and Write** ✅
   - **OAuth 2.0**: 選擇 **Read and Write** ✅
4. **重新生成 Access Token**
   - 因為修改權限後，舊的 token 會失效
   - 進入 Keys and Tokens → Regenerate

---

## 完整流程截圖說明

```
1. Developer Portal → Dashboard
2. 點擊你的 Project
3. 點擊 "Create App" → 填上表
4. App 創建完成後，點擊 App 進入設置
5. 找到 "User authentication settings"
6. 設定 OAuth 1.0a = Read and Write
7. 回到 "Keys and Tokens"
8. 點擊 "Regenerate" (Access Token)
9. 取得新的 token 後告訴我
```

---

完成後把新的 Access Token 和 Secret 給我，我再測試！
- `Consumer Key`: JZn62M7d38VUf4Mp15mp7nLtm
- `Consumer Key Secret`: FjCIXLwJlr2iaufv1g6RgvlAGNUkQRWrOTLRhSnzyMixg2vIOE
- `Access Token`: 1632650511521566720-3B2PloiJJ00YONFxGcOMHVdyPfluM3
- `Access Token Secret`: g7nCzP17BVn89XZUVjLApVtsLkGc4zZXMdEuil2zD8dMH
- `Client ID`: Uk10QmkybnlvQTF3bml5cFlSNlQ6MTpjaQ
- `Client Secret`: IfECMvV5eMwTyiiMjyrl4Jmj9MHGelu8DzXwrAoXtQAQhBq-a6