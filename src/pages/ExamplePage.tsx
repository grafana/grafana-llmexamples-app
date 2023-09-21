import React, { useState } from 'react';

import { llms } from '@grafana/experimental';
import { PluginPage } from '@grafana/runtime';
import { Button, Input, Spinner } from '@grafana/ui';
import { useOpenaiStreamHook } from '../hooks/hooks';
export function ExamplePage() {
  // The current input value.
  const [input, setInput] = useState('');

  const {
    setMessages,
    reply,
    started,
    finished,
    loading,
    error,
    value
  } = useOpenaiStreamHook();

  return (
    <PluginPage>
      {value?.enabled ? (
        <>
          <Input
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder="Enter a message"
          />
          <br />
          <Button
            type="submit"
            onClick={() => setMessages((oldMessages: llms.openai.Message[]) => [
              { role: 'system', content: 'You are a cynical assistant.' },
              { role: 'user', content: input}
            ])}
            disabled={(error !== undefined) || loading || started}
          >
            Submit
          </Button>
          <br />
          <div>{loading ? <Spinner /> : reply}</div>
          <div>{started ? "Response is started" : "Response is not started"}</div>
          <div>{finished ? "Response is finished" : "Response is not finished"}</div>
        </>
      ) : (
        <div>LLM plugin not enabled.</div>
      )}
    </PluginPage>
  );
}
