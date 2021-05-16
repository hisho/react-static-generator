const path = require('path');

//styleLintの除外するファイルの設定
const IGNORE_FILES = [
  path.resolve(process.cwd(),'dist/**'),
  path.resolve(process.cwd(),'src/styles/foundations/_reset.css')
];


//自動修正
const AutoFixable = {
  //インデント
  indentation: 2,
  //改行コード
  // linebreaks: "windows",
  //隣接する空行の数を制限します。
  // "max-empty-lines": [2, {
  //   ignore: ["comments"]
  // }],
  //行末の空白を許可しません。
  // "no-eol-whitespace": [true, {
  //   ignore: ["empty-lines"]
  // }],
  //余分なセミコロンを許可しません。
  "no-extra-semicolons": true,
  //略記プロパティで冗長な値を許可しません。
  "shorthand-property-no-redundant-values": true,
  //セレクター内の隣接する空行の数を制限します
  "selector-max-empty-lines": 0,
  //16進数の色には小文字または大文字を指定します
  "color-hex-case": "lower",
  //16進色の短い表記または長い表記を指定します。
  "color-hex-length": "short",
  //関数内の隣接する空行の数を制限します。
  // "function-max-empty-lines": 0,
  //関数名には小文字または大文字を指定します。
  // "function-name-case": "lower",
  //1未満の小数の場合、先行ゼロを要求または禁止します。
  "number-leading-zero": "never",
  //数字の末尾のゼロを禁止します。
  "number-no-trailing-zeros": true,
  //文字列を一重引用符または二重引用符で囲みます。
  "string-quotes": "single",
  //長さゼロの単位を許可しません。
  "length-zero-no-unit": [true, {
    ignore: ["custom-properties"]
  }],
  //ユニットには小文字または大文字を指定します。
  "unit-case": "lower",
  //キーワード値には小文字または大文字を指定します。
  "value-keyword-case": "lower",
  //プロパティには小文字または大文字を指定します。
  "property-case": "lower",
  //ルール名に小文字または大文字を指定します。
  // "at-rule-name-case": "lower",
  //規則名の後に単一のスペースが必要です。
  // "at-rule-name-space-after": "always",
  //at-rulesのセミコロンの後に改行が必要です。
  // "at-rule-semicolon-newline-after": "always",
  //at-rulesのセミコロンの前に単一のスペースを必要とするか、空白を許可しません。
  // "at-rule-semicolon-space-before": "never",
  //メディア機能でコロンの後に単一のスペースを必要とするか、空白を許可しません。
  // "media-feature-colon-space-after": "always",
  //メディア機能でコロンの前にスペースを1つ入れるか、空白を許可しないでください。
  // "media-feature-colon-space-before": "never",
  //メディア機能名には小文字または大文字を指定します。
  // "media-feature-name-case": "lower",
  //メディア機能内の括弧の内側に単一のスペースを必要とするか、空白を許可しません。
  // "media-feature-parentheses-space-inside": "never",
  //メディア機能で範囲演算子の後に単一のスペースを必要とするか、空白を許可しません。
  // "media-feature-range-operator-space-after": "always",
  //メディア機能の範囲演算子の前に、単一のスペースを必要とするか、空白を許可しません。
  // "media-feature-range-operator-space-before": "always",
  //セレクタリストのカンマの前に改行を要求するか、空白を許可しません。
  // "selector-list-comma-newline-before": "never-multi-line",
  //単一のスペースを要求するか、セレクターリストのコンマの後に空白を許可しません。
  // "selector-list-comma-space-after": "always",
  //属性セレクター内の括弧の内側に空白を1つ入れるか、空白を許可しないでください。
  // "selector-attribute-brackets-space-inside": "never",
  //属性セレクター内の演算子の後に単一のスペースを必要とするか、空白を許可しません。
  // "selector-attribute-operator-space-after": "never",
  //属性セレクター内の演算子の前に単一のスペースを必要とするか、空白を許可しません。
  // "selector-attribute-operator-space-before": "never",
  //属性値の引用符を要求または禁止します。
  // "selector-attribute-quotes": "always",
  //セレクタのコンビネータの後に単一のスペースを必要とするか、空白を許可しません。
  // "selector-combinator-space-after": "always",
  //セレクターのコンビネーターの前に単一のスペースを必要とするか、空白を許可しません。
  // "selector-combinator-space-before": "always",
  //セレクタの子孫コンビネータにスペース以外の文字を許可しません。
  // "selector-descendant-combinator-no-non-space": true,
  //擬似クラスセレクターには小文字または大文字を指定します。
  "selector-pseudo-class-case": "lower",
  //単一クラスのスペースを必要とするか、擬似クラスセレクター内の括弧の内側の空白を許可しません。
  // "selector-pseudo-class-parentheses-space-inside": "never",
  //擬似要素セレクターには小文字または大文字を指定します。
  "selector-pseudo-element-case": "lower",
  //該当する擬似要素に単一または二重のコロン表記を指定します。
  // "selector-pseudo-element-colon-notation": "double",
  //タイプセレクタには小文字または大文字を指定します。
  "selector-type-case": "lower",
  //ブロックの右中括弧の前に空行を要求または禁止します。
  // "block-closing-brace-empty-line-before": "never",
  //ブロックの右中括弧の後に改行を必要とするか、空白を許可しません。
  // "block-closing-brace-newline-after": ["always", {
  //   ignoreAtRules: ["if", "else"]
  // }],
  //ブロックを閉じる中括弧の前に改行を要求するか、空白を禁止します。
  // "block-closing-brace-newline-before": "always-multi-line",
  //ブロックの開始ブレースの後に改行が必要です。
  // "block-opening-brace-newline-after": "always-multi-line",
  //ブロックの開始ブレースの前に改行を要求するか、空白を許可しません。
  // "block-opening-brace-newline-before": "never-single-line",
  //ブロックの開始ブレースの前に単一のスペースを必要とするか、空白を許可しません。
  // "block-opening-brace-space-before": "always"
};

module.exports = {
  plugins: [
    "stylelint-scss",
    "stylelint-high-performance-animation"
  ],
  extends: [
    "stylelint-config-recess-order"
  ],
  rules: {
    ...AutoFixable,
    "plugin/no-low-performance-animation-properties": [true, {
      ignoreProperties: [
        'height',
        'fill',
        'color',
        'visibility',
        'box-shadow',
        'margin-top',
        'border-color',
        'background-color'
      ]
    }],
    "scss/at-rule-no-unknown": [true, {
      ignoreAtRules: [
        "tailwind",
        "screen",
        "responsive"
      ]
    }],
    "selector-type-no-unknown": [true, {
      ignoreTypes: ["_"],
    }],
    //無効な16進数の色を許可しません。
    "color-no-invalid-hex": [true, {
      message: "hexが無効の数値です"
    }],
    //calc関数内で無効な式を許可しません。
    "function-calc-no-invalid": [true, {
      message: "calc関数が無効な式です。"
    }],
    //文字列の（エスケープされていない）改行を許可しません。
    "string-no-newline": [true, {
      message: "文字列の改行をエスケープしてください。"
    }],
    //不明なユニットを許可しません。
    "unit-no-unknown": [true, {
      message: "CSS仕様で定義されている単位ではありません。"
    }],
    //不明なプロパティを許可しません。
    "property-no-unknown": [true, {
      ignoreSelectors: [":root"],
      message: "CSS仕様で定義されているプロパティではありません。"
    }],
    //宣言ブロック内で重複するプロパティを許可しません。
    "declaration-block-no-duplicate-properties": [true, {
      message: "プロパティが重複しています。"
    }],
    //未知の擬似クラスセレクターを許可しません。
    "selector-pseudo-class-no-unknown": [true, {
      message: "存在しない疑似クラスです。"
    }],
    //未知の疑似要素セレクターを許可しません。
    "selector-pseudo-element-no-unknown": [true, {
      message: "存在しない擬似要素です。"
    }],
    "selector-max-type": [1, {
      message: "classを付けてください。"
    }],
    "declaration-no-important": [true, {
      message: "importantは使用禁止です。"
    }],
    "selector-max-id": [0, {
      message: "IDは使用禁止です。"
    }],
    "max-nesting-depth": [3, {
      ignore: ["pseudo-classes"],
      ignoreAtRules: [/include/, /media/],
      message: "ネストが深すぎます。"
    }],
    "no-descending-specificity": null,
    "no-empty-source": null,
    "block-no-empty": null
  },
  ignoreFiles: IGNORE_FILES
};
