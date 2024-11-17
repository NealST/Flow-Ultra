

pub struct Constructs {
  /// Attention.
    ///
    /// ```markdown
    /// > | a *b* c **d**.
    ///       ^^^   ^^^^^
    /// ```
  pub attention: bool,
  /// Autolink.
    ///
    /// ```markdown
    /// > | a <https://example.com> b <user@example.org>.
    ///       ^^^^^^^^^^^^^^^^^^^^^   ^^^^^^^^^^^^^^^^^^
    /// ```
   pub autolink: bool,
   /// Block quote.
    ///
    /// ```markdown
    /// > | > a
    ///     ^^^
    /// ```
    pub block_quote: bool,
     /// Character escape.
    ///
    /// ```markdown
    /// > | a \* b
    ///       ^^
    /// ```
    pub character_escape: bool,
    /// Character reference.
    ///
    /// ```markdown
    /// > | a &amp; b
    ///       ^^^^^
    /// ```
    pub character_reference: bool,
    /// Code (indented).
    ///
    /// ```markdown
    /// > |     a
    ///     ^^^^^
    /// ```
    pub code_indented: bool,
    /// Code (fenced).
    ///
    /// ```markdown
    /// > | ~~~js
    ///     ^^^^^
    /// > | console.log(1)
    ///     ^^^^^^^^^^^^^^
    /// > | ~~~
    ///     ^^^
    /// ```
    pub code_fenced: bool,
    /// Code (text).
    ///
    /// ```markdown
    /// > | a `b` c
    ///       ^^^
    /// ```
    pub code_text: bool,
    /// Definition.
    ///
    /// ```markdown
    /// > | [a]: b "c"
    ///     ^^^^^^^^^^
    /// ```
    pub definition: bool,
    /// Frontmatter.
    ///
    /// ````markdown
    /// > | ---
    ///     ^^^
    /// > | title: Neptune
    ///     ^^^^^^^^^^^^^^
    /// > | ---
    ///     ^^^
    /// ````
    pub frontmatter: bool,
    /// GFM: autolink literal.
    ///
    /// ```markdown
    /// > | https://example.com
    ///     ^^^^^^^^^^^^^^^^^^^
    /// ```
    pub gfm_autolink_literal: bool,
    /// GFM: footnote definition.
    ///
    /// ```markdown
    /// > | [^a]: b
    ///     ^^^^^^^
    /// ```
    pub gfm_footnote_definition: bool,
    /// GFM: footnote label start.
    ///
    /// ```markdown
    /// > | a[^b]
    ///      ^^
    /// ```
    pub gfm_label_start_footnote: bool,
    ///
    /// ```markdown
    /// > | a ~b~ c.
    ///       ^^^
    /// ```
    pub gfm_strikethrough: bool,
    /// GFM: table.
    ///
    /// ```markdown
    /// > | | a |
    ///     ^^^^^
    /// > | | - |
    ///     ^^^^^
    /// > | | b |
    ///     ^^^^^
    /// ```
    pub gfm_table: bool,
    /// GFM: task list item.
    ///
    /// ```markdown
    /// > | * [x] y.
    ///       ^^^
    /// ```
    pub gfm_task_list_item: bool,
    /// Hard break (escape).
    ///
    /// ```markdown
    /// > | a\
    ///      ^
    ///   | b
    /// ```
    pub hard_break_escape: bool,
    /// Hard break (trailing).
    ///
    /// ```markdown
    /// > | a␠␠
    ///      ^^
    ///   | b
    /// ```
    pub hard_break_trailing: bool,
    /// Heading (atx).
    ///
    /// ```markdown
    /// > | # a
    ///     ^^^
    /// ```
    pub heading_atx: bool,
    /// Heading (setext).
    ///
    /// ```markdown
    /// > | a
    ///     ^^
    /// > | ==
    ///     ^^
    /// ```
    pub heading_setext: bool,
    /// HTML (flow).
    ///
    /// ```markdown
    /// > | <div>
    ///     ^^^^^
    /// ```
    pub html_flow: bool,
    /// HTML (text).
    ///
    /// ```markdown
    /// > | a <b> c
    ///       ^^^
    /// ```
    pub html_text: bool,
    /// Label start (image).
    ///
    /// ```markdown
    /// > | a ![b](c) d
    ///       ^^
    /// ```
    pub label_start_image: bool,
    /// Label start (link).
    ///
    /// ```markdown
    /// > | a [b](c) d
    ///       ^
    /// ```
    pub label_start_link: bool,
    /// Label end.
    ///
    /// ```markdown
    /// > | a [b](c) d
    ///         ^^^^
    /// ```
    pub label_end: bool,
    /// List items.
    ///
    /// ```markdown
    /// > | * a
    ///     ^^^
    /// ```
    pub list_item: bool,
    /// Math (flow).
    ///
    /// ```markdown
    /// > | $$
    ///     ^^
    /// > | \frac{1}{2}
    ///     ^^^^^^^^^^^
    /// > | $$
    ///     ^^
    /// ```
    pub math_flow: bool,
    /// Math (text).
    ///
    /// ```markdown
    /// > | a $b$ c
    ///       ^^^
    /// ```
    pub math_text: bool,
    /// MDX: ESM.
    ///
    /// ```markdown
    /// > | import a from 'b'
    ///     ^^^^^^^^^^^^^^^^^
    /// ```
    ///
    /// > 👉 **Note**: to support ESM, you *must* pass
    /// > [`mdx_esm_parse`][MdxEsmParse] in [`ParseOptions`][] too.
    /// > Otherwise, ESM is treated as normal markdown.
    pub mdx_esm: bool,
    /// MDX: expression (flow).
    ///
    /// ```markdown
    /// > | {Math.PI}
    ///     ^^^^^^^^^
    /// ```
    ///
    /// > 👉 **Note**: You *can* pass
    /// > [`mdx_expression_parse`][MdxExpressionParse] in [`ParseOptions`][]
    /// > too, to parse expressions according to a certain grammar (typically,
    /// > a programming language).
    /// > Otherwise, expressions are parsed with a basic algorithm that only
    /// > cares about braces.
    pub mdx_expression_flow: bool,
    /// MDX: expression (text).
    ///
    /// ```markdown
    /// > | a {Math.PI} c
    ///       ^^^^^^^^^
    /// ```
    ///
    /// > 👉 **Note**: You *can* pass
    /// > [`mdx_expression_parse`][MdxExpressionParse] in [`ParseOptions`][]
    /// > too, to parse expressions according to a certain grammar (typically,
    /// > a programming language).
    /// > Otherwise, expressions are parsed with a basic algorithm that only
    /// > cares about braces.
    pub mdx_expression_text: bool,
    /// MDX: JSX (flow).
    ///
    /// ```markdown
    /// > | <Component />
    ///     ^^^^^^^^^^^^^
    /// ```
    ///
    /// > 👉 **Note**: You *must* pass `html_flow: false` to use this,
    /// > as it’s preferred when on over `mdx_jsx_flow`.
    ///
    /// > 👉 **Note**: You *can* pass
    /// > [`mdx_expression_parse`][MdxExpressionParse] in [`ParseOptions`][]
    /// > too, to parse expressions in JSX according to a certain grammar
    /// > (typically, a programming language).
    /// > Otherwise, expressions are parsed with a basic algorithm that only
    /// > cares about braces.
    pub mdx_jsx_flow: bool,
    /// MDX: JSX (text).
    ///
    /// ```markdown
    /// > | a <Component /> c
    ///       ^^^^^^^^^^^^^
    /// ```
    ///
    /// > 👉 **Note**: You *must* pass `html_text: false` to use this,
    /// > as it’s preferred when on over `mdx_jsx_text`.
    ///
    /// > 👉 **Note**: You *can* pass
    /// > [`mdx_expression_parse`][MdxExpressionParse] in [`ParseOptions`][]
    /// > too, to parse expressions in JSX according to a certain grammar
    /// > (typically, a programming language).
    /// > Otherwise, expressions are parsed with a basic algorithm that only
    /// > cares about braces.
    pub mdx_jsx_text: bool,
    /// Thematic break.
    ///
    /// ```markdown
    /// > | ***
    ///     ^^^
    /// ```
    pub thematic_break: bool,
}

impl Default for Constructs {
  /// `CommonMark`.
    ///
    /// `CommonMark` is a relatively strong specification of how markdown
    /// works.
    /// Most markdown parsers try to follow it.
    ///
    /// For more information, see the `CommonMark` specification:
    /// <https://spec.commonmark.org>.
    fn default() -> Self {
      Self {
        attention: true,
        autolink: true,
        block_quote: true,
        character_escape: true,
        character_reference: true,
        code_indented: true,
        code_fenced: true,
        code_text: true,
        definition: true,
        frontmatter: true,
        gfm_autolink_literal: false,
        gfm_label_start_footnote: false,
        gfm_footnote_definition: false,
        gfm_strikethrough: false,
        gfm_table: false,
        gfm_task_list_item: false,
        hard_break_escape: true,
        hard_break_trailing: true,
        heading_atx: true,
        heading_setext: true,
        html_flow: true,
        html_text: true,
        label_start_image: true,
        label_start_link: true,
        label_end: true,
        list_item: true,
        math_flow: false,
        math_text: false,
        mdx_esm: false,
        mdx_expression_flow: false,
        mdx_expression_text: false,
        mdx_jsx_flow: false,
        mdx_jsx_text: false,
        thematic_break: true,
      }
    }
}

impl Constructs {
  /// GFM.
    ///
    /// GFM stands for **GitHub flavored markdown**.
    /// GFM extends `CommonMark` and adds support for autolink literals,
    /// footnotes, strikethrough, tables, and tasklists.
    ///
    /// For more information, see the GFM specification:
    /// <https://github.github.com/gfm/>.
  
  pub fn gfm() -> Self {
    Self {
      gfm_autolink_literal: true,
      gfm_footnote_definition: true,
      gfm_label_start_footnote: true,
      gfm_strikethrough: true,
      gfm_table: true,
      gfm_task_list_item: true,
      ..Self::default()
    }
  }

  /// MDX.
    ///
    /// This turns on `CommonMark`, turns off some conflicting constructs
    /// (autolinks, code (indented), and HTML), and turns on MDX (ESM,
    /// expressions, and JSX).
    ///
    /// For more information, see the MDX website:
    /// <https://mdxjs.com>.
    ///
    /// > 👉 **Note**: to support ESM, you *must* pass
    /// > [`mdx_esm_parse`][MdxEsmParse] in [`ParseOptions`][] too.
    /// > Otherwise, ESM is treated as normal markdown.
    /// >
    /// > You *can* pass
    /// > [`mdx_expression_parse`][MdxExpressionParse]
    /// > to parse expressions according to a certain grammar (typically, a
    /// > programming language).
    /// > Otherwise, expressions are parsed with a basic algorithm that only
    /// > cares about braces.
    pub fn mdx() -> Self {
      Self {
        autolink: false,
        code_indented: false,
        html_flow: false,
        html_text: false,
        mdx_esm: true,
        mdx_expression_flow: true,
        mdx_expression_text: true,
        mdx_jsx_flow: true,
        mdx_jsx_text: true,
        ..Self::default()
      }
    }
}

/// Configuration to control how to compile to html
#[allow(clippy::struct_expressive_bools)]
#[derive(Clone, Debug, Default)]
pub struct CompileOptions {
  pub allow_dangerous_html: bool,
  pub allow_dangerous_protocol: bool,

  #[allow(clippy::doc_markdown)]
  pub default_line_ending: LineEnding,
  pub gfm_footnote_label: Option<String>,
  pub gfm_footnote_label_tag_name: Option<String>,
  pub gfm_footnote_label_attributes: Option<String>,
  pub gfm_footnote_back_label: Option<String>,
  pub gfm_footnote_clobber_prefix: Option<String>,
  pub gfm_task_list_item_checkable: bool,
  pub gfm_tagfilter: bool,
}

impl CompileOptions {
  pub fn gfm() -> Self {
    Self {
      gfm_tagfilter: true,
      ..Self::default()
    }
  }
}

/// Configuration that describes how to parse from markdown.
#[allow(clippy::struct_excessive_bools)]
pub struct ParseOptions {
  pub constructs: Constructs,
  pub gfm_strikethrough_single_tilde: bool,
  pub math_text_single_dollar: bool,
  pub mdx_expression_parse: Option<Box<MdxExpressionParse>>,
  pub mdx_esm_parse: Option<Box<MdxEsmParse>>,
}

impl fmt::Debug for ParseOptions {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    f.debug_struct("ParseOptions")
      .field("constructs", &self.constructs)
      .field("gfm_strikethrough_single_tilde", &self.gfm_strikethrough_single_tilde)
      .field("math_text_single_dollar", &self.math_text_single_dollar)
      .field("mdx_expression_parse", &self.mdx_expression_parse.as_ref().map(|_d| "[Function]"),)
      .field("mdx_esm_parse", &self.mdx_esm_parse.as_ref().map(|_d| "[Function]"))
      .finish()
  }
}

impl Default for ParseOptions {
  fn default() -> Self {
    Self {
      constructs: Constructs::default(),
      gfm_strikethrough_single_tilde: true,
      math_text_single_dollar: true,
      mdx_expression_parse: None,
      mdx_esm_parse: None,
    }
  }
}

impl ParseOptions {
  pub fn gfm() -> Self {
    Self {
      constructs: Constructs::gfm(),
      ..Self::default()
    }
  }

  pub fn mdx() -> Self {
    Self {
      constructs: Constructs::mdx(),
      ..Self::default()
    }
  }
}
