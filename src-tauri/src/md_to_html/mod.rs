mod configuration;
mod contruct;
mod event;
mod parset;
mod resolve;
mod state;
mod subtokenize;
mod to_html;
mod to_mdast;
mod tokenizer;
mod util;
mod mdast;
mod message;
mod unist;

pub fn to_html_with_options(value: &str, options: &Options) -> Result<String, message::Message> {
    let (events, parse_state) = parser::parse(value, &options.parse)?;
    Ok(to_html::compile(&events, parse_state.bytes, &options.compile))
}

pub fn to_html(value: &str) -> String {
    to_html_with_options(value, &Options::default()).unwrap()
}

pub fn to_mdast(value: &str, options: &ParseOptions) -> Result<mdast::Node, message::Message> {
    let (events, parse_state) = parser::parse(value, options)?;
    let node = to_mdast::compile(&events, parse_state.bytes)?;
    Ok(node)
}
