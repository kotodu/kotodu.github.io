# history.json
***学歴・職歴***

## id
- 6桁のNumber
    - 西暦4桁+追加順の固有番号2桁
## y
- 1-12のNumber
## m
- 1-31のNumber
## type
- 1か2のNumber
    - 1:学業
    - 2:仕事
## do
- 0-2のNumber
    - 0:その他
    - 1:入る
    - 2:出る
## desc
- 全角12文字以内のstring

# certification.json
## id
- 6桁のNumber
    - yyyymm
## name
- string
## passed
- 合否を示すboolean
## score
- Number
    - 得点率%
## desc
- string

# works.json(検討中)
## id
- 6桁のNumber
    - 西暦4桁+追加順の固有番号2桁

## isPinned
- 固定するかどうかを示すboolean
    - ひとまずはこの値に関わらずリスト表示

## type
- 媒体
    - webアプリ
    - webサイト
    - illustratorスクリプト

## name
- 作品名

## caption
- 一行説明文
- 配列にして改行位置で区切る？\nで1つの値に？

# sns.json(検討中)
- id
- snsScreen
- snsIconUrl
- userid
- username
- url
- urlScreen

# pgskills.json(検討中)
- id
- type
    - 言語
    - ツール
    - サービス
    - フレームワーク
    - ライブラリ
- 自信/実力を表す項目？
- 紐付けられた代表作品配列？
    - id
    - 名前
    - 説明
    - URL
