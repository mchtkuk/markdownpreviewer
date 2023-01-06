import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  const [text, setText] = useState(`

  TYPE SOMETHING TO START

  EXAMPLES
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
  `)

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <h1>Markdown Project</h1>
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value)
      }} value={text}></textarea>
      <div id='preview-border'>
      <div id="preview"
      dangerouslySetInnerHTML={{__html: marked(text),}}></div>
      </div>
      <footer><i>Made by Mücahit Kuk</i></footer>
    </div>
    
  );
}

export default App;
