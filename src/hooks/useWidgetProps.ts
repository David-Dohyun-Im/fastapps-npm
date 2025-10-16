import { useState, useEffect } from 'react';

/**
 * Hook to get widget props from ChatGPT tool output.
 * 
 * @returns The tool output data passed from the MCP server
 * 
 * @example
 * ```tsx
 * import { useWidgetProps } from 'fastapps';
 * 
 * export default function MyWidget() {
 *   const { message, count } = useWidgetProps();
 *   return <div>{message} - {count}</div>;
 * }
 * ```
 */
export function useWidgetProps<T = any>(): T {
  const [props, setProps] = useState<T>({} as T);
  
  useEffect(() => {
    // Official spec: use window.openai.toolOutput
    if (window.openai?.toolOutput) {
      setProps(window.openai.toolOutput as T);
    }
  }, []);
  
  return props;
}

