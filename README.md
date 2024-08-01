# RESAS Graph App - 都道府県ごとの人口遷移グラフ表示アプリ

## 開発

### 構成

| カテゴリ                  | 名前                                  |
| ------------------------- | ------------------------------------- |
| Web Application Framework | Next.js                               |
| UI Library                | React                                 |
| Programming Language      | TypeScript                            |
| Chart Library             | Highcharts                            |
| Styling                   | CSS                                   |
| Package Manager           | npm                                   |


### 環境構築

#### RESAS API から API Key を取得

- RESAS API に登録し、API Key の取得が必要

- .env.local を作成し、取得した API Key をセットする

```bash
NEXT_PUBLIC_RESAS_API_KEY=(取得した API Key)
```

#### RESAS API 概要

```
https://opendata.resas-portal.go.jp/docs/api/v1/index.html
```

#### ライブラリ の インストール

```bash
$ npm install
```

#### 開発サーバ の 起動

```bash
$ npm run dev
```

#### ブラウザ で 表示確認

- localhost:3000


# 残りタスク
## ちゃんと実装する
- 新しいPJで作る
- API通信しているので、useEffect　使う

