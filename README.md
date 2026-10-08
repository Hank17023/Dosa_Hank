# 小梅的生日網站 ♡

這是一個可直接部署到 GitHub Pages 的單頁生日網站。

## 修改最重要的地方

打開 `script.js`：

```js
const START_DATE = "2026-01-01";
```

把 `2026` 改成你們真正開始交往的年份。

## 加入照片

目前 `index.html` 的照片位置是 placeholder。
之後可以把：

```html
<div class="placeholder">♡<small>PHOTO 01</small></div>
```

改成：

```html
<div class="placeholder photo" style="background-image:url('images/01.jpg')">
  <small>PHOTO 01</small>
</div>
```

並建立：

```text
images/
  01.jpg
  02.jpg
  03.jpg
```

## GitHub Pages

1. 建立 GitHub repository
2. 上傳 `index.html`、`style.css`、`script.js`
3. Repository → Settings → Pages
4. Source 選 `Deploy from a branch`
5. Branch 選 `main` / `root`
6. 儲存後等待 GitHub 部署

## 建議

先把網站發布測試一次，再慢慢加入照片、你們的回憶、背景音樂和真正的生日驚喜。
