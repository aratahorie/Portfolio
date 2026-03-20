# 文献の追加方法

`bio/horie.bib` を更新して push するだけで、CV PDF と Publications ページが自動更新されます。

## 手順

### 1. BibTeX エントリを追加

`bio/horie.bib` に新しいエントリを追加します。

```bibtex
@inproceedings{horie2026example,
  title     = {Example Paper Title},
  author    = {Horie, Arata and Imura, Masataka},
  booktitle = {Proceedings of CHI 2026},
  year      = {2026},
  doi       = {10.1145/xxxxxxx.xxxxxxx}
}
```

**対応する BibTeX タイプ:**

| BibTeX タイプ | 表示カテゴリ |
|---|---|
| `@article` | Journal (J) |
| `@inproceedings` | Conference (C) |
| `@misc` | Conference (C) |

> **Note:** Demo や Emerging Tech は `@inproceedings` で登録し、次のステップで `type` を上書きします。

### 2. メタデータを追加（任意）

受賞、URL、タイプ補正などがある場合は `site/src/data/publication-meta.json` に追記します。

```json
{
  "horie2026example": {
    "award": "Best Paper Award",
    "url": "https://doi.org/10.1145/xxxxxxx.xxxxxxx",
    "type": "demo",
    "firstAuthor": true
  }
}
```

| キー | 説明 |
|---|---|
| `award` | 受賞名（🏆 バッジで表示） |
| `url` | 論文リンク（DOI がない場合に使用） |
| `type` | `"demo"` を指定すると Demo (D) カテゴリに変更 |
| `firstAuthor` | `true` で筆頭著者マーク |

### 3. Push する

```bash
git add bio/horie.bib site/src/data/publication-meta.json
git commit -m "Add new publication: horie2026example"
git push
```

GitHub Actions が自動で以下を実行します：

1. `parse-bib.mjs` → `publications.json` を生成
2. LaTeX → CV PDF をビルド
3. 両方を commit & push
4. サイトを GitHub Pages にデプロイ

## Awards / Patents の追加

BibTeX に含まれない受賞歴・特許は `site/src/data/static-meta.ts` を直接編集してください。

## ローカルで確認する場合

```bash
# パーサーを手動実行
node scripts/parse-bib.mjs

# 開発サーバーで確認
cd site && npx astro dev
# → http://localhost:4321/publications
```
