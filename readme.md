# レイアウトやCSSクラス設計の練習するよ
## 環境準備
### gulpとgulp-sass、browserifyでsass & 自動リロード
* gulp v4　になってタスクの記述の仕方が変更。
* taskほげ　→　taskの記述法が変更
* watchほげ　→　task.watchの記述法が変更
* applyほげ　→　gulpのローカルバージョンとグローバルバージョンが違う
* watchでreloadが実行されない。
〇　watch().on('change', gulp.task('reload'))
×　watch('', gulp.task('reload)) これは1回目しかリロードされない

#2 学んだこと
####  position:relative -> position:absoluteでレイアウト組む時
後続の要素をがあるときはrelative側にpaddigつけてabsolute分の領域を確保しておく
####  縦書きフォント
writing-modeで指定可能。vertical-rlはfirefoxだと右揃えにならないのでpositionのright:0で指定するほうが無難
