import {
  type LanguageModelV2,
  type LanguageModelV2CallWarning,
  UnsupportedFunctionalityError,
} from '@ai-sdk/provider';

export function prepareTools({
  toolChoice,
  tools,
}: Parameters<LanguageModelV2['doGenerate']>[0]) {
  const toolWarnings: LanguageModelV2CallWarning[] = [];

  if (tools === undefined) {
    return {
      tools: undefined,
      toolWarnings,
    };
  }

  const ollamaTools: {
    function: {
      description: string | undefined;
      name: string;
      parameters: unknown;
    };
    type: 'function';
  }[] = [];

  for (const tool of tools) {
    if (tool.type === 'provider-defined') {
      toolWarnings.push({tool, type: 'unsupported-tool'});
    } else {
      ollamaTools.push({
        function: {
          description: tool.description,
          name: tool.name,
          parameters: tool.inputSchema,
        },
        type: 'function',
      });
    }
  }

  if (toolChoice === undefined) {
    return {
      tools: ollamaTools,
      toolWarnings,
    };
  }

  const type = toolChoice.type;

  switch (type) {
    case 'required':
    case 'auto': {
      return {
        tools: ollamaTools,
        toolWarnings,
      };
    }
    case 'none': {
      return {
        tools: undefined,
        toolWarnings,
      };
    }
    case 'tool': {
      return {
        toolChoice: {
          function: {
            name: toolChoice.toolName,
          },
          type: 'function',
        },
        tools: ollamaTools,
        toolWarnings,
      };
    }
    default: {
      const _exhaustiveCheck: string = type;
      throw new UnsupportedFunctionalityError({
        functionality: `Unsupported tool choice type: ${_exhaustiveCheck}`,
      });
    }
  }
}
