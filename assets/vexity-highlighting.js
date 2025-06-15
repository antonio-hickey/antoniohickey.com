export default function (hljs) {
  const KEYWORDS = {
    keyword: 'let state print fn',
    literal: 'true false',
    built_in: 'sma vwma lsma ema range map drop push last first for_each'
  };

  const PARAMS = {
    className: 'params',
    begin: /\|/,
    end: /\|/,
    contains: [
      {
        className: 'variable',
        begin: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/
      }
    ]
  };

  const OPERATOR = {
    className: 'operator',
    match: /=|\+|\-|\*|\/|==|!=|<=|>=/,
    relevance: 0
  };

  const PUNCTUATION = {
    className: 'punctuation',
    match: /[,:;]/,
    relevance: 0
  };

  const METHOD_CALL = {
    className: 'function',
    begin: /\.(config|init|on_bar|push|map|drop|first|last)\b/
  };

  const FUNC_CALL = {
    className: 'title.function',
    begin: /\b[a-zA-Z_][a-zA-Z0-9_]*\b(?=\s*\()/,
    relevance: 1
  };

  const ATTR_KEY = {
    className: 'attr',
    begin: /\b[a-zA-Z_][a-zA-Z0-9_]*\b(?=\s*:)/,
    relevance: 1
  };

  const PROPERTY = {
    className: 'property',
    begin: /\.(?:[a-zA-Z_][a-zA-Z0-9_]*)\b/,
    relevance: 0
  };

  const DOT_VARIABLE = {
    className: 'variable',
    begin: /\b[a-zA-Z_][a-zA-Z0-9_]*\b(?=\s*\.)/,
    relevance: 0
  };

  const INDICATOR_KEYWORD = {
    className: 'interface',
    match: /\bIndicator\b/,
    relevance: 10
  };

  const BLOCK_CONTAINS = [
    'self',
    hljs.HASH_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.NUMBER_MODE,
    OPERATOR,
    PUNCTUATION,
    METHOD_CALL,
    FUNC_CALL,
    ATTR_KEY,
    PROPERTY,
    DOT_VARIABLE,
    PARAMS
  ];

  return {
    name: 'Vexity',
    aliases: ['vx', 'vex', 'vexity'],
    keywords: KEYWORDS,
    lexemes: /[a-zA-Z_][a-zA-Z0-9_]*/,
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      INDICATOR_KEYWORD,
      OPERATOR,
      PUNCTUATION,
      METHOD_CALL,
      FUNC_CALL,
      ATTR_KEY,
      PROPERTY,
      DOT_VARIABLE,
      PARAMS,
      {
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        contains: BLOCK_CONTAINS
      }
    ]
  };
}
