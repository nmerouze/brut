var React = require('react');
var render = require('react-dom').render;

var Link = function(props) {
  return <a href={props.href} className="link">{props.children}</a>
}

var Button = function(props) {
  return <button className="btn">{props.children}</button>
}

var Panel = function(props) {
  return <div className="panel">{props.children}</div>
}

Panel.Title = function(props) {
  return <h2 className="panel__title">{props.children}</h2>
}

Panel.Body = function(props) {
  return <div className="panel__body">{props.children}</div>
}

var Table = function(props) {
  return <table className="table">{props.children}</table>
}

Table.Row = function(props) {
  return <tr className="table__row">{props.children}</tr>
}

Table.Header = function(props) {
  return <th className="table__header">{props.children}</th>
}

Table.Cell = function(props) {
  return <td className="table__cell">{props.children}</td>
}

render(
  <div>
    <div className="container">
      <Link href="#">Test</Link>
    </div>
    <div className="container">
      <Panel>
        <Panel.Title>Buttons</Panel.Title>
        <Panel.Body>
          <Button>Button</Button>
        </Panel.Body>
      </Panel>
      <Panel>
        <Panel.Title>Typography</Panel.Title>
        <Panel.Body>
          <p>A list.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2
              <ul>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </li>
          </ul>
          <blockquote>Test</blockquote>
          <h1 className="h1">Test</h1>
          <h2 className="h2">Test</h2>
          <h3 className="h3">Test</h3>
          <h4 className="h4">Test</h4>
          <h5 className="h5">Test</h5>
          <h6 className="h6">Test</h6>
          <h1 className="h1">Test</h1>
          <h2 className="subtitle h2">Subtitle</h2>
        </Panel.Body>
      </Panel>
      <Table>
        <Table.Row>
          <Table.Header>Name</Table.Header>
          <Table.Header>Type</Table.Header>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sencha</Table.Cell>
          <Table.Cell>Green</Table.Cell>
        </Table.Row>
      </Table>
    </div>
  </div>,
  document.getElementById('root')
);
