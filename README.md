# floydr

React hooks for Floydr ChatGPT widgets.

## Installation

```bash
npm install floydr
```

## Usage

### useWidgetProps

Get data passed from your MCP tool to your React widget:

```jsx
import React from 'react';
import { useWidgetProps } from 'floydr';

export default function MyWidget() {
  const { message, count } = useWidgetProps();
  
  return (
    <div>
      <h1>{message}</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```

### useWidgetState

Manage stateful data that persists in ChatGPT:

```jsx
import React from 'react';
import { useWidgetState } from 'floydr';

export default function Counter() {
  const [state, setState] = useWidgetState({ count: 0 });
  
  return (
    <button onClick={() => setState({ count: state.count + 1 })}>
      Count: {state?.count || 0}
    </button>
  );
}
```

### useOpenAiGlobal

Access ChatGPT global values like theme, display mode, etc:

```jsx
import React from 'react';
import { useOpenAiGlobal } from 'floydr';

export default function ThemedWidget() {
  const theme = useOpenAiGlobal('theme');
  const displayMode = useOpenAiGlobal('displayMode');
  
  return (
    <div className={`theme-${theme} mode-${displayMode}`}>
      <h1>Themed Widget</h1>
    </div>
  );
}
```

## TypeScript

This package is written in TypeScript and includes type definitions.

```tsx
import { useWidgetProps } from 'floydr';

interface MyWidgetProps {
  message: string;
  count: number;
}

export default function MyWidget() {
  const { message, count } = useWidgetProps<MyWidgetProps>();
  // message and count are properly typed!
}
```

## License

MIT

