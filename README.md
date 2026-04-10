# 棱镜人格实验室

一个原创的静态人格测试站点。

## 功能

- 100 道原创题目
- 每次随机抽 30 题
- 10 个维度，每个维度抽 3 题
- 16 个常规人格原型
- 1 个低匹配兜底人格 `GLITCH`

## 运行

直接打开 `index.html` 即可。

如果想用本地服务运行：

```bash
cd /Users/guoxl/Documents/Playground/prism-persona-lab
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173`。

## 主要文件

- `index.html`: 页面结构
- `styles.css`: 视觉样式
- `app.js`: 题库、人格库、抽题与评分逻辑
- `.github/workflows/deploy-pages.yml`: GitHub Pages 部署流程

## GitHub Pages

仓库推送后，这个项目可以作为纯静态站托管在 GitHub Pages。

如果仓库已经启用 Pages 并选择 `GitHub Actions` 作为来源，默认访问地址会是：

`https://guoxinling.github.io/sbti-test/`

## 你后续最可能会改的地方

- 题库：
  - `app.js` 里的 `DIMENSIONS`
  - 每个维度 `bank` 有 10 题
- 人格解析：
  - `app.js` 里的 `PERSONALITY_TYPES`
  - 兜底人格在 `FALLBACK_TYPE`
- 抽题规则：
  - `buildSessionQuestions()`
- 评分阈值：
  - `sumToLevel()`
  - `computeResult()` 里的低匹配阈值
