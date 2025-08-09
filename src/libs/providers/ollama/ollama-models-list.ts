// Auto-generated from https://ollama.com/library
// Generated on: 2025-08-09T14:24:40.987Z

// Chat Models
export type OllamaChatModelId =
  | 'alfred'
  | 'alfred:40b'
  | 'alfred:40b-1023-q4_0'
  | 'alfred:40b-1023-q4_1'
  | 'alfred:40b-1023-q5_0'
  | 'alfred:40b-1023-q5_1'
  | 'alfred:40b-1023-q8_0'
  | 'alfred:latest'
  | 'athene-v2'
  | 'athene-v2:72b'
  | 'athene-v2:72b-fp16'
  | 'athene-v2:72b-q2_K'
  | 'athene-v2:72b-q3_K_L'
  | 'athene-v2:72b-q3_K_M'
  | 'athene-v2:72b-q3_K_S'
  | 'athene-v2:72b-q4_0'
  | 'athene-v2:72b-q4_1'
  | 'athene-v2:72b-q4_K_M'
  | 'athene-v2:72b-q4_K_S'
  | 'athene-v2:72b-q5_0'
  | 'athene-v2:72b-q5_1'
  | 'athene-v2:72b-q5_K_M'
  | 'athene-v2:72b-q5_K_S'
  | 'athene-v2:72b-q6_K'
  | 'athene-v2:72b-q8_0'
  | 'athene-v2:latest'
  | 'aya'
  | 'aya-expanse'
  | 'aya-expanse:32b'
  | 'aya-expanse:32b-fp16'
  | 'aya-expanse:32b-q2_K'
  | 'aya-expanse:32b-q3_K_L'
  | 'aya-expanse:32b-q3_K_M'
  | 'aya-expanse:32b-q3_K_S'
  | 'aya-expanse:32b-q4_0'
  | 'aya-expanse:32b-q4_1'
  | 'aya-expanse:32b-q4_K_M'
  | 'aya-expanse:32b-q4_K_S'
  | 'aya-expanse:32b-q5_0'
  | 'aya-expanse:32b-q5_1'
  | 'aya-expanse:32b-q5_K_M'
  | 'aya-expanse:32b-q5_K_S'
  | 'aya-expanse:32b-q6_K'
  | 'aya-expanse:32b-q8_0'
  | 'aya-expanse:8b'
  | 'aya-expanse:8b-fp16'
  | 'aya-expanse:8b-q2_K'
  | 'aya-expanse:8b-q3_K_L'
  | 'aya-expanse:8b-q3_K_M'
  | 'aya-expanse:8b-q3_K_S'
  | 'aya-expanse:8b-q4_0'
  | 'aya-expanse:8b-q4_1'
  | 'aya-expanse:8b-q4_K_M'
  | 'aya-expanse:8b-q4_K_S'
  | 'aya-expanse:8b-q5_0'
  | 'aya-expanse:8b-q5_1'
  | 'aya-expanse:8b-q5_K_M'
  | 'aya-expanse:8b-q5_K_S'
  | 'aya-expanse:8b-q6_K'
  | 'aya-expanse:8b-q8_0'
  | 'aya-expanse:latest'
  | 'aya:35b'
  | 'aya:35b-23'
  | 'aya:35b-23-q2_K'
  | 'aya:35b-23-q3_K_L'
  | 'aya:35b-23-q3_K_M'
  | 'aya:35b-23-q3_K_S'
  | 'aya:35b-23-q4_0'
  | 'aya:35b-23-q4_1'
  | 'aya:35b-23-q4_K_M'
  | 'aya:35b-23-q4_K_S'
  | 'aya:35b-23-q5_0'
  | 'aya:35b-23-q5_1'
  | 'aya:35b-23-q5_K_M'
  | 'aya:35b-23-q5_K_S'
  | 'aya:35b-23-q6_K'
  | 'aya:35b-23-q8_0'
  | 'aya:8b'
  | 'aya:8b-23'
  | 'aya:8b-23-q2_K'
  | 'aya:8b-23-q3_K_L'
  | 'aya:8b-23-q3_K_M'
  | 'aya:8b-23-q3_K_S'
  | 'aya:8b-23-q4_0'
  | 'aya:8b-23-q4_1'
  | 'aya:8b-23-q4_K_M'
  | 'aya:8b-23-q4_K_S'
  | 'aya:8b-23-q5_0'
  | 'aya:8b-23-q5_1'
  | 'aya:8b-23-q5_K_M'
  | 'aya:8b-23-q5_K_S'
  | 'aya:8b-23-q6_K'
  | 'aya:8b-23-q8_0'
  | 'aya:latest'
  | 'bespoke-minicheck'
  | 'bespoke-minicheck:7b'
  | 'bespoke-minicheck:7b-fp16'
  | 'bespoke-minicheck:7b-q2_K'
  | 'bespoke-minicheck:7b-q3_K_L'
  | 'bespoke-minicheck:7b-q3_K_M'
  | 'bespoke-minicheck:7b-q3_K_S'
  | 'bespoke-minicheck:7b-q4_0'
  | 'bespoke-minicheck:7b-q4_1'
  | 'bespoke-minicheck:7b-q4_K_M'
  | 'bespoke-minicheck:7b-q4_K_S'
  | 'bespoke-minicheck:7b-q5_0'
  | 'bespoke-minicheck:7b-q5_1'
  | 'bespoke-minicheck:7b-q5_K_M'
  | 'bespoke-minicheck:7b-q5_K_S'
  | 'bespoke-minicheck:7b-q6_K'
  | 'bespoke-minicheck:7b-q8_0'
  | 'bespoke-minicheck:latest'
  | 'codebooga'
  | 'codebooga:34b'
  | 'codebooga:34b-v0.1-fp16'
  | 'codebooga:34b-v0.1-q2_K'
  | 'codebooga:34b-v0.1-q3_K_L'
  | 'codebooga:34b-v0.1-q3_K_M'
  | 'codebooga:34b-v0.1-q3_K_S'
  | 'codebooga:34b-v0.1-q4_0'
  | 'codebooga:34b-v0.1-q4_1'
  | 'codebooga:34b-v0.1-q4_K_M'
  | 'codebooga:34b-v0.1-q5_0'
  | 'codebooga:34b-v0.1-q5_1'
  | 'codebooga:34b-v0.1-q5_K_M'
  | 'codebooga:34b-v0.1-q5_K_S'
  | 'codebooga:34b-v0.1-q6_K'
  | 'codebooga:34b-v0.1-q8_0'
  | 'codebooga:latest'
  | 'codegeex4'
  | 'codegeex4:9b'
  | 'codegeex4:9b-all-fp16'
  | 'codegeex4:9b-all-q2_K'
  | 'codegeex4:9b-all-q3_K_L'
  | 'codegeex4:9b-all-q3_K_M'
  | 'codegeex4:9b-all-q3_K_S'
  | 'codegeex4:9b-all-q4_0'
  | 'codegeex4:9b-all-q4_1'
  | 'codegeex4:9b-all-q4_K_M'
  | 'codegeex4:9b-all-q4_K_S'
  | 'codegeex4:9b-all-q5_0'
  | 'codegeex4:9b-all-q5_1'
  | 'codegeex4:9b-all-q5_K_M'
  | 'codegeex4:9b-all-q5_K_S'
  | 'codegeex4:9b-all-q6_K'
  | 'codegeex4:9b-all-q8_0'
  | 'codegeex4:latest'
  | 'codegemma'
  | 'codegemma:2b'
  | 'codegemma:2b-code'
  | 'codegemma:2b-code-fp16'
  | 'codegemma:2b-code-q2_K'
  | 'codegemma:2b-code-q3_K_L'
  | 'codegemma:2b-code-q3_K_M'
  | 'codegemma:2b-code-q3_K_S'
  | 'codegemma:2b-code-q4_0'
  | 'codegemma:2b-code-q4_1'
  | 'codegemma:2b-code-q4_K_M'
  | 'codegemma:2b-code-q4_K_S'
  | 'codegemma:2b-code-q5_0'
  | 'codegemma:2b-code-q5_1'
  | 'codegemma:2b-code-q5_K_M'
  | 'codegemma:2b-code-q5_K_S'
  | 'codegemma:2b-code-q6_K'
  | 'codegemma:2b-code-q8_0'
  | 'codegemma:2b-code-v1.1-fp16'
  | 'codegemma:2b-code-v1.1-q2_K'
  | 'codegemma:2b-code-v1.1-q3_K_L'
  | 'codegemma:2b-code-v1.1-q3_K_M'
  | 'codegemma:2b-code-v1.1-q3_K_S'
  | 'codegemma:2b-code-v1.1-q4_0'
  | 'codegemma:2b-code-v1.1-q4_1'
  | 'codegemma:2b-code-v1.1-q4_K_M'
  | 'codegemma:2b-code-v1.1-q4_K_S'
  | 'codegemma:2b-code-v1.1-q5_0'
  | 'codegemma:2b-code-v1.1-q5_1'
  | 'codegemma:2b-code-v1.1-q5_K_M'
  | 'codegemma:2b-code-v1.1-q5_K_S'
  | 'codegemma:2b-code-v1.1-q6_K'
  | 'codegemma:2b-code-v1.1-q8_0'
  | 'codegemma:2b-v1.1'
  | 'codegemma:7b'
  | 'codegemma:7b-code'
  | 'codegemma:7b-code-fp16'
  | 'codegemma:7b-code-q2_K'
  | 'codegemma:7b-code-q3_K_L'
  | 'codegemma:7b-code-q3_K_M'
  | 'codegemma:7b-code-q3_K_S'
  | 'codegemma:7b-code-q4_0'
  | 'codegemma:7b-code-q4_1'
  | 'codegemma:7b-code-q4_K_M'
  | 'codegemma:7b-code-q4_K_S'
  | 'codegemma:7b-code-q5_0'
  | 'codegemma:7b-code-q5_1'
  | 'codegemma:7b-code-q5_K_M'
  | 'codegemma:7b-code-q5_K_S'
  | 'codegemma:7b-code-q6_K'
  | 'codegemma:7b-code-q8_0'
  | 'codegemma:7b-instruct'
  | 'codegemma:7b-instruct-fp16'
  | 'codegemma:7b-instruct-q2_K'
  | 'codegemma:7b-instruct-q3_K_L'
  | 'codegemma:7b-instruct-q3_K_M'
  | 'codegemma:7b-instruct-q3_K_S'
  | 'codegemma:7b-instruct-q4_0'
  | 'codegemma:7b-instruct-q4_1'
  | 'codegemma:7b-instruct-q4_K_M'
  | 'codegemma:7b-instruct-q4_K_S'
  | 'codegemma:7b-instruct-q5_0'
  | 'codegemma:7b-instruct-q5_1'
  | 'codegemma:7b-instruct-q5_K_M'
  | 'codegemma:7b-instruct-q5_K_S'
  | 'codegemma:7b-instruct-q6_K'
  | 'codegemma:7b-instruct-q8_0'
  | 'codegemma:7b-instruct-v1.1-fp16'
  | 'codegemma:7b-instruct-v1.1-q2_K'
  | 'codegemma:7b-instruct-v1.1-q3_K_L'
  | 'codegemma:7b-instruct-v1.1-q3_K_M'
  | 'codegemma:7b-instruct-v1.1-q3_K_S'
  | 'codegemma:7b-instruct-v1.1-q4_0'
  | 'codegemma:7b-instruct-v1.1-q4_1'
  | 'codegemma:7b-instruct-v1.1-q4_K_M'
  | 'codegemma:7b-instruct-v1.1-q4_K_S'
  | 'codegemma:7b-instruct-v1.1-q5_0'
  | 'codegemma:7b-instruct-v1.1-q5_1'
  | 'codegemma:7b-instruct-v1.1-q5_K_M'
  | 'codegemma:7b-instruct-v1.1-q5_K_S'
  | 'codegemma:7b-instruct-v1.1-q6_K'
  | 'codegemma:7b-instruct-v1.1-q8_0'
  | 'codegemma:7b-v1.1'
  | 'codegemma:code'
  | 'codegemma:instruct'
  | 'codegemma:latest'
  | 'codellama'
  | 'codellama:13b'
  | 'codellama:13b-code'
  | 'codellama:13b-code-fp16'
  | 'codellama:13b-code-q2_K'
  | 'codellama:13b-code-q3_K_L'
  | 'codellama:13b-code-q3_K_M'
  | 'codellama:13b-code-q3_K_S'
  | 'codellama:13b-code-q4_0'
  | 'codellama:13b-code-q4_1'
  | 'codellama:13b-code-q4_K_M'
  | 'codellama:13b-code-q4_K_S'
  | 'codellama:13b-code-q5_0'
  | 'codellama:13b-code-q5_1'
  | 'codellama:13b-code-q5_K_M'
  | 'codellama:13b-code-q5_K_S'
  | 'codellama:13b-code-q6_K'
  | 'codellama:13b-code-q8_0'
  | 'codellama:13b-instruct'
  | 'codellama:13b-instruct-fp16'
  | 'codellama:13b-instruct-q2_K'
  | 'codellama:13b-instruct-q3_K_L'
  | 'codellama:13b-instruct-q3_K_M'
  | 'codellama:13b-instruct-q3_K_S'
  | 'codellama:13b-instruct-q4_0'
  | 'codellama:13b-instruct-q4_1'
  | 'codellama:13b-instruct-q4_K_M'
  | 'codellama:13b-instruct-q4_K_S'
  | 'codellama:13b-instruct-q5_0'
  | 'codellama:13b-instruct-q5_1'
  | 'codellama:13b-instruct-q5_K_M'
  | 'codellama:13b-instruct-q5_K_S'
  | 'codellama:13b-instruct-q6_K'
  | 'codellama:13b-instruct-q8_0'
  | 'codellama:13b-python'
  | 'codellama:13b-python-fp16'
  | 'codellama:13b-python-q2_K'
  | 'codellama:13b-python-q3_K_L'
  | 'codellama:13b-python-q3_K_M'
  | 'codellama:13b-python-q3_K_S'
  | 'codellama:13b-python-q4_0'
  | 'codellama:13b-python-q4_1'
  | 'codellama:13b-python-q4_K_M'
  | 'codellama:13b-python-q4_K_S'
  | 'codellama:13b-python-q5_0'
  | 'codellama:13b-python-q5_1'
  | 'codellama:13b-python-q5_K_M'
  | 'codellama:13b-python-q5_K_S'
  | 'codellama:13b-python-q6_K'
  | 'codellama:13b-python-q8_0'
  | 'codellama:34b'
  | 'codellama:34b-code'
  | 'codellama:34b-code-q2_K'
  | 'codellama:34b-code-q3_K_L'
  | 'codellama:34b-code-q3_K_M'
  | 'codellama:34b-code-q3_K_S'
  | 'codellama:34b-code-q4_0'
  | 'codellama:34b-code-q4_1'
  | 'codellama:34b-code-q4_K_M'
  | 'codellama:34b-code-q4_K_S'
  | 'codellama:34b-code-q5_0'
  | 'codellama:34b-code-q5_1'
  | 'codellama:34b-code-q5_K_M'
  | 'codellama:34b-code-q5_K_S'
  | 'codellama:34b-code-q6_K'
  | 'codellama:34b-code-q8_0'
  | 'codellama:34b-instruct'
  | 'codellama:34b-instruct-fp16'
  | 'codellama:34b-instruct-q2_K'
  | 'codellama:34b-instruct-q3_K_L'
  | 'codellama:34b-instruct-q3_K_M'
  | 'codellama:34b-instruct-q3_K_S'
  | 'codellama:34b-instruct-q4_0'
  | 'codellama:34b-instruct-q4_1'
  | 'codellama:34b-instruct-q4_K_M'
  | 'codellama:34b-instruct-q4_K_S'
  | 'codellama:34b-instruct-q5_0'
  | 'codellama:34b-instruct-q5_1'
  | 'codellama:34b-instruct-q5_K_M'
  | 'codellama:34b-instruct-q5_K_S'
  | 'codellama:34b-instruct-q6_K'
  | 'codellama:34b-instruct-q8_0'
  | 'codellama:34b-python'
  | 'codellama:34b-python-fp16'
  | 'codellama:34b-python-q2_K'
  | 'codellama:34b-python-q3_K_L'
  | 'codellama:34b-python-q3_K_M'
  | 'codellama:34b-python-q3_K_S'
  | 'codellama:34b-python-q4_0'
  | 'codellama:34b-python-q4_1'
  | 'codellama:34b-python-q4_K_M'
  | 'codellama:34b-python-q4_K_S'
  | 'codellama:34b-python-q5_0'
  | 'codellama:34b-python-q5_1'
  | 'codellama:34b-python-q5_K_M'
  | 'codellama:34b-python-q5_K_S'
  | 'codellama:34b-python-q6_K'
  | 'codellama:34b-python-q8_0'
  | 'codellama:70b'
  | 'codellama:70b-code'
  | 'codellama:70b-code-fp16'
  | 'codellama:70b-code-q2_K'
  | 'codellama:70b-code-q3_K_L'
  | 'codellama:70b-code-q3_K_M'
  | 'codellama:70b-code-q3_K_S'
  | 'codellama:70b-code-q4_0'
  | 'codellama:70b-code-q4_1'
  | 'codellama:70b-code-q4_K_M'
  | 'codellama:70b-code-q4_K_S'
  | 'codellama:70b-code-q5_0'
  | 'codellama:70b-code-q5_1'
  | 'codellama:70b-code-q5_K_M'
  | 'codellama:70b-code-q5_K_S'
  | 'codellama:70b-code-q6_K'
  | 'codellama:70b-code-q8_0'
  | 'codellama:70b-instruct'
  | 'codellama:70b-instruct-fp16'
  | 'codellama:70b-instruct-q2_K'
  | 'codellama:70b-instruct-q3_K_L'
  | 'codellama:70b-instruct-q3_K_M'
  | 'codellama:70b-instruct-q3_K_S'
  | 'codellama:70b-instruct-q4_0'
  | 'codellama:70b-instruct-q4_1'
  | 'codellama:70b-instruct-q4_K_M'
  | 'codellama:70b-instruct-q4_K_S'
  | 'codellama:70b-instruct-q5_0'
  | 'codellama:70b-instruct-q5_1'
  | 'codellama:70b-instruct-q5_K_M'
  | 'codellama:70b-instruct-q5_K_S'
  | 'codellama:70b-instruct-q6_K'
  | 'codellama:70b-instruct-q8_0'
  | 'codellama:70b-python'
  | 'codellama:70b-python-fp16'
  | 'codellama:70b-python-q2_K'
  | 'codellama:70b-python-q3_K_L'
  | 'codellama:70b-python-q3_K_M'
  | 'codellama:70b-python-q3_K_S'
  | 'codellama:70b-python-q4_0'
  | 'codellama:70b-python-q4_1'
  | 'codellama:70b-python-q4_K_M'
  | 'codellama:70b-python-q4_K_S'
  | 'codellama:70b-python-q5_0'
  | 'codellama:70b-python-q5_1'
  | 'codellama:70b-python-q5_K_M'
  | 'codellama:70b-python-q5_K_S'
  | 'codellama:70b-python-q6_K'
  | 'codellama:70b-python-q8_0'
  | 'codellama:7b'
  | 'codellama:7b-code'
  | 'codellama:7b-code-fp16'
  | 'codellama:7b-code-q2_K'
  | 'codellama:7b-code-q3_K_L'
  | 'codellama:7b-code-q3_K_M'
  | 'codellama:7b-code-q3_K_S'
  | 'codellama:7b-code-q4_0'
  | 'codellama:7b-code-q4_1'
  | 'codellama:7b-code-q4_K_M'
  | 'codellama:7b-code-q4_K_S'
  | 'codellama:7b-code-q5_0'
  | 'codellama:7b-code-q5_1'
  | 'codellama:7b-code-q5_K_M'
  | 'codellama:7b-code-q5_K_S'
  | 'codellama:7b-code-q6_K'
  | 'codellama:7b-code-q8_0'
  | 'codellama:7b-instruct'
  | 'codellama:7b-instruct-fp16'
  | 'codellama:7b-instruct-q2_K'
  | 'codellama:7b-instruct-q3_K_L'
  | 'codellama:7b-instruct-q3_K_M'
  | 'codellama:7b-instruct-q3_K_S'
  | 'codellama:7b-instruct-q4_0'
  | 'codellama:7b-instruct-q4_1'
  | 'codellama:7b-instruct-q4_K_M'
  | 'codellama:7b-instruct-q4_K_S'
  | 'codellama:7b-instruct-q5_0'
  | 'codellama:7b-instruct-q5_1'
  | 'codellama:7b-instruct-q5_K_M'
  | 'codellama:7b-instruct-q5_K_S'
  | 'codellama:7b-instruct-q6_K'
  | 'codellama:7b-instruct-q8_0'
  | 'codellama:7b-python'
  | 'codellama:7b-python-fp16'
  | 'codellama:7b-python-q2_K'
  | 'codellama:7b-python-q3_K_L'
  | 'codellama:7b-python-q3_K_M'
  | 'codellama:7b-python-q3_K_S'
  | 'codellama:7b-python-q4_0'
  | 'codellama:7b-python-q4_1'
  | 'codellama:7b-python-q4_K_M'
  | 'codellama:7b-python-q4_K_S'
  | 'codellama:7b-python-q5_0'
  | 'codellama:7b-python-q5_1'
  | 'codellama:7b-python-q5_K_M'
  | 'codellama:7b-python-q5_K_S'
  | 'codellama:7b-python-q6_K'
  | 'codellama:7b-python-q8_0'
  | 'codellama:code'
  | 'codellama:instruct'
  | 'codellama:latest'
  | 'codellama:python'
  | 'codeqwen'
  | 'codeqwen:7b'
  | 'codeqwen:7b-chat'
  | 'codeqwen:7b-chat-v1.5-fp16'
  | 'codeqwen:7b-chat-v1.5-q2_K'
  | 'codeqwen:7b-chat-v1.5-q3_K_L'
  | 'codeqwen:7b-chat-v1.5-q3_K_M'
  | 'codeqwen:7b-chat-v1.5-q3_K_S'
  | 'codeqwen:7b-chat-v1.5-q4_0'
  | 'codeqwen:7b-chat-v1.5-q4_1'
  | 'codeqwen:7b-chat-v1.5-q4_K_M'
  | 'codeqwen:7b-chat-v1.5-q4_K_S'
  | 'codeqwen:7b-chat-v1.5-q5_0'
  | 'codeqwen:7b-chat-v1.5-q5_1'
  | 'codeqwen:7b-chat-v1.5-q5_K_M'
  | 'codeqwen:7b-chat-v1.5-q5_K_S'
  | 'codeqwen:7b-chat-v1.5-q6_K'
  | 'codeqwen:7b-chat-v1.5-q8_0'
  | 'codeqwen:7b-code'
  | 'codeqwen:7b-code-v1.5-fp16'
  | 'codeqwen:7b-code-v1.5-q4_0'
  | 'codeqwen:7b-code-v1.5-q4_1'
  | 'codeqwen:7b-code-v1.5-q5_0'
  | 'codeqwen:7b-code-v1.5-q5_1'
  | 'codeqwen:7b-code-v1.5-q8_0'
  | 'codeqwen:chat'
  | 'codeqwen:code'
  | 'codeqwen:latest'
  | 'codeqwen:v1.5'
  | 'codeqwen:v1.5-chat'
  | 'codeqwen:v1.5-code'
  | 'codestral'
  | 'codestral:22b'
  | 'codestral:22b-v0.1-q2_K'
  | 'codestral:22b-v0.1-q3_K_L'
  | 'codestral:22b-v0.1-q3_K_M'
  | 'codestral:22b-v0.1-q3_K_S'
  | 'codestral:22b-v0.1-q4_0'
  | 'codestral:22b-v0.1-q4_1'
  | 'codestral:22b-v0.1-q4_K_M'
  | 'codestral:22b-v0.1-q4_K_S'
  | 'codestral:22b-v0.1-q5_0'
  | 'codestral:22b-v0.1-q5_1'
  | 'codestral:22b-v0.1-q5_K_M'
  | 'codestral:22b-v0.1-q5_K_S'
  | 'codestral:22b-v0.1-q6_K'
  | 'codestral:22b-v0.1-q8_0'
  | 'codestral:latest'
  | 'codestral:v0.1'
  | 'codeup'
  | 'codeup:13b'
  | 'codeup:13b-llama2'
  | 'codeup:13b-llama2-chat'
  | 'codeup:13b-llama2-chat-fp16'
  | 'codeup:13b-llama2-chat-q2_K'
  | 'codeup:13b-llama2-chat-q3_K_L'
  | 'codeup:13b-llama2-chat-q3_K_M'
  | 'codeup:13b-llama2-chat-q3_K_S'
  | 'codeup:13b-llama2-chat-q4_0'
  | 'codeup:13b-llama2-chat-q4_1'
  | 'codeup:13b-llama2-chat-q4_K_M'
  | 'codeup:13b-llama2-chat-q4_K_S'
  | 'codeup:13b-llama2-chat-q5_0'
  | 'codeup:13b-llama2-chat-q5_1'
  | 'codeup:13b-llama2-chat-q5_K_M'
  | 'codeup:13b-llama2-chat-q5_K_S'
  | 'codeup:13b-llama2-chat-q6_K'
  | 'codeup:13b-llama2-chat-q8_0'
  | 'codeup:latest'
  | 'cogito'
  | 'cogito:14b'
  | 'cogito:14b-v1-preview-qwen-fp16'
  | 'cogito:14b-v1-preview-qwen-q4_K_M'
  | 'cogito:14b-v1-preview-qwen-q8_0'
  | 'cogito:32b'
  | 'cogito:32b-v1-preview-qwen-fp16'
  | 'cogito:32b-v1-preview-qwen-q4_K_M'
  | 'cogito:32b-v1-preview-qwen-q8_0'
  | 'cogito:3b'
  | 'cogito:3b-v1-preview-llama-fp16'
  | 'cogito:3b-v1-preview-llama-q4_K_M'
  | 'cogito:3b-v1-preview-llama-q8_0'
  | 'cogito:70b'
  | 'cogito:70b-v1-preview-llama-fp16'
  | 'cogito:70b-v1-preview-llama-q4_K_M'
  | 'cogito:70b-v1-preview-llama-q8_0'
  | 'cogito:8b'
  | 'cogito:8b-v1-preview-llama-q4_K_M'
  | 'cogito:8b-v1-preview-llama-q8_0'
  | 'cogito:latest'
  | 'command-a'
  | 'command-a:111b'
  | 'command-a:111b-03-2025-fp16'
  | 'command-a:111b-03-2025-q4_K_M'
  | 'command-a:111b-03-2025-q8_0'
  | 'command-a:latest'
  | 'command-r'
  | 'command-r-plus'
  | 'command-r-plus:104b'
  | 'command-r-plus:104b-08-2024-fp16'
  | 'command-r-plus:104b-08-2024-q2_K'
  | 'command-r-plus:104b-08-2024-q3_K_L'
  | 'command-r-plus:104b-08-2024-q3_K_M'
  | 'command-r-plus:104b-08-2024-q3_K_S'
  | 'command-r-plus:104b-08-2024-q4_0'
  | 'command-r-plus:104b-08-2024-q4_1'
  | 'command-r-plus:104b-08-2024-q4_K_M'
  | 'command-r-plus:104b-08-2024-q4_K_S'
  | 'command-r-plus:104b-08-2024-q5_0'
  | 'command-r-plus:104b-08-2024-q5_1'
  | 'command-r-plus:104b-08-2024-q5_K_M'
  | 'command-r-plus:104b-08-2024-q5_K_S'
  | 'command-r-plus:104b-08-2024-q6_K'
  | 'command-r-plus:104b-08-2024-q8_0'
  | 'command-r-plus:104b-fp16'
  | 'command-r-plus:104b-q2_K'
  | 'command-r-plus:104b-q4_0'
  | 'command-r-plus:104b-q8_0'
  | 'command-r-plus:latest'
  | 'command-r7b'
  | 'command-r7b-arabic'
  | 'command-r7b-arabic:7b'
  | 'command-r7b-arabic:7b-02-2025-fp16'
  | 'command-r7b-arabic:7b-02-2025-q4_K_M'
  | 'command-r7b-arabic:7b-02-2025-q8_0'
  | 'command-r7b-arabic:latest'
  | 'command-r7b:7b'
  | 'command-r7b:7b-12-2024-fp16'
  | 'command-r7b:7b-12-2024-q4_K_M'
  | 'command-r7b:7b-12-2024-q8_0'
  | 'command-r7b:latest'
  | 'command-r:35b'
  | 'command-r:35b-08-2024-fp16'
  | 'command-r:35b-08-2024-q2_K'
  | 'command-r:35b-08-2024-q3_K_L'
  | 'command-r:35b-08-2024-q3_K_M'
  | 'command-r:35b-08-2024-q3_K_S'
  | 'command-r:35b-08-2024-q4_0'
  | 'command-r:35b-08-2024-q4_1'
  | 'command-r:35b-08-2024-q4_K_M'
  | 'command-r:35b-08-2024-q4_K_S'
  | 'command-r:35b-08-2024-q5_0'
  | 'command-r:35b-08-2024-q5_1'
  | 'command-r:35b-08-2024-q5_K_M'
  | 'command-r:35b-08-2024-q5_K_S'
  | 'command-r:35b-08-2024-q6_K'
  | 'command-r:35b-08-2024-q8_0'
  | 'command-r:35b-v0.1-fp16'
  | 'command-r:35b-v0.1-q2_K'
  | 'command-r:35b-v0.1-q3_K_L'
  | 'command-r:35b-v0.1-q3_K_M'
  | 'command-r:35b-v0.1-q3_K_S'
  | 'command-r:35b-v0.1-q4_0'
  | 'command-r:35b-v0.1-q4_1'
  | 'command-r:35b-v0.1-q4_K_M'
  | 'command-r:35b-v0.1-q4_K_S'
  | 'command-r:35b-v0.1-q5_1'
  | 'command-r:35b-v0.1-q5_K_M'
  | 'command-r:35b-v0.1-q5_K_S'
  | 'command-r:35b-v0.1-q6_K'
  | 'command-r:35b-v0.1-q8_0'
  | 'command-r:latest'
  | 'command-r:v0.1'
  | 'dbrx'
  | 'dbrx:132b'
  | 'dbrx:132b-instruct-fp16'
  | 'dbrx:132b-instruct-q2_K'
  | 'dbrx:132b-instruct-q4_0'
  | 'dbrx:132b-instruct-q8_0'
  | 'dbrx:instruct'
  | 'dbrx:latest'
  | 'deepcoder'
  | 'deepcoder:1.5b'
  | 'deepcoder:1.5b-preview-fp16'
  | 'deepcoder:1.5b-preview-q4_K_M'
  | 'deepcoder:1.5b-preview-q8_0'
  | 'deepcoder:14b'
  | 'deepcoder:14b-preview-fp16'
  | 'deepcoder:14b-preview-q4_K_M'
  | 'deepcoder:14b-preview-q8_0'
  | 'deepcoder:latest'
  | 'deepscaler'
  | 'deepscaler:1.5b'
  | 'deepscaler:1.5b-preview-fp16'
  | 'deepscaler:1.5b-preview-q4_K_M'
  | 'deepscaler:1.5b-preview-q8_0'
  | 'deepscaler:latest'
  | 'deepseek-coder'
  | 'deepseek-coder-v2'
  | 'deepseek-coder-v2:16b'
  | 'deepseek-coder-v2:16b-lite-base-fp16'
  | 'deepseek-coder-v2:16b-lite-base-q2_K'
  | 'deepseek-coder-v2:16b-lite-base-q3_K_L'
  | 'deepseek-coder-v2:16b-lite-base-q3_K_M'
  | 'deepseek-coder-v2:16b-lite-base-q3_K_S'
  | 'deepseek-coder-v2:16b-lite-base-q4_0'
  | 'deepseek-coder-v2:16b-lite-base-q4_1'
  | 'deepseek-coder-v2:16b-lite-base-q4_K_M'
  | 'deepseek-coder-v2:16b-lite-base-q4_K_S'
  | 'deepseek-coder-v2:16b-lite-base-q5_0'
  | 'deepseek-coder-v2:16b-lite-base-q5_1'
  | 'deepseek-coder-v2:16b-lite-base-q5_K_M'
  | 'deepseek-coder-v2:16b-lite-base-q5_K_S'
  | 'deepseek-coder-v2:16b-lite-base-q6_K'
  | 'deepseek-coder-v2:16b-lite-base-q8_0'
  | 'deepseek-coder-v2:16b-lite-instruct-fp16'
  | 'deepseek-coder-v2:16b-lite-instruct-q2_K'
  | 'deepseek-coder-v2:16b-lite-instruct-q3_K_L'
  | 'deepseek-coder-v2:16b-lite-instruct-q3_K_M'
  | 'deepseek-coder-v2:16b-lite-instruct-q3_K_S'
  | 'deepseek-coder-v2:16b-lite-instruct-q4_0'
  | 'deepseek-coder-v2:16b-lite-instruct-q4_1'
  | 'deepseek-coder-v2:16b-lite-instruct-q4_K_M'
  | 'deepseek-coder-v2:16b-lite-instruct-q4_K_S'
  | 'deepseek-coder-v2:16b-lite-instruct-q5_0'
  | 'deepseek-coder-v2:16b-lite-instruct-q5_1'
  | 'deepseek-coder-v2:16b-lite-instruct-q5_K_M'
  | 'deepseek-coder-v2:16b-lite-instruct-q5_K_S'
  | 'deepseek-coder-v2:16b-lite-instruct-q6_K'
  | 'deepseek-coder-v2:16b-lite-instruct-q8_0'
  | 'deepseek-coder-v2:236b'
  | 'deepseek-coder-v2:236b-base-fp16'
  | 'deepseek-coder-v2:236b-base-q2_K'
  | 'deepseek-coder-v2:236b-base-q3_K_L'
  | 'deepseek-coder-v2:236b-base-q3_K_M'
  | 'deepseek-coder-v2:236b-base-q3_K_S'
  | 'deepseek-coder-v2:236b-base-q4_0'
  | 'deepseek-coder-v2:236b-base-q4_1'
  | 'deepseek-coder-v2:236b-base-q4_K_M'
  | 'deepseek-coder-v2:236b-base-q4_K_S'
  | 'deepseek-coder-v2:236b-base-q5_0'
  | 'deepseek-coder-v2:236b-base-q5_1'
  | 'deepseek-coder-v2:236b-base-q5_K_M'
  | 'deepseek-coder-v2:236b-base-q5_K_S'
  | 'deepseek-coder-v2:236b-base-q6_K'
  | 'deepseek-coder-v2:236b-base-q8_0'
  | 'deepseek-coder-v2:236b-instruct-fp16'
  | 'deepseek-coder-v2:236b-instruct-q2_K'
  | 'deepseek-coder-v2:236b-instruct-q3_K_L'
  | 'deepseek-coder-v2:236b-instruct-q3_K_M'
  | 'deepseek-coder-v2:236b-instruct-q3_K_S'
  | 'deepseek-coder-v2:236b-instruct-q4_0'
  | 'deepseek-coder-v2:236b-instruct-q4_1'
  | 'deepseek-coder-v2:236b-instruct-q4_K_M'
  | 'deepseek-coder-v2:236b-instruct-q4_K_S'
  | 'deepseek-coder-v2:236b-instruct-q5_0'
  | 'deepseek-coder-v2:236b-instruct-q5_1'
  | 'deepseek-coder-v2:236b-instruct-q5_K_M'
  | 'deepseek-coder-v2:236b-instruct-q5_K_S'
  | 'deepseek-coder-v2:236b-instruct-q6_K'
  | 'deepseek-coder-v2:236b-instruct-q8_0'
  | 'deepseek-coder-v2:latest'
  | 'deepseek-coder-v2:lite'
  | 'deepseek-coder:1.3b'
  | 'deepseek-coder:1.3b-base'
  | 'deepseek-coder:1.3b-base-fp16'
  | 'deepseek-coder:1.3b-base-q2_K'
  | 'deepseek-coder:1.3b-base-q3_K_L'
  | 'deepseek-coder:1.3b-base-q3_K_M'
  | 'deepseek-coder:1.3b-base-q3_K_S'
  | 'deepseek-coder:1.3b-base-q4_0'
  | 'deepseek-coder:1.3b-base-q4_1'
  | 'deepseek-coder:1.3b-base-q4_K_M'
  | 'deepseek-coder:1.3b-base-q4_K_S'
  | 'deepseek-coder:1.3b-base-q5_0'
  | 'deepseek-coder:1.3b-base-q5_1'
  | 'deepseek-coder:1.3b-base-q5_K_M'
  | 'deepseek-coder:1.3b-base-q5_K_S'
  | 'deepseek-coder:1.3b-base-q6_K'
  | 'deepseek-coder:1.3b-base-q8_0'
  | 'deepseek-coder:1.3b-instruct'
  | 'deepseek-coder:1.3b-instruct-fp16'
  | 'deepseek-coder:1.3b-instruct-q2_K'
  | 'deepseek-coder:1.3b-instruct-q3_K_L'
  | 'deepseek-coder:1.3b-instruct-q3_K_M'
  | 'deepseek-coder:1.3b-instruct-q3_K_S'
  | 'deepseek-coder:1.3b-instruct-q4_0'
  | 'deepseek-coder:1.3b-instruct-q4_1'
  | 'deepseek-coder:1.3b-instruct-q4_K_M'
  | 'deepseek-coder:1.3b-instruct-q4_K_S'
  | 'deepseek-coder:1.3b-instruct-q5_0'
  | 'deepseek-coder:1.3b-instruct-q5_1'
  | 'deepseek-coder:1.3b-instruct-q5_K_M'
  | 'deepseek-coder:1.3b-instruct-q5_K_S'
  | 'deepseek-coder:1.3b-instruct-q6_K'
  | 'deepseek-coder:1.3b-instruct-q8_0'
  | 'deepseek-coder:33b'
  | 'deepseek-coder:33b-base'
  | 'deepseek-coder:33b-base-fp16'
  | 'deepseek-coder:33b-base-q2_K'
  | 'deepseek-coder:33b-base-q3_K_L'
  | 'deepseek-coder:33b-base-q3_K_M'
  | 'deepseek-coder:33b-base-q3_K_S'
  | 'deepseek-coder:33b-base-q4_0'
  | 'deepseek-coder:33b-base-q4_1'
  | 'deepseek-coder:33b-base-q4_K_M'
  | 'deepseek-coder:33b-base-q4_K_S'
  | 'deepseek-coder:33b-base-q5_0'
  | 'deepseek-coder:33b-base-q5_1'
  | 'deepseek-coder:33b-base-q5_K_M'
  | 'deepseek-coder:33b-base-q5_K_S'
  | 'deepseek-coder:33b-base-q6_K'
  | 'deepseek-coder:33b-base-q8_0'
  | 'deepseek-coder:33b-instruct'
  | 'deepseek-coder:33b-instruct-fp16'
  | 'deepseek-coder:33b-instruct-q2_K'
  | 'deepseek-coder:33b-instruct-q3_K_L'
  | 'deepseek-coder:33b-instruct-q3_K_M'
  | 'deepseek-coder:33b-instruct-q3_K_S'
  | 'deepseek-coder:33b-instruct-q4_0'
  | 'deepseek-coder:33b-instruct-q4_1'
  | 'deepseek-coder:33b-instruct-q4_K_M'
  | 'deepseek-coder:33b-instruct-q4_K_S'
  | 'deepseek-coder:33b-instruct-q5_0'
  | 'deepseek-coder:33b-instruct-q5_1'
  | 'deepseek-coder:33b-instruct-q5_K_M'
  | 'deepseek-coder:33b-instruct-q5_K_S'
  | 'deepseek-coder:33b-instruct-q6_K'
  | 'deepseek-coder:33b-instruct-q8_0'
  | 'deepseek-coder:6.7b'
  | 'deepseek-coder:6.7b-base'
  | 'deepseek-coder:6.7b-base-fp16'
  | 'deepseek-coder:6.7b-base-q2_K'
  | 'deepseek-coder:6.7b-base-q3_K_L'
  | 'deepseek-coder:6.7b-base-q3_K_M'
  | 'deepseek-coder:6.7b-base-q3_K_S'
  | 'deepseek-coder:6.7b-base-q4_0'
  | 'deepseek-coder:6.7b-base-q4_1'
  | 'deepseek-coder:6.7b-base-q4_K_M'
  | 'deepseek-coder:6.7b-base-q4_K_S'
  | 'deepseek-coder:6.7b-base-q5_0'
  | 'deepseek-coder:6.7b-base-q5_1'
  | 'deepseek-coder:6.7b-base-q5_K_M'
  | 'deepseek-coder:6.7b-base-q5_K_S'
  | 'deepseek-coder:6.7b-base-q6_K'
  | 'deepseek-coder:6.7b-base-q8_0'
  | 'deepseek-coder:6.7b-instruct'
  | 'deepseek-coder:6.7b-instruct-fp16'
  | 'deepseek-coder:6.7b-instruct-q2_K'
  | 'deepseek-coder:6.7b-instruct-q3_K_L'
  | 'deepseek-coder:6.7b-instruct-q3_K_M'
  | 'deepseek-coder:6.7b-instruct-q3_K_S'
  | 'deepseek-coder:6.7b-instruct-q4_0'
  | 'deepseek-coder:6.7b-instruct-q4_1'
  | 'deepseek-coder:6.7b-instruct-q4_K_M'
  | 'deepseek-coder:6.7b-instruct-q4_K_S'
  | 'deepseek-coder:6.7b-instruct-q5_0'
  | 'deepseek-coder:6.7b-instruct-q5_1'
  | 'deepseek-coder:6.7b-instruct-q5_K_M'
  | 'deepseek-coder:6.7b-instruct-q5_K_S'
  | 'deepseek-coder:6.7b-instruct-q6_K'
  | 'deepseek-coder:6.7b-instruct-q8_0'
  | 'deepseek-coder:base'
  | 'deepseek-coder:instruct'
  | 'deepseek-coder:latest'
  | 'deepseek-llm'
  | 'deepseek-llm:67b'
  | 'deepseek-llm:67b-base'
  | 'deepseek-llm:67b-base-fp16'
  | 'deepseek-llm:67b-base-q2_K'
  | 'deepseek-llm:67b-base-q3_K_L'
  | 'deepseek-llm:67b-base-q3_K_M'
  | 'deepseek-llm:67b-base-q3_K_S'
  | 'deepseek-llm:67b-base-q4_0'
  | 'deepseek-llm:67b-base-q4_1'
  | 'deepseek-llm:67b-base-q4_K_M'
  | 'deepseek-llm:67b-base-q4_K_S'
  | 'deepseek-llm:67b-base-q5_0'
  | 'deepseek-llm:67b-base-q5_1'
  | 'deepseek-llm:67b-base-q5_K_M'
  | 'deepseek-llm:67b-base-q5_K_S'
  | 'deepseek-llm:67b-base-q6_K'
  | 'deepseek-llm:67b-base-q8_0'
  | 'deepseek-llm:67b-chat'
  | 'deepseek-llm:67b-chat-fp16'
  | 'deepseek-llm:67b-chat-q2_K'
  | 'deepseek-llm:67b-chat-q3_K_L'
  | 'deepseek-llm:67b-chat-q3_K_M'
  | 'deepseek-llm:67b-chat-q3_K_S'
  | 'deepseek-llm:67b-chat-q4_0'
  | 'deepseek-llm:67b-chat-q4_1'
  | 'deepseek-llm:67b-chat-q4_K_M'
  | 'deepseek-llm:67b-chat-q4_K_S'
  | 'deepseek-llm:67b-chat-q5_0'
  | 'deepseek-llm:67b-chat-q5_1'
  | 'deepseek-llm:67b-chat-q5_K_S'
  | 'deepseek-llm:7b'
  | 'deepseek-llm:7b-base'
  | 'deepseek-llm:7b-base-fp16'
  | 'deepseek-llm:7b-base-q2_K'
  | 'deepseek-llm:7b-base-q3_K_L'
  | 'deepseek-llm:7b-base-q3_K_M'
  | 'deepseek-llm:7b-base-q3_K_S'
  | 'deepseek-llm:7b-base-q4_0'
  | 'deepseek-llm:7b-base-q4_1'
  | 'deepseek-llm:7b-base-q4_K_M'
  | 'deepseek-llm:7b-base-q4_K_S'
  | 'deepseek-llm:7b-base-q5_0'
  | 'deepseek-llm:7b-base-q5_1'
  | 'deepseek-llm:7b-base-q5_K_M'
  | 'deepseek-llm:7b-base-q5_K_S'
  | 'deepseek-llm:7b-base-q6_K'
  | 'deepseek-llm:7b-base-q8_0'
  | 'deepseek-llm:7b-chat'
  | 'deepseek-llm:7b-chat-fp16'
  | 'deepseek-llm:7b-chat-q2_K'
  | 'deepseek-llm:7b-chat-q3_K_L'
  | 'deepseek-llm:7b-chat-q3_K_M'
  | 'deepseek-llm:7b-chat-q3_K_S'
  | 'deepseek-llm:7b-chat-q4_0'
  | 'deepseek-llm:7b-chat-q4_1'
  | 'deepseek-llm:7b-chat-q4_K_M'
  | 'deepseek-llm:7b-chat-q4_K_S'
  | 'deepseek-llm:7b-chat-q5_0'
  | 'deepseek-llm:7b-chat-q5_1'
  | 'deepseek-llm:7b-chat-q5_K_M'
  | 'deepseek-llm:7b-chat-q5_K_S'
  | 'deepseek-llm:7b-chat-q6_K'
  | 'deepseek-llm:7b-chat-q8_0'
  | 'deepseek-llm:latest'
  | 'deepseek-r1'
  | 'deepseek-r1:1.5b'
  | 'deepseek-r1:1.5b-qwen-distill-fp16'
  | 'deepseek-r1:1.5b-qwen-distill-q4_K_M'
  | 'deepseek-r1:1.5b-qwen-distill-q8_0'
  | 'deepseek-r1:14b'
  | 'deepseek-r1:14b-qwen-distill-fp16'
  | 'deepseek-r1:14b-qwen-distill-q4_K_M'
  | 'deepseek-r1:14b-qwen-distill-q8_0'
  | 'deepseek-r1:32b'
  | 'deepseek-r1:32b-qwen-distill-fp16'
  | 'deepseek-r1:32b-qwen-distill-q4_K_M'
  | 'deepseek-r1:32b-qwen-distill-q8_0'
  | 'deepseek-r1:671b'
  | 'deepseek-r1:671b-0528-fp16'
  | 'deepseek-r1:671b-0528-q4_K_M'
  | 'deepseek-r1:671b-0528-q8_0'
  | 'deepseek-r1:671b-fp16'
  | 'deepseek-r1:671b-q4_K_M'
  | 'deepseek-r1:671b-q8_0'
  | 'deepseek-r1:70b'
  | 'deepseek-r1:70b-llama-distill-fp16'
  | 'deepseek-r1:70b-llama-distill-q4_K_M'
  | 'deepseek-r1:70b-llama-distill-q8_0'
  | 'deepseek-r1:7b'
  | 'deepseek-r1:7b-qwen-distill-fp16'
  | 'deepseek-r1:7b-qwen-distill-q4_K_M'
  | 'deepseek-r1:7b-qwen-distill-q8_0'
  | 'deepseek-r1:8b'
  | 'deepseek-r1:8b-0528-qwen3-fp16'
  | 'deepseek-r1:8b-0528-qwen3-q4_K_M'
  | 'deepseek-r1:8b-0528-qwen3-q8_0'
  | 'deepseek-r1:8b-llama-distill-fp16'
  | 'deepseek-r1:8b-llama-distill-q4_K_M'
  | 'deepseek-r1:8b-llama-distill-q8_0'
  | 'deepseek-r1:latest'
  | 'deepseek-v2'
  | 'deepseek-v2.5'
  | 'deepseek-v2.5:236b'
  | 'deepseek-v2.5:236b-q4_0'
  | 'deepseek-v2.5:236b-q4_1'
  | 'deepseek-v2.5:236b-q5_0'
  | 'deepseek-v2.5:236b-q5_1'
  | 'deepseek-v2.5:236b-q8_0'
  | 'deepseek-v2.5:latest'
  | 'deepseek-v2:16b'
  | 'deepseek-v2:16b-lite-chat-fp16'
  | 'deepseek-v2:16b-lite-chat-q2_K'
  | 'deepseek-v2:16b-lite-chat-q3_K_L'
  | 'deepseek-v2:16b-lite-chat-q3_K_M'
  | 'deepseek-v2:16b-lite-chat-q3_K_S'
  | 'deepseek-v2:16b-lite-chat-q4_0'
  | 'deepseek-v2:16b-lite-chat-q4_1'
  | 'deepseek-v2:16b-lite-chat-q4_K_M'
  | 'deepseek-v2:16b-lite-chat-q4_K_S'
  | 'deepseek-v2:16b-lite-chat-q5_0'
  | 'deepseek-v2:16b-lite-chat-q5_1'
  | 'deepseek-v2:16b-lite-chat-q5_K_M'
  | 'deepseek-v2:16b-lite-chat-q5_K_S'
  | 'deepseek-v2:16b-lite-chat-q6_K'
  | 'deepseek-v2:16b-lite-chat-q8_0'
  | 'deepseek-v2:236b'
  | 'deepseek-v2:236b-chat-fp16'
  | 'deepseek-v2:236b-chat-q2_K'
  | 'deepseek-v2:236b-chat-q3_K_L'
  | 'deepseek-v2:236b-chat-q3_K_M'
  | 'deepseek-v2:236b-chat-q3_K_S'
  | 'deepseek-v2:236b-chat-q4_0'
  | 'deepseek-v2:236b-chat-q4_1'
  | 'deepseek-v2:236b-chat-q4_K_M'
  | 'deepseek-v2:236b-chat-q4_K_S'
  | 'deepseek-v2:236b-chat-q5_0'
  | 'deepseek-v2:236b-chat-q5_1'
  | 'deepseek-v2:236b-chat-q5_K_M'
  | 'deepseek-v2:236b-chat-q5_K_S'
  | 'deepseek-v2:236b-chat-q6_K'
  | 'deepseek-v2:236b-chat-q8_0'
  | 'deepseek-v2:latest'
  | 'deepseek-v2:lite'
  | 'deepseek-v3'
  | 'deepseek-v3:671b'
  | 'deepseek-v3:671b-fp16'
  | 'deepseek-v3:671b-q4_K_M'
  | 'deepseek-v3:671b-q8_0'
  | 'deepseek-v3:latest'
  | 'devstral'
  | 'devstral:24b'
  | 'devstral:24b-small-2505-fp16'
  | 'devstral:24b-small-2505-q4_K_M'
  | 'devstral:24b-small-2505-q8_0'
  | 'devstral:latest'
  | 'dolphin-llama3'
  | 'dolphin-llama3:70b'
  | 'dolphin-llama3:70b-v2.9'
  | 'dolphin-llama3:70b-v2.9-fp16'
  | 'dolphin-llama3:70b-v2.9-q2_K'
  | 'dolphin-llama3:70b-v2.9-q3_K_L'
  | 'dolphin-llama3:70b-v2.9-q3_K_M'
  | 'dolphin-llama3:70b-v2.9-q3_K_S'
  | 'dolphin-llama3:70b-v2.9-q4_0'
  | 'dolphin-llama3:70b-v2.9-q4_1'
  | 'dolphin-llama3:70b-v2.9-q4_K_M'
  | 'dolphin-llama3:70b-v2.9-q4_K_S'
  | 'dolphin-llama3:70b-v2.9-q5_0'
  | 'dolphin-llama3:70b-v2.9-q5_1'
  | 'dolphin-llama3:70b-v2.9-q5_K_M'
  | 'dolphin-llama3:70b-v2.9-q5_K_S'
  | 'dolphin-llama3:70b-v2.9-q6_K'
  | 'dolphin-llama3:70b-v2.9-q8_0'
  | 'dolphin-llama3:8b'
  | 'dolphin-llama3:8b-256k'
  | 'dolphin-llama3:8b-256k-v2.9'
  | 'dolphin-llama3:8b-256k-v2.9-fp16'
  | 'dolphin-llama3:8b-256k-v2.9-q2_K'
  | 'dolphin-llama3:8b-256k-v2.9-q3_K_L'
  | 'dolphin-llama3:8b-256k-v2.9-q3_K_M'
  | 'dolphin-llama3:8b-256k-v2.9-q3_K_S'
  | 'dolphin-llama3:8b-256k-v2.9-q4_0'
  | 'dolphin-llama3:8b-256k-v2.9-q4_1'
  | 'dolphin-llama3:8b-256k-v2.9-q4_K_M'
  | 'dolphin-llama3:8b-256k-v2.9-q4_K_S'
  | 'dolphin-llama3:8b-256k-v2.9-q5_0'
  | 'dolphin-llama3:8b-256k-v2.9-q5_1'
  | 'dolphin-llama3:8b-256k-v2.9-q5_K_M'
  | 'dolphin-llama3:8b-256k-v2.9-q5_K_S'
  | 'dolphin-llama3:8b-256k-v2.9-q6_K'
  | 'dolphin-llama3:8b-256k-v2.9-q8_0'
  | 'dolphin-llama3:8b-v2.9'
  | 'dolphin-llama3:8b-v2.9-fp16'
  | 'dolphin-llama3:8b-v2.9-q2_K'
  | 'dolphin-llama3:8b-v2.9-q3_K_L'
  | 'dolphin-llama3:8b-v2.9-q3_K_M'
  | 'dolphin-llama3:8b-v2.9-q3_K_S'
  | 'dolphin-llama3:8b-v2.9-q4_0'
  | 'dolphin-llama3:8b-v2.9-q4_1'
  | 'dolphin-llama3:8b-v2.9-q4_K_M'
  | 'dolphin-llama3:8b-v2.9-q4_K_S'
  | 'dolphin-llama3:8b-v2.9-q5_0'
  | 'dolphin-llama3:8b-v2.9-q5_1'
  | 'dolphin-llama3:8b-v2.9-q5_K_M'
  | 'dolphin-llama3:8b-v2.9-q5_K_S'
  | 'dolphin-llama3:8b-v2.9-q6_K'
  | 'dolphin-llama3:8b-v2.9-q8_0'
  | 'dolphin-llama3:latest'
  | 'dolphin-llama3:v2.9'
  | 'dolphin-mistral'
  | 'dolphin-mistral:7b'
  | 'dolphin-mistral:7b-v2'
  | 'dolphin-mistral:7b-v2-fp16'
  | 'dolphin-mistral:7b-v2-q2_K'
  | 'dolphin-mistral:7b-v2-q3_K_L'
  | 'dolphin-mistral:7b-v2-q3_K_M'
  | 'dolphin-mistral:7b-v2-q3_K_S'
  | 'dolphin-mistral:7b-v2-q4_0'
  | 'dolphin-mistral:7b-v2-q4_1'
  | 'dolphin-mistral:7b-v2-q4_K_M'
  | 'dolphin-mistral:7b-v2-q4_K_S'
  | 'dolphin-mistral:7b-v2-q5_0'
  | 'dolphin-mistral:7b-v2-q5_1'
  | 'dolphin-mistral:7b-v2-q5_K_M'
  | 'dolphin-mistral:7b-v2-q5_K_S'
  | 'dolphin-mistral:7b-v2-q6_K'
  | 'dolphin-mistral:7b-v2-q8_0'
  | 'dolphin-mistral:7b-v2.1'
  | 'dolphin-mistral:7b-v2.1-fp16'
  | 'dolphin-mistral:7b-v2.1-q2_K'
  | 'dolphin-mistral:7b-v2.1-q3_K_L'
  | 'dolphin-mistral:7b-v2.1-q3_K_M'
  | 'dolphin-mistral:7b-v2.1-q3_K_S'
  | 'dolphin-mistral:7b-v2.1-q4_0'
  | 'dolphin-mistral:7b-v2.1-q4_1'
  | 'dolphin-mistral:7b-v2.1-q4_K_M'
  | 'dolphin-mistral:7b-v2.1-q4_K_S'
  | 'dolphin-mistral:7b-v2.1-q5_0'
  | 'dolphin-mistral:7b-v2.1-q5_1'
  | 'dolphin-mistral:7b-v2.1-q5_K_M'
  | 'dolphin-mistral:7b-v2.1-q5_K_S'
  | 'dolphin-mistral:7b-v2.1-q6_K'
  | 'dolphin-mistral:7b-v2.1-q8_0'
  | 'dolphin-mistral:7b-v2.2'
  | 'dolphin-mistral:7b-v2.2-fp16'
  | 'dolphin-mistral:7b-v2.2-q2_K'
  | 'dolphin-mistral:7b-v2.2-q3_K_L'
  | 'dolphin-mistral:7b-v2.2-q3_K_M'
  | 'dolphin-mistral:7b-v2.2-q3_K_S'
  | 'dolphin-mistral:7b-v2.2-q4_0'
  | 'dolphin-mistral:7b-v2.2-q4_1'
  | 'dolphin-mistral:7b-v2.2-q4_K_M'
  | 'dolphin-mistral:7b-v2.2-q4_K_S'
  | 'dolphin-mistral:7b-v2.2-q5_0'
  | 'dolphin-mistral:7b-v2.2-q5_1'
  | 'dolphin-mistral:7b-v2.2-q5_K_M'
  | 'dolphin-mistral:7b-v2.2-q5_K_S'
  | 'dolphin-mistral:7b-v2.2-q6_K'
  | 'dolphin-mistral:7b-v2.2-q8_0'
  | 'dolphin-mistral:7b-v2.2.1'
  | 'dolphin-mistral:7b-v2.2.1-fp16'
  | 'dolphin-mistral:7b-v2.2.1-q2_K'
  | 'dolphin-mistral:7b-v2.2.1-q3_K_L'
  | 'dolphin-mistral:7b-v2.2.1-q3_K_M'
  | 'dolphin-mistral:7b-v2.2.1-q3_K_S'
  | 'dolphin-mistral:7b-v2.2.1-q4_0'
  | 'dolphin-mistral:7b-v2.2.1-q4_1'
  | 'dolphin-mistral:7b-v2.2.1-q4_K_M'
  | 'dolphin-mistral:7b-v2.2.1-q4_K_S'
  | 'dolphin-mistral:7b-v2.2.1-q5_0'
  | 'dolphin-mistral:7b-v2.2.1-q5_1'
  | 'dolphin-mistral:7b-v2.2.1-q5_K_M'
  | 'dolphin-mistral:7b-v2.2.1-q5_K_S'
  | 'dolphin-mistral:7b-v2.2.1-q6_K'
  | 'dolphin-mistral:7b-v2.2.1-q8_0'
  | 'dolphin-mistral:7b-v2.6'
  | 'dolphin-mistral:7b-v2.6-dpo-laser'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-fp16'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q2_K'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_L'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_M'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_S'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q4_0'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q4_1'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_M'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_S'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q5_0'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q5_1'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_M'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_S'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q6_K'
  | 'dolphin-mistral:7b-v2.6-dpo-laser-q8_0'
  | 'dolphin-mistral:7b-v2.6-fp16'
  | 'dolphin-mistral:7b-v2.6-q2_K'
  | 'dolphin-mistral:7b-v2.6-q3_K_L'
  | 'dolphin-mistral:7b-v2.6-q3_K_M'
  | 'dolphin-mistral:7b-v2.6-q3_K_S'
  | 'dolphin-mistral:7b-v2.6-q4_0'
  | 'dolphin-mistral:7b-v2.6-q4_1'
  | 'dolphin-mistral:7b-v2.6-q4_K_M'
  | 'dolphin-mistral:7b-v2.6-q4_K_S'
  | 'dolphin-mistral:7b-v2.6-q5_0'
  | 'dolphin-mistral:7b-v2.6-q5_1'
  | 'dolphin-mistral:7b-v2.6-q5_K_M'
  | 'dolphin-mistral:7b-v2.6-q5_K_S'
  | 'dolphin-mistral:7b-v2.6-q6_K'
  | 'dolphin-mistral:7b-v2.6-q8_0'
  | 'dolphin-mistral:7b-v2.8'
  | 'dolphin-mistral:7b-v2.8-fp16'
  | 'dolphin-mistral:7b-v2.8-q2_K'
  | 'dolphin-mistral:7b-v2.8-q3_K_L'
  | 'dolphin-mistral:7b-v2.8-q3_K_M'
  | 'dolphin-mistral:7b-v2.8-q3_K_S'
  | 'dolphin-mistral:7b-v2.8-q4_0'
  | 'dolphin-mistral:7b-v2.8-q4_1'
  | 'dolphin-mistral:7b-v2.8-q4_K_M'
  | 'dolphin-mistral:7b-v2.8-q4_K_S'
  | 'dolphin-mistral:7b-v2.8-q5_0'
  | 'dolphin-mistral:7b-v2.8-q5_1'
  | 'dolphin-mistral:7b-v2.8-q5_K_M'
  | 'dolphin-mistral:7b-v2.8-q5_K_S'
  | 'dolphin-mistral:7b-v2.8-q6_K'
  | 'dolphin-mistral:7b-v2.8-q8_0'
  | 'dolphin-mistral:latest'
  | 'dolphin-mistral:v2'
  | 'dolphin-mistral:v2.1'
  | 'dolphin-mistral:v2.2'
  | 'dolphin-mistral:v2.2.1'
  | 'dolphin-mistral:v2.6'
  | 'dolphin-mistral:v2.8'
  | 'dolphin-mixtral'
  | 'dolphin-mixtral:8x22b'
  | 'dolphin-mixtral:8x22b-v2.9'
  | 'dolphin-mixtral:8x22b-v2.9-fp16'
  | 'dolphin-mixtral:8x22b-v2.9-q2_K'
  | 'dolphin-mixtral:8x22b-v2.9-q3_K_L'
  | 'dolphin-mixtral:8x22b-v2.9-q3_K_M'
  | 'dolphin-mixtral:8x22b-v2.9-q3_K_S'
  | 'dolphin-mixtral:8x22b-v2.9-q4_0'
  | 'dolphin-mixtral:8x22b-v2.9-q4_1'
  | 'dolphin-mixtral:8x22b-v2.9-q4_K_M'
  | 'dolphin-mixtral:8x22b-v2.9-q4_K_S'
  | 'dolphin-mixtral:8x22b-v2.9-q5_0'
  | 'dolphin-mixtral:8x22b-v2.9-q5_1'
  | 'dolphin-mixtral:8x22b-v2.9-q5_K_M'
  | 'dolphin-mixtral:8x22b-v2.9-q5_K_S'
  | 'dolphin-mixtral:8x22b-v2.9-q6_K'
  | 'dolphin-mixtral:8x22b-v2.9-q8_0'
  | 'dolphin-mixtral:8x7b'
  | 'dolphin-mixtral:8x7b-v2.5'
  | 'dolphin-mixtral:8x7b-v2.5-fp16'
  | 'dolphin-mixtral:8x7b-v2.5-q2_K'
  | 'dolphin-mixtral:8x7b-v2.5-q3_K_L'
  | 'dolphin-mixtral:8x7b-v2.5-q3_K_M'
  | 'dolphin-mixtral:8x7b-v2.5-q3_K_S'
  | 'dolphin-mixtral:8x7b-v2.5-q4_0'
  | 'dolphin-mixtral:8x7b-v2.5-q4_1'
  | 'dolphin-mixtral:8x7b-v2.5-q4_K_M'
  | 'dolphin-mixtral:8x7b-v2.5-q4_K_S'
  | 'dolphin-mixtral:8x7b-v2.5-q5_0'
  | 'dolphin-mixtral:8x7b-v2.5-q5_1'
  | 'dolphin-mixtral:8x7b-v2.5-q5_K_M'
  | 'dolphin-mixtral:8x7b-v2.5-q5_K_S'
  | 'dolphin-mixtral:8x7b-v2.5-q6_K'
  | 'dolphin-mixtral:8x7b-v2.5-q8_0'
  | 'dolphin-mixtral:8x7b-v2.6'
  | 'dolphin-mixtral:8x7b-v2.6-fp16'
  | 'dolphin-mixtral:8x7b-v2.6-q2_K'
  | 'dolphin-mixtral:8x7b-v2.6-q3_K_L'
  | 'dolphin-mixtral:8x7b-v2.6-q3_K_M'
  | 'dolphin-mixtral:8x7b-v2.6-q3_K_S'
  | 'dolphin-mixtral:8x7b-v2.6-q4_0'
  | 'dolphin-mixtral:8x7b-v2.6-q4_1'
  | 'dolphin-mixtral:8x7b-v2.6-q4_K_M'
  | 'dolphin-mixtral:8x7b-v2.6-q4_K_S'
  | 'dolphin-mixtral:8x7b-v2.6-q5_0'
  | 'dolphin-mixtral:8x7b-v2.6-q5_1'
  | 'dolphin-mixtral:8x7b-v2.6-q5_K_M'
  | 'dolphin-mixtral:8x7b-v2.6-q5_K_S'
  | 'dolphin-mixtral:8x7b-v2.6-q6_K'
  | 'dolphin-mixtral:8x7b-v2.6-q8_0'
  | 'dolphin-mixtral:8x7b-v2.7'
  | 'dolphin-mixtral:8x7b-v2.7-fp16'
  | 'dolphin-mixtral:8x7b-v2.7-q2_K'
  | 'dolphin-mixtral:8x7b-v2.7-q3_K_L'
  | 'dolphin-mixtral:8x7b-v2.7-q3_K_M'
  | 'dolphin-mixtral:8x7b-v2.7-q3_K_S'
  | 'dolphin-mixtral:8x7b-v2.7-q4_0'
  | 'dolphin-mixtral:8x7b-v2.7-q4_1'
  | 'dolphin-mixtral:8x7b-v2.7-q4_K_M'
  | 'dolphin-mixtral:8x7b-v2.7-q4_K_S'
  | 'dolphin-mixtral:8x7b-v2.7-q5_0'
  | 'dolphin-mixtral:8x7b-v2.7-q5_1'
  | 'dolphin-mixtral:8x7b-v2.7-q5_K_M'
  | 'dolphin-mixtral:8x7b-v2.7-q5_K_S'
  | 'dolphin-mixtral:8x7b-v2.7-q6_K'
  | 'dolphin-mixtral:8x7b-v2.7-q8_0'
  | 'dolphin-mixtral:latest'
  | 'dolphin-mixtral:v2.5'
  | 'dolphin-mixtral:v2.6'
  | 'dolphin-mixtral:v2.7'
  | 'dolphin-phi'
  | 'dolphin-phi:2.7b'
  | 'dolphin-phi:2.7b-v2.6'
  | 'dolphin-phi:2.7b-v2.6-q2_K'
  | 'dolphin-phi:2.7b-v2.6-q3_K_L'
  | 'dolphin-phi:2.7b-v2.6-q3_K_M'
  | 'dolphin-phi:2.7b-v2.6-q3_K_S'
  | 'dolphin-phi:2.7b-v2.6-q4_0'
  | 'dolphin-phi:2.7b-v2.6-q4_K_M'
  | 'dolphin-phi:2.7b-v2.6-q4_K_S'
  | 'dolphin-phi:2.7b-v2.6-q5_0'
  | 'dolphin-phi:2.7b-v2.6-q5_K_M'
  | 'dolphin-phi:2.7b-v2.6-q5_K_S'
  | 'dolphin-phi:2.7b-v2.6-q6_K'
  | 'dolphin-phi:2.7b-v2.6-q8_0'
  | 'dolphin-phi:latest'
  | 'dolphin3'
  | 'dolphin3:8b'
  | 'dolphin3:8b-llama3.1-fp16'
  | 'dolphin3:8b-llama3.1-q4_K_M'
  | 'dolphin3:8b-llama3.1-q8_0'
  | 'dolphin3:latest'
  | 'dolphincoder'
  | 'dolphincoder:15b'
  | 'dolphincoder:15b-starcoder2'
  | 'dolphincoder:15b-starcoder2-fp16'
  | 'dolphincoder:15b-starcoder2-q2_K'
  | 'dolphincoder:15b-starcoder2-q3_K_L'
  | 'dolphincoder:15b-starcoder2-q3_K_M'
  | 'dolphincoder:15b-starcoder2-q3_K_S'
  | 'dolphincoder:15b-starcoder2-q4_0'
  | 'dolphincoder:15b-starcoder2-q4_1'
  | 'dolphincoder:15b-starcoder2-q4_K_M'
  | 'dolphincoder:15b-starcoder2-q4_K_S'
  | 'dolphincoder:15b-starcoder2-q5_0'
  | 'dolphincoder:15b-starcoder2-q5_1'
  | 'dolphincoder:15b-starcoder2-q5_K_M'
  | 'dolphincoder:15b-starcoder2-q5_K_S'
  | 'dolphincoder:15b-starcoder2-q6_K'
  | 'dolphincoder:15b-starcoder2-q8_0'
  | 'dolphincoder:7b'
  | 'dolphincoder:7b-starcoder2'
  | 'dolphincoder:7b-starcoder2-fp16'
  | 'dolphincoder:7b-starcoder2-q2_K'
  | 'dolphincoder:7b-starcoder2-q3_K_L'
  | 'dolphincoder:7b-starcoder2-q3_K_M'
  | 'dolphincoder:7b-starcoder2-q3_K_S'
  | 'dolphincoder:7b-starcoder2-q4_0'
  | 'dolphincoder:7b-starcoder2-q4_1'
  | 'dolphincoder:7b-starcoder2-q4_K_M'
  | 'dolphincoder:7b-starcoder2-q4_K_S'
  | 'dolphincoder:7b-starcoder2-q5_0'
  | 'dolphincoder:7b-starcoder2-q5_1'
  | 'dolphincoder:7b-starcoder2-q5_K_M'
  | 'dolphincoder:7b-starcoder2-q5_K_S'
  | 'dolphincoder:7b-starcoder2-q6_K'
  | 'dolphincoder:7b-starcoder2-q8_0'
  | 'dolphincoder:latest'
  | 'duckdb-nsql'
  | 'duckdb-nsql:7b'
  | 'duckdb-nsql:7b-fp16'
  | 'duckdb-nsql:7b-q2_K'
  | 'duckdb-nsql:7b-q3_K_L'
  | 'duckdb-nsql:7b-q3_K_M'
  | 'duckdb-nsql:7b-q3_K_S'
  | 'duckdb-nsql:7b-q4_0'
  | 'duckdb-nsql:7b-q4_1'
  | 'duckdb-nsql:7b-q4_K_M'
  | 'duckdb-nsql:7b-q4_K_S'
  | 'duckdb-nsql:7b-q5_0'
  | 'duckdb-nsql:7b-q5_1'
  | 'duckdb-nsql:7b-q5_K_M'
  | 'duckdb-nsql:7b-q5_K_S'
  | 'duckdb-nsql:7b-q6_K'
  | 'duckdb-nsql:7b-q8_0'
  | 'duckdb-nsql:latest'
  | 'everythinglm'
  | 'everythinglm:13b'
  | 'everythinglm:13b-16k'
  | 'everythinglm:13b-16k-fp16'
  | 'everythinglm:13b-16k-q2_K'
  | 'everythinglm:13b-16k-q3_K_L'
  | 'everythinglm:13b-16k-q3_K_M'
  | 'everythinglm:13b-16k-q3_K_S'
  | 'everythinglm:13b-16k-q4_0'
  | 'everythinglm:13b-16k-q4_1'
  | 'everythinglm:13b-16k-q4_K_M'
  | 'everythinglm:13b-16k-q4_K_S'
  | 'everythinglm:13b-16k-q5_0'
  | 'everythinglm:13b-16k-q5_1'
  | 'everythinglm:13b-16k-q5_K_M'
  | 'everythinglm:13b-16k-q5_K_S'
  | 'everythinglm:13b-16k-q6_K'
  | 'everythinglm:13b-16k-q8_0'
  | 'everythinglm:latest'
  | 'exaone-deep'
  | 'exaone-deep:2.4b'
  | 'exaone-deep:2.4b-fp16'
  | 'exaone-deep:2.4b-q4_K_M'
  | 'exaone-deep:2.4b-q8_0'
  | 'exaone-deep:32b'
  | 'exaone-deep:32b-fp16'
  | 'exaone-deep:32b-q4_K_M'
  | 'exaone-deep:32b-q8_0'
  | 'exaone-deep:7.8b'
  | 'exaone-deep:7.8b-fp16'
  | 'exaone-deep:7.8b-q4_K_M'
  | 'exaone-deep:7.8b-q8_0'
  | 'exaone-deep:latest'
  | 'exaone3.5'
  | 'exaone3.5:2.4b'
  | 'exaone3.5:2.4b-instruct-fp16'
  | 'exaone3.5:2.4b-instruct-q4_K_M'
  | 'exaone3.5:2.4b-instruct-q8_0'
  | 'exaone3.5:32b'
  | 'exaone3.5:32b-instruct-fp16'
  | 'exaone3.5:32b-instruct-q4_K_M'
  | 'exaone3.5:32b-instruct-q8_0'
  | 'exaone3.5:7.8b'
  | 'exaone3.5:7.8b-instruct-fp16'
  | 'exaone3.5:7.8b-instruct-q4_K_M'
  | 'exaone3.5:7.8b-instruct-q8_0'
  | 'exaone3.5:latest'
  | 'falcon'
  | 'falcon2'
  | 'falcon2:11b'
  | 'falcon2:11b-fp16'
  | 'falcon2:11b-q2_K'
  | 'falcon2:11b-q3_K_L'
  | 'falcon2:11b-q3_K_M'
  | 'falcon2:11b-q3_K_S'
  | 'falcon2:11b-q4_0'
  | 'falcon2:11b-q4_1'
  | 'falcon2:11b-q4_K_M'
  | 'falcon2:11b-q4_K_S'
  | 'falcon2:11b-q5_0'
  | 'falcon2:11b-q5_1'
  | 'falcon2:11b-q5_K_M'
  | 'falcon2:11b-q5_K_S'
  | 'falcon2:11b-q6_K'
  | 'falcon2:11b-q8_0'
  | 'falcon2:latest'
  | 'falcon3'
  | 'falcon3:10b'
  | 'falcon3:10b-instruct-fp16'
  | 'falcon3:10b-instruct-q4_K_M'
  | 'falcon3:10b-instruct-q8_0'
  | 'falcon3:1b'
  | 'falcon3:1b-instruct-fp16'
  | 'falcon3:1b-instruct-q4_K_M'
  | 'falcon3:1b-instruct-q8_0'
  | 'falcon3:3b'
  | 'falcon3:3b-instruct-fp16'
  | 'falcon3:3b-instruct-q4_K_M'
  | 'falcon3:3b-instruct-q8_0'
  | 'falcon3:7b'
  | 'falcon3:7b-instruct-fp16'
  | 'falcon3:7b-instruct-q4_K_M'
  | 'falcon3:7b-instruct-q8_0'
  | 'falcon3:latest'
  | 'falcon:180b'
  | 'falcon:180b-chat'
  | 'falcon:180b-chat-q4_0'
  | 'falcon:180b-text'
  | 'falcon:180b-text-q4_0'
  | 'falcon:40b'
  | 'falcon:40b-instruct'
  | 'falcon:40b-instruct-fp16'
  | 'falcon:40b-instruct-q4_0'
  | 'falcon:40b-instruct-q4_1'
  | 'falcon:40b-instruct-q5_0'
  | 'falcon:40b-instruct-q5_1'
  | 'falcon:40b-instruct-q8_0'
  | 'falcon:40b-text'
  | 'falcon:40b-text-fp16'
  | 'falcon:40b-text-q4_0'
  | 'falcon:40b-text-q4_1'
  | 'falcon:40b-text-q5_0'
  | 'falcon:40b-text-q5_1'
  | 'falcon:40b-text-q8_0'
  | 'falcon:7b'
  | 'falcon:7b-instruct'
  | 'falcon:7b-instruct-fp16'
  | 'falcon:7b-instruct-q4_0'
  | 'falcon:7b-instruct-q4_1'
  | 'falcon:7b-instruct-q5_0'
  | 'falcon:7b-instruct-q5_1'
  | 'falcon:7b-instruct-q8_0'
  | 'falcon:7b-text'
  | 'falcon:7b-text-fp16'
  | 'falcon:7b-text-q4_0'
  | 'falcon:7b-text-q4_1'
  | 'falcon:7b-text-q5_0'
  | 'falcon:7b-text-q5_1'
  | 'falcon:7b-text-q8_0'
  | 'falcon:instruct'
  | 'falcon:latest'
  | 'falcon:text'
  | 'firefunction-v2'
  | 'firefunction-v2:70b'
  | 'firefunction-v2:70b-fp16'
  | 'firefunction-v2:70b-q2_K'
  | 'firefunction-v2:70b-q3_K_L'
  | 'firefunction-v2:70b-q3_K_M'
  | 'firefunction-v2:70b-q3_K_S'
  | 'firefunction-v2:70b-q4_0'
  | 'firefunction-v2:70b-q4_1'
  | 'firefunction-v2:70b-q4_K_M'
  | 'firefunction-v2:70b-q4_K_S'
  | 'firefunction-v2:70b-q5_0'
  | 'firefunction-v2:70b-q5_1'
  | 'firefunction-v2:70b-q5_K_M'
  | 'firefunction-v2:70b-q5_K_S'
  | 'firefunction-v2:70b-q6_K'
  | 'firefunction-v2:70b-q8_0'
  | 'firefunction-v2:latest'
  | 'gemma'
  | 'gemma2'
  | 'gemma2:27b'
  | 'gemma2:27b-instruct-fp16'
  | 'gemma2:27b-instruct-q2_K'
  | 'gemma2:27b-instruct-q3_K_L'
  | 'gemma2:27b-instruct-q3_K_M'
  | 'gemma2:27b-instruct-q3_K_S'
  | 'gemma2:27b-instruct-q4_0'
  | 'gemma2:27b-instruct-q4_1'
  | 'gemma2:27b-instruct-q4_K_M'
  | 'gemma2:27b-instruct-q4_K_S'
  | 'gemma2:27b-instruct-q5_0'
  | 'gemma2:27b-instruct-q5_1'
  | 'gemma2:27b-instruct-q5_K_M'
  | 'gemma2:27b-instruct-q5_K_S'
  | 'gemma2:27b-instruct-q6_K'
  | 'gemma2:27b-instruct-q8_0'
  | 'gemma2:27b-text-fp16'
  | 'gemma2:27b-text-q2_K'
  | 'gemma2:27b-text-q3_K_L'
  | 'gemma2:27b-text-q3_K_M'
  | 'gemma2:27b-text-q3_K_S'
  | 'gemma2:27b-text-q4_0'
  | 'gemma2:27b-text-q4_1'
  | 'gemma2:27b-text-q4_K_M'
  | 'gemma2:27b-text-q4_K_S'
  | 'gemma2:27b-text-q5_0'
  | 'gemma2:27b-text-q5_1'
  | 'gemma2:27b-text-q5_K_M'
  | 'gemma2:27b-text-q5_K_S'
  | 'gemma2:27b-text-q6_K'
  | 'gemma2:27b-text-q8_0'
  | 'gemma2:2b'
  | 'gemma2:2b-instruct-fp16'
  | 'gemma2:2b-instruct-q2_K'
  | 'gemma2:2b-instruct-q3_K_L'
  | 'gemma2:2b-instruct-q3_K_M'
  | 'gemma2:2b-instruct-q3_K_S'
  | 'gemma2:2b-instruct-q4_0'
  | 'gemma2:2b-instruct-q4_1'
  | 'gemma2:2b-instruct-q4_K_M'
  | 'gemma2:2b-instruct-q4_K_S'
  | 'gemma2:2b-instruct-q5_0'
  | 'gemma2:2b-instruct-q5_1'
  | 'gemma2:2b-instruct-q5_K_M'
  | 'gemma2:2b-instruct-q5_K_S'
  | 'gemma2:2b-instruct-q6_K'
  | 'gemma2:2b-instruct-q8_0'
  | 'gemma2:2b-text-fp16'
  | 'gemma2:2b-text-q2_K'
  | 'gemma2:2b-text-q3_K_L'
  | 'gemma2:2b-text-q3_K_M'
  | 'gemma2:2b-text-q3_K_S'
  | 'gemma2:2b-text-q4_0'
  | 'gemma2:2b-text-q4_1'
  | 'gemma2:2b-text-q4_K_M'
  | 'gemma2:2b-text-q4_K_S'
  | 'gemma2:2b-text-q5_0'
  | 'gemma2:2b-text-q5_1'
  | 'gemma2:2b-text-q5_K_M'
  | 'gemma2:2b-text-q5_K_S'
  | 'gemma2:2b-text-q6_K'
  | 'gemma2:2b-text-q8_0'
  | 'gemma2:9b'
  | 'gemma2:9b-instruct-fp16'
  | 'gemma2:9b-instruct-q2_K'
  | 'gemma2:9b-instruct-q3_K_L'
  | 'gemma2:9b-instruct-q3_K_M'
  | 'gemma2:9b-instruct-q3_K_S'
  | 'gemma2:9b-instruct-q4_0'
  | 'gemma2:9b-instruct-q4_1'
  | 'gemma2:9b-instruct-q4_K_M'
  | 'gemma2:9b-instruct-q4_K_S'
  | 'gemma2:9b-instruct-q5_0'
  | 'gemma2:9b-instruct-q5_1'
  | 'gemma2:9b-instruct-q5_K_M'
  | 'gemma2:9b-instruct-q5_K_S'
  | 'gemma2:9b-instruct-q6_K'
  | 'gemma2:9b-instruct-q8_0'
  | 'gemma2:9b-text-fp16'
  | 'gemma2:9b-text-q2_K'
  | 'gemma2:9b-text-q3_K_L'
  | 'gemma2:9b-text-q3_K_M'
  | 'gemma2:9b-text-q3_K_S'
  | 'gemma2:9b-text-q4_0'
  | 'gemma2:9b-text-q4_1'
  | 'gemma2:9b-text-q4_K_M'
  | 'gemma2:9b-text-q4_K_S'
  | 'gemma2:9b-text-q5_0'
  | 'gemma2:9b-text-q5_1'
  | 'gemma2:9b-text-q5_K_M'
  | 'gemma2:9b-text-q5_K_S'
  | 'gemma2:9b-text-q6_K'
  | 'gemma2:9b-text-q8_0'
  | 'gemma2:latest'
  | 'gemma3n'
  | 'gemma3n:e2b'
  | 'gemma3n:e2b-it-fp16'
  | 'gemma3n:e2b-it-q4_K_M'
  | 'gemma3n:e2b-it-q8_0'
  | 'gemma3n:e4b'
  | 'gemma3n:e4b-it-fp16'
  | 'gemma3n:e4b-it-q4_K_M'
  | 'gemma3n:e4b-it-q8_0'
  | 'gemma3n:latest'
  | 'gemma:2b'
  | 'gemma:2b-instruct'
  | 'gemma:2b-instruct-fp16'
  | 'gemma:2b-instruct-q2_K'
  | 'gemma:2b-instruct-q3_K_L'
  | 'gemma:2b-instruct-q3_K_M'
  | 'gemma:2b-instruct-q3_K_S'
  | 'gemma:2b-instruct-q4_0'
  | 'gemma:2b-instruct-q4_1'
  | 'gemma:2b-instruct-q4_K_M'
  | 'gemma:2b-instruct-q4_K_S'
  | 'gemma:2b-instruct-q5_0'
  | 'gemma:2b-instruct-q5_1'
  | 'gemma:2b-instruct-q5_K_M'
  | 'gemma:2b-instruct-q5_K_S'
  | 'gemma:2b-instruct-q6_K'
  | 'gemma:2b-instruct-q8_0'
  | 'gemma:2b-instruct-v1.1-fp16'
  | 'gemma:2b-instruct-v1.1-q2_K'
  | 'gemma:2b-instruct-v1.1-q3_K_L'
  | 'gemma:2b-instruct-v1.1-q3_K_M'
  | 'gemma:2b-instruct-v1.1-q3_K_S'
  | 'gemma:2b-instruct-v1.1-q4_0'
  | 'gemma:2b-instruct-v1.1-q4_1'
  | 'gemma:2b-instruct-v1.1-q4_K_M'
  | 'gemma:2b-instruct-v1.1-q4_K_S'
  | 'gemma:2b-instruct-v1.1-q5_0'
  | 'gemma:2b-instruct-v1.1-q5_1'
  | 'gemma:2b-instruct-v1.1-q5_K_M'
  | 'gemma:2b-instruct-v1.1-q5_K_S'
  | 'gemma:2b-instruct-v1.1-q6_K'
  | 'gemma:2b-instruct-v1.1-q8_0'
  | 'gemma:2b-text'
  | 'gemma:2b-text-fp16'
  | 'gemma:2b-text-q2_K'
  | 'gemma:2b-text-q3_K_L'
  | 'gemma:2b-text-q3_K_M'
  | 'gemma:2b-text-q3_K_S'
  | 'gemma:2b-text-q4_0'
  | 'gemma:2b-text-q4_1'
  | 'gemma:2b-text-q4_K_M'
  | 'gemma:2b-text-q4_K_S'
  | 'gemma:2b-text-q5_0'
  | 'gemma:2b-text-q5_1'
  | 'gemma:2b-text-q5_K_M'
  | 'gemma:2b-text-q5_K_S'
  | 'gemma:2b-text-q6_K'
  | 'gemma:2b-text-q8_0'
  | 'gemma:2b-v1.1'
  | 'gemma:7b'
  | 'gemma:7b-instruct'
  | 'gemma:7b-instruct-fp16'
  | 'gemma:7b-instruct-q2_K'
  | 'gemma:7b-instruct-q3_K_L'
  | 'gemma:7b-instruct-q3_K_M'
  | 'gemma:7b-instruct-q3_K_S'
  | 'gemma:7b-instruct-q4_0'
  | 'gemma:7b-instruct-q4_1'
  | 'gemma:7b-instruct-q4_K_M'
  | 'gemma:7b-instruct-q4_K_S'
  | 'gemma:7b-instruct-q5_0'
  | 'gemma:7b-instruct-q5_1'
  | 'gemma:7b-instruct-q5_K_M'
  | 'gemma:7b-instruct-q5_K_S'
  | 'gemma:7b-instruct-q6_K'
  | 'gemma:7b-instruct-q8_0'
  | 'gemma:7b-instruct-v1.1-fp16'
  | 'gemma:7b-instruct-v1.1-q2_K'
  | 'gemma:7b-instruct-v1.1-q3_K_L'
  | 'gemma:7b-instruct-v1.1-q3_K_M'
  | 'gemma:7b-instruct-v1.1-q3_K_S'
  | 'gemma:7b-instruct-v1.1-q4_0'
  | 'gemma:7b-instruct-v1.1-q4_1'
  | 'gemma:7b-instruct-v1.1-q4_K_M'
  | 'gemma:7b-instruct-v1.1-q4_K_S'
  | 'gemma:7b-instruct-v1.1-q5_0'
  | 'gemma:7b-instruct-v1.1-q5_1'
  | 'gemma:7b-instruct-v1.1-q5_K_M'
  | 'gemma:7b-instruct-v1.1-q5_K_S'
  | 'gemma:7b-instruct-v1.1-q6_K'
  | 'gemma:7b-instruct-v1.1-q8_0'
  | 'gemma:7b-text'
  | 'gemma:7b-text-fp16'
  | 'gemma:7b-text-q2_K'
  | 'gemma:7b-text-q3_K_L'
  | 'gemma:7b-text-q3_K_M'
  | 'gemma:7b-text-q3_K_S'
  | 'gemma:7b-text-q4_0'
  | 'gemma:7b-text-q4_1'
  | 'gemma:7b-text-q4_K_M'
  | 'gemma:7b-text-q4_K_S'
  | 'gemma:7b-text-q5_0'
  | 'gemma:7b-text-q5_1'
  | 'gemma:7b-text-q5_K_M'
  | 'gemma:7b-text-q5_K_S'
  | 'gemma:7b-text-q6_K'
  | 'gemma:7b-text-q8_0'
  | 'gemma:7b-v1.1'
  | 'gemma:instruct'
  | 'gemma:latest'
  | 'gemma:text'
  | 'gemma:v1.1'
  | 'glm4'
  | 'glm4:9b'
  | 'glm4:9b-chat-fp16'
  | 'glm4:9b-chat-q2_K'
  | 'glm4:9b-chat-q3_K_L'
  | 'glm4:9b-chat-q3_K_M'
  | 'glm4:9b-chat-q3_K_S'
  | 'glm4:9b-chat-q4_0'
  | 'glm4:9b-chat-q4_1'
  | 'glm4:9b-chat-q4_K_M'
  | 'glm4:9b-chat-q4_K_S'
  | 'glm4:9b-chat-q5_0'
  | 'glm4:9b-chat-q5_1'
  | 'glm4:9b-chat-q5_K_M'
  | 'glm4:9b-chat-q5_K_S'
  | 'glm4:9b-chat-q6_K'
  | 'glm4:9b-chat-q8_0'
  | 'glm4:9b-text-fp16'
  | 'glm4:9b-text-q2_K'
  | 'glm4:9b-text-q3_K_L'
  | 'glm4:9b-text-q3_K_M'
  | 'glm4:9b-text-q3_K_S'
  | 'glm4:9b-text-q4_0'
  | 'glm4:9b-text-q4_1'
  | 'glm4:9b-text-q4_K_M'
  | 'glm4:9b-text-q4_K_S'
  | 'glm4:9b-text-q5_0'
  | 'glm4:9b-text-q5_1'
  | 'glm4:9b-text-q5_K_M'
  | 'glm4:9b-text-q5_K_S'
  | 'glm4:9b-text-q6_K'
  | 'glm4:9b-text-q8_0'
  | 'glm4:latest'
  | 'goliath'
  | 'goliath:120b-fp16'
  | 'goliath:120b-q2_K'
  | 'goliath:120b-q3_K_L'
  | 'goliath:120b-q3_K_M'
  | 'goliath:120b-q3_K_S'
  | 'goliath:120b-q4_0'
  | 'goliath:120b-q4_1'
  | 'goliath:120b-q4_K_M'
  | 'goliath:120b-q4_K_S'
  | 'goliath:120b-q5_0'
  | 'goliath:120b-q5_1'
  | 'goliath:120b-q5_K_M'
  | 'goliath:120b-q5_K_S'
  | 'goliath:120b-q6_K'
  | 'goliath:120b-q8_0'
  | 'goliath:latest'
  | 'gpt-oss'
  | 'gpt-oss:120b'
  | 'gpt-oss:20b'
  | 'gpt-oss:latest'
  | 'granite-code'
  | 'granite-code:20b'
  | 'granite-code:20b-base'
  | 'granite-code:20b-base-fp16'
  | 'granite-code:20b-base-q2_K'
  | 'granite-code:20b-base-q3_K_L'
  | 'granite-code:20b-base-q3_K_M'
  | 'granite-code:20b-base-q3_K_S'
  | 'granite-code:20b-base-q4_0'
  | 'granite-code:20b-base-q4_1'
  | 'granite-code:20b-base-q4_K_M'
  | 'granite-code:20b-base-q4_K_S'
  | 'granite-code:20b-base-q5_0'
  | 'granite-code:20b-base-q5_1'
  | 'granite-code:20b-base-q5_K_M'
  | 'granite-code:20b-base-q5_K_S'
  | 'granite-code:20b-base-q6_K'
  | 'granite-code:20b-base-q8_0'
  | 'granite-code:20b-instruct'
  | 'granite-code:20b-instruct-8k-fp16'
  | 'granite-code:20b-instruct-8k-q2_K'
  | 'granite-code:20b-instruct-8k-q3_K_L'
  | 'granite-code:20b-instruct-8k-q3_K_M'
  | 'granite-code:20b-instruct-8k-q3_K_S'
  | 'granite-code:20b-instruct-8k-q4_0'
  | 'granite-code:20b-instruct-8k-q4_1'
  | 'granite-code:20b-instruct-8k-q4_K_M'
  | 'granite-code:20b-instruct-8k-q4_K_S'
  | 'granite-code:20b-instruct-8k-q5_0'
  | 'granite-code:20b-instruct-8k-q5_1'
  | 'granite-code:20b-instruct-8k-q5_K_M'
  | 'granite-code:20b-instruct-8k-q5_K_S'
  | 'granite-code:20b-instruct-8k-q6_K'
  | 'granite-code:20b-instruct-8k-q8_0'
  | 'granite-code:20b-instruct-q2_K'
  | 'granite-code:20b-instruct-q3_K_L'
  | 'granite-code:20b-instruct-q3_K_M'
  | 'granite-code:20b-instruct-q3_K_S'
  | 'granite-code:20b-instruct-q4_0'
  | 'granite-code:20b-instruct-q4_1'
  | 'granite-code:20b-instruct-q4_K_M'
  | 'granite-code:20b-instruct-q4_K_S'
  | 'granite-code:20b-instruct-q5_0'
  | 'granite-code:20b-instruct-q5_1'
  | 'granite-code:20b-instruct-q5_K_M'
  | 'granite-code:20b-instruct-q5_K_S'
  | 'granite-code:20b-instruct-q6_K'
  | 'granite-code:20b-instruct-q8_0'
  | 'granite-code:34b'
  | 'granite-code:34b-base'
  | 'granite-code:34b-base-q2_K'
  | 'granite-code:34b-base-q3_K_L'
  | 'granite-code:34b-base-q3_K_M'
  | 'granite-code:34b-base-q3_K_S'
  | 'granite-code:34b-base-q4_0'
  | 'granite-code:34b-base-q4_1'
  | 'granite-code:34b-base-q4_K_M'
  | 'granite-code:34b-base-q4_K_S'
  | 'granite-code:34b-base-q5_0'
  | 'granite-code:34b-base-q5_1'
  | 'granite-code:34b-base-q5_K_M'
  | 'granite-code:34b-base-q5_K_S'
  | 'granite-code:34b-base-q6_K'
  | 'granite-code:34b-base-q8_0'
  | 'granite-code:34b-instruct'
  | 'granite-code:34b-instruct-q2_K'
  | 'granite-code:34b-instruct-q3_K_L'
  | 'granite-code:34b-instruct-q3_K_M'
  | 'granite-code:34b-instruct-q3_K_S'
  | 'granite-code:34b-instruct-q4_0'
  | 'granite-code:34b-instruct-q4_1'
  | 'granite-code:34b-instruct-q4_K_M'
  | 'granite-code:34b-instruct-q4_K_S'
  | 'granite-code:34b-instruct-q5_0'
  | 'granite-code:34b-instruct-q5_1'
  | 'granite-code:34b-instruct-q5_K_M'
  | 'granite-code:34b-instruct-q5_K_S'
  | 'granite-code:34b-instruct-q6_K'
  | 'granite-code:34b-instruct-q8_0'
  | 'granite-code:3b'
  | 'granite-code:3b-base'
  | 'granite-code:3b-base-fp16'
  | 'granite-code:3b-base-q2_K'
  | 'granite-code:3b-base-q3_K_L'
  | 'granite-code:3b-base-q3_K_M'
  | 'granite-code:3b-base-q3_K_S'
  | 'granite-code:3b-base-q4_0'
  | 'granite-code:3b-base-q4_1'
  | 'granite-code:3b-base-q4_K_M'
  | 'granite-code:3b-base-q4_K_S'
  | 'granite-code:3b-base-q5_0'
  | 'granite-code:3b-base-q5_1'
  | 'granite-code:3b-base-q5_K_M'
  | 'granite-code:3b-base-q5_K_S'
  | 'granite-code:3b-base-q6_K'
  | 'granite-code:3b-base-q8_0'
  | 'granite-code:3b-instruct'
  | 'granite-code:3b-instruct-128k-fp16'
  | 'granite-code:3b-instruct-128k-q2_K'
  | 'granite-code:3b-instruct-128k-q3_K_L'
  | 'granite-code:3b-instruct-128k-q3_K_M'
  | 'granite-code:3b-instruct-128k-q3_K_S'
  | 'granite-code:3b-instruct-128k-q4_0'
  | 'granite-code:3b-instruct-128k-q4_1'
  | 'granite-code:3b-instruct-128k-q4_K_M'
  | 'granite-code:3b-instruct-128k-q4_K_S'
  | 'granite-code:3b-instruct-128k-q5_0'
  | 'granite-code:3b-instruct-128k-q5_1'
  | 'granite-code:3b-instruct-128k-q5_K_M'
  | 'granite-code:3b-instruct-128k-q5_K_S'
  | 'granite-code:3b-instruct-128k-q6_K'
  | 'granite-code:3b-instruct-128k-q8_0'
  | 'granite-code:3b-instruct-fp16'
  | 'granite-code:3b-instruct-q2_K'
  | 'granite-code:3b-instruct-q3_K_L'
  | 'granite-code:3b-instruct-q3_K_M'
  | 'granite-code:3b-instruct-q3_K_S'
  | 'granite-code:3b-instruct-q4_0'
  | 'granite-code:3b-instruct-q4_1'
  | 'granite-code:3b-instruct-q4_K_M'
  | 'granite-code:3b-instruct-q4_K_S'
  | 'granite-code:3b-instruct-q5_0'
  | 'granite-code:3b-instruct-q5_1'
  | 'granite-code:3b-instruct-q5_K_M'
  | 'granite-code:3b-instruct-q5_K_S'
  | 'granite-code:3b-instruct-q6_K'
  | 'granite-code:3b-instruct-q8_0'
  | 'granite-code:8b'
  | 'granite-code:8b-base'
  | 'granite-code:8b-base-fp16'
  | 'granite-code:8b-base-q2_K'
  | 'granite-code:8b-base-q3_K_L'
  | 'granite-code:8b-base-q3_K_M'
  | 'granite-code:8b-base-q3_K_S'
  | 'granite-code:8b-base-q4_0'
  | 'granite-code:8b-base-q4_1'
  | 'granite-code:8b-base-q4_K_M'
  | 'granite-code:8b-base-q4_K_S'
  | 'granite-code:8b-base-q5_0'
  | 'granite-code:8b-base-q5_1'
  | 'granite-code:8b-base-q5_K_M'
  | 'granite-code:8b-base-q5_K_S'
  | 'granite-code:8b-base-q6_K'
  | 'granite-code:8b-base-q8_0'
  | 'granite-code:8b-instruct'
  | 'granite-code:8b-instruct-128k-q4_0'
  | 'granite-code:8b-instruct-128k-q4_1'
  | 'granite-code:8b-instruct-fp16'
  | 'granite-code:8b-instruct-q2_K'
  | 'granite-code:8b-instruct-q3_K_L'
  | 'granite-code:8b-instruct-q3_K_M'
  | 'granite-code:8b-instruct-q3_K_S'
  | 'granite-code:8b-instruct-q4_0'
  | 'granite-code:8b-instruct-q4_1'
  | 'granite-code:8b-instruct-q4_K_M'
  | 'granite-code:8b-instruct-q4_K_S'
  | 'granite-code:8b-instruct-q5_0'
  | 'granite-code:8b-instruct-q5_1'
  | 'granite-code:8b-instruct-q5_K_M'
  | 'granite-code:8b-instruct-q5_K_S'
  | 'granite-code:8b-instruct-q6_K'
  | 'granite-code:8b-instruct-q8_0'
  | 'granite-code:latest'
  | 'granite3-dense'
  | 'granite3-dense:2b'
  | 'granite3-dense:2b-instruct-fp16'
  | 'granite3-dense:2b-instruct-q2_K'
  | 'granite3-dense:2b-instruct-q3_K_L'
  | 'granite3-dense:2b-instruct-q3_K_M'
  | 'granite3-dense:2b-instruct-q3_K_S'
  | 'granite3-dense:2b-instruct-q4_0'
  | 'granite3-dense:2b-instruct-q4_1'
  | 'granite3-dense:2b-instruct-q4_K_M'
  | 'granite3-dense:2b-instruct-q4_K_S'
  | 'granite3-dense:2b-instruct-q5_0'
  | 'granite3-dense:2b-instruct-q5_1'
  | 'granite3-dense:2b-instruct-q5_K_M'
  | 'granite3-dense:2b-instruct-q5_K_S'
  | 'granite3-dense:2b-instruct-q6_K'
  | 'granite3-dense:2b-instruct-q8_0'
  | 'granite3-dense:8b'
  | 'granite3-dense:8b-instruct-fp16'
  | 'granite3-dense:8b-instruct-q2_K'
  | 'granite3-dense:8b-instruct-q3_K_L'
  | 'granite3-dense:8b-instruct-q3_K_M'
  | 'granite3-dense:8b-instruct-q3_K_S'
  | 'granite3-dense:8b-instruct-q4_0'
  | 'granite3-dense:8b-instruct-q4_1'
  | 'granite3-dense:8b-instruct-q4_K_M'
  | 'granite3-dense:8b-instruct-q4_K_S'
  | 'granite3-dense:8b-instruct-q5_0'
  | 'granite3-dense:8b-instruct-q5_1'
  | 'granite3-dense:8b-instruct-q5_K_M'
  | 'granite3-dense:8b-instruct-q5_K_S'
  | 'granite3-dense:8b-instruct-q6_K'
  | 'granite3-dense:8b-instruct-q8_0'
  | 'granite3-dense:latest'
  | 'granite3-guardian'
  | 'granite3-guardian:2b'
  | 'granite3-guardian:2b-fp16'
  | 'granite3-guardian:2b-q8_0'
  | 'granite3-guardian:8b'
  | 'granite3-guardian:8b-fp16'
  | 'granite3-guardian:8b-q5_K_M'
  | 'granite3-guardian:8b-q5_K_S'
  | 'granite3-guardian:8b-q6_K'
  | 'granite3-guardian:8b-q8_0'
  | 'granite3-guardian:latest'
  | 'granite3-moe'
  | 'granite3-moe:1b'
  | 'granite3-moe:1b-instruct-fp16'
  | 'granite3-moe:1b-instruct-q2_K'
  | 'granite3-moe:1b-instruct-q3_K_L'
  | 'granite3-moe:1b-instruct-q3_K_M'
  | 'granite3-moe:1b-instruct-q3_K_S'
  | 'granite3-moe:1b-instruct-q4_0'
  | 'granite3-moe:1b-instruct-q4_1'
  | 'granite3-moe:1b-instruct-q4_K_M'
  | 'granite3-moe:1b-instruct-q4_K_S'
  | 'granite3-moe:1b-instruct-q5_0'
  | 'granite3-moe:1b-instruct-q5_1'
  | 'granite3-moe:1b-instruct-q5_K_M'
  | 'granite3-moe:1b-instruct-q5_K_S'
  | 'granite3-moe:1b-instruct-q6_K'
  | 'granite3-moe:1b-instruct-q8_0'
  | 'granite3-moe:3b'
  | 'granite3-moe:3b-instruct-fp16'
  | 'granite3-moe:3b-instruct-q2_K'
  | 'granite3-moe:3b-instruct-q3_K_L'
  | 'granite3-moe:3b-instruct-q3_K_M'
  | 'granite3-moe:3b-instruct-q3_K_S'
  | 'granite3-moe:3b-instruct-q4_0'
  | 'granite3-moe:3b-instruct-q4_1'
  | 'granite3-moe:3b-instruct-q4_K_M'
  | 'granite3-moe:3b-instruct-q4_K_S'
  | 'granite3-moe:3b-instruct-q5_0'
  | 'granite3-moe:3b-instruct-q5_1'
  | 'granite3-moe:3b-instruct-q5_K_M'
  | 'granite3-moe:3b-instruct-q5_K_S'
  | 'granite3-moe:3b-instruct-q6_K'
  | 'granite3-moe:3b-instruct-q8_0'
  | 'granite3-moe:latest'
  | 'granite3.1-dense'
  | 'granite3.1-dense:2b'
  | 'granite3.1-dense:2b-instruct-fp16'
  | 'granite3.1-dense:2b-instruct-q2_K'
  | 'granite3.1-dense:2b-instruct-q3_K_L'
  | 'granite3.1-dense:2b-instruct-q3_K_M'
  | 'granite3.1-dense:2b-instruct-q3_K_S'
  | 'granite3.1-dense:2b-instruct-q4_0'
  | 'granite3.1-dense:2b-instruct-q4_1'
  | 'granite3.1-dense:2b-instruct-q4_K_M'
  | 'granite3.1-dense:2b-instruct-q4_K_S'
  | 'granite3.1-dense:2b-instruct-q5_0'
  | 'granite3.1-dense:2b-instruct-q5_1'
  | 'granite3.1-dense:2b-instruct-q5_K_M'
  | 'granite3.1-dense:2b-instruct-q5_K_S'
  | 'granite3.1-dense:2b-instruct-q6_K'
  | 'granite3.1-dense:2b-instruct-q8_0'
  | 'granite3.1-dense:8b'
  | 'granite3.1-dense:8b-instruct-fp16'
  | 'granite3.1-dense:8b-instruct-q2_K'
  | 'granite3.1-dense:8b-instruct-q3_K_L'
  | 'granite3.1-dense:8b-instruct-q3_K_M'
  | 'granite3.1-dense:8b-instruct-q3_K_S'
  | 'granite3.1-dense:8b-instruct-q4_0'
  | 'granite3.1-dense:8b-instruct-q4_1'
  | 'granite3.1-dense:8b-instruct-q4_K_M'
  | 'granite3.1-dense:8b-instruct-q4_K_S'
  | 'granite3.1-dense:8b-instruct-q5_0'
  | 'granite3.1-dense:8b-instruct-q5_1'
  | 'granite3.1-dense:8b-instruct-q5_K_M'
  | 'granite3.1-dense:8b-instruct-q5_K_S'
  | 'granite3.1-dense:8b-instruct-q6_K'
  | 'granite3.1-dense:8b-instruct-q8_0'
  | 'granite3.1-dense:latest'
  | 'granite3.1-moe'
  | 'granite3.1-moe:1b'
  | 'granite3.1-moe:1b-instruct-fp16'
  | 'granite3.1-moe:1b-instruct-q2_K'
  | 'granite3.1-moe:1b-instruct-q3_K_L'
  | 'granite3.1-moe:1b-instruct-q3_K_M'
  | 'granite3.1-moe:1b-instruct-q3_K_S'
  | 'granite3.1-moe:1b-instruct-q4_0'
  | 'granite3.1-moe:1b-instruct-q4_1'
  | 'granite3.1-moe:1b-instruct-q4_K_M'
  | 'granite3.1-moe:1b-instruct-q4_K_S'
  | 'granite3.1-moe:1b-instruct-q5_0'
  | 'granite3.1-moe:1b-instruct-q5_1'
  | 'granite3.1-moe:1b-instruct-q5_K_M'
  | 'granite3.1-moe:1b-instruct-q5_K_S'
  | 'granite3.1-moe:1b-instruct-q6_K'
  | 'granite3.1-moe:1b-instruct-q8_0'
  | 'granite3.1-moe:3b'
  | 'granite3.1-moe:3b-instruct-fp16'
  | 'granite3.1-moe:3b-instruct-q2_K'
  | 'granite3.1-moe:3b-instruct-q3_K_L'
  | 'granite3.1-moe:3b-instruct-q3_K_M'
  | 'granite3.1-moe:3b-instruct-q3_K_S'
  | 'granite3.1-moe:3b-instruct-q4_0'
  | 'granite3.1-moe:3b-instruct-q4_1'
  | 'granite3.1-moe:3b-instruct-q4_K_M'
  | 'granite3.1-moe:3b-instruct-q4_K_S'
  | 'granite3.1-moe:3b-instruct-q5_0'
  | 'granite3.1-moe:3b-instruct-q5_1'
  | 'granite3.1-moe:3b-instruct-q5_K_M'
  | 'granite3.1-moe:3b-instruct-q5_K_S'
  | 'granite3.1-moe:3b-instruct-q6_K'
  | 'granite3.1-moe:3b-instruct-q8_0'
  | 'granite3.1-moe:latest'
  | 'granite3.2'
  | 'granite3.2:2b'
  | 'granite3.2:2b-instruct-fp16'
  | 'granite3.2:2b-instruct-q4_K_M'
  | 'granite3.2:2b-instruct-q8_0'
  | 'granite3.2:8b'
  | 'granite3.2:8b-instruct-fp16'
  | 'granite3.2:8b-instruct-q4_K_M'
  | 'granite3.2:8b-instruct-q8_0'
  | 'granite3.2:latest'
  | 'granite3.3'
  | 'granite3.3:2b'
  | 'granite3.3:8b'
  | 'granite3.3:latest'
  | 'hermes3'
  | 'hermes3:3b'
  | 'hermes3:3b-llama3.2-fp16'
  | 'hermes3:3b-llama3.2-q2_K'
  | 'hermes3:3b-llama3.2-q3_K_L'
  | 'hermes3:3b-llama3.2-q3_K_M'
  | 'hermes3:3b-llama3.2-q3_K_S'
  | 'hermes3:3b-llama3.2-q4_0'
  | 'hermes3:3b-llama3.2-q4_1'
  | 'hermes3:3b-llama3.2-q4_K_M'
  | 'hermes3:3b-llama3.2-q4_K_S'
  | 'hermes3:3b-llama3.2-q5_0'
  | 'hermes3:3b-llama3.2-q5_1'
  | 'hermes3:3b-llama3.2-q5_K_M'
  | 'hermes3:3b-llama3.2-q5_K_S'
  | 'hermes3:3b-llama3.2-q6_K'
  | 'hermes3:3b-llama3.2-q8_0'
  | 'hermes3:405b'
  | 'hermes3:405b-llama3.1-fp16'
  | 'hermes3:405b-llama3.1-q2_K'
  | 'hermes3:405b-llama3.1-q3_K_L'
  | 'hermes3:405b-llama3.1-q3_K_M'
  | 'hermes3:405b-llama3.1-q3_K_S'
  | 'hermes3:405b-llama3.1-q4_0'
  | 'hermes3:405b-llama3.1-q4_1'
  | 'hermes3:405b-llama3.1-q4_K_M'
  | 'hermes3:405b-llama3.1-q4_K_S'
  | 'hermes3:405b-llama3.1-q5_0'
  | 'hermes3:405b-llama3.1-q5_1'
  | 'hermes3:405b-llama3.1-q5_K_M'
  | 'hermes3:405b-llama3.1-q5_K_S'
  | 'hermes3:405b-llama3.1-q6_K'
  | 'hermes3:405b-llama3.1-q8_0'
  | 'hermes3:70b'
  | 'hermes3:70b-llama3.1-fp16'
  | 'hermes3:70b-llama3.1-q2_K'
  | 'hermes3:70b-llama3.1-q3_K_L'
  | 'hermes3:70b-llama3.1-q3_K_M'
  | 'hermes3:70b-llama3.1-q3_K_S'
  | 'hermes3:70b-llama3.1-q4_0'
  | 'hermes3:70b-llama3.1-q4_1'
  | 'hermes3:70b-llama3.1-q4_K_M'
  | 'hermes3:70b-llama3.1-q4_K_S'
  | 'hermes3:70b-llama3.1-q5_0'
  | 'hermes3:70b-llama3.1-q5_1'
  | 'hermes3:70b-llama3.1-q5_K_M'
  | 'hermes3:70b-llama3.1-q5_K_S'
  | 'hermes3:70b-llama3.1-q6_K'
  | 'hermes3:70b-llama3.1-q8_0'
  | 'hermes3:8b'
  | 'hermes3:8b-llama3.1-fp16'
  | 'hermes3:8b-llama3.1-q2_K'
  | 'hermes3:8b-llama3.1-q3_K_L'
  | 'hermes3:8b-llama3.1-q3_K_M'
  | 'hermes3:8b-llama3.1-q3_K_S'
  | 'hermes3:8b-llama3.1-q4_0'
  | 'hermes3:8b-llama3.1-q4_1'
  | 'hermes3:8b-llama3.1-q4_K_M'
  | 'hermes3:8b-llama3.1-q4_K_S'
  | 'hermes3:8b-llama3.1-q5_0'
  | 'hermes3:8b-llama3.1-q5_1'
  | 'hermes3:8b-llama3.1-q5_K_M'
  | 'hermes3:8b-llama3.1-q5_K_S'
  | 'hermes3:8b-llama3.1-q6_K'
  | 'hermes3:8b-llama3.1-q8_0'
  | 'hermes3:latest'
  | 'internlm2'
  | 'internlm2:1.8b'
  | 'internlm2:1.8b-chat-v2.5-fp16'
  | 'internlm2:1.8b-chat-v2.5-q2_K'
  | 'internlm2:1.8b-chat-v2.5-q3_K_L'
  | 'internlm2:1.8b-chat-v2.5-q3_K_M'
  | 'internlm2:1.8b-chat-v2.5-q3_K_S'
  | 'internlm2:1.8b-chat-v2.5-q4_0'
  | 'internlm2:1.8b-chat-v2.5-q4_1'
  | 'internlm2:1.8b-chat-v2.5-q4_K_M'
  | 'internlm2:1.8b-chat-v2.5-q4_K_S'
  | 'internlm2:1.8b-chat-v2.5-q5_0'
  | 'internlm2:1.8b-chat-v2.5-q5_1'
  | 'internlm2:1.8b-chat-v2.5-q5_K_M'
  | 'internlm2:1.8b-chat-v2.5-q5_K_S'
  | 'internlm2:1.8b-chat-v2.5-q6_K'
  | 'internlm2:1.8b-chat-v2.5-q8_0'
  | 'internlm2:1m'
  | 'internlm2:20b'
  | 'internlm2:20b-chat-v2.5-fp16'
  | 'internlm2:20b-chat-v2.5-q2_K'
  | 'internlm2:20b-chat-v2.5-q3_K_L'
  | 'internlm2:20b-chat-v2.5-q3_K_M'
  | 'internlm2:20b-chat-v2.5-q3_K_S'
  | 'internlm2:20b-chat-v2.5-q4_0'
  | 'internlm2:20b-chat-v2.5-q4_1'
  | 'internlm2:20b-chat-v2.5-q4_K_M'
  | 'internlm2:20b-chat-v2.5-q4_K_S'
  | 'internlm2:20b-chat-v2.5-q5_0'
  | 'internlm2:20b-chat-v2.5-q5_1'
  | 'internlm2:20b-chat-v2.5-q5_K_M'
  | 'internlm2:20b-chat-v2.5-q5_K_S'
  | 'internlm2:20b-chat-v2.5-q6_K'
  | 'internlm2:20b-chat-v2.5-q8_0'
  | 'internlm2:7b'
  | 'internlm2:7b-chat-1m-v2.5-fp16'
  | 'internlm2:7b-chat-1m-v2.5-q2_K'
  | 'internlm2:7b-chat-1m-v2.5-q3_K_L'
  | 'internlm2:7b-chat-1m-v2.5-q3_K_M'
  | 'internlm2:7b-chat-1m-v2.5-q3_K_S'
  | 'internlm2:7b-chat-1m-v2.5-q4_0'
  | 'internlm2:7b-chat-1m-v2.5-q4_1'
  | 'internlm2:7b-chat-1m-v2.5-q4_K_M'
  | 'internlm2:7b-chat-1m-v2.5-q4_K_S'
  | 'internlm2:7b-chat-1m-v2.5-q5_0'
  | 'internlm2:7b-chat-1m-v2.5-q5_1'
  | 'internlm2:7b-chat-1m-v2.5-q5_K_M'
  | 'internlm2:7b-chat-1m-v2.5-q5_K_S'
  | 'internlm2:7b-chat-1m-v2.5-q6_K'
  | 'internlm2:7b-chat-1m-v2.5-q8_0'
  | 'internlm2:7b-chat-v2.5-fp16'
  | 'internlm2:7b-chat-v2.5-q2_K'
  | 'internlm2:7b-chat-v2.5-q3_K_L'
  | 'internlm2:7b-chat-v2.5-q3_K_M'
  | 'internlm2:7b-chat-v2.5-q3_K_S'
  | 'internlm2:7b-chat-v2.5-q4_0'
  | 'internlm2:7b-chat-v2.5-q4_1'
  | 'internlm2:7b-chat-v2.5-q4_K_M'
  | 'internlm2:7b-chat-v2.5-q4_K_S'
  | 'internlm2:7b-chat-v2.5-q5_0'
  | 'internlm2:7b-chat-v2.5-q5_1'
  | 'internlm2:7b-chat-v2.5-q5_K_M'
  | 'internlm2:7b-chat-v2.5-q5_K_S'
  | 'internlm2:7b-chat-v2.5-q6_K'
  | 'internlm2:7b-chat-v2.5-q8_0'
  | 'internlm2:latest'
  | 'llama-guard3'
  | 'llama-guard3:1b'
  | 'llama-guard3:1b-fp16'
  | 'llama-guard3:1b-q2_K'
  | 'llama-guard3:1b-q3_K_L'
  | 'llama-guard3:1b-q3_K_M'
  | 'llama-guard3:1b-q3_K_S'
  | 'llama-guard3:1b-q4_0'
  | 'llama-guard3:1b-q4_1'
  | 'llama-guard3:1b-q4_K_M'
  | 'llama-guard3:1b-q4_K_S'
  | 'llama-guard3:1b-q5_0'
  | 'llama-guard3:1b-q5_1'
  | 'llama-guard3:1b-q5_K_M'
  | 'llama-guard3:1b-q5_K_S'
  | 'llama-guard3:1b-q6_K'
  | 'llama-guard3:1b-q8_0'
  | 'llama-guard3:8b'
  | 'llama-guard3:8b-fp16'
  | 'llama-guard3:8b-q2_K'
  | 'llama-guard3:8b-q3_K_L'
  | 'llama-guard3:8b-q3_K_M'
  | 'llama-guard3:8b-q3_K_S'
  | 'llama-guard3:8b-q4_0'
  | 'llama-guard3:8b-q4_1'
  | 'llama-guard3:8b-q4_K_M'
  | 'llama-guard3:8b-q4_K_S'
  | 'llama-guard3:8b-q5_0'
  | 'llama-guard3:8b-q5_1'
  | 'llama-guard3:8b-q5_K_M'
  | 'llama-guard3:8b-q5_K_S'
  | 'llama-guard3:8b-q6_K'
  | 'llama-guard3:8b-q8_0'
  | 'llama-guard3:latest'
  | 'llama-pro'
  | 'llama-pro:8b-instruct-fp16'
  | 'llama-pro:8b-instruct-q2_K'
  | 'llama-pro:8b-instruct-q3_K_L'
  | 'llama-pro:8b-instruct-q3_K_M'
  | 'llama-pro:8b-instruct-q3_K_S'
  | 'llama-pro:8b-instruct-q4_0'
  | 'llama-pro:8b-instruct-q4_1'
  | 'llama-pro:8b-instruct-q4_K_M'
  | 'llama-pro:8b-instruct-q4_K_S'
  | 'llama-pro:8b-instruct-q5_0'
  | 'llama-pro:8b-instruct-q5_1'
  | 'llama-pro:8b-instruct-q5_K_M'
  | 'llama-pro:8b-instruct-q5_K_S'
  | 'llama-pro:8b-instruct-q6_K'
  | 'llama-pro:8b-instruct-q8_0'
  | 'llama-pro:8b-text-fp16'
  | 'llama-pro:8b-text-q2_K'
  | 'llama-pro:8b-text-q3_K_L'
  | 'llama-pro:8b-text-q3_K_M'
  | 'llama-pro:8b-text-q3_K_S'
  | 'llama-pro:8b-text-q4_0'
  | 'llama-pro:8b-text-q4_1'
  | 'llama-pro:8b-text-q4_K_M'
  | 'llama-pro:8b-text-q4_K_S'
  | 'llama-pro:8b-text-q5_0'
  | 'llama-pro:8b-text-q5_1'
  | 'llama-pro:8b-text-q5_K_M'
  | 'llama-pro:8b-text-q5_K_S'
  | 'llama-pro:8b-text-q6_K'
  | 'llama-pro:8b-text-q8_0'
  | 'llama-pro:instruct'
  | 'llama-pro:latest'
  | 'llama-pro:text'
  | 'llama2'
  | 'llama2-chinese'
  | 'llama2-chinese:13b'
  | 'llama2-chinese:13b-chat'
  | 'llama2-chinese:13b-chat-fp16'
  | 'llama2-chinese:13b-chat-q2_K'
  | 'llama2-chinese:13b-chat-q3_K_L'
  | 'llama2-chinese:13b-chat-q3_K_M'
  | 'llama2-chinese:13b-chat-q3_K_S'
  | 'llama2-chinese:13b-chat-q4_0'
  | 'llama2-chinese:13b-chat-q4_1'
  | 'llama2-chinese:13b-chat-q4_K_M'
  | 'llama2-chinese:13b-chat-q4_K_S'
  | 'llama2-chinese:13b-chat-q5_0'
  | 'llama2-chinese:13b-chat-q5_1'
  | 'llama2-chinese:13b-chat-q5_K_M'
  | 'llama2-chinese:13b-chat-q5_K_S'
  | 'llama2-chinese:13b-chat-q6_K'
  | 'llama2-chinese:13b-chat-q8_0'
  | 'llama2-chinese:7b'
  | 'llama2-chinese:7b-chat'
  | 'llama2-chinese:7b-chat-fp16'
  | 'llama2-chinese:7b-chat-q2_K'
  | 'llama2-chinese:7b-chat-q3_K_L'
  | 'llama2-chinese:7b-chat-q3_K_M'
  | 'llama2-chinese:7b-chat-q3_K_S'
  | 'llama2-chinese:7b-chat-q4_0'
  | 'llama2-chinese:7b-chat-q4_1'
  | 'llama2-chinese:7b-chat-q4_K_M'
  | 'llama2-chinese:7b-chat-q4_K_S'
  | 'llama2-chinese:7b-chat-q5_0'
  | 'llama2-chinese:7b-chat-q5_1'
  | 'llama2-chinese:7b-chat-q5_K_M'
  | 'llama2-chinese:7b-chat-q5_K_S'
  | 'llama2-chinese:7b-chat-q6_K'
  | 'llama2-chinese:7b-chat-q8_0'
  | 'llama2-chinese:latest'
  | 'llama2-uncensored'
  | 'llama2-uncensored:70b'
  | 'llama2-uncensored:70b-chat'
  | 'llama2-uncensored:70b-chat-q2_K'
  | 'llama2-uncensored:70b-chat-q3_K_L'
  | 'llama2-uncensored:70b-chat-q3_K_M'
  | 'llama2-uncensored:70b-chat-q3_K_S'
  | 'llama2-uncensored:70b-chat-q4_0'
  | 'llama2-uncensored:70b-chat-q4_1'
  | 'llama2-uncensored:70b-chat-q4_K_M'
  | 'llama2-uncensored:70b-chat-q4_K_S'
  | 'llama2-uncensored:70b-chat-q5_0'
  | 'llama2-uncensored:70b-chat-q5_1'
  | 'llama2-uncensored:70b-chat-q5_K_M'
  | 'llama2-uncensored:70b-chat-q5_K_S'
  | 'llama2-uncensored:70b-chat-q6_K'
  | 'llama2-uncensored:70b-chat-q8_0'
  | 'llama2-uncensored:7b'
  | 'llama2-uncensored:7b-chat'
  | 'llama2-uncensored:7b-chat-fp16'
  | 'llama2-uncensored:7b-chat-q2_K'
  | 'llama2-uncensored:7b-chat-q3_K_L'
  | 'llama2-uncensored:7b-chat-q3_K_M'
  | 'llama2-uncensored:7b-chat-q3_K_S'
  | 'llama2-uncensored:7b-chat-q4_0'
  | 'llama2-uncensored:7b-chat-q4_1'
  | 'llama2-uncensored:7b-chat-q4_K_M'
  | 'llama2-uncensored:7b-chat-q4_K_S'
  | 'llama2-uncensored:7b-chat-q5_0'
  | 'llama2-uncensored:7b-chat-q5_1'
  | 'llama2-uncensored:7b-chat-q5_K_M'
  | 'llama2-uncensored:7b-chat-q5_K_S'
  | 'llama2-uncensored:7b-chat-q6_K'
  | 'llama2-uncensored:7b-chat-q8_0'
  | 'llama2-uncensored:latest'
  | 'llama2:13b'
  | 'llama2:13b-chat'
  | 'llama2:13b-chat-fp16'
  | 'llama2:13b-chat-q2_K'
  | 'llama2:13b-chat-q3_K_L'
  | 'llama2:13b-chat-q3_K_M'
  | 'llama2:13b-chat-q3_K_S'
  | 'llama2:13b-chat-q4_0'
  | 'llama2:13b-chat-q4_1'
  | 'llama2:13b-chat-q4_K_M'
  | 'llama2:13b-chat-q4_K_S'
  | 'llama2:13b-chat-q5_0'
  | 'llama2:13b-chat-q5_1'
  | 'llama2:13b-chat-q5_K_M'
  | 'llama2:13b-chat-q5_K_S'
  | 'llama2:13b-chat-q6_K'
  | 'llama2:13b-chat-q8_0'
  | 'llama2:13b-text'
  | 'llama2:13b-text-fp16'
  | 'llama2:13b-text-q2_K'
  | 'llama2:13b-text-q3_K_L'
  | 'llama2:13b-text-q3_K_M'
  | 'llama2:13b-text-q3_K_S'
  | 'llama2:13b-text-q4_0'
  | 'llama2:13b-text-q4_1'
  | 'llama2:13b-text-q4_K_M'
  | 'llama2:13b-text-q4_K_S'
  | 'llama2:13b-text-q5_0'
  | 'llama2:13b-text-q5_1'
  | 'llama2:13b-text-q5_K_M'
  | 'llama2:13b-text-q5_K_S'
  | 'llama2:13b-text-q6_K'
  | 'llama2:13b-text-q8_0'
  | 'llama2:70b'
  | 'llama2:70b-chat'
  | 'llama2:70b-chat-fp16'
  | 'llama2:70b-chat-q2_K'
  | 'llama2:70b-chat-q3_K_L'
  | 'llama2:70b-chat-q3_K_M'
  | 'llama2:70b-chat-q3_K_S'
  | 'llama2:70b-chat-q4_0'
  | 'llama2:70b-chat-q4_1'
  | 'llama2:70b-chat-q4_K_M'
  | 'llama2:70b-chat-q4_K_S'
  | 'llama2:70b-chat-q5_0'
  | 'llama2:70b-chat-q5_1'
  | 'llama2:70b-chat-q5_K_M'
  | 'llama2:70b-chat-q5_K_S'
  | 'llama2:70b-chat-q6_K'
  | 'llama2:70b-chat-q8_0'
  | 'llama2:70b-text'
  | 'llama2:70b-text-fp16'
  | 'llama2:70b-text-q2_K'
  | 'llama2:70b-text-q3_K_L'
  | 'llama2:70b-text-q3_K_M'
  | 'llama2:70b-text-q3_K_S'
  | 'llama2:70b-text-q4_0'
  | 'llama2:70b-text-q4_1'
  | 'llama2:70b-text-q4_K_M'
  | 'llama2:70b-text-q4_K_S'
  | 'llama2:70b-text-q5_0'
  | 'llama2:70b-text-q5_1'
  | 'llama2:70b-text-q5_K_M'
  | 'llama2:70b-text-q5_K_S'
  | 'llama2:70b-text-q6_K'
  | 'llama2:70b-text-q8_0'
  | 'llama2:7b'
  | 'llama2:7b-chat'
  | 'llama2:7b-chat-fp16'
  | 'llama2:7b-chat-q2_K'
  | 'llama2:7b-chat-q3_K_L'
  | 'llama2:7b-chat-q3_K_M'
  | 'llama2:7b-chat-q3_K_S'
  | 'llama2:7b-chat-q4_0'
  | 'llama2:7b-chat-q4_1'
  | 'llama2:7b-chat-q4_K_M'
  | 'llama2:7b-chat-q4_K_S'
  | 'llama2:7b-chat-q5_0'
  | 'llama2:7b-chat-q5_1'
  | 'llama2:7b-chat-q5_K_M'
  | 'llama2:7b-chat-q5_K_S'
  | 'llama2:7b-chat-q6_K'
  | 'llama2:7b-chat-q8_0'
  | 'llama2:7b-text'
  | 'llama2:7b-text-fp16'
  | 'llama2:7b-text-q2_K'
  | 'llama2:7b-text-q3_K_L'
  | 'llama2:7b-text-q3_K_M'
  | 'llama2:7b-text-q3_K_S'
  | 'llama2:7b-text-q4_0'
  | 'llama2:7b-text-q4_1'
  | 'llama2:7b-text-q4_K_M'
  | 'llama2:7b-text-q4_K_S'
  | 'llama2:7b-text-q5_0'
  | 'llama2:7b-text-q5_1'
  | 'llama2:7b-text-q5_K_M'
  | 'llama2:7b-text-q5_K_S'
  | 'llama2:7b-text-q6_K'
  | 'llama2:7b-text-q8_0'
  | 'llama2:chat'
  | 'llama2:latest'
  | 'llama2:text'
  | 'llama3'
  | 'llama3-chatqa'
  | 'llama3-chatqa:70b'
  | 'llama3-chatqa:70b-v1.5'
  | 'llama3-chatqa:70b-v1.5-fp16'
  | 'llama3-chatqa:70b-v1.5-q2_K'
  | 'llama3-chatqa:70b-v1.5-q3_K_L'
  | 'llama3-chatqa:70b-v1.5-q3_K_M'
  | 'llama3-chatqa:70b-v1.5-q3_K_S'
  | 'llama3-chatqa:70b-v1.5-q4_0'
  | 'llama3-chatqa:70b-v1.5-q4_1'
  | 'llama3-chatqa:70b-v1.5-q4_K_M'
  | 'llama3-chatqa:70b-v1.5-q4_K_S'
  | 'llama3-chatqa:70b-v1.5-q5_0'
  | 'llama3-chatqa:70b-v1.5-q5_1'
  | 'llama3-chatqa:70b-v1.5-q5_K_M'
  | 'llama3-chatqa:70b-v1.5-q5_K_S'
  | 'llama3-chatqa:70b-v1.5-q6_K'
  | 'llama3-chatqa:70b-v1.5-q8_0'
  | 'llama3-chatqa:8b'
  | 'llama3-chatqa:8b-v1.5'
  | 'llama3-chatqa:8b-v1.5-fp16'
  | 'llama3-chatqa:8b-v1.5-q2_K'
  | 'llama3-chatqa:8b-v1.5-q3_K_L'
  | 'llama3-chatqa:8b-v1.5-q3_K_M'
  | 'llama3-chatqa:8b-v1.5-q3_K_S'
  | 'llama3-chatqa:8b-v1.5-q4_0'
  | 'llama3-chatqa:8b-v1.5-q4_1'
  | 'llama3-chatqa:8b-v1.5-q4_K_M'
  | 'llama3-chatqa:8b-v1.5-q4_K_S'
  | 'llama3-chatqa:8b-v1.5-q5_0'
  | 'llama3-chatqa:8b-v1.5-q5_1'
  | 'llama3-chatqa:8b-v1.5-q5_K_M'
  | 'llama3-chatqa:8b-v1.5-q5_K_S'
  | 'llama3-chatqa:8b-v1.5-q6_K'
  | 'llama3-chatqa:8b-v1.5-q8_0'
  | 'llama3-chatqa:latest'
  | 'llama3-gradient'
  | 'llama3-gradient:1048k'
  | 'llama3-gradient:70b'
  | 'llama3-gradient:70b-instruct-1048k-fp16'
  | 'llama3-gradient:70b-instruct-1048k-q2_K'
  | 'llama3-gradient:70b-instruct-1048k-q3_K_L'
  | 'llama3-gradient:70b-instruct-1048k-q3_K_M'
  | 'llama3-gradient:70b-instruct-1048k-q3_K_S'
  | 'llama3-gradient:70b-instruct-1048k-q4_0'
  | 'llama3-gradient:70b-instruct-1048k-q4_1'
  | 'llama3-gradient:70b-instruct-1048k-q4_K_M'
  | 'llama3-gradient:70b-instruct-1048k-q4_K_S'
  | 'llama3-gradient:70b-instruct-1048k-q5_0'
  | 'llama3-gradient:70b-instruct-1048k-q5_1'
  | 'llama3-gradient:70b-instruct-1048k-q5_K_M'
  | 'llama3-gradient:70b-instruct-1048k-q5_K_S'
  | 'llama3-gradient:70b-instruct-1048k-q6_K'
  | 'llama3-gradient:70b-instruct-1048k-q8_0'
  | 'llama3-gradient:8b'
  | 'llama3-gradient:8b-instruct-1048k-fp16'
  | 'llama3-gradient:8b-instruct-1048k-q2_K'
  | 'llama3-gradient:8b-instruct-1048k-q3_K_L'
  | 'llama3-gradient:8b-instruct-1048k-q3_K_M'
  | 'llama3-gradient:8b-instruct-1048k-q3_K_S'
  | 'llama3-gradient:8b-instruct-1048k-q4_0'
  | 'llama3-gradient:8b-instruct-1048k-q4_1'
  | 'llama3-gradient:8b-instruct-1048k-q4_K_M'
  | 'llama3-gradient:8b-instruct-1048k-q4_K_S'
  | 'llama3-gradient:8b-instruct-1048k-q5_0'
  | 'llama3-gradient:8b-instruct-1048k-q5_1'
  | 'llama3-gradient:8b-instruct-1048k-q5_K_M'
  | 'llama3-gradient:8b-instruct-1048k-q5_K_S'
  | 'llama3-gradient:8b-instruct-1048k-q6_K'
  | 'llama3-gradient:8b-instruct-1048k-q8_0'
  | 'llama3-gradient:instruct'
  | 'llama3-gradient:latest'
  | 'llama3-groq-tool-use'
  | 'llama3-groq-tool-use:70b'
  | 'llama3-groq-tool-use:70b-fp16'
  | 'llama3-groq-tool-use:70b-q2_K'
  | 'llama3-groq-tool-use:70b-q3_K_L'
  | 'llama3-groq-tool-use:70b-q3_K_M'
  | 'llama3-groq-tool-use:70b-q3_K_S'
  | 'llama3-groq-tool-use:70b-q4_0'
  | 'llama3-groq-tool-use:70b-q4_1'
  | 'llama3-groq-tool-use:70b-q4_K_M'
  | 'llama3-groq-tool-use:70b-q4_K_S'
  | 'llama3-groq-tool-use:70b-q5_0'
  | 'llama3-groq-tool-use:70b-q5_1'
  | 'llama3-groq-tool-use:70b-q5_K_M'
  | 'llama3-groq-tool-use:70b-q5_K_S'
  | 'llama3-groq-tool-use:70b-q6_K'
  | 'llama3-groq-tool-use:70b-q8_0'
  | 'llama3-groq-tool-use:8b'
  | 'llama3-groq-tool-use:8b-fp16'
  | 'llama3-groq-tool-use:8b-q2_K'
  | 'llama3-groq-tool-use:8b-q3_K_L'
  | 'llama3-groq-tool-use:8b-q3_K_M'
  | 'llama3-groq-tool-use:8b-q3_K_S'
  | 'llama3-groq-tool-use:8b-q4_0'
  | 'llama3-groq-tool-use:8b-q4_1'
  | 'llama3-groq-tool-use:8b-q4_K_M'
  | 'llama3-groq-tool-use:8b-q4_K_S'
  | 'llama3-groq-tool-use:8b-q5_0'
  | 'llama3-groq-tool-use:8b-q5_1'
  | 'llama3-groq-tool-use:8b-q5_K_M'
  | 'llama3-groq-tool-use:8b-q5_K_S'
  | 'llama3-groq-tool-use:8b-q6_K'
  | 'llama3-groq-tool-use:8b-q8_0'
  | 'llama3-groq-tool-use:latest'
  | 'llama3.1'
  | 'llama3.1:405b'
  | 'llama3.1:405b-instruct-fp16'
  | 'llama3.1:405b-instruct-q2_K'
  | 'llama3.1:405b-instruct-q3_K_L'
  | 'llama3.1:405b-instruct-q3_K_M'
  | 'llama3.1:405b-instruct-q3_K_S'
  | 'llama3.1:405b-instruct-q4_0'
  | 'llama3.1:405b-instruct-q4_1'
  | 'llama3.1:405b-instruct-q4_K_M'
  | 'llama3.1:405b-instruct-q4_K_S'
  | 'llama3.1:405b-instruct-q5_0'
  | 'llama3.1:405b-instruct-q5_1'
  | 'llama3.1:405b-instruct-q5_K_M'
  | 'llama3.1:405b-instruct-q5_K_S'
  | 'llama3.1:405b-instruct-q6_K'
  | 'llama3.1:405b-instruct-q8_0'
  | 'llama3.1:405b-text-fp16'
  | 'llama3.1:405b-text-q2_K'
  | 'llama3.1:405b-text-q3_K_L'
  | 'llama3.1:405b-text-q3_K_M'
  | 'llama3.1:405b-text-q3_K_S'
  | 'llama3.1:405b-text-q4_0'
  | 'llama3.1:405b-text-q4_1'
  | 'llama3.1:405b-text-q4_K_M'
  | 'llama3.1:405b-text-q4_K_S'
  | 'llama3.1:405b-text-q5_0'
  | 'llama3.1:405b-text-q5_1'
  | 'llama3.1:405b-text-q5_K_M'
  | 'llama3.1:405b-text-q5_K_S'
  | 'llama3.1:405b-text-q6_K'
  | 'llama3.1:405b-text-q8_0'
  | 'llama3.1:70b'
  | 'llama3.1:70b-instruct-fp16'
  | 'llama3.1:70b-instruct-q2_K'
  | 'llama3.1:70b-instruct-q3_K_L'
  | 'llama3.1:70b-instruct-q3_K_M'
  | 'llama3.1:70b-instruct-q3_K_S'
  | 'llama3.1:70b-instruct-q4_0'
  | 'llama3.1:70b-instruct-q4_K_M'
  | 'llama3.1:70b-instruct-q4_K_S'
  | 'llama3.1:70b-instruct-q5_0'
  | 'llama3.1:70b-instruct-q5_1'
  | 'llama3.1:70b-instruct-q5_K_M'
  | 'llama3.1:70b-instruct-q5_K_S'
  | 'llama3.1:70b-instruct-q6_K'
  | 'llama3.1:70b-instruct-q8_0'
  | 'llama3.1:70b-text-fp16'
  | 'llama3.1:70b-text-q2_K'
  | 'llama3.1:70b-text-q3_K_L'
  | 'llama3.1:70b-text-q3_K_M'
  | 'llama3.1:70b-text-q3_K_S'
  | 'llama3.1:70b-text-q4_0'
  | 'llama3.1:70b-text-q4_1'
  | 'llama3.1:70b-text-q4_K_M'
  | 'llama3.1:70b-text-q4_K_S'
  | 'llama3.1:70b-text-q5_0'
  | 'llama3.1:70b-text-q5_1'
  | 'llama3.1:70b-text-q5_K_M'
  | 'llama3.1:70b-text-q5_K_S'
  | 'llama3.1:70b-text-q6_K'
  | 'llama3.1:70b-text-q8_0'
  | 'llama3.1:8b'
  | 'llama3.1:8b-instruct-fp16'
  | 'llama3.1:8b-instruct-q2_K'
  | 'llama3.1:8b-instruct-q3_K_L'
  | 'llama3.1:8b-instruct-q3_K_M'
  | 'llama3.1:8b-instruct-q3_K_S'
  | 'llama3.1:8b-instruct-q4_0'
  | 'llama3.1:8b-instruct-q4_1'
  | 'llama3.1:8b-instruct-q4_K_M'
  | 'llama3.1:8b-instruct-q4_K_S'
  | 'llama3.1:8b-instruct-q5_0'
  | 'llama3.1:8b-instruct-q5_1'
  | 'llama3.1:8b-instruct-q5_K_M'
  | 'llama3.1:8b-instruct-q5_K_S'
  | 'llama3.1:8b-instruct-q6_K'
  | 'llama3.1:8b-instruct-q8_0'
  | 'llama3.1:8b-text-fp16'
  | 'llama3.1:8b-text-q2_K'
  | 'llama3.1:8b-text-q3_K_L'
  | 'llama3.1:8b-text-q3_K_M'
  | 'llama3.1:8b-text-q3_K_S'
  | 'llama3.1:8b-text-q4_0'
  | 'llama3.1:8b-text-q4_1'
  | 'llama3.1:8b-text-q4_K_M'
  | 'llama3.1:8b-text-q4_K_S'
  | 'llama3.1:8b-text-q5_0'
  | 'llama3.1:8b-text-q5_1'
  | 'llama3.1:8b-text-q5_K_M'
  | 'llama3.1:8b-text-q5_K_S'
  | 'llama3.1:8b-text-q6_K'
  | 'llama3.1:8b-text-q8_0'
  | 'llama3.1:latest'
  | 'llama3.2'
  | 'llama3.2:1b'
  | 'llama3.2:1b-instruct-fp16'
  | 'llama3.2:1b-instruct-q2_K'
  | 'llama3.2:1b-instruct-q3_K_L'
  | 'llama3.2:1b-instruct-q3_K_M'
  | 'llama3.2:1b-instruct-q3_K_S'
  | 'llama3.2:1b-instruct-q4_0'
  | 'llama3.2:1b-instruct-q4_1'
  | 'llama3.2:1b-instruct-q4_K_M'
  | 'llama3.2:1b-instruct-q4_K_S'
  | 'llama3.2:1b-instruct-q5_0'
  | 'llama3.2:1b-instruct-q5_1'
  | 'llama3.2:1b-instruct-q5_K_M'
  | 'llama3.2:1b-instruct-q5_K_S'
  | 'llama3.2:1b-instruct-q6_K'
  | 'llama3.2:1b-instruct-q8_0'
  | 'llama3.2:1b-text-fp16'
  | 'llama3.2:1b-text-q2_K'
  | 'llama3.2:1b-text-q3_K_L'
  | 'llama3.2:1b-text-q3_K_M'
  | 'llama3.2:1b-text-q3_K_S'
  | 'llama3.2:1b-text-q4_0'
  | 'llama3.2:1b-text-q4_1'
  | 'llama3.2:1b-text-q4_K_M'
  | 'llama3.2:1b-text-q4_K_S'
  | 'llama3.2:1b-text-q5_0'
  | 'llama3.2:1b-text-q5_1'
  | 'llama3.2:1b-text-q5_K_M'
  | 'llama3.2:1b-text-q5_K_S'
  | 'llama3.2:1b-text-q6_K'
  | 'llama3.2:1b-text-q8_0'
  | 'llama3.2:3b'
  | 'llama3.2:3b-instruct-fp16'
  | 'llama3.2:3b-instruct-q2_K'
  | 'llama3.2:3b-instruct-q3_K_L'
  | 'llama3.2:3b-instruct-q3_K_M'
  | 'llama3.2:3b-instruct-q3_K_S'
  | 'llama3.2:3b-instruct-q4_0'
  | 'llama3.2:3b-instruct-q4_1'
  | 'llama3.2:3b-instruct-q4_K_M'
  | 'llama3.2:3b-instruct-q4_K_S'
  | 'llama3.2:3b-instruct-q5_0'
  | 'llama3.2:3b-instruct-q5_1'
  | 'llama3.2:3b-instruct-q5_K_M'
  | 'llama3.2:3b-instruct-q5_K_S'
  | 'llama3.2:3b-instruct-q6_K'
  | 'llama3.2:3b-instruct-q8_0'
  | 'llama3.2:3b-text-fp16'
  | 'llama3.2:3b-text-q2_K'
  | 'llama3.2:3b-text-q3_K_L'
  | 'llama3.2:3b-text-q3_K_M'
  | 'llama3.2:3b-text-q3_K_S'
  | 'llama3.2:3b-text-q4_0'
  | 'llama3.2:3b-text-q4_1'
  | 'llama3.2:3b-text-q4_K_M'
  | 'llama3.2:3b-text-q4_K_S'
  | 'llama3.2:3b-text-q5_0'
  | 'llama3.2:3b-text-q5_1'
  | 'llama3.2:3b-text-q5_K_M'
  | 'llama3.2:3b-text-q5_K_S'
  | 'llama3.2:3b-text-q6_K'
  | 'llama3.2:3b-text-q8_0'
  | 'llama3.2:latest'
  | 'llama3.3'
  | 'llama3.3:70b'
  | 'llama3.3:70b-instruct-fp16'
  | 'llama3.3:70b-instruct-q2_K'
  | 'llama3.3:70b-instruct-q3_K_M'
  | 'llama3.3:70b-instruct-q3_K_S'
  | 'llama3.3:70b-instruct-q4_0'
  | 'llama3.3:70b-instruct-q4_K_M'
  | 'llama3.3:70b-instruct-q4_K_S'
  | 'llama3.3:70b-instruct-q5_0'
  | 'llama3.3:70b-instruct-q5_1'
  | 'llama3.3:70b-instruct-q5_K_M'
  | 'llama3.3:70b-instruct-q6_K'
  | 'llama3.3:70b-instruct-q8_0'
  | 'llama3.3:latest'
  | 'llama3:70b'
  | 'llama3:70b-instruct'
  | 'llama3:70b-instruct-fp16'
  | 'llama3:70b-instruct-q2_K'
  | 'llama3:70b-instruct-q3_K_L'
  | 'llama3:70b-instruct-q3_K_M'
  | 'llama3:70b-instruct-q3_K_S'
  | 'llama3:70b-instruct-q4_0'
  | 'llama3:70b-instruct-q4_1'
  | 'llama3:70b-instruct-q4_K_M'
  | 'llama3:70b-instruct-q4_K_S'
  | 'llama3:70b-instruct-q5_0'
  | 'llama3:70b-instruct-q5_1'
  | 'llama3:70b-instruct-q5_K_M'
  | 'llama3:70b-instruct-q5_K_S'
  | 'llama3:70b-instruct-q6_K'
  | 'llama3:70b-instruct-q8_0'
  | 'llama3:70b-text'
  | 'llama3:70b-text-fp16'
  | 'llama3:70b-text-q2_K'
  | 'llama3:70b-text-q3_K_L'
  | 'llama3:70b-text-q3_K_M'
  | 'llama3:70b-text-q3_K_S'
  | 'llama3:70b-text-q4_0'
  | 'llama3:70b-text-q4_1'
  | 'llama3:70b-text-q4_K_M'
  | 'llama3:70b-text-q4_K_S'
  | 'llama3:70b-text-q5_0'
  | 'llama3:70b-text-q5_1'
  | 'llama3:70b-text-q5_K_M'
  | 'llama3:70b-text-q5_K_S'
  | 'llama3:70b-text-q6_K'
  | 'llama3:70b-text-q8_0'
  | 'llama3:8b'
  | 'llama3:8b-instruct-fp16'
  | 'llama3:8b-instruct-q2_K'
  | 'llama3:8b-instruct-q3_K_L'
  | 'llama3:8b-instruct-q3_K_M'
  | 'llama3:8b-instruct-q3_K_S'
  | 'llama3:8b-instruct-q4_0'
  | 'llama3:8b-instruct-q4_1'
  | 'llama3:8b-instruct-q4_K_M'
  | 'llama3:8b-instruct-q4_K_S'
  | 'llama3:8b-instruct-q5_0'
  | 'llama3:8b-instruct-q5_1'
  | 'llama3:8b-instruct-q5_K_M'
  | 'llama3:8b-instruct-q5_K_S'
  | 'llama3:8b-instruct-q6_K'
  | 'llama3:8b-instruct-q8_0'
  | 'llama3:8b-text'
  | 'llama3:8b-text-fp16'
  | 'llama3:8b-text-q2_K'
  | 'llama3:8b-text-q3_K_L'
  | 'llama3:8b-text-q3_K_M'
  | 'llama3:8b-text-q3_K_S'
  | 'llama3:8b-text-q4_0'
  | 'llama3:8b-text-q4_1'
  | 'llama3:8b-text-q4_K_M'
  | 'llama3:8b-text-q4_K_S'
  | 'llama3:8b-text-q5_0'
  | 'llama3:8b-text-q5_1'
  | 'llama3:8b-text-q5_K_M'
  | 'llama3:8b-text-q5_K_S'
  | 'llama3:8b-text-q6_K'
  | 'llama3:8b-text-q8_0'
  | 'llama3:instruct'
  | 'llama3:latest'
  | 'llama3:text'
  | 'magicoder'
  | 'magicoder:7b'
  | 'magicoder:7b-s-cl'
  | 'magicoder:7b-s-cl-fp16'
  | 'magicoder:7b-s-cl-q2_K'
  | 'magicoder:7b-s-cl-q3_K_L'
  | 'magicoder:7b-s-cl-q3_K_M'
  | 'magicoder:7b-s-cl-q3_K_S'
  | 'magicoder:7b-s-cl-q4_0'
  | 'magicoder:7b-s-cl-q4_1'
  | 'magicoder:7b-s-cl-q4_K_M'
  | 'magicoder:7b-s-cl-q4_K_S'
  | 'magicoder:7b-s-cl-q5_0'
  | 'magicoder:7b-s-cl-q5_1'
  | 'magicoder:7b-s-cl-q5_K_M'
  | 'magicoder:7b-s-cl-q5_K_S'
  | 'magicoder:7b-s-cl-q6_K'
  | 'magicoder:7b-s-cl-q8_0'
  | 'magicoder:latest'
  | 'magistral'
  | 'magistral:24b'
  | 'magistral:24b-small-2506-fp16'
  | 'magistral:24b-small-2506-q4_K_M'
  | 'magistral:24b-small-2506-q8_0'
  | 'magistral:latest'
  | 'marco-o1'
  | 'marco-o1:7b'
  | 'marco-o1:7b-fp16'
  | 'marco-o1:7b-q4_K_M'
  | 'marco-o1:7b-q8_0'
  | 'marco-o1:latest'
  | 'mathstral'
  | 'mathstral:7b'
  | 'mathstral:7b-v0.1-fp16'
  | 'mathstral:7b-v0.1-q2_K'
  | 'mathstral:7b-v0.1-q3_K_L'
  | 'mathstral:7b-v0.1-q3_K_M'
  | 'mathstral:7b-v0.1-q3_K_S'
  | 'mathstral:7b-v0.1-q4_0'
  | 'mathstral:7b-v0.1-q4_1'
  | 'mathstral:7b-v0.1-q4_K_M'
  | 'mathstral:7b-v0.1-q4_K_S'
  | 'mathstral:7b-v0.1-q5_0'
  | 'mathstral:7b-v0.1-q5_1'
  | 'mathstral:7b-v0.1-q5_K_M'
  | 'mathstral:7b-v0.1-q5_K_S'
  | 'mathstral:7b-v0.1-q6_K'
  | 'mathstral:7b-v0.1-q8_0'
  | 'mathstral:latest'
  | 'meditron'
  | 'meditron:70b'
  | 'meditron:70b-q4_0'
  | 'meditron:70b-q4_1'
  | 'meditron:70b-q4_K_S'
  | 'meditron:70b-q5_1'
  | 'meditron:7b'
  | 'meditron:7b-fp16'
  | 'meditron:7b-q2_K'
  | 'meditron:7b-q3_K_L'
  | 'meditron:7b-q3_K_M'
  | 'meditron:7b-q3_K_S'
  | 'meditron:7b-q4_0'
  | 'meditron:7b-q4_1'
  | 'meditron:7b-q4_K_M'
  | 'meditron:7b-q4_K_S'
  | 'meditron:7b-q5_0'
  | 'meditron:7b-q5_1'
  | 'meditron:7b-q5_K_M'
  | 'meditron:7b-q5_K_S'
  | 'meditron:7b-q6_K'
  | 'meditron:7b-q8_0'
  | 'meditron:latest'
  | 'medllama2'
  | 'medllama2:7b'
  | 'medllama2:7b-fp16'
  | 'medllama2:7b-q2_K'
  | 'medllama2:7b-q3_K_L'
  | 'medllama2:7b-q3_K_M'
  | 'medllama2:7b-q3_K_S'
  | 'medllama2:7b-q4_0'
  | 'medllama2:7b-q4_1'
  | 'medllama2:7b-q4_K_M'
  | 'medllama2:7b-q4_K_S'
  | 'medllama2:7b-q5_0'
  | 'medllama2:7b-q5_1'
  | 'medllama2:7b-q5_K_M'
  | 'medllama2:7b-q5_K_S'
  | 'medllama2:7b-q6_K'
  | 'medllama2:7b-q8_0'
  | 'medllama2:latest'
  | 'megadolphin'
  | 'megadolphin:120b'
  | 'megadolphin:120b-v2.2'
  | 'megadolphin:120b-v2.2-fp16'
  | 'megadolphin:120b-v2.2-q2_K'
  | 'megadolphin:120b-v2.2-q3_K_L'
  | 'megadolphin:120b-v2.2-q3_K_M'
  | 'megadolphin:120b-v2.2-q3_K_S'
  | 'megadolphin:120b-v2.2-q4_0'
  | 'megadolphin:120b-v2.2-q4_1'
  | 'megadolphin:120b-v2.2-q4_K_M'
  | 'megadolphin:120b-v2.2-q4_K_S'
  | 'megadolphin:120b-v2.2-q5_0'
  | 'megadolphin:120b-v2.2-q5_1'
  | 'megadolphin:120b-v2.2-q5_K_M'
  | 'megadolphin:120b-v2.2-q5_K_S'
  | 'megadolphin:120b-v2.2-q6_K'
  | 'megadolphin:120b-v2.2-q8_0'
  | 'megadolphin:latest'
  | 'megadolphin:v2.2'
  | 'mistral'
  | 'mistral-large'
  | 'mistral-large:123b'
  | 'mistral-large:123b-instruct-2407-fp16'
  | 'mistral-large:123b-instruct-2407-q2_K'
  | 'mistral-large:123b-instruct-2407-q3_K_L'
  | 'mistral-large:123b-instruct-2407-q3_K_M'
  | 'mistral-large:123b-instruct-2407-q3_K_S'
  | 'mistral-large:123b-instruct-2407-q4_0'
  | 'mistral-large:123b-instruct-2407-q4_1'
  | 'mistral-large:123b-instruct-2407-q4_K_M'
  | 'mistral-large:123b-instruct-2407-q4_K_S'
  | 'mistral-large:123b-instruct-2407-q5_0'
  | 'mistral-large:123b-instruct-2407-q5_1'
  | 'mistral-large:123b-instruct-2407-q5_K_M'
  | 'mistral-large:123b-instruct-2407-q5_K_S'
  | 'mistral-large:123b-instruct-2407-q6_K'
  | 'mistral-large:123b-instruct-2407-q8_0'
  | 'mistral-large:123b-instruct-2411-fp16'
  | 'mistral-large:123b-instruct-2411-q2_K'
  | 'mistral-large:123b-instruct-2411-q3_K_L'
  | 'mistral-large:123b-instruct-2411-q3_K_M'
  | 'mistral-large:123b-instruct-2411-q3_K_S'
  | 'mistral-large:123b-instruct-2411-q4_0'
  | 'mistral-large:123b-instruct-2411-q4_1'
  | 'mistral-large:123b-instruct-2411-q4_K_M'
  | 'mistral-large:123b-instruct-2411-q4_K_S'
  | 'mistral-large:123b-instruct-2411-q5_0'
  | 'mistral-large:123b-instruct-2411-q5_1'
  | 'mistral-large:123b-instruct-2411-q5_K_M'
  | 'mistral-large:123b-instruct-2411-q5_K_S'
  | 'mistral-large:123b-instruct-2411-q6_K'
  | 'mistral-large:123b-instruct-2411-q8_0'
  | 'mistral-large:latest'
  | 'mistral-nemo'
  | 'mistral-nemo:12b'
  | 'mistral-nemo:12b-instruct-2407-fp16'
  | 'mistral-nemo:12b-instruct-2407-q2_K'
  | 'mistral-nemo:12b-instruct-2407-q3_K_L'
  | 'mistral-nemo:12b-instruct-2407-q3_K_M'
  | 'mistral-nemo:12b-instruct-2407-q3_K_S'
  | 'mistral-nemo:12b-instruct-2407-q4_0'
  | 'mistral-nemo:12b-instruct-2407-q4_1'
  | 'mistral-nemo:12b-instruct-2407-q4_K_M'
  | 'mistral-nemo:12b-instruct-2407-q4_K_S'
  | 'mistral-nemo:12b-instruct-2407-q5_0'
  | 'mistral-nemo:12b-instruct-2407-q5_1'
  | 'mistral-nemo:12b-instruct-2407-q5_K_M'
  | 'mistral-nemo:12b-instruct-2407-q5_K_S'
  | 'mistral-nemo:12b-instruct-2407-q6_K'
  | 'mistral-nemo:12b-instruct-2407-q8_0'
  | 'mistral-nemo:latest'
  | 'mistral-openorca'
  | 'mistral-openorca:7b'
  | 'mistral-openorca:7b-fp16'
  | 'mistral-openorca:7b-q2_K'
  | 'mistral-openorca:7b-q3_K_L'
  | 'mistral-openorca:7b-q3_K_M'
  | 'mistral-openorca:7b-q3_K_S'
  | 'mistral-openorca:7b-q4_0'
  | 'mistral-openorca:7b-q4_1'
  | 'mistral-openorca:7b-q4_K_M'
  | 'mistral-openorca:7b-q4_K_S'
  | 'mistral-openorca:7b-q5_0'
  | 'mistral-openorca:7b-q5_1'
  | 'mistral-openorca:7b-q5_K_M'
  | 'mistral-openorca:7b-q5_K_S'
  | 'mistral-openorca:7b-q6_K'
  | 'mistral-openorca:7b-q8_0'
  | 'mistral-openorca:latest'
  | 'mistral-small'
  | 'mistral-small:22b'
  | 'mistral-small:22b-instruct-2409-fp16'
  | 'mistral-small:22b-instruct-2409-q2_K'
  | 'mistral-small:22b-instruct-2409-q3_K_L'
  | 'mistral-small:22b-instruct-2409-q3_K_M'
  | 'mistral-small:22b-instruct-2409-q3_K_S'
  | 'mistral-small:22b-instruct-2409-q4_0'
  | 'mistral-small:22b-instruct-2409-q4_1'
  | 'mistral-small:22b-instruct-2409-q4_K_M'
  | 'mistral-small:22b-instruct-2409-q4_K_S'
  | 'mistral-small:22b-instruct-2409-q5_0'
  | 'mistral-small:22b-instruct-2409-q5_1'
  | 'mistral-small:22b-instruct-2409-q5_K_M'
  | 'mistral-small:22b-instruct-2409-q5_K_S'
  | 'mistral-small:22b-instruct-2409-q6_K'
  | 'mistral-small:22b-instruct-2409-q8_0'
  | 'mistral-small:24b'
  | 'mistral-small:24b-instruct-2501-fp16'
  | 'mistral-small:24b-instruct-2501-q4_K_M'
  | 'mistral-small:24b-instruct-2501-q8_0'
  | 'mistral-small:latest'
  | 'mistral:7b'
  | 'mistral:7b-instruct'
  | 'mistral:7b-instruct-fp16'
  | 'mistral:7b-instruct-q2_K'
  | 'mistral:7b-instruct-q3_K_L'
  | 'mistral:7b-instruct-q3_K_M'
  | 'mistral:7b-instruct-q3_K_S'
  | 'mistral:7b-instruct-q4_0'
  | 'mistral:7b-instruct-q4_1'
  | 'mistral:7b-instruct-q4_K_M'
  | 'mistral:7b-instruct-q4_K_S'
  | 'mistral:7b-instruct-q5_0'
  | 'mistral:7b-instruct-q5_1'
  | 'mistral:7b-instruct-q5_K_M'
  | 'mistral:7b-instruct-q5_K_S'
  | 'mistral:7b-instruct-q6_K'
  | 'mistral:7b-instruct-q8_0'
  | 'mistral:7b-instruct-v0.2-fp16'
  | 'mistral:7b-instruct-v0.2-q2_K'
  | 'mistral:7b-instruct-v0.2-q3_K_L'
  | 'mistral:7b-instruct-v0.2-q3_K_M'
  | 'mistral:7b-instruct-v0.2-q3_K_S'
  | 'mistral:7b-instruct-v0.2-q4_0'
  | 'mistral:7b-instruct-v0.2-q4_1'
  | 'mistral:7b-instruct-v0.2-q4_K_M'
  | 'mistral:7b-instruct-v0.2-q4_K_S'
  | 'mistral:7b-instruct-v0.2-q5_0'
  | 'mistral:7b-instruct-v0.2-q5_1'
  | 'mistral:7b-instruct-v0.2-q5_K_M'
  | 'mistral:7b-instruct-v0.2-q5_K_S'
  | 'mistral:7b-instruct-v0.2-q6_K'
  | 'mistral:7b-instruct-v0.2-q8_0'
  | 'mistral:7b-instruct-v0.3-fp16'
  | 'mistral:7b-instruct-v0.3-q2_K'
  | 'mistral:7b-instruct-v0.3-q3_K_L'
  | 'mistral:7b-instruct-v0.3-q3_K_M'
  | 'mistral:7b-instruct-v0.3-q3_K_S'
  | 'mistral:7b-instruct-v0.3-q4_0'
  | 'mistral:7b-instruct-v0.3-q4_1'
  | 'mistral:7b-instruct-v0.3-q4_K_M'
  | 'mistral:7b-instruct-v0.3-q4_K_S'
  | 'mistral:7b-instruct-v0.3-q5_0'
  | 'mistral:7b-instruct-v0.3-q5_1'
  | 'mistral:7b-instruct-v0.3-q5_K_M'
  | 'mistral:7b-instruct-v0.3-q5_K_S'
  | 'mistral:7b-instruct-v0.3-q6_K'
  | 'mistral:7b-instruct-v0.3-q8_0'
  | 'mistral:7b-text'
  | 'mistral:7b-text-fp16'
  | 'mistral:7b-text-q2_K'
  | 'mistral:7b-text-q3_K_L'
  | 'mistral:7b-text-q3_K_M'
  | 'mistral:7b-text-q3_K_S'
  | 'mistral:7b-text-q4_0'
  | 'mistral:7b-text-q4_1'
  | 'mistral:7b-text-q4_K_M'
  | 'mistral:7b-text-q4_K_S'
  | 'mistral:7b-text-q5_0'
  | 'mistral:7b-text-q5_1'
  | 'mistral:7b-text-q5_K_M'
  | 'mistral:7b-text-q5_K_S'
  | 'mistral:7b-text-q6_K'
  | 'mistral:7b-text-q8_0'
  | 'mistral:7b-text-v0.2-fp16'
  | 'mistral:7b-text-v0.2-q2_K'
  | 'mistral:7b-text-v0.2-q3_K_L'
  | 'mistral:7b-text-v0.2-q3_K_M'
  | 'mistral:7b-text-v0.2-q3_K_S'
  | 'mistral:7b-text-v0.2-q4_0'
  | 'mistral:7b-text-v0.2-q4_1'
  | 'mistral:7b-text-v0.2-q4_K_M'
  | 'mistral:7b-text-v0.2-q4_K_S'
  | 'mistral:7b-text-v0.2-q5_0'
  | 'mistral:7b-text-v0.2-q5_1'
  | 'mistral:7b-text-v0.2-q5_K_M'
  | 'mistral:7b-text-v0.2-q5_K_S'
  | 'mistral:7b-text-v0.2-q6_K'
  | 'mistral:7b-text-v0.2-q8_0'
  | 'mistral:instruct'
  | 'mistral:latest'
  | 'mistral:text'
  | 'mistral:v0.1'
  | 'mistral:v0.2'
  | 'mistral:v0.3'
  | 'mistrallite'
  | 'mistrallite:7b'
  | 'mistrallite:7b-v0.1-fp16'
  | 'mistrallite:7b-v0.1-q2_K'
  | 'mistrallite:7b-v0.1-q3_K_L'
  | 'mistrallite:7b-v0.1-q3_K_M'
  | 'mistrallite:7b-v0.1-q3_K_S'
  | 'mistrallite:7b-v0.1-q4_0'
  | 'mistrallite:7b-v0.1-q4_1'
  | 'mistrallite:7b-v0.1-q4_K_M'
  | 'mistrallite:7b-v0.1-q4_K_S'
  | 'mistrallite:7b-v0.1-q5_0'
  | 'mistrallite:7b-v0.1-q5_1'
  | 'mistrallite:7b-v0.1-q5_K_M'
  | 'mistrallite:7b-v0.1-q5_K_S'
  | 'mistrallite:7b-v0.1-q6_K'
  | 'mistrallite:7b-v0.1-q8_0'
  | 'mistrallite:latest'
  | 'mixtral'
  | 'mixtral:8x22b'
  | 'mixtral:8x22b-instruct'
  | 'mixtral:8x22b-instruct-v0.1-fp16'
  | 'mixtral:8x22b-instruct-v0.1-q2_K'
  | 'mixtral:8x22b-instruct-v0.1-q3_K_L'
  | 'mixtral:8x22b-instruct-v0.1-q3_K_M'
  | 'mixtral:8x22b-instruct-v0.1-q3_K_S'
  | 'mixtral:8x22b-instruct-v0.1-q4_0'
  | 'mixtral:8x22b-instruct-v0.1-q4_1'
  | 'mixtral:8x22b-instruct-v0.1-q4_K_M'
  | 'mixtral:8x22b-instruct-v0.1-q4_K_S'
  | 'mixtral:8x22b-instruct-v0.1-q5_0'
  | 'mixtral:8x22b-instruct-v0.1-q5_1'
  | 'mixtral:8x22b-instruct-v0.1-q5_K_M'
  | 'mixtral:8x22b-instruct-v0.1-q5_K_S'
  | 'mixtral:8x22b-instruct-v0.1-q6_K'
  | 'mixtral:8x22b-instruct-v0.1-q8_0'
  | 'mixtral:8x22b-text'
  | 'mixtral:8x22b-text-v0.1-fp16'
  | 'mixtral:8x22b-text-v0.1-q2_K'
  | 'mixtral:8x22b-text-v0.1-q3_K_L'
  | 'mixtral:8x22b-text-v0.1-q3_K_M'
  | 'mixtral:8x22b-text-v0.1-q3_K_S'
  | 'mixtral:8x22b-text-v0.1-q4_0'
  | 'mixtral:8x22b-text-v0.1-q4_1'
  | 'mixtral:8x22b-text-v0.1-q4_K_M'
  | 'mixtral:8x22b-text-v0.1-q4_K_S'
  | 'mixtral:8x22b-text-v0.1-q5_0'
  | 'mixtral:8x22b-text-v0.1-q5_1'
  | 'mixtral:8x22b-text-v0.1-q5_K_M'
  | 'mixtral:8x22b-text-v0.1-q5_K_S'
  | 'mixtral:8x22b-text-v0.1-q6_K'
  | 'mixtral:8x22b-text-v0.1-q8_0'
  | 'mixtral:8x7b'
  | 'mixtral:8x7b-instruct-v0.1-fp16'
  | 'mixtral:8x7b-instruct-v0.1-q2_K'
  | 'mixtral:8x7b-instruct-v0.1-q3_K_L'
  | 'mixtral:8x7b-instruct-v0.1-q3_K_M'
  | 'mixtral:8x7b-instruct-v0.1-q3_K_S'
  | 'mixtral:8x7b-instruct-v0.1-q4_0'
  | 'mixtral:8x7b-instruct-v0.1-q4_1'
  | 'mixtral:8x7b-instruct-v0.1-q4_K_M'
  | 'mixtral:8x7b-instruct-v0.1-q4_K_S'
  | 'mixtral:8x7b-instruct-v0.1-q5_0'
  | 'mixtral:8x7b-instruct-v0.1-q5_1'
  | 'mixtral:8x7b-instruct-v0.1-q5_K_M'
  | 'mixtral:8x7b-instruct-v0.1-q5_K_S'
  | 'mixtral:8x7b-instruct-v0.1-q6_K'
  | 'mixtral:8x7b-instruct-v0.1-q8_0'
  | 'mixtral:8x7b-text'
  | 'mixtral:8x7b-text-v0.1-fp16'
  | 'mixtral:8x7b-text-v0.1-q2_K'
  | 'mixtral:8x7b-text-v0.1-q3_K_L'
  | 'mixtral:8x7b-text-v0.1-q3_K_M'
  | 'mixtral:8x7b-text-v0.1-q3_K_S'
  | 'mixtral:8x7b-text-v0.1-q4_0'
  | 'mixtral:8x7b-text-v0.1-q4_1'
  | 'mixtral:8x7b-text-v0.1-q4_K_M'
  | 'mixtral:8x7b-text-v0.1-q4_K_S'
  | 'mixtral:8x7b-text-v0.1-q5_0'
  | 'mixtral:8x7b-text-v0.1-q5_1'
  | 'mixtral:8x7b-text-v0.1-q5_K_M'
  | 'mixtral:8x7b-text-v0.1-q5_K_S'
  | 'mixtral:8x7b-text-v0.1-q6_K'
  | 'mixtral:8x7b-text-v0.1-q8_0'
  | 'mixtral:instruct'
  | 'mixtral:latest'
  | 'mixtral:text'
  | 'mixtral:v0.1'
  | 'mixtral:v0.1-instruct'
  | 'nemotron'
  | 'nemotron-mini'
  | 'nemotron-mini:4b'
  | 'nemotron-mini:4b-instruct-fp16'
  | 'nemotron-mini:4b-instruct-q2_K'
  | 'nemotron-mini:4b-instruct-q3_K_L'
  | 'nemotron-mini:4b-instruct-q3_K_M'
  | 'nemotron-mini:4b-instruct-q3_K_S'
  | 'nemotron-mini:4b-instruct-q4_0'
  | 'nemotron-mini:4b-instruct-q4_1'
  | 'nemotron-mini:4b-instruct-q4_K_M'
  | 'nemotron-mini:4b-instruct-q4_K_S'
  | 'nemotron-mini:4b-instruct-q5_0'
  | 'nemotron-mini:4b-instruct-q5_1'
  | 'nemotron-mini:4b-instruct-q5_K_M'
  | 'nemotron-mini:4b-instruct-q5_K_S'
  | 'nemotron-mini:4b-instruct-q6_K'
  | 'nemotron-mini:4b-instruct-q8_0'
  | 'nemotron-mini:latest'
  | 'nemotron:70b'
  | 'nemotron:70b-instruct-fp16'
  | 'nemotron:70b-instruct-q2_K'
  | 'nemotron:70b-instruct-q3_K_L'
  | 'nemotron:70b-instruct-q3_K_M'
  | 'nemotron:70b-instruct-q3_K_S'
  | 'nemotron:70b-instruct-q4_0'
  | 'nemotron:70b-instruct-q4_1'
  | 'nemotron:70b-instruct-q4_K_M'
  | 'nemotron:70b-instruct-q4_K_S'
  | 'nemotron:70b-instruct-q5_0'
  | 'nemotron:70b-instruct-q5_1'
  | 'nemotron:70b-instruct-q5_K_M'
  | 'nemotron:70b-instruct-q5_K_S'
  | 'nemotron:70b-instruct-q6_K'
  | 'nemotron:70b-instruct-q8_0'
  | 'nemotron:latest'
  | 'neural-chat'
  | 'neural-chat:7b'
  | 'neural-chat:7b-v3.1'
  | 'neural-chat:7b-v3.1-fp16'
  | 'neural-chat:7b-v3.1-q2_K'
  | 'neural-chat:7b-v3.1-q3_K_L'
  | 'neural-chat:7b-v3.1-q3_K_M'
  | 'neural-chat:7b-v3.1-q3_K_S'
  | 'neural-chat:7b-v3.1-q4_0'
  | 'neural-chat:7b-v3.1-q4_1'
  | 'neural-chat:7b-v3.1-q4_K_M'
  | 'neural-chat:7b-v3.1-q4_K_S'
  | 'neural-chat:7b-v3.1-q5_0'
  | 'neural-chat:7b-v3.1-q5_1'
  | 'neural-chat:7b-v3.1-q5_K_M'
  | 'neural-chat:7b-v3.1-q5_K_S'
  | 'neural-chat:7b-v3.1-q6_K'
  | 'neural-chat:7b-v3.1-q8_0'
  | 'neural-chat:7b-v3.2'
  | 'neural-chat:7b-v3.2-fp16'
  | 'neural-chat:7b-v3.2-q2_K'
  | 'neural-chat:7b-v3.2-q3_K_L'
  | 'neural-chat:7b-v3.2-q3_K_M'
  | 'neural-chat:7b-v3.2-q3_K_S'
  | 'neural-chat:7b-v3.2-q4_0'
  | 'neural-chat:7b-v3.2-q4_1'
  | 'neural-chat:7b-v3.2-q4_K_M'
  | 'neural-chat:7b-v3.2-q4_K_S'
  | 'neural-chat:7b-v3.2-q5_0'
  | 'neural-chat:7b-v3.2-q5_1'
  | 'neural-chat:7b-v3.2-q5_K_M'
  | 'neural-chat:7b-v3.2-q5_K_S'
  | 'neural-chat:7b-v3.2-q6_K'
  | 'neural-chat:7b-v3.2-q8_0'
  | 'neural-chat:7b-v3.3'
  | 'neural-chat:7b-v3.3-fp16'
  | 'neural-chat:7b-v3.3-q2_K'
  | 'neural-chat:7b-v3.3-q3_K_L'
  | 'neural-chat:7b-v3.3-q3_K_M'
  | 'neural-chat:7b-v3.3-q3_K_S'
  | 'neural-chat:7b-v3.3-q4_0'
  | 'neural-chat:7b-v3.3-q4_1'
  | 'neural-chat:7b-v3.3-q4_K_M'
  | 'neural-chat:7b-v3.3-q4_K_S'
  | 'neural-chat:7b-v3.3-q5_0'
  | 'neural-chat:7b-v3.3-q5_1'
  | 'neural-chat:7b-v3.3-q5_K_M'
  | 'neural-chat:7b-v3.3-q5_K_S'
  | 'neural-chat:7b-v3.3-q6_K'
  | 'neural-chat:7b-v3.3-q8_0'
  | 'neural-chat:latest'
  | 'nexusraven'
  | 'nexusraven:13b'
  | 'nexusraven:13b-fp16'
  | 'nexusraven:13b-q2_K'
  | 'nexusraven:13b-q3_K_L'
  | 'nexusraven:13b-q3_K_M'
  | 'nexusraven:13b-q3_K_S'
  | 'nexusraven:13b-q4_0'
  | 'nexusraven:13b-q4_1'
  | 'nexusraven:13b-q4_K_M'
  | 'nexusraven:13b-q4_K_S'
  | 'nexusraven:13b-q5_0'
  | 'nexusraven:13b-q5_1'
  | 'nexusraven:13b-q5_K_M'
  | 'nexusraven:13b-q5_K_S'
  | 'nexusraven:13b-q6_K'
  | 'nexusraven:13b-q8_0'
  | 'nexusraven:13b-v2-fp16'
  | 'nexusraven:13b-v2-q2_K'
  | 'nexusraven:13b-v2-q3_K_L'
  | 'nexusraven:13b-v2-q3_K_M'
  | 'nexusraven:13b-v2-q3_K_S'
  | 'nexusraven:13b-v2-q4_0'
  | 'nexusraven:13b-v2-q4_1'
  | 'nexusraven:13b-v2-q4_K_M'
  | 'nexusraven:13b-v2-q4_K_S'
  | 'nexusraven:13b-v2-q5_0'
  | 'nexusraven:13b-v2-q5_1'
  | 'nexusraven:13b-v2-q5_K_M'
  | 'nexusraven:13b-v2-q5_K_S'
  | 'nexusraven:13b-v2-q6_K'
  | 'nexusraven:13b-v2-q8_0'
  | 'nexusraven:latest'
  | 'notus'
  | 'notus:7b'
  | 'notus:7b-v1'
  | 'notus:7b-v1-fp16'
  | 'notus:7b-v1-q2_K'
  | 'notus:7b-v1-q3_K_L'
  | 'notus:7b-v1-q3_K_M'
  | 'notus:7b-v1-q3_K_S'
  | 'notus:7b-v1-q4_0'
  | 'notus:7b-v1-q4_1'
  | 'notus:7b-v1-q4_K_M'
  | 'notus:7b-v1-q4_K_S'
  | 'notus:7b-v1-q5_0'
  | 'notus:7b-v1-q5_1'
  | 'notus:7b-v1-q5_K_M'
  | 'notus:7b-v1-q5_K_S'
  | 'notus:7b-v1-q6_K'
  | 'notus:7b-v1-q8_0'
  | 'notus:latest'
  | 'notux'
  | 'notux:8x7b'
  | 'notux:8x7b-v1'
  | 'notux:8x7b-v1-fp16'
  | 'notux:8x7b-v1-q2_K'
  | 'notux:8x7b-v1-q3_K_L'
  | 'notux:8x7b-v1-q3_K_M'
  | 'notux:8x7b-v1-q3_K_S'
  | 'notux:8x7b-v1-q4_0'
  | 'notux:8x7b-v1-q4_1'
  | 'notux:8x7b-v1-q4_K_M'
  | 'notux:8x7b-v1-q4_K_S'
  | 'notux:8x7b-v1-q5_0'
  | 'notux:8x7b-v1-q5_1'
  | 'notux:8x7b-v1-q5_K_M'
  | 'notux:8x7b-v1-q5_K_S'
  | 'notux:8x7b-v1-q6_K'
  | 'notux:8x7b-v1-q8_0'
  | 'notux:latest'
  | 'nous-hermes'
  | 'nous-hermes2'
  | 'nous-hermes2-mixtral'
  | 'nous-hermes2-mixtral:8x7b'
  | 'nous-hermes2-mixtral:8x7b-dpo-fp16'
  | 'nous-hermes2-mixtral:8x7b-dpo-q2_K'
  | 'nous-hermes2-mixtral:8x7b-dpo-q3_K_L'
  | 'nous-hermes2-mixtral:8x7b-dpo-q3_K_M'
  | 'nous-hermes2-mixtral:8x7b-dpo-q3_K_S'
  | 'nous-hermes2-mixtral:8x7b-dpo-q4_0'
  | 'nous-hermes2-mixtral:8x7b-dpo-q4_1'
  | 'nous-hermes2-mixtral:8x7b-dpo-q4_K_M'
  | 'nous-hermes2-mixtral:8x7b-dpo-q4_K_S'
  | 'nous-hermes2-mixtral:8x7b-dpo-q5_0'
  | 'nous-hermes2-mixtral:8x7b-dpo-q5_1'
  | 'nous-hermes2-mixtral:8x7b-dpo-q5_K_M'
  | 'nous-hermes2-mixtral:8x7b-dpo-q5_K_S'
  | 'nous-hermes2-mixtral:8x7b-dpo-q6_K'
  | 'nous-hermes2-mixtral:8x7b-dpo-q8_0'
  | 'nous-hermes2-mixtral:dpo'
  | 'nous-hermes2-mixtral:latest'
  | 'nous-hermes2:10.7b'
  | 'nous-hermes2:10.7b-solar-fp16'
  | 'nous-hermes2:10.7b-solar-q2_K'
  | 'nous-hermes2:10.7b-solar-q3_K_L'
  | 'nous-hermes2:10.7b-solar-q3_K_M'
  | 'nous-hermes2:10.7b-solar-q3_K_S'
  | 'nous-hermes2:10.7b-solar-q4_0'
  | 'nous-hermes2:10.7b-solar-q4_1'
  | 'nous-hermes2:10.7b-solar-q4_K_M'
  | 'nous-hermes2:10.7b-solar-q4_K_S'
  | 'nous-hermes2:10.7b-solar-q5_0'
  | 'nous-hermes2:10.7b-solar-q5_1'
  | 'nous-hermes2:10.7b-solar-q5_K_M'
  | 'nous-hermes2:10.7b-solar-q5_K_S'
  | 'nous-hermes2:10.7b-solar-q6_K'
  | 'nous-hermes2:10.7b-solar-q8_0'
  | 'nous-hermes2:34b'
  | 'nous-hermes2:34b-yi-fp16'
  | 'nous-hermes2:34b-yi-q2_K'
  | 'nous-hermes2:34b-yi-q3_K_L'
  | 'nous-hermes2:34b-yi-q3_K_M'
  | 'nous-hermes2:34b-yi-q3_K_S'
  | 'nous-hermes2:34b-yi-q4_0'
  | 'nous-hermes2:34b-yi-q4_1'
  | 'nous-hermes2:34b-yi-q4_K_M'
  | 'nous-hermes2:34b-yi-q4_K_S'
  | 'nous-hermes2:34b-yi-q5_0'
  | 'nous-hermes2:34b-yi-q5_1'
  | 'nous-hermes2:34b-yi-q5_K_M'
  | 'nous-hermes2:34b-yi-q5_K_S'
  | 'nous-hermes2:34b-yi-q6_K'
  | 'nous-hermes2:34b-yi-q8_0'
  | 'nous-hermes2:latest'
  | 'nous-hermes:13b'
  | 'nous-hermes:13b-fp16'
  | 'nous-hermes:13b-llama2'
  | 'nous-hermes:13b-llama2-fp16'
  | 'nous-hermes:13b-llama2-q2_K'
  | 'nous-hermes:13b-llama2-q3_K_L'
  | 'nous-hermes:13b-llama2-q3_K_M'
  | 'nous-hermes:13b-llama2-q3_K_S'
  | 'nous-hermes:13b-llama2-q4_0'
  | 'nous-hermes:13b-llama2-q4_1'
  | 'nous-hermes:13b-llama2-q4_K_M'
  | 'nous-hermes:13b-llama2-q4_K_S'
  | 'nous-hermes:13b-llama2-q5_0'
  | 'nous-hermes:13b-llama2-q5_1'
  | 'nous-hermes:13b-llama2-q5_K_M'
  | 'nous-hermes:13b-llama2-q5_K_S'
  | 'nous-hermes:13b-llama2-q6_K'
  | 'nous-hermes:13b-llama2-q8_0'
  | 'nous-hermes:13b-q2_K'
  | 'nous-hermes:13b-q3_K_L'
  | 'nous-hermes:13b-q3_K_M'
  | 'nous-hermes:13b-q3_K_S'
  | 'nous-hermes:13b-q4_0'
  | 'nous-hermes:13b-q4_1'
  | 'nous-hermes:13b-q4_K_M'
  | 'nous-hermes:13b-q4_K_S'
  | 'nous-hermes:13b-q5_0'
  | 'nous-hermes:13b-q5_1'
  | 'nous-hermes:13b-q5_K_M'
  | 'nous-hermes:13b-q5_K_S'
  | 'nous-hermes:13b-q6_K'
  | 'nous-hermes:13b-q8_0'
  | 'nous-hermes:70b-llama2-fp16'
  | 'nous-hermes:70b-llama2-q2_K'
  | 'nous-hermes:70b-llama2-q3_K_L'
  | 'nous-hermes:70b-llama2-q3_K_M'
  | 'nous-hermes:70b-llama2-q3_K_S'
  | 'nous-hermes:70b-llama2-q4_0'
  | 'nous-hermes:70b-llama2-q4_1'
  | 'nous-hermes:70b-llama2-q4_K_M'
  | 'nous-hermes:70b-llama2-q4_K_S'
  | 'nous-hermes:70b-llama2-q5_0'
  | 'nous-hermes:70b-llama2-q5_1'
  | 'nous-hermes:70b-llama2-q5_K_M'
  | 'nous-hermes:70b-llama2-q6_K'
  | 'nous-hermes:7b'
  | 'nous-hermes:7b-llama2'
  | 'nous-hermes:7b-llama2-fp16'
  | 'nous-hermes:7b-llama2-q2_K'
  | 'nous-hermes:7b-llama2-q3_K_L'
  | 'nous-hermes:7b-llama2-q3_K_M'
  | 'nous-hermes:7b-llama2-q3_K_S'
  | 'nous-hermes:7b-llama2-q4_0'
  | 'nous-hermes:7b-llama2-q4_1'
  | 'nous-hermes:7b-llama2-q4_K_M'
  | 'nous-hermes:7b-llama2-q4_K_S'
  | 'nous-hermes:7b-llama2-q5_0'
  | 'nous-hermes:7b-llama2-q5_1'
  | 'nous-hermes:7b-llama2-q5_K_M'
  | 'nous-hermes:7b-llama2-q5_K_S'
  | 'nous-hermes:7b-llama2-q6_K'
  | 'nous-hermes:7b-llama2-q8_0'
  | 'nous-hermes:latest'
  | 'nuextract'
  | 'nuextract:3.8b'
  | 'nuextract:3.8b-fp16'
  | 'nuextract:3.8b-q2_K'
  | 'nuextract:3.8b-q3_K_L'
  | 'nuextract:3.8b-q3_K_M'
  | 'nuextract:3.8b-q3_K_S'
  | 'nuextract:3.8b-q4_0'
  | 'nuextract:3.8b-q4_1'
  | 'nuextract:3.8b-q4_K_M'
  | 'nuextract:3.8b-q4_K_S'
  | 'nuextract:3.8b-q5_0'
  | 'nuextract:3.8b-q5_1'
  | 'nuextract:3.8b-q5_K_M'
  | 'nuextract:3.8b-q5_K_S'
  | 'nuextract:3.8b-q6_K'
  | 'nuextract:3.8b-q8_0'
  | 'nuextract:latest'
  | 'olmo2'
  | 'olmo2:13b'
  | 'olmo2:13b-1124-instruct-fp16'
  | 'olmo2:13b-1124-instruct-q4_K_M'
  | 'olmo2:13b-1124-instruct-q8_0'
  | 'olmo2:7b'
  | 'olmo2:7b-1124-instruct-fp16'
  | 'olmo2:7b-1124-instruct-q4_K_M'
  | 'olmo2:7b-1124-instruct-q8_0'
  | 'olmo2:latest'
  | 'open-orca-platypus2'
  | 'open-orca-platypus2:13b'
  | 'open-orca-platypus2:13b-fp16'
  | 'open-orca-platypus2:13b-q2_K'
  | 'open-orca-platypus2:13b-q3_K_L'
  | 'open-orca-platypus2:13b-q3_K_M'
  | 'open-orca-platypus2:13b-q3_K_S'
  | 'open-orca-platypus2:13b-q4_0'
  | 'open-orca-platypus2:13b-q4_1'
  | 'open-orca-platypus2:13b-q4_K_M'
  | 'open-orca-platypus2:13b-q4_K_S'
  | 'open-orca-platypus2:13b-q5_0'
  | 'open-orca-platypus2:13b-q5_1'
  | 'open-orca-platypus2:13b-q5_K_M'
  | 'open-orca-platypus2:13b-q5_K_S'
  | 'open-orca-platypus2:13b-q6_K'
  | 'open-orca-platypus2:13b-q8_0'
  | 'open-orca-platypus2:latest'
  | 'openchat'
  | 'openchat:7b'
  | 'openchat:7b-v3.5'
  | 'openchat:7b-v3.5-0106'
  | 'openchat:7b-v3.5-0106-fp16'
  | 'openchat:7b-v3.5-0106-q2_K'
  | 'openchat:7b-v3.5-0106-q3_K_L'
  | 'openchat:7b-v3.5-0106-q3_K_M'
  | 'openchat:7b-v3.5-0106-q3_K_S'
  | 'openchat:7b-v3.5-0106-q4_0'
  | 'openchat:7b-v3.5-0106-q4_1'
  | 'openchat:7b-v3.5-0106-q4_K_M'
  | 'openchat:7b-v3.5-0106-q4_K_S'
  | 'openchat:7b-v3.5-0106-q5_0'
  | 'openchat:7b-v3.5-0106-q5_1'
  | 'openchat:7b-v3.5-0106-q5_K_M'
  | 'openchat:7b-v3.5-0106-q5_K_S'
  | 'openchat:7b-v3.5-0106-q6_K'
  | 'openchat:7b-v3.5-0106-q8_0'
  | 'openchat:7b-v3.5-1210'
  | 'openchat:7b-v3.5-1210-fp16'
  | 'openchat:7b-v3.5-1210-q2_K'
  | 'openchat:7b-v3.5-1210-q3_K_L'
  | 'openchat:7b-v3.5-1210-q3_K_M'
  | 'openchat:7b-v3.5-1210-q3_K_S'
  | 'openchat:7b-v3.5-1210-q4_0'
  | 'openchat:7b-v3.5-1210-q4_1'
  | 'openchat:7b-v3.5-1210-q4_K_M'
  | 'openchat:7b-v3.5-1210-q4_K_S'
  | 'openchat:7b-v3.5-1210-q5_0'
  | 'openchat:7b-v3.5-1210-q5_1'
  | 'openchat:7b-v3.5-1210-q5_K_M'
  | 'openchat:7b-v3.5-1210-q5_K_S'
  | 'openchat:7b-v3.5-1210-q6_K'
  | 'openchat:7b-v3.5-1210-q8_0'
  | 'openchat:7b-v3.5-fp16'
  | 'openchat:7b-v3.5-q2_K'
  | 'openchat:7b-v3.5-q3_K_L'
  | 'openchat:7b-v3.5-q3_K_M'
  | 'openchat:7b-v3.5-q3_K_S'
  | 'openchat:7b-v3.5-q4_0'
  | 'openchat:7b-v3.5-q4_1'
  | 'openchat:7b-v3.5-q4_K_M'
  | 'openchat:7b-v3.5-q4_K_S'
  | 'openchat:7b-v3.5-q5_0'
  | 'openchat:7b-v3.5-q5_1'
  | 'openchat:7b-v3.5-q5_K_M'
  | 'openchat:7b-v3.5-q5_K_S'
  | 'openchat:7b-v3.5-q6_K'
  | 'openchat:7b-v3.5-q8_0'
  | 'openchat:latest'
  | 'opencoder'
  | 'opencoder:1.5b'
  | 'opencoder:1.5b-instruct-fp16'
  | 'opencoder:1.5b-instruct-q4_K_M'
  | 'opencoder:1.5b-instruct-q8_0'
  | 'opencoder:8b'
  | 'opencoder:8b-instruct-fp16'
  | 'opencoder:8b-instruct-q4_K_M'
  | 'opencoder:8b-instruct-q8_0'
  | 'opencoder:latest'
  | 'openhermes'
  | 'openhermes:7b-mistral-v2-fp16'
  | 'openhermes:7b-mistral-v2-q2_K'
  | 'openhermes:7b-mistral-v2-q3_K_L'
  | 'openhermes:7b-mistral-v2-q3_K_M'
  | 'openhermes:7b-mistral-v2-q3_K_S'
  | 'openhermes:7b-mistral-v2-q4_0'
  | 'openhermes:7b-mistral-v2-q4_1'
  | 'openhermes:7b-mistral-v2-q4_K_M'
  | 'openhermes:7b-mistral-v2-q4_K_S'
  | 'openhermes:7b-mistral-v2-q5_0'
  | 'openhermes:7b-mistral-v2-q5_1'
  | 'openhermes:7b-mistral-v2-q5_K_M'
  | 'openhermes:7b-mistral-v2-q5_K_S'
  | 'openhermes:7b-mistral-v2-q6_K'
  | 'openhermes:7b-mistral-v2-q8_0'
  | 'openhermes:7b-mistral-v2.5-fp16'
  | 'openhermes:7b-mistral-v2.5-q2_K'
  | 'openhermes:7b-mistral-v2.5-q3_K_L'
  | 'openhermes:7b-mistral-v2.5-q3_K_M'
  | 'openhermes:7b-mistral-v2.5-q3_K_S'
  | 'openhermes:7b-mistral-v2.5-q4_0'
  | 'openhermes:7b-mistral-v2.5-q4_1'
  | 'openhermes:7b-mistral-v2.5-q4_K_M'
  | 'openhermes:7b-mistral-v2.5-q4_K_S'
  | 'openhermes:7b-mistral-v2.5-q5_0'
  | 'openhermes:7b-mistral-v2.5-q5_1'
  | 'openhermes:7b-mistral-v2.5-q5_K_M'
  | 'openhermes:7b-mistral-v2.5-q5_K_S'
  | 'openhermes:7b-mistral-v2.5-q6_K'
  | 'openhermes:7b-mistral-v2.5-q8_0'
  | 'openhermes:7b-v2'
  | 'openhermes:7b-v2.5'
  | 'openhermes:latest'
  | 'openhermes:v2'
  | 'openhermes:v2.5'
  | 'openthinker'
  | 'openthinker:32b'
  | 'openthinker:32b-fp16'
  | 'openthinker:32b-q4_K_M'
  | 'openthinker:32b-q8_0'
  | 'openthinker:32b-v2-fp16'
  | 'openthinker:32b-v2-q4_K_M'
  | 'openthinker:32b-v2-q8_0'
  | 'openthinker:7b'
  | 'openthinker:7b-fp16'
  | 'openthinker:7b-q4_K_M'
  | 'openthinker:7b-q8_0'
  | 'openthinker:7b-v2-fp16'
  | 'openthinker:7b-v2-q4_K_M'
  | 'openthinker:7b-v2-q8_0'
  | 'openthinker:latest'
  | 'orca-mini'
  | 'orca-mini:13b'
  | 'orca-mini:13b-fp16'
  | 'orca-mini:13b-q2_K'
  | 'orca-mini:13b-q3_K_L'
  | 'orca-mini:13b-q3_K_M'
  | 'orca-mini:13b-q3_K_S'
  | 'orca-mini:13b-q4_0'
  | 'orca-mini:13b-q4_1'
  | 'orca-mini:13b-q4_K_M'
  | 'orca-mini:13b-q4_K_S'
  | 'orca-mini:13b-q5_0'
  | 'orca-mini:13b-q5_1'
  | 'orca-mini:13b-q5_K_M'
  | 'orca-mini:13b-q5_K_S'
  | 'orca-mini:13b-q6_K'
  | 'orca-mini:13b-q8_0'
  | 'orca-mini:13b-v2-fp16'
  | 'orca-mini:13b-v2-q2_K'
  | 'orca-mini:13b-v2-q3_K_L'
  | 'orca-mini:13b-v2-q3_K_M'
  | 'orca-mini:13b-v2-q3_K_S'
  | 'orca-mini:13b-v2-q4_0'
  | 'orca-mini:13b-v2-q4_1'
  | 'orca-mini:13b-v2-q4_K_M'
  | 'orca-mini:13b-v2-q4_K_S'
  | 'orca-mini:13b-v2-q5_0'
  | 'orca-mini:13b-v2-q5_1'
  | 'orca-mini:13b-v2-q5_K_M'
  | 'orca-mini:13b-v2-q5_K_S'
  | 'orca-mini:13b-v2-q6_K'
  | 'orca-mini:13b-v2-q8_0'
  | 'orca-mini:13b-v3'
  | 'orca-mini:13b-v3-fp16'
  | 'orca-mini:13b-v3-q2_K'
  | 'orca-mini:13b-v3-q3_K_L'
  | 'orca-mini:13b-v3-q3_K_M'
  | 'orca-mini:13b-v3-q3_K_S'
  | 'orca-mini:13b-v3-q4_0'
  | 'orca-mini:13b-v3-q4_1'
  | 'orca-mini:13b-v3-q4_K_M'
  | 'orca-mini:13b-v3-q4_K_S'
  | 'orca-mini:13b-v3-q5_0'
  | 'orca-mini:13b-v3-q5_1'
  | 'orca-mini:13b-v3-q5_K_M'
  | 'orca-mini:13b-v3-q5_K_S'
  | 'orca-mini:13b-v3-q6_K'
  | 'orca-mini:13b-v3-q8_0'
  | 'orca-mini:3b'
  | 'orca-mini:3b-fp16'
  | 'orca-mini:3b-q4_0'
  | 'orca-mini:3b-q4_1'
  | 'orca-mini:3b-q5_0'
  | 'orca-mini:3b-q5_1'
  | 'orca-mini:3b-q8_0'
  | 'orca-mini:70b'
  | 'orca-mini:70b-v3'
  | 'orca-mini:70b-v3-fp16'
  | 'orca-mini:70b-v3-q2_K'
  | 'orca-mini:70b-v3-q3_K_L'
  | 'orca-mini:70b-v3-q3_K_M'
  | 'orca-mini:70b-v3-q3_K_S'
  | 'orca-mini:70b-v3-q4_0'
  | 'orca-mini:70b-v3-q4_1'
  | 'orca-mini:70b-v3-q4_K_M'
  | 'orca-mini:70b-v3-q4_K_S'
  | 'orca-mini:70b-v3-q5_0'
  | 'orca-mini:70b-v3-q5_1'
  | 'orca-mini:70b-v3-q5_K_M'
  | 'orca-mini:70b-v3-q5_K_S'
  | 'orca-mini:70b-v3-q6_K'
  | 'orca-mini:70b-v3-q8_0'
  | 'orca-mini:7b'
  | 'orca-mini:7b-fp16'
  | 'orca-mini:7b-q2_K'
  | 'orca-mini:7b-q3_K_L'
  | 'orca-mini:7b-q3_K_M'
  | 'orca-mini:7b-q3_K_S'
  | 'orca-mini:7b-q4_0'
  | 'orca-mini:7b-q4_1'
  | 'orca-mini:7b-q4_K_M'
  | 'orca-mini:7b-q4_K_S'
  | 'orca-mini:7b-q5_0'
  | 'orca-mini:7b-q5_1'
  | 'orca-mini:7b-q5_K_M'
  | 'orca-mini:7b-q5_K_S'
  | 'orca-mini:7b-q6_K'
  | 'orca-mini:7b-q8_0'
  | 'orca-mini:7b-v2-fp16'
  | 'orca-mini:7b-v2-q2_K'
  | 'orca-mini:7b-v2-q3_K_L'
  | 'orca-mini:7b-v2-q3_K_M'
  | 'orca-mini:7b-v2-q3_K_S'
  | 'orca-mini:7b-v2-q4_0'
  | 'orca-mini:7b-v2-q4_1'
  | 'orca-mini:7b-v2-q4_K_M'
  | 'orca-mini:7b-v2-q4_K_S'
  | 'orca-mini:7b-v2-q5_0'
  | 'orca-mini:7b-v2-q5_1'
  | 'orca-mini:7b-v2-q5_K_M'
  | 'orca-mini:7b-v2-q5_K_S'
  | 'orca-mini:7b-v2-q6_K'
  | 'orca-mini:7b-v2-q8_0'
  | 'orca-mini:7b-v3'
  | 'orca-mini:7b-v3-fp16'
  | 'orca-mini:7b-v3-q2_K'
  | 'orca-mini:7b-v3-q3_K_L'
  | 'orca-mini:7b-v3-q3_K_M'
  | 'orca-mini:7b-v3-q3_K_S'
  | 'orca-mini:7b-v3-q4_0'
  | 'orca-mini:7b-v3-q4_1'
  | 'orca-mini:7b-v3-q4_K_M'
  | 'orca-mini:7b-v3-q4_K_S'
  | 'orca-mini:7b-v3-q5_0'
  | 'orca-mini:7b-v3-q5_1'
  | 'orca-mini:7b-v3-q5_K_M'
  | 'orca-mini:7b-v3-q5_K_S'
  | 'orca-mini:7b-v3-q6_K'
  | 'orca-mini:7b-v3-q8_0'
  | 'orca-mini:latest'
  | 'orca2'
  | 'orca2:13b'
  | 'orca2:13b-fp16'
  | 'orca2:13b-q2_K'
  | 'orca2:13b-q3_K_L'
  | 'orca2:13b-q3_K_M'
  | 'orca2:13b-q3_K_S'
  | 'orca2:13b-q4_0'
  | 'orca2:13b-q4_1'
  | 'orca2:13b-q4_K_M'
  | 'orca2:13b-q4_K_S'
  | 'orca2:13b-q5_0'
  | 'orca2:13b-q5_1'
  | 'orca2:13b-q5_K_M'
  | 'orca2:13b-q5_K_S'
  | 'orca2:13b-q6_K'
  | 'orca2:13b-q8_0'
  | 'orca2:7b'
  | 'orca2:7b-fp16'
  | 'orca2:7b-q2_K'
  | 'orca2:7b-q3_K_L'
  | 'orca2:7b-q3_K_M'
  | 'orca2:7b-q3_K_S'
  | 'orca2:7b-q4_0'
  | 'orca2:7b-q4_1'
  | 'orca2:7b-q4_K_M'
  | 'orca2:7b-q4_K_S'
  | 'orca2:7b-q5_0'
  | 'orca2:7b-q5_1'
  | 'orca2:7b-q5_K_M'
  | 'orca2:7b-q5_K_S'
  | 'orca2:7b-q6_K'
  | 'orca2:7b-q8_0'
  | 'orca2:latest'
  | 'phi'
  | 'phi3'
  | 'phi3.5'
  | 'phi3.5:3.8b'
  | 'phi3.5:3.8b-mini-instruct-fp16'
  | 'phi3.5:3.8b-mini-instruct-q2_K'
  | 'phi3.5:3.8b-mini-instruct-q3_K_L'
  | 'phi3.5:3.8b-mini-instruct-q3_K_M'
  | 'phi3.5:3.8b-mini-instruct-q3_K_S'
  | 'phi3.5:3.8b-mini-instruct-q4_0'
  | 'phi3.5:3.8b-mini-instruct-q4_1'
  | 'phi3.5:3.8b-mini-instruct-q4_K_M'
  | 'phi3.5:3.8b-mini-instruct-q4_K_S'
  | 'phi3.5:3.8b-mini-instruct-q5_0'
  | 'phi3.5:3.8b-mini-instruct-q5_1'
  | 'phi3.5:3.8b-mini-instruct-q5_K_M'
  | 'phi3.5:3.8b-mini-instruct-q5_K_S'
  | 'phi3.5:3.8b-mini-instruct-q6_K'
  | 'phi3.5:3.8b-mini-instruct-q8_0'
  | 'phi3.5:latest'
  | 'phi3:14b'
  | 'phi3:14b-instruct'
  | 'phi3:14b-medium-128k-instruct-fp16'
  | 'phi3:14b-medium-128k-instruct-q2_K'
  | 'phi3:14b-medium-128k-instruct-q3_K_L'
  | 'phi3:14b-medium-128k-instruct-q3_K_M'
  | 'phi3:14b-medium-128k-instruct-q3_K_S'
  | 'phi3:14b-medium-128k-instruct-q4_0'
  | 'phi3:14b-medium-128k-instruct-q4_1'
  | 'phi3:14b-medium-128k-instruct-q4_K_M'
  | 'phi3:14b-medium-128k-instruct-q4_K_S'
  | 'phi3:14b-medium-128k-instruct-q5_0'
  | 'phi3:14b-medium-128k-instruct-q5_1'
  | 'phi3:14b-medium-128k-instruct-q5_K_M'
  | 'phi3:14b-medium-128k-instruct-q5_K_S'
  | 'phi3:14b-medium-128k-instruct-q6_K'
  | 'phi3:14b-medium-128k-instruct-q8_0'
  | 'phi3:14b-medium-4k-instruct-fp16'
  | 'phi3:14b-medium-4k-instruct-q2_K'
  | 'phi3:14b-medium-4k-instruct-q3_K_L'
  | 'phi3:14b-medium-4k-instruct-q3_K_M'
  | 'phi3:14b-medium-4k-instruct-q3_K_S'
  | 'phi3:14b-medium-4k-instruct-q4_0'
  | 'phi3:14b-medium-4k-instruct-q4_1'
  | 'phi3:14b-medium-4k-instruct-q4_K_M'
  | 'phi3:14b-medium-4k-instruct-q4_K_S'
  | 'phi3:14b-medium-4k-instruct-q5_0'
  | 'phi3:14b-medium-4k-instruct-q5_1'
  | 'phi3:14b-medium-4k-instruct-q5_K_M'
  | 'phi3:14b-medium-4k-instruct-q5_K_S'
  | 'phi3:14b-medium-4k-instruct-q6_K'
  | 'phi3:14b-medium-4k-instruct-q8_0'
  | 'phi3:3.8b'
  | 'phi3:3.8b-instruct'
  | 'phi3:3.8b-mini-128k-instruct-fp16'
  | 'phi3:3.8b-mini-128k-instruct-q2_K'
  | 'phi3:3.8b-mini-128k-instruct-q3_K_L'
  | 'phi3:3.8b-mini-128k-instruct-q3_K_M'
  | 'phi3:3.8b-mini-128k-instruct-q3_K_S'
  | 'phi3:3.8b-mini-128k-instruct-q4_0'
  | 'phi3:3.8b-mini-128k-instruct-q4_1'
  | 'phi3:3.8b-mini-128k-instruct-q4_K_M'
  | 'phi3:3.8b-mini-128k-instruct-q4_K_S'
  | 'phi3:3.8b-mini-128k-instruct-q5_0'
  | 'phi3:3.8b-mini-128k-instruct-q5_1'
  | 'phi3:3.8b-mini-128k-instruct-q5_K_M'
  | 'phi3:3.8b-mini-128k-instruct-q5_K_S'
  | 'phi3:3.8b-mini-128k-instruct-q6_K'
  | 'phi3:3.8b-mini-128k-instruct-q8_0'
  | 'phi3:3.8b-mini-4k-instruct-fp16'
  | 'phi3:3.8b-mini-4k-instruct-q2_K'
  | 'phi3:3.8b-mini-4k-instruct-q3_K_L'
  | 'phi3:3.8b-mini-4k-instruct-q3_K_M'
  | 'phi3:3.8b-mini-4k-instruct-q3_K_S'
  | 'phi3:3.8b-mini-4k-instruct-q4_0'
  | 'phi3:3.8b-mini-4k-instruct-q4_1'
  | 'phi3:3.8b-mini-4k-instruct-q4_K_M'
  | 'phi3:3.8b-mini-4k-instruct-q4_K_S'
  | 'phi3:3.8b-mini-4k-instruct-q5_0'
  | 'phi3:3.8b-mini-4k-instruct-q5_1'
  | 'phi3:3.8b-mini-4k-instruct-q5_K_M'
  | 'phi3:3.8b-mini-4k-instruct-q5_K_S'
  | 'phi3:3.8b-mini-4k-instruct-q6_K'
  | 'phi3:3.8b-mini-4k-instruct-q8_0'
  | 'phi3:instruct'
  | 'phi3:latest'
  | 'phi3:medium'
  | 'phi3:medium-128k'
  | 'phi3:medium-4k'
  | 'phi3:mini'
  | 'phi3:mini-128k'
  | 'phi3:mini-4k'
  | 'phi4'
  | 'phi4-mini'
  | 'phi4-mini-reasoning'
  | 'phi4-mini-reasoning:3.8b'
  | 'phi4-mini-reasoning:3.8b-fp16'
  | 'phi4-mini-reasoning:3.8b-q4_K_M'
  | 'phi4-mini-reasoning:3.8b-q8_0'
  | 'phi4-mini-reasoning:latest'
  | 'phi4-mini:3.8b'
  | 'phi4-mini:3.8b-fp16'
  | 'phi4-mini:3.8b-q4_K_M'
  | 'phi4-mini:3.8b-q8_0'
  | 'phi4-mini:latest'
  | 'phi4-reasoning'
  | 'phi4-reasoning:14b'
  | 'phi4-reasoning:14b-fp16'
  | 'phi4-reasoning:14b-plus-fp16'
  | 'phi4-reasoning:14b-plus-q4_K_M'
  | 'phi4-reasoning:14b-plus-q8_0'
  | 'phi4-reasoning:14b-q4_K_M'
  | 'phi4-reasoning:14b-q8_0'
  | 'phi4-reasoning:latest'
  | 'phi4-reasoning:plus'
  | 'phi4:14b'
  | 'phi4:14b-fp16'
  | 'phi4:14b-q4_K_M'
  | 'phi4:14b-q8_0'
  | 'phi4:latest'
  | 'phi:2.7b'
  | 'phi:2.7b-chat-v2-fp16'
  | 'phi:2.7b-chat-v2-q2_K'
  | 'phi:2.7b-chat-v2-q3_K_L'
  | 'phi:2.7b-chat-v2-q3_K_M'
  | 'phi:2.7b-chat-v2-q3_K_S'
  | 'phi:2.7b-chat-v2-q4_0'
  | 'phi:2.7b-chat-v2-q4_1'
  | 'phi:2.7b-chat-v2-q4_K_M'
  | 'phi:2.7b-chat-v2-q4_K_S'
  | 'phi:2.7b-chat-v2-q5_0'
  | 'phi:2.7b-chat-v2-q5_1'
  | 'phi:2.7b-chat-v2-q5_K_M'
  | 'phi:2.7b-chat-v2-q5_K_S'
  | 'phi:2.7b-chat-v2-q6_K'
  | 'phi:2.7b-chat-v2-q8_0'
  | 'phi:chat'
  | 'phi:latest'
  | 'phind-codellama'
  | 'phind-codellama:34b'
  | 'phind-codellama:34b-fp16'
  | 'phind-codellama:34b-python'
  | 'phind-codellama:34b-python-fp16'
  | 'phind-codellama:34b-python-q2_K'
  | 'phind-codellama:34b-python-q3_K_L'
  | 'phind-codellama:34b-python-q3_K_M'
  | 'phind-codellama:34b-python-q3_K_S'
  | 'phind-codellama:34b-python-q4_0'
  | 'phind-codellama:34b-python-q4_1'
  | 'phind-codellama:34b-python-q4_K_M'
  | 'phind-codellama:34b-python-q4_K_S'
  | 'phind-codellama:34b-python-q5_0'
  | 'phind-codellama:34b-python-q5_1'
  | 'phind-codellama:34b-python-q5_K_M'
  | 'phind-codellama:34b-python-q5_K_S'
  | 'phind-codellama:34b-python-q6_K'
  | 'phind-codellama:34b-python-q8_0'
  | 'phind-codellama:34b-q2_K'
  | 'phind-codellama:34b-q3_K_L'
  | 'phind-codellama:34b-q3_K_M'
  | 'phind-codellama:34b-q3_K_S'
  | 'phind-codellama:34b-q4_0'
  | 'phind-codellama:34b-q4_1'
  | 'phind-codellama:34b-q4_K_M'
  | 'phind-codellama:34b-q4_K_S'
  | 'phind-codellama:34b-q5_0'
  | 'phind-codellama:34b-q5_1'
  | 'phind-codellama:34b-q5_K_M'
  | 'phind-codellama:34b-q5_K_S'
  | 'phind-codellama:34b-q6_K'
  | 'phind-codellama:34b-q8_0'
  | 'phind-codellama:34b-v2'
  | 'phind-codellama:34b-v2-fp16'
  | 'phind-codellama:34b-v2-q2_K'
  | 'phind-codellama:34b-v2-q3_K_L'
  | 'phind-codellama:34b-v2-q3_K_M'
  | 'phind-codellama:34b-v2-q3_K_S'
  | 'phind-codellama:34b-v2-q4_0'
  | 'phind-codellama:34b-v2-q4_1'
  | 'phind-codellama:34b-v2-q4_K_M'
  | 'phind-codellama:34b-v2-q4_K_S'
  | 'phind-codellama:34b-v2-q5_0'
  | 'phind-codellama:34b-v2-q5_1'
  | 'phind-codellama:34b-v2-q5_K_M'
  | 'phind-codellama:34b-v2-q5_K_S'
  | 'phind-codellama:34b-v2-q6_K'
  | 'phind-codellama:34b-v2-q8_0'
  | 'phind-codellama:latest'
  | 'qwen'
  | 'qwen2'
  | 'qwen2-math'
  | 'qwen2-math:1.5b'
  | 'qwen2-math:1.5b-instruct'
  | 'qwen2-math:1.5b-instruct-fp16'
  | 'qwen2-math:1.5b-instruct-q2_K'
  | 'qwen2-math:1.5b-instruct-q3_K_L'
  | 'qwen2-math:1.5b-instruct-q3_K_M'
  | 'qwen2-math:1.5b-instruct-q3_K_S'
  | 'qwen2-math:1.5b-instruct-q4_0'
  | 'qwen2-math:1.5b-instruct-q4_1'
  | 'qwen2-math:1.5b-instruct-q4_K_M'
  | 'qwen2-math:1.5b-instruct-q4_K_S'
  | 'qwen2-math:1.5b-instruct-q5_0'
  | 'qwen2-math:1.5b-instruct-q5_1'
  | 'qwen2-math:1.5b-instruct-q5_K_M'
  | 'qwen2-math:1.5b-instruct-q5_K_S'
  | 'qwen2-math:1.5b-instruct-q6_K'
  | 'qwen2-math:1.5b-instruct-q8_0'
  | 'qwen2-math:72b'
  | 'qwen2-math:72b-instruct'
  | 'qwen2-math:72b-instruct-fp16'
  | 'qwen2-math:72b-instruct-q2_K'
  | 'qwen2-math:72b-instruct-q3_K_L'
  | 'qwen2-math:72b-instruct-q3_K_M'
  | 'qwen2-math:72b-instruct-q3_K_S'
  | 'qwen2-math:72b-instruct-q4_0'
  | 'qwen2-math:72b-instruct-q4_1'
  | 'qwen2-math:72b-instruct-q4_K_M'
  | 'qwen2-math:72b-instruct-q4_K_S'
  | 'qwen2-math:72b-instruct-q5_0'
  | 'qwen2-math:72b-instruct-q5_1'
  | 'qwen2-math:72b-instruct-q5_K_M'
  | 'qwen2-math:72b-instruct-q5_K_S'
  | 'qwen2-math:72b-instruct-q6_K'
  | 'qwen2-math:72b-instruct-q8_0'
  | 'qwen2-math:7b'
  | 'qwen2-math:7b-instruct'
  | 'qwen2-math:7b-instruct-fp16'
  | 'qwen2-math:7b-instruct-q2_K'
  | 'qwen2-math:7b-instruct-q3_K_L'
  | 'qwen2-math:7b-instruct-q3_K_M'
  | 'qwen2-math:7b-instruct-q3_K_S'
  | 'qwen2-math:7b-instruct-q4_0'
  | 'qwen2-math:7b-instruct-q4_1'
  | 'qwen2-math:7b-instruct-q4_K_M'
  | 'qwen2-math:7b-instruct-q4_K_S'
  | 'qwen2-math:7b-instruct-q5_0'
  | 'qwen2-math:7b-instruct-q5_1'
  | 'qwen2-math:7b-instruct-q5_K_M'
  | 'qwen2-math:7b-instruct-q5_K_S'
  | 'qwen2-math:7b-instruct-q6_K'
  | 'qwen2-math:7b-instruct-q8_0'
  | 'qwen2-math:latest'
  | 'qwen2.5'
  | 'qwen2.5-coder'
  | 'qwen2.5-coder:0.5b'
  | 'qwen2.5-coder:0.5b-base'
  | 'qwen2.5-coder:0.5b-base-fp16'
  | 'qwen2.5-coder:0.5b-base-q2_K'
  | 'qwen2.5-coder:0.5b-base-q3_K_L'
  | 'qwen2.5-coder:0.5b-base-q3_K_M'
  | 'qwen2.5-coder:0.5b-base-q3_K_S'
  | 'qwen2.5-coder:0.5b-base-q4_0'
  | 'qwen2.5-coder:0.5b-base-q4_1'
  | 'qwen2.5-coder:0.5b-base-q4_K_M'
  | 'qwen2.5-coder:0.5b-base-q4_K_S'
  | 'qwen2.5-coder:0.5b-base-q5_0'
  | 'qwen2.5-coder:0.5b-base-q5_1'
  | 'qwen2.5-coder:0.5b-base-q5_K_M'
  | 'qwen2.5-coder:0.5b-base-q5_K_S'
  | 'qwen2.5-coder:0.5b-base-q6_K'
  | 'qwen2.5-coder:0.5b-base-q8_0'
  | 'qwen2.5-coder:0.5b-instruct'
  | 'qwen2.5-coder:0.5b-instruct-fp16'
  | 'qwen2.5-coder:0.5b-instruct-q2_K'
  | 'qwen2.5-coder:0.5b-instruct-q3_K_L'
  | 'qwen2.5-coder:0.5b-instruct-q3_K_M'
  | 'qwen2.5-coder:0.5b-instruct-q3_K_S'
  | 'qwen2.5-coder:0.5b-instruct-q4_0'
  | 'qwen2.5-coder:0.5b-instruct-q4_1'
  | 'qwen2.5-coder:0.5b-instruct-q4_K_M'
  | 'qwen2.5-coder:0.5b-instruct-q4_K_S'
  | 'qwen2.5-coder:0.5b-instruct-q5_0'
  | 'qwen2.5-coder:0.5b-instruct-q5_1'
  | 'qwen2.5-coder:0.5b-instruct-q5_K_M'
  | 'qwen2.5-coder:0.5b-instruct-q5_K_S'
  | 'qwen2.5-coder:0.5b-instruct-q6_K'
  | 'qwen2.5-coder:0.5b-instruct-q8_0'
  | 'qwen2.5-coder:1.5b'
  | 'qwen2.5-coder:1.5b-base'
  | 'qwen2.5-coder:1.5b-base-fp16'
  | 'qwen2.5-coder:1.5b-base-q2_K'
  | 'qwen2.5-coder:1.5b-base-q3_K_L'
  | 'qwen2.5-coder:1.5b-base-q3_K_M'
  | 'qwen2.5-coder:1.5b-base-q3_K_S'
  | 'qwen2.5-coder:1.5b-base-q4_0'
  | 'qwen2.5-coder:1.5b-base-q4_1'
  | 'qwen2.5-coder:1.5b-base-q4_K_M'
  | 'qwen2.5-coder:1.5b-base-q4_K_S'
  | 'qwen2.5-coder:1.5b-base-q5_0'
  | 'qwen2.5-coder:1.5b-base-q5_1'
  | 'qwen2.5-coder:1.5b-base-q5_K_M'
  | 'qwen2.5-coder:1.5b-base-q5_K_S'
  | 'qwen2.5-coder:1.5b-base-q6_K'
  | 'qwen2.5-coder:1.5b-base-q8_0'
  | 'qwen2.5-coder:1.5b-instruct'
  | 'qwen2.5-coder:1.5b-instruct-fp16'
  | 'qwen2.5-coder:1.5b-instruct-q2_K'
  | 'qwen2.5-coder:1.5b-instruct-q3_K_L'
  | 'qwen2.5-coder:1.5b-instruct-q3_K_M'
  | 'qwen2.5-coder:1.5b-instruct-q3_K_S'
  | 'qwen2.5-coder:1.5b-instruct-q4_0'
  | 'qwen2.5-coder:1.5b-instruct-q4_1'
  | 'qwen2.5-coder:1.5b-instruct-q4_K_M'
  | 'qwen2.5-coder:1.5b-instruct-q4_K_S'
  | 'qwen2.5-coder:1.5b-instruct-q5_0'
  | 'qwen2.5-coder:1.5b-instruct-q5_1'
  | 'qwen2.5-coder:1.5b-instruct-q5_K_M'
  | 'qwen2.5-coder:1.5b-instruct-q5_K_S'
  | 'qwen2.5-coder:1.5b-instruct-q6_K'
  | 'qwen2.5-coder:1.5b-instruct-q8_0'
  | 'qwen2.5-coder:14b'
  | 'qwen2.5-coder:14b-base'
  | 'qwen2.5-coder:14b-base-fp16'
  | 'qwen2.5-coder:14b-base-q2_K'
  | 'qwen2.5-coder:14b-base-q3_K_L'
  | 'qwen2.5-coder:14b-base-q3_K_M'
  | 'qwen2.5-coder:14b-base-q3_K_S'
  | 'qwen2.5-coder:14b-base-q4_0'
  | 'qwen2.5-coder:14b-base-q4_1'
  | 'qwen2.5-coder:14b-base-q4_K_M'
  | 'qwen2.5-coder:14b-base-q4_K_S'
  | 'qwen2.5-coder:14b-base-q5_0'
  | 'qwen2.5-coder:14b-base-q5_1'
  | 'qwen2.5-coder:14b-base-q5_K_M'
  | 'qwen2.5-coder:14b-base-q5_K_S'
  | 'qwen2.5-coder:14b-base-q6_K'
  | 'qwen2.5-coder:14b-base-q8_0'
  | 'qwen2.5-coder:14b-instruct'
  | 'qwen2.5-coder:14b-instruct-fp16'
  | 'qwen2.5-coder:14b-instruct-q2_K'
  | 'qwen2.5-coder:14b-instruct-q3_K_L'
  | 'qwen2.5-coder:14b-instruct-q3_K_M'
  | 'qwen2.5-coder:14b-instruct-q3_K_S'
  | 'qwen2.5-coder:14b-instruct-q4_0'
  | 'qwen2.5-coder:14b-instruct-q4_1'
  | 'qwen2.5-coder:14b-instruct-q4_K_M'
  | 'qwen2.5-coder:14b-instruct-q4_K_S'
  | 'qwen2.5-coder:14b-instruct-q5_0'
  | 'qwen2.5-coder:14b-instruct-q5_1'
  | 'qwen2.5-coder:14b-instruct-q5_K_M'
  | 'qwen2.5-coder:14b-instruct-q5_K_S'
  | 'qwen2.5-coder:14b-instruct-q6_K'
  | 'qwen2.5-coder:14b-instruct-q8_0'
  | 'qwen2.5-coder:32b'
  | 'qwen2.5-coder:32b-base'
  | 'qwen2.5-coder:32b-base-fp16'
  | 'qwen2.5-coder:32b-base-q2_K'
  | 'qwen2.5-coder:32b-base-q3_K_L'
  | 'qwen2.5-coder:32b-base-q3_K_M'
  | 'qwen2.5-coder:32b-base-q3_K_S'
  | 'qwen2.5-coder:32b-base-q4_0'
  | 'qwen2.5-coder:32b-base-q4_1'
  | 'qwen2.5-coder:32b-base-q4_K_M'
  | 'qwen2.5-coder:32b-base-q4_K_S'
  | 'qwen2.5-coder:32b-base-q5_0'
  | 'qwen2.5-coder:32b-base-q5_1'
  | 'qwen2.5-coder:32b-base-q5_K_M'
  | 'qwen2.5-coder:32b-base-q5_K_S'
  | 'qwen2.5-coder:32b-base-q6_K'
  | 'qwen2.5-coder:32b-base-q8_0'
  | 'qwen2.5-coder:32b-instruct'
  | 'qwen2.5-coder:32b-instruct-fp16'
  | 'qwen2.5-coder:32b-instruct-q2_K'
  | 'qwen2.5-coder:32b-instruct-q3_K_L'
  | 'qwen2.5-coder:32b-instruct-q3_K_M'
  | 'qwen2.5-coder:32b-instruct-q3_K_S'
  | 'qwen2.5-coder:32b-instruct-q4_0'
  | 'qwen2.5-coder:32b-instruct-q4_1'
  | 'qwen2.5-coder:32b-instruct-q4_K_M'
  | 'qwen2.5-coder:32b-instruct-q4_K_S'
  | 'qwen2.5-coder:32b-instruct-q5_0'
  | 'qwen2.5-coder:32b-instruct-q5_1'
  | 'qwen2.5-coder:32b-instruct-q5_K_M'
  | 'qwen2.5-coder:32b-instruct-q5_K_S'
  | 'qwen2.5-coder:32b-instruct-q6_K'
  | 'qwen2.5-coder:32b-instruct-q8_0'
  | 'qwen2.5-coder:3b'
  | 'qwen2.5-coder:3b-base'
  | 'qwen2.5-coder:3b-base-fp16'
  | 'qwen2.5-coder:3b-base-q2_K'
  | 'qwen2.5-coder:3b-base-q3_K_L'
  | 'qwen2.5-coder:3b-base-q3_K_M'
  | 'qwen2.5-coder:3b-base-q3_K_S'
  | 'qwen2.5-coder:3b-base-q4_0'
  | 'qwen2.5-coder:3b-base-q4_1'
  | 'qwen2.5-coder:3b-base-q4_K_M'
  | 'qwen2.5-coder:3b-base-q4_K_S'
  | 'qwen2.5-coder:3b-base-q5_0'
  | 'qwen2.5-coder:3b-base-q5_1'
  | 'qwen2.5-coder:3b-base-q5_K_M'
  | 'qwen2.5-coder:3b-base-q5_K_S'
  | 'qwen2.5-coder:3b-base-q6_K'
  | 'qwen2.5-coder:3b-base-q8_0'
  | 'qwen2.5-coder:3b-instruct'
  | 'qwen2.5-coder:3b-instruct-fp16'
  | 'qwen2.5-coder:3b-instruct-q2_K'
  | 'qwen2.5-coder:3b-instruct-q3_K_L'
  | 'qwen2.5-coder:3b-instruct-q3_K_M'
  | 'qwen2.5-coder:3b-instruct-q3_K_S'
  | 'qwen2.5-coder:3b-instruct-q4_0'
  | 'qwen2.5-coder:3b-instruct-q4_1'
  | 'qwen2.5-coder:3b-instruct-q4_K_M'
  | 'qwen2.5-coder:3b-instruct-q4_K_S'
  | 'qwen2.5-coder:3b-instruct-q5_0'
  | 'qwen2.5-coder:3b-instruct-q5_1'
  | 'qwen2.5-coder:3b-instruct-q5_K_M'
  | 'qwen2.5-coder:3b-instruct-q5_K_S'
  | 'qwen2.5-coder:3b-instruct-q6_K'
  | 'qwen2.5-coder:3b-instruct-q8_0'
  | 'qwen2.5-coder:7b'
  | 'qwen2.5-coder:7b-base'
  | 'qwen2.5-coder:7b-base-fp16'
  | 'qwen2.5-coder:7b-base-q2_K'
  | 'qwen2.5-coder:7b-base-q3_K_L'
  | 'qwen2.5-coder:7b-base-q3_K_M'
  | 'qwen2.5-coder:7b-base-q3_K_S'
  | 'qwen2.5-coder:7b-base-q4_0'
  | 'qwen2.5-coder:7b-base-q4_1'
  | 'qwen2.5-coder:7b-base-q4_K_M'
  | 'qwen2.5-coder:7b-base-q4_K_S'
  | 'qwen2.5-coder:7b-base-q5_0'
  | 'qwen2.5-coder:7b-base-q5_1'
  | 'qwen2.5-coder:7b-base-q5_K_M'
  | 'qwen2.5-coder:7b-base-q5_K_S'
  | 'qwen2.5-coder:7b-base-q6_K'
  | 'qwen2.5-coder:7b-base-q8_0'
  | 'qwen2.5-coder:7b-instruct'
  | 'qwen2.5-coder:7b-instruct-fp16'
  | 'qwen2.5-coder:7b-instruct-q2_K'
  | 'qwen2.5-coder:7b-instruct-q3_K_L'
  | 'qwen2.5-coder:7b-instruct-q3_K_M'
  | 'qwen2.5-coder:7b-instruct-q3_K_S'
  | 'qwen2.5-coder:7b-instruct-q4_0'
  | 'qwen2.5-coder:7b-instruct-q4_1'
  | 'qwen2.5-coder:7b-instruct-q4_K_M'
  | 'qwen2.5-coder:7b-instruct-q4_K_S'
  | 'qwen2.5-coder:7b-instruct-q5_0'
  | 'qwen2.5-coder:7b-instruct-q5_1'
  | 'qwen2.5-coder:7b-instruct-q5_K_M'
  | 'qwen2.5-coder:7b-instruct-q5_K_S'
  | 'qwen2.5-coder:7b-instruct-q6_K'
  | 'qwen2.5-coder:7b-instruct-q8_0'
  | 'qwen2.5-coder:latest'
  | 'qwen2.5:0.5b'
  | 'qwen2.5:0.5b-base'
  | 'qwen2.5:0.5b-base-q2_K'
  | 'qwen2.5:0.5b-base-q3_K_L'
  | 'qwen2.5:0.5b-base-q3_K_M'
  | 'qwen2.5:0.5b-base-q3_K_S'
  | 'qwen2.5:0.5b-base-q4_0'
  | 'qwen2.5:0.5b-base-q4_1'
  | 'qwen2.5:0.5b-base-q4_K_M'
  | 'qwen2.5:0.5b-base-q4_K_S'
  | 'qwen2.5:0.5b-base-q5_0'
  | 'qwen2.5:0.5b-base-q5_1'
  | 'qwen2.5:0.5b-base-q5_K_S'
  | 'qwen2.5:0.5b-base-q8_0'
  | 'qwen2.5:0.5b-instruct'
  | 'qwen2.5:0.5b-instruct-fp16'
  | 'qwen2.5:0.5b-instruct-q2_K'
  | 'qwen2.5:0.5b-instruct-q3_K_L'
  | 'qwen2.5:0.5b-instruct-q3_K_M'
  | 'qwen2.5:0.5b-instruct-q3_K_S'
  | 'qwen2.5:0.5b-instruct-q4_0'
  | 'qwen2.5:0.5b-instruct-q4_1'
  | 'qwen2.5:0.5b-instruct-q4_K_M'
  | 'qwen2.5:0.5b-instruct-q4_K_S'
  | 'qwen2.5:0.5b-instruct-q5_0'
  | 'qwen2.5:0.5b-instruct-q5_1'
  | 'qwen2.5:0.5b-instruct-q5_K_M'
  | 'qwen2.5:0.5b-instruct-q5_K_S'
  | 'qwen2.5:0.5b-instruct-q6_K'
  | 'qwen2.5:0.5b-instruct-q8_0'
  | 'qwen2.5:1.5b'
  | 'qwen2.5:1.5b-instruct'
  | 'qwen2.5:1.5b-instruct-fp16'
  | 'qwen2.5:1.5b-instruct-q2_K'
  | 'qwen2.5:1.5b-instruct-q3_K_L'
  | 'qwen2.5:1.5b-instruct-q3_K_M'
  | 'qwen2.5:1.5b-instruct-q3_K_S'
  | 'qwen2.5:1.5b-instruct-q4_0'
  | 'qwen2.5:1.5b-instruct-q4_1'
  | 'qwen2.5:1.5b-instruct-q4_K_M'
  | 'qwen2.5:1.5b-instruct-q4_K_S'
  | 'qwen2.5:1.5b-instruct-q5_0'
  | 'qwen2.5:1.5b-instruct-q5_1'
  | 'qwen2.5:1.5b-instruct-q5_K_M'
  | 'qwen2.5:1.5b-instruct-q5_K_S'
  | 'qwen2.5:1.5b-instruct-q6_K'
  | 'qwen2.5:1.5b-instruct-q8_0'
  | 'qwen2.5:14b'
  | 'qwen2.5:14b-instruct'
  | 'qwen2.5:14b-instruct-fp16'
  | 'qwen2.5:14b-instruct-q2_K'
  | 'qwen2.5:14b-instruct-q3_K_L'
  | 'qwen2.5:14b-instruct-q3_K_M'
  | 'qwen2.5:14b-instruct-q3_K_S'
  | 'qwen2.5:14b-instruct-q4_0'
  | 'qwen2.5:14b-instruct-q4_1'
  | 'qwen2.5:14b-instruct-q4_K_M'
  | 'qwen2.5:14b-instruct-q4_K_S'
  | 'qwen2.5:14b-instruct-q5_0'
  | 'qwen2.5:14b-instruct-q5_1'
  | 'qwen2.5:14b-instruct-q5_K_M'
  | 'qwen2.5:14b-instruct-q5_K_S'
  | 'qwen2.5:14b-instruct-q6_K'
  | 'qwen2.5:14b-instruct-q8_0'
  | 'qwen2.5:32b'
  | 'qwen2.5:32b-instruct'
  | 'qwen2.5:32b-instruct-fp16'
  | 'qwen2.5:32b-instruct-q2_K'
  | 'qwen2.5:32b-instruct-q3_K_L'
  | 'qwen2.5:32b-instruct-q3_K_M'
  | 'qwen2.5:32b-instruct-q3_K_S'
  | 'qwen2.5:32b-instruct-q4_0'
  | 'qwen2.5:32b-instruct-q4_1'
  | 'qwen2.5:32b-instruct-q4_K_M'
  | 'qwen2.5:32b-instruct-q4_K_S'
  | 'qwen2.5:32b-instruct-q5_0'
  | 'qwen2.5:32b-instruct-q5_1'
  | 'qwen2.5:32b-instruct-q5_K_M'
  | 'qwen2.5:32b-instruct-q5_K_S'
  | 'qwen2.5:32b-instruct-q6_K'
  | 'qwen2.5:32b-instruct-q8_0'
  | 'qwen2.5:3b'
  | 'qwen2.5:3b-instruct'
  | 'qwen2.5:3b-instruct-fp16'
  | 'qwen2.5:3b-instruct-q2_K'
  | 'qwen2.5:3b-instruct-q3_K_L'
  | 'qwen2.5:3b-instruct-q3_K_M'
  | 'qwen2.5:3b-instruct-q3_K_S'
  | 'qwen2.5:3b-instruct-q4_0'
  | 'qwen2.5:3b-instruct-q4_1'
  | 'qwen2.5:3b-instruct-q4_K_M'
  | 'qwen2.5:3b-instruct-q4_K_S'
  | 'qwen2.5:3b-instruct-q5_0'
  | 'qwen2.5:3b-instruct-q5_1'
  | 'qwen2.5:3b-instruct-q5_K_M'
  | 'qwen2.5:3b-instruct-q5_K_S'
  | 'qwen2.5:3b-instruct-q6_K'
  | 'qwen2.5:3b-instruct-q8_0'
  | 'qwen2.5:72b'
  | 'qwen2.5:72b-instruct'
  | 'qwen2.5:72b-instruct-fp16'
  | 'qwen2.5:72b-instruct-q2_K'
  | 'qwen2.5:72b-instruct-q3_K_L'
  | 'qwen2.5:72b-instruct-q3_K_M'
  | 'qwen2.5:72b-instruct-q3_K_S'
  | 'qwen2.5:72b-instruct-q4_0'
  | 'qwen2.5:72b-instruct-q4_1'
  | 'qwen2.5:72b-instruct-q4_K_M'
  | 'qwen2.5:72b-instruct-q4_K_S'
  | 'qwen2.5:72b-instruct-q5_0'
  | 'qwen2.5:72b-instruct-q5_1'
  | 'qwen2.5:72b-instruct-q5_K_M'
  | 'qwen2.5:72b-instruct-q5_K_S'
  | 'qwen2.5:72b-instruct-q6_K'
  | 'qwen2.5:72b-instruct-q8_0'
  | 'qwen2.5:7b'
  | 'qwen2.5:7b-instruct'
  | 'qwen2.5:7b-instruct-fp16'
  | 'qwen2.5:7b-instruct-q2_K'
  | 'qwen2.5:7b-instruct-q3_K_L'
  | 'qwen2.5:7b-instruct-q3_K_M'
  | 'qwen2.5:7b-instruct-q3_K_S'
  | 'qwen2.5:7b-instruct-q4_0'
  | 'qwen2.5:7b-instruct-q4_1'
  | 'qwen2.5:7b-instruct-q4_K_M'
  | 'qwen2.5:7b-instruct-q4_K_S'
  | 'qwen2.5:7b-instruct-q5_0'
  | 'qwen2.5:7b-instruct-q5_1'
  | 'qwen2.5:7b-instruct-q5_K_M'
  | 'qwen2.5:7b-instruct-q5_K_S'
  | 'qwen2.5:7b-instruct-q6_K'
  | 'qwen2.5:7b-instruct-q8_0'
  | 'qwen2.5:latest'
  | 'qwen2:0.5b'
  | 'qwen2:0.5b-instruct'
  | 'qwen2:0.5b-instruct-fp16'
  | 'qwen2:0.5b-instruct-q2_K'
  | 'qwen2:0.5b-instruct-q3_K_L'
  | 'qwen2:0.5b-instruct-q3_K_M'
  | 'qwen2:0.5b-instruct-q3_K_S'
  | 'qwen2:0.5b-instruct-q4_0'
  | 'qwen2:0.5b-instruct-q4_1'
  | 'qwen2:0.5b-instruct-q4_K_M'
  | 'qwen2:0.5b-instruct-q4_K_S'
  | 'qwen2:0.5b-instruct-q5_0'
  | 'qwen2:0.5b-instruct-q5_1'
  | 'qwen2:0.5b-instruct-q5_K_M'
  | 'qwen2:0.5b-instruct-q5_K_S'
  | 'qwen2:0.5b-instruct-q6_K'
  | 'qwen2:0.5b-instruct-q8_0'
  | 'qwen2:1.5b'
  | 'qwen2:1.5b-instruct'
  | 'qwen2:1.5b-instruct-fp16'
  | 'qwen2:1.5b-instruct-q2_K'
  | 'qwen2:1.5b-instruct-q3_K_L'
  | 'qwen2:1.5b-instruct-q3_K_M'
  | 'qwen2:1.5b-instruct-q3_K_S'
  | 'qwen2:1.5b-instruct-q4_0'
  | 'qwen2:1.5b-instruct-q4_1'
  | 'qwen2:1.5b-instruct-q4_K_M'
  | 'qwen2:1.5b-instruct-q4_K_S'
  | 'qwen2:1.5b-instruct-q5_0'
  | 'qwen2:1.5b-instruct-q5_1'
  | 'qwen2:1.5b-instruct-q5_K_M'
  | 'qwen2:1.5b-instruct-q5_K_S'
  | 'qwen2:1.5b-instruct-q6_K'
  | 'qwen2:1.5b-instruct-q8_0'
  | 'qwen2:72b'
  | 'qwen2:72b-instruct'
  | 'qwen2:72b-instruct-fp16'
  | 'qwen2:72b-instruct-q2_K'
  | 'qwen2:72b-instruct-q3_K_L'
  | 'qwen2:72b-instruct-q3_K_M'
  | 'qwen2:72b-instruct-q3_K_S'
  | 'qwen2:72b-instruct-q4_0'
  | 'qwen2:72b-instruct-q4_1'
  | 'qwen2:72b-instruct-q4_K_M'
  | 'qwen2:72b-instruct-q4_K_S'
  | 'qwen2:72b-instruct-q5_0'
  | 'qwen2:72b-instruct-q5_1'
  | 'qwen2:72b-instruct-q5_K_M'
  | 'qwen2:72b-instruct-q5_K_S'
  | 'qwen2:72b-instruct-q6_K'
  | 'qwen2:72b-instruct-q8_0'
  | 'qwen2:72b-text'
  | 'qwen2:72b-text-fp16'
  | 'qwen2:72b-text-q2_K'
  | 'qwen2:72b-text-q3_K_L'
  | 'qwen2:72b-text-q3_K_M'
  | 'qwen2:72b-text-q3_K_S'
  | 'qwen2:72b-text-q4_0'
  | 'qwen2:72b-text-q4_1'
  | 'qwen2:72b-text-q4_K_M'
  | 'qwen2:72b-text-q4_K_S'
  | 'qwen2:72b-text-q5_0'
  | 'qwen2:72b-text-q5_1'
  | 'qwen2:72b-text-q5_K_M'
  | 'qwen2:72b-text-q5_K_S'
  | 'qwen2:72b-text-q6_K'
  | 'qwen2:72b-text-q8_0'
  | 'qwen2:7b'
  | 'qwen2:7b-instruct'
  | 'qwen2:7b-instruct-fp16'
  | 'qwen2:7b-instruct-q2_K'
  | 'qwen2:7b-instruct-q3_K_L'
  | 'qwen2:7b-instruct-q3_K_M'
  | 'qwen2:7b-instruct-q3_K_S'
  | 'qwen2:7b-instruct-q4_0'
  | 'qwen2:7b-instruct-q4_1'
  | 'qwen2:7b-instruct-q4_K_M'
  | 'qwen2:7b-instruct-q4_K_S'
  | 'qwen2:7b-instruct-q5_0'
  | 'qwen2:7b-instruct-q5_1'
  | 'qwen2:7b-instruct-q5_K_M'
  | 'qwen2:7b-instruct-q5_K_S'
  | 'qwen2:7b-instruct-q6_K'
  | 'qwen2:7b-instruct-q8_0'
  | 'qwen2:7b-text'
  | 'qwen2:7b-text-q2_K'
  | 'qwen2:7b-text-q3_K_L'
  | 'qwen2:7b-text-q3_K_M'
  | 'qwen2:7b-text-q3_K_S'
  | 'qwen2:7b-text-q4_0'
  | 'qwen2:7b-text-q4_1'
  | 'qwen2:7b-text-q4_K_M'
  | 'qwen2:7b-text-q4_K_S'
  | 'qwen2:7b-text-q5_0'
  | 'qwen2:7b-text-q5_1'
  | 'qwen2:7b-text-q8_0'
  | 'qwen2:latest'
  | 'qwen3'
  | 'qwen3-coder'
  | 'qwen3-coder:30b'
  | 'qwen3-coder:30b-a3b-fp16'
  | 'qwen3-coder:30b-a3b-q4_K_M'
  | 'qwen3-coder:30b-a3b-q8_0'
  | 'qwen3-coder:480b-a35b-fp16'
  | 'qwen3-coder:latest'
  | 'qwen3:0.6b'
  | 'qwen3:0.6b-fp16'
  | 'qwen3:0.6b-q4_K_M'
  | 'qwen3:0.6b-q8_0'
  | 'qwen3:1.7b'
  | 'qwen3:1.7b-fp16'
  | 'qwen3:1.7b-q4_K_M'
  | 'qwen3:1.7b-q8_0'
  | 'qwen3:14b'
  | 'qwen3:14b-fp16'
  | 'qwen3:14b-q4_K_M'
  | 'qwen3:14b-q8_0'
  | 'qwen3:235b'
  | 'qwen3:235b-a22b'
  | 'qwen3:235b-a22b-fp16'
  | 'qwen3:235b-a22b-instruct-2507-q4_K_M'
  | 'qwen3:235b-a22b-instruct-2507-q8_0'
  | 'qwen3:235b-a22b-q4_K_M'
  | 'qwen3:235b-a22b-q8_0'
  | 'qwen3:235b-a22b-thinking-2507-fp16'
  | 'qwen3:235b-a22b-thinking-2507-q4_K_M'
  | 'qwen3:235b-a22b-thinking-2507-q8_0'
  | 'qwen3:235b-thinking'
  | 'qwen3:30b'
  | 'qwen3:30b-a3b'
  | 'qwen3:30b-a3b-fp16'
  | 'qwen3:30b-a3b-instruct-2507-fp16'
  | 'qwen3:30b-a3b-instruct-2507-q4_K_M'
  | 'qwen3:30b-a3b-instruct-2507-q8_0'
  | 'qwen3:30b-a3b-q4_K_M'
  | 'qwen3:30b-a3b-q8_0'
  | 'qwen3:30b-a3b-thinking-2507-fp16'
  | 'qwen3:30b-a3b-thinking-2507-q4_K_M'
  | 'qwen3:30b-a3b-thinking-2507-q8_0'
  | 'qwen3:30b-thinking'
  | 'qwen3:32b'
  | 'qwen3:32b-fp16'
  | 'qwen3:32b-q4_K_M'
  | 'qwen3:32b-q8_0'
  | 'qwen3:4b'
  | 'qwen3:4b-fp16'
  | 'qwen3:4b-instruct'
  | 'qwen3:4b-instruct-2507-fp16'
  | 'qwen3:4b-instruct-2507-q4_K_M'
  | 'qwen3:4b-instruct-2507-q8_0'
  | 'qwen3:4b-q4_K_M'
  | 'qwen3:4b-q8_0'
  | 'qwen3:4b-thinking'
  | 'qwen3:4b-thinking-2507-fp16'
  | 'qwen3:4b-thinking-2507-q4_K_M'
  | 'qwen3:4b-thinking-2507-q8_0'
  | 'qwen3:8b'
  | 'qwen3:8b-fp16'
  | 'qwen3:8b-q4_K_M'
  | 'qwen3:8b-q8_0'
  | 'qwen3:latest'
  | 'qwen:0.5b'
  | 'qwen:0.5b-chat'
  | 'qwen:0.5b-chat-v1.5-fp16'
  | 'qwen:0.5b-chat-v1.5-q2_K'
  | 'qwen:0.5b-chat-v1.5-q3_K_L'
  | 'qwen:0.5b-chat-v1.5-q3_K_M'
  | 'qwen:0.5b-chat-v1.5-q3_K_S'
  | 'qwen:0.5b-chat-v1.5-q4_0'
  | 'qwen:0.5b-chat-v1.5-q4_1'
  | 'qwen:0.5b-chat-v1.5-q4_K_M'
  | 'qwen:0.5b-chat-v1.5-q4_K_S'
  | 'qwen:0.5b-chat-v1.5-q5_0'
  | 'qwen:0.5b-chat-v1.5-q5_1'
  | 'qwen:0.5b-chat-v1.5-q5_K_M'
  | 'qwen:0.5b-chat-v1.5-q5_K_S'
  | 'qwen:0.5b-chat-v1.5-q6_K'
  | 'qwen:0.5b-chat-v1.5-q8_0'
  | 'qwen:0.5b-text'
  | 'qwen:0.5b-text-v1.5-fp16'
  | 'qwen:0.5b-text-v1.5-q2_K'
  | 'qwen:0.5b-text-v1.5-q3_K_L'
  | 'qwen:0.5b-text-v1.5-q3_K_M'
  | 'qwen:0.5b-text-v1.5-q3_K_S'
  | 'qwen:0.5b-text-v1.5-q4_0'
  | 'qwen:0.5b-text-v1.5-q4_1'
  | 'qwen:0.5b-text-v1.5-q4_K_M'
  | 'qwen:0.5b-text-v1.5-q4_K_S'
  | 'qwen:0.5b-text-v1.5-q5_0'
  | 'qwen:0.5b-text-v1.5-q5_1'
  | 'qwen:0.5b-text-v1.5-q5_K_M'
  | 'qwen:0.5b-text-v1.5-q5_K_S'
  | 'qwen:0.5b-text-v1.5-q6_K'
  | 'qwen:0.5b-text-v1.5-q8_0'
  | 'qwen:1.8b'
  | 'qwen:1.8b-chat'
  | 'qwen:1.8b-chat-fp16'
  | 'qwen:1.8b-chat-q2_K'
  | 'qwen:1.8b-chat-q3_K_L'
  | 'qwen:1.8b-chat-q3_K_M'
  | 'qwen:1.8b-chat-q3_K_S'
  | 'qwen:1.8b-chat-q4_0'
  | 'qwen:1.8b-chat-q4_1'
  | 'qwen:1.8b-chat-q4_K_M'
  | 'qwen:1.8b-chat-q4_K_S'
  | 'qwen:1.8b-chat-q5_0'
  | 'qwen:1.8b-chat-q5_1'
  | 'qwen:1.8b-chat-q5_K_M'
  | 'qwen:1.8b-chat-q5_K_S'
  | 'qwen:1.8b-chat-q6_K'
  | 'qwen:1.8b-chat-q8_0'
  | 'qwen:1.8b-chat-v1.5-fp16'
  | 'qwen:1.8b-chat-v1.5-q2_K'
  | 'qwen:1.8b-chat-v1.5-q3_K_L'
  | 'qwen:1.8b-chat-v1.5-q3_K_M'
  | 'qwen:1.8b-chat-v1.5-q3_K_S'
  | 'qwen:1.8b-chat-v1.5-q4_0'
  | 'qwen:1.8b-chat-v1.5-q4_1'
  | 'qwen:1.8b-chat-v1.5-q4_K_M'
  | 'qwen:1.8b-chat-v1.5-q4_K_S'
  | 'qwen:1.8b-chat-v1.5-q5_0'
  | 'qwen:1.8b-chat-v1.5-q5_1'
  | 'qwen:1.8b-chat-v1.5-q5_K_M'
  | 'qwen:1.8b-chat-v1.5-q5_K_S'
  | 'qwen:1.8b-chat-v1.5-q6_K'
  | 'qwen:1.8b-chat-v1.5-q8_0'
  | 'qwen:1.8b-text'
  | 'qwen:1.8b-text-fp16'
  | 'qwen:1.8b-text-q2_K'
  | 'qwen:1.8b-text-q3_K_L'
  | 'qwen:1.8b-text-q3_K_M'
  | 'qwen:1.8b-text-q3_K_S'
  | 'qwen:1.8b-text-q4_0'
  | 'qwen:1.8b-text-q4_1'
  | 'qwen:1.8b-text-q4_K_M'
  | 'qwen:1.8b-text-q4_K_S'
  | 'qwen:1.8b-text-q5_0'
  | 'qwen:1.8b-text-q5_1'
  | 'qwen:1.8b-text-q5_K_M'
  | 'qwen:1.8b-text-q5_K_S'
  | 'qwen:1.8b-text-q6_K'
  | 'qwen:1.8b-text-q8_0'
  | 'qwen:1.8b-text-v1.5-fp16'
  | 'qwen:1.8b-text-v1.5-q2_K'
  | 'qwen:1.8b-text-v1.5-q3_K_L'
  | 'qwen:1.8b-text-v1.5-q3_K_M'
  | 'qwen:1.8b-text-v1.5-q3_K_S'
  | 'qwen:1.8b-text-v1.5-q4_0'
  | 'qwen:1.8b-text-v1.5-q4_1'
  | 'qwen:1.8b-text-v1.5-q4_K_M'
  | 'qwen:1.8b-text-v1.5-q4_K_S'
  | 'qwen:1.8b-text-v1.5-q5_0'
  | 'qwen:1.8b-text-v1.5-q5_1'
  | 'qwen:1.8b-text-v1.5-q5_K_M'
  | 'qwen:1.8b-text-v1.5-q5_K_S'
  | 'qwen:1.8b-text-v1.5-q6_K'
  | 'qwen:1.8b-text-v1.5-q8_0'
  | 'qwen:110b'
  | 'qwen:110b-chat'
  | 'qwen:110b-chat-v1.5-fp16'
  | 'qwen:110b-chat-v1.5-q2_K'
  | 'qwen:110b-chat-v1.5-q3_K_L'
  | 'qwen:110b-chat-v1.5-q3_K_M'
  | 'qwen:110b-chat-v1.5-q3_K_S'
  | 'qwen:110b-chat-v1.5-q4_0'
  | 'qwen:110b-chat-v1.5-q4_1'
  | 'qwen:110b-chat-v1.5-q4_K_M'
  | 'qwen:110b-chat-v1.5-q4_K_S'
  | 'qwen:110b-chat-v1.5-q5_0'
  | 'qwen:110b-chat-v1.5-q5_1'
  | 'qwen:110b-chat-v1.5-q5_K_M'
  | 'qwen:110b-chat-v1.5-q5_K_S'
  | 'qwen:110b-chat-v1.5-q6_K'
  | 'qwen:110b-chat-v1.5-q8_0'
  | 'qwen:110b-text-v1.5-fp16'
  | 'qwen:110b-text-v1.5-q2_K'
  | 'qwen:110b-text-v1.5-q3_K_L'
  | 'qwen:110b-text-v1.5-q3_K_M'
  | 'qwen:110b-text-v1.5-q3_K_S'
  | 'qwen:110b-text-v1.5-q4_0'
  | 'qwen:110b-text-v1.5-q4_1'
  | 'qwen:110b-text-v1.5-q4_K_M'
  | 'qwen:110b-text-v1.5-q4_K_S'
  | 'qwen:110b-text-v1.5-q5_0'
  | 'qwen:110b-text-v1.5-q5_1'
  | 'qwen:110b-text-v1.5-q5_K_M'
  | 'qwen:110b-text-v1.5-q5_K_S'
  | 'qwen:110b-text-v1.5-q6_K'
  | 'qwen:110b-text-v1.5-q8_0'
  | 'qwen:14b'
  | 'qwen:14b-chat'
  | 'qwen:14b-chat-fp16'
  | 'qwen:14b-chat-q2_K'
  | 'qwen:14b-chat-q3_K_L'
  | 'qwen:14b-chat-q3_K_M'
  | 'qwen:14b-chat-q3_K_S'
  | 'qwen:14b-chat-q4_0'
  | 'qwen:14b-chat-q4_1'
  | 'qwen:14b-chat-q4_K_M'
  | 'qwen:14b-chat-q4_K_S'
  | 'qwen:14b-chat-q5_0'
  | 'qwen:14b-chat-q5_1'
  | 'qwen:14b-chat-q5_K_M'
  | 'qwen:14b-chat-q5_K_S'
  | 'qwen:14b-chat-q6_K'
  | 'qwen:14b-chat-q8_0'
  | 'qwen:14b-chat-v1.5-fp16'
  | 'qwen:14b-chat-v1.5-q2_K'
  | 'qwen:14b-chat-v1.5-q3_K_L'
  | 'qwen:14b-chat-v1.5-q3_K_M'
  | 'qwen:14b-chat-v1.5-q3_K_S'
  | 'qwen:14b-chat-v1.5-q4_0'
  | 'qwen:14b-chat-v1.5-q4_1'
  | 'qwen:14b-chat-v1.5-q4_K_M'
  | 'qwen:14b-chat-v1.5-q4_K_S'
  | 'qwen:14b-chat-v1.5-q5_0'
  | 'qwen:14b-chat-v1.5-q5_1'
  | 'qwen:14b-chat-v1.5-q5_K_M'
  | 'qwen:14b-chat-v1.5-q5_K_S'
  | 'qwen:14b-chat-v1.5-q6_K'
  | 'qwen:14b-chat-v1.5-q8_0'
  | 'qwen:14b-text'
  | 'qwen:14b-text-fp16'
  | 'qwen:14b-text-q2_K'
  | 'qwen:14b-text-q3_K_L'
  | 'qwen:14b-text-q3_K_M'
  | 'qwen:14b-text-q3_K_S'
  | 'qwen:14b-text-q4_0'
  | 'qwen:14b-text-q4_1'
  | 'qwen:14b-text-q4_K_M'
  | 'qwen:14b-text-q4_K_S'
  | 'qwen:14b-text-q5_0'
  | 'qwen:14b-text-q5_1'
  | 'qwen:14b-text-q5_K_M'
  | 'qwen:14b-text-q5_K_S'
  | 'qwen:14b-text-q6_K'
  | 'qwen:14b-text-q8_0'
  | 'qwen:14b-text-v1.5-fp16'
  | 'qwen:14b-text-v1.5-q2_K'
  | 'qwen:14b-text-v1.5-q3_K_L'
  | 'qwen:14b-text-v1.5-q3_K_M'
  | 'qwen:14b-text-v1.5-q3_K_S'
  | 'qwen:14b-text-v1.5-q4_0'
  | 'qwen:14b-text-v1.5-q4_1'
  | 'qwen:14b-text-v1.5-q4_K_M'
  | 'qwen:14b-text-v1.5-q4_K_S'
  | 'qwen:14b-text-v1.5-q5_0'
  | 'qwen:14b-text-v1.5-q5_1'
  | 'qwen:14b-text-v1.5-q5_K_M'
  | 'qwen:14b-text-v1.5-q5_K_S'
  | 'qwen:14b-text-v1.5-q6_K'
  | 'qwen:14b-text-v1.5-q8_0'
  | 'qwen:32b'
  | 'qwen:32b-chat'
  | 'qwen:32b-chat-v1.5-fp16'
  | 'qwen:32b-chat-v1.5-q2_K'
  | 'qwen:32b-chat-v1.5-q3_K_L'
  | 'qwen:32b-chat-v1.5-q3_K_M'
  | 'qwen:32b-chat-v1.5-q3_K_S'
  | 'qwen:32b-chat-v1.5-q4_0'
  | 'qwen:32b-chat-v1.5-q4_1'
  | 'qwen:32b-chat-v1.5-q4_K_M'
  | 'qwen:32b-chat-v1.5-q4_K_S'
  | 'qwen:32b-chat-v1.5-q5_0'
  | 'qwen:32b-chat-v1.5-q5_1'
  | 'qwen:32b-chat-v1.5-q5_K_M'
  | 'qwen:32b-chat-v1.5-q5_K_S'
  | 'qwen:32b-chat-v1.5-q6_K'
  | 'qwen:32b-chat-v1.5-q8_0'
  | 'qwen:32b-text'
  | 'qwen:32b-text-v1.5-q2_K'
  | 'qwen:32b-text-v1.5-q3_K_L'
  | 'qwen:32b-text-v1.5-q3_K_M'
  | 'qwen:32b-text-v1.5-q3_K_S'
  | 'qwen:32b-text-v1.5-q4_0'
  | 'qwen:32b-text-v1.5-q4_1'
  | 'qwen:32b-text-v1.5-q4_K_S'
  | 'qwen:32b-text-v1.5-q5_0'
  | 'qwen:32b-text-v1.5-q5_1'
  | 'qwen:32b-text-v1.5-q8_0'
  | 'qwen:4b'
  | 'qwen:4b-chat'
  | 'qwen:4b-chat-v1.5-fp16'
  | 'qwen:4b-chat-v1.5-q2_K'
  | 'qwen:4b-chat-v1.5-q3_K_L'
  | 'qwen:4b-chat-v1.5-q3_K_M'
  | 'qwen:4b-chat-v1.5-q3_K_S'
  | 'qwen:4b-chat-v1.5-q4_0'
  | 'qwen:4b-chat-v1.5-q4_1'
  | 'qwen:4b-chat-v1.5-q4_K_M'
  | 'qwen:4b-chat-v1.5-q4_K_S'
  | 'qwen:4b-chat-v1.5-q5_0'
  | 'qwen:4b-chat-v1.5-q5_1'
  | 'qwen:4b-chat-v1.5-q5_K_M'
  | 'qwen:4b-chat-v1.5-q5_K_S'
  | 'qwen:4b-chat-v1.5-q6_K'
  | 'qwen:4b-chat-v1.5-q8_0'
  | 'qwen:4b-text'
  | 'qwen:4b-text-v1.5-fp16'
  | 'qwen:4b-text-v1.5-q2_K'
  | 'qwen:4b-text-v1.5-q3_K_L'
  | 'qwen:4b-text-v1.5-q3_K_M'
  | 'qwen:4b-text-v1.5-q3_K_S'
  | 'qwen:4b-text-v1.5-q4_0'
  | 'qwen:4b-text-v1.5-q4_1'
  | 'qwen:4b-text-v1.5-q4_K_M'
  | 'qwen:4b-text-v1.5-q4_K_S'
  | 'qwen:4b-text-v1.5-q5_0'
  | 'qwen:4b-text-v1.5-q5_1'
  | 'qwen:4b-text-v1.5-q5_K_M'
  | 'qwen:4b-text-v1.5-q5_K_S'
  | 'qwen:4b-text-v1.5-q6_K'
  | 'qwen:4b-text-v1.5-q8_0'
  | 'qwen:72b'
  | 'qwen:72b-chat'
  | 'qwen:72b-chat-fp16'
  | 'qwen:72b-chat-q2_K'
  | 'qwen:72b-chat-q3_K_L'
  | 'qwen:72b-chat-q3_K_M'
  | 'qwen:72b-chat-q3_K_S'
  | 'qwen:72b-chat-q4_0'
  | 'qwen:72b-chat-q4_1'
  | 'qwen:72b-chat-q4_K_M'
  | 'qwen:72b-chat-q4_K_S'
  | 'qwen:72b-chat-q5_0'
  | 'qwen:72b-chat-q5_1'
  | 'qwen:72b-chat-q5_K_M'
  | 'qwen:72b-chat-q5_K_S'
  | 'qwen:72b-chat-q6_K'
  | 'qwen:72b-chat-q8_0'
  | 'qwen:72b-chat-v1.5-fp16'
  | 'qwen:72b-chat-v1.5-q2_K'
  | 'qwen:72b-chat-v1.5-q3_K_L'
  | 'qwen:72b-chat-v1.5-q3_K_M'
  | 'qwen:72b-chat-v1.5-q3_K_S'
  | 'qwen:72b-chat-v1.5-q4_0'
  | 'qwen:72b-chat-v1.5-q4_1'
  | 'qwen:72b-chat-v1.5-q4_K_M'
  | 'qwen:72b-chat-v1.5-q4_K_S'
  | 'qwen:72b-chat-v1.5-q5_0'
  | 'qwen:72b-chat-v1.5-q5_1'
  | 'qwen:72b-chat-v1.5-q5_K_M'
  | 'qwen:72b-chat-v1.5-q5_K_S'
  | 'qwen:72b-chat-v1.5-q6_K'
  | 'qwen:72b-chat-v1.5-q8_0'
  | 'qwen:72b-text'
  | 'qwen:72b-text-fp16'
  | 'qwen:72b-text-q2_K'
  | 'qwen:72b-text-q3_K_L'
  | 'qwen:72b-text-q3_K_M'
  | 'qwen:72b-text-q3_K_S'
  | 'qwen:72b-text-q4_0'
  | 'qwen:72b-text-q4_1'
  | 'qwen:72b-text-q4_K_M'
  | 'qwen:72b-text-q4_K_S'
  | 'qwen:72b-text-q5_0'
  | 'qwen:72b-text-q5_1'
  | 'qwen:72b-text-q5_K_M'
  | 'qwen:72b-text-q5_K_S'
  | 'qwen:72b-text-q6_K'
  | 'qwen:72b-text-q8_0'
  | 'qwen:72b-text-v1.5-fp16'
  | 'qwen:72b-text-v1.5-q2_K'
  | 'qwen:72b-text-v1.5-q3_K_L'
  | 'qwen:72b-text-v1.5-q3_K_M'
  | 'qwen:72b-text-v1.5-q3_K_S'
  | 'qwen:72b-text-v1.5-q4_0'
  | 'qwen:72b-text-v1.5-q4_1'
  | 'qwen:72b-text-v1.5-q4_K_M'
  | 'qwen:72b-text-v1.5-q4_K_S'
  | 'qwen:72b-text-v1.5-q5_0'
  | 'qwen:72b-text-v1.5-q5_1'
  | 'qwen:72b-text-v1.5-q5_K_M'
  | 'qwen:72b-text-v1.5-q5_K_S'
  | 'qwen:72b-text-v1.5-q6_K'
  | 'qwen:72b-text-v1.5-q8_0'
  | 'qwen:7b'
  | 'qwen:7b-chat'
  | 'qwen:7b-chat-fp16'
  | 'qwen:7b-chat-q2_K'
  | 'qwen:7b-chat-q3_K_L'
  | 'qwen:7b-chat-q3_K_M'
  | 'qwen:7b-chat-q3_K_S'
  | 'qwen:7b-chat-q4_0'
  | 'qwen:7b-chat-q4_1'
  | 'qwen:7b-chat-q4_K_M'
  | 'qwen:7b-chat-q4_K_S'
  | 'qwen:7b-chat-q5_0'
  | 'qwen:7b-chat-q5_1'
  | 'qwen:7b-chat-q5_K_M'
  | 'qwen:7b-chat-q5_K_S'
  | 'qwen:7b-chat-q6_K'
  | 'qwen:7b-chat-q8_0'
  | 'qwen:7b-chat-v1.5-fp16'
  | 'qwen:7b-chat-v1.5-q2_K'
  | 'qwen:7b-chat-v1.5-q3_K_L'
  | 'qwen:7b-chat-v1.5-q3_K_M'
  | 'qwen:7b-chat-v1.5-q3_K_S'
  | 'qwen:7b-chat-v1.5-q4_0'
  | 'qwen:7b-chat-v1.5-q4_1'
  | 'qwen:7b-chat-v1.5-q4_K_M'
  | 'qwen:7b-chat-v1.5-q4_K_S'
  | 'qwen:7b-chat-v1.5-q5_0'
  | 'qwen:7b-chat-v1.5-q5_1'
  | 'qwen:7b-chat-v1.5-q5_K_M'
  | 'qwen:7b-chat-v1.5-q5_K_S'
  | 'qwen:7b-chat-v1.5-q6_K'
  | 'qwen:7b-chat-v1.5-q8_0'
  | 'qwen:7b-fp16'
  | 'qwen:7b-q2_K'
  | 'qwen:7b-q3_K_L'
  | 'qwen:7b-q3_K_M'
  | 'qwen:7b-q3_K_S'
  | 'qwen:7b-q4_0'
  | 'qwen:7b-q4_1'
  | 'qwen:7b-q4_K_M'
  | 'qwen:7b-q4_K_S'
  | 'qwen:7b-q5_0'
  | 'qwen:7b-q5_1'
  | 'qwen:7b-q5_K_M'
  | 'qwen:7b-q5_K_S'
  | 'qwen:7b-q6_K'
  | 'qwen:7b-q8_0'
  | 'qwen:7b-text'
  | 'qwen:7b-text-v1.5-fp16'
  | 'qwen:7b-text-v1.5-q2_K'
  | 'qwen:7b-text-v1.5-q3_K_L'
  | 'qwen:7b-text-v1.5-q3_K_M'
  | 'qwen:7b-text-v1.5-q3_K_S'
  | 'qwen:7b-text-v1.5-q4_0'
  | 'qwen:7b-text-v1.5-q4_1'
  | 'qwen:7b-text-v1.5-q4_K_M'
  | 'qwen:7b-text-v1.5-q4_K_S'
  | 'qwen:7b-text-v1.5-q5_0'
  | 'qwen:7b-text-v1.5-q5_1'
  | 'qwen:7b-text-v1.5-q5_K_M'
  | 'qwen:7b-text-v1.5-q5_K_S'
  | 'qwen:7b-text-v1.5-q6_K'
  | 'qwen:7b-text-v1.5-q8_0'
  | 'qwen:latest'
  | 'qwq'
  | 'qwq:32b'
  | 'qwq:32b-fp16'
  | 'qwq:32b-preview-fp16'
  | 'qwq:32b-preview-q4_K_M'
  | 'qwq:32b-preview-q8_0'
  | 'qwq:32b-q4_K_M'
  | 'qwq:32b-q8_0'
  | 'qwq:latest'
  | 'r1-1776'
  | 'r1-1776:671b'
  | 'r1-1776:671b-fp16'
  | 'r1-1776:671b-q4_K_M'
  | 'r1-1776:671b-q8_0'
  | 'r1-1776:70b'
  | 'r1-1776:70b-distill-llama-fp16'
  | 'r1-1776:70b-distill-llama-q4_K_M'
  | 'r1-1776:70b-distill-llama-q8_0'
  | 'r1-1776:latest'
  | 'reader-lm'
  | 'reader-lm:0.5b'
  | 'reader-lm:0.5b-fp16'
  | 'reader-lm:0.5b-q2_K'
  | 'reader-lm:0.5b-q3_K_L'
  | 'reader-lm:0.5b-q3_K_M'
  | 'reader-lm:0.5b-q3_K_S'
  | 'reader-lm:0.5b-q4_0'
  | 'reader-lm:0.5b-q4_1'
  | 'reader-lm:0.5b-q4_K_M'
  | 'reader-lm:0.5b-q4_K_S'
  | 'reader-lm:0.5b-q5_0'
  | 'reader-lm:0.5b-q5_1'
  | 'reader-lm:0.5b-q5_K_M'
  | 'reader-lm:0.5b-q5_K_S'
  | 'reader-lm:0.5b-q6_K'
  | 'reader-lm:0.5b-q8_0'
  | 'reader-lm:1.5b'
  | 'reader-lm:1.5b-fp16'
  | 'reader-lm:1.5b-q2_K'
  | 'reader-lm:1.5b-q3_K_L'
  | 'reader-lm:1.5b-q3_K_M'
  | 'reader-lm:1.5b-q3_K_S'
  | 'reader-lm:1.5b-q4_0'
  | 'reader-lm:1.5b-q4_1'
  | 'reader-lm:1.5b-q4_K_M'
  | 'reader-lm:1.5b-q4_K_S'
  | 'reader-lm:1.5b-q5_0'
  | 'reader-lm:1.5b-q5_1'
  | 'reader-lm:1.5b-q5_K_M'
  | 'reader-lm:1.5b-q5_K_S'
  | 'reader-lm:1.5b-q6_K'
  | 'reader-lm:1.5b-q8_0'
  | 'reader-lm:latest'
  | 'reflection'
  | 'reflection:70b'
  | 'reflection:70b-fp16'
  | 'reflection:70b-q2_K'
  | 'reflection:70b-q3_K_L'
  | 'reflection:70b-q3_K_M'
  | 'reflection:70b-q3_K_S'
  | 'reflection:70b-q4_0'
  | 'reflection:70b-q4_1'
  | 'reflection:70b-q4_K_M'
  | 'reflection:70b-q4_K_S'
  | 'reflection:70b-q5_0'
  | 'reflection:70b-q5_1'
  | 'reflection:70b-q5_K_M'
  | 'reflection:70b-q5_K_S'
  | 'reflection:70b-q6_K'
  | 'reflection:70b-q8_0'
  | 'reflection:latest'
  | 'sailor2'
  | 'sailor2:1b'
  | 'sailor2:1b-chat-fp16'
  | 'sailor2:1b-chat-q4_K_M'
  | 'sailor2:1b-chat-q8_0'
  | 'sailor2:20b'
  | 'sailor2:20b-chat-fp16'
  | 'sailor2:20b-chat-q4_K_M'
  | 'sailor2:20b-chat-q8_0'
  | 'sailor2:8b'
  | 'sailor2:8b-chat-fp16'
  | 'sailor2:8b-chat-q4_K_M'
  | 'sailor2:8b-chat-q8_0'
  | 'sailor2:latest'
  | 'samantha-mistral'
  | 'samantha-mistral:7b'
  | 'samantha-mistral:7b-instruct-fp16'
  | 'samantha-mistral:7b-instruct-q2_K'
  | 'samantha-mistral:7b-instruct-q3_K_L'
  | 'samantha-mistral:7b-instruct-q3_K_M'
  | 'samantha-mistral:7b-instruct-q3_K_S'
  | 'samantha-mistral:7b-instruct-q4_0'
  | 'samantha-mistral:7b-instruct-q4_1'
  | 'samantha-mistral:7b-instruct-q4_K_M'
  | 'samantha-mistral:7b-instruct-q4_K_S'
  | 'samantha-mistral:7b-instruct-q5_0'
  | 'samantha-mistral:7b-instruct-q5_1'
  | 'samantha-mistral:7b-instruct-q5_K_M'
  | 'samantha-mistral:7b-instruct-q5_K_S'
  | 'samantha-mistral:7b-instruct-q6_K'
  | 'samantha-mistral:7b-instruct-q8_0'
  | 'samantha-mistral:7b-text'
  | 'samantha-mistral:7b-text-fp16'
  | 'samantha-mistral:7b-text-q2_K'
  | 'samantha-mistral:7b-text-q3_K_L'
  | 'samantha-mistral:7b-text-q3_K_M'
  | 'samantha-mistral:7b-text-q3_K_S'
  | 'samantha-mistral:7b-text-q4_0'
  | 'samantha-mistral:7b-text-q4_1'
  | 'samantha-mistral:7b-text-q4_K_M'
  | 'samantha-mistral:7b-text-q4_K_S'
  | 'samantha-mistral:7b-text-q5_0'
  | 'samantha-mistral:7b-text-q5_1'
  | 'samantha-mistral:7b-text-q5_K_M'
  | 'samantha-mistral:7b-text-q5_K_S'
  | 'samantha-mistral:7b-text-q6_K'
  | 'samantha-mistral:7b-text-q8_0'
  | 'samantha-mistral:7b-v1.2-text'
  | 'samantha-mistral:7b-v1.2-text-fp16'
  | 'samantha-mistral:7b-v1.2-text-q2_K'
  | 'samantha-mistral:7b-v1.2-text-q3_K_L'
  | 'samantha-mistral:7b-v1.2-text-q3_K_M'
  | 'samantha-mistral:7b-v1.2-text-q3_K_S'
  | 'samantha-mistral:7b-v1.2-text-q4_0'
  | 'samantha-mistral:7b-v1.2-text-q4_1'
  | 'samantha-mistral:7b-v1.2-text-q4_K_M'
  | 'samantha-mistral:7b-v1.2-text-q4_K_S'
  | 'samantha-mistral:7b-v1.2-text-q5_0'
  | 'samantha-mistral:7b-v1.2-text-q5_1'
  | 'samantha-mistral:7b-v1.2-text-q5_K_M'
  | 'samantha-mistral:7b-v1.2-text-q5_K_S'
  | 'samantha-mistral:7b-v1.2-text-q6_K'
  | 'samantha-mistral:7b-v1.2-text-q8_0'
  | 'samantha-mistral:latest'
  | 'shieldgemma'
  | 'shieldgemma:27b'
  | 'shieldgemma:27b-fp16'
  | 'shieldgemma:27b-q2_K'
  | 'shieldgemma:27b-q3_K_L'
  | 'shieldgemma:27b-q3_K_M'
  | 'shieldgemma:27b-q3_K_S'
  | 'shieldgemma:27b-q4_0'
  | 'shieldgemma:27b-q4_1'
  | 'shieldgemma:27b-q4_K_M'
  | 'shieldgemma:27b-q4_K_S'
  | 'shieldgemma:27b-q5_0'
  | 'shieldgemma:27b-q5_1'
  | 'shieldgemma:27b-q5_K_M'
  | 'shieldgemma:27b-q5_K_S'
  | 'shieldgemma:27b-q6_K'
  | 'shieldgemma:27b-q8_0'
  | 'shieldgemma:2b'
  | 'shieldgemma:2b-fp16'
  | 'shieldgemma:2b-q2_K'
  | 'shieldgemma:2b-q3_K_L'
  | 'shieldgemma:2b-q3_K_M'
  | 'shieldgemma:2b-q3_K_S'
  | 'shieldgemma:2b-q4_0'
  | 'shieldgemma:2b-q4_1'
  | 'shieldgemma:2b-q4_K_M'
  | 'shieldgemma:2b-q4_K_S'
  | 'shieldgemma:2b-q5_0'
  | 'shieldgemma:2b-q5_1'
  | 'shieldgemma:2b-q5_K_M'
  | 'shieldgemma:2b-q5_K_S'
  | 'shieldgemma:2b-q6_K'
  | 'shieldgemma:2b-q8_0'
  | 'shieldgemma:9b'
  | 'shieldgemma:9b-fp16'
  | 'shieldgemma:9b-q2_K'
  | 'shieldgemma:9b-q3_K_L'
  | 'shieldgemma:9b-q3_K_M'
  | 'shieldgemma:9b-q3_K_S'
  | 'shieldgemma:9b-q4_0'
  | 'shieldgemma:9b-q4_1'
  | 'shieldgemma:9b-q4_K_M'
  | 'shieldgemma:9b-q4_K_S'
  | 'shieldgemma:9b-q5_0'
  | 'shieldgemma:9b-q5_1'
  | 'shieldgemma:9b-q5_K_M'
  | 'shieldgemma:9b-q5_K_S'
  | 'shieldgemma:9b-q6_K'
  | 'shieldgemma:9b-q8_0'
  | 'shieldgemma:latest'
  | 'smallthinker'
  | 'smallthinker:3b'
  | 'smallthinker:3b-preview-fp16'
  | 'smallthinker:3b-preview-q4_K_M'
  | 'smallthinker:3b-preview-q8_0'
  | 'smallthinker:latest'
  | 'smollm'
  | 'smollm2'
  | 'smollm2:1.7b'
  | 'smollm2:1.7b-instruct-fp16'
  | 'smollm2:1.7b-instruct-q2_K'
  | 'smollm2:1.7b-instruct-q3_K_L'
  | 'smollm2:1.7b-instruct-q3_K_M'
  | 'smollm2:1.7b-instruct-q3_K_S'
  | 'smollm2:1.7b-instruct-q4_0'
  | 'smollm2:1.7b-instruct-q4_1'
  | 'smollm2:1.7b-instruct-q4_K_M'
  | 'smollm2:1.7b-instruct-q4_K_S'
  | 'smollm2:1.7b-instruct-q5_0'
  | 'smollm2:1.7b-instruct-q5_1'
  | 'smollm2:1.7b-instruct-q5_K_M'
  | 'smollm2:1.7b-instruct-q5_K_S'
  | 'smollm2:1.7b-instruct-q6_K'
  | 'smollm2:1.7b-instruct-q8_0'
  | 'smollm2:135m'
  | 'smollm2:135m-instruct-fp16'
  | 'smollm2:135m-instruct-q2_K'
  | 'smollm2:135m-instruct-q3_K_L'
  | 'smollm2:135m-instruct-q3_K_M'
  | 'smollm2:135m-instruct-q3_K_S'
  | 'smollm2:135m-instruct-q4_0'
  | 'smollm2:135m-instruct-q4_1'
  | 'smollm2:135m-instruct-q4_K_M'
  | 'smollm2:135m-instruct-q4_K_S'
  | 'smollm2:135m-instruct-q5_0'
  | 'smollm2:135m-instruct-q5_1'
  | 'smollm2:135m-instruct-q5_K_M'
  | 'smollm2:135m-instruct-q5_K_S'
  | 'smollm2:135m-instruct-q6_K'
  | 'smollm2:135m-instruct-q8_0'
  | 'smollm2:360m'
  | 'smollm2:360m-instruct-fp16'
  | 'smollm2:360m-instruct-q2_K'
  | 'smollm2:360m-instruct-q3_K_L'
  | 'smollm2:360m-instruct-q3_K_M'
  | 'smollm2:360m-instruct-q3_K_S'
  | 'smollm2:360m-instruct-q4_0'
  | 'smollm2:360m-instruct-q4_1'
  | 'smollm2:360m-instruct-q4_K_M'
  | 'smollm2:360m-instruct-q4_K_S'
  | 'smollm2:360m-instruct-q5_0'
  | 'smollm2:360m-instruct-q5_1'
  | 'smollm2:360m-instruct-q5_K_M'
  | 'smollm2:360m-instruct-q5_K_S'
  | 'smollm2:360m-instruct-q6_K'
  | 'smollm2:360m-instruct-q8_0'
  | 'smollm2:latest'
  | 'smollm:1.7b'
  | 'smollm:1.7b-base-v0.2-fp16'
  | 'smollm:1.7b-base-v0.2-q2_K'
  | 'smollm:1.7b-base-v0.2-q3_K_L'
  | 'smollm:1.7b-base-v0.2-q3_K_M'
  | 'smollm:1.7b-base-v0.2-q3_K_S'
  | 'smollm:1.7b-base-v0.2-q4_0'
  | 'smollm:1.7b-base-v0.2-q4_1'
  | 'smollm:1.7b-base-v0.2-q4_K_M'
  | 'smollm:1.7b-base-v0.2-q4_K_S'
  | 'smollm:1.7b-base-v0.2-q5_0'
  | 'smollm:1.7b-base-v0.2-q5_1'
  | 'smollm:1.7b-base-v0.2-q5_K_M'
  | 'smollm:1.7b-base-v0.2-q5_K_S'
  | 'smollm:1.7b-base-v0.2-q6_K'
  | 'smollm:1.7b-base-v0.2-q8_0'
  | 'smollm:1.7b-instruct-v0.2-fp16'
  | 'smollm:1.7b-instruct-v0.2-q2_K'
  | 'smollm:1.7b-instruct-v0.2-q3_K_L'
  | 'smollm:1.7b-instruct-v0.2-q3_K_M'
  | 'smollm:1.7b-instruct-v0.2-q3_K_S'
  | 'smollm:1.7b-instruct-v0.2-q4_0'
  | 'smollm:1.7b-instruct-v0.2-q4_1'
  | 'smollm:1.7b-instruct-v0.2-q4_K_M'
  | 'smollm:1.7b-instruct-v0.2-q4_K_S'
  | 'smollm:1.7b-instruct-v0.2-q5_0'
  | 'smollm:1.7b-instruct-v0.2-q5_1'
  | 'smollm:1.7b-instruct-v0.2-q5_K_M'
  | 'smollm:1.7b-instruct-v0.2-q5_K_S'
  | 'smollm:1.7b-instruct-v0.2-q6_K'
  | 'smollm:1.7b-instruct-v0.2-q8_0'
  | 'smollm:135m'
  | 'smollm:135m-base-v0.2-fp16'
  | 'smollm:135m-base-v0.2-q2_K'
  | 'smollm:135m-base-v0.2-q3_K_L'
  | 'smollm:135m-base-v0.2-q3_K_M'
  | 'smollm:135m-base-v0.2-q3_K_S'
  | 'smollm:135m-base-v0.2-q4_0'
  | 'smollm:135m-base-v0.2-q4_1'
  | 'smollm:135m-base-v0.2-q4_K_M'
  | 'smollm:135m-base-v0.2-q4_K_S'
  | 'smollm:135m-base-v0.2-q5_0'
  | 'smollm:135m-base-v0.2-q5_1'
  | 'smollm:135m-base-v0.2-q5_K_M'
  | 'smollm:135m-base-v0.2-q5_K_S'
  | 'smollm:135m-base-v0.2-q6_K'
  | 'smollm:135m-base-v0.2-q8_0'
  | 'smollm:135m-instruct-v0.2-fp16'
  | 'smollm:135m-instruct-v0.2-q2_K'
  | 'smollm:135m-instruct-v0.2-q3_K_L'
  | 'smollm:135m-instruct-v0.2-q3_K_M'
  | 'smollm:135m-instruct-v0.2-q3_K_S'
  | 'smollm:135m-instruct-v0.2-q4_0'
  | 'smollm:135m-instruct-v0.2-q4_1'
  | 'smollm:135m-instruct-v0.2-q4_K_M'
  | 'smollm:135m-instruct-v0.2-q4_K_S'
  | 'smollm:135m-instruct-v0.2-q5_0'
  | 'smollm:135m-instruct-v0.2-q5_1'
  | 'smollm:135m-instruct-v0.2-q5_K_M'
  | 'smollm:135m-instruct-v0.2-q5_K_S'
  | 'smollm:135m-instruct-v0.2-q6_K'
  | 'smollm:135m-instruct-v0.2-q8_0'
  | 'smollm:360m'
  | 'smollm:360m-base-v0.2-fp16'
  | 'smollm:360m-base-v0.2-q2_K'
  | 'smollm:360m-base-v0.2-q3_K_L'
  | 'smollm:360m-base-v0.2-q3_K_M'
  | 'smollm:360m-base-v0.2-q3_K_S'
  | 'smollm:360m-base-v0.2-q4_0'
  | 'smollm:360m-base-v0.2-q4_1'
  | 'smollm:360m-base-v0.2-q4_K_M'
  | 'smollm:360m-base-v0.2-q4_K_S'
  | 'smollm:360m-base-v0.2-q5_0'
  | 'smollm:360m-base-v0.2-q5_1'
  | 'smollm:360m-base-v0.2-q5_K_M'
  | 'smollm:360m-base-v0.2-q5_K_S'
  | 'smollm:360m-base-v0.2-q6_K'
  | 'smollm:360m-base-v0.2-q8_0'
  | 'smollm:360m-instruct-v0.2-fp16'
  | 'smollm:360m-instruct-v0.2-q2_K'
  | 'smollm:360m-instruct-v0.2-q3_K_L'
  | 'smollm:360m-instruct-v0.2-q3_K_M'
  | 'smollm:360m-instruct-v0.2-q3_K_S'
  | 'smollm:360m-instruct-v0.2-q4_0'
  | 'smollm:360m-instruct-v0.2-q4_1'
  | 'smollm:360m-instruct-v0.2-q4_K_M'
  | 'smollm:360m-instruct-v0.2-q4_K_S'
  | 'smollm:360m-instruct-v0.2-q5_0'
  | 'smollm:360m-instruct-v0.2-q5_1'
  | 'smollm:360m-instruct-v0.2-q5_K_M'
  | 'smollm:360m-instruct-v0.2-q5_K_S'
  | 'smollm:360m-instruct-v0.2-q6_K'
  | 'smollm:360m-instruct-v0.2-q8_0'
  | 'smollm:latest'
  | 'solar'
  | 'solar-pro'
  | 'solar-pro:22b'
  | 'solar-pro:22b-preview-instruct-fp16'
  | 'solar-pro:22b-preview-instruct-q2_K'
  | 'solar-pro:22b-preview-instruct-q3_K_L'
  | 'solar-pro:22b-preview-instruct-q3_K_M'
  | 'solar-pro:22b-preview-instruct-q3_K_S'
  | 'solar-pro:22b-preview-instruct-q4_0'
  | 'solar-pro:22b-preview-instruct-q4_1'
  | 'solar-pro:22b-preview-instruct-q4_K_M'
  | 'solar-pro:22b-preview-instruct-q4_K_S'
  | 'solar-pro:22b-preview-instruct-q5_0'
  | 'solar-pro:22b-preview-instruct-q5_1'
  | 'solar-pro:22b-preview-instruct-q5_K_M'
  | 'solar-pro:22b-preview-instruct-q5_K_S'
  | 'solar-pro:22b-preview-instruct-q6_K'
  | 'solar-pro:22b-preview-instruct-q8_0'
  | 'solar-pro:latest'
  | 'solar-pro:preview'
  | 'solar:10.7b'
  | 'solar:10.7b-instruct-v1-fp16'
  | 'solar:10.7b-instruct-v1-q2_K'
  | 'solar:10.7b-instruct-v1-q3_K_L'
  | 'solar:10.7b-instruct-v1-q3_K_M'
  | 'solar:10.7b-instruct-v1-q3_K_S'
  | 'solar:10.7b-instruct-v1-q4_0'
  | 'solar:10.7b-instruct-v1-q4_1'
  | 'solar:10.7b-instruct-v1-q4_K_M'
  | 'solar:10.7b-instruct-v1-q4_K_S'
  | 'solar:10.7b-instruct-v1-q5_0'
  | 'solar:10.7b-instruct-v1-q5_1'
  | 'solar:10.7b-instruct-v1-q5_K_M'
  | 'solar:10.7b-instruct-v1-q5_K_S'
  | 'solar:10.7b-instruct-v1-q6_K'
  | 'solar:10.7b-instruct-v1-q8_0'
  | 'solar:10.7b-text-v1-fp16'
  | 'solar:10.7b-text-v1-q2_K'
  | 'solar:10.7b-text-v1-q3_K_L'
  | 'solar:10.7b-text-v1-q3_K_M'
  | 'solar:10.7b-text-v1-q3_K_S'
  | 'solar:10.7b-text-v1-q4_0'
  | 'solar:10.7b-text-v1-q4_1'
  | 'solar:10.7b-text-v1-q4_K_M'
  | 'solar:10.7b-text-v1-q4_K_S'
  | 'solar:10.7b-text-v1-q5_0'
  | 'solar:10.7b-text-v1-q5_1'
  | 'solar:10.7b-text-v1-q5_K_M'
  | 'solar:10.7b-text-v1-q5_K_S'
  | 'solar:10.7b-text-v1-q6_K'
  | 'solar:10.7b-text-v1-q8_0'
  | 'solar:latest'
  | 'sqlcoder'
  | 'sqlcoder:15b'
  | 'sqlcoder:15b-fp16'
  | 'sqlcoder:15b-q2_K'
  | 'sqlcoder:15b-q3_K_L'
  | 'sqlcoder:15b-q3_K_M'
  | 'sqlcoder:15b-q3_K_S'
  | 'sqlcoder:15b-q4_0'
  | 'sqlcoder:15b-q4_1'
  | 'sqlcoder:15b-q4_K_M'
  | 'sqlcoder:15b-q4_K_S'
  | 'sqlcoder:15b-q5_0'
  | 'sqlcoder:15b-q5_1'
  | 'sqlcoder:15b-q5_K_M'
  | 'sqlcoder:15b-q5_K_S'
  | 'sqlcoder:15b-q6_K'
  | 'sqlcoder:15b-q8_0'
  | 'sqlcoder:70b-alpha-fp16'
  | 'sqlcoder:70b-alpha-q2_K'
  | 'sqlcoder:70b-alpha-q3_K_L'
  | 'sqlcoder:70b-alpha-q3_K_M'
  | 'sqlcoder:70b-alpha-q3_K_S'
  | 'sqlcoder:70b-alpha-q4_0'
  | 'sqlcoder:70b-alpha-q4_1'
  | 'sqlcoder:70b-alpha-q4_K_M'
  | 'sqlcoder:70b-alpha-q4_K_S'
  | 'sqlcoder:70b-alpha-q5_0'
  | 'sqlcoder:70b-alpha-q5_1'
  | 'sqlcoder:70b-alpha-q5_K_M'
  | 'sqlcoder:70b-alpha-q5_K_S'
  | 'sqlcoder:70b-alpha-q6_K'
  | 'sqlcoder:70b-alpha-q8_0'
  | 'sqlcoder:7b'
  | 'sqlcoder:7b-fp16'
  | 'sqlcoder:7b-q2_K'
  | 'sqlcoder:7b-q3_K_L'
  | 'sqlcoder:7b-q3_K_M'
  | 'sqlcoder:7b-q3_K_S'
  | 'sqlcoder:7b-q4_0'
  | 'sqlcoder:7b-q4_1'
  | 'sqlcoder:7b-q4_K_M'
  | 'sqlcoder:7b-q4_K_S'
  | 'sqlcoder:7b-q5_0'
  | 'sqlcoder:7b-q5_1'
  | 'sqlcoder:7b-q5_K_M'
  | 'sqlcoder:7b-q5_K_S'
  | 'sqlcoder:7b-q6_K'
  | 'sqlcoder:7b-q8_0'
  | 'sqlcoder:latest'
  | 'stable-beluga'
  | 'stable-beluga:13b'
  | 'stable-beluga:13b-fp16'
  | 'stable-beluga:13b-q2_K'
  | 'stable-beluga:13b-q3_K_L'
  | 'stable-beluga:13b-q3_K_M'
  | 'stable-beluga:13b-q3_K_S'
  | 'stable-beluga:13b-q4_0'
  | 'stable-beluga:13b-q4_1'
  | 'stable-beluga:13b-q4_K_M'
  | 'stable-beluga:13b-q4_K_S'
  | 'stable-beluga:13b-q5_0'
  | 'stable-beluga:13b-q5_1'
  | 'stable-beluga:13b-q5_K_M'
  | 'stable-beluga:13b-q5_K_S'
  | 'stable-beluga:13b-q6_K'
  | 'stable-beluga:13b-q8_0'
  | 'stable-beluga:70b'
  | 'stable-beluga:70b-fp16'
  | 'stable-beluga:70b-q2_K'
  | 'stable-beluga:70b-q3_K_L'
  | 'stable-beluga:70b-q3_K_M'
  | 'stable-beluga:70b-q3_K_S'
  | 'stable-beluga:70b-q4_0'
  | 'stable-beluga:70b-q4_1'
  | 'stable-beluga:70b-q4_K_M'
  | 'stable-beluga:70b-q4_K_S'
  | 'stable-beluga:70b-q5_0'
  | 'stable-beluga:70b-q5_1'
  | 'stable-beluga:70b-q5_K_M'
  | 'stable-beluga:70b-q5_K_S'
  | 'stable-beluga:70b-q6_K'
  | 'stable-beluga:70b-q8_0'
  | 'stable-beluga:7b'
  | 'stable-beluga:7b-fp16'
  | 'stable-beluga:7b-q2_K'
  | 'stable-beluga:7b-q3_K_L'
  | 'stable-beluga:7b-q3_K_M'
  | 'stable-beluga:7b-q3_K_S'
  | 'stable-beluga:7b-q4_0'
  | 'stable-beluga:7b-q4_1'
  | 'stable-beluga:7b-q4_K_M'
  | 'stable-beluga:7b-q4_K_S'
  | 'stable-beluga:7b-q5_0'
  | 'stable-beluga:7b-q5_1'
  | 'stable-beluga:7b-q5_K_M'
  | 'stable-beluga:7b-q5_K_S'
  | 'stable-beluga:7b-q6_K'
  | 'stable-beluga:7b-q8_0'
  | 'stable-beluga:latest'
  | 'stable-code'
  | 'stable-code:3b'
  | 'stable-code:3b-code'
  | 'stable-code:3b-code-fp16'
  | 'stable-code:3b-code-q2_K'
  | 'stable-code:3b-code-q3_K_L'
  | 'stable-code:3b-code-q3_K_M'
  | 'stable-code:3b-code-q3_K_S'
  | 'stable-code:3b-code-q4_0'
  | 'stable-code:3b-code-q4_1'
  | 'stable-code:3b-code-q4_K_M'
  | 'stable-code:3b-code-q4_K_S'
  | 'stable-code:3b-code-q5_0'
  | 'stable-code:3b-code-q5_1'
  | 'stable-code:3b-code-q5_K_M'
  | 'stable-code:3b-code-q5_K_S'
  | 'stable-code:3b-code-q6_K'
  | 'stable-code:3b-code-q8_0'
  | 'stable-code:3b-instruct'
  | 'stable-code:3b-instruct-fp16'
  | 'stable-code:3b-instruct-q2_K'
  | 'stable-code:3b-instruct-q3_K_L'
  | 'stable-code:3b-instruct-q3_K_M'
  | 'stable-code:3b-instruct-q3_K_S'
  | 'stable-code:3b-instruct-q4_0'
  | 'stable-code:3b-instruct-q4_1'
  | 'stable-code:3b-instruct-q4_K_M'
  | 'stable-code:3b-instruct-q4_K_S'
  | 'stable-code:3b-instruct-q5_0'
  | 'stable-code:3b-instruct-q5_1'
  | 'stable-code:3b-instruct-q5_K_M'
  | 'stable-code:3b-instruct-q5_K_S'
  | 'stable-code:3b-instruct-q6_K'
  | 'stable-code:3b-instruct-q8_0'
  | 'stable-code:code'
  | 'stable-code:instruct'
  | 'stable-code:latest'
  | 'stablelm-zephyr'
  | 'stablelm-zephyr:3b'
  | 'stablelm-zephyr:3b-fp16'
  | 'stablelm-zephyr:3b-q2_K'
  | 'stablelm-zephyr:3b-q3_K_L'
  | 'stablelm-zephyr:3b-q3_K_M'
  | 'stablelm-zephyr:3b-q3_K_S'
  | 'stablelm-zephyr:3b-q4_0'
  | 'stablelm-zephyr:3b-q4_1'
  | 'stablelm-zephyr:3b-q4_K_M'
  | 'stablelm-zephyr:3b-q4_K_S'
  | 'stablelm-zephyr:3b-q5_0'
  | 'stablelm-zephyr:3b-q5_1'
  | 'stablelm-zephyr:3b-q5_K_M'
  | 'stablelm-zephyr:3b-q5_K_S'
  | 'stablelm-zephyr:3b-q6_K'
  | 'stablelm-zephyr:3b-q8_0'
  | 'stablelm-zephyr:latest'
  | 'stablelm2'
  | 'stablelm2:1.6b'
  | 'stablelm2:1.6b-chat'
  | 'stablelm2:1.6b-chat-fp16'
  | 'stablelm2:1.6b-chat-q2_K'
  | 'stablelm2:1.6b-chat-q3_K_L'
  | 'stablelm2:1.6b-chat-q3_K_M'
  | 'stablelm2:1.6b-chat-q3_K_S'
  | 'stablelm2:1.6b-chat-q4_0'
  | 'stablelm2:1.6b-chat-q4_1'
  | 'stablelm2:1.6b-chat-q4_K_M'
  | 'stablelm2:1.6b-chat-q4_K_S'
  | 'stablelm2:1.6b-chat-q5_0'
  | 'stablelm2:1.6b-chat-q5_1'
  | 'stablelm2:1.6b-chat-q5_K_M'
  | 'stablelm2:1.6b-chat-q5_K_S'
  | 'stablelm2:1.6b-chat-q6_K'
  | 'stablelm2:1.6b-chat-q8_0'
  | 'stablelm2:1.6b-fp16'
  | 'stablelm2:1.6b-q2_K'
  | 'stablelm2:1.6b-q3_K_L'
  | 'stablelm2:1.6b-q3_K_M'
  | 'stablelm2:1.6b-q3_K_S'
  | 'stablelm2:1.6b-q4_0'
  | 'stablelm2:1.6b-q4_1'
  | 'stablelm2:1.6b-q4_K_M'
  | 'stablelm2:1.6b-q4_K_S'
  | 'stablelm2:1.6b-q5_0'
  | 'stablelm2:1.6b-q5_1'
  | 'stablelm2:1.6b-q5_K_M'
  | 'stablelm2:1.6b-q5_K_S'
  | 'stablelm2:1.6b-q6_K'
  | 'stablelm2:1.6b-q8_0'
  | 'stablelm2:1.6b-zephyr'
  | 'stablelm2:1.6b-zephyr-fp16'
  | 'stablelm2:1.6b-zephyr-q2_K'
  | 'stablelm2:1.6b-zephyr-q3_K_L'
  | 'stablelm2:1.6b-zephyr-q3_K_M'
  | 'stablelm2:1.6b-zephyr-q3_K_S'
  | 'stablelm2:1.6b-zephyr-q4_0'
  | 'stablelm2:1.6b-zephyr-q4_1'
  | 'stablelm2:1.6b-zephyr-q4_K_M'
  | 'stablelm2:1.6b-zephyr-q4_K_S'
  | 'stablelm2:1.6b-zephyr-q5_0'
  | 'stablelm2:1.6b-zephyr-q5_1'
  | 'stablelm2:1.6b-zephyr-q5_K_M'
  | 'stablelm2:1.6b-zephyr-q5_K_S'
  | 'stablelm2:1.6b-zephyr-q6_K'
  | 'stablelm2:1.6b-zephyr-q8_0'
  | 'stablelm2:12b'
  | 'stablelm2:12b-chat'
  | 'stablelm2:12b-chat-fp16'
  | 'stablelm2:12b-chat-q2_K'
  | 'stablelm2:12b-chat-q3_K_L'
  | 'stablelm2:12b-chat-q3_K_M'
  | 'stablelm2:12b-chat-q3_K_S'
  | 'stablelm2:12b-chat-q4_0'
  | 'stablelm2:12b-chat-q4_1'
  | 'stablelm2:12b-chat-q4_K_M'
  | 'stablelm2:12b-chat-q4_K_S'
  | 'stablelm2:12b-chat-q5_0'
  | 'stablelm2:12b-chat-q5_1'
  | 'stablelm2:12b-chat-q5_K_M'
  | 'stablelm2:12b-chat-q5_K_S'
  | 'stablelm2:12b-chat-q6_K'
  | 'stablelm2:12b-chat-q8_0'
  | 'stablelm2:12b-fp16'
  | 'stablelm2:12b-q2_K'
  | 'stablelm2:12b-q3_K_L'
  | 'stablelm2:12b-q3_K_M'
  | 'stablelm2:12b-q3_K_S'
  | 'stablelm2:12b-q4_0'
  | 'stablelm2:12b-q4_1'
  | 'stablelm2:12b-q4_K_M'
  | 'stablelm2:12b-q4_K_S'
  | 'stablelm2:12b-q5_0'
  | 'stablelm2:12b-q5_1'
  | 'stablelm2:12b-q5_K_M'
  | 'stablelm2:12b-q5_K_S'
  | 'stablelm2:12b-q6_K'
  | 'stablelm2:12b-q8_0'
  | 'stablelm2:12b-text'
  | 'stablelm2:chat'
  | 'stablelm2:latest'
  | 'stablelm2:zephyr'
  | 'starcoder'
  | 'starcoder2'
  | 'starcoder2:15b'
  | 'starcoder2:15b-fp16'
  | 'starcoder2:15b-instruct'
  | 'starcoder2:15b-instruct-q4_0'
  | 'starcoder2:15b-instruct-v0.1-fp16'
  | 'starcoder2:15b-instruct-v0.1-q2_K'
  | 'starcoder2:15b-instruct-v0.1-q3_K_L'
  | 'starcoder2:15b-instruct-v0.1-q3_K_M'
  | 'starcoder2:15b-instruct-v0.1-q3_K_S'
  | 'starcoder2:15b-instruct-v0.1-q4_0'
  | 'starcoder2:15b-instruct-v0.1-q4_1'
  | 'starcoder2:15b-instruct-v0.1-q4_K_M'
  | 'starcoder2:15b-instruct-v0.1-q4_K_S'
  | 'starcoder2:15b-instruct-v0.1-q5_0'
  | 'starcoder2:15b-instruct-v0.1-q5_1'
  | 'starcoder2:15b-instruct-v0.1-q5_K_M'
  | 'starcoder2:15b-instruct-v0.1-q5_K_S'
  | 'starcoder2:15b-instruct-v0.1-q6_K'
  | 'starcoder2:15b-instruct-v0.1-q8_0'
  | 'starcoder2:15b-q2_K'
  | 'starcoder2:15b-q3_K_L'
  | 'starcoder2:15b-q3_K_M'
  | 'starcoder2:15b-q3_K_S'
  | 'starcoder2:15b-q4_0'
  | 'starcoder2:15b-q4_1'
  | 'starcoder2:15b-q4_K_M'
  | 'starcoder2:15b-q4_K_S'
  | 'starcoder2:15b-q5_0'
  | 'starcoder2:15b-q5_1'
  | 'starcoder2:15b-q5_K_M'
  | 'starcoder2:15b-q5_K_S'
  | 'starcoder2:15b-q6_K'
  | 'starcoder2:15b-q8_0'
  | 'starcoder2:3b'
  | 'starcoder2:3b-fp16'
  | 'starcoder2:3b-q2_K'
  | 'starcoder2:3b-q3_K_L'
  | 'starcoder2:3b-q3_K_M'
  | 'starcoder2:3b-q3_K_S'
  | 'starcoder2:3b-q4_0'
  | 'starcoder2:3b-q4_1'
  | 'starcoder2:3b-q4_K_M'
  | 'starcoder2:3b-q4_K_S'
  | 'starcoder2:3b-q5_0'
  | 'starcoder2:3b-q5_1'
  | 'starcoder2:3b-q5_K_M'
  | 'starcoder2:3b-q5_K_S'
  | 'starcoder2:3b-q6_K'
  | 'starcoder2:3b-q8_0'
  | 'starcoder2:7b'
  | 'starcoder2:7b-fp16'
  | 'starcoder2:7b-q2_K'
  | 'starcoder2:7b-q3_K_L'
  | 'starcoder2:7b-q3_K_M'
  | 'starcoder2:7b-q3_K_S'
  | 'starcoder2:7b-q4_0'
  | 'starcoder2:7b-q4_1'
  | 'starcoder2:7b-q4_K_M'
  | 'starcoder2:7b-q4_K_S'
  | 'starcoder2:7b-q5_0'
  | 'starcoder2:7b-q5_1'
  | 'starcoder2:7b-q5_K_M'
  | 'starcoder2:7b-q5_K_S'
  | 'starcoder2:7b-q6_K'
  | 'starcoder2:7b-q8_0'
  | 'starcoder2:instruct'
  | 'starcoder2:latest'
  | 'starcoder:15b'
  | 'starcoder:15b-base'
  | 'starcoder:15b-base-fp16'
  | 'starcoder:15b-base-q2_K'
  | 'starcoder:15b-base-q3_K_L'
  | 'starcoder:15b-base-q3_K_M'
  | 'starcoder:15b-base-q3_K_S'
  | 'starcoder:15b-base-q4_0'
  | 'starcoder:15b-base-q4_1'
  | 'starcoder:15b-base-q4_K_M'
  | 'starcoder:15b-base-q4_K_S'
  | 'starcoder:15b-base-q5_0'
  | 'starcoder:15b-base-q5_1'
  | 'starcoder:15b-base-q5_K_M'
  | 'starcoder:15b-base-q5_K_S'
  | 'starcoder:15b-base-q6_K'
  | 'starcoder:15b-base-q8_0'
  | 'starcoder:15b-fp16'
  | 'starcoder:15b-plus'
  | 'starcoder:15b-plus-fp16'
  | 'starcoder:15b-plus-q2_K'
  | 'starcoder:15b-plus-q3_K_L'
  | 'starcoder:15b-plus-q3_K_M'
  | 'starcoder:15b-plus-q3_K_S'
  | 'starcoder:15b-plus-q4_0'
  | 'starcoder:15b-plus-q4_1'
  | 'starcoder:15b-plus-q4_K_M'
  | 'starcoder:15b-plus-q4_K_S'
  | 'starcoder:15b-plus-q5_0'
  | 'starcoder:15b-plus-q5_1'
  | 'starcoder:15b-plus-q5_K_M'
  | 'starcoder:15b-plus-q5_K_S'
  | 'starcoder:15b-plus-q6_K'
  | 'starcoder:15b-plus-q8_0'
  | 'starcoder:15b-q2_K'
  | 'starcoder:15b-q3_K_L'
  | 'starcoder:15b-q3_K_M'
  | 'starcoder:15b-q3_K_S'
  | 'starcoder:15b-q4_0'
  | 'starcoder:15b-q4_1'
  | 'starcoder:15b-q4_K_M'
  | 'starcoder:15b-q4_K_S'
  | 'starcoder:15b-q5_0'
  | 'starcoder:15b-q5_1'
  | 'starcoder:15b-q5_K_M'
  | 'starcoder:15b-q5_K_S'
  | 'starcoder:15b-q6_K'
  | 'starcoder:15b-q8_0'
  | 'starcoder:1b'
  | 'starcoder:1b-base'
  | 'starcoder:1b-base-fp16'
  | 'starcoder:1b-base-q2_K'
  | 'starcoder:1b-base-q3_K_L'
  | 'starcoder:1b-base-q3_K_M'
  | 'starcoder:1b-base-q3_K_S'
  | 'starcoder:1b-base-q4_0'
  | 'starcoder:1b-base-q4_1'
  | 'starcoder:1b-base-q4_K_M'
  | 'starcoder:1b-base-q4_K_S'
  | 'starcoder:1b-base-q5_0'
  | 'starcoder:1b-base-q5_1'
  | 'starcoder:1b-base-q5_K_M'
  | 'starcoder:1b-base-q5_K_S'
  | 'starcoder:1b-base-q6_K'
  | 'starcoder:1b-base-q8_0'
  | 'starcoder:3b'
  | 'starcoder:3b-base'
  | 'starcoder:3b-base-fp16'
  | 'starcoder:3b-base-q2_K'
  | 'starcoder:3b-base-q3_K_L'
  | 'starcoder:3b-base-q3_K_M'
  | 'starcoder:3b-base-q3_K_S'
  | 'starcoder:3b-base-q4_0'
  | 'starcoder:3b-base-q4_1'
  | 'starcoder:3b-base-q4_K_M'
  | 'starcoder:3b-base-q4_K_S'
  | 'starcoder:3b-base-q5_0'
  | 'starcoder:3b-base-q5_1'
  | 'starcoder:3b-base-q5_K_M'
  | 'starcoder:3b-base-q5_K_S'
  | 'starcoder:3b-base-q6_K'
  | 'starcoder:3b-base-q8_0'
  | 'starcoder:7b'
  | 'starcoder:7b-base'
  | 'starcoder:7b-base-fp16'
  | 'starcoder:7b-base-q2_K'
  | 'starcoder:7b-base-q3_K_L'
  | 'starcoder:7b-base-q3_K_M'
  | 'starcoder:7b-base-q3_K_S'
  | 'starcoder:7b-base-q4_0'
  | 'starcoder:7b-base-q4_1'
  | 'starcoder:7b-base-q4_K_M'
  | 'starcoder:7b-base-q4_K_S'
  | 'starcoder:7b-base-q5_0'
  | 'starcoder:7b-base-q5_1'
  | 'starcoder:7b-base-q5_K_M'
  | 'starcoder:7b-base-q5_K_S'
  | 'starcoder:7b-base-q6_K'
  | 'starcoder:7b-base-q8_0'
  | 'starcoder:latest'
  | 'starling-lm'
  | 'starling-lm:7b'
  | 'starling-lm:7b-alpha'
  | 'starling-lm:7b-alpha-fp16'
  | 'starling-lm:7b-alpha-q2_K'
  | 'starling-lm:7b-alpha-q3_K_L'
  | 'starling-lm:7b-alpha-q3_K_M'
  | 'starling-lm:7b-alpha-q3_K_S'
  | 'starling-lm:7b-alpha-q4_0'
  | 'starling-lm:7b-alpha-q4_1'
  | 'starling-lm:7b-alpha-q4_K_M'
  | 'starling-lm:7b-alpha-q4_K_S'
  | 'starling-lm:7b-alpha-q5_0'
  | 'starling-lm:7b-alpha-q5_1'
  | 'starling-lm:7b-alpha-q5_K_M'
  | 'starling-lm:7b-alpha-q5_K_S'
  | 'starling-lm:7b-alpha-q6_K'
  | 'starling-lm:7b-alpha-q8_0'
  | 'starling-lm:7b-beta'
  | 'starling-lm:7b-beta-fp16'
  | 'starling-lm:7b-beta-q2_K'
  | 'starling-lm:7b-beta-q3_K_L'
  | 'starling-lm:7b-beta-q3_K_M'
  | 'starling-lm:7b-beta-q3_K_S'
  | 'starling-lm:7b-beta-q4_0'
  | 'starling-lm:7b-beta-q4_1'
  | 'starling-lm:7b-beta-q4_K_M'
  | 'starling-lm:7b-beta-q4_K_S'
  | 'starling-lm:7b-beta-q5_0'
  | 'starling-lm:7b-beta-q5_1'
  | 'starling-lm:7b-beta-q5_K_M'
  | 'starling-lm:7b-beta-q5_K_S'
  | 'starling-lm:7b-beta-q6_K'
  | 'starling-lm:7b-beta-q8_0'
  | 'starling-lm:alpha'
  | 'starling-lm:beta'
  | 'starling-lm:latest'
  | 'tinydolphin'
  | 'tinydolphin:1.1b'
  | 'tinydolphin:1.1b-v2.8-fp16'
  | 'tinydolphin:1.1b-v2.8-q2_K'
  | 'tinydolphin:1.1b-v2.8-q3_K_L'
  | 'tinydolphin:1.1b-v2.8-q3_K_M'
  | 'tinydolphin:1.1b-v2.8-q3_K_S'
  | 'tinydolphin:1.1b-v2.8-q4_0'
  | 'tinydolphin:1.1b-v2.8-q4_1'
  | 'tinydolphin:1.1b-v2.8-q4_K_M'
  | 'tinydolphin:1.1b-v2.8-q4_K_S'
  | 'tinydolphin:1.1b-v2.8-q5_0'
  | 'tinydolphin:1.1b-v2.8-q5_1'
  | 'tinydolphin:1.1b-v2.8-q5_K_M'
  | 'tinydolphin:1.1b-v2.8-q5_K_S'
  | 'tinydolphin:1.1b-v2.8-q6_K'
  | 'tinydolphin:1.1b-v2.8-q8_0'
  | 'tinydolphin:latest'
  | 'tinydolphin:v2.8'
  | 'tinyllama'
  | 'tinyllama:1.1b'
  | 'tinyllama:1.1b-chat'
  | 'tinyllama:1.1b-chat-v0.6-fp16'
  | 'tinyllama:1.1b-chat-v0.6-q2_K'
  | 'tinyllama:1.1b-chat-v0.6-q3_K_L'
  | 'tinyllama:1.1b-chat-v0.6-q3_K_M'
  | 'tinyllama:1.1b-chat-v0.6-q3_K_S'
  | 'tinyllama:1.1b-chat-v0.6-q4_0'
  | 'tinyllama:1.1b-chat-v0.6-q4_1'
  | 'tinyllama:1.1b-chat-v0.6-q4_K_M'
  | 'tinyllama:1.1b-chat-v0.6-q4_K_S'
  | 'tinyllama:1.1b-chat-v0.6-q5_0'
  | 'tinyllama:1.1b-chat-v0.6-q5_1'
  | 'tinyllama:1.1b-chat-v0.6-q5_K_M'
  | 'tinyllama:1.1b-chat-v0.6-q5_K_S'
  | 'tinyllama:1.1b-chat-v0.6-q6_K'
  | 'tinyllama:1.1b-chat-v0.6-q8_0'
  | 'tinyllama:1.1b-chat-v1-fp16'
  | 'tinyllama:1.1b-chat-v1-q2_K'
  | 'tinyllama:1.1b-chat-v1-q3_K_L'
  | 'tinyllama:1.1b-chat-v1-q3_K_M'
  | 'tinyllama:1.1b-chat-v1-q3_K_S'
  | 'tinyllama:1.1b-chat-v1-q4_0'
  | 'tinyllama:1.1b-chat-v1-q4_1'
  | 'tinyllama:1.1b-chat-v1-q4_K_M'
  | 'tinyllama:1.1b-chat-v1-q4_K_S'
  | 'tinyllama:1.1b-chat-v1-q5_0'
  | 'tinyllama:1.1b-chat-v1-q5_1'
  | 'tinyllama:1.1b-chat-v1-q5_K_M'
  | 'tinyllama:1.1b-chat-v1-q5_K_S'
  | 'tinyllama:1.1b-chat-v1-q6_K'
  | 'tinyllama:1.1b-chat-v1-q8_0'
  | 'tinyllama:chat'
  | 'tinyllama:latest'
  | 'tinyllama:v0.6'
  | 'tinyllama:v1'
  | 'tulu3'
  | 'tulu3:70b'
  | 'tulu3:70b-fp16'
  | 'tulu3:70b-q4_K_M'
  | 'tulu3:70b-q8_0'
  | 'tulu3:8b'
  | 'tulu3:8b-fp16'
  | 'tulu3:8b-q4_K_M'
  | 'tulu3:8b-q8_0'
  | 'tulu3:latest'
  | 'vicuna'
  | 'vicuna:13b'
  | 'vicuna:13b-16k'
  | 'vicuna:13b-fp16'
  | 'vicuna:13b-q2_K'
  | 'vicuna:13b-q3_K_L'
  | 'vicuna:13b-q3_K_M'
  | 'vicuna:13b-q3_K_S'
  | 'vicuna:13b-q4_0'
  | 'vicuna:13b-q4_1'
  | 'vicuna:13b-q4_K_M'
  | 'vicuna:13b-q4_K_S'
  | 'vicuna:13b-q5_0'
  | 'vicuna:13b-q5_1'
  | 'vicuna:13b-q5_K_M'
  | 'vicuna:13b-q5_K_S'
  | 'vicuna:13b-q6_K'
  | 'vicuna:13b-q8_0'
  | 'vicuna:13b-v1.5-16k-fp16'
  | 'vicuna:13b-v1.5-16k-q2_K'
  | 'vicuna:13b-v1.5-16k-q3_K_L'
  | 'vicuna:13b-v1.5-16k-q3_K_M'
  | 'vicuna:13b-v1.5-16k-q3_K_S'
  | 'vicuna:13b-v1.5-16k-q4_0'
  | 'vicuna:13b-v1.5-16k-q4_1'
  | 'vicuna:13b-v1.5-16k-q4_K_M'
  | 'vicuna:13b-v1.5-16k-q4_K_S'
  | 'vicuna:13b-v1.5-16k-q5_0'
  | 'vicuna:13b-v1.5-16k-q5_1'
  | 'vicuna:13b-v1.5-16k-q5_K_M'
  | 'vicuna:13b-v1.5-16k-q5_K_S'
  | 'vicuna:13b-v1.5-16k-q6_K'
  | 'vicuna:13b-v1.5-16k-q8_0'
  | 'vicuna:13b-v1.5-fp16'
  | 'vicuna:13b-v1.5-q2_K'
  | 'vicuna:13b-v1.5-q3_K_L'
  | 'vicuna:13b-v1.5-q3_K_M'
  | 'vicuna:13b-v1.5-q3_K_S'
  | 'vicuna:13b-v1.5-q4_0'
  | 'vicuna:13b-v1.5-q4_1'
  | 'vicuna:13b-v1.5-q4_K_M'
  | 'vicuna:13b-v1.5-q4_K_S'
  | 'vicuna:13b-v1.5-q5_0'
  | 'vicuna:13b-v1.5-q5_1'
  | 'vicuna:13b-v1.5-q5_K_M'
  | 'vicuna:13b-v1.5-q5_K_S'
  | 'vicuna:13b-v1.5-q6_K'
  | 'vicuna:13b-v1.5-q8_0'
  | 'vicuna:33b'
  | 'vicuna:33b-fp16'
  | 'vicuna:33b-q2_K'
  | 'vicuna:33b-q3_K_L'
  | 'vicuna:33b-q3_K_M'
  | 'vicuna:33b-q3_K_S'
  | 'vicuna:33b-q4_0'
  | 'vicuna:33b-q4_1'
  | 'vicuna:33b-q4_K_M'
  | 'vicuna:33b-q4_K_S'
  | 'vicuna:33b-q5_0'
  | 'vicuna:33b-q5_1'
  | 'vicuna:33b-q5_K_M'
  | 'vicuna:33b-q5_K_S'
  | 'vicuna:33b-q6_K'
  | 'vicuna:33b-q8_0'
  | 'vicuna:7b'
  | 'vicuna:7b-16k'
  | 'vicuna:7b-fp16'
  | 'vicuna:7b-q2_K'
  | 'vicuna:7b-q3_K_L'
  | 'vicuna:7b-q3_K_M'
  | 'vicuna:7b-q3_K_S'
  | 'vicuna:7b-q4_0'
  | 'vicuna:7b-q4_1'
  | 'vicuna:7b-q4_K_M'
  | 'vicuna:7b-q4_K_S'
  | 'vicuna:7b-q5_0'
  | 'vicuna:7b-q5_1'
  | 'vicuna:7b-q5_K_M'
  | 'vicuna:7b-q5_K_S'
  | 'vicuna:7b-q6_K'
  | 'vicuna:7b-q8_0'
  | 'vicuna:7b-v1.5-16k-fp16'
  | 'vicuna:7b-v1.5-16k-q2_K'
  | 'vicuna:7b-v1.5-16k-q3_K_L'
  | 'vicuna:7b-v1.5-16k-q3_K_M'
  | 'vicuna:7b-v1.5-16k-q3_K_S'
  | 'vicuna:7b-v1.5-16k-q4_0'
  | 'vicuna:7b-v1.5-16k-q4_1'
  | 'vicuna:7b-v1.5-16k-q4_K_M'
  | 'vicuna:7b-v1.5-16k-q4_K_S'
  | 'vicuna:7b-v1.5-16k-q5_0'
  | 'vicuna:7b-v1.5-16k-q5_1'
  | 'vicuna:7b-v1.5-16k-q5_K_M'
  | 'vicuna:7b-v1.5-16k-q5_K_S'
  | 'vicuna:7b-v1.5-16k-q6_K'
  | 'vicuna:7b-v1.5-16k-q8_0'
  | 'vicuna:7b-v1.5-fp16'
  | 'vicuna:7b-v1.5-q2_K'
  | 'vicuna:7b-v1.5-q3_K_L'
  | 'vicuna:7b-v1.5-q3_K_M'
  | 'vicuna:7b-v1.5-q3_K_S'
  | 'vicuna:7b-v1.5-q4_0'
  | 'vicuna:7b-v1.5-q4_1'
  | 'vicuna:7b-v1.5-q4_K_M'
  | 'vicuna:7b-v1.5-q4_K_S'
  | 'vicuna:7b-v1.5-q5_0'
  | 'vicuna:7b-v1.5-q5_1'
  | 'vicuna:7b-v1.5-q5_K_M'
  | 'vicuna:7b-v1.5-q5_K_S'
  | 'vicuna:7b-v1.5-q6_K'
  | 'vicuna:7b-v1.5-q8_0'
  | 'vicuna:latest'
  | 'wizard-math'
  | 'wizard-math:13b'
  | 'wizard-math:13b-fp16'
  | 'wizard-math:13b-q2_K'
  | 'wizard-math:13b-q3_K_L'
  | 'wizard-math:13b-q3_K_M'
  | 'wizard-math:13b-q3_K_S'
  | 'wizard-math:13b-q4_0'
  | 'wizard-math:13b-q4_1'
  | 'wizard-math:13b-q4_K_M'
  | 'wizard-math:13b-q4_K_S'
  | 'wizard-math:13b-q5_0'
  | 'wizard-math:13b-q5_1'
  | 'wizard-math:13b-q5_K_M'
  | 'wizard-math:13b-q5_K_S'
  | 'wizard-math:13b-q6_K'
  | 'wizard-math:13b-q8_0'
  | 'wizard-math:70b'
  | 'wizard-math:70b-fp16'
  | 'wizard-math:70b-q2_K'
  | 'wizard-math:70b-q3_K_L'
  | 'wizard-math:70b-q3_K_M'
  | 'wizard-math:70b-q3_K_S'
  | 'wizard-math:70b-q4_0'
  | 'wizard-math:70b-q4_1'
  | 'wizard-math:70b-q4_K_M'
  | 'wizard-math:70b-q4_K_S'
  | 'wizard-math:70b-q5_0'
  | 'wizard-math:70b-q5_1'
  | 'wizard-math:70b-q5_K_M'
  | 'wizard-math:70b-q5_K_S'
  | 'wizard-math:70b-q6_K'
  | 'wizard-math:70b-q8_0'
  | 'wizard-math:7b'
  | 'wizard-math:7b-fp16'
  | 'wizard-math:7b-q2_K'
  | 'wizard-math:7b-q3_K_L'
  | 'wizard-math:7b-q3_K_M'
  | 'wizard-math:7b-q3_K_S'
  | 'wizard-math:7b-q4_0'
  | 'wizard-math:7b-q4_1'
  | 'wizard-math:7b-q4_K_M'
  | 'wizard-math:7b-q4_K_S'
  | 'wizard-math:7b-q5_0'
  | 'wizard-math:7b-q5_1'
  | 'wizard-math:7b-q5_K_M'
  | 'wizard-math:7b-q5_K_S'
  | 'wizard-math:7b-q6_K'
  | 'wizard-math:7b-q8_0'
  | 'wizard-math:7b-v1.1-fp16'
  | 'wizard-math:7b-v1.1-q2_K'
  | 'wizard-math:7b-v1.1-q3_K_L'
  | 'wizard-math:7b-v1.1-q3_K_M'
  | 'wizard-math:7b-v1.1-q3_K_S'
  | 'wizard-math:7b-v1.1-q4_0'
  | 'wizard-math:7b-v1.1-q4_1'
  | 'wizard-math:7b-v1.1-q4_K_M'
  | 'wizard-math:7b-v1.1-q4_K_S'
  | 'wizard-math:7b-v1.1-q5_0'
  | 'wizard-math:7b-v1.1-q5_1'
  | 'wizard-math:7b-v1.1-q5_K_M'
  | 'wizard-math:7b-v1.1-q5_K_S'
  | 'wizard-math:7b-v1.1-q6_K'
  | 'wizard-math:7b-v1.1-q8_0'
  | 'wizard-math:latest'
  | 'wizard-vicuna'
  | 'wizard-vicuna-uncensored'
  | 'wizard-vicuna-uncensored:13b'
  | 'wizard-vicuna-uncensored:13b-fp16'
  | 'wizard-vicuna-uncensored:13b-q2_K'
  | 'wizard-vicuna-uncensored:13b-q3_K_L'
  | 'wizard-vicuna-uncensored:13b-q3_K_M'
  | 'wizard-vicuna-uncensored:13b-q3_K_S'
  | 'wizard-vicuna-uncensored:13b-q4_0'
  | 'wizard-vicuna-uncensored:13b-q4_1'
  | 'wizard-vicuna-uncensored:13b-q4_K_M'
  | 'wizard-vicuna-uncensored:13b-q4_K_S'
  | 'wizard-vicuna-uncensored:13b-q5_0'
  | 'wizard-vicuna-uncensored:13b-q5_1'
  | 'wizard-vicuna-uncensored:13b-q5_K_M'
  | 'wizard-vicuna-uncensored:13b-q5_K_S'
  | 'wizard-vicuna-uncensored:13b-q6_K'
  | 'wizard-vicuna-uncensored:13b-q8_0'
  | 'wizard-vicuna-uncensored:30b'
  | 'wizard-vicuna-uncensored:30b-fp16'
  | 'wizard-vicuna-uncensored:30b-q2_K'
  | 'wizard-vicuna-uncensored:30b-q3_K_L'
  | 'wizard-vicuna-uncensored:30b-q3_K_M'
  | 'wizard-vicuna-uncensored:30b-q3_K_S'
  | 'wizard-vicuna-uncensored:30b-q4_0'
  | 'wizard-vicuna-uncensored:30b-q4_1'
  | 'wizard-vicuna-uncensored:30b-q4_K_M'
  | 'wizard-vicuna-uncensored:30b-q4_K_S'
  | 'wizard-vicuna-uncensored:30b-q5_0'
  | 'wizard-vicuna-uncensored:30b-q5_1'
  | 'wizard-vicuna-uncensored:30b-q5_K_M'
  | 'wizard-vicuna-uncensored:30b-q5_K_S'
  | 'wizard-vicuna-uncensored:30b-q6_K'
  | 'wizard-vicuna-uncensored:30b-q8_0'
  | 'wizard-vicuna-uncensored:7b'
  | 'wizard-vicuna-uncensored:7b-fp16'
  | 'wizard-vicuna-uncensored:7b-q2_K'
  | 'wizard-vicuna-uncensored:7b-q3_K_L'
  | 'wizard-vicuna-uncensored:7b-q3_K_M'
  | 'wizard-vicuna-uncensored:7b-q3_K_S'
  | 'wizard-vicuna-uncensored:7b-q4_0'
  | 'wizard-vicuna-uncensored:7b-q4_1'
  | 'wizard-vicuna-uncensored:7b-q4_K_M'
  | 'wizard-vicuna-uncensored:7b-q4_K_S'
  | 'wizard-vicuna-uncensored:7b-q5_0'
  | 'wizard-vicuna-uncensored:7b-q5_1'
  | 'wizard-vicuna-uncensored:7b-q5_K_M'
  | 'wizard-vicuna-uncensored:7b-q5_K_S'
  | 'wizard-vicuna-uncensored:7b-q6_K'
  | 'wizard-vicuna-uncensored:7b-q8_0'
  | 'wizard-vicuna-uncensored:latest'
  | 'wizard-vicuna:13b'
  | 'wizard-vicuna:13b-fp16'
  | 'wizard-vicuna:13b-q2_K'
  | 'wizard-vicuna:13b-q3_K_L'
  | 'wizard-vicuna:13b-q3_K_M'
  | 'wizard-vicuna:13b-q3_K_S'
  | 'wizard-vicuna:13b-q4_0'
  | 'wizard-vicuna:13b-q4_1'
  | 'wizard-vicuna:13b-q4_K_M'
  | 'wizard-vicuna:13b-q4_K_S'
  | 'wizard-vicuna:13b-q5_0'
  | 'wizard-vicuna:13b-q5_1'
  | 'wizard-vicuna:13b-q5_K_M'
  | 'wizard-vicuna:13b-q5_K_S'
  | 'wizard-vicuna:13b-q6_K'
  | 'wizard-vicuna:13b-q8_0'
  | 'wizard-vicuna:latest'
  | 'wizardcoder'
  | 'wizardcoder:13b-python'
  | 'wizardcoder:13b-python-fp16'
  | 'wizardcoder:13b-python-q2_K'
  | 'wizardcoder:13b-python-q3_K_L'
  | 'wizardcoder:13b-python-q3_K_M'
  | 'wizardcoder:13b-python-q3_K_S'
  | 'wizardcoder:13b-python-q4_0'
  | 'wizardcoder:13b-python-q4_1'
  | 'wizardcoder:13b-python-q4_K_M'
  | 'wizardcoder:13b-python-q4_K_S'
  | 'wizardcoder:13b-python-q5_0'
  | 'wizardcoder:13b-python-q5_1'
  | 'wizardcoder:13b-python-q5_K_M'
  | 'wizardcoder:13b-python-q5_K_S'
  | 'wizardcoder:13b-python-q6_K'
  | 'wizardcoder:13b-python-q8_0'
  | 'wizardcoder:33b'
  | 'wizardcoder:33b-v1.1'
  | 'wizardcoder:33b-v1.1-fp16'
  | 'wizardcoder:33b-v1.1-q2_K'
  | 'wizardcoder:33b-v1.1-q3_K_L'
  | 'wizardcoder:33b-v1.1-q3_K_M'
  | 'wizardcoder:33b-v1.1-q3_K_S'
  | 'wizardcoder:33b-v1.1-q4_0'
  | 'wizardcoder:33b-v1.1-q4_1'
  | 'wizardcoder:33b-v1.1-q4_K_M'
  | 'wizardcoder:33b-v1.1-q4_K_S'
  | 'wizardcoder:33b-v1.1-q5_0'
  | 'wizardcoder:33b-v1.1-q5_1'
  | 'wizardcoder:33b-v1.1-q5_K_M'
  | 'wizardcoder:33b-v1.1-q5_K_S'
  | 'wizardcoder:33b-v1.1-q6_K'
  | 'wizardcoder:33b-v1.1-q8_0'
  | 'wizardcoder:34b-python'
  | 'wizardcoder:34b-python-fp16'
  | 'wizardcoder:34b-python-q2_K'
  | 'wizardcoder:34b-python-q3_K_L'
  | 'wizardcoder:34b-python-q3_K_M'
  | 'wizardcoder:34b-python-q3_K_S'
  | 'wizardcoder:34b-python-q4_0'
  | 'wizardcoder:34b-python-q4_1'
  | 'wizardcoder:34b-python-q4_K_M'
  | 'wizardcoder:34b-python-q4_K_S'
  | 'wizardcoder:34b-python-q5_0'
  | 'wizardcoder:34b-python-q5_1'
  | 'wizardcoder:34b-python-q5_K_M'
  | 'wizardcoder:34b-python-q5_K_S'
  | 'wizardcoder:34b-python-q6_K'
  | 'wizardcoder:34b-python-q8_0'
  | 'wizardcoder:7b-python'
  | 'wizardcoder:7b-python-fp16'
  | 'wizardcoder:7b-python-q2_K'
  | 'wizardcoder:7b-python-q3_K_L'
  | 'wizardcoder:7b-python-q3_K_M'
  | 'wizardcoder:7b-python-q3_K_S'
  | 'wizardcoder:7b-python-q4_0'
  | 'wizardcoder:7b-python-q4_1'
  | 'wizardcoder:7b-python-q4_K_M'
  | 'wizardcoder:7b-python-q4_K_S'
  | 'wizardcoder:7b-python-q5_0'
  | 'wizardcoder:7b-python-q5_1'
  | 'wizardcoder:7b-python-q5_K_M'
  | 'wizardcoder:7b-python-q5_K_S'
  | 'wizardcoder:7b-python-q6_K'
  | 'wizardcoder:7b-python-q8_0'
  | 'wizardcoder:latest'
  | 'wizardcoder:python'
  | 'wizardlm'
  | 'wizardlm-uncensored'
  | 'wizardlm-uncensored:13b'
  | 'wizardlm-uncensored:13b-llama2'
  | 'wizardlm-uncensored:13b-llama2-fp16'
  | 'wizardlm-uncensored:13b-llama2-q2_K'
  | 'wizardlm-uncensored:13b-llama2-q3_K_L'
  | 'wizardlm-uncensored:13b-llama2-q3_K_M'
  | 'wizardlm-uncensored:13b-llama2-q3_K_S'
  | 'wizardlm-uncensored:13b-llama2-q4_0'
  | 'wizardlm-uncensored:13b-llama2-q4_1'
  | 'wizardlm-uncensored:13b-llama2-q4_K_M'
  | 'wizardlm-uncensored:13b-llama2-q4_K_S'
  | 'wizardlm-uncensored:13b-llama2-q5_0'
  | 'wizardlm-uncensored:13b-llama2-q5_1'
  | 'wizardlm-uncensored:13b-llama2-q5_K_M'
  | 'wizardlm-uncensored:13b-llama2-q5_K_S'
  | 'wizardlm-uncensored:13b-llama2-q6_K'
  | 'wizardlm-uncensored:13b-llama2-q8_0'
  | 'wizardlm-uncensored:latest'
  | 'wizardlm2'
  | 'wizardlm2:7b'
  | 'wizardlm2:7b-fp16'
  | 'wizardlm2:7b-q2_K'
  | 'wizardlm2:7b-q3_K_L'
  | 'wizardlm2:7b-q3_K_M'
  | 'wizardlm2:7b-q3_K_S'
  | 'wizardlm2:7b-q4_0'
  | 'wizardlm2:7b-q4_1'
  | 'wizardlm2:7b-q4_K_M'
  | 'wizardlm2:7b-q4_K_S'
  | 'wizardlm2:7b-q5_0'
  | 'wizardlm2:7b-q5_1'
  | 'wizardlm2:7b-q5_K_M'
  | 'wizardlm2:7b-q5_K_S'
  | 'wizardlm2:7b-q6_K'
  | 'wizardlm2:7b-q8_0'
  | 'wizardlm2:8x22b'
  | 'wizardlm2:8x22b-fp16'
  | 'wizardlm2:8x22b-q2_K'
  | 'wizardlm2:8x22b-q4_0'
  | 'wizardlm2:8x22b-q8_0'
  | 'wizardlm2:latest'
  | 'wizardlm:13b-fp16'
  | 'wizardlm:13b-llama2-fp16'
  | 'wizardlm:13b-llama2-q2_K'
  | 'wizardlm:13b-llama2-q3_K_L'
  | 'wizardlm:13b-llama2-q3_K_M'
  | 'wizardlm:13b-llama2-q3_K_S'
  | 'wizardlm:13b-llama2-q4_0'
  | 'wizardlm:13b-llama2-q4_1'
  | 'wizardlm:13b-llama2-q4_K_M'
  | 'wizardlm:13b-llama2-q4_K_S'
  | 'wizardlm:13b-llama2-q5_0'
  | 'wizardlm:13b-llama2-q5_1'
  | 'wizardlm:13b-llama2-q5_K_M'
  | 'wizardlm:13b-llama2-q5_K_S'
  | 'wizardlm:13b-llama2-q6_K'
  | 'wizardlm:13b-llama2-q8_0'
  | 'wizardlm:13b-q2_K'
  | 'wizardlm:13b-q3_K_L'
  | 'wizardlm:13b-q3_K_M'
  | 'wizardlm:13b-q3_K_S'
  | 'wizardlm:13b-q4_0'
  | 'wizardlm:13b-q4_1'
  | 'wizardlm:13b-q4_K_M'
  | 'wizardlm:13b-q4_K_S'
  | 'wizardlm:13b-q5_0'
  | 'wizardlm:13b-q5_1'
  | 'wizardlm:13b-q5_K_M'
  | 'wizardlm:13b-q5_K_S'
  | 'wizardlm:13b-q6_K'
  | 'wizardlm:13b-q8_0'
  | 'wizardlm:30b-fp16'
  | 'wizardlm:30b-q2_K'
  | 'wizardlm:30b-q3_K_L'
  | 'wizardlm:30b-q3_K_M'
  | 'wizardlm:30b-q3_K_S'
  | 'wizardlm:30b-q4_0'
  | 'wizardlm:30b-q4_1'
  | 'wizardlm:30b-q4_K_M'
  | 'wizardlm:30b-q4_K_S'
  | 'wizardlm:30b-q5_0'
  | 'wizardlm:30b-q5_1'
  | 'wizardlm:30b-q5_K_M'
  | 'wizardlm:30b-q5_K_S'
  | 'wizardlm:30b-q6_K'
  | 'wizardlm:30b-q8_0'
  | 'wizardlm:70b-llama2-q2_K'
  | 'wizardlm:70b-llama2-q3_K_L'
  | 'wizardlm:70b-llama2-q3_K_M'
  | 'wizardlm:70b-llama2-q3_K_S'
  | 'wizardlm:70b-llama2-q4_0'
  | 'wizardlm:70b-llama2-q4_1'
  | 'wizardlm:70b-llama2-q4_K_M'
  | 'wizardlm:70b-llama2-q4_K_S'
  | 'wizardlm:70b-llama2-q5_0'
  | 'wizardlm:70b-llama2-q5_K_M'
  | 'wizardlm:70b-llama2-q5_K_S'
  | 'wizardlm:70b-llama2-q6_K'
  | 'wizardlm:70b-llama2-q8_0'
  | 'wizardlm:7b-fp16'
  | 'wizardlm:7b-q2_K'
  | 'wizardlm:7b-q3_K_L'
  | 'wizardlm:7b-q3_K_M'
  | 'wizardlm:7b-q3_K_S'
  | 'wizardlm:7b-q4_0'
  | 'wizardlm:7b-q4_1'
  | 'wizardlm:7b-q4_K_M'
  | 'wizardlm:7b-q4_K_S'
  | 'wizardlm:7b-q5_0'
  | 'wizardlm:7b-q5_1'
  | 'wizardlm:7b-q5_K_M'
  | 'wizardlm:7b-q5_K_S'
  | 'wizardlm:7b-q6_K'
  | 'wizardlm:7b-q8_0'
  | 'xwinlm'
  | 'xwinlm:13b'
  | 'xwinlm:13b-v0.1'
  | 'xwinlm:13b-v0.1-fp16'
  | 'xwinlm:13b-v0.1-q2_K'
  | 'xwinlm:13b-v0.1-q3_K_L'
  | 'xwinlm:13b-v0.1-q3_K_M'
  | 'xwinlm:13b-v0.1-q3_K_S'
  | 'xwinlm:13b-v0.1-q4_0'
  | 'xwinlm:13b-v0.1-q4_1'
  | 'xwinlm:13b-v0.1-q4_K_M'
  | 'xwinlm:13b-v0.1-q4_K_S'
  | 'xwinlm:13b-v0.1-q5_0'
  | 'xwinlm:13b-v0.1-q5_1'
  | 'xwinlm:13b-v0.1-q5_K_M'
  | 'xwinlm:13b-v0.1-q5_K_S'
  | 'xwinlm:13b-v0.1-q6_K'
  | 'xwinlm:13b-v0.1-q8_0'
  | 'xwinlm:13b-v0.2'
  | 'xwinlm:13b-v0.2-fp16'
  | 'xwinlm:13b-v0.2-q2_K'
  | 'xwinlm:13b-v0.2-q3_K_L'
  | 'xwinlm:13b-v0.2-q3_K_M'
  | 'xwinlm:13b-v0.2-q3_K_S'
  | 'xwinlm:13b-v0.2-q4_0'
  | 'xwinlm:13b-v0.2-q4_1'
  | 'xwinlm:13b-v0.2-q4_K_M'
  | 'xwinlm:13b-v0.2-q4_K_S'
  | 'xwinlm:13b-v0.2-q5_0'
  | 'xwinlm:13b-v0.2-q5_1'
  | 'xwinlm:13b-v0.2-q5_K_M'
  | 'xwinlm:13b-v0.2-q5_K_S'
  | 'xwinlm:13b-v0.2-q6_K'
  | 'xwinlm:13b-v0.2-q8_0'
  | 'xwinlm:70b-v0.1'
  | 'xwinlm:70b-v0.1-fp16'
  | 'xwinlm:70b-v0.1-q2_K'
  | 'xwinlm:70b-v0.1-q3_K_L'
  | 'xwinlm:70b-v0.1-q3_K_M'
  | 'xwinlm:70b-v0.1-q3_K_S'
  | 'xwinlm:70b-v0.1-q4_0'
  | 'xwinlm:70b-v0.1-q4_1'
  | 'xwinlm:70b-v0.1-q4_K_M'
  | 'xwinlm:70b-v0.1-q4_K_S'
  | 'xwinlm:70b-v0.1-q5_0'
  | 'xwinlm:70b-v0.1-q5_1'
  | 'xwinlm:70b-v0.1-q5_K_S'
  | 'xwinlm:70b-v0.1-q6_K'
  | 'xwinlm:70b-v0.1-q8_0'
  | 'xwinlm:7b'
  | 'xwinlm:7b-v0.1'
  | 'xwinlm:7b-v0.1-fp16'
  | 'xwinlm:7b-v0.1-q2_K'
  | 'xwinlm:7b-v0.1-q3_K_L'
  | 'xwinlm:7b-v0.1-q3_K_M'
  | 'xwinlm:7b-v0.1-q3_K_S'
  | 'xwinlm:7b-v0.1-q4_0'
  | 'xwinlm:7b-v0.1-q4_1'
  | 'xwinlm:7b-v0.1-q4_K_M'
  | 'xwinlm:7b-v0.1-q4_K_S'
  | 'xwinlm:7b-v0.1-q5_0'
  | 'xwinlm:7b-v0.1-q5_1'
  | 'xwinlm:7b-v0.1-q5_K_M'
  | 'xwinlm:7b-v0.1-q5_K_S'
  | 'xwinlm:7b-v0.1-q6_K'
  | 'xwinlm:7b-v0.1-q8_0'
  | 'xwinlm:7b-v0.2'
  | 'xwinlm:7b-v0.2-fp16'
  | 'xwinlm:7b-v0.2-q2_K'
  | 'xwinlm:7b-v0.2-q3_K_L'
  | 'xwinlm:7b-v0.2-q3_K_S'
  | 'xwinlm:7b-v0.2-q4_0'
  | 'xwinlm:7b-v0.2-q4_1'
  | 'xwinlm:7b-v0.2-q4_K_M'
  | 'xwinlm:7b-v0.2-q4_K_S'
  | 'xwinlm:7b-v0.2-q5_0'
  | 'xwinlm:7b-v0.2-q5_K_M'
  | 'xwinlm:7b-v0.2-q5_K_S'
  | 'xwinlm:7b-v0.2-q6_K'
  | 'xwinlm:7b-v0.2-q8_0'
  | 'xwinlm:latest'
  | 'yarn-llama2'
  | 'yarn-llama2:13b'
  | 'yarn-llama2:13b-128k'
  | 'yarn-llama2:13b-128k-fp16'
  | 'yarn-llama2:13b-128k-q2_K'
  | 'yarn-llama2:13b-128k-q3_K_L'
  | 'yarn-llama2:13b-128k-q3_K_M'
  | 'yarn-llama2:13b-128k-q3_K_S'
  | 'yarn-llama2:13b-128k-q4_0'
  | 'yarn-llama2:13b-128k-q4_1'
  | 'yarn-llama2:13b-128k-q4_K_M'
  | 'yarn-llama2:13b-128k-q4_K_S'
  | 'yarn-llama2:13b-128k-q5_0'
  | 'yarn-llama2:13b-128k-q5_1'
  | 'yarn-llama2:13b-128k-q5_K_M'
  | 'yarn-llama2:13b-128k-q5_K_S'
  | 'yarn-llama2:13b-128k-q6_K'
  | 'yarn-llama2:13b-128k-q8_0'
  | 'yarn-llama2:13b-64k'
  | 'yarn-llama2:13b-64k-fp16'
  | 'yarn-llama2:13b-64k-q2_K'
  | 'yarn-llama2:13b-64k-q3_K_L'
  | 'yarn-llama2:13b-64k-q3_K_M'
  | 'yarn-llama2:13b-64k-q3_K_S'
  | 'yarn-llama2:13b-64k-q4_0'
  | 'yarn-llama2:13b-64k-q4_1'
  | 'yarn-llama2:13b-64k-q4_K_M'
  | 'yarn-llama2:13b-64k-q4_K_S'
  | 'yarn-llama2:13b-64k-q5_0'
  | 'yarn-llama2:13b-64k-q5_1'
  | 'yarn-llama2:13b-64k-q5_K_M'
  | 'yarn-llama2:13b-64k-q5_K_S'
  | 'yarn-llama2:13b-64k-q6_K'
  | 'yarn-llama2:13b-64k-q8_0'
  | 'yarn-llama2:7b'
  | 'yarn-llama2:7b-128k'
  | 'yarn-llama2:7b-128k-fp16'
  | 'yarn-llama2:7b-128k-q2_K'
  | 'yarn-llama2:7b-128k-q3_K_L'
  | 'yarn-llama2:7b-128k-q3_K_M'
  | 'yarn-llama2:7b-128k-q3_K_S'
  | 'yarn-llama2:7b-128k-q4_0'
  | 'yarn-llama2:7b-128k-q4_1'
  | 'yarn-llama2:7b-128k-q4_K_M'
  | 'yarn-llama2:7b-128k-q4_K_S'
  | 'yarn-llama2:7b-128k-q5_0'
  | 'yarn-llama2:7b-128k-q5_1'
  | 'yarn-llama2:7b-128k-q5_K_M'
  | 'yarn-llama2:7b-128k-q5_K_S'
  | 'yarn-llama2:7b-128k-q6_K'
  | 'yarn-llama2:7b-128k-q8_0'
  | 'yarn-llama2:7b-64k'
  | 'yarn-llama2:7b-64k-fp16'
  | 'yarn-llama2:7b-64k-q2_K'
  | 'yarn-llama2:7b-64k-q3_K_L'
  | 'yarn-llama2:7b-64k-q3_K_M'
  | 'yarn-llama2:7b-64k-q3_K_S'
  | 'yarn-llama2:7b-64k-q4_0'
  | 'yarn-llama2:7b-64k-q4_1'
  | 'yarn-llama2:7b-64k-q4_K_M'
  | 'yarn-llama2:7b-64k-q4_K_S'
  | 'yarn-llama2:7b-64k-q5_0'
  | 'yarn-llama2:7b-64k-q5_1'
  | 'yarn-llama2:7b-64k-q5_K_M'
  | 'yarn-llama2:7b-64k-q5_K_S'
  | 'yarn-llama2:7b-64k-q6_K'
  | 'yarn-llama2:7b-64k-q8_0'
  | 'yarn-llama2:latest'
  | 'yarn-mistral'
  | 'yarn-mistral:7b'
  | 'yarn-mistral:7b-128k'
  | 'yarn-mistral:7b-128k-fp16'
  | 'yarn-mistral:7b-128k-q2_K'
  | 'yarn-mistral:7b-128k-q3_K_L'
  | 'yarn-mistral:7b-128k-q3_K_M'
  | 'yarn-mistral:7b-128k-q3_K_S'
  | 'yarn-mistral:7b-128k-q4_0'
  | 'yarn-mistral:7b-128k-q4_1'
  | 'yarn-mistral:7b-128k-q4_K_M'
  | 'yarn-mistral:7b-128k-q4_K_S'
  | 'yarn-mistral:7b-128k-q5_0'
  | 'yarn-mistral:7b-128k-q5_1'
  | 'yarn-mistral:7b-128k-q5_K_M'
  | 'yarn-mistral:7b-128k-q5_K_S'
  | 'yarn-mistral:7b-128k-q6_K'
  | 'yarn-mistral:7b-128k-q8_0'
  | 'yarn-mistral:7b-64k'
  | 'yarn-mistral:7b-64k-q2_K'
  | 'yarn-mistral:7b-64k-q3_K_L'
  | 'yarn-mistral:7b-64k-q3_K_M'
  | 'yarn-mistral:7b-64k-q3_K_S'
  | 'yarn-mistral:7b-64k-q4_0'
  | 'yarn-mistral:7b-64k-q4_1'
  | 'yarn-mistral:7b-64k-q4_K_M'
  | 'yarn-mistral:7b-64k-q4_K_S'
  | 'yarn-mistral:7b-64k-q5_0'
  | 'yarn-mistral:7b-64k-q5_1'
  | 'yarn-mistral:7b-64k-q5_K_M'
  | 'yarn-mistral:7b-64k-q5_K_S'
  | 'yarn-mistral:7b-64k-q6_K'
  | 'yarn-mistral:7b-64k-q8_0'
  | 'yarn-mistral:latest'
  | 'yi'
  | 'yi-coder'
  | 'yi-coder:1.5b'
  | 'yi-coder:1.5b-base'
  | 'yi-coder:1.5b-base-fp16'
  | 'yi-coder:1.5b-base-q2_K'
  | 'yi-coder:1.5b-base-q3_K_L'
  | 'yi-coder:1.5b-base-q3_K_M'
  | 'yi-coder:1.5b-base-q3_K_S'
  | 'yi-coder:1.5b-base-q4_0'
  | 'yi-coder:1.5b-base-q4_1'
  | 'yi-coder:1.5b-base-q4_K_M'
  | 'yi-coder:1.5b-base-q4_K_S'
  | 'yi-coder:1.5b-base-q5_0'
  | 'yi-coder:1.5b-base-q5_1'
  | 'yi-coder:1.5b-base-q5_K_M'
  | 'yi-coder:1.5b-base-q5_K_S'
  | 'yi-coder:1.5b-base-q6_K'
  | 'yi-coder:1.5b-base-q8_0'
  | 'yi-coder:1.5b-chat'
  | 'yi-coder:1.5b-chat-fp16'
  | 'yi-coder:1.5b-chat-q2_K'
  | 'yi-coder:1.5b-chat-q3_K_L'
  | 'yi-coder:1.5b-chat-q3_K_M'
  | 'yi-coder:1.5b-chat-q3_K_S'
  | 'yi-coder:1.5b-chat-q4_0'
  | 'yi-coder:1.5b-chat-q4_1'
  | 'yi-coder:1.5b-chat-q4_K_M'
  | 'yi-coder:1.5b-chat-q4_K_S'
  | 'yi-coder:1.5b-chat-q5_0'
  | 'yi-coder:1.5b-chat-q5_1'
  | 'yi-coder:1.5b-chat-q5_K_M'
  | 'yi-coder:1.5b-chat-q5_K_S'
  | 'yi-coder:1.5b-chat-q6_K'
  | 'yi-coder:1.5b-chat-q8_0'
  | 'yi-coder:9b'
  | 'yi-coder:9b-base'
  | 'yi-coder:9b-base-fp16'
  | 'yi-coder:9b-base-q2_K'
  | 'yi-coder:9b-base-q3_K_L'
  | 'yi-coder:9b-base-q3_K_M'
  | 'yi-coder:9b-base-q3_K_S'
  | 'yi-coder:9b-base-q4_0'
  | 'yi-coder:9b-base-q4_1'
  | 'yi-coder:9b-base-q4_K_M'
  | 'yi-coder:9b-base-q4_K_S'
  | 'yi-coder:9b-base-q5_0'
  | 'yi-coder:9b-base-q5_1'
  | 'yi-coder:9b-base-q5_K_M'
  | 'yi-coder:9b-base-q5_K_S'
  | 'yi-coder:9b-base-q6_K'
  | 'yi-coder:9b-base-q8_0'
  | 'yi-coder:9b-chat'
  | 'yi-coder:9b-chat-fp16'
  | 'yi-coder:9b-chat-q2_K'
  | 'yi-coder:9b-chat-q3_K_L'
  | 'yi-coder:9b-chat-q3_K_M'
  | 'yi-coder:9b-chat-q3_K_S'
  | 'yi-coder:9b-chat-q4_0'
  | 'yi-coder:9b-chat-q4_1'
  | 'yi-coder:9b-chat-q4_K_M'
  | 'yi-coder:9b-chat-q4_K_S'
  | 'yi-coder:9b-chat-q5_0'
  | 'yi-coder:9b-chat-q5_1'
  | 'yi-coder:9b-chat-q5_K_M'
  | 'yi-coder:9b-chat-q5_K_S'
  | 'yi-coder:9b-chat-q6_K'
  | 'yi-coder:9b-chat-q8_0'
  | 'yi-coder:latest'
  | 'yi:34b'
  | 'yi:34b-chat'
  | 'yi:34b-chat-fp16'
  | 'yi:34b-chat-q2_K'
  | 'yi:34b-chat-q3_K_L'
  | 'yi:34b-chat-q3_K_M'
  | 'yi:34b-chat-q3_K_S'
  | 'yi:34b-chat-q4_0'
  | 'yi:34b-chat-q4_1'
  | 'yi:34b-chat-q4_K_M'
  | 'yi:34b-chat-q4_K_S'
  | 'yi:34b-chat-q5_0'
  | 'yi:34b-chat-q5_1'
  | 'yi:34b-chat-q5_K_M'
  | 'yi:34b-chat-q5_K_S'
  | 'yi:34b-chat-q6_K'
  | 'yi:34b-chat-q8_0'
  | 'yi:34b-chat-v1.5-fp16'
  | 'yi:34b-chat-v1.5-q2_K'
  | 'yi:34b-chat-v1.5-q3_K_L'
  | 'yi:34b-chat-v1.5-q3_K_M'
  | 'yi:34b-chat-v1.5-q3_K_S'
  | 'yi:34b-chat-v1.5-q4_0'
  | 'yi:34b-chat-v1.5-q4_1'
  | 'yi:34b-chat-v1.5-q4_K_M'
  | 'yi:34b-chat-v1.5-q4_K_S'
  | 'yi:34b-chat-v1.5-q5_0'
  | 'yi:34b-chat-v1.5-q5_1'
  | 'yi:34b-chat-v1.5-q5_K_M'
  | 'yi:34b-chat-v1.5-q5_K_S'
  | 'yi:34b-chat-v1.5-q6_K'
  | 'yi:34b-chat-v1.5-q8_0'
  | 'yi:34b-q2_K'
  | 'yi:34b-q3_K_L'
  | 'yi:34b-q3_K_M'
  | 'yi:34b-q3_K_S'
  | 'yi:34b-q4_0'
  | 'yi:34b-q4_1'
  | 'yi:34b-q4_K_M'
  | 'yi:34b-q4_K_S'
  | 'yi:34b-q5_0'
  | 'yi:34b-q5_1'
  | 'yi:34b-q5_K_S'
  | 'yi:34b-q6_K'
  | 'yi:34b-v1.5'
  | 'yi:34b-v1.5-fp16'
  | 'yi:34b-v1.5-q2_K'
  | 'yi:34b-v1.5-q3_K_L'
  | 'yi:34b-v1.5-q3_K_M'
  | 'yi:34b-v1.5-q3_K_S'
  | 'yi:34b-v1.5-q4_0'
  | 'yi:34b-v1.5-q4_1'
  | 'yi:34b-v1.5-q4_K_M'
  | 'yi:34b-v1.5-q4_K_S'
  | 'yi:34b-v1.5-q5_0'
  | 'yi:34b-v1.5-q5_1'
  | 'yi:34b-v1.5-q5_K_M'
  | 'yi:34b-v1.5-q5_K_S'
  | 'yi:34b-v1.5-q6_K'
  | 'yi:34b-v1.5-q8_0'
  | 'yi:6b'
  | 'yi:6b-200k'
  | 'yi:6b-200k-fp16'
  | 'yi:6b-200k-q2_K'
  | 'yi:6b-200k-q3_K_L'
  | 'yi:6b-200k-q3_K_M'
  | 'yi:6b-200k-q3_K_S'
  | 'yi:6b-200k-q4_0'
  | 'yi:6b-200k-q4_1'
  | 'yi:6b-200k-q4_K_M'
  | 'yi:6b-200k-q4_K_S'
  | 'yi:6b-200k-q5_0'
  | 'yi:6b-200k-q5_1'
  | 'yi:6b-200k-q5_K_M'
  | 'yi:6b-200k-q5_K_S'
  | 'yi:6b-200k-q6_K'
  | 'yi:6b-200k-q8_0'
  | 'yi:6b-chat'
  | 'yi:6b-chat-fp16'
  | 'yi:6b-chat-q2_K'
  | 'yi:6b-chat-q3_K_L'
  | 'yi:6b-chat-q3_K_M'
  | 'yi:6b-chat-q3_K_S'
  | 'yi:6b-chat-q4_0'
  | 'yi:6b-chat-q4_1'
  | 'yi:6b-chat-q4_K_M'
  | 'yi:6b-chat-q4_K_S'
  | 'yi:6b-chat-q5_0'
  | 'yi:6b-chat-q5_1'
  | 'yi:6b-chat-q5_K_M'
  | 'yi:6b-chat-q5_K_S'
  | 'yi:6b-chat-q6_K'
  | 'yi:6b-chat-q8_0'
  | 'yi:6b-chat-v1.5-fp16'
  | 'yi:6b-chat-v1.5-q2_K'
  | 'yi:6b-chat-v1.5-q3_K_L'
  | 'yi:6b-chat-v1.5-q3_K_M'
  | 'yi:6b-chat-v1.5-q3_K_S'
  | 'yi:6b-chat-v1.5-q4_0'
  | 'yi:6b-chat-v1.5-q4_1'
  | 'yi:6b-chat-v1.5-q4_K_M'
  | 'yi:6b-chat-v1.5-q4_K_S'
  | 'yi:6b-chat-v1.5-q5_0'
  | 'yi:6b-chat-v1.5-q5_1'
  | 'yi:6b-chat-v1.5-q5_K_M'
  | 'yi:6b-chat-v1.5-q5_K_S'
  | 'yi:6b-chat-v1.5-q6_K'
  | 'yi:6b-chat-v1.5-q8_0'
  | 'yi:6b-fp16'
  | 'yi:6b-q2_K'
  | 'yi:6b-q3_K_L'
  | 'yi:6b-q3_K_M'
  | 'yi:6b-q3_K_S'
  | 'yi:6b-q4_0'
  | 'yi:6b-q4_1'
  | 'yi:6b-q4_K_M'
  | 'yi:6b-q4_K_S'
  | 'yi:6b-q5_0'
  | 'yi:6b-q5_1'
  | 'yi:6b-q5_K_M'
  | 'yi:6b-q5_K_S'
  | 'yi:6b-q6_K'
  | 'yi:6b-q8_0'
  | 'yi:6b-v1.5'
  | 'yi:6b-v1.5-fp16'
  | 'yi:6b-v1.5-q2_K'
  | 'yi:6b-v1.5-q3_K_L'
  | 'yi:6b-v1.5-q3_K_M'
  | 'yi:6b-v1.5-q3_K_S'
  | 'yi:6b-v1.5-q4_0'
  | 'yi:6b-v1.5-q4_1'
  | 'yi:6b-v1.5-q4_K_M'
  | 'yi:6b-v1.5-q4_K_S'
  | 'yi:6b-v1.5-q5_0'
  | 'yi:6b-v1.5-q5_1'
  | 'yi:6b-v1.5-q5_K_M'
  | 'yi:6b-v1.5-q5_K_S'
  | 'yi:6b-v1.5-q6_K'
  | 'yi:6b-v1.5-q8_0'
  | 'yi:9b'
  | 'yi:9b-chat'
  | 'yi:9b-chat-v1.5-fp16'
  | 'yi:9b-chat-v1.5-q2_K'
  | 'yi:9b-chat-v1.5-q3_K_L'
  | 'yi:9b-chat-v1.5-q3_K_M'
  | 'yi:9b-chat-v1.5-q3_K_S'
  | 'yi:9b-chat-v1.5-q4_0'
  | 'yi:9b-chat-v1.5-q4_1'
  | 'yi:9b-chat-v1.5-q4_K_M'
  | 'yi:9b-chat-v1.5-q4_K_S'
  | 'yi:9b-chat-v1.5-q5_0'
  | 'yi:9b-chat-v1.5-q5_1'
  | 'yi:9b-chat-v1.5-q5_K_M'
  | 'yi:9b-chat-v1.5-q5_K_S'
  | 'yi:9b-chat-v1.5-q6_K'
  | 'yi:9b-chat-v1.5-q8_0'
  | 'yi:9b-v1.5'
  | 'yi:9b-v1.5-fp16'
  | 'yi:9b-v1.5-q2_K'
  | 'yi:9b-v1.5-q3_K_L'
  | 'yi:9b-v1.5-q3_K_M'
  | 'yi:9b-v1.5-q3_K_S'
  | 'yi:9b-v1.5-q4_0'
  | 'yi:9b-v1.5-q4_1'
  | 'yi:9b-v1.5-q4_K_M'
  | 'yi:9b-v1.5-q4_K_S'
  | 'yi:9b-v1.5-q5_0'
  | 'yi:9b-v1.5-q5_1'
  | 'yi:9b-v1.5-q5_K_M'
  | 'yi:9b-v1.5-q5_K_S'
  | 'yi:9b-v1.5-q6_K'
  | 'yi:9b-v1.5-q8_0'
  | 'yi:latest'
  | 'yi:v1.5'
  | 'zephyr'
  | 'zephyr:141b'
  | 'zephyr:141b-v0.1'
  | 'zephyr:141b-v0.1-fp16'
  | 'zephyr:141b-v0.1-q2_K'
  | 'zephyr:141b-v0.1-q4_0'
  | 'zephyr:141b-v0.1-q8_0'
  | 'zephyr:7b'
  | 'zephyr:7b-alpha'
  | 'zephyr:7b-alpha-fp16'
  | 'zephyr:7b-alpha-q2_K'
  | 'zephyr:7b-alpha-q3_K_L'
  | 'zephyr:7b-alpha-q3_K_M'
  | 'zephyr:7b-alpha-q3_K_S'
  | 'zephyr:7b-alpha-q4_0'
  | 'zephyr:7b-alpha-q4_1'
  | 'zephyr:7b-alpha-q4_K_M'
  | 'zephyr:7b-alpha-q4_K_S'
  | 'zephyr:7b-alpha-q5_0'
  | 'zephyr:7b-alpha-q5_1'
  | 'zephyr:7b-alpha-q5_K_M'
  | 'zephyr:7b-alpha-q5_K_S'
  | 'zephyr:7b-alpha-q6_K'
  | 'zephyr:7b-alpha-q8_0'
  | 'zephyr:7b-beta'
  | 'zephyr:7b-beta-fp16'
  | 'zephyr:7b-beta-q2_K'
  | 'zephyr:7b-beta-q3_K_L'
  | 'zephyr:7b-beta-q3_K_M'
  | 'zephyr:7b-beta-q3_K_S'
  | 'zephyr:7b-beta-q4_0'
  | 'zephyr:7b-beta-q4_1'
  | 'zephyr:7b-beta-q4_K_M'
  | 'zephyr:7b-beta-q4_K_S'
  | 'zephyr:7b-beta-q5_0'
  | 'zephyr:7b-beta-q5_1'
  | 'zephyr:7b-beta-q5_K_M'
  | 'zephyr:7b-beta-q5_K_S'
  | 'zephyr:7b-beta-q6_K'
  | 'zephyr:7b-beta-q8_0'
  | 'zephyr:latest';

// Embedding Models
export type OllamaEmbeddingModelId =
  | 'all-minilm'
  | 'all-minilm:22m'
  | 'all-minilm:22m-l6-v2-fp16'
  | 'all-minilm:33m'
  | 'all-minilm:33m-l12-v2-fp16'
  | 'all-minilm:l12'
  | 'all-minilm:l12-v2'
  | 'all-minilm:l6'
  | 'all-minilm:l6-v2'
  | 'all-minilm:latest'
  | 'all-minilm:v2'
  | 'bge-large'
  | 'bge-large:335m'
  | 'bge-large:335m-en-v1.5-fp16'
  | 'bge-large:latest'
  | 'bge-m3'
  | 'bge-m3:567m'
  | 'bge-m3:567m-fp16'
  | 'bge-m3:latest'
  | 'granite-embedding'
  | 'granite-embedding:278m'
  | 'granite-embedding:278m-fp16'
  | 'granite-embedding:30m'
  | 'granite-embedding:30m-en'
  | 'granite-embedding:30m-en-fp16'
  | 'granite-embedding:latest'
  | 'mxbai-embed-large'
  | 'mxbai-embed-large:335m'
  | 'mxbai-embed-large:335m-v1-fp16'
  | 'mxbai-embed-large:latest'
  | 'mxbai-embed-large:v1'
  | 'nomic-embed-text'
  | 'nomic-embed-text:137m-v1.5-fp16'
  | 'nomic-embed-text:latest'
  | 'nomic-embed-text:v1.5'
  | 'paraphrase-multilingual'
  | 'paraphrase-multilingual:278m'
  | 'paraphrase-multilingual:278m-mpnet-base-v2-fp16'
  | 'paraphrase-multilingual:latest'
  | 'snowflake-arctic-embed'
  | 'snowflake-arctic-embed2'
  | 'snowflake-arctic-embed2:568m'
  | 'snowflake-arctic-embed2:568m-l-fp16'
  | 'snowflake-arctic-embed2:latest'
  | 'snowflake-arctic-embed:110m'
  | 'snowflake-arctic-embed:110m-m-fp16'
  | 'snowflake-arctic-embed:137m'
  | 'snowflake-arctic-embed:137m-m-long-fp16'
  | 'snowflake-arctic-embed:22m'
  | 'snowflake-arctic-embed:22m-xs-fp16'
  | 'snowflake-arctic-embed:335m'
  | 'snowflake-arctic-embed:335m-l-fp16'
  | 'snowflake-arctic-embed:33m'
  | 'snowflake-arctic-embed:33m-s-fp16'
  | 'snowflake-arctic-embed:l'
  | 'snowflake-arctic-embed:latest'
  | 'snowflake-arctic-embed:m'
  | 'snowflake-arctic-embed:m-long'
  | 'snowflake-arctic-embed:s'
  | 'snowflake-arctic-embed:xs';

// Vision Models
export type OllamaVisionModelId =
  | 'bakllava'
  | 'bakllava:7b'
  | 'bakllava:7b-v1-fp16'
  | 'bakllava:7b-v1-q2_K'
  | 'bakllava:7b-v1-q3_K_L'
  | 'bakllava:7b-v1-q3_K_M'
  | 'bakllava:7b-v1-q3_K_S'
  | 'bakllava:7b-v1-q4_0'
  | 'bakllava:7b-v1-q4_1'
  | 'bakllava:7b-v1-q4_K_M'
  | 'bakllava:7b-v1-q4_K_S'
  | 'bakllava:7b-v1-q5_0'
  | 'bakllava:7b-v1-q5_1'
  | 'bakllava:7b-v1-q5_K_M'
  | 'bakllava:7b-v1-q5_K_S'
  | 'bakllava:7b-v1-q6_K'
  | 'bakllava:7b-v1-q8_0'
  | 'bakllava:latest'
  | 'gemma3'
  | 'gemma3:12b'
  | 'gemma3:12b-it-fp16'
  | 'gemma3:12b-it-q4_K_M'
  | 'gemma3:12b-it-q8_0'
  | 'gemma3:12b-it-qat'
  | 'gemma3:1b'
  | 'gemma3:1b-it-fp16'
  | 'gemma3:1b-it-q4_K_M'
  | 'gemma3:1b-it-q8_0'
  | 'gemma3:1b-it-qat'
  | 'gemma3:27b'
  | 'gemma3:27b-it-fp16'
  | 'gemma3:27b-it-q4_K_M'
  | 'gemma3:27b-it-q8_0'
  | 'gemma3:27b-it-qat'
  | 'gemma3:4b'
  | 'gemma3:4b-it-fp16'
  | 'gemma3:4b-it-q4_K_M'
  | 'gemma3:4b-it-q8_0'
  | 'gemma3:4b-it-qat'
  | 'gemma3:latest'
  | 'granite3.2-vision'
  | 'granite3.2-vision:2b'
  | 'granite3.2-vision:2b-fp16'
  | 'granite3.2-vision:2b-q4_K_M'
  | 'granite3.2-vision:2b-q8_0'
  | 'granite3.2-vision:latest'
  | 'llama3.2-vision'
  | 'llama3.2-vision:11b'
  | 'llama3.2-vision:11b-instruct-fp16'
  | 'llama3.2-vision:11b-instruct-q4_K_M'
  | 'llama3.2-vision:11b-instruct-q8_0'
  | 'llama3.2-vision:90b'
  | 'llama3.2-vision:90b-instruct-fp16'
  | 'llama3.2-vision:90b-instruct-q4_K_M'
  | 'llama3.2-vision:90b-instruct-q8_0'
  | 'llama3.2-vision:latest'
  | 'llama4'
  | 'llama4:128x17b'
  | 'llama4:16x17b'
  | 'llama4:17b-maverick-128e-instruct-fp16'
  | 'llama4:17b-maverick-128e-instruct-q4_K_M'
  | 'llama4:17b-maverick-128e-instruct-q8_0'
  | 'llama4:17b-scout-16e-instruct-fp16'
  | 'llama4:17b-scout-16e-instruct-q4_K_M'
  | 'llama4:17b-scout-16e-instruct-q8_0'
  | 'llama4:latest'
  | 'llama4:maverick'
  | 'llama4:scout'
  | 'llava'
  | 'llava-llama3'
  | 'llava-llama3:8b'
  | 'llava-llama3:8b-v1.1-fp16'
  | 'llava-llama3:8b-v1.1-q4_0'
  | 'llava-llama3:latest'
  | 'llava-phi3'
  | 'llava-phi3:3.8b'
  | 'llava-phi3:3.8b-mini-fp16'
  | 'llava-phi3:3.8b-mini-q4_0'
  | 'llava-phi3:latest'
  | 'llava:13b'
  | 'llava:13b-v1.5-fp16'
  | 'llava:13b-v1.5-q2_K'
  | 'llava:13b-v1.5-q3_K_L'
  | 'llava:13b-v1.5-q3_K_M'
  | 'llava:13b-v1.5-q3_K_S'
  | 'llava:13b-v1.5-q4_0'
  | 'llava:13b-v1.5-q4_1'
  | 'llava:13b-v1.5-q4_K_M'
  | 'llava:13b-v1.5-q4_K_S'
  | 'llava:13b-v1.5-q5_0'
  | 'llava:13b-v1.5-q5_1'
  | 'llava:13b-v1.5-q5_K_M'
  | 'llava:13b-v1.5-q5_K_S'
  | 'llava:13b-v1.5-q6_K'
  | 'llava:13b-v1.5-q8_0'
  | 'llava:13b-v1.6'
  | 'llava:13b-v1.6-vicuna-fp16'
  | 'llava:13b-v1.6-vicuna-q2_K'
  | 'llava:13b-v1.6-vicuna-q3_K_L'
  | 'llava:13b-v1.6-vicuna-q3_K_M'
  | 'llava:13b-v1.6-vicuna-q3_K_S'
  | 'llava:13b-v1.6-vicuna-q4_0'
  | 'llava:13b-v1.6-vicuna-q4_1'
  | 'llava:13b-v1.6-vicuna-q4_K_M'
  | 'llava:13b-v1.6-vicuna-q4_K_S'
  | 'llava:13b-v1.6-vicuna-q5_0'
  | 'llava:13b-v1.6-vicuna-q5_1'
  | 'llava:13b-v1.6-vicuna-q5_K_M'
  | 'llava:13b-v1.6-vicuna-q5_K_S'
  | 'llava:13b-v1.6-vicuna-q6_K'
  | 'llava:13b-v1.6-vicuna-q8_0'
  | 'llava:34b'
  | 'llava:34b-v1.6'
  | 'llava:34b-v1.6-fp16'
  | 'llava:34b-v1.6-q2_K'
  | 'llava:34b-v1.6-q3_K_L'
  | 'llava:34b-v1.6-q3_K_M'
  | 'llava:34b-v1.6-q3_K_S'
  | 'llava:34b-v1.6-q4_0'
  | 'llava:34b-v1.6-q4_1'
  | 'llava:34b-v1.6-q4_K_M'
  | 'llava:34b-v1.6-q4_K_S'
  | 'llava:34b-v1.6-q5_0'
  | 'llava:34b-v1.6-q5_1'
  | 'llava:34b-v1.6-q5_K_M'
  | 'llava:34b-v1.6-q5_K_S'
  | 'llava:34b-v1.6-q6_K'
  | 'llava:34b-v1.6-q8_0'
  | 'llava:7b'
  | 'llava:7b-v1.5-fp16'
  | 'llava:7b-v1.5-q2_K'
  | 'llava:7b-v1.5-q3_K_L'
  | 'llava:7b-v1.5-q3_K_M'
  | 'llava:7b-v1.5-q3_K_S'
  | 'llava:7b-v1.5-q4_0'
  | 'llava:7b-v1.5-q4_1'
  | 'llava:7b-v1.5-q4_K_M'
  | 'llava:7b-v1.5-q4_K_S'
  | 'llava:7b-v1.5-q5_0'
  | 'llava:7b-v1.5-q5_1'
  | 'llava:7b-v1.5-q5_K_M'
  | 'llava:7b-v1.5-q5_K_S'
  | 'llava:7b-v1.5-q6_K'
  | 'llava:7b-v1.5-q8_0'
  | 'llava:7b-v1.6'
  | 'llava:7b-v1.6-mistral-fp16'
  | 'llava:7b-v1.6-mistral-q2_K'
  | 'llava:7b-v1.6-mistral-q3_K_L'
  | 'llava:7b-v1.6-mistral-q3_K_M'
  | 'llava:7b-v1.6-mistral-q3_K_S'
  | 'llava:7b-v1.6-mistral-q4_0'
  | 'llava:7b-v1.6-mistral-q4_1'
  | 'llava:7b-v1.6-mistral-q4_K_M'
  | 'llava:7b-v1.6-mistral-q4_K_S'
  | 'llava:7b-v1.6-mistral-q5_0'
  | 'llava:7b-v1.6-mistral-q5_1'
  | 'llava:7b-v1.6-mistral-q5_K_M'
  | 'llava:7b-v1.6-mistral-q5_K_S'
  | 'llava:7b-v1.6-mistral-q6_K'
  | 'llava:7b-v1.6-mistral-q8_0'
  | 'llava:7b-v1.6-vicuna-fp16'
  | 'llava:7b-v1.6-vicuna-q2_K'
  | 'llava:7b-v1.6-vicuna-q3_K_L'
  | 'llava:7b-v1.6-vicuna-q3_K_M'
  | 'llava:7b-v1.6-vicuna-q3_K_S'
  | 'llava:7b-v1.6-vicuna-q4_0'
  | 'llava:7b-v1.6-vicuna-q4_1'
  | 'llava:7b-v1.6-vicuna-q4_K_M'
  | 'llava:7b-v1.6-vicuna-q4_K_S'
  | 'llava:7b-v1.6-vicuna-q5_0'
  | 'llava:7b-v1.6-vicuna-q5_1'
  | 'llava:7b-v1.6-vicuna-q5_K_M'
  | 'llava:7b-v1.6-vicuna-q5_K_S'
  | 'llava:7b-v1.6-vicuna-q6_K'
  | 'llava:7b-v1.6-vicuna-q8_0'
  | 'llava:latest'
  | 'llava:v1.6'
  | 'minicpm-v'
  | 'minicpm-v:8b'
  | 'minicpm-v:8b-2.6-fp16'
  | 'minicpm-v:8b-2.6-q2_K'
  | 'minicpm-v:8b-2.6-q3_K_L'
  | 'minicpm-v:8b-2.6-q3_K_M'
  | 'minicpm-v:8b-2.6-q3_K_S'
  | 'minicpm-v:8b-2.6-q4_0'
  | 'minicpm-v:8b-2.6-q4_1'
  | 'minicpm-v:8b-2.6-q4_K_M'
  | 'minicpm-v:8b-2.6-q4_K_S'
  | 'minicpm-v:8b-2.6-q5_0'
  | 'minicpm-v:8b-2.6-q5_1'
  | 'minicpm-v:8b-2.6-q5_K_M'
  | 'minicpm-v:8b-2.6-q5_K_S'
  | 'minicpm-v:8b-2.6-q6_K'
  | 'minicpm-v:8b-2.6-q8_0'
  | 'minicpm-v:latest'
  | 'mistral-small3.1'
  | 'mistral-small3.1:24b'
  | 'mistral-small3.1:24b-instruct-2503-fp16'
  | 'mistral-small3.1:24b-instruct-2503-q4_K_M'
  | 'mistral-small3.1:24b-instruct-2503-q8_0'
  | 'mistral-small3.1:latest'
  | 'mistral-small3.2'
  | 'mistral-small3.2:24b'
  | 'mistral-small3.2:24b-instruct-2506-fp16'
  | 'mistral-small3.2:24b-instruct-2506-q4_K_M'
  | 'mistral-small3.2:24b-instruct-2506-q8_0'
  | 'mistral-small3.2:latest'
  | 'moondream'
  | 'moondream:1.8b'
  | 'moondream:1.8b-v2-fp16'
  | 'moondream:1.8b-v2-q2_K'
  | 'moondream:1.8b-v2-q3_K_L'
  | 'moondream:1.8b-v2-q3_K_M'
  | 'moondream:1.8b-v2-q3_K_S'
  | 'moondream:1.8b-v2-q4_0'
  | 'moondream:1.8b-v2-q4_1'
  | 'moondream:1.8b-v2-q4_K_M'
  | 'moondream:1.8b-v2-q4_K_S'
  | 'moondream:1.8b-v2-q5_0'
  | 'moondream:1.8b-v2-q5_1'
  | 'moondream:1.8b-v2-q5_K_M'
  | 'moondream:1.8b-v2-q5_K_S'
  | 'moondream:1.8b-v2-q6_K'
  | 'moondream:1.8b-v2-q8_0'
  | 'moondream:latest'
  | 'moondream:v2'
  | 'qwen2.5vl'
  | 'qwen2.5vl:32b'
  | 'qwen2.5vl:32b-fp16'
  | 'qwen2.5vl:32b-q4_K_M'
  | 'qwen2.5vl:32b-q8_0'
  | 'qwen2.5vl:3b'
  | 'qwen2.5vl:3b-fp16'
  | 'qwen2.5vl:3b-q4_K_M'
  | 'qwen2.5vl:3b-q8_0'
  | 'qwen2.5vl:72b'
  | 'qwen2.5vl:72b-fp16'
  | 'qwen2.5vl:72b-q4_K_M'
  | 'qwen2.5vl:72b-q8_0'
  | 'qwen2.5vl:7b'
  | 'qwen2.5vl:7b-fp16'
  | 'qwen2.5vl:7b-q4_K_M'
  | 'qwen2.5vl:7b-q8_0'
  | 'qwen2.5vl:latest';

// All Models Union Type
export type OllamaModelId =
  | OllamaChatModelId
  | OllamaEmbeddingModelId
  | OllamaVisionModelId;

// All model IDs array (includes models)
export const ollamaModelIds = [
  'alfred',
  'alfred:40b',
  'alfred:40b-1023-q4_0',
  'alfred:40b-1023-q4_1',
  'alfred:40b-1023-q5_0',
  'alfred:40b-1023-q5_1',
  'alfred:40b-1023-q8_0',
  'alfred:latest',
  'athene-v2',
  'athene-v2:72b',
  'athene-v2:72b-fp16',
  'athene-v2:72b-q2_K',
  'athene-v2:72b-q3_K_L',
  'athene-v2:72b-q3_K_M',
  'athene-v2:72b-q3_K_S',
  'athene-v2:72b-q4_0',
  'athene-v2:72b-q4_1',
  'athene-v2:72b-q4_K_M',
  'athene-v2:72b-q4_K_S',
  'athene-v2:72b-q5_0',
  'athene-v2:72b-q5_1',
  'athene-v2:72b-q5_K_M',
  'athene-v2:72b-q5_K_S',
  'athene-v2:72b-q6_K',
  'athene-v2:72b-q8_0',
  'athene-v2:latest',
  'aya',
  'aya-expanse',
  'aya-expanse:32b',
  'aya-expanse:32b-fp16',
  'aya-expanse:32b-q2_K',
  'aya-expanse:32b-q3_K_L',
  'aya-expanse:32b-q3_K_M',
  'aya-expanse:32b-q3_K_S',
  'aya-expanse:32b-q4_0',
  'aya-expanse:32b-q4_1',
  'aya-expanse:32b-q4_K_M',
  'aya-expanse:32b-q4_K_S',
  'aya-expanse:32b-q5_0',
  'aya-expanse:32b-q5_1',
  'aya-expanse:32b-q5_K_M',
  'aya-expanse:32b-q5_K_S',
  'aya-expanse:32b-q6_K',
  'aya-expanse:32b-q8_0',
  'aya-expanse:8b',
  'aya-expanse:8b-fp16',
  'aya-expanse:8b-q2_K',
  'aya-expanse:8b-q3_K_L',
  'aya-expanse:8b-q3_K_M',
  'aya-expanse:8b-q3_K_S',
  'aya-expanse:8b-q4_0',
  'aya-expanse:8b-q4_1',
  'aya-expanse:8b-q4_K_M',
  'aya-expanse:8b-q4_K_S',
  'aya-expanse:8b-q5_0',
  'aya-expanse:8b-q5_1',
  'aya-expanse:8b-q5_K_M',
  'aya-expanse:8b-q5_K_S',
  'aya-expanse:8b-q6_K',
  'aya-expanse:8b-q8_0',
  'aya-expanse:latest',
  'aya:35b',
  'aya:35b-23',
  'aya:35b-23-q2_K',
  'aya:35b-23-q3_K_L',
  'aya:35b-23-q3_K_M',
  'aya:35b-23-q3_K_S',
  'aya:35b-23-q4_0',
  'aya:35b-23-q4_1',
  'aya:35b-23-q4_K_M',
  'aya:35b-23-q4_K_S',
  'aya:35b-23-q5_0',
  'aya:35b-23-q5_1',
  'aya:35b-23-q5_K_M',
  'aya:35b-23-q5_K_S',
  'aya:35b-23-q6_K',
  'aya:35b-23-q8_0',
  'aya:8b',
  'aya:8b-23',
  'aya:8b-23-q2_K',
  'aya:8b-23-q3_K_L',
  'aya:8b-23-q3_K_M',
  'aya:8b-23-q3_K_S',
  'aya:8b-23-q4_0',
  'aya:8b-23-q4_1',
  'aya:8b-23-q4_K_M',
  'aya:8b-23-q4_K_S',
  'aya:8b-23-q5_0',
  'aya:8b-23-q5_1',
  'aya:8b-23-q5_K_M',
  'aya:8b-23-q5_K_S',
  'aya:8b-23-q6_K',
  'aya:8b-23-q8_0',
  'aya:latest',
  'bespoke-minicheck',
  'bespoke-minicheck:7b',
  'bespoke-minicheck:7b-fp16',
  'bespoke-minicheck:7b-q2_K',
  'bespoke-minicheck:7b-q3_K_L',
  'bespoke-minicheck:7b-q3_K_M',
  'bespoke-minicheck:7b-q3_K_S',
  'bespoke-minicheck:7b-q4_0',
  'bespoke-minicheck:7b-q4_1',
  'bespoke-minicheck:7b-q4_K_M',
  'bespoke-minicheck:7b-q4_K_S',
  'bespoke-minicheck:7b-q5_0',
  'bespoke-minicheck:7b-q5_1',
  'bespoke-minicheck:7b-q5_K_M',
  'bespoke-minicheck:7b-q5_K_S',
  'bespoke-minicheck:7b-q6_K',
  'bespoke-minicheck:7b-q8_0',
  'bespoke-minicheck:latest',
  'codebooga',
  'codebooga:34b',
  'codebooga:34b-v0.1-fp16',
  'codebooga:34b-v0.1-q2_K',
  'codebooga:34b-v0.1-q3_K_L',
  'codebooga:34b-v0.1-q3_K_M',
  'codebooga:34b-v0.1-q3_K_S',
  'codebooga:34b-v0.1-q4_0',
  'codebooga:34b-v0.1-q4_1',
  'codebooga:34b-v0.1-q4_K_M',
  'codebooga:34b-v0.1-q5_0',
  'codebooga:34b-v0.1-q5_1',
  'codebooga:34b-v0.1-q5_K_M',
  'codebooga:34b-v0.1-q5_K_S',
  'codebooga:34b-v0.1-q6_K',
  'codebooga:34b-v0.1-q8_0',
  'codebooga:latest',
  'codegeex4',
  'codegeex4:9b',
  'codegeex4:9b-all-fp16',
  'codegeex4:9b-all-q2_K',
  'codegeex4:9b-all-q3_K_L',
  'codegeex4:9b-all-q3_K_M',
  'codegeex4:9b-all-q3_K_S',
  'codegeex4:9b-all-q4_0',
  'codegeex4:9b-all-q4_1',
  'codegeex4:9b-all-q4_K_M',
  'codegeex4:9b-all-q4_K_S',
  'codegeex4:9b-all-q5_0',
  'codegeex4:9b-all-q5_1',
  'codegeex4:9b-all-q5_K_M',
  'codegeex4:9b-all-q5_K_S',
  'codegeex4:9b-all-q6_K',
  'codegeex4:9b-all-q8_0',
  'codegeex4:latest',
  'codegemma',
  'codegemma:2b',
  'codegemma:2b-code',
  'codegemma:2b-code-fp16',
  'codegemma:2b-code-q2_K',
  'codegemma:2b-code-q3_K_L',
  'codegemma:2b-code-q3_K_M',
  'codegemma:2b-code-q3_K_S',
  'codegemma:2b-code-q4_0',
  'codegemma:2b-code-q4_1',
  'codegemma:2b-code-q4_K_M',
  'codegemma:2b-code-q4_K_S',
  'codegemma:2b-code-q5_0',
  'codegemma:2b-code-q5_1',
  'codegemma:2b-code-q5_K_M',
  'codegemma:2b-code-q5_K_S',
  'codegemma:2b-code-q6_K',
  'codegemma:2b-code-q8_0',
  'codegemma:2b-code-v1.1-fp16',
  'codegemma:2b-code-v1.1-q2_K',
  'codegemma:2b-code-v1.1-q3_K_L',
  'codegemma:2b-code-v1.1-q3_K_M',
  'codegemma:2b-code-v1.1-q3_K_S',
  'codegemma:2b-code-v1.1-q4_0',
  'codegemma:2b-code-v1.1-q4_1',
  'codegemma:2b-code-v1.1-q4_K_M',
  'codegemma:2b-code-v1.1-q4_K_S',
  'codegemma:2b-code-v1.1-q5_0',
  'codegemma:2b-code-v1.1-q5_1',
  'codegemma:2b-code-v1.1-q5_K_M',
  'codegemma:2b-code-v1.1-q5_K_S',
  'codegemma:2b-code-v1.1-q6_K',
  'codegemma:2b-code-v1.1-q8_0',
  'codegemma:2b-v1.1',
  'codegemma:7b',
  'codegemma:7b-code',
  'codegemma:7b-code-fp16',
  'codegemma:7b-code-q2_K',
  'codegemma:7b-code-q3_K_L',
  'codegemma:7b-code-q3_K_M',
  'codegemma:7b-code-q3_K_S',
  'codegemma:7b-code-q4_0',
  'codegemma:7b-code-q4_1',
  'codegemma:7b-code-q4_K_M',
  'codegemma:7b-code-q4_K_S',
  'codegemma:7b-code-q5_0',
  'codegemma:7b-code-q5_1',
  'codegemma:7b-code-q5_K_M',
  'codegemma:7b-code-q5_K_S',
  'codegemma:7b-code-q6_K',
  'codegemma:7b-code-q8_0',
  'codegemma:7b-instruct',
  'codegemma:7b-instruct-fp16',
  'codegemma:7b-instruct-q2_K',
  'codegemma:7b-instruct-q3_K_L',
  'codegemma:7b-instruct-q3_K_M',
  'codegemma:7b-instruct-q3_K_S',
  'codegemma:7b-instruct-q4_0',
  'codegemma:7b-instruct-q4_1',
  'codegemma:7b-instruct-q4_K_M',
  'codegemma:7b-instruct-q4_K_S',
  'codegemma:7b-instruct-q5_0',
  'codegemma:7b-instruct-q5_1',
  'codegemma:7b-instruct-q5_K_M',
  'codegemma:7b-instruct-q5_K_S',
  'codegemma:7b-instruct-q6_K',
  'codegemma:7b-instruct-q8_0',
  'codegemma:7b-instruct-v1.1-fp16',
  'codegemma:7b-instruct-v1.1-q2_K',
  'codegemma:7b-instruct-v1.1-q3_K_L',
  'codegemma:7b-instruct-v1.1-q3_K_M',
  'codegemma:7b-instruct-v1.1-q3_K_S',
  'codegemma:7b-instruct-v1.1-q4_0',
  'codegemma:7b-instruct-v1.1-q4_1',
  'codegemma:7b-instruct-v1.1-q4_K_M',
  'codegemma:7b-instruct-v1.1-q4_K_S',
  'codegemma:7b-instruct-v1.1-q5_0',
  'codegemma:7b-instruct-v1.1-q5_1',
  'codegemma:7b-instruct-v1.1-q5_K_M',
  'codegemma:7b-instruct-v1.1-q5_K_S',
  'codegemma:7b-instruct-v1.1-q6_K',
  'codegemma:7b-instruct-v1.1-q8_0',
  'codegemma:7b-v1.1',
  'codegemma:code',
  'codegemma:instruct',
  'codegemma:latest',
  'codellama',
  'codellama:13b',
  'codellama:13b-code',
  'codellama:13b-code-fp16',
  'codellama:13b-code-q2_K',
  'codellama:13b-code-q3_K_L',
  'codellama:13b-code-q3_K_M',
  'codellama:13b-code-q3_K_S',
  'codellama:13b-code-q4_0',
  'codellama:13b-code-q4_1',
  'codellama:13b-code-q4_K_M',
  'codellama:13b-code-q4_K_S',
  'codellama:13b-code-q5_0',
  'codellama:13b-code-q5_1',
  'codellama:13b-code-q5_K_M',
  'codellama:13b-code-q5_K_S',
  'codellama:13b-code-q6_K',
  'codellama:13b-code-q8_0',
  'codellama:13b-instruct',
  'codellama:13b-instruct-fp16',
  'codellama:13b-instruct-q2_K',
  'codellama:13b-instruct-q3_K_L',
  'codellama:13b-instruct-q3_K_M',
  'codellama:13b-instruct-q3_K_S',
  'codellama:13b-instruct-q4_0',
  'codellama:13b-instruct-q4_1',
  'codellama:13b-instruct-q4_K_M',
  'codellama:13b-instruct-q4_K_S',
  'codellama:13b-instruct-q5_0',
  'codellama:13b-instruct-q5_1',
  'codellama:13b-instruct-q5_K_M',
  'codellama:13b-instruct-q5_K_S',
  'codellama:13b-instruct-q6_K',
  'codellama:13b-instruct-q8_0',
  'codellama:13b-python',
  'codellama:13b-python-fp16',
  'codellama:13b-python-q2_K',
  'codellama:13b-python-q3_K_L',
  'codellama:13b-python-q3_K_M',
  'codellama:13b-python-q3_K_S',
  'codellama:13b-python-q4_0',
  'codellama:13b-python-q4_1',
  'codellama:13b-python-q4_K_M',
  'codellama:13b-python-q4_K_S',
  'codellama:13b-python-q5_0',
  'codellama:13b-python-q5_1',
  'codellama:13b-python-q5_K_M',
  'codellama:13b-python-q5_K_S',
  'codellama:13b-python-q6_K',
  'codellama:13b-python-q8_0',
  'codellama:34b',
  'codellama:34b-code',
  'codellama:34b-code-q2_K',
  'codellama:34b-code-q3_K_L',
  'codellama:34b-code-q3_K_M',
  'codellama:34b-code-q3_K_S',
  'codellama:34b-code-q4_0',
  'codellama:34b-code-q4_1',
  'codellama:34b-code-q4_K_M',
  'codellama:34b-code-q4_K_S',
  'codellama:34b-code-q5_0',
  'codellama:34b-code-q5_1',
  'codellama:34b-code-q5_K_M',
  'codellama:34b-code-q5_K_S',
  'codellama:34b-code-q6_K',
  'codellama:34b-code-q8_0',
  'codellama:34b-instruct',
  'codellama:34b-instruct-fp16',
  'codellama:34b-instruct-q2_K',
  'codellama:34b-instruct-q3_K_L',
  'codellama:34b-instruct-q3_K_M',
  'codellama:34b-instruct-q3_K_S',
  'codellama:34b-instruct-q4_0',
  'codellama:34b-instruct-q4_1',
  'codellama:34b-instruct-q4_K_M',
  'codellama:34b-instruct-q4_K_S',
  'codellama:34b-instruct-q5_0',
  'codellama:34b-instruct-q5_1',
  'codellama:34b-instruct-q5_K_M',
  'codellama:34b-instruct-q5_K_S',
  'codellama:34b-instruct-q6_K',
  'codellama:34b-instruct-q8_0',
  'codellama:34b-python',
  'codellama:34b-python-fp16',
  'codellama:34b-python-q2_K',
  'codellama:34b-python-q3_K_L',
  'codellama:34b-python-q3_K_M',
  'codellama:34b-python-q3_K_S',
  'codellama:34b-python-q4_0',
  'codellama:34b-python-q4_1',
  'codellama:34b-python-q4_K_M',
  'codellama:34b-python-q4_K_S',
  'codellama:34b-python-q5_0',
  'codellama:34b-python-q5_1',
  'codellama:34b-python-q5_K_M',
  'codellama:34b-python-q5_K_S',
  'codellama:34b-python-q6_K',
  'codellama:34b-python-q8_0',
  'codellama:70b',
  'codellama:70b-code',
  'codellama:70b-code-fp16',
  'codellama:70b-code-q2_K',
  'codellama:70b-code-q3_K_L',
  'codellama:70b-code-q3_K_M',
  'codellama:70b-code-q3_K_S',
  'codellama:70b-code-q4_0',
  'codellama:70b-code-q4_1',
  'codellama:70b-code-q4_K_M',
  'codellama:70b-code-q4_K_S',
  'codellama:70b-code-q5_0',
  'codellama:70b-code-q5_1',
  'codellama:70b-code-q5_K_M',
  'codellama:70b-code-q5_K_S',
  'codellama:70b-code-q6_K',
  'codellama:70b-code-q8_0',
  'codellama:70b-instruct',
  'codellama:70b-instruct-fp16',
  'codellama:70b-instruct-q2_K',
  'codellama:70b-instruct-q3_K_L',
  'codellama:70b-instruct-q3_K_M',
  'codellama:70b-instruct-q3_K_S',
  'codellama:70b-instruct-q4_0',
  'codellama:70b-instruct-q4_1',
  'codellama:70b-instruct-q4_K_M',
  'codellama:70b-instruct-q4_K_S',
  'codellama:70b-instruct-q5_0',
  'codellama:70b-instruct-q5_1',
  'codellama:70b-instruct-q5_K_M',
  'codellama:70b-instruct-q5_K_S',
  'codellama:70b-instruct-q6_K',
  'codellama:70b-instruct-q8_0',
  'codellama:70b-python',
  'codellama:70b-python-fp16',
  'codellama:70b-python-q2_K',
  'codellama:70b-python-q3_K_L',
  'codellama:70b-python-q3_K_M',
  'codellama:70b-python-q3_K_S',
  'codellama:70b-python-q4_0',
  'codellama:70b-python-q4_1',
  'codellama:70b-python-q4_K_M',
  'codellama:70b-python-q4_K_S',
  'codellama:70b-python-q5_0',
  'codellama:70b-python-q5_1',
  'codellama:70b-python-q5_K_M',
  'codellama:70b-python-q5_K_S',
  'codellama:70b-python-q6_K',
  'codellama:70b-python-q8_0',
  'codellama:7b',
  'codellama:7b-code',
  'codellama:7b-code-fp16',
  'codellama:7b-code-q2_K',
  'codellama:7b-code-q3_K_L',
  'codellama:7b-code-q3_K_M',
  'codellama:7b-code-q3_K_S',
  'codellama:7b-code-q4_0',
  'codellama:7b-code-q4_1',
  'codellama:7b-code-q4_K_M',
  'codellama:7b-code-q4_K_S',
  'codellama:7b-code-q5_0',
  'codellama:7b-code-q5_1',
  'codellama:7b-code-q5_K_M',
  'codellama:7b-code-q5_K_S',
  'codellama:7b-code-q6_K',
  'codellama:7b-code-q8_0',
  'codellama:7b-instruct',
  'codellama:7b-instruct-fp16',
  'codellama:7b-instruct-q2_K',
  'codellama:7b-instruct-q3_K_L',
  'codellama:7b-instruct-q3_K_M',
  'codellama:7b-instruct-q3_K_S',
  'codellama:7b-instruct-q4_0',
  'codellama:7b-instruct-q4_1',
  'codellama:7b-instruct-q4_K_M',
  'codellama:7b-instruct-q4_K_S',
  'codellama:7b-instruct-q5_0',
  'codellama:7b-instruct-q5_1',
  'codellama:7b-instruct-q5_K_M',
  'codellama:7b-instruct-q5_K_S',
  'codellama:7b-instruct-q6_K',
  'codellama:7b-instruct-q8_0',
  'codellama:7b-python',
  'codellama:7b-python-fp16',
  'codellama:7b-python-q2_K',
  'codellama:7b-python-q3_K_L',
  'codellama:7b-python-q3_K_M',
  'codellama:7b-python-q3_K_S',
  'codellama:7b-python-q4_0',
  'codellama:7b-python-q4_1',
  'codellama:7b-python-q4_K_M',
  'codellama:7b-python-q4_K_S',
  'codellama:7b-python-q5_0',
  'codellama:7b-python-q5_1',
  'codellama:7b-python-q5_K_M',
  'codellama:7b-python-q5_K_S',
  'codellama:7b-python-q6_K',
  'codellama:7b-python-q8_0',
  'codellama:code',
  'codellama:instruct',
  'codellama:latest',
  'codellama:python',
  'codeqwen',
  'codeqwen:7b',
  'codeqwen:7b-chat',
  'codeqwen:7b-chat-v1.5-fp16',
  'codeqwen:7b-chat-v1.5-q2_K',
  'codeqwen:7b-chat-v1.5-q3_K_L',
  'codeqwen:7b-chat-v1.5-q3_K_M',
  'codeqwen:7b-chat-v1.5-q3_K_S',
  'codeqwen:7b-chat-v1.5-q4_0',
  'codeqwen:7b-chat-v1.5-q4_1',
  'codeqwen:7b-chat-v1.5-q4_K_M',
  'codeqwen:7b-chat-v1.5-q4_K_S',
  'codeqwen:7b-chat-v1.5-q5_0',
  'codeqwen:7b-chat-v1.5-q5_1',
  'codeqwen:7b-chat-v1.5-q5_K_M',
  'codeqwen:7b-chat-v1.5-q5_K_S',
  'codeqwen:7b-chat-v1.5-q6_K',
  'codeqwen:7b-chat-v1.5-q8_0',
  'codeqwen:7b-code',
  'codeqwen:7b-code-v1.5-fp16',
  'codeqwen:7b-code-v1.5-q4_0',
  'codeqwen:7b-code-v1.5-q4_1',
  'codeqwen:7b-code-v1.5-q5_0',
  'codeqwen:7b-code-v1.5-q5_1',
  'codeqwen:7b-code-v1.5-q8_0',
  'codeqwen:chat',
  'codeqwen:code',
  'codeqwen:latest',
  'codeqwen:v1.5',
  'codeqwen:v1.5-chat',
  'codeqwen:v1.5-code',
  'codestral',
  'codestral:22b',
  'codestral:22b-v0.1-q2_K',
  'codestral:22b-v0.1-q3_K_L',
  'codestral:22b-v0.1-q3_K_M',
  'codestral:22b-v0.1-q3_K_S',
  'codestral:22b-v0.1-q4_0',
  'codestral:22b-v0.1-q4_1',
  'codestral:22b-v0.1-q4_K_M',
  'codestral:22b-v0.1-q4_K_S',
  'codestral:22b-v0.1-q5_0',
  'codestral:22b-v0.1-q5_1',
  'codestral:22b-v0.1-q5_K_M',
  'codestral:22b-v0.1-q5_K_S',
  'codestral:22b-v0.1-q6_K',
  'codestral:22b-v0.1-q8_0',
  'codestral:latest',
  'codestral:v0.1',
  'codeup',
  'codeup:13b',
  'codeup:13b-llama2',
  'codeup:13b-llama2-chat',
  'codeup:13b-llama2-chat-fp16',
  'codeup:13b-llama2-chat-q2_K',
  'codeup:13b-llama2-chat-q3_K_L',
  'codeup:13b-llama2-chat-q3_K_M',
  'codeup:13b-llama2-chat-q3_K_S',
  'codeup:13b-llama2-chat-q4_0',
  'codeup:13b-llama2-chat-q4_1',
  'codeup:13b-llama2-chat-q4_K_M',
  'codeup:13b-llama2-chat-q4_K_S',
  'codeup:13b-llama2-chat-q5_0',
  'codeup:13b-llama2-chat-q5_1',
  'codeup:13b-llama2-chat-q5_K_M',
  'codeup:13b-llama2-chat-q5_K_S',
  'codeup:13b-llama2-chat-q6_K',
  'codeup:13b-llama2-chat-q8_0',
  'codeup:latest',
  'cogito',
  'cogito:14b',
  'cogito:14b-v1-preview-qwen-fp16',
  'cogito:14b-v1-preview-qwen-q4_K_M',
  'cogito:14b-v1-preview-qwen-q8_0',
  'cogito:32b',
  'cogito:32b-v1-preview-qwen-fp16',
  'cogito:32b-v1-preview-qwen-q4_K_M',
  'cogito:32b-v1-preview-qwen-q8_0',
  'cogito:3b',
  'cogito:3b-v1-preview-llama-fp16',
  'cogito:3b-v1-preview-llama-q4_K_M',
  'cogito:3b-v1-preview-llama-q8_0',
  'cogito:70b',
  'cogito:70b-v1-preview-llama-fp16',
  'cogito:70b-v1-preview-llama-q4_K_M',
  'cogito:70b-v1-preview-llama-q8_0',
  'cogito:8b',
  'cogito:8b-v1-preview-llama-q4_K_M',
  'cogito:8b-v1-preview-llama-q8_0',
  'cogito:latest',
  'command-a',
  'command-a:111b',
  'command-a:111b-03-2025-fp16',
  'command-a:111b-03-2025-q4_K_M',
  'command-a:111b-03-2025-q8_0',
  'command-a:latest',
  'command-r',
  'command-r-plus',
  'command-r-plus:104b',
  'command-r-plus:104b-08-2024-fp16',
  'command-r-plus:104b-08-2024-q2_K',
  'command-r-plus:104b-08-2024-q3_K_L',
  'command-r-plus:104b-08-2024-q3_K_M',
  'command-r-plus:104b-08-2024-q3_K_S',
  'command-r-plus:104b-08-2024-q4_0',
  'command-r-plus:104b-08-2024-q4_1',
  'command-r-plus:104b-08-2024-q4_K_M',
  'command-r-plus:104b-08-2024-q4_K_S',
  'command-r-plus:104b-08-2024-q5_0',
  'command-r-plus:104b-08-2024-q5_1',
  'command-r-plus:104b-08-2024-q5_K_M',
  'command-r-plus:104b-08-2024-q5_K_S',
  'command-r-plus:104b-08-2024-q6_K',
  'command-r-plus:104b-08-2024-q8_0',
  'command-r-plus:104b-fp16',
  'command-r-plus:104b-q2_K',
  'command-r-plus:104b-q4_0',
  'command-r-plus:104b-q8_0',
  'command-r-plus:latest',
  'command-r7b',
  'command-r7b-arabic',
  'command-r7b-arabic:7b',
  'command-r7b-arabic:7b-02-2025-fp16',
  'command-r7b-arabic:7b-02-2025-q4_K_M',
  'command-r7b-arabic:7b-02-2025-q8_0',
  'command-r7b-arabic:latest',
  'command-r7b:7b',
  'command-r7b:7b-12-2024-fp16',
  'command-r7b:7b-12-2024-q4_K_M',
  'command-r7b:7b-12-2024-q8_0',
  'command-r7b:latest',
  'command-r:35b',
  'command-r:35b-08-2024-fp16',
  'command-r:35b-08-2024-q2_K',
  'command-r:35b-08-2024-q3_K_L',
  'command-r:35b-08-2024-q3_K_M',
  'command-r:35b-08-2024-q3_K_S',
  'command-r:35b-08-2024-q4_0',
  'command-r:35b-08-2024-q4_1',
  'command-r:35b-08-2024-q4_K_M',
  'command-r:35b-08-2024-q4_K_S',
  'command-r:35b-08-2024-q5_0',
  'command-r:35b-08-2024-q5_1',
  'command-r:35b-08-2024-q5_K_M',
  'command-r:35b-08-2024-q5_K_S',
  'command-r:35b-08-2024-q6_K',
  'command-r:35b-08-2024-q8_0',
  'command-r:35b-v0.1-fp16',
  'command-r:35b-v0.1-q2_K',
  'command-r:35b-v0.1-q3_K_L',
  'command-r:35b-v0.1-q3_K_M',
  'command-r:35b-v0.1-q3_K_S',
  'command-r:35b-v0.1-q4_0',
  'command-r:35b-v0.1-q4_1',
  'command-r:35b-v0.1-q4_K_M',
  'command-r:35b-v0.1-q4_K_S',
  'command-r:35b-v0.1-q5_1',
  'command-r:35b-v0.1-q5_K_M',
  'command-r:35b-v0.1-q5_K_S',
  'command-r:35b-v0.1-q6_K',
  'command-r:35b-v0.1-q8_0',
  'command-r:latest',
  'command-r:v0.1',
  'dbrx',
  'dbrx:132b',
  'dbrx:132b-instruct-fp16',
  'dbrx:132b-instruct-q2_K',
  'dbrx:132b-instruct-q4_0',
  'dbrx:132b-instruct-q8_0',
  'dbrx:instruct',
  'dbrx:latest',
  'deepcoder',
  'deepcoder:1.5b',
  'deepcoder:1.5b-preview-fp16',
  'deepcoder:1.5b-preview-q4_K_M',
  'deepcoder:1.5b-preview-q8_0',
  'deepcoder:14b',
  'deepcoder:14b-preview-fp16',
  'deepcoder:14b-preview-q4_K_M',
  'deepcoder:14b-preview-q8_0',
  'deepcoder:latest',
  'deepscaler',
  'deepscaler:1.5b',
  'deepscaler:1.5b-preview-fp16',
  'deepscaler:1.5b-preview-q4_K_M',
  'deepscaler:1.5b-preview-q8_0',
  'deepscaler:latest',
  'deepseek-coder',
  'deepseek-coder-v2',
  'deepseek-coder-v2:16b',
  'deepseek-coder-v2:16b-lite-base-fp16',
  'deepseek-coder-v2:16b-lite-base-q2_K',
  'deepseek-coder-v2:16b-lite-base-q3_K_L',
  'deepseek-coder-v2:16b-lite-base-q3_K_M',
  'deepseek-coder-v2:16b-lite-base-q3_K_S',
  'deepseek-coder-v2:16b-lite-base-q4_0',
  'deepseek-coder-v2:16b-lite-base-q4_1',
  'deepseek-coder-v2:16b-lite-base-q4_K_M',
  'deepseek-coder-v2:16b-lite-base-q4_K_S',
  'deepseek-coder-v2:16b-lite-base-q5_0',
  'deepseek-coder-v2:16b-lite-base-q5_1',
  'deepseek-coder-v2:16b-lite-base-q5_K_M',
  'deepseek-coder-v2:16b-lite-base-q5_K_S',
  'deepseek-coder-v2:16b-lite-base-q6_K',
  'deepseek-coder-v2:16b-lite-base-q8_0',
  'deepseek-coder-v2:16b-lite-instruct-fp16',
  'deepseek-coder-v2:16b-lite-instruct-q2_K',
  'deepseek-coder-v2:16b-lite-instruct-q3_K_L',
  'deepseek-coder-v2:16b-lite-instruct-q3_K_M',
  'deepseek-coder-v2:16b-lite-instruct-q3_K_S',
  'deepseek-coder-v2:16b-lite-instruct-q4_0',
  'deepseek-coder-v2:16b-lite-instruct-q4_1',
  'deepseek-coder-v2:16b-lite-instruct-q4_K_M',
  'deepseek-coder-v2:16b-lite-instruct-q4_K_S',
  'deepseek-coder-v2:16b-lite-instruct-q5_0',
  'deepseek-coder-v2:16b-lite-instruct-q5_1',
  'deepseek-coder-v2:16b-lite-instruct-q5_K_M',
  'deepseek-coder-v2:16b-lite-instruct-q5_K_S',
  'deepseek-coder-v2:16b-lite-instruct-q6_K',
  'deepseek-coder-v2:16b-lite-instruct-q8_0',
  'deepseek-coder-v2:236b',
  'deepseek-coder-v2:236b-base-fp16',
  'deepseek-coder-v2:236b-base-q2_K',
  'deepseek-coder-v2:236b-base-q3_K_L',
  'deepseek-coder-v2:236b-base-q3_K_M',
  'deepseek-coder-v2:236b-base-q3_K_S',
  'deepseek-coder-v2:236b-base-q4_0',
  'deepseek-coder-v2:236b-base-q4_1',
  'deepseek-coder-v2:236b-base-q4_K_M',
  'deepseek-coder-v2:236b-base-q4_K_S',
  'deepseek-coder-v2:236b-base-q5_0',
  'deepseek-coder-v2:236b-base-q5_1',
  'deepseek-coder-v2:236b-base-q5_K_M',
  'deepseek-coder-v2:236b-base-q5_K_S',
  'deepseek-coder-v2:236b-base-q6_K',
  'deepseek-coder-v2:236b-base-q8_0',
  'deepseek-coder-v2:236b-instruct-fp16',
  'deepseek-coder-v2:236b-instruct-q2_K',
  'deepseek-coder-v2:236b-instruct-q3_K_L',
  'deepseek-coder-v2:236b-instruct-q3_K_M',
  'deepseek-coder-v2:236b-instruct-q3_K_S',
  'deepseek-coder-v2:236b-instruct-q4_0',
  'deepseek-coder-v2:236b-instruct-q4_1',
  'deepseek-coder-v2:236b-instruct-q4_K_M',
  'deepseek-coder-v2:236b-instruct-q4_K_S',
  'deepseek-coder-v2:236b-instruct-q5_0',
  'deepseek-coder-v2:236b-instruct-q5_1',
  'deepseek-coder-v2:236b-instruct-q5_K_M',
  'deepseek-coder-v2:236b-instruct-q5_K_S',
  'deepseek-coder-v2:236b-instruct-q6_K',
  'deepseek-coder-v2:236b-instruct-q8_0',
  'deepseek-coder-v2:latest',
  'deepseek-coder-v2:lite',
  'deepseek-coder:1.3b',
  'deepseek-coder:1.3b-base',
  'deepseek-coder:1.3b-base-fp16',
  'deepseek-coder:1.3b-base-q2_K',
  'deepseek-coder:1.3b-base-q3_K_L',
  'deepseek-coder:1.3b-base-q3_K_M',
  'deepseek-coder:1.3b-base-q3_K_S',
  'deepseek-coder:1.3b-base-q4_0',
  'deepseek-coder:1.3b-base-q4_1',
  'deepseek-coder:1.3b-base-q4_K_M',
  'deepseek-coder:1.3b-base-q4_K_S',
  'deepseek-coder:1.3b-base-q5_0',
  'deepseek-coder:1.3b-base-q5_1',
  'deepseek-coder:1.3b-base-q5_K_M',
  'deepseek-coder:1.3b-base-q5_K_S',
  'deepseek-coder:1.3b-base-q6_K',
  'deepseek-coder:1.3b-base-q8_0',
  'deepseek-coder:1.3b-instruct',
  'deepseek-coder:1.3b-instruct-fp16',
  'deepseek-coder:1.3b-instruct-q2_K',
  'deepseek-coder:1.3b-instruct-q3_K_L',
  'deepseek-coder:1.3b-instruct-q3_K_M',
  'deepseek-coder:1.3b-instruct-q3_K_S',
  'deepseek-coder:1.3b-instruct-q4_0',
  'deepseek-coder:1.3b-instruct-q4_1',
  'deepseek-coder:1.3b-instruct-q4_K_M',
  'deepseek-coder:1.3b-instruct-q4_K_S',
  'deepseek-coder:1.3b-instruct-q5_0',
  'deepseek-coder:1.3b-instruct-q5_1',
  'deepseek-coder:1.3b-instruct-q5_K_M',
  'deepseek-coder:1.3b-instruct-q5_K_S',
  'deepseek-coder:1.3b-instruct-q6_K',
  'deepseek-coder:1.3b-instruct-q8_0',
  'deepseek-coder:33b',
  'deepseek-coder:33b-base',
  'deepseek-coder:33b-base-fp16',
  'deepseek-coder:33b-base-q2_K',
  'deepseek-coder:33b-base-q3_K_L',
  'deepseek-coder:33b-base-q3_K_M',
  'deepseek-coder:33b-base-q3_K_S',
  'deepseek-coder:33b-base-q4_0',
  'deepseek-coder:33b-base-q4_1',
  'deepseek-coder:33b-base-q4_K_M',
  'deepseek-coder:33b-base-q4_K_S',
  'deepseek-coder:33b-base-q5_0',
  'deepseek-coder:33b-base-q5_1',
  'deepseek-coder:33b-base-q5_K_M',
  'deepseek-coder:33b-base-q5_K_S',
  'deepseek-coder:33b-base-q6_K',
  'deepseek-coder:33b-base-q8_0',
  'deepseek-coder:33b-instruct',
  'deepseek-coder:33b-instruct-fp16',
  'deepseek-coder:33b-instruct-q2_K',
  'deepseek-coder:33b-instruct-q3_K_L',
  'deepseek-coder:33b-instruct-q3_K_M',
  'deepseek-coder:33b-instruct-q3_K_S',
  'deepseek-coder:33b-instruct-q4_0',
  'deepseek-coder:33b-instruct-q4_1',
  'deepseek-coder:33b-instruct-q4_K_M',
  'deepseek-coder:33b-instruct-q4_K_S',
  'deepseek-coder:33b-instruct-q5_0',
  'deepseek-coder:33b-instruct-q5_1',
  'deepseek-coder:33b-instruct-q5_K_M',
  'deepseek-coder:33b-instruct-q5_K_S',
  'deepseek-coder:33b-instruct-q6_K',
  'deepseek-coder:33b-instruct-q8_0',
  'deepseek-coder:6.7b',
  'deepseek-coder:6.7b-base',
  'deepseek-coder:6.7b-base-fp16',
  'deepseek-coder:6.7b-base-q2_K',
  'deepseek-coder:6.7b-base-q3_K_L',
  'deepseek-coder:6.7b-base-q3_K_M',
  'deepseek-coder:6.7b-base-q3_K_S',
  'deepseek-coder:6.7b-base-q4_0',
  'deepseek-coder:6.7b-base-q4_1',
  'deepseek-coder:6.7b-base-q4_K_M',
  'deepseek-coder:6.7b-base-q4_K_S',
  'deepseek-coder:6.7b-base-q5_0',
  'deepseek-coder:6.7b-base-q5_1',
  'deepseek-coder:6.7b-base-q5_K_M',
  'deepseek-coder:6.7b-base-q5_K_S',
  'deepseek-coder:6.7b-base-q6_K',
  'deepseek-coder:6.7b-base-q8_0',
  'deepseek-coder:6.7b-instruct',
  'deepseek-coder:6.7b-instruct-fp16',
  'deepseek-coder:6.7b-instruct-q2_K',
  'deepseek-coder:6.7b-instruct-q3_K_L',
  'deepseek-coder:6.7b-instruct-q3_K_M',
  'deepseek-coder:6.7b-instruct-q3_K_S',
  'deepseek-coder:6.7b-instruct-q4_0',
  'deepseek-coder:6.7b-instruct-q4_1',
  'deepseek-coder:6.7b-instruct-q4_K_M',
  'deepseek-coder:6.7b-instruct-q4_K_S',
  'deepseek-coder:6.7b-instruct-q5_0',
  'deepseek-coder:6.7b-instruct-q5_1',
  'deepseek-coder:6.7b-instruct-q5_K_M',
  'deepseek-coder:6.7b-instruct-q5_K_S',
  'deepseek-coder:6.7b-instruct-q6_K',
  'deepseek-coder:6.7b-instruct-q8_0',
  'deepseek-coder:base',
  'deepseek-coder:instruct',
  'deepseek-coder:latest',
  'deepseek-llm',
  'deepseek-llm:67b',
  'deepseek-llm:67b-base',
  'deepseek-llm:67b-base-fp16',
  'deepseek-llm:67b-base-q2_K',
  'deepseek-llm:67b-base-q3_K_L',
  'deepseek-llm:67b-base-q3_K_M',
  'deepseek-llm:67b-base-q3_K_S',
  'deepseek-llm:67b-base-q4_0',
  'deepseek-llm:67b-base-q4_1',
  'deepseek-llm:67b-base-q4_K_M',
  'deepseek-llm:67b-base-q4_K_S',
  'deepseek-llm:67b-base-q5_0',
  'deepseek-llm:67b-base-q5_1',
  'deepseek-llm:67b-base-q5_K_M',
  'deepseek-llm:67b-base-q5_K_S',
  'deepseek-llm:67b-base-q6_K',
  'deepseek-llm:67b-base-q8_0',
  'deepseek-llm:67b-chat',
  'deepseek-llm:67b-chat-fp16',
  'deepseek-llm:67b-chat-q2_K',
  'deepseek-llm:67b-chat-q3_K_L',
  'deepseek-llm:67b-chat-q3_K_M',
  'deepseek-llm:67b-chat-q3_K_S',
  'deepseek-llm:67b-chat-q4_0',
  'deepseek-llm:67b-chat-q4_1',
  'deepseek-llm:67b-chat-q4_K_M',
  'deepseek-llm:67b-chat-q4_K_S',
  'deepseek-llm:67b-chat-q5_0',
  'deepseek-llm:67b-chat-q5_1',
  'deepseek-llm:67b-chat-q5_K_S',
  'deepseek-llm:7b',
  'deepseek-llm:7b-base',
  'deepseek-llm:7b-base-fp16',
  'deepseek-llm:7b-base-q2_K',
  'deepseek-llm:7b-base-q3_K_L',
  'deepseek-llm:7b-base-q3_K_M',
  'deepseek-llm:7b-base-q3_K_S',
  'deepseek-llm:7b-base-q4_0',
  'deepseek-llm:7b-base-q4_1',
  'deepseek-llm:7b-base-q4_K_M',
  'deepseek-llm:7b-base-q4_K_S',
  'deepseek-llm:7b-base-q5_0',
  'deepseek-llm:7b-base-q5_1',
  'deepseek-llm:7b-base-q5_K_M',
  'deepseek-llm:7b-base-q5_K_S',
  'deepseek-llm:7b-base-q6_K',
  'deepseek-llm:7b-base-q8_0',
  'deepseek-llm:7b-chat',
  'deepseek-llm:7b-chat-fp16',
  'deepseek-llm:7b-chat-q2_K',
  'deepseek-llm:7b-chat-q3_K_L',
  'deepseek-llm:7b-chat-q3_K_M',
  'deepseek-llm:7b-chat-q3_K_S',
  'deepseek-llm:7b-chat-q4_0',
  'deepseek-llm:7b-chat-q4_1',
  'deepseek-llm:7b-chat-q4_K_M',
  'deepseek-llm:7b-chat-q4_K_S',
  'deepseek-llm:7b-chat-q5_0',
  'deepseek-llm:7b-chat-q5_1',
  'deepseek-llm:7b-chat-q5_K_M',
  'deepseek-llm:7b-chat-q5_K_S',
  'deepseek-llm:7b-chat-q6_K',
  'deepseek-llm:7b-chat-q8_0',
  'deepseek-llm:latest',
  'deepseek-r1',
  'deepseek-r1:1.5b',
  'deepseek-r1:1.5b-qwen-distill-fp16',
  'deepseek-r1:1.5b-qwen-distill-q4_K_M',
  'deepseek-r1:1.5b-qwen-distill-q8_0',
  'deepseek-r1:14b',
  'deepseek-r1:14b-qwen-distill-fp16',
  'deepseek-r1:14b-qwen-distill-q4_K_M',
  'deepseek-r1:14b-qwen-distill-q8_0',
  'deepseek-r1:32b',
  'deepseek-r1:32b-qwen-distill-fp16',
  'deepseek-r1:32b-qwen-distill-q4_K_M',
  'deepseek-r1:32b-qwen-distill-q8_0',
  'deepseek-r1:671b',
  'deepseek-r1:671b-0528-fp16',
  'deepseek-r1:671b-0528-q4_K_M',
  'deepseek-r1:671b-0528-q8_0',
  'deepseek-r1:671b-fp16',
  'deepseek-r1:671b-q4_K_M',
  'deepseek-r1:671b-q8_0',
  'deepseek-r1:70b',
  'deepseek-r1:70b-llama-distill-fp16',
  'deepseek-r1:70b-llama-distill-q4_K_M',
  'deepseek-r1:70b-llama-distill-q8_0',
  'deepseek-r1:7b',
  'deepseek-r1:7b-qwen-distill-fp16',
  'deepseek-r1:7b-qwen-distill-q4_K_M',
  'deepseek-r1:7b-qwen-distill-q8_0',
  'deepseek-r1:8b',
  'deepseek-r1:8b-0528-qwen3-fp16',
  'deepseek-r1:8b-0528-qwen3-q4_K_M',
  'deepseek-r1:8b-0528-qwen3-q8_0',
  'deepseek-r1:8b-llama-distill-fp16',
  'deepseek-r1:8b-llama-distill-q4_K_M',
  'deepseek-r1:8b-llama-distill-q8_0',
  'deepseek-r1:latest',
  'deepseek-v2',
  'deepseek-v2.5',
  'deepseek-v2.5:236b',
  'deepseek-v2.5:236b-q4_0',
  'deepseek-v2.5:236b-q4_1',
  'deepseek-v2.5:236b-q5_0',
  'deepseek-v2.5:236b-q5_1',
  'deepseek-v2.5:236b-q8_0',
  'deepseek-v2.5:latest',
  'deepseek-v2:16b',
  'deepseek-v2:16b-lite-chat-fp16',
  'deepseek-v2:16b-lite-chat-q2_K',
  'deepseek-v2:16b-lite-chat-q3_K_L',
  'deepseek-v2:16b-lite-chat-q3_K_M',
  'deepseek-v2:16b-lite-chat-q3_K_S',
  'deepseek-v2:16b-lite-chat-q4_0',
  'deepseek-v2:16b-lite-chat-q4_1',
  'deepseek-v2:16b-lite-chat-q4_K_M',
  'deepseek-v2:16b-lite-chat-q4_K_S',
  'deepseek-v2:16b-lite-chat-q5_0',
  'deepseek-v2:16b-lite-chat-q5_1',
  'deepseek-v2:16b-lite-chat-q5_K_M',
  'deepseek-v2:16b-lite-chat-q5_K_S',
  'deepseek-v2:16b-lite-chat-q6_K',
  'deepseek-v2:16b-lite-chat-q8_0',
  'deepseek-v2:236b',
  'deepseek-v2:236b-chat-fp16',
  'deepseek-v2:236b-chat-q2_K',
  'deepseek-v2:236b-chat-q3_K_L',
  'deepseek-v2:236b-chat-q3_K_M',
  'deepseek-v2:236b-chat-q3_K_S',
  'deepseek-v2:236b-chat-q4_0',
  'deepseek-v2:236b-chat-q4_1',
  'deepseek-v2:236b-chat-q4_K_M',
  'deepseek-v2:236b-chat-q4_K_S',
  'deepseek-v2:236b-chat-q5_0',
  'deepseek-v2:236b-chat-q5_1',
  'deepseek-v2:236b-chat-q5_K_M',
  'deepseek-v2:236b-chat-q5_K_S',
  'deepseek-v2:236b-chat-q6_K',
  'deepseek-v2:236b-chat-q8_0',
  'deepseek-v2:latest',
  'deepseek-v2:lite',
  'deepseek-v3',
  'deepseek-v3:671b',
  'deepseek-v3:671b-fp16',
  'deepseek-v3:671b-q4_K_M',
  'deepseek-v3:671b-q8_0',
  'deepseek-v3:latest',
  'devstral',
  'devstral:24b',
  'devstral:24b-small-2505-fp16',
  'devstral:24b-small-2505-q4_K_M',
  'devstral:24b-small-2505-q8_0',
  'devstral:latest',
  'dolphin-llama3',
  'dolphin-llama3:70b',
  'dolphin-llama3:70b-v2.9',
  'dolphin-llama3:70b-v2.9-fp16',
  'dolphin-llama3:70b-v2.9-q2_K',
  'dolphin-llama3:70b-v2.9-q3_K_L',
  'dolphin-llama3:70b-v2.9-q3_K_M',
  'dolphin-llama3:70b-v2.9-q3_K_S',
  'dolphin-llama3:70b-v2.9-q4_0',
  'dolphin-llama3:70b-v2.9-q4_1',
  'dolphin-llama3:70b-v2.9-q4_K_M',
  'dolphin-llama3:70b-v2.9-q4_K_S',
  'dolphin-llama3:70b-v2.9-q5_0',
  'dolphin-llama3:70b-v2.9-q5_1',
  'dolphin-llama3:70b-v2.9-q5_K_M',
  'dolphin-llama3:70b-v2.9-q5_K_S',
  'dolphin-llama3:70b-v2.9-q6_K',
  'dolphin-llama3:70b-v2.9-q8_0',
  'dolphin-llama3:8b',
  'dolphin-llama3:8b-256k',
  'dolphin-llama3:8b-256k-v2.9',
  'dolphin-llama3:8b-256k-v2.9-fp16',
  'dolphin-llama3:8b-256k-v2.9-q2_K',
  'dolphin-llama3:8b-256k-v2.9-q3_K_L',
  'dolphin-llama3:8b-256k-v2.9-q3_K_M',
  'dolphin-llama3:8b-256k-v2.9-q3_K_S',
  'dolphin-llama3:8b-256k-v2.9-q4_0',
  'dolphin-llama3:8b-256k-v2.9-q4_1',
  'dolphin-llama3:8b-256k-v2.9-q4_K_M',
  'dolphin-llama3:8b-256k-v2.9-q4_K_S',
  'dolphin-llama3:8b-256k-v2.9-q5_0',
  'dolphin-llama3:8b-256k-v2.9-q5_1',
  'dolphin-llama3:8b-256k-v2.9-q5_K_M',
  'dolphin-llama3:8b-256k-v2.9-q5_K_S',
  'dolphin-llama3:8b-256k-v2.9-q6_K',
  'dolphin-llama3:8b-256k-v2.9-q8_0',
  'dolphin-llama3:8b-v2.9',
  'dolphin-llama3:8b-v2.9-fp16',
  'dolphin-llama3:8b-v2.9-q2_K',
  'dolphin-llama3:8b-v2.9-q3_K_L',
  'dolphin-llama3:8b-v2.9-q3_K_M',
  'dolphin-llama3:8b-v2.9-q3_K_S',
  'dolphin-llama3:8b-v2.9-q4_0',
  'dolphin-llama3:8b-v2.9-q4_1',
  'dolphin-llama3:8b-v2.9-q4_K_M',
  'dolphin-llama3:8b-v2.9-q4_K_S',
  'dolphin-llama3:8b-v2.9-q5_0',
  'dolphin-llama3:8b-v2.9-q5_1',
  'dolphin-llama3:8b-v2.9-q5_K_M',
  'dolphin-llama3:8b-v2.9-q5_K_S',
  'dolphin-llama3:8b-v2.9-q6_K',
  'dolphin-llama3:8b-v2.9-q8_0',
  'dolphin-llama3:latest',
  'dolphin-llama3:v2.9',
  'dolphin-mistral',
  'dolphin-mistral:7b',
  'dolphin-mistral:7b-v2',
  'dolphin-mistral:7b-v2-fp16',
  'dolphin-mistral:7b-v2-q2_K',
  'dolphin-mistral:7b-v2-q3_K_L',
  'dolphin-mistral:7b-v2-q3_K_M',
  'dolphin-mistral:7b-v2-q3_K_S',
  'dolphin-mistral:7b-v2-q4_0',
  'dolphin-mistral:7b-v2-q4_1',
  'dolphin-mistral:7b-v2-q4_K_M',
  'dolphin-mistral:7b-v2-q4_K_S',
  'dolphin-mistral:7b-v2-q5_0',
  'dolphin-mistral:7b-v2-q5_1',
  'dolphin-mistral:7b-v2-q5_K_M',
  'dolphin-mistral:7b-v2-q5_K_S',
  'dolphin-mistral:7b-v2-q6_K',
  'dolphin-mistral:7b-v2-q8_0',
  'dolphin-mistral:7b-v2.1',
  'dolphin-mistral:7b-v2.1-fp16',
  'dolphin-mistral:7b-v2.1-q2_K',
  'dolphin-mistral:7b-v2.1-q3_K_L',
  'dolphin-mistral:7b-v2.1-q3_K_M',
  'dolphin-mistral:7b-v2.1-q3_K_S',
  'dolphin-mistral:7b-v2.1-q4_0',
  'dolphin-mistral:7b-v2.1-q4_1',
  'dolphin-mistral:7b-v2.1-q4_K_M',
  'dolphin-mistral:7b-v2.1-q4_K_S',
  'dolphin-mistral:7b-v2.1-q5_0',
  'dolphin-mistral:7b-v2.1-q5_1',
  'dolphin-mistral:7b-v2.1-q5_K_M',
  'dolphin-mistral:7b-v2.1-q5_K_S',
  'dolphin-mistral:7b-v2.1-q6_K',
  'dolphin-mistral:7b-v2.1-q8_0',
  'dolphin-mistral:7b-v2.2',
  'dolphin-mistral:7b-v2.2-fp16',
  'dolphin-mistral:7b-v2.2-q2_K',
  'dolphin-mistral:7b-v2.2-q3_K_L',
  'dolphin-mistral:7b-v2.2-q3_K_M',
  'dolphin-mistral:7b-v2.2-q3_K_S',
  'dolphin-mistral:7b-v2.2-q4_0',
  'dolphin-mistral:7b-v2.2-q4_1',
  'dolphin-mistral:7b-v2.2-q4_K_M',
  'dolphin-mistral:7b-v2.2-q4_K_S',
  'dolphin-mistral:7b-v2.2-q5_0',
  'dolphin-mistral:7b-v2.2-q5_1',
  'dolphin-mistral:7b-v2.2-q5_K_M',
  'dolphin-mistral:7b-v2.2-q5_K_S',
  'dolphin-mistral:7b-v2.2-q6_K',
  'dolphin-mistral:7b-v2.2-q8_0',
  'dolphin-mistral:7b-v2.2.1',
  'dolphin-mistral:7b-v2.2.1-fp16',
  'dolphin-mistral:7b-v2.2.1-q2_K',
  'dolphin-mistral:7b-v2.2.1-q3_K_L',
  'dolphin-mistral:7b-v2.2.1-q3_K_M',
  'dolphin-mistral:7b-v2.2.1-q3_K_S',
  'dolphin-mistral:7b-v2.2.1-q4_0',
  'dolphin-mistral:7b-v2.2.1-q4_1',
  'dolphin-mistral:7b-v2.2.1-q4_K_M',
  'dolphin-mistral:7b-v2.2.1-q4_K_S',
  'dolphin-mistral:7b-v2.2.1-q5_0',
  'dolphin-mistral:7b-v2.2.1-q5_1',
  'dolphin-mistral:7b-v2.2.1-q5_K_M',
  'dolphin-mistral:7b-v2.2.1-q5_K_S',
  'dolphin-mistral:7b-v2.2.1-q6_K',
  'dolphin-mistral:7b-v2.2.1-q8_0',
  'dolphin-mistral:7b-v2.6',
  'dolphin-mistral:7b-v2.6-dpo-laser',
  'dolphin-mistral:7b-v2.6-dpo-laser-fp16',
  'dolphin-mistral:7b-v2.6-dpo-laser-q2_K',
  'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_L',
  'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_M',
  'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_S',
  'dolphin-mistral:7b-v2.6-dpo-laser-q4_0',
  'dolphin-mistral:7b-v2.6-dpo-laser-q4_1',
  'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_M',
  'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_S',
  'dolphin-mistral:7b-v2.6-dpo-laser-q5_0',
  'dolphin-mistral:7b-v2.6-dpo-laser-q5_1',
  'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_M',
  'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_S',
  'dolphin-mistral:7b-v2.6-dpo-laser-q6_K',
  'dolphin-mistral:7b-v2.6-dpo-laser-q8_0',
  'dolphin-mistral:7b-v2.6-fp16',
  'dolphin-mistral:7b-v2.6-q2_K',
  'dolphin-mistral:7b-v2.6-q3_K_L',
  'dolphin-mistral:7b-v2.6-q3_K_M',
  'dolphin-mistral:7b-v2.6-q3_K_S',
  'dolphin-mistral:7b-v2.6-q4_0',
  'dolphin-mistral:7b-v2.6-q4_1',
  'dolphin-mistral:7b-v2.6-q4_K_M',
  'dolphin-mistral:7b-v2.6-q4_K_S',
  'dolphin-mistral:7b-v2.6-q5_0',
  'dolphin-mistral:7b-v2.6-q5_1',
  'dolphin-mistral:7b-v2.6-q5_K_M',
  'dolphin-mistral:7b-v2.6-q5_K_S',
  'dolphin-mistral:7b-v2.6-q6_K',
  'dolphin-mistral:7b-v2.6-q8_0',
  'dolphin-mistral:7b-v2.8',
  'dolphin-mistral:7b-v2.8-fp16',
  'dolphin-mistral:7b-v2.8-q2_K',
  'dolphin-mistral:7b-v2.8-q3_K_L',
  'dolphin-mistral:7b-v2.8-q3_K_M',
  'dolphin-mistral:7b-v2.8-q3_K_S',
  'dolphin-mistral:7b-v2.8-q4_0',
  'dolphin-mistral:7b-v2.8-q4_1',
  'dolphin-mistral:7b-v2.8-q4_K_M',
  'dolphin-mistral:7b-v2.8-q4_K_S',
  'dolphin-mistral:7b-v2.8-q5_0',
  'dolphin-mistral:7b-v2.8-q5_1',
  'dolphin-mistral:7b-v2.8-q5_K_M',
  'dolphin-mistral:7b-v2.8-q5_K_S',
  'dolphin-mistral:7b-v2.8-q6_K',
  'dolphin-mistral:7b-v2.8-q8_0',
  'dolphin-mistral:latest',
  'dolphin-mistral:v2',
  'dolphin-mistral:v2.1',
  'dolphin-mistral:v2.2',
  'dolphin-mistral:v2.2.1',
  'dolphin-mistral:v2.6',
  'dolphin-mistral:v2.8',
  'dolphin-mixtral',
  'dolphin-mixtral:8x22b',
  'dolphin-mixtral:8x22b-v2.9',
  'dolphin-mixtral:8x22b-v2.9-fp16',
  'dolphin-mixtral:8x22b-v2.9-q2_K',
  'dolphin-mixtral:8x22b-v2.9-q3_K_L',
  'dolphin-mixtral:8x22b-v2.9-q3_K_M',
  'dolphin-mixtral:8x22b-v2.9-q3_K_S',
  'dolphin-mixtral:8x22b-v2.9-q4_0',
  'dolphin-mixtral:8x22b-v2.9-q4_1',
  'dolphin-mixtral:8x22b-v2.9-q4_K_M',
  'dolphin-mixtral:8x22b-v2.9-q4_K_S',
  'dolphin-mixtral:8x22b-v2.9-q5_0',
  'dolphin-mixtral:8x22b-v2.9-q5_1',
  'dolphin-mixtral:8x22b-v2.9-q5_K_M',
  'dolphin-mixtral:8x22b-v2.9-q5_K_S',
  'dolphin-mixtral:8x22b-v2.9-q6_K',
  'dolphin-mixtral:8x22b-v2.9-q8_0',
  'dolphin-mixtral:8x7b',
  'dolphin-mixtral:8x7b-v2.5',
  'dolphin-mixtral:8x7b-v2.5-fp16',
  'dolphin-mixtral:8x7b-v2.5-q2_K',
  'dolphin-mixtral:8x7b-v2.5-q3_K_L',
  'dolphin-mixtral:8x7b-v2.5-q3_K_M',
  'dolphin-mixtral:8x7b-v2.5-q3_K_S',
  'dolphin-mixtral:8x7b-v2.5-q4_0',
  'dolphin-mixtral:8x7b-v2.5-q4_1',
  'dolphin-mixtral:8x7b-v2.5-q4_K_M',
  'dolphin-mixtral:8x7b-v2.5-q4_K_S',
  'dolphin-mixtral:8x7b-v2.5-q5_0',
  'dolphin-mixtral:8x7b-v2.5-q5_1',
  'dolphin-mixtral:8x7b-v2.5-q5_K_M',
  'dolphin-mixtral:8x7b-v2.5-q5_K_S',
  'dolphin-mixtral:8x7b-v2.5-q6_K',
  'dolphin-mixtral:8x7b-v2.5-q8_0',
  'dolphin-mixtral:8x7b-v2.6',
  'dolphin-mixtral:8x7b-v2.6-fp16',
  'dolphin-mixtral:8x7b-v2.6-q2_K',
  'dolphin-mixtral:8x7b-v2.6-q3_K_L',
  'dolphin-mixtral:8x7b-v2.6-q3_K_M',
  'dolphin-mixtral:8x7b-v2.6-q3_K_S',
  'dolphin-mixtral:8x7b-v2.6-q4_0',
  'dolphin-mixtral:8x7b-v2.6-q4_1',
  'dolphin-mixtral:8x7b-v2.6-q4_K_M',
  'dolphin-mixtral:8x7b-v2.6-q4_K_S',
  'dolphin-mixtral:8x7b-v2.6-q5_0',
  'dolphin-mixtral:8x7b-v2.6-q5_1',
  'dolphin-mixtral:8x7b-v2.6-q5_K_M',
  'dolphin-mixtral:8x7b-v2.6-q5_K_S',
  'dolphin-mixtral:8x7b-v2.6-q6_K',
  'dolphin-mixtral:8x7b-v2.6-q8_0',
  'dolphin-mixtral:8x7b-v2.7',
  'dolphin-mixtral:8x7b-v2.7-fp16',
  'dolphin-mixtral:8x7b-v2.7-q2_K',
  'dolphin-mixtral:8x7b-v2.7-q3_K_L',
  'dolphin-mixtral:8x7b-v2.7-q3_K_M',
  'dolphin-mixtral:8x7b-v2.7-q3_K_S',
  'dolphin-mixtral:8x7b-v2.7-q4_0',
  'dolphin-mixtral:8x7b-v2.7-q4_1',
  'dolphin-mixtral:8x7b-v2.7-q4_K_M',
  'dolphin-mixtral:8x7b-v2.7-q4_K_S',
  'dolphin-mixtral:8x7b-v2.7-q5_0',
  'dolphin-mixtral:8x7b-v2.7-q5_1',
  'dolphin-mixtral:8x7b-v2.7-q5_K_M',
  'dolphin-mixtral:8x7b-v2.7-q5_K_S',
  'dolphin-mixtral:8x7b-v2.7-q6_K',
  'dolphin-mixtral:8x7b-v2.7-q8_0',
  'dolphin-mixtral:latest',
  'dolphin-mixtral:v2.5',
  'dolphin-mixtral:v2.6',
  'dolphin-mixtral:v2.7',
  'dolphin-phi',
  'dolphin-phi:2.7b',
  'dolphin-phi:2.7b-v2.6',
  'dolphin-phi:2.7b-v2.6-q2_K',
  'dolphin-phi:2.7b-v2.6-q3_K_L',
  'dolphin-phi:2.7b-v2.6-q3_K_M',
  'dolphin-phi:2.7b-v2.6-q3_K_S',
  'dolphin-phi:2.7b-v2.6-q4_0',
  'dolphin-phi:2.7b-v2.6-q4_K_M',
  'dolphin-phi:2.7b-v2.6-q4_K_S',
  'dolphin-phi:2.7b-v2.6-q5_0',
  'dolphin-phi:2.7b-v2.6-q5_K_M',
  'dolphin-phi:2.7b-v2.6-q5_K_S',
  'dolphin-phi:2.7b-v2.6-q6_K',
  'dolphin-phi:2.7b-v2.6-q8_0',
  'dolphin-phi:latest',
  'dolphin3',
  'dolphin3:8b',
  'dolphin3:8b-llama3.1-fp16',
  'dolphin3:8b-llama3.1-q4_K_M',
  'dolphin3:8b-llama3.1-q8_0',
  'dolphin3:latest',
  'dolphincoder',
  'dolphincoder:15b',
  'dolphincoder:15b-starcoder2',
  'dolphincoder:15b-starcoder2-fp16',
  'dolphincoder:15b-starcoder2-q2_K',
  'dolphincoder:15b-starcoder2-q3_K_L',
  'dolphincoder:15b-starcoder2-q3_K_M',
  'dolphincoder:15b-starcoder2-q3_K_S',
  'dolphincoder:15b-starcoder2-q4_0',
  'dolphincoder:15b-starcoder2-q4_1',
  'dolphincoder:15b-starcoder2-q4_K_M',
  'dolphincoder:15b-starcoder2-q4_K_S',
  'dolphincoder:15b-starcoder2-q5_0',
  'dolphincoder:15b-starcoder2-q5_1',
  'dolphincoder:15b-starcoder2-q5_K_M',
  'dolphincoder:15b-starcoder2-q5_K_S',
  'dolphincoder:15b-starcoder2-q6_K',
  'dolphincoder:15b-starcoder2-q8_0',
  'dolphincoder:7b',
  'dolphincoder:7b-starcoder2',
  'dolphincoder:7b-starcoder2-fp16',
  'dolphincoder:7b-starcoder2-q2_K',
  'dolphincoder:7b-starcoder2-q3_K_L',
  'dolphincoder:7b-starcoder2-q3_K_M',
  'dolphincoder:7b-starcoder2-q3_K_S',
  'dolphincoder:7b-starcoder2-q4_0',
  'dolphincoder:7b-starcoder2-q4_1',
  'dolphincoder:7b-starcoder2-q4_K_M',
  'dolphincoder:7b-starcoder2-q4_K_S',
  'dolphincoder:7b-starcoder2-q5_0',
  'dolphincoder:7b-starcoder2-q5_1',
  'dolphincoder:7b-starcoder2-q5_K_M',
  'dolphincoder:7b-starcoder2-q5_K_S',
  'dolphincoder:7b-starcoder2-q6_K',
  'dolphincoder:7b-starcoder2-q8_0',
  'dolphincoder:latest',
  'duckdb-nsql',
  'duckdb-nsql:7b',
  'duckdb-nsql:7b-fp16',
  'duckdb-nsql:7b-q2_K',
  'duckdb-nsql:7b-q3_K_L',
  'duckdb-nsql:7b-q3_K_M',
  'duckdb-nsql:7b-q3_K_S',
  'duckdb-nsql:7b-q4_0',
  'duckdb-nsql:7b-q4_1',
  'duckdb-nsql:7b-q4_K_M',
  'duckdb-nsql:7b-q4_K_S',
  'duckdb-nsql:7b-q5_0',
  'duckdb-nsql:7b-q5_1',
  'duckdb-nsql:7b-q5_K_M',
  'duckdb-nsql:7b-q5_K_S',
  'duckdb-nsql:7b-q6_K',
  'duckdb-nsql:7b-q8_0',
  'duckdb-nsql:latest',
  'everythinglm',
  'everythinglm:13b',
  'everythinglm:13b-16k',
  'everythinglm:13b-16k-fp16',
  'everythinglm:13b-16k-q2_K',
  'everythinglm:13b-16k-q3_K_L',
  'everythinglm:13b-16k-q3_K_M',
  'everythinglm:13b-16k-q3_K_S',
  'everythinglm:13b-16k-q4_0',
  'everythinglm:13b-16k-q4_1',
  'everythinglm:13b-16k-q4_K_M',
  'everythinglm:13b-16k-q4_K_S',
  'everythinglm:13b-16k-q5_0',
  'everythinglm:13b-16k-q5_1',
  'everythinglm:13b-16k-q5_K_M',
  'everythinglm:13b-16k-q5_K_S',
  'everythinglm:13b-16k-q6_K',
  'everythinglm:13b-16k-q8_0',
  'everythinglm:latest',
  'exaone-deep',
  'exaone-deep:2.4b',
  'exaone-deep:2.4b-fp16',
  'exaone-deep:2.4b-q4_K_M',
  'exaone-deep:2.4b-q8_0',
  'exaone-deep:32b',
  'exaone-deep:32b-fp16',
  'exaone-deep:32b-q4_K_M',
  'exaone-deep:32b-q8_0',
  'exaone-deep:7.8b',
  'exaone-deep:7.8b-fp16',
  'exaone-deep:7.8b-q4_K_M',
  'exaone-deep:7.8b-q8_0',
  'exaone-deep:latest',
  'exaone3.5',
  'exaone3.5:2.4b',
  'exaone3.5:2.4b-instruct-fp16',
  'exaone3.5:2.4b-instruct-q4_K_M',
  'exaone3.5:2.4b-instruct-q8_0',
  'exaone3.5:32b',
  'exaone3.5:32b-instruct-fp16',
  'exaone3.5:32b-instruct-q4_K_M',
  'exaone3.5:32b-instruct-q8_0',
  'exaone3.5:7.8b',
  'exaone3.5:7.8b-instruct-fp16',
  'exaone3.5:7.8b-instruct-q4_K_M',
  'exaone3.5:7.8b-instruct-q8_0',
  'exaone3.5:latest',
  'falcon',
  'falcon2',
  'falcon2:11b',
  'falcon2:11b-fp16',
  'falcon2:11b-q2_K',
  'falcon2:11b-q3_K_L',
  'falcon2:11b-q3_K_M',
  'falcon2:11b-q3_K_S',
  'falcon2:11b-q4_0',
  'falcon2:11b-q4_1',
  'falcon2:11b-q4_K_M',
  'falcon2:11b-q4_K_S',
  'falcon2:11b-q5_0',
  'falcon2:11b-q5_1',
  'falcon2:11b-q5_K_M',
  'falcon2:11b-q5_K_S',
  'falcon2:11b-q6_K',
  'falcon2:11b-q8_0',
  'falcon2:latest',
  'falcon3',
  'falcon3:10b',
  'falcon3:10b-instruct-fp16',
  'falcon3:10b-instruct-q4_K_M',
  'falcon3:10b-instruct-q8_0',
  'falcon3:1b',
  'falcon3:1b-instruct-fp16',
  'falcon3:1b-instruct-q4_K_M',
  'falcon3:1b-instruct-q8_0',
  'falcon3:3b',
  'falcon3:3b-instruct-fp16',
  'falcon3:3b-instruct-q4_K_M',
  'falcon3:3b-instruct-q8_0',
  'falcon3:7b',
  'falcon3:7b-instruct-fp16',
  'falcon3:7b-instruct-q4_K_M',
  'falcon3:7b-instruct-q8_0',
  'falcon3:latest',
  'falcon:180b',
  'falcon:180b-chat',
  'falcon:180b-chat-q4_0',
  'falcon:180b-text',
  'falcon:180b-text-q4_0',
  'falcon:40b',
  'falcon:40b-instruct',
  'falcon:40b-instruct-fp16',
  'falcon:40b-instruct-q4_0',
  'falcon:40b-instruct-q4_1',
  'falcon:40b-instruct-q5_0',
  'falcon:40b-instruct-q5_1',
  'falcon:40b-instruct-q8_0',
  'falcon:40b-text',
  'falcon:40b-text-fp16',
  'falcon:40b-text-q4_0',
  'falcon:40b-text-q4_1',
  'falcon:40b-text-q5_0',
  'falcon:40b-text-q5_1',
  'falcon:40b-text-q8_0',
  'falcon:7b',
  'falcon:7b-instruct',
  'falcon:7b-instruct-fp16',
  'falcon:7b-instruct-q4_0',
  'falcon:7b-instruct-q4_1',
  'falcon:7b-instruct-q5_0',
  'falcon:7b-instruct-q5_1',
  'falcon:7b-instruct-q8_0',
  'falcon:7b-text',
  'falcon:7b-text-fp16',
  'falcon:7b-text-q4_0',
  'falcon:7b-text-q4_1',
  'falcon:7b-text-q5_0',
  'falcon:7b-text-q5_1',
  'falcon:7b-text-q8_0',
  'falcon:instruct',
  'falcon:latest',
  'falcon:text',
  'firefunction-v2',
  'firefunction-v2:70b',
  'firefunction-v2:70b-fp16',
  'firefunction-v2:70b-q2_K',
  'firefunction-v2:70b-q3_K_L',
  'firefunction-v2:70b-q3_K_M',
  'firefunction-v2:70b-q3_K_S',
  'firefunction-v2:70b-q4_0',
  'firefunction-v2:70b-q4_1',
  'firefunction-v2:70b-q4_K_M',
  'firefunction-v2:70b-q4_K_S',
  'firefunction-v2:70b-q5_0',
  'firefunction-v2:70b-q5_1',
  'firefunction-v2:70b-q5_K_M',
  'firefunction-v2:70b-q5_K_S',
  'firefunction-v2:70b-q6_K',
  'firefunction-v2:70b-q8_0',
  'firefunction-v2:latest',
  'gemma',
  'gemma2',
  'gemma2:27b',
  'gemma2:27b-instruct-fp16',
  'gemma2:27b-instruct-q2_K',
  'gemma2:27b-instruct-q3_K_L',
  'gemma2:27b-instruct-q3_K_M',
  'gemma2:27b-instruct-q3_K_S',
  'gemma2:27b-instruct-q4_0',
  'gemma2:27b-instruct-q4_1',
  'gemma2:27b-instruct-q4_K_M',
  'gemma2:27b-instruct-q4_K_S',
  'gemma2:27b-instruct-q5_0',
  'gemma2:27b-instruct-q5_1',
  'gemma2:27b-instruct-q5_K_M',
  'gemma2:27b-instruct-q5_K_S',
  'gemma2:27b-instruct-q6_K',
  'gemma2:27b-instruct-q8_0',
  'gemma2:27b-text-fp16',
  'gemma2:27b-text-q2_K',
  'gemma2:27b-text-q3_K_L',
  'gemma2:27b-text-q3_K_M',
  'gemma2:27b-text-q3_K_S',
  'gemma2:27b-text-q4_0',
  'gemma2:27b-text-q4_1',
  'gemma2:27b-text-q4_K_M',
  'gemma2:27b-text-q4_K_S',
  'gemma2:27b-text-q5_0',
  'gemma2:27b-text-q5_1',
  'gemma2:27b-text-q5_K_M',
  'gemma2:27b-text-q5_K_S',
  'gemma2:27b-text-q6_K',
  'gemma2:27b-text-q8_0',
  'gemma2:2b',
  'gemma2:2b-instruct-fp16',
  'gemma2:2b-instruct-q2_K',
  'gemma2:2b-instruct-q3_K_L',
  'gemma2:2b-instruct-q3_K_M',
  'gemma2:2b-instruct-q3_K_S',
  'gemma2:2b-instruct-q4_0',
  'gemma2:2b-instruct-q4_1',
  'gemma2:2b-instruct-q4_K_M',
  'gemma2:2b-instruct-q4_K_S',
  'gemma2:2b-instruct-q5_0',
  'gemma2:2b-instruct-q5_1',
  'gemma2:2b-instruct-q5_K_M',
  'gemma2:2b-instruct-q5_K_S',
  'gemma2:2b-instruct-q6_K',
  'gemma2:2b-instruct-q8_0',
  'gemma2:2b-text-fp16',
  'gemma2:2b-text-q2_K',
  'gemma2:2b-text-q3_K_L',
  'gemma2:2b-text-q3_K_M',
  'gemma2:2b-text-q3_K_S',
  'gemma2:2b-text-q4_0',
  'gemma2:2b-text-q4_1',
  'gemma2:2b-text-q4_K_M',
  'gemma2:2b-text-q4_K_S',
  'gemma2:2b-text-q5_0',
  'gemma2:2b-text-q5_1',
  'gemma2:2b-text-q5_K_M',
  'gemma2:2b-text-q5_K_S',
  'gemma2:2b-text-q6_K',
  'gemma2:2b-text-q8_0',
  'gemma2:9b',
  'gemma2:9b-instruct-fp16',
  'gemma2:9b-instruct-q2_K',
  'gemma2:9b-instruct-q3_K_L',
  'gemma2:9b-instruct-q3_K_M',
  'gemma2:9b-instruct-q3_K_S',
  'gemma2:9b-instruct-q4_0',
  'gemma2:9b-instruct-q4_1',
  'gemma2:9b-instruct-q4_K_M',
  'gemma2:9b-instruct-q4_K_S',
  'gemma2:9b-instruct-q5_0',
  'gemma2:9b-instruct-q5_1',
  'gemma2:9b-instruct-q5_K_M',
  'gemma2:9b-instruct-q5_K_S',
  'gemma2:9b-instruct-q6_K',
  'gemma2:9b-instruct-q8_0',
  'gemma2:9b-text-fp16',
  'gemma2:9b-text-q2_K',
  'gemma2:9b-text-q3_K_L',
  'gemma2:9b-text-q3_K_M',
  'gemma2:9b-text-q3_K_S',
  'gemma2:9b-text-q4_0',
  'gemma2:9b-text-q4_1',
  'gemma2:9b-text-q4_K_M',
  'gemma2:9b-text-q4_K_S',
  'gemma2:9b-text-q5_0',
  'gemma2:9b-text-q5_1',
  'gemma2:9b-text-q5_K_M',
  'gemma2:9b-text-q5_K_S',
  'gemma2:9b-text-q6_K',
  'gemma2:9b-text-q8_0',
  'gemma2:latest',
  'gemma3n',
  'gemma3n:e2b',
  'gemma3n:e2b-it-fp16',
  'gemma3n:e2b-it-q4_K_M',
  'gemma3n:e2b-it-q8_0',
  'gemma3n:e4b',
  'gemma3n:e4b-it-fp16',
  'gemma3n:e4b-it-q4_K_M',
  'gemma3n:e4b-it-q8_0',
  'gemma3n:latest',
  'gemma:2b',
  'gemma:2b-instruct',
  'gemma:2b-instruct-fp16',
  'gemma:2b-instruct-q2_K',
  'gemma:2b-instruct-q3_K_L',
  'gemma:2b-instruct-q3_K_M',
  'gemma:2b-instruct-q3_K_S',
  'gemma:2b-instruct-q4_0',
  'gemma:2b-instruct-q4_1',
  'gemma:2b-instruct-q4_K_M',
  'gemma:2b-instruct-q4_K_S',
  'gemma:2b-instruct-q5_0',
  'gemma:2b-instruct-q5_1',
  'gemma:2b-instruct-q5_K_M',
  'gemma:2b-instruct-q5_K_S',
  'gemma:2b-instruct-q6_K',
  'gemma:2b-instruct-q8_0',
  'gemma:2b-instruct-v1.1-fp16',
  'gemma:2b-instruct-v1.1-q2_K',
  'gemma:2b-instruct-v1.1-q3_K_L',
  'gemma:2b-instruct-v1.1-q3_K_M',
  'gemma:2b-instruct-v1.1-q3_K_S',
  'gemma:2b-instruct-v1.1-q4_0',
  'gemma:2b-instruct-v1.1-q4_1',
  'gemma:2b-instruct-v1.1-q4_K_M',
  'gemma:2b-instruct-v1.1-q4_K_S',
  'gemma:2b-instruct-v1.1-q5_0',
  'gemma:2b-instruct-v1.1-q5_1',
  'gemma:2b-instruct-v1.1-q5_K_M',
  'gemma:2b-instruct-v1.1-q5_K_S',
  'gemma:2b-instruct-v1.1-q6_K',
  'gemma:2b-instruct-v1.1-q8_0',
  'gemma:2b-text',
  'gemma:2b-text-fp16',
  'gemma:2b-text-q2_K',
  'gemma:2b-text-q3_K_L',
  'gemma:2b-text-q3_K_M',
  'gemma:2b-text-q3_K_S',
  'gemma:2b-text-q4_0',
  'gemma:2b-text-q4_1',
  'gemma:2b-text-q4_K_M',
  'gemma:2b-text-q4_K_S',
  'gemma:2b-text-q5_0',
  'gemma:2b-text-q5_1',
  'gemma:2b-text-q5_K_M',
  'gemma:2b-text-q5_K_S',
  'gemma:2b-text-q6_K',
  'gemma:2b-text-q8_0',
  'gemma:2b-v1.1',
  'gemma:7b',
  'gemma:7b-instruct',
  'gemma:7b-instruct-fp16',
  'gemma:7b-instruct-q2_K',
  'gemma:7b-instruct-q3_K_L',
  'gemma:7b-instruct-q3_K_M',
  'gemma:7b-instruct-q3_K_S',
  'gemma:7b-instruct-q4_0',
  'gemma:7b-instruct-q4_1',
  'gemma:7b-instruct-q4_K_M',
  'gemma:7b-instruct-q4_K_S',
  'gemma:7b-instruct-q5_0',
  'gemma:7b-instruct-q5_1',
  'gemma:7b-instruct-q5_K_M',
  'gemma:7b-instruct-q5_K_S',
  'gemma:7b-instruct-q6_K',
  'gemma:7b-instruct-q8_0',
  'gemma:7b-instruct-v1.1-fp16',
  'gemma:7b-instruct-v1.1-q2_K',
  'gemma:7b-instruct-v1.1-q3_K_L',
  'gemma:7b-instruct-v1.1-q3_K_M',
  'gemma:7b-instruct-v1.1-q3_K_S',
  'gemma:7b-instruct-v1.1-q4_0',
  'gemma:7b-instruct-v1.1-q4_1',
  'gemma:7b-instruct-v1.1-q4_K_M',
  'gemma:7b-instruct-v1.1-q4_K_S',
  'gemma:7b-instruct-v1.1-q5_0',
  'gemma:7b-instruct-v1.1-q5_1',
  'gemma:7b-instruct-v1.1-q5_K_M',
  'gemma:7b-instruct-v1.1-q5_K_S',
  'gemma:7b-instruct-v1.1-q6_K',
  'gemma:7b-instruct-v1.1-q8_0',
  'gemma:7b-text',
  'gemma:7b-text-fp16',
  'gemma:7b-text-q2_K',
  'gemma:7b-text-q3_K_L',
  'gemma:7b-text-q3_K_M',
  'gemma:7b-text-q3_K_S',
  'gemma:7b-text-q4_0',
  'gemma:7b-text-q4_1',
  'gemma:7b-text-q4_K_M',
  'gemma:7b-text-q4_K_S',
  'gemma:7b-text-q5_0',
  'gemma:7b-text-q5_1',
  'gemma:7b-text-q5_K_M',
  'gemma:7b-text-q5_K_S',
  'gemma:7b-text-q6_K',
  'gemma:7b-text-q8_0',
  'gemma:7b-v1.1',
  'gemma:instruct',
  'gemma:latest',
  'gemma:text',
  'gemma:v1.1',
  'glm4',
  'glm4:9b',
  'glm4:9b-chat-fp16',
  'glm4:9b-chat-q2_K',
  'glm4:9b-chat-q3_K_L',
  'glm4:9b-chat-q3_K_M',
  'glm4:9b-chat-q3_K_S',
  'glm4:9b-chat-q4_0',
  'glm4:9b-chat-q4_1',
  'glm4:9b-chat-q4_K_M',
  'glm4:9b-chat-q4_K_S',
  'glm4:9b-chat-q5_0',
  'glm4:9b-chat-q5_1',
  'glm4:9b-chat-q5_K_M',
  'glm4:9b-chat-q5_K_S',
  'glm4:9b-chat-q6_K',
  'glm4:9b-chat-q8_0',
  'glm4:9b-text-fp16',
  'glm4:9b-text-q2_K',
  'glm4:9b-text-q3_K_L',
  'glm4:9b-text-q3_K_M',
  'glm4:9b-text-q3_K_S',
  'glm4:9b-text-q4_0',
  'glm4:9b-text-q4_1',
  'glm4:9b-text-q4_K_M',
  'glm4:9b-text-q4_K_S',
  'glm4:9b-text-q5_0',
  'glm4:9b-text-q5_1',
  'glm4:9b-text-q5_K_M',
  'glm4:9b-text-q5_K_S',
  'glm4:9b-text-q6_K',
  'glm4:9b-text-q8_0',
  'glm4:latest',
  'goliath',
  'goliath:120b-fp16',
  'goliath:120b-q2_K',
  'goliath:120b-q3_K_L',
  'goliath:120b-q3_K_M',
  'goliath:120b-q3_K_S',
  'goliath:120b-q4_0',
  'goliath:120b-q4_1',
  'goliath:120b-q4_K_M',
  'goliath:120b-q4_K_S',
  'goliath:120b-q5_0',
  'goliath:120b-q5_1',
  'goliath:120b-q5_K_M',
  'goliath:120b-q5_K_S',
  'goliath:120b-q6_K',
  'goliath:120b-q8_0',
  'goliath:latest',
  'gpt-oss',
  'gpt-oss:120b',
  'gpt-oss:20b',
  'gpt-oss:latest',
  'granite-code',
  'granite-code:20b',
  'granite-code:20b-base',
  'granite-code:20b-base-fp16',
  'granite-code:20b-base-q2_K',
  'granite-code:20b-base-q3_K_L',
  'granite-code:20b-base-q3_K_M',
  'granite-code:20b-base-q3_K_S',
  'granite-code:20b-base-q4_0',
  'granite-code:20b-base-q4_1',
  'granite-code:20b-base-q4_K_M',
  'granite-code:20b-base-q4_K_S',
  'granite-code:20b-base-q5_0',
  'granite-code:20b-base-q5_1',
  'granite-code:20b-base-q5_K_M',
  'granite-code:20b-base-q5_K_S',
  'granite-code:20b-base-q6_K',
  'granite-code:20b-base-q8_0',
  'granite-code:20b-instruct',
  'granite-code:20b-instruct-8k-fp16',
  'granite-code:20b-instruct-8k-q2_K',
  'granite-code:20b-instruct-8k-q3_K_L',
  'granite-code:20b-instruct-8k-q3_K_M',
  'granite-code:20b-instruct-8k-q3_K_S',
  'granite-code:20b-instruct-8k-q4_0',
  'granite-code:20b-instruct-8k-q4_1',
  'granite-code:20b-instruct-8k-q4_K_M',
  'granite-code:20b-instruct-8k-q4_K_S',
  'granite-code:20b-instruct-8k-q5_0',
  'granite-code:20b-instruct-8k-q5_1',
  'granite-code:20b-instruct-8k-q5_K_M',
  'granite-code:20b-instruct-8k-q5_K_S',
  'granite-code:20b-instruct-8k-q6_K',
  'granite-code:20b-instruct-8k-q8_0',
  'granite-code:20b-instruct-q2_K',
  'granite-code:20b-instruct-q3_K_L',
  'granite-code:20b-instruct-q3_K_M',
  'granite-code:20b-instruct-q3_K_S',
  'granite-code:20b-instruct-q4_0',
  'granite-code:20b-instruct-q4_1',
  'granite-code:20b-instruct-q4_K_M',
  'granite-code:20b-instruct-q4_K_S',
  'granite-code:20b-instruct-q5_0',
  'granite-code:20b-instruct-q5_1',
  'granite-code:20b-instruct-q5_K_M',
  'granite-code:20b-instruct-q5_K_S',
  'granite-code:20b-instruct-q6_K',
  'granite-code:20b-instruct-q8_0',
  'granite-code:34b',
  'granite-code:34b-base',
  'granite-code:34b-base-q2_K',
  'granite-code:34b-base-q3_K_L',
  'granite-code:34b-base-q3_K_M',
  'granite-code:34b-base-q3_K_S',
  'granite-code:34b-base-q4_0',
  'granite-code:34b-base-q4_1',
  'granite-code:34b-base-q4_K_M',
  'granite-code:34b-base-q4_K_S',
  'granite-code:34b-base-q5_0',
  'granite-code:34b-base-q5_1',
  'granite-code:34b-base-q5_K_M',
  'granite-code:34b-base-q5_K_S',
  'granite-code:34b-base-q6_K',
  'granite-code:34b-base-q8_0',
  'granite-code:34b-instruct',
  'granite-code:34b-instruct-q2_K',
  'granite-code:34b-instruct-q3_K_L',
  'granite-code:34b-instruct-q3_K_M',
  'granite-code:34b-instruct-q3_K_S',
  'granite-code:34b-instruct-q4_0',
  'granite-code:34b-instruct-q4_1',
  'granite-code:34b-instruct-q4_K_M',
  'granite-code:34b-instruct-q4_K_S',
  'granite-code:34b-instruct-q5_0',
  'granite-code:34b-instruct-q5_1',
  'granite-code:34b-instruct-q5_K_M',
  'granite-code:34b-instruct-q5_K_S',
  'granite-code:34b-instruct-q6_K',
  'granite-code:34b-instruct-q8_0',
  'granite-code:3b',
  'granite-code:3b-base',
  'granite-code:3b-base-fp16',
  'granite-code:3b-base-q2_K',
  'granite-code:3b-base-q3_K_L',
  'granite-code:3b-base-q3_K_M',
  'granite-code:3b-base-q3_K_S',
  'granite-code:3b-base-q4_0',
  'granite-code:3b-base-q4_1',
  'granite-code:3b-base-q4_K_M',
  'granite-code:3b-base-q4_K_S',
  'granite-code:3b-base-q5_0',
  'granite-code:3b-base-q5_1',
  'granite-code:3b-base-q5_K_M',
  'granite-code:3b-base-q5_K_S',
  'granite-code:3b-base-q6_K',
  'granite-code:3b-base-q8_0',
  'granite-code:3b-instruct',
  'granite-code:3b-instruct-128k-fp16',
  'granite-code:3b-instruct-128k-q2_K',
  'granite-code:3b-instruct-128k-q3_K_L',
  'granite-code:3b-instruct-128k-q3_K_M',
  'granite-code:3b-instruct-128k-q3_K_S',
  'granite-code:3b-instruct-128k-q4_0',
  'granite-code:3b-instruct-128k-q4_1',
  'granite-code:3b-instruct-128k-q4_K_M',
  'granite-code:3b-instruct-128k-q4_K_S',
  'granite-code:3b-instruct-128k-q5_0',
  'granite-code:3b-instruct-128k-q5_1',
  'granite-code:3b-instruct-128k-q5_K_M',
  'granite-code:3b-instruct-128k-q5_K_S',
  'granite-code:3b-instruct-128k-q6_K',
  'granite-code:3b-instruct-128k-q8_0',
  'granite-code:3b-instruct-fp16',
  'granite-code:3b-instruct-q2_K',
  'granite-code:3b-instruct-q3_K_L',
  'granite-code:3b-instruct-q3_K_M',
  'granite-code:3b-instruct-q3_K_S',
  'granite-code:3b-instruct-q4_0',
  'granite-code:3b-instruct-q4_1',
  'granite-code:3b-instruct-q4_K_M',
  'granite-code:3b-instruct-q4_K_S',
  'granite-code:3b-instruct-q5_0',
  'granite-code:3b-instruct-q5_1',
  'granite-code:3b-instruct-q5_K_M',
  'granite-code:3b-instruct-q5_K_S',
  'granite-code:3b-instruct-q6_K',
  'granite-code:3b-instruct-q8_0',
  'granite-code:8b',
  'granite-code:8b-base',
  'granite-code:8b-base-fp16',
  'granite-code:8b-base-q2_K',
  'granite-code:8b-base-q3_K_L',
  'granite-code:8b-base-q3_K_M',
  'granite-code:8b-base-q3_K_S',
  'granite-code:8b-base-q4_0',
  'granite-code:8b-base-q4_1',
  'granite-code:8b-base-q4_K_M',
  'granite-code:8b-base-q4_K_S',
  'granite-code:8b-base-q5_0',
  'granite-code:8b-base-q5_1',
  'granite-code:8b-base-q5_K_M',
  'granite-code:8b-base-q5_K_S',
  'granite-code:8b-base-q6_K',
  'granite-code:8b-base-q8_0',
  'granite-code:8b-instruct',
  'granite-code:8b-instruct-128k-q4_0',
  'granite-code:8b-instruct-128k-q4_1',
  'granite-code:8b-instruct-fp16',
  'granite-code:8b-instruct-q2_K',
  'granite-code:8b-instruct-q3_K_L',
  'granite-code:8b-instruct-q3_K_M',
  'granite-code:8b-instruct-q3_K_S',
  'granite-code:8b-instruct-q4_0',
  'granite-code:8b-instruct-q4_1',
  'granite-code:8b-instruct-q4_K_M',
  'granite-code:8b-instruct-q4_K_S',
  'granite-code:8b-instruct-q5_0',
  'granite-code:8b-instruct-q5_1',
  'granite-code:8b-instruct-q5_K_M',
  'granite-code:8b-instruct-q5_K_S',
  'granite-code:8b-instruct-q6_K',
  'granite-code:8b-instruct-q8_0',
  'granite-code:latest',
  'granite3-dense',
  'granite3-dense:2b',
  'granite3-dense:2b-instruct-fp16',
  'granite3-dense:2b-instruct-q2_K',
  'granite3-dense:2b-instruct-q3_K_L',
  'granite3-dense:2b-instruct-q3_K_M',
  'granite3-dense:2b-instruct-q3_K_S',
  'granite3-dense:2b-instruct-q4_0',
  'granite3-dense:2b-instruct-q4_1',
  'granite3-dense:2b-instruct-q4_K_M',
  'granite3-dense:2b-instruct-q4_K_S',
  'granite3-dense:2b-instruct-q5_0',
  'granite3-dense:2b-instruct-q5_1',
  'granite3-dense:2b-instruct-q5_K_M',
  'granite3-dense:2b-instruct-q5_K_S',
  'granite3-dense:2b-instruct-q6_K',
  'granite3-dense:2b-instruct-q8_0',
  'granite3-dense:8b',
  'granite3-dense:8b-instruct-fp16',
  'granite3-dense:8b-instruct-q2_K',
  'granite3-dense:8b-instruct-q3_K_L',
  'granite3-dense:8b-instruct-q3_K_M',
  'granite3-dense:8b-instruct-q3_K_S',
  'granite3-dense:8b-instruct-q4_0',
  'granite3-dense:8b-instruct-q4_1',
  'granite3-dense:8b-instruct-q4_K_M',
  'granite3-dense:8b-instruct-q4_K_S',
  'granite3-dense:8b-instruct-q5_0',
  'granite3-dense:8b-instruct-q5_1',
  'granite3-dense:8b-instruct-q5_K_M',
  'granite3-dense:8b-instruct-q5_K_S',
  'granite3-dense:8b-instruct-q6_K',
  'granite3-dense:8b-instruct-q8_0',
  'granite3-dense:latest',
  'granite3-guardian',
  'granite3-guardian:2b',
  'granite3-guardian:2b-fp16',
  'granite3-guardian:2b-q8_0',
  'granite3-guardian:8b',
  'granite3-guardian:8b-fp16',
  'granite3-guardian:8b-q5_K_M',
  'granite3-guardian:8b-q5_K_S',
  'granite3-guardian:8b-q6_K',
  'granite3-guardian:8b-q8_0',
  'granite3-guardian:latest',
  'granite3-moe',
  'granite3-moe:1b',
  'granite3-moe:1b-instruct-fp16',
  'granite3-moe:1b-instruct-q2_K',
  'granite3-moe:1b-instruct-q3_K_L',
  'granite3-moe:1b-instruct-q3_K_M',
  'granite3-moe:1b-instruct-q3_K_S',
  'granite3-moe:1b-instruct-q4_0',
  'granite3-moe:1b-instruct-q4_1',
  'granite3-moe:1b-instruct-q4_K_M',
  'granite3-moe:1b-instruct-q4_K_S',
  'granite3-moe:1b-instruct-q5_0',
  'granite3-moe:1b-instruct-q5_1',
  'granite3-moe:1b-instruct-q5_K_M',
  'granite3-moe:1b-instruct-q5_K_S',
  'granite3-moe:1b-instruct-q6_K',
  'granite3-moe:1b-instruct-q8_0',
  'granite3-moe:3b',
  'granite3-moe:3b-instruct-fp16',
  'granite3-moe:3b-instruct-q2_K',
  'granite3-moe:3b-instruct-q3_K_L',
  'granite3-moe:3b-instruct-q3_K_M',
  'granite3-moe:3b-instruct-q3_K_S',
  'granite3-moe:3b-instruct-q4_0',
  'granite3-moe:3b-instruct-q4_1',
  'granite3-moe:3b-instruct-q4_K_M',
  'granite3-moe:3b-instruct-q4_K_S',
  'granite3-moe:3b-instruct-q5_0',
  'granite3-moe:3b-instruct-q5_1',
  'granite3-moe:3b-instruct-q5_K_M',
  'granite3-moe:3b-instruct-q5_K_S',
  'granite3-moe:3b-instruct-q6_K',
  'granite3-moe:3b-instruct-q8_0',
  'granite3-moe:latest',
  'granite3.1-dense',
  'granite3.1-dense:2b',
  'granite3.1-dense:2b-instruct-fp16',
  'granite3.1-dense:2b-instruct-q2_K',
  'granite3.1-dense:2b-instruct-q3_K_L',
  'granite3.1-dense:2b-instruct-q3_K_M',
  'granite3.1-dense:2b-instruct-q3_K_S',
  'granite3.1-dense:2b-instruct-q4_0',
  'granite3.1-dense:2b-instruct-q4_1',
  'granite3.1-dense:2b-instruct-q4_K_M',
  'granite3.1-dense:2b-instruct-q4_K_S',
  'granite3.1-dense:2b-instruct-q5_0',
  'granite3.1-dense:2b-instruct-q5_1',
  'granite3.1-dense:2b-instruct-q5_K_M',
  'granite3.1-dense:2b-instruct-q5_K_S',
  'granite3.1-dense:2b-instruct-q6_K',
  'granite3.1-dense:2b-instruct-q8_0',
  'granite3.1-dense:8b',
  'granite3.1-dense:8b-instruct-fp16',
  'granite3.1-dense:8b-instruct-q2_K',
  'granite3.1-dense:8b-instruct-q3_K_L',
  'granite3.1-dense:8b-instruct-q3_K_M',
  'granite3.1-dense:8b-instruct-q3_K_S',
  'granite3.1-dense:8b-instruct-q4_0',
  'granite3.1-dense:8b-instruct-q4_1',
  'granite3.1-dense:8b-instruct-q4_K_M',
  'granite3.1-dense:8b-instruct-q4_K_S',
  'granite3.1-dense:8b-instruct-q5_0',
  'granite3.1-dense:8b-instruct-q5_1',
  'granite3.1-dense:8b-instruct-q5_K_M',
  'granite3.1-dense:8b-instruct-q5_K_S',
  'granite3.1-dense:8b-instruct-q6_K',
  'granite3.1-dense:8b-instruct-q8_0',
  'granite3.1-dense:latest',
  'granite3.1-moe',
  'granite3.1-moe:1b',
  'granite3.1-moe:1b-instruct-fp16',
  'granite3.1-moe:1b-instruct-q2_K',
  'granite3.1-moe:1b-instruct-q3_K_L',
  'granite3.1-moe:1b-instruct-q3_K_M',
  'granite3.1-moe:1b-instruct-q3_K_S',
  'granite3.1-moe:1b-instruct-q4_0',
  'granite3.1-moe:1b-instruct-q4_1',
  'granite3.1-moe:1b-instruct-q4_K_M',
  'granite3.1-moe:1b-instruct-q4_K_S',
  'granite3.1-moe:1b-instruct-q5_0',
  'granite3.1-moe:1b-instruct-q5_1',
  'granite3.1-moe:1b-instruct-q5_K_M',
  'granite3.1-moe:1b-instruct-q5_K_S',
  'granite3.1-moe:1b-instruct-q6_K',
  'granite3.1-moe:1b-instruct-q8_0',
  'granite3.1-moe:3b',
  'granite3.1-moe:3b-instruct-fp16',
  'granite3.1-moe:3b-instruct-q2_K',
  'granite3.1-moe:3b-instruct-q3_K_L',
  'granite3.1-moe:3b-instruct-q3_K_M',
  'granite3.1-moe:3b-instruct-q3_K_S',
  'granite3.1-moe:3b-instruct-q4_0',
  'granite3.1-moe:3b-instruct-q4_1',
  'granite3.1-moe:3b-instruct-q4_K_M',
  'granite3.1-moe:3b-instruct-q4_K_S',
  'granite3.1-moe:3b-instruct-q5_0',
  'granite3.1-moe:3b-instruct-q5_1',
  'granite3.1-moe:3b-instruct-q5_K_M',
  'granite3.1-moe:3b-instruct-q5_K_S',
  'granite3.1-moe:3b-instruct-q6_K',
  'granite3.1-moe:3b-instruct-q8_0',
  'granite3.1-moe:latest',
  'granite3.2',
  'granite3.2:2b',
  'granite3.2:2b-instruct-fp16',
  'granite3.2:2b-instruct-q4_K_M',
  'granite3.2:2b-instruct-q8_0',
  'granite3.2:8b',
  'granite3.2:8b-instruct-fp16',
  'granite3.2:8b-instruct-q4_K_M',
  'granite3.2:8b-instruct-q8_0',
  'granite3.2:latest',
  'granite3.3',
  'granite3.3:2b',
  'granite3.3:8b',
  'granite3.3:latest',
  'hermes3',
  'hermes3:3b',
  'hermes3:3b-llama3.2-fp16',
  'hermes3:3b-llama3.2-q2_K',
  'hermes3:3b-llama3.2-q3_K_L',
  'hermes3:3b-llama3.2-q3_K_M',
  'hermes3:3b-llama3.2-q3_K_S',
  'hermes3:3b-llama3.2-q4_0',
  'hermes3:3b-llama3.2-q4_1',
  'hermes3:3b-llama3.2-q4_K_M',
  'hermes3:3b-llama3.2-q4_K_S',
  'hermes3:3b-llama3.2-q5_0',
  'hermes3:3b-llama3.2-q5_1',
  'hermes3:3b-llama3.2-q5_K_M',
  'hermes3:3b-llama3.2-q5_K_S',
  'hermes3:3b-llama3.2-q6_K',
  'hermes3:3b-llama3.2-q8_0',
  'hermes3:405b',
  'hermes3:405b-llama3.1-fp16',
  'hermes3:405b-llama3.1-q2_K',
  'hermes3:405b-llama3.1-q3_K_L',
  'hermes3:405b-llama3.1-q3_K_M',
  'hermes3:405b-llama3.1-q3_K_S',
  'hermes3:405b-llama3.1-q4_0',
  'hermes3:405b-llama3.1-q4_1',
  'hermes3:405b-llama3.1-q4_K_M',
  'hermes3:405b-llama3.1-q4_K_S',
  'hermes3:405b-llama3.1-q5_0',
  'hermes3:405b-llama3.1-q5_1',
  'hermes3:405b-llama3.1-q5_K_M',
  'hermes3:405b-llama3.1-q5_K_S',
  'hermes3:405b-llama3.1-q6_K',
  'hermes3:405b-llama3.1-q8_0',
  'hermes3:70b',
  'hermes3:70b-llama3.1-fp16',
  'hermes3:70b-llama3.1-q2_K',
  'hermes3:70b-llama3.1-q3_K_L',
  'hermes3:70b-llama3.1-q3_K_M',
  'hermes3:70b-llama3.1-q3_K_S',
  'hermes3:70b-llama3.1-q4_0',
  'hermes3:70b-llama3.1-q4_1',
  'hermes3:70b-llama3.1-q4_K_M',
  'hermes3:70b-llama3.1-q4_K_S',
  'hermes3:70b-llama3.1-q5_0',
  'hermes3:70b-llama3.1-q5_1',
  'hermes3:70b-llama3.1-q5_K_M',
  'hermes3:70b-llama3.1-q5_K_S',
  'hermes3:70b-llama3.1-q6_K',
  'hermes3:70b-llama3.1-q8_0',
  'hermes3:8b',
  'hermes3:8b-llama3.1-fp16',
  'hermes3:8b-llama3.1-q2_K',
  'hermes3:8b-llama3.1-q3_K_L',
  'hermes3:8b-llama3.1-q3_K_M',
  'hermes3:8b-llama3.1-q3_K_S',
  'hermes3:8b-llama3.1-q4_0',
  'hermes3:8b-llama3.1-q4_1',
  'hermes3:8b-llama3.1-q4_K_M',
  'hermes3:8b-llama3.1-q4_K_S',
  'hermes3:8b-llama3.1-q5_0',
  'hermes3:8b-llama3.1-q5_1',
  'hermes3:8b-llama3.1-q5_K_M',
  'hermes3:8b-llama3.1-q5_K_S',
  'hermes3:8b-llama3.1-q6_K',
  'hermes3:8b-llama3.1-q8_0',
  'hermes3:latest',
  'internlm2',
  'internlm2:1.8b',
  'internlm2:1.8b-chat-v2.5-fp16',
  'internlm2:1.8b-chat-v2.5-q2_K',
  'internlm2:1.8b-chat-v2.5-q3_K_L',
  'internlm2:1.8b-chat-v2.5-q3_K_M',
  'internlm2:1.8b-chat-v2.5-q3_K_S',
  'internlm2:1.8b-chat-v2.5-q4_0',
  'internlm2:1.8b-chat-v2.5-q4_1',
  'internlm2:1.8b-chat-v2.5-q4_K_M',
  'internlm2:1.8b-chat-v2.5-q4_K_S',
  'internlm2:1.8b-chat-v2.5-q5_0',
  'internlm2:1.8b-chat-v2.5-q5_1',
  'internlm2:1.8b-chat-v2.5-q5_K_M',
  'internlm2:1.8b-chat-v2.5-q5_K_S',
  'internlm2:1.8b-chat-v2.5-q6_K',
  'internlm2:1.8b-chat-v2.5-q8_0',
  'internlm2:1m',
  'internlm2:20b',
  'internlm2:20b-chat-v2.5-fp16',
  'internlm2:20b-chat-v2.5-q2_K',
  'internlm2:20b-chat-v2.5-q3_K_L',
  'internlm2:20b-chat-v2.5-q3_K_M',
  'internlm2:20b-chat-v2.5-q3_K_S',
  'internlm2:20b-chat-v2.5-q4_0',
  'internlm2:20b-chat-v2.5-q4_1',
  'internlm2:20b-chat-v2.5-q4_K_M',
  'internlm2:20b-chat-v2.5-q4_K_S',
  'internlm2:20b-chat-v2.5-q5_0',
  'internlm2:20b-chat-v2.5-q5_1',
  'internlm2:20b-chat-v2.5-q5_K_M',
  'internlm2:20b-chat-v2.5-q5_K_S',
  'internlm2:20b-chat-v2.5-q6_K',
  'internlm2:20b-chat-v2.5-q8_0',
  'internlm2:7b',
  'internlm2:7b-chat-1m-v2.5-fp16',
  'internlm2:7b-chat-1m-v2.5-q2_K',
  'internlm2:7b-chat-1m-v2.5-q3_K_L',
  'internlm2:7b-chat-1m-v2.5-q3_K_M',
  'internlm2:7b-chat-1m-v2.5-q3_K_S',
  'internlm2:7b-chat-1m-v2.5-q4_0',
  'internlm2:7b-chat-1m-v2.5-q4_1',
  'internlm2:7b-chat-1m-v2.5-q4_K_M',
  'internlm2:7b-chat-1m-v2.5-q4_K_S',
  'internlm2:7b-chat-1m-v2.5-q5_0',
  'internlm2:7b-chat-1m-v2.5-q5_1',
  'internlm2:7b-chat-1m-v2.5-q5_K_M',
  'internlm2:7b-chat-1m-v2.5-q5_K_S',
  'internlm2:7b-chat-1m-v2.5-q6_K',
  'internlm2:7b-chat-1m-v2.5-q8_0',
  'internlm2:7b-chat-v2.5-fp16',
  'internlm2:7b-chat-v2.5-q2_K',
  'internlm2:7b-chat-v2.5-q3_K_L',
  'internlm2:7b-chat-v2.5-q3_K_M',
  'internlm2:7b-chat-v2.5-q3_K_S',
  'internlm2:7b-chat-v2.5-q4_0',
  'internlm2:7b-chat-v2.5-q4_1',
  'internlm2:7b-chat-v2.5-q4_K_M',
  'internlm2:7b-chat-v2.5-q4_K_S',
  'internlm2:7b-chat-v2.5-q5_0',
  'internlm2:7b-chat-v2.5-q5_1',
  'internlm2:7b-chat-v2.5-q5_K_M',
  'internlm2:7b-chat-v2.5-q5_K_S',
  'internlm2:7b-chat-v2.5-q6_K',
  'internlm2:7b-chat-v2.5-q8_0',
  'internlm2:latest',
  'llama-guard3',
  'llama-guard3:1b',
  'llama-guard3:1b-fp16',
  'llama-guard3:1b-q2_K',
  'llama-guard3:1b-q3_K_L',
  'llama-guard3:1b-q3_K_M',
  'llama-guard3:1b-q3_K_S',
  'llama-guard3:1b-q4_0',
  'llama-guard3:1b-q4_1',
  'llama-guard3:1b-q4_K_M',
  'llama-guard3:1b-q4_K_S',
  'llama-guard3:1b-q5_0',
  'llama-guard3:1b-q5_1',
  'llama-guard3:1b-q5_K_M',
  'llama-guard3:1b-q5_K_S',
  'llama-guard3:1b-q6_K',
  'llama-guard3:1b-q8_0',
  'llama-guard3:8b',
  'llama-guard3:8b-fp16',
  'llama-guard3:8b-q2_K',
  'llama-guard3:8b-q3_K_L',
  'llama-guard3:8b-q3_K_M',
  'llama-guard3:8b-q3_K_S',
  'llama-guard3:8b-q4_0',
  'llama-guard3:8b-q4_1',
  'llama-guard3:8b-q4_K_M',
  'llama-guard3:8b-q4_K_S',
  'llama-guard3:8b-q5_0',
  'llama-guard3:8b-q5_1',
  'llama-guard3:8b-q5_K_M',
  'llama-guard3:8b-q5_K_S',
  'llama-guard3:8b-q6_K',
  'llama-guard3:8b-q8_0',
  'llama-guard3:latest',
  'llama-pro',
  'llama-pro:8b-instruct-fp16',
  'llama-pro:8b-instruct-q2_K',
  'llama-pro:8b-instruct-q3_K_L',
  'llama-pro:8b-instruct-q3_K_M',
  'llama-pro:8b-instruct-q3_K_S',
  'llama-pro:8b-instruct-q4_0',
  'llama-pro:8b-instruct-q4_1',
  'llama-pro:8b-instruct-q4_K_M',
  'llama-pro:8b-instruct-q4_K_S',
  'llama-pro:8b-instruct-q5_0',
  'llama-pro:8b-instruct-q5_1',
  'llama-pro:8b-instruct-q5_K_M',
  'llama-pro:8b-instruct-q5_K_S',
  'llama-pro:8b-instruct-q6_K',
  'llama-pro:8b-instruct-q8_0',
  'llama-pro:8b-text-fp16',
  'llama-pro:8b-text-q2_K',
  'llama-pro:8b-text-q3_K_L',
  'llama-pro:8b-text-q3_K_M',
  'llama-pro:8b-text-q3_K_S',
  'llama-pro:8b-text-q4_0',
  'llama-pro:8b-text-q4_1',
  'llama-pro:8b-text-q4_K_M',
  'llama-pro:8b-text-q4_K_S',
  'llama-pro:8b-text-q5_0',
  'llama-pro:8b-text-q5_1',
  'llama-pro:8b-text-q5_K_M',
  'llama-pro:8b-text-q5_K_S',
  'llama-pro:8b-text-q6_K',
  'llama-pro:8b-text-q8_0',
  'llama-pro:instruct',
  'llama-pro:latest',
  'llama-pro:text',
  'llama2',
  'llama2-chinese',
  'llama2-chinese:13b',
  'llama2-chinese:13b-chat',
  'llama2-chinese:13b-chat-fp16',
  'llama2-chinese:13b-chat-q2_K',
  'llama2-chinese:13b-chat-q3_K_L',
  'llama2-chinese:13b-chat-q3_K_M',
  'llama2-chinese:13b-chat-q3_K_S',
  'llama2-chinese:13b-chat-q4_0',
  'llama2-chinese:13b-chat-q4_1',
  'llama2-chinese:13b-chat-q4_K_M',
  'llama2-chinese:13b-chat-q4_K_S',
  'llama2-chinese:13b-chat-q5_0',
  'llama2-chinese:13b-chat-q5_1',
  'llama2-chinese:13b-chat-q5_K_M',
  'llama2-chinese:13b-chat-q5_K_S',
  'llama2-chinese:13b-chat-q6_K',
  'llama2-chinese:13b-chat-q8_0',
  'llama2-chinese:7b',
  'llama2-chinese:7b-chat',
  'llama2-chinese:7b-chat-fp16',
  'llama2-chinese:7b-chat-q2_K',
  'llama2-chinese:7b-chat-q3_K_L',
  'llama2-chinese:7b-chat-q3_K_M',
  'llama2-chinese:7b-chat-q3_K_S',
  'llama2-chinese:7b-chat-q4_0',
  'llama2-chinese:7b-chat-q4_1',
  'llama2-chinese:7b-chat-q4_K_M',
  'llama2-chinese:7b-chat-q4_K_S',
  'llama2-chinese:7b-chat-q5_0',
  'llama2-chinese:7b-chat-q5_1',
  'llama2-chinese:7b-chat-q5_K_M',
  'llama2-chinese:7b-chat-q5_K_S',
  'llama2-chinese:7b-chat-q6_K',
  'llama2-chinese:7b-chat-q8_0',
  'llama2-chinese:latest',
  'llama2-uncensored',
  'llama2-uncensored:70b',
  'llama2-uncensored:70b-chat',
  'llama2-uncensored:70b-chat-q2_K',
  'llama2-uncensored:70b-chat-q3_K_L',
  'llama2-uncensored:70b-chat-q3_K_M',
  'llama2-uncensored:70b-chat-q3_K_S',
  'llama2-uncensored:70b-chat-q4_0',
  'llama2-uncensored:70b-chat-q4_1',
  'llama2-uncensored:70b-chat-q4_K_M',
  'llama2-uncensored:70b-chat-q4_K_S',
  'llama2-uncensored:70b-chat-q5_0',
  'llama2-uncensored:70b-chat-q5_1',
  'llama2-uncensored:70b-chat-q5_K_M',
  'llama2-uncensored:70b-chat-q5_K_S',
  'llama2-uncensored:70b-chat-q6_K',
  'llama2-uncensored:70b-chat-q8_0',
  'llama2-uncensored:7b',
  'llama2-uncensored:7b-chat',
  'llama2-uncensored:7b-chat-fp16',
  'llama2-uncensored:7b-chat-q2_K',
  'llama2-uncensored:7b-chat-q3_K_L',
  'llama2-uncensored:7b-chat-q3_K_M',
  'llama2-uncensored:7b-chat-q3_K_S',
  'llama2-uncensored:7b-chat-q4_0',
  'llama2-uncensored:7b-chat-q4_1',
  'llama2-uncensored:7b-chat-q4_K_M',
  'llama2-uncensored:7b-chat-q4_K_S',
  'llama2-uncensored:7b-chat-q5_0',
  'llama2-uncensored:7b-chat-q5_1',
  'llama2-uncensored:7b-chat-q5_K_M',
  'llama2-uncensored:7b-chat-q5_K_S',
  'llama2-uncensored:7b-chat-q6_K',
  'llama2-uncensored:7b-chat-q8_0',
  'llama2-uncensored:latest',
  'llama2:13b',
  'llama2:13b-chat',
  'llama2:13b-chat-fp16',
  'llama2:13b-chat-q2_K',
  'llama2:13b-chat-q3_K_L',
  'llama2:13b-chat-q3_K_M',
  'llama2:13b-chat-q3_K_S',
  'llama2:13b-chat-q4_0',
  'llama2:13b-chat-q4_1',
  'llama2:13b-chat-q4_K_M',
  'llama2:13b-chat-q4_K_S',
  'llama2:13b-chat-q5_0',
  'llama2:13b-chat-q5_1',
  'llama2:13b-chat-q5_K_M',
  'llama2:13b-chat-q5_K_S',
  'llama2:13b-chat-q6_K',
  'llama2:13b-chat-q8_0',
  'llama2:13b-text',
  'llama2:13b-text-fp16',
  'llama2:13b-text-q2_K',
  'llama2:13b-text-q3_K_L',
  'llama2:13b-text-q3_K_M',
  'llama2:13b-text-q3_K_S',
  'llama2:13b-text-q4_0',
  'llama2:13b-text-q4_1',
  'llama2:13b-text-q4_K_M',
  'llama2:13b-text-q4_K_S',
  'llama2:13b-text-q5_0',
  'llama2:13b-text-q5_1',
  'llama2:13b-text-q5_K_M',
  'llama2:13b-text-q5_K_S',
  'llama2:13b-text-q6_K',
  'llama2:13b-text-q8_0',
  'llama2:70b',
  'llama2:70b-chat',
  'llama2:70b-chat-fp16',
  'llama2:70b-chat-q2_K',
  'llama2:70b-chat-q3_K_L',
  'llama2:70b-chat-q3_K_M',
  'llama2:70b-chat-q3_K_S',
  'llama2:70b-chat-q4_0',
  'llama2:70b-chat-q4_1',
  'llama2:70b-chat-q4_K_M',
  'llama2:70b-chat-q4_K_S',
  'llama2:70b-chat-q5_0',
  'llama2:70b-chat-q5_1',
  'llama2:70b-chat-q5_K_M',
  'llama2:70b-chat-q5_K_S',
  'llama2:70b-chat-q6_K',
  'llama2:70b-chat-q8_0',
  'llama2:70b-text',
  'llama2:70b-text-fp16',
  'llama2:70b-text-q2_K',
  'llama2:70b-text-q3_K_L',
  'llama2:70b-text-q3_K_M',
  'llama2:70b-text-q3_K_S',
  'llama2:70b-text-q4_0',
  'llama2:70b-text-q4_1',
  'llama2:70b-text-q4_K_M',
  'llama2:70b-text-q4_K_S',
  'llama2:70b-text-q5_0',
  'llama2:70b-text-q5_1',
  'llama2:70b-text-q5_K_M',
  'llama2:70b-text-q5_K_S',
  'llama2:70b-text-q6_K',
  'llama2:70b-text-q8_0',
  'llama2:7b',
  'llama2:7b-chat',
  'llama2:7b-chat-fp16',
  'llama2:7b-chat-q2_K',
  'llama2:7b-chat-q3_K_L',
  'llama2:7b-chat-q3_K_M',
  'llama2:7b-chat-q3_K_S',
  'llama2:7b-chat-q4_0',
  'llama2:7b-chat-q4_1',
  'llama2:7b-chat-q4_K_M',
  'llama2:7b-chat-q4_K_S',
  'llama2:7b-chat-q5_0',
  'llama2:7b-chat-q5_1',
  'llama2:7b-chat-q5_K_M',
  'llama2:7b-chat-q5_K_S',
  'llama2:7b-chat-q6_K',
  'llama2:7b-chat-q8_0',
  'llama2:7b-text',
  'llama2:7b-text-fp16',
  'llama2:7b-text-q2_K',
  'llama2:7b-text-q3_K_L',
  'llama2:7b-text-q3_K_M',
  'llama2:7b-text-q3_K_S',
  'llama2:7b-text-q4_0',
  'llama2:7b-text-q4_1',
  'llama2:7b-text-q4_K_M',
  'llama2:7b-text-q4_K_S',
  'llama2:7b-text-q5_0',
  'llama2:7b-text-q5_1',
  'llama2:7b-text-q5_K_M',
  'llama2:7b-text-q5_K_S',
  'llama2:7b-text-q6_K',
  'llama2:7b-text-q8_0',
  'llama2:chat',
  'llama2:latest',
  'llama2:text',
  'llama3',
  'llama3-chatqa',
  'llama3-chatqa:70b',
  'llama3-chatqa:70b-v1.5',
  'llama3-chatqa:70b-v1.5-fp16',
  'llama3-chatqa:70b-v1.5-q2_K',
  'llama3-chatqa:70b-v1.5-q3_K_L',
  'llama3-chatqa:70b-v1.5-q3_K_M',
  'llama3-chatqa:70b-v1.5-q3_K_S',
  'llama3-chatqa:70b-v1.5-q4_0',
  'llama3-chatqa:70b-v1.5-q4_1',
  'llama3-chatqa:70b-v1.5-q4_K_M',
  'llama3-chatqa:70b-v1.5-q4_K_S',
  'llama3-chatqa:70b-v1.5-q5_0',
  'llama3-chatqa:70b-v1.5-q5_1',
  'llama3-chatqa:70b-v1.5-q5_K_M',
  'llama3-chatqa:70b-v1.5-q5_K_S',
  'llama3-chatqa:70b-v1.5-q6_K',
  'llama3-chatqa:70b-v1.5-q8_0',
  'llama3-chatqa:8b',
  'llama3-chatqa:8b-v1.5',
  'llama3-chatqa:8b-v1.5-fp16',
  'llama3-chatqa:8b-v1.5-q2_K',
  'llama3-chatqa:8b-v1.5-q3_K_L',
  'llama3-chatqa:8b-v1.5-q3_K_M',
  'llama3-chatqa:8b-v1.5-q3_K_S',
  'llama3-chatqa:8b-v1.5-q4_0',
  'llama3-chatqa:8b-v1.5-q4_1',
  'llama3-chatqa:8b-v1.5-q4_K_M',
  'llama3-chatqa:8b-v1.5-q4_K_S',
  'llama3-chatqa:8b-v1.5-q5_0',
  'llama3-chatqa:8b-v1.5-q5_1',
  'llama3-chatqa:8b-v1.5-q5_K_M',
  'llama3-chatqa:8b-v1.5-q5_K_S',
  'llama3-chatqa:8b-v1.5-q6_K',
  'llama3-chatqa:8b-v1.5-q8_0',
  'llama3-chatqa:latest',
  'llama3-gradient',
  'llama3-gradient:1048k',
  'llama3-gradient:70b',
  'llama3-gradient:70b-instruct-1048k-fp16',
  'llama3-gradient:70b-instruct-1048k-q2_K',
  'llama3-gradient:70b-instruct-1048k-q3_K_L',
  'llama3-gradient:70b-instruct-1048k-q3_K_M',
  'llama3-gradient:70b-instruct-1048k-q3_K_S',
  'llama3-gradient:70b-instruct-1048k-q4_0',
  'llama3-gradient:70b-instruct-1048k-q4_1',
  'llama3-gradient:70b-instruct-1048k-q4_K_M',
  'llama3-gradient:70b-instruct-1048k-q4_K_S',
  'llama3-gradient:70b-instruct-1048k-q5_0',
  'llama3-gradient:70b-instruct-1048k-q5_1',
  'llama3-gradient:70b-instruct-1048k-q5_K_M',
  'llama3-gradient:70b-instruct-1048k-q5_K_S',
  'llama3-gradient:70b-instruct-1048k-q6_K',
  'llama3-gradient:70b-instruct-1048k-q8_0',
  'llama3-gradient:8b',
  'llama3-gradient:8b-instruct-1048k-fp16',
  'llama3-gradient:8b-instruct-1048k-q2_K',
  'llama3-gradient:8b-instruct-1048k-q3_K_L',
  'llama3-gradient:8b-instruct-1048k-q3_K_M',
  'llama3-gradient:8b-instruct-1048k-q3_K_S',
  'llama3-gradient:8b-instruct-1048k-q4_0',
  'llama3-gradient:8b-instruct-1048k-q4_1',
  'llama3-gradient:8b-instruct-1048k-q4_K_M',
  'llama3-gradient:8b-instruct-1048k-q4_K_S',
  'llama3-gradient:8b-instruct-1048k-q5_0',
  'llama3-gradient:8b-instruct-1048k-q5_1',
  'llama3-gradient:8b-instruct-1048k-q5_K_M',
  'llama3-gradient:8b-instruct-1048k-q5_K_S',
  'llama3-gradient:8b-instruct-1048k-q6_K',
  'llama3-gradient:8b-instruct-1048k-q8_0',
  'llama3-gradient:instruct',
  'llama3-gradient:latest',
  'llama3-groq-tool-use',
  'llama3-groq-tool-use:70b',
  'llama3-groq-tool-use:70b-fp16',
  'llama3-groq-tool-use:70b-q2_K',
  'llama3-groq-tool-use:70b-q3_K_L',
  'llama3-groq-tool-use:70b-q3_K_M',
  'llama3-groq-tool-use:70b-q3_K_S',
  'llama3-groq-tool-use:70b-q4_0',
  'llama3-groq-tool-use:70b-q4_1',
  'llama3-groq-tool-use:70b-q4_K_M',
  'llama3-groq-tool-use:70b-q4_K_S',
  'llama3-groq-tool-use:70b-q5_0',
  'llama3-groq-tool-use:70b-q5_1',
  'llama3-groq-tool-use:70b-q5_K_M',
  'llama3-groq-tool-use:70b-q5_K_S',
  'llama3-groq-tool-use:70b-q6_K',
  'llama3-groq-tool-use:70b-q8_0',
  'llama3-groq-tool-use:8b',
  'llama3-groq-tool-use:8b-fp16',
  'llama3-groq-tool-use:8b-q2_K',
  'llama3-groq-tool-use:8b-q3_K_L',
  'llama3-groq-tool-use:8b-q3_K_M',
  'llama3-groq-tool-use:8b-q3_K_S',
  'llama3-groq-tool-use:8b-q4_0',
  'llama3-groq-tool-use:8b-q4_1',
  'llama3-groq-tool-use:8b-q4_K_M',
  'llama3-groq-tool-use:8b-q4_K_S',
  'llama3-groq-tool-use:8b-q5_0',
  'llama3-groq-tool-use:8b-q5_1',
  'llama3-groq-tool-use:8b-q5_K_M',
  'llama3-groq-tool-use:8b-q5_K_S',
  'llama3-groq-tool-use:8b-q6_K',
  'llama3-groq-tool-use:8b-q8_0',
  'llama3-groq-tool-use:latest',
  'llama3.1',
  'llama3.1:405b',
  'llama3.1:405b-instruct-fp16',
  'llama3.1:405b-instruct-q2_K',
  'llama3.1:405b-instruct-q3_K_L',
  'llama3.1:405b-instruct-q3_K_M',
  'llama3.1:405b-instruct-q3_K_S',
  'llama3.1:405b-instruct-q4_0',
  'llama3.1:405b-instruct-q4_1',
  'llama3.1:405b-instruct-q4_K_M',
  'llama3.1:405b-instruct-q4_K_S',
  'llama3.1:405b-instruct-q5_0',
  'llama3.1:405b-instruct-q5_1',
  'llama3.1:405b-instruct-q5_K_M',
  'llama3.1:405b-instruct-q5_K_S',
  'llama3.1:405b-instruct-q6_K',
  'llama3.1:405b-instruct-q8_0',
  'llama3.1:405b-text-fp16',
  'llama3.1:405b-text-q2_K',
  'llama3.1:405b-text-q3_K_L',
  'llama3.1:405b-text-q3_K_M',
  'llama3.1:405b-text-q3_K_S',
  'llama3.1:405b-text-q4_0',
  'llama3.1:405b-text-q4_1',
  'llama3.1:405b-text-q4_K_M',
  'llama3.1:405b-text-q4_K_S',
  'llama3.1:405b-text-q5_0',
  'llama3.1:405b-text-q5_1',
  'llama3.1:405b-text-q5_K_M',
  'llama3.1:405b-text-q5_K_S',
  'llama3.1:405b-text-q6_K',
  'llama3.1:405b-text-q8_0',
  'llama3.1:70b',
  'llama3.1:70b-instruct-fp16',
  'llama3.1:70b-instruct-q2_K',
  'llama3.1:70b-instruct-q3_K_L',
  'llama3.1:70b-instruct-q3_K_M',
  'llama3.1:70b-instruct-q3_K_S',
  'llama3.1:70b-instruct-q4_0',
  'llama3.1:70b-instruct-q4_K_M',
  'llama3.1:70b-instruct-q4_K_S',
  'llama3.1:70b-instruct-q5_0',
  'llama3.1:70b-instruct-q5_1',
  'llama3.1:70b-instruct-q5_K_M',
  'llama3.1:70b-instruct-q5_K_S',
  'llama3.1:70b-instruct-q6_K',
  'llama3.1:70b-instruct-q8_0',
  'llama3.1:70b-text-fp16',
  'llama3.1:70b-text-q2_K',
  'llama3.1:70b-text-q3_K_L',
  'llama3.1:70b-text-q3_K_M',
  'llama3.1:70b-text-q3_K_S',
  'llama3.1:70b-text-q4_0',
  'llama3.1:70b-text-q4_1',
  'llama3.1:70b-text-q4_K_M',
  'llama3.1:70b-text-q4_K_S',
  'llama3.1:70b-text-q5_0',
  'llama3.1:70b-text-q5_1',
  'llama3.1:70b-text-q5_K_M',
  'llama3.1:70b-text-q5_K_S',
  'llama3.1:70b-text-q6_K',
  'llama3.1:70b-text-q8_0',
  'llama3.1:8b',
  'llama3.1:8b-instruct-fp16',
  'llama3.1:8b-instruct-q2_K',
  'llama3.1:8b-instruct-q3_K_L',
  'llama3.1:8b-instruct-q3_K_M',
  'llama3.1:8b-instruct-q3_K_S',
  'llama3.1:8b-instruct-q4_0',
  'llama3.1:8b-instruct-q4_1',
  'llama3.1:8b-instruct-q4_K_M',
  'llama3.1:8b-instruct-q4_K_S',
  'llama3.1:8b-instruct-q5_0',
  'llama3.1:8b-instruct-q5_1',
  'llama3.1:8b-instruct-q5_K_M',
  'llama3.1:8b-instruct-q5_K_S',
  'llama3.1:8b-instruct-q6_K',
  'llama3.1:8b-instruct-q8_0',
  'llama3.1:8b-text-fp16',
  'llama3.1:8b-text-q2_K',
  'llama3.1:8b-text-q3_K_L',
  'llama3.1:8b-text-q3_K_M',
  'llama3.1:8b-text-q3_K_S',
  'llama3.1:8b-text-q4_0',
  'llama3.1:8b-text-q4_1',
  'llama3.1:8b-text-q4_K_M',
  'llama3.1:8b-text-q4_K_S',
  'llama3.1:8b-text-q5_0',
  'llama3.1:8b-text-q5_1',
  'llama3.1:8b-text-q5_K_M',
  'llama3.1:8b-text-q5_K_S',
  'llama3.1:8b-text-q6_K',
  'llama3.1:8b-text-q8_0',
  'llama3.1:latest',
  'llama3.2',
  'llama3.2:1b',
  'llama3.2:1b-instruct-fp16',
  'llama3.2:1b-instruct-q2_K',
  'llama3.2:1b-instruct-q3_K_L',
  'llama3.2:1b-instruct-q3_K_M',
  'llama3.2:1b-instruct-q3_K_S',
  'llama3.2:1b-instruct-q4_0',
  'llama3.2:1b-instruct-q4_1',
  'llama3.2:1b-instruct-q4_K_M',
  'llama3.2:1b-instruct-q4_K_S',
  'llama3.2:1b-instruct-q5_0',
  'llama3.2:1b-instruct-q5_1',
  'llama3.2:1b-instruct-q5_K_M',
  'llama3.2:1b-instruct-q5_K_S',
  'llama3.2:1b-instruct-q6_K',
  'llama3.2:1b-instruct-q8_0',
  'llama3.2:1b-text-fp16',
  'llama3.2:1b-text-q2_K',
  'llama3.2:1b-text-q3_K_L',
  'llama3.2:1b-text-q3_K_M',
  'llama3.2:1b-text-q3_K_S',
  'llama3.2:1b-text-q4_0',
  'llama3.2:1b-text-q4_1',
  'llama3.2:1b-text-q4_K_M',
  'llama3.2:1b-text-q4_K_S',
  'llama3.2:1b-text-q5_0',
  'llama3.2:1b-text-q5_1',
  'llama3.2:1b-text-q5_K_M',
  'llama3.2:1b-text-q5_K_S',
  'llama3.2:1b-text-q6_K',
  'llama3.2:1b-text-q8_0',
  'llama3.2:3b',
  'llama3.2:3b-instruct-fp16',
  'llama3.2:3b-instruct-q2_K',
  'llama3.2:3b-instruct-q3_K_L',
  'llama3.2:3b-instruct-q3_K_M',
  'llama3.2:3b-instruct-q3_K_S',
  'llama3.2:3b-instruct-q4_0',
  'llama3.2:3b-instruct-q4_1',
  'llama3.2:3b-instruct-q4_K_M',
  'llama3.2:3b-instruct-q4_K_S',
  'llama3.2:3b-instruct-q5_0',
  'llama3.2:3b-instruct-q5_1',
  'llama3.2:3b-instruct-q5_K_M',
  'llama3.2:3b-instruct-q5_K_S',
  'llama3.2:3b-instruct-q6_K',
  'llama3.2:3b-instruct-q8_0',
  'llama3.2:3b-text-fp16',
  'llama3.2:3b-text-q2_K',
  'llama3.2:3b-text-q3_K_L',
  'llama3.2:3b-text-q3_K_M',
  'llama3.2:3b-text-q3_K_S',
  'llama3.2:3b-text-q4_0',
  'llama3.2:3b-text-q4_1',
  'llama3.2:3b-text-q4_K_M',
  'llama3.2:3b-text-q4_K_S',
  'llama3.2:3b-text-q5_0',
  'llama3.2:3b-text-q5_1',
  'llama3.2:3b-text-q5_K_M',
  'llama3.2:3b-text-q5_K_S',
  'llama3.2:3b-text-q6_K',
  'llama3.2:3b-text-q8_0',
  'llama3.2:latest',
  'llama3.3',
  'llama3.3:70b',
  'llama3.3:70b-instruct-fp16',
  'llama3.3:70b-instruct-q2_K',
  'llama3.3:70b-instruct-q3_K_M',
  'llama3.3:70b-instruct-q3_K_S',
  'llama3.3:70b-instruct-q4_0',
  'llama3.3:70b-instruct-q4_K_M',
  'llama3.3:70b-instruct-q4_K_S',
  'llama3.3:70b-instruct-q5_0',
  'llama3.3:70b-instruct-q5_1',
  'llama3.3:70b-instruct-q5_K_M',
  'llama3.3:70b-instruct-q6_K',
  'llama3.3:70b-instruct-q8_0',
  'llama3.3:latest',
  'llama3:70b',
  'llama3:70b-instruct',
  'llama3:70b-instruct-fp16',
  'llama3:70b-instruct-q2_K',
  'llama3:70b-instruct-q3_K_L',
  'llama3:70b-instruct-q3_K_M',
  'llama3:70b-instruct-q3_K_S',
  'llama3:70b-instruct-q4_0',
  'llama3:70b-instruct-q4_1',
  'llama3:70b-instruct-q4_K_M',
  'llama3:70b-instruct-q4_K_S',
  'llama3:70b-instruct-q5_0',
  'llama3:70b-instruct-q5_1',
  'llama3:70b-instruct-q5_K_M',
  'llama3:70b-instruct-q5_K_S',
  'llama3:70b-instruct-q6_K',
  'llama3:70b-instruct-q8_0',
  'llama3:70b-text',
  'llama3:70b-text-fp16',
  'llama3:70b-text-q2_K',
  'llama3:70b-text-q3_K_L',
  'llama3:70b-text-q3_K_M',
  'llama3:70b-text-q3_K_S',
  'llama3:70b-text-q4_0',
  'llama3:70b-text-q4_1',
  'llama3:70b-text-q4_K_M',
  'llama3:70b-text-q4_K_S',
  'llama3:70b-text-q5_0',
  'llama3:70b-text-q5_1',
  'llama3:70b-text-q5_K_M',
  'llama3:70b-text-q5_K_S',
  'llama3:70b-text-q6_K',
  'llama3:70b-text-q8_0',
  'llama3:8b',
  'llama3:8b-instruct-fp16',
  'llama3:8b-instruct-q2_K',
  'llama3:8b-instruct-q3_K_L',
  'llama3:8b-instruct-q3_K_M',
  'llama3:8b-instruct-q3_K_S',
  'llama3:8b-instruct-q4_0',
  'llama3:8b-instruct-q4_1',
  'llama3:8b-instruct-q4_K_M',
  'llama3:8b-instruct-q4_K_S',
  'llama3:8b-instruct-q5_0',
  'llama3:8b-instruct-q5_1',
  'llama3:8b-instruct-q5_K_M',
  'llama3:8b-instruct-q5_K_S',
  'llama3:8b-instruct-q6_K',
  'llama3:8b-instruct-q8_0',
  'llama3:8b-text',
  'llama3:8b-text-fp16',
  'llama3:8b-text-q2_K',
  'llama3:8b-text-q3_K_L',
  'llama3:8b-text-q3_K_M',
  'llama3:8b-text-q3_K_S',
  'llama3:8b-text-q4_0',
  'llama3:8b-text-q4_1',
  'llama3:8b-text-q4_K_M',
  'llama3:8b-text-q4_K_S',
  'llama3:8b-text-q5_0',
  'llama3:8b-text-q5_1',
  'llama3:8b-text-q5_K_M',
  'llama3:8b-text-q5_K_S',
  'llama3:8b-text-q6_K',
  'llama3:8b-text-q8_0',
  'llama3:instruct',
  'llama3:latest',
  'llama3:text',
  'magicoder',
  'magicoder:7b',
  'magicoder:7b-s-cl',
  'magicoder:7b-s-cl-fp16',
  'magicoder:7b-s-cl-q2_K',
  'magicoder:7b-s-cl-q3_K_L',
  'magicoder:7b-s-cl-q3_K_M',
  'magicoder:7b-s-cl-q3_K_S',
  'magicoder:7b-s-cl-q4_0',
  'magicoder:7b-s-cl-q4_1',
  'magicoder:7b-s-cl-q4_K_M',
  'magicoder:7b-s-cl-q4_K_S',
  'magicoder:7b-s-cl-q5_0',
  'magicoder:7b-s-cl-q5_1',
  'magicoder:7b-s-cl-q5_K_M',
  'magicoder:7b-s-cl-q5_K_S',
  'magicoder:7b-s-cl-q6_K',
  'magicoder:7b-s-cl-q8_0',
  'magicoder:latest',
  'magistral',
  'magistral:24b',
  'magistral:24b-small-2506-fp16',
  'magistral:24b-small-2506-q4_K_M',
  'magistral:24b-small-2506-q8_0',
  'magistral:latest',
  'marco-o1',
  'marco-o1:7b',
  'marco-o1:7b-fp16',
  'marco-o1:7b-q4_K_M',
  'marco-o1:7b-q8_0',
  'marco-o1:latest',
  'mathstral',
  'mathstral:7b',
  'mathstral:7b-v0.1-fp16',
  'mathstral:7b-v0.1-q2_K',
  'mathstral:7b-v0.1-q3_K_L',
  'mathstral:7b-v0.1-q3_K_M',
  'mathstral:7b-v0.1-q3_K_S',
  'mathstral:7b-v0.1-q4_0',
  'mathstral:7b-v0.1-q4_1',
  'mathstral:7b-v0.1-q4_K_M',
  'mathstral:7b-v0.1-q4_K_S',
  'mathstral:7b-v0.1-q5_0',
  'mathstral:7b-v0.1-q5_1',
  'mathstral:7b-v0.1-q5_K_M',
  'mathstral:7b-v0.1-q5_K_S',
  'mathstral:7b-v0.1-q6_K',
  'mathstral:7b-v0.1-q8_0',
  'mathstral:latest',
  'meditron',
  'meditron:70b',
  'meditron:70b-q4_0',
  'meditron:70b-q4_1',
  'meditron:70b-q4_K_S',
  'meditron:70b-q5_1',
  'meditron:7b',
  'meditron:7b-fp16',
  'meditron:7b-q2_K',
  'meditron:7b-q3_K_L',
  'meditron:7b-q3_K_M',
  'meditron:7b-q3_K_S',
  'meditron:7b-q4_0',
  'meditron:7b-q4_1',
  'meditron:7b-q4_K_M',
  'meditron:7b-q4_K_S',
  'meditron:7b-q5_0',
  'meditron:7b-q5_1',
  'meditron:7b-q5_K_M',
  'meditron:7b-q5_K_S',
  'meditron:7b-q6_K',
  'meditron:7b-q8_0',
  'meditron:latest',
  'medllama2',
  'medllama2:7b',
  'medllama2:7b-fp16',
  'medllama2:7b-q2_K',
  'medllama2:7b-q3_K_L',
  'medllama2:7b-q3_K_M',
  'medllama2:7b-q3_K_S',
  'medllama2:7b-q4_0',
  'medllama2:7b-q4_1',
  'medllama2:7b-q4_K_M',
  'medllama2:7b-q4_K_S',
  'medllama2:7b-q5_0',
  'medllama2:7b-q5_1',
  'medllama2:7b-q5_K_M',
  'medllama2:7b-q5_K_S',
  'medllama2:7b-q6_K',
  'medllama2:7b-q8_0',
  'medllama2:latest',
  'megadolphin',
  'megadolphin:120b',
  'megadolphin:120b-v2.2',
  'megadolphin:120b-v2.2-fp16',
  'megadolphin:120b-v2.2-q2_K',
  'megadolphin:120b-v2.2-q3_K_L',
  'megadolphin:120b-v2.2-q3_K_M',
  'megadolphin:120b-v2.2-q3_K_S',
  'megadolphin:120b-v2.2-q4_0',
  'megadolphin:120b-v2.2-q4_1',
  'megadolphin:120b-v2.2-q4_K_M',
  'megadolphin:120b-v2.2-q4_K_S',
  'megadolphin:120b-v2.2-q5_0',
  'megadolphin:120b-v2.2-q5_1',
  'megadolphin:120b-v2.2-q5_K_M',
  'megadolphin:120b-v2.2-q5_K_S',
  'megadolphin:120b-v2.2-q6_K',
  'megadolphin:120b-v2.2-q8_0',
  'megadolphin:latest',
  'megadolphin:v2.2',
  'mistral',
  'mistral-large',
  'mistral-large:123b',
  'mistral-large:123b-instruct-2407-fp16',
  'mistral-large:123b-instruct-2407-q2_K',
  'mistral-large:123b-instruct-2407-q3_K_L',
  'mistral-large:123b-instruct-2407-q3_K_M',
  'mistral-large:123b-instruct-2407-q3_K_S',
  'mistral-large:123b-instruct-2407-q4_0',
  'mistral-large:123b-instruct-2407-q4_1',
  'mistral-large:123b-instruct-2407-q4_K_M',
  'mistral-large:123b-instruct-2407-q4_K_S',
  'mistral-large:123b-instruct-2407-q5_0',
  'mistral-large:123b-instruct-2407-q5_1',
  'mistral-large:123b-instruct-2407-q5_K_M',
  'mistral-large:123b-instruct-2407-q5_K_S',
  'mistral-large:123b-instruct-2407-q6_K',
  'mistral-large:123b-instruct-2407-q8_0',
  'mistral-large:123b-instruct-2411-fp16',
  'mistral-large:123b-instruct-2411-q2_K',
  'mistral-large:123b-instruct-2411-q3_K_L',
  'mistral-large:123b-instruct-2411-q3_K_M',
  'mistral-large:123b-instruct-2411-q3_K_S',
  'mistral-large:123b-instruct-2411-q4_0',
  'mistral-large:123b-instruct-2411-q4_1',
  'mistral-large:123b-instruct-2411-q4_K_M',
  'mistral-large:123b-instruct-2411-q4_K_S',
  'mistral-large:123b-instruct-2411-q5_0',
  'mistral-large:123b-instruct-2411-q5_1',
  'mistral-large:123b-instruct-2411-q5_K_M',
  'mistral-large:123b-instruct-2411-q5_K_S',
  'mistral-large:123b-instruct-2411-q6_K',
  'mistral-large:123b-instruct-2411-q8_0',
  'mistral-large:latest',
  'mistral-nemo',
  'mistral-nemo:12b',
  'mistral-nemo:12b-instruct-2407-fp16',
  'mistral-nemo:12b-instruct-2407-q2_K',
  'mistral-nemo:12b-instruct-2407-q3_K_L',
  'mistral-nemo:12b-instruct-2407-q3_K_M',
  'mistral-nemo:12b-instruct-2407-q3_K_S',
  'mistral-nemo:12b-instruct-2407-q4_0',
  'mistral-nemo:12b-instruct-2407-q4_1',
  'mistral-nemo:12b-instruct-2407-q4_K_M',
  'mistral-nemo:12b-instruct-2407-q4_K_S',
  'mistral-nemo:12b-instruct-2407-q5_0',
  'mistral-nemo:12b-instruct-2407-q5_1',
  'mistral-nemo:12b-instruct-2407-q5_K_M',
  'mistral-nemo:12b-instruct-2407-q5_K_S',
  'mistral-nemo:12b-instruct-2407-q6_K',
  'mistral-nemo:12b-instruct-2407-q8_0',
  'mistral-nemo:latest',
  'mistral-openorca',
  'mistral-openorca:7b',
  'mistral-openorca:7b-fp16',
  'mistral-openorca:7b-q2_K',
  'mistral-openorca:7b-q3_K_L',
  'mistral-openorca:7b-q3_K_M',
  'mistral-openorca:7b-q3_K_S',
  'mistral-openorca:7b-q4_0',
  'mistral-openorca:7b-q4_1',
  'mistral-openorca:7b-q4_K_M',
  'mistral-openorca:7b-q4_K_S',
  'mistral-openorca:7b-q5_0',
  'mistral-openorca:7b-q5_1',
  'mistral-openorca:7b-q5_K_M',
  'mistral-openorca:7b-q5_K_S',
  'mistral-openorca:7b-q6_K',
  'mistral-openorca:7b-q8_0',
  'mistral-openorca:latest',
  'mistral-small',
  'mistral-small:22b',
  'mistral-small:22b-instruct-2409-fp16',
  'mistral-small:22b-instruct-2409-q2_K',
  'mistral-small:22b-instruct-2409-q3_K_L',
  'mistral-small:22b-instruct-2409-q3_K_M',
  'mistral-small:22b-instruct-2409-q3_K_S',
  'mistral-small:22b-instruct-2409-q4_0',
  'mistral-small:22b-instruct-2409-q4_1',
  'mistral-small:22b-instruct-2409-q4_K_M',
  'mistral-small:22b-instruct-2409-q4_K_S',
  'mistral-small:22b-instruct-2409-q5_0',
  'mistral-small:22b-instruct-2409-q5_1',
  'mistral-small:22b-instruct-2409-q5_K_M',
  'mistral-small:22b-instruct-2409-q5_K_S',
  'mistral-small:22b-instruct-2409-q6_K',
  'mistral-small:22b-instruct-2409-q8_0',
  'mistral-small:24b',
  'mistral-small:24b-instruct-2501-fp16',
  'mistral-small:24b-instruct-2501-q4_K_M',
  'mistral-small:24b-instruct-2501-q8_0',
  'mistral-small:latest',
  'mistral:7b',
  'mistral:7b-instruct',
  'mistral:7b-instruct-fp16',
  'mistral:7b-instruct-q2_K',
  'mistral:7b-instruct-q3_K_L',
  'mistral:7b-instruct-q3_K_M',
  'mistral:7b-instruct-q3_K_S',
  'mistral:7b-instruct-q4_0',
  'mistral:7b-instruct-q4_1',
  'mistral:7b-instruct-q4_K_M',
  'mistral:7b-instruct-q4_K_S',
  'mistral:7b-instruct-q5_0',
  'mistral:7b-instruct-q5_1',
  'mistral:7b-instruct-q5_K_M',
  'mistral:7b-instruct-q5_K_S',
  'mistral:7b-instruct-q6_K',
  'mistral:7b-instruct-q8_0',
  'mistral:7b-instruct-v0.2-fp16',
  'mistral:7b-instruct-v0.2-q2_K',
  'mistral:7b-instruct-v0.2-q3_K_L',
  'mistral:7b-instruct-v0.2-q3_K_M',
  'mistral:7b-instruct-v0.2-q3_K_S',
  'mistral:7b-instruct-v0.2-q4_0',
  'mistral:7b-instruct-v0.2-q4_1',
  'mistral:7b-instruct-v0.2-q4_K_M',
  'mistral:7b-instruct-v0.2-q4_K_S',
  'mistral:7b-instruct-v0.2-q5_0',
  'mistral:7b-instruct-v0.2-q5_1',
  'mistral:7b-instruct-v0.2-q5_K_M',
  'mistral:7b-instruct-v0.2-q5_K_S',
  'mistral:7b-instruct-v0.2-q6_K',
  'mistral:7b-instruct-v0.2-q8_0',
  'mistral:7b-instruct-v0.3-fp16',
  'mistral:7b-instruct-v0.3-q2_K',
  'mistral:7b-instruct-v0.3-q3_K_L',
  'mistral:7b-instruct-v0.3-q3_K_M',
  'mistral:7b-instruct-v0.3-q3_K_S',
  'mistral:7b-instruct-v0.3-q4_0',
  'mistral:7b-instruct-v0.3-q4_1',
  'mistral:7b-instruct-v0.3-q4_K_M',
  'mistral:7b-instruct-v0.3-q4_K_S',
  'mistral:7b-instruct-v0.3-q5_0',
  'mistral:7b-instruct-v0.3-q5_1',
  'mistral:7b-instruct-v0.3-q5_K_M',
  'mistral:7b-instruct-v0.3-q5_K_S',
  'mistral:7b-instruct-v0.3-q6_K',
  'mistral:7b-instruct-v0.3-q8_0',
  'mistral:7b-text',
  'mistral:7b-text-fp16',
  'mistral:7b-text-q2_K',
  'mistral:7b-text-q3_K_L',
  'mistral:7b-text-q3_K_M',
  'mistral:7b-text-q3_K_S',
  'mistral:7b-text-q4_0',
  'mistral:7b-text-q4_1',
  'mistral:7b-text-q4_K_M',
  'mistral:7b-text-q4_K_S',
  'mistral:7b-text-q5_0',
  'mistral:7b-text-q5_1',
  'mistral:7b-text-q5_K_M',
  'mistral:7b-text-q5_K_S',
  'mistral:7b-text-q6_K',
  'mistral:7b-text-q8_0',
  'mistral:7b-text-v0.2-fp16',
  'mistral:7b-text-v0.2-q2_K',
  'mistral:7b-text-v0.2-q3_K_L',
  'mistral:7b-text-v0.2-q3_K_M',
  'mistral:7b-text-v0.2-q3_K_S',
  'mistral:7b-text-v0.2-q4_0',
  'mistral:7b-text-v0.2-q4_1',
  'mistral:7b-text-v0.2-q4_K_M',
  'mistral:7b-text-v0.2-q4_K_S',
  'mistral:7b-text-v0.2-q5_0',
  'mistral:7b-text-v0.2-q5_1',
  'mistral:7b-text-v0.2-q5_K_M',
  'mistral:7b-text-v0.2-q5_K_S',
  'mistral:7b-text-v0.2-q6_K',
  'mistral:7b-text-v0.2-q8_0',
  'mistral:instruct',
  'mistral:latest',
  'mistral:text',
  'mistral:v0.1',
  'mistral:v0.2',
  'mistral:v0.3',
  'mistrallite',
  'mistrallite:7b',
  'mistrallite:7b-v0.1-fp16',
  'mistrallite:7b-v0.1-q2_K',
  'mistrallite:7b-v0.1-q3_K_L',
  'mistrallite:7b-v0.1-q3_K_M',
  'mistrallite:7b-v0.1-q3_K_S',
  'mistrallite:7b-v0.1-q4_0',
  'mistrallite:7b-v0.1-q4_1',
  'mistrallite:7b-v0.1-q4_K_M',
  'mistrallite:7b-v0.1-q4_K_S',
  'mistrallite:7b-v0.1-q5_0',
  'mistrallite:7b-v0.1-q5_1',
  'mistrallite:7b-v0.1-q5_K_M',
  'mistrallite:7b-v0.1-q5_K_S',
  'mistrallite:7b-v0.1-q6_K',
  'mistrallite:7b-v0.1-q8_0',
  'mistrallite:latest',
  'mixtral',
  'mixtral:8x22b',
  'mixtral:8x22b-instruct',
  'mixtral:8x22b-instruct-v0.1-fp16',
  'mixtral:8x22b-instruct-v0.1-q2_K',
  'mixtral:8x22b-instruct-v0.1-q3_K_L',
  'mixtral:8x22b-instruct-v0.1-q3_K_M',
  'mixtral:8x22b-instruct-v0.1-q3_K_S',
  'mixtral:8x22b-instruct-v0.1-q4_0',
  'mixtral:8x22b-instruct-v0.1-q4_1',
  'mixtral:8x22b-instruct-v0.1-q4_K_M',
  'mixtral:8x22b-instruct-v0.1-q4_K_S',
  'mixtral:8x22b-instruct-v0.1-q5_0',
  'mixtral:8x22b-instruct-v0.1-q5_1',
  'mixtral:8x22b-instruct-v0.1-q5_K_M',
  'mixtral:8x22b-instruct-v0.1-q5_K_S',
  'mixtral:8x22b-instruct-v0.1-q6_K',
  'mixtral:8x22b-instruct-v0.1-q8_0',
  'mixtral:8x22b-text',
  'mixtral:8x22b-text-v0.1-fp16',
  'mixtral:8x22b-text-v0.1-q2_K',
  'mixtral:8x22b-text-v0.1-q3_K_L',
  'mixtral:8x22b-text-v0.1-q3_K_M',
  'mixtral:8x22b-text-v0.1-q3_K_S',
  'mixtral:8x22b-text-v0.1-q4_0',
  'mixtral:8x22b-text-v0.1-q4_1',
  'mixtral:8x22b-text-v0.1-q4_K_M',
  'mixtral:8x22b-text-v0.1-q4_K_S',
  'mixtral:8x22b-text-v0.1-q5_0',
  'mixtral:8x22b-text-v0.1-q5_1',
  'mixtral:8x22b-text-v0.1-q5_K_M',
  'mixtral:8x22b-text-v0.1-q5_K_S',
  'mixtral:8x22b-text-v0.1-q6_K',
  'mixtral:8x22b-text-v0.1-q8_0',
  'mixtral:8x7b',
  'mixtral:8x7b-instruct-v0.1-fp16',
  'mixtral:8x7b-instruct-v0.1-q2_K',
  'mixtral:8x7b-instruct-v0.1-q3_K_L',
  'mixtral:8x7b-instruct-v0.1-q3_K_M',
  'mixtral:8x7b-instruct-v0.1-q3_K_S',
  'mixtral:8x7b-instruct-v0.1-q4_0',
  'mixtral:8x7b-instruct-v0.1-q4_1',
  'mixtral:8x7b-instruct-v0.1-q4_K_M',
  'mixtral:8x7b-instruct-v0.1-q4_K_S',
  'mixtral:8x7b-instruct-v0.1-q5_0',
  'mixtral:8x7b-instruct-v0.1-q5_1',
  'mixtral:8x7b-instruct-v0.1-q5_K_M',
  'mixtral:8x7b-instruct-v0.1-q5_K_S',
  'mixtral:8x7b-instruct-v0.1-q6_K',
  'mixtral:8x7b-instruct-v0.1-q8_0',
  'mixtral:8x7b-text',
  'mixtral:8x7b-text-v0.1-fp16',
  'mixtral:8x7b-text-v0.1-q2_K',
  'mixtral:8x7b-text-v0.1-q3_K_L',
  'mixtral:8x7b-text-v0.1-q3_K_M',
  'mixtral:8x7b-text-v0.1-q3_K_S',
  'mixtral:8x7b-text-v0.1-q4_0',
  'mixtral:8x7b-text-v0.1-q4_1',
  'mixtral:8x7b-text-v0.1-q4_K_M',
  'mixtral:8x7b-text-v0.1-q4_K_S',
  'mixtral:8x7b-text-v0.1-q5_0',
  'mixtral:8x7b-text-v0.1-q5_1',
  'mixtral:8x7b-text-v0.1-q5_K_M',
  'mixtral:8x7b-text-v0.1-q5_K_S',
  'mixtral:8x7b-text-v0.1-q6_K',
  'mixtral:8x7b-text-v0.1-q8_0',
  'mixtral:instruct',
  'mixtral:latest',
  'mixtral:text',
  'mixtral:v0.1',
  'mixtral:v0.1-instruct',
  'nemotron',
  'nemotron-mini',
  'nemotron-mini:4b',
  'nemotron-mini:4b-instruct-fp16',
  'nemotron-mini:4b-instruct-q2_K',
  'nemotron-mini:4b-instruct-q3_K_L',
  'nemotron-mini:4b-instruct-q3_K_M',
  'nemotron-mini:4b-instruct-q3_K_S',
  'nemotron-mini:4b-instruct-q4_0',
  'nemotron-mini:4b-instruct-q4_1',
  'nemotron-mini:4b-instruct-q4_K_M',
  'nemotron-mini:4b-instruct-q4_K_S',
  'nemotron-mini:4b-instruct-q5_0',
  'nemotron-mini:4b-instruct-q5_1',
  'nemotron-mini:4b-instruct-q5_K_M',
  'nemotron-mini:4b-instruct-q5_K_S',
  'nemotron-mini:4b-instruct-q6_K',
  'nemotron-mini:4b-instruct-q8_0',
  'nemotron-mini:latest',
  'nemotron:70b',
  'nemotron:70b-instruct-fp16',
  'nemotron:70b-instruct-q2_K',
  'nemotron:70b-instruct-q3_K_L',
  'nemotron:70b-instruct-q3_K_M',
  'nemotron:70b-instruct-q3_K_S',
  'nemotron:70b-instruct-q4_0',
  'nemotron:70b-instruct-q4_1',
  'nemotron:70b-instruct-q4_K_M',
  'nemotron:70b-instruct-q4_K_S',
  'nemotron:70b-instruct-q5_0',
  'nemotron:70b-instruct-q5_1',
  'nemotron:70b-instruct-q5_K_M',
  'nemotron:70b-instruct-q5_K_S',
  'nemotron:70b-instruct-q6_K',
  'nemotron:70b-instruct-q8_0',
  'nemotron:latest',
  'neural-chat',
  'neural-chat:7b',
  'neural-chat:7b-v3.1',
  'neural-chat:7b-v3.1-fp16',
  'neural-chat:7b-v3.1-q2_K',
  'neural-chat:7b-v3.1-q3_K_L',
  'neural-chat:7b-v3.1-q3_K_M',
  'neural-chat:7b-v3.1-q3_K_S',
  'neural-chat:7b-v3.1-q4_0',
  'neural-chat:7b-v3.1-q4_1',
  'neural-chat:7b-v3.1-q4_K_M',
  'neural-chat:7b-v3.1-q4_K_S',
  'neural-chat:7b-v3.1-q5_0',
  'neural-chat:7b-v3.1-q5_1',
  'neural-chat:7b-v3.1-q5_K_M',
  'neural-chat:7b-v3.1-q5_K_S',
  'neural-chat:7b-v3.1-q6_K',
  'neural-chat:7b-v3.1-q8_0',
  'neural-chat:7b-v3.2',
  'neural-chat:7b-v3.2-fp16',
  'neural-chat:7b-v3.2-q2_K',
  'neural-chat:7b-v3.2-q3_K_L',
  'neural-chat:7b-v3.2-q3_K_M',
  'neural-chat:7b-v3.2-q3_K_S',
  'neural-chat:7b-v3.2-q4_0',
  'neural-chat:7b-v3.2-q4_1',
  'neural-chat:7b-v3.2-q4_K_M',
  'neural-chat:7b-v3.2-q4_K_S',
  'neural-chat:7b-v3.2-q5_0',
  'neural-chat:7b-v3.2-q5_1',
  'neural-chat:7b-v3.2-q5_K_M',
  'neural-chat:7b-v3.2-q5_K_S',
  'neural-chat:7b-v3.2-q6_K',
  'neural-chat:7b-v3.2-q8_0',
  'neural-chat:7b-v3.3',
  'neural-chat:7b-v3.3-fp16',
  'neural-chat:7b-v3.3-q2_K',
  'neural-chat:7b-v3.3-q3_K_L',
  'neural-chat:7b-v3.3-q3_K_M',
  'neural-chat:7b-v3.3-q3_K_S',
  'neural-chat:7b-v3.3-q4_0',
  'neural-chat:7b-v3.3-q4_1',
  'neural-chat:7b-v3.3-q4_K_M',
  'neural-chat:7b-v3.3-q4_K_S',
  'neural-chat:7b-v3.3-q5_0',
  'neural-chat:7b-v3.3-q5_1',
  'neural-chat:7b-v3.3-q5_K_M',
  'neural-chat:7b-v3.3-q5_K_S',
  'neural-chat:7b-v3.3-q6_K',
  'neural-chat:7b-v3.3-q8_0',
  'neural-chat:latest',
  'nexusraven',
  'nexusraven:13b',
  'nexusraven:13b-fp16',
  'nexusraven:13b-q2_K',
  'nexusraven:13b-q3_K_L',
  'nexusraven:13b-q3_K_M',
  'nexusraven:13b-q3_K_S',
  'nexusraven:13b-q4_0',
  'nexusraven:13b-q4_1',
  'nexusraven:13b-q4_K_M',
  'nexusraven:13b-q4_K_S',
  'nexusraven:13b-q5_0',
  'nexusraven:13b-q5_1',
  'nexusraven:13b-q5_K_M',
  'nexusraven:13b-q5_K_S',
  'nexusraven:13b-q6_K',
  'nexusraven:13b-q8_0',
  'nexusraven:13b-v2-fp16',
  'nexusraven:13b-v2-q2_K',
  'nexusraven:13b-v2-q3_K_L',
  'nexusraven:13b-v2-q3_K_M',
  'nexusraven:13b-v2-q3_K_S',
  'nexusraven:13b-v2-q4_0',
  'nexusraven:13b-v2-q4_1',
  'nexusraven:13b-v2-q4_K_M',
  'nexusraven:13b-v2-q4_K_S',
  'nexusraven:13b-v2-q5_0',
  'nexusraven:13b-v2-q5_1',
  'nexusraven:13b-v2-q5_K_M',
  'nexusraven:13b-v2-q5_K_S',
  'nexusraven:13b-v2-q6_K',
  'nexusraven:13b-v2-q8_0',
  'nexusraven:latest',
  'notus',
  'notus:7b',
  'notus:7b-v1',
  'notus:7b-v1-fp16',
  'notus:7b-v1-q2_K',
  'notus:7b-v1-q3_K_L',
  'notus:7b-v1-q3_K_M',
  'notus:7b-v1-q3_K_S',
  'notus:7b-v1-q4_0',
  'notus:7b-v1-q4_1',
  'notus:7b-v1-q4_K_M',
  'notus:7b-v1-q4_K_S',
  'notus:7b-v1-q5_0',
  'notus:7b-v1-q5_1',
  'notus:7b-v1-q5_K_M',
  'notus:7b-v1-q5_K_S',
  'notus:7b-v1-q6_K',
  'notus:7b-v1-q8_0',
  'notus:latest',
  'notux',
  'notux:8x7b',
  'notux:8x7b-v1',
  'notux:8x7b-v1-fp16',
  'notux:8x7b-v1-q2_K',
  'notux:8x7b-v1-q3_K_L',
  'notux:8x7b-v1-q3_K_M',
  'notux:8x7b-v1-q3_K_S',
  'notux:8x7b-v1-q4_0',
  'notux:8x7b-v1-q4_1',
  'notux:8x7b-v1-q4_K_M',
  'notux:8x7b-v1-q4_K_S',
  'notux:8x7b-v1-q5_0',
  'notux:8x7b-v1-q5_1',
  'notux:8x7b-v1-q5_K_M',
  'notux:8x7b-v1-q5_K_S',
  'notux:8x7b-v1-q6_K',
  'notux:8x7b-v1-q8_0',
  'notux:latest',
  'nous-hermes',
  'nous-hermes2',
  'nous-hermes2-mixtral',
  'nous-hermes2-mixtral:8x7b',
  'nous-hermes2-mixtral:8x7b-dpo-fp16',
  'nous-hermes2-mixtral:8x7b-dpo-q2_K',
  'nous-hermes2-mixtral:8x7b-dpo-q3_K_L',
  'nous-hermes2-mixtral:8x7b-dpo-q3_K_M',
  'nous-hermes2-mixtral:8x7b-dpo-q3_K_S',
  'nous-hermes2-mixtral:8x7b-dpo-q4_0',
  'nous-hermes2-mixtral:8x7b-dpo-q4_1',
  'nous-hermes2-mixtral:8x7b-dpo-q4_K_M',
  'nous-hermes2-mixtral:8x7b-dpo-q4_K_S',
  'nous-hermes2-mixtral:8x7b-dpo-q5_0',
  'nous-hermes2-mixtral:8x7b-dpo-q5_1',
  'nous-hermes2-mixtral:8x7b-dpo-q5_K_M',
  'nous-hermes2-mixtral:8x7b-dpo-q5_K_S',
  'nous-hermes2-mixtral:8x7b-dpo-q6_K',
  'nous-hermes2-mixtral:8x7b-dpo-q8_0',
  'nous-hermes2-mixtral:dpo',
  'nous-hermes2-mixtral:latest',
  'nous-hermes2:10.7b',
  'nous-hermes2:10.7b-solar-fp16',
  'nous-hermes2:10.7b-solar-q2_K',
  'nous-hermes2:10.7b-solar-q3_K_L',
  'nous-hermes2:10.7b-solar-q3_K_M',
  'nous-hermes2:10.7b-solar-q3_K_S',
  'nous-hermes2:10.7b-solar-q4_0',
  'nous-hermes2:10.7b-solar-q4_1',
  'nous-hermes2:10.7b-solar-q4_K_M',
  'nous-hermes2:10.7b-solar-q4_K_S',
  'nous-hermes2:10.7b-solar-q5_0',
  'nous-hermes2:10.7b-solar-q5_1',
  'nous-hermes2:10.7b-solar-q5_K_M',
  'nous-hermes2:10.7b-solar-q5_K_S',
  'nous-hermes2:10.7b-solar-q6_K',
  'nous-hermes2:10.7b-solar-q8_0',
  'nous-hermes2:34b',
  'nous-hermes2:34b-yi-fp16',
  'nous-hermes2:34b-yi-q2_K',
  'nous-hermes2:34b-yi-q3_K_L',
  'nous-hermes2:34b-yi-q3_K_M',
  'nous-hermes2:34b-yi-q3_K_S',
  'nous-hermes2:34b-yi-q4_0',
  'nous-hermes2:34b-yi-q4_1',
  'nous-hermes2:34b-yi-q4_K_M',
  'nous-hermes2:34b-yi-q4_K_S',
  'nous-hermes2:34b-yi-q5_0',
  'nous-hermes2:34b-yi-q5_1',
  'nous-hermes2:34b-yi-q5_K_M',
  'nous-hermes2:34b-yi-q5_K_S',
  'nous-hermes2:34b-yi-q6_K',
  'nous-hermes2:34b-yi-q8_0',
  'nous-hermes2:latest',
  'nous-hermes:13b',
  'nous-hermes:13b-fp16',
  'nous-hermes:13b-llama2',
  'nous-hermes:13b-llama2-fp16',
  'nous-hermes:13b-llama2-q2_K',
  'nous-hermes:13b-llama2-q3_K_L',
  'nous-hermes:13b-llama2-q3_K_M',
  'nous-hermes:13b-llama2-q3_K_S',
  'nous-hermes:13b-llama2-q4_0',
  'nous-hermes:13b-llama2-q4_1',
  'nous-hermes:13b-llama2-q4_K_M',
  'nous-hermes:13b-llama2-q4_K_S',
  'nous-hermes:13b-llama2-q5_0',
  'nous-hermes:13b-llama2-q5_1',
  'nous-hermes:13b-llama2-q5_K_M',
  'nous-hermes:13b-llama2-q5_K_S',
  'nous-hermes:13b-llama2-q6_K',
  'nous-hermes:13b-llama2-q8_0',
  'nous-hermes:13b-q2_K',
  'nous-hermes:13b-q3_K_L',
  'nous-hermes:13b-q3_K_M',
  'nous-hermes:13b-q3_K_S',
  'nous-hermes:13b-q4_0',
  'nous-hermes:13b-q4_1',
  'nous-hermes:13b-q4_K_M',
  'nous-hermes:13b-q4_K_S',
  'nous-hermes:13b-q5_0',
  'nous-hermes:13b-q5_1',
  'nous-hermes:13b-q5_K_M',
  'nous-hermes:13b-q5_K_S',
  'nous-hermes:13b-q6_K',
  'nous-hermes:13b-q8_0',
  'nous-hermes:70b-llama2-fp16',
  'nous-hermes:70b-llama2-q2_K',
  'nous-hermes:70b-llama2-q3_K_L',
  'nous-hermes:70b-llama2-q3_K_M',
  'nous-hermes:70b-llama2-q3_K_S',
  'nous-hermes:70b-llama2-q4_0',
  'nous-hermes:70b-llama2-q4_1',
  'nous-hermes:70b-llama2-q4_K_M',
  'nous-hermes:70b-llama2-q4_K_S',
  'nous-hermes:70b-llama2-q5_0',
  'nous-hermes:70b-llama2-q5_1',
  'nous-hermes:70b-llama2-q5_K_M',
  'nous-hermes:70b-llama2-q6_K',
  'nous-hermes:7b',
  'nous-hermes:7b-llama2',
  'nous-hermes:7b-llama2-fp16',
  'nous-hermes:7b-llama2-q2_K',
  'nous-hermes:7b-llama2-q3_K_L',
  'nous-hermes:7b-llama2-q3_K_M',
  'nous-hermes:7b-llama2-q3_K_S',
  'nous-hermes:7b-llama2-q4_0',
  'nous-hermes:7b-llama2-q4_1',
  'nous-hermes:7b-llama2-q4_K_M',
  'nous-hermes:7b-llama2-q4_K_S',
  'nous-hermes:7b-llama2-q5_0',
  'nous-hermes:7b-llama2-q5_1',
  'nous-hermes:7b-llama2-q5_K_M',
  'nous-hermes:7b-llama2-q5_K_S',
  'nous-hermes:7b-llama2-q6_K',
  'nous-hermes:7b-llama2-q8_0',
  'nous-hermes:latest',
  'nuextract',
  'nuextract:3.8b',
  'nuextract:3.8b-fp16',
  'nuextract:3.8b-q2_K',
  'nuextract:3.8b-q3_K_L',
  'nuextract:3.8b-q3_K_M',
  'nuextract:3.8b-q3_K_S',
  'nuextract:3.8b-q4_0',
  'nuextract:3.8b-q4_1',
  'nuextract:3.8b-q4_K_M',
  'nuextract:3.8b-q4_K_S',
  'nuextract:3.8b-q5_0',
  'nuextract:3.8b-q5_1',
  'nuextract:3.8b-q5_K_M',
  'nuextract:3.8b-q5_K_S',
  'nuextract:3.8b-q6_K',
  'nuextract:3.8b-q8_0',
  'nuextract:latest',
  'olmo2',
  'olmo2:13b',
  'olmo2:13b-1124-instruct-fp16',
  'olmo2:13b-1124-instruct-q4_K_M',
  'olmo2:13b-1124-instruct-q8_0',
  'olmo2:7b',
  'olmo2:7b-1124-instruct-fp16',
  'olmo2:7b-1124-instruct-q4_K_M',
  'olmo2:7b-1124-instruct-q8_0',
  'olmo2:latest',
  'open-orca-platypus2',
  'open-orca-platypus2:13b',
  'open-orca-platypus2:13b-fp16',
  'open-orca-platypus2:13b-q2_K',
  'open-orca-platypus2:13b-q3_K_L',
  'open-orca-platypus2:13b-q3_K_M',
  'open-orca-platypus2:13b-q3_K_S',
  'open-orca-platypus2:13b-q4_0',
  'open-orca-platypus2:13b-q4_1',
  'open-orca-platypus2:13b-q4_K_M',
  'open-orca-platypus2:13b-q4_K_S',
  'open-orca-platypus2:13b-q5_0',
  'open-orca-platypus2:13b-q5_1',
  'open-orca-platypus2:13b-q5_K_M',
  'open-orca-platypus2:13b-q5_K_S',
  'open-orca-platypus2:13b-q6_K',
  'open-orca-platypus2:13b-q8_0',
  'open-orca-platypus2:latest',
  'openchat',
  'openchat:7b',
  'openchat:7b-v3.5',
  'openchat:7b-v3.5-0106',
  'openchat:7b-v3.5-0106-fp16',
  'openchat:7b-v3.5-0106-q2_K',
  'openchat:7b-v3.5-0106-q3_K_L',
  'openchat:7b-v3.5-0106-q3_K_M',
  'openchat:7b-v3.5-0106-q3_K_S',
  'openchat:7b-v3.5-0106-q4_0',
  'openchat:7b-v3.5-0106-q4_1',
  'openchat:7b-v3.5-0106-q4_K_M',
  'openchat:7b-v3.5-0106-q4_K_S',
  'openchat:7b-v3.5-0106-q5_0',
  'openchat:7b-v3.5-0106-q5_1',
  'openchat:7b-v3.5-0106-q5_K_M',
  'openchat:7b-v3.5-0106-q5_K_S',
  'openchat:7b-v3.5-0106-q6_K',
  'openchat:7b-v3.5-0106-q8_0',
  'openchat:7b-v3.5-1210',
  'openchat:7b-v3.5-1210-fp16',
  'openchat:7b-v3.5-1210-q2_K',
  'openchat:7b-v3.5-1210-q3_K_L',
  'openchat:7b-v3.5-1210-q3_K_M',
  'openchat:7b-v3.5-1210-q3_K_S',
  'openchat:7b-v3.5-1210-q4_0',
  'openchat:7b-v3.5-1210-q4_1',
  'openchat:7b-v3.5-1210-q4_K_M',
  'openchat:7b-v3.5-1210-q4_K_S',
  'openchat:7b-v3.5-1210-q5_0',
  'openchat:7b-v3.5-1210-q5_1',
  'openchat:7b-v3.5-1210-q5_K_M',
  'openchat:7b-v3.5-1210-q5_K_S',
  'openchat:7b-v3.5-1210-q6_K',
  'openchat:7b-v3.5-1210-q8_0',
  'openchat:7b-v3.5-fp16',
  'openchat:7b-v3.5-q2_K',
  'openchat:7b-v3.5-q3_K_L',
  'openchat:7b-v3.5-q3_K_M',
  'openchat:7b-v3.5-q3_K_S',
  'openchat:7b-v3.5-q4_0',
  'openchat:7b-v3.5-q4_1',
  'openchat:7b-v3.5-q4_K_M',
  'openchat:7b-v3.5-q4_K_S',
  'openchat:7b-v3.5-q5_0',
  'openchat:7b-v3.5-q5_1',
  'openchat:7b-v3.5-q5_K_M',
  'openchat:7b-v3.5-q5_K_S',
  'openchat:7b-v3.5-q6_K',
  'openchat:7b-v3.5-q8_0',
  'openchat:latest',
  'opencoder',
  'opencoder:1.5b',
  'opencoder:1.5b-instruct-fp16',
  'opencoder:1.5b-instruct-q4_K_M',
  'opencoder:1.5b-instruct-q8_0',
  'opencoder:8b',
  'opencoder:8b-instruct-fp16',
  'opencoder:8b-instruct-q4_K_M',
  'opencoder:8b-instruct-q8_0',
  'opencoder:latest',
  'openhermes',
  'openhermes:7b-mistral-v2-fp16',
  'openhermes:7b-mistral-v2-q2_K',
  'openhermes:7b-mistral-v2-q3_K_L',
  'openhermes:7b-mistral-v2-q3_K_M',
  'openhermes:7b-mistral-v2-q3_K_S',
  'openhermes:7b-mistral-v2-q4_0',
  'openhermes:7b-mistral-v2-q4_1',
  'openhermes:7b-mistral-v2-q4_K_M',
  'openhermes:7b-mistral-v2-q4_K_S',
  'openhermes:7b-mistral-v2-q5_0',
  'openhermes:7b-mistral-v2-q5_1',
  'openhermes:7b-mistral-v2-q5_K_M',
  'openhermes:7b-mistral-v2-q5_K_S',
  'openhermes:7b-mistral-v2-q6_K',
  'openhermes:7b-mistral-v2-q8_0',
  'openhermes:7b-mistral-v2.5-fp16',
  'openhermes:7b-mistral-v2.5-q2_K',
  'openhermes:7b-mistral-v2.5-q3_K_L',
  'openhermes:7b-mistral-v2.5-q3_K_M',
  'openhermes:7b-mistral-v2.5-q3_K_S',
  'openhermes:7b-mistral-v2.5-q4_0',
  'openhermes:7b-mistral-v2.5-q4_1',
  'openhermes:7b-mistral-v2.5-q4_K_M',
  'openhermes:7b-mistral-v2.5-q4_K_S',
  'openhermes:7b-mistral-v2.5-q5_0',
  'openhermes:7b-mistral-v2.5-q5_1',
  'openhermes:7b-mistral-v2.5-q5_K_M',
  'openhermes:7b-mistral-v2.5-q5_K_S',
  'openhermes:7b-mistral-v2.5-q6_K',
  'openhermes:7b-mistral-v2.5-q8_0',
  'openhermes:7b-v2',
  'openhermes:7b-v2.5',
  'openhermes:latest',
  'openhermes:v2',
  'openhermes:v2.5',
  'openthinker',
  'openthinker:32b',
  'openthinker:32b-fp16',
  'openthinker:32b-q4_K_M',
  'openthinker:32b-q8_0',
  'openthinker:32b-v2-fp16',
  'openthinker:32b-v2-q4_K_M',
  'openthinker:32b-v2-q8_0',
  'openthinker:7b',
  'openthinker:7b-fp16',
  'openthinker:7b-q4_K_M',
  'openthinker:7b-q8_0',
  'openthinker:7b-v2-fp16',
  'openthinker:7b-v2-q4_K_M',
  'openthinker:7b-v2-q8_0',
  'openthinker:latest',
  'orca-mini',
  'orca-mini:13b',
  'orca-mini:13b-fp16',
  'orca-mini:13b-q2_K',
  'orca-mini:13b-q3_K_L',
  'orca-mini:13b-q3_K_M',
  'orca-mini:13b-q3_K_S',
  'orca-mini:13b-q4_0',
  'orca-mini:13b-q4_1',
  'orca-mini:13b-q4_K_M',
  'orca-mini:13b-q4_K_S',
  'orca-mini:13b-q5_0',
  'orca-mini:13b-q5_1',
  'orca-mini:13b-q5_K_M',
  'orca-mini:13b-q5_K_S',
  'orca-mini:13b-q6_K',
  'orca-mini:13b-q8_0',
  'orca-mini:13b-v2-fp16',
  'orca-mini:13b-v2-q2_K',
  'orca-mini:13b-v2-q3_K_L',
  'orca-mini:13b-v2-q3_K_M',
  'orca-mini:13b-v2-q3_K_S',
  'orca-mini:13b-v2-q4_0',
  'orca-mini:13b-v2-q4_1',
  'orca-mini:13b-v2-q4_K_M',
  'orca-mini:13b-v2-q4_K_S',
  'orca-mini:13b-v2-q5_0',
  'orca-mini:13b-v2-q5_1',
  'orca-mini:13b-v2-q5_K_M',
  'orca-mini:13b-v2-q5_K_S',
  'orca-mini:13b-v2-q6_K',
  'orca-mini:13b-v2-q8_0',
  'orca-mini:13b-v3',
  'orca-mini:13b-v3-fp16',
  'orca-mini:13b-v3-q2_K',
  'orca-mini:13b-v3-q3_K_L',
  'orca-mini:13b-v3-q3_K_M',
  'orca-mini:13b-v3-q3_K_S',
  'orca-mini:13b-v3-q4_0',
  'orca-mini:13b-v3-q4_1',
  'orca-mini:13b-v3-q4_K_M',
  'orca-mini:13b-v3-q4_K_S',
  'orca-mini:13b-v3-q5_0',
  'orca-mini:13b-v3-q5_1',
  'orca-mini:13b-v3-q5_K_M',
  'orca-mini:13b-v3-q5_K_S',
  'orca-mini:13b-v3-q6_K',
  'orca-mini:13b-v3-q8_0',
  'orca-mini:3b',
  'orca-mini:3b-fp16',
  'orca-mini:3b-q4_0',
  'orca-mini:3b-q4_1',
  'orca-mini:3b-q5_0',
  'orca-mini:3b-q5_1',
  'orca-mini:3b-q8_0',
  'orca-mini:70b',
  'orca-mini:70b-v3',
  'orca-mini:70b-v3-fp16',
  'orca-mini:70b-v3-q2_K',
  'orca-mini:70b-v3-q3_K_L',
  'orca-mini:70b-v3-q3_K_M',
  'orca-mini:70b-v3-q3_K_S',
  'orca-mini:70b-v3-q4_0',
  'orca-mini:70b-v3-q4_1',
  'orca-mini:70b-v3-q4_K_M',
  'orca-mini:70b-v3-q4_K_S',
  'orca-mini:70b-v3-q5_0',
  'orca-mini:70b-v3-q5_1',
  'orca-mini:70b-v3-q5_K_M',
  'orca-mini:70b-v3-q5_K_S',
  'orca-mini:70b-v3-q6_K',
  'orca-mini:70b-v3-q8_0',
  'orca-mini:7b',
  'orca-mini:7b-fp16',
  'orca-mini:7b-q2_K',
  'orca-mini:7b-q3_K_L',
  'orca-mini:7b-q3_K_M',
  'orca-mini:7b-q3_K_S',
  'orca-mini:7b-q4_0',
  'orca-mini:7b-q4_1',
  'orca-mini:7b-q4_K_M',
  'orca-mini:7b-q4_K_S',
  'orca-mini:7b-q5_0',
  'orca-mini:7b-q5_1',
  'orca-mini:7b-q5_K_M',
  'orca-mini:7b-q5_K_S',
  'orca-mini:7b-q6_K',
  'orca-mini:7b-q8_0',
  'orca-mini:7b-v2-fp16',
  'orca-mini:7b-v2-q2_K',
  'orca-mini:7b-v2-q3_K_L',
  'orca-mini:7b-v2-q3_K_M',
  'orca-mini:7b-v2-q3_K_S',
  'orca-mini:7b-v2-q4_0',
  'orca-mini:7b-v2-q4_1',
  'orca-mini:7b-v2-q4_K_M',
  'orca-mini:7b-v2-q4_K_S',
  'orca-mini:7b-v2-q5_0',
  'orca-mini:7b-v2-q5_1',
  'orca-mini:7b-v2-q5_K_M',
  'orca-mini:7b-v2-q5_K_S',
  'orca-mini:7b-v2-q6_K',
  'orca-mini:7b-v2-q8_0',
  'orca-mini:7b-v3',
  'orca-mini:7b-v3-fp16',
  'orca-mini:7b-v3-q2_K',
  'orca-mini:7b-v3-q3_K_L',
  'orca-mini:7b-v3-q3_K_M',
  'orca-mini:7b-v3-q3_K_S',
  'orca-mini:7b-v3-q4_0',
  'orca-mini:7b-v3-q4_1',
  'orca-mini:7b-v3-q4_K_M',
  'orca-mini:7b-v3-q4_K_S',
  'orca-mini:7b-v3-q5_0',
  'orca-mini:7b-v3-q5_1',
  'orca-mini:7b-v3-q5_K_M',
  'orca-mini:7b-v3-q5_K_S',
  'orca-mini:7b-v3-q6_K',
  'orca-mini:7b-v3-q8_0',
  'orca-mini:latest',
  'orca2',
  'orca2:13b',
  'orca2:13b-fp16',
  'orca2:13b-q2_K',
  'orca2:13b-q3_K_L',
  'orca2:13b-q3_K_M',
  'orca2:13b-q3_K_S',
  'orca2:13b-q4_0',
  'orca2:13b-q4_1',
  'orca2:13b-q4_K_M',
  'orca2:13b-q4_K_S',
  'orca2:13b-q5_0',
  'orca2:13b-q5_1',
  'orca2:13b-q5_K_M',
  'orca2:13b-q5_K_S',
  'orca2:13b-q6_K',
  'orca2:13b-q8_0',
  'orca2:7b',
  'orca2:7b-fp16',
  'orca2:7b-q2_K',
  'orca2:7b-q3_K_L',
  'orca2:7b-q3_K_M',
  'orca2:7b-q3_K_S',
  'orca2:7b-q4_0',
  'orca2:7b-q4_1',
  'orca2:7b-q4_K_M',
  'orca2:7b-q4_K_S',
  'orca2:7b-q5_0',
  'orca2:7b-q5_1',
  'orca2:7b-q5_K_M',
  'orca2:7b-q5_K_S',
  'orca2:7b-q6_K',
  'orca2:7b-q8_0',
  'orca2:latest',
  'phi',
  'phi3',
  'phi3.5',
  'phi3.5:3.8b',
  'phi3.5:3.8b-mini-instruct-fp16',
  'phi3.5:3.8b-mini-instruct-q2_K',
  'phi3.5:3.8b-mini-instruct-q3_K_L',
  'phi3.5:3.8b-mini-instruct-q3_K_M',
  'phi3.5:3.8b-mini-instruct-q3_K_S',
  'phi3.5:3.8b-mini-instruct-q4_0',
  'phi3.5:3.8b-mini-instruct-q4_1',
  'phi3.5:3.8b-mini-instruct-q4_K_M',
  'phi3.5:3.8b-mini-instruct-q4_K_S',
  'phi3.5:3.8b-mini-instruct-q5_0',
  'phi3.5:3.8b-mini-instruct-q5_1',
  'phi3.5:3.8b-mini-instruct-q5_K_M',
  'phi3.5:3.8b-mini-instruct-q5_K_S',
  'phi3.5:3.8b-mini-instruct-q6_K',
  'phi3.5:3.8b-mini-instruct-q8_0',
  'phi3.5:latest',
  'phi3:14b',
  'phi3:14b-instruct',
  'phi3:14b-medium-128k-instruct-fp16',
  'phi3:14b-medium-128k-instruct-q2_K',
  'phi3:14b-medium-128k-instruct-q3_K_L',
  'phi3:14b-medium-128k-instruct-q3_K_M',
  'phi3:14b-medium-128k-instruct-q3_K_S',
  'phi3:14b-medium-128k-instruct-q4_0',
  'phi3:14b-medium-128k-instruct-q4_1',
  'phi3:14b-medium-128k-instruct-q4_K_M',
  'phi3:14b-medium-128k-instruct-q4_K_S',
  'phi3:14b-medium-128k-instruct-q5_0',
  'phi3:14b-medium-128k-instruct-q5_1',
  'phi3:14b-medium-128k-instruct-q5_K_M',
  'phi3:14b-medium-128k-instruct-q5_K_S',
  'phi3:14b-medium-128k-instruct-q6_K',
  'phi3:14b-medium-128k-instruct-q8_0',
  'phi3:14b-medium-4k-instruct-fp16',
  'phi3:14b-medium-4k-instruct-q2_K',
  'phi3:14b-medium-4k-instruct-q3_K_L',
  'phi3:14b-medium-4k-instruct-q3_K_M',
  'phi3:14b-medium-4k-instruct-q3_K_S',
  'phi3:14b-medium-4k-instruct-q4_0',
  'phi3:14b-medium-4k-instruct-q4_1',
  'phi3:14b-medium-4k-instruct-q4_K_M',
  'phi3:14b-medium-4k-instruct-q4_K_S',
  'phi3:14b-medium-4k-instruct-q5_0',
  'phi3:14b-medium-4k-instruct-q5_1',
  'phi3:14b-medium-4k-instruct-q5_K_M',
  'phi3:14b-medium-4k-instruct-q5_K_S',
  'phi3:14b-medium-4k-instruct-q6_K',
  'phi3:14b-medium-4k-instruct-q8_0',
  'phi3:3.8b',
  'phi3:3.8b-instruct',
  'phi3:3.8b-mini-128k-instruct-fp16',
  'phi3:3.8b-mini-128k-instruct-q2_K',
  'phi3:3.8b-mini-128k-instruct-q3_K_L',
  'phi3:3.8b-mini-128k-instruct-q3_K_M',
  'phi3:3.8b-mini-128k-instruct-q3_K_S',
  'phi3:3.8b-mini-128k-instruct-q4_0',
  'phi3:3.8b-mini-128k-instruct-q4_1',
  'phi3:3.8b-mini-128k-instruct-q4_K_M',
  'phi3:3.8b-mini-128k-instruct-q4_K_S',
  'phi3:3.8b-mini-128k-instruct-q5_0',
  'phi3:3.8b-mini-128k-instruct-q5_1',
  'phi3:3.8b-mini-128k-instruct-q5_K_M',
  'phi3:3.8b-mini-128k-instruct-q5_K_S',
  'phi3:3.8b-mini-128k-instruct-q6_K',
  'phi3:3.8b-mini-128k-instruct-q8_0',
  'phi3:3.8b-mini-4k-instruct-fp16',
  'phi3:3.8b-mini-4k-instruct-q2_K',
  'phi3:3.8b-mini-4k-instruct-q3_K_L',
  'phi3:3.8b-mini-4k-instruct-q3_K_M',
  'phi3:3.8b-mini-4k-instruct-q3_K_S',
  'phi3:3.8b-mini-4k-instruct-q4_0',
  'phi3:3.8b-mini-4k-instruct-q4_1',
  'phi3:3.8b-mini-4k-instruct-q4_K_M',
  'phi3:3.8b-mini-4k-instruct-q4_K_S',
  'phi3:3.8b-mini-4k-instruct-q5_0',
  'phi3:3.8b-mini-4k-instruct-q5_1',
  'phi3:3.8b-mini-4k-instruct-q5_K_M',
  'phi3:3.8b-mini-4k-instruct-q5_K_S',
  'phi3:3.8b-mini-4k-instruct-q6_K',
  'phi3:3.8b-mini-4k-instruct-q8_0',
  'phi3:instruct',
  'phi3:latest',
  'phi3:medium',
  'phi3:medium-128k',
  'phi3:medium-4k',
  'phi3:mini',
  'phi3:mini-128k',
  'phi3:mini-4k',
  'phi4',
  'phi4-mini',
  'phi4-mini-reasoning',
  'phi4-mini-reasoning:3.8b',
  'phi4-mini-reasoning:3.8b-fp16',
  'phi4-mini-reasoning:3.8b-q4_K_M',
  'phi4-mini-reasoning:3.8b-q8_0',
  'phi4-mini-reasoning:latest',
  'phi4-mini:3.8b',
  'phi4-mini:3.8b-fp16',
  'phi4-mini:3.8b-q4_K_M',
  'phi4-mini:3.8b-q8_0',
  'phi4-mini:latest',
  'phi4-reasoning',
  'phi4-reasoning:14b',
  'phi4-reasoning:14b-fp16',
  'phi4-reasoning:14b-plus-fp16',
  'phi4-reasoning:14b-plus-q4_K_M',
  'phi4-reasoning:14b-plus-q8_0',
  'phi4-reasoning:14b-q4_K_M',
  'phi4-reasoning:14b-q8_0',
  'phi4-reasoning:latest',
  'phi4-reasoning:plus',
  'phi4:14b',
  'phi4:14b-fp16',
  'phi4:14b-q4_K_M',
  'phi4:14b-q8_0',
  'phi4:latest',
  'phi:2.7b',
  'phi:2.7b-chat-v2-fp16',
  'phi:2.7b-chat-v2-q2_K',
  'phi:2.7b-chat-v2-q3_K_L',
  'phi:2.7b-chat-v2-q3_K_M',
  'phi:2.7b-chat-v2-q3_K_S',
  'phi:2.7b-chat-v2-q4_0',
  'phi:2.7b-chat-v2-q4_1',
  'phi:2.7b-chat-v2-q4_K_M',
  'phi:2.7b-chat-v2-q4_K_S',
  'phi:2.7b-chat-v2-q5_0',
  'phi:2.7b-chat-v2-q5_1',
  'phi:2.7b-chat-v2-q5_K_M',
  'phi:2.7b-chat-v2-q5_K_S',
  'phi:2.7b-chat-v2-q6_K',
  'phi:2.7b-chat-v2-q8_0',
  'phi:chat',
  'phi:latest',
  'phind-codellama',
  'phind-codellama:34b',
  'phind-codellama:34b-fp16',
  'phind-codellama:34b-python',
  'phind-codellama:34b-python-fp16',
  'phind-codellama:34b-python-q2_K',
  'phind-codellama:34b-python-q3_K_L',
  'phind-codellama:34b-python-q3_K_M',
  'phind-codellama:34b-python-q3_K_S',
  'phind-codellama:34b-python-q4_0',
  'phind-codellama:34b-python-q4_1',
  'phind-codellama:34b-python-q4_K_M',
  'phind-codellama:34b-python-q4_K_S',
  'phind-codellama:34b-python-q5_0',
  'phind-codellama:34b-python-q5_1',
  'phind-codellama:34b-python-q5_K_M',
  'phind-codellama:34b-python-q5_K_S',
  'phind-codellama:34b-python-q6_K',
  'phind-codellama:34b-python-q8_0',
  'phind-codellama:34b-q2_K',
  'phind-codellama:34b-q3_K_L',
  'phind-codellama:34b-q3_K_M',
  'phind-codellama:34b-q3_K_S',
  'phind-codellama:34b-q4_0',
  'phind-codellama:34b-q4_1',
  'phind-codellama:34b-q4_K_M',
  'phind-codellama:34b-q4_K_S',
  'phind-codellama:34b-q5_0',
  'phind-codellama:34b-q5_1',
  'phind-codellama:34b-q5_K_M',
  'phind-codellama:34b-q5_K_S',
  'phind-codellama:34b-q6_K',
  'phind-codellama:34b-q8_0',
  'phind-codellama:34b-v2',
  'phind-codellama:34b-v2-fp16',
  'phind-codellama:34b-v2-q2_K',
  'phind-codellama:34b-v2-q3_K_L',
  'phind-codellama:34b-v2-q3_K_M',
  'phind-codellama:34b-v2-q3_K_S',
  'phind-codellama:34b-v2-q4_0',
  'phind-codellama:34b-v2-q4_1',
  'phind-codellama:34b-v2-q4_K_M',
  'phind-codellama:34b-v2-q4_K_S',
  'phind-codellama:34b-v2-q5_0',
  'phind-codellama:34b-v2-q5_1',
  'phind-codellama:34b-v2-q5_K_M',
  'phind-codellama:34b-v2-q5_K_S',
  'phind-codellama:34b-v2-q6_K',
  'phind-codellama:34b-v2-q8_0',
  'phind-codellama:latest',
  'qwen',
  'qwen2',
  'qwen2-math',
  'qwen2-math:1.5b',
  'qwen2-math:1.5b-instruct',
  'qwen2-math:1.5b-instruct-fp16',
  'qwen2-math:1.5b-instruct-q2_K',
  'qwen2-math:1.5b-instruct-q3_K_L',
  'qwen2-math:1.5b-instruct-q3_K_M',
  'qwen2-math:1.5b-instruct-q3_K_S',
  'qwen2-math:1.5b-instruct-q4_0',
  'qwen2-math:1.5b-instruct-q4_1',
  'qwen2-math:1.5b-instruct-q4_K_M',
  'qwen2-math:1.5b-instruct-q4_K_S',
  'qwen2-math:1.5b-instruct-q5_0',
  'qwen2-math:1.5b-instruct-q5_1',
  'qwen2-math:1.5b-instruct-q5_K_M',
  'qwen2-math:1.5b-instruct-q5_K_S',
  'qwen2-math:1.5b-instruct-q6_K',
  'qwen2-math:1.5b-instruct-q8_0',
  'qwen2-math:72b',
  'qwen2-math:72b-instruct',
  'qwen2-math:72b-instruct-fp16',
  'qwen2-math:72b-instruct-q2_K',
  'qwen2-math:72b-instruct-q3_K_L',
  'qwen2-math:72b-instruct-q3_K_M',
  'qwen2-math:72b-instruct-q3_K_S',
  'qwen2-math:72b-instruct-q4_0',
  'qwen2-math:72b-instruct-q4_1',
  'qwen2-math:72b-instruct-q4_K_M',
  'qwen2-math:72b-instruct-q4_K_S',
  'qwen2-math:72b-instruct-q5_0',
  'qwen2-math:72b-instruct-q5_1',
  'qwen2-math:72b-instruct-q5_K_M',
  'qwen2-math:72b-instruct-q5_K_S',
  'qwen2-math:72b-instruct-q6_K',
  'qwen2-math:72b-instruct-q8_0',
  'qwen2-math:7b',
  'qwen2-math:7b-instruct',
  'qwen2-math:7b-instruct-fp16',
  'qwen2-math:7b-instruct-q2_K',
  'qwen2-math:7b-instruct-q3_K_L',
  'qwen2-math:7b-instruct-q3_K_M',
  'qwen2-math:7b-instruct-q3_K_S',
  'qwen2-math:7b-instruct-q4_0',
  'qwen2-math:7b-instruct-q4_1',
  'qwen2-math:7b-instruct-q4_K_M',
  'qwen2-math:7b-instruct-q4_K_S',
  'qwen2-math:7b-instruct-q5_0',
  'qwen2-math:7b-instruct-q5_1',
  'qwen2-math:7b-instruct-q5_K_M',
  'qwen2-math:7b-instruct-q5_K_S',
  'qwen2-math:7b-instruct-q6_K',
  'qwen2-math:7b-instruct-q8_0',
  'qwen2-math:latest',
  'qwen2.5',
  'qwen2.5-coder',
  'qwen2.5-coder:0.5b',
  'qwen2.5-coder:0.5b-base',
  'qwen2.5-coder:0.5b-base-fp16',
  'qwen2.5-coder:0.5b-base-q2_K',
  'qwen2.5-coder:0.5b-base-q3_K_L',
  'qwen2.5-coder:0.5b-base-q3_K_M',
  'qwen2.5-coder:0.5b-base-q3_K_S',
  'qwen2.5-coder:0.5b-base-q4_0',
  'qwen2.5-coder:0.5b-base-q4_1',
  'qwen2.5-coder:0.5b-base-q4_K_M',
  'qwen2.5-coder:0.5b-base-q4_K_S',
  'qwen2.5-coder:0.5b-base-q5_0',
  'qwen2.5-coder:0.5b-base-q5_1',
  'qwen2.5-coder:0.5b-base-q5_K_M',
  'qwen2.5-coder:0.5b-base-q5_K_S',
  'qwen2.5-coder:0.5b-base-q6_K',
  'qwen2.5-coder:0.5b-base-q8_0',
  'qwen2.5-coder:0.5b-instruct',
  'qwen2.5-coder:0.5b-instruct-fp16',
  'qwen2.5-coder:0.5b-instruct-q2_K',
  'qwen2.5-coder:0.5b-instruct-q3_K_L',
  'qwen2.5-coder:0.5b-instruct-q3_K_M',
  'qwen2.5-coder:0.5b-instruct-q3_K_S',
  'qwen2.5-coder:0.5b-instruct-q4_0',
  'qwen2.5-coder:0.5b-instruct-q4_1',
  'qwen2.5-coder:0.5b-instruct-q4_K_M',
  'qwen2.5-coder:0.5b-instruct-q4_K_S',
  'qwen2.5-coder:0.5b-instruct-q5_0',
  'qwen2.5-coder:0.5b-instruct-q5_1',
  'qwen2.5-coder:0.5b-instruct-q5_K_M',
  'qwen2.5-coder:0.5b-instruct-q5_K_S',
  'qwen2.5-coder:0.5b-instruct-q6_K',
  'qwen2.5-coder:0.5b-instruct-q8_0',
  'qwen2.5-coder:1.5b',
  'qwen2.5-coder:1.5b-base',
  'qwen2.5-coder:1.5b-base-fp16',
  'qwen2.5-coder:1.5b-base-q2_K',
  'qwen2.5-coder:1.5b-base-q3_K_L',
  'qwen2.5-coder:1.5b-base-q3_K_M',
  'qwen2.5-coder:1.5b-base-q3_K_S',
  'qwen2.5-coder:1.5b-base-q4_0',
  'qwen2.5-coder:1.5b-base-q4_1',
  'qwen2.5-coder:1.5b-base-q4_K_M',
  'qwen2.5-coder:1.5b-base-q4_K_S',
  'qwen2.5-coder:1.5b-base-q5_0',
  'qwen2.5-coder:1.5b-base-q5_1',
  'qwen2.5-coder:1.5b-base-q5_K_M',
  'qwen2.5-coder:1.5b-base-q5_K_S',
  'qwen2.5-coder:1.5b-base-q6_K',
  'qwen2.5-coder:1.5b-base-q8_0',
  'qwen2.5-coder:1.5b-instruct',
  'qwen2.5-coder:1.5b-instruct-fp16',
  'qwen2.5-coder:1.5b-instruct-q2_K',
  'qwen2.5-coder:1.5b-instruct-q3_K_L',
  'qwen2.5-coder:1.5b-instruct-q3_K_M',
  'qwen2.5-coder:1.5b-instruct-q3_K_S',
  'qwen2.5-coder:1.5b-instruct-q4_0',
  'qwen2.5-coder:1.5b-instruct-q4_1',
  'qwen2.5-coder:1.5b-instruct-q4_K_M',
  'qwen2.5-coder:1.5b-instruct-q4_K_S',
  'qwen2.5-coder:1.5b-instruct-q5_0',
  'qwen2.5-coder:1.5b-instruct-q5_1',
  'qwen2.5-coder:1.5b-instruct-q5_K_M',
  'qwen2.5-coder:1.5b-instruct-q5_K_S',
  'qwen2.5-coder:1.5b-instruct-q6_K',
  'qwen2.5-coder:1.5b-instruct-q8_0',
  'qwen2.5-coder:14b',
  'qwen2.5-coder:14b-base',
  'qwen2.5-coder:14b-base-fp16',
  'qwen2.5-coder:14b-base-q2_K',
  'qwen2.5-coder:14b-base-q3_K_L',
  'qwen2.5-coder:14b-base-q3_K_M',
  'qwen2.5-coder:14b-base-q3_K_S',
  'qwen2.5-coder:14b-base-q4_0',
  'qwen2.5-coder:14b-base-q4_1',
  'qwen2.5-coder:14b-base-q4_K_M',
  'qwen2.5-coder:14b-base-q4_K_S',
  'qwen2.5-coder:14b-base-q5_0',
  'qwen2.5-coder:14b-base-q5_1',
  'qwen2.5-coder:14b-base-q5_K_M',
  'qwen2.5-coder:14b-base-q5_K_S',
  'qwen2.5-coder:14b-base-q6_K',
  'qwen2.5-coder:14b-base-q8_0',
  'qwen2.5-coder:14b-instruct',
  'qwen2.5-coder:14b-instruct-fp16',
  'qwen2.5-coder:14b-instruct-q2_K',
  'qwen2.5-coder:14b-instruct-q3_K_L',
  'qwen2.5-coder:14b-instruct-q3_K_M',
  'qwen2.5-coder:14b-instruct-q3_K_S',
  'qwen2.5-coder:14b-instruct-q4_0',
  'qwen2.5-coder:14b-instruct-q4_1',
  'qwen2.5-coder:14b-instruct-q4_K_M',
  'qwen2.5-coder:14b-instruct-q4_K_S',
  'qwen2.5-coder:14b-instruct-q5_0',
  'qwen2.5-coder:14b-instruct-q5_1',
  'qwen2.5-coder:14b-instruct-q5_K_M',
  'qwen2.5-coder:14b-instruct-q5_K_S',
  'qwen2.5-coder:14b-instruct-q6_K',
  'qwen2.5-coder:14b-instruct-q8_0',
  'qwen2.5-coder:32b',
  'qwen2.5-coder:32b-base',
  'qwen2.5-coder:32b-base-fp16',
  'qwen2.5-coder:32b-base-q2_K',
  'qwen2.5-coder:32b-base-q3_K_L',
  'qwen2.5-coder:32b-base-q3_K_M',
  'qwen2.5-coder:32b-base-q3_K_S',
  'qwen2.5-coder:32b-base-q4_0',
  'qwen2.5-coder:32b-base-q4_1',
  'qwen2.5-coder:32b-base-q4_K_M',
  'qwen2.5-coder:32b-base-q4_K_S',
  'qwen2.5-coder:32b-base-q5_0',
  'qwen2.5-coder:32b-base-q5_1',
  'qwen2.5-coder:32b-base-q5_K_M',
  'qwen2.5-coder:32b-base-q5_K_S',
  'qwen2.5-coder:32b-base-q6_K',
  'qwen2.5-coder:32b-base-q8_0',
  'qwen2.5-coder:32b-instruct',
  'qwen2.5-coder:32b-instruct-fp16',
  'qwen2.5-coder:32b-instruct-q2_K',
  'qwen2.5-coder:32b-instruct-q3_K_L',
  'qwen2.5-coder:32b-instruct-q3_K_M',
  'qwen2.5-coder:32b-instruct-q3_K_S',
  'qwen2.5-coder:32b-instruct-q4_0',
  'qwen2.5-coder:32b-instruct-q4_1',
  'qwen2.5-coder:32b-instruct-q4_K_M',
  'qwen2.5-coder:32b-instruct-q4_K_S',
  'qwen2.5-coder:32b-instruct-q5_0',
  'qwen2.5-coder:32b-instruct-q5_1',
  'qwen2.5-coder:32b-instruct-q5_K_M',
  'qwen2.5-coder:32b-instruct-q5_K_S',
  'qwen2.5-coder:32b-instruct-q6_K',
  'qwen2.5-coder:32b-instruct-q8_0',
  'qwen2.5-coder:3b',
  'qwen2.5-coder:3b-base',
  'qwen2.5-coder:3b-base-fp16',
  'qwen2.5-coder:3b-base-q2_K',
  'qwen2.5-coder:3b-base-q3_K_L',
  'qwen2.5-coder:3b-base-q3_K_M',
  'qwen2.5-coder:3b-base-q3_K_S',
  'qwen2.5-coder:3b-base-q4_0',
  'qwen2.5-coder:3b-base-q4_1',
  'qwen2.5-coder:3b-base-q4_K_M',
  'qwen2.5-coder:3b-base-q4_K_S',
  'qwen2.5-coder:3b-base-q5_0',
  'qwen2.5-coder:3b-base-q5_1',
  'qwen2.5-coder:3b-base-q5_K_M',
  'qwen2.5-coder:3b-base-q5_K_S',
  'qwen2.5-coder:3b-base-q6_K',
  'qwen2.5-coder:3b-base-q8_0',
  'qwen2.5-coder:3b-instruct',
  'qwen2.5-coder:3b-instruct-fp16',
  'qwen2.5-coder:3b-instruct-q2_K',
  'qwen2.5-coder:3b-instruct-q3_K_L',
  'qwen2.5-coder:3b-instruct-q3_K_M',
  'qwen2.5-coder:3b-instruct-q3_K_S',
  'qwen2.5-coder:3b-instruct-q4_0',
  'qwen2.5-coder:3b-instruct-q4_1',
  'qwen2.5-coder:3b-instruct-q4_K_M',
  'qwen2.5-coder:3b-instruct-q4_K_S',
  'qwen2.5-coder:3b-instruct-q5_0',
  'qwen2.5-coder:3b-instruct-q5_1',
  'qwen2.5-coder:3b-instruct-q5_K_M',
  'qwen2.5-coder:3b-instruct-q5_K_S',
  'qwen2.5-coder:3b-instruct-q6_K',
  'qwen2.5-coder:3b-instruct-q8_0',
  'qwen2.5-coder:7b',
  'qwen2.5-coder:7b-base',
  'qwen2.5-coder:7b-base-fp16',
  'qwen2.5-coder:7b-base-q2_K',
  'qwen2.5-coder:7b-base-q3_K_L',
  'qwen2.5-coder:7b-base-q3_K_M',
  'qwen2.5-coder:7b-base-q3_K_S',
  'qwen2.5-coder:7b-base-q4_0',
  'qwen2.5-coder:7b-base-q4_1',
  'qwen2.5-coder:7b-base-q4_K_M',
  'qwen2.5-coder:7b-base-q4_K_S',
  'qwen2.5-coder:7b-base-q5_0',
  'qwen2.5-coder:7b-base-q5_1',
  'qwen2.5-coder:7b-base-q5_K_M',
  'qwen2.5-coder:7b-base-q5_K_S',
  'qwen2.5-coder:7b-base-q6_K',
  'qwen2.5-coder:7b-base-q8_0',
  'qwen2.5-coder:7b-instruct',
  'qwen2.5-coder:7b-instruct-fp16',
  'qwen2.5-coder:7b-instruct-q2_K',
  'qwen2.5-coder:7b-instruct-q3_K_L',
  'qwen2.5-coder:7b-instruct-q3_K_M',
  'qwen2.5-coder:7b-instruct-q3_K_S',
  'qwen2.5-coder:7b-instruct-q4_0',
  'qwen2.5-coder:7b-instruct-q4_1',
  'qwen2.5-coder:7b-instruct-q4_K_M',
  'qwen2.5-coder:7b-instruct-q4_K_S',
  'qwen2.5-coder:7b-instruct-q5_0',
  'qwen2.5-coder:7b-instruct-q5_1',
  'qwen2.5-coder:7b-instruct-q5_K_M',
  'qwen2.5-coder:7b-instruct-q5_K_S',
  'qwen2.5-coder:7b-instruct-q6_K',
  'qwen2.5-coder:7b-instruct-q8_0',
  'qwen2.5-coder:latest',
  'qwen2.5:0.5b',
  'qwen2.5:0.5b-base',
  'qwen2.5:0.5b-base-q2_K',
  'qwen2.5:0.5b-base-q3_K_L',
  'qwen2.5:0.5b-base-q3_K_M',
  'qwen2.5:0.5b-base-q3_K_S',
  'qwen2.5:0.5b-base-q4_0',
  'qwen2.5:0.5b-base-q4_1',
  'qwen2.5:0.5b-base-q4_K_M',
  'qwen2.5:0.5b-base-q4_K_S',
  'qwen2.5:0.5b-base-q5_0',
  'qwen2.5:0.5b-base-q5_1',
  'qwen2.5:0.5b-base-q5_K_S',
  'qwen2.5:0.5b-base-q8_0',
  'qwen2.5:0.5b-instruct',
  'qwen2.5:0.5b-instruct-fp16',
  'qwen2.5:0.5b-instruct-q2_K',
  'qwen2.5:0.5b-instruct-q3_K_L',
  'qwen2.5:0.5b-instruct-q3_K_M',
  'qwen2.5:0.5b-instruct-q3_K_S',
  'qwen2.5:0.5b-instruct-q4_0',
  'qwen2.5:0.5b-instruct-q4_1',
  'qwen2.5:0.5b-instruct-q4_K_M',
  'qwen2.5:0.5b-instruct-q4_K_S',
  'qwen2.5:0.5b-instruct-q5_0',
  'qwen2.5:0.5b-instruct-q5_1',
  'qwen2.5:0.5b-instruct-q5_K_M',
  'qwen2.5:0.5b-instruct-q5_K_S',
  'qwen2.5:0.5b-instruct-q6_K',
  'qwen2.5:0.5b-instruct-q8_0',
  'qwen2.5:1.5b',
  'qwen2.5:1.5b-instruct',
  'qwen2.5:1.5b-instruct-fp16',
  'qwen2.5:1.5b-instruct-q2_K',
  'qwen2.5:1.5b-instruct-q3_K_L',
  'qwen2.5:1.5b-instruct-q3_K_M',
  'qwen2.5:1.5b-instruct-q3_K_S',
  'qwen2.5:1.5b-instruct-q4_0',
  'qwen2.5:1.5b-instruct-q4_1',
  'qwen2.5:1.5b-instruct-q4_K_M',
  'qwen2.5:1.5b-instruct-q4_K_S',
  'qwen2.5:1.5b-instruct-q5_0',
  'qwen2.5:1.5b-instruct-q5_1',
  'qwen2.5:1.5b-instruct-q5_K_M',
  'qwen2.5:1.5b-instruct-q5_K_S',
  'qwen2.5:1.5b-instruct-q6_K',
  'qwen2.5:1.5b-instruct-q8_0',
  'qwen2.5:14b',
  'qwen2.5:14b-instruct',
  'qwen2.5:14b-instruct-fp16',
  'qwen2.5:14b-instruct-q2_K',
  'qwen2.5:14b-instruct-q3_K_L',
  'qwen2.5:14b-instruct-q3_K_M',
  'qwen2.5:14b-instruct-q3_K_S',
  'qwen2.5:14b-instruct-q4_0',
  'qwen2.5:14b-instruct-q4_1',
  'qwen2.5:14b-instruct-q4_K_M',
  'qwen2.5:14b-instruct-q4_K_S',
  'qwen2.5:14b-instruct-q5_0',
  'qwen2.5:14b-instruct-q5_1',
  'qwen2.5:14b-instruct-q5_K_M',
  'qwen2.5:14b-instruct-q5_K_S',
  'qwen2.5:14b-instruct-q6_K',
  'qwen2.5:14b-instruct-q8_0',
  'qwen2.5:32b',
  'qwen2.5:32b-instruct',
  'qwen2.5:32b-instruct-fp16',
  'qwen2.5:32b-instruct-q2_K',
  'qwen2.5:32b-instruct-q3_K_L',
  'qwen2.5:32b-instruct-q3_K_M',
  'qwen2.5:32b-instruct-q3_K_S',
  'qwen2.5:32b-instruct-q4_0',
  'qwen2.5:32b-instruct-q4_1',
  'qwen2.5:32b-instruct-q4_K_M',
  'qwen2.5:32b-instruct-q4_K_S',
  'qwen2.5:32b-instruct-q5_0',
  'qwen2.5:32b-instruct-q5_1',
  'qwen2.5:32b-instruct-q5_K_M',
  'qwen2.5:32b-instruct-q5_K_S',
  'qwen2.5:32b-instruct-q6_K',
  'qwen2.5:32b-instruct-q8_0',
  'qwen2.5:3b',
  'qwen2.5:3b-instruct',
  'qwen2.5:3b-instruct-fp16',
  'qwen2.5:3b-instruct-q2_K',
  'qwen2.5:3b-instruct-q3_K_L',
  'qwen2.5:3b-instruct-q3_K_M',
  'qwen2.5:3b-instruct-q3_K_S',
  'qwen2.5:3b-instruct-q4_0',
  'qwen2.5:3b-instruct-q4_1',
  'qwen2.5:3b-instruct-q4_K_M',
  'qwen2.5:3b-instruct-q4_K_S',
  'qwen2.5:3b-instruct-q5_0',
  'qwen2.5:3b-instruct-q5_1',
  'qwen2.5:3b-instruct-q5_K_M',
  'qwen2.5:3b-instruct-q5_K_S',
  'qwen2.5:3b-instruct-q6_K',
  'qwen2.5:3b-instruct-q8_0',
  'qwen2.5:72b',
  'qwen2.5:72b-instruct',
  'qwen2.5:72b-instruct-fp16',
  'qwen2.5:72b-instruct-q2_K',
  'qwen2.5:72b-instruct-q3_K_L',
  'qwen2.5:72b-instruct-q3_K_M',
  'qwen2.5:72b-instruct-q3_K_S',
  'qwen2.5:72b-instruct-q4_0',
  'qwen2.5:72b-instruct-q4_1',
  'qwen2.5:72b-instruct-q4_K_M',
  'qwen2.5:72b-instruct-q4_K_S',
  'qwen2.5:72b-instruct-q5_0',
  'qwen2.5:72b-instruct-q5_1',
  'qwen2.5:72b-instruct-q5_K_M',
  'qwen2.5:72b-instruct-q5_K_S',
  'qwen2.5:72b-instruct-q6_K',
  'qwen2.5:72b-instruct-q8_0',
  'qwen2.5:7b',
  'qwen2.5:7b-instruct',
  'qwen2.5:7b-instruct-fp16',
  'qwen2.5:7b-instruct-q2_K',
  'qwen2.5:7b-instruct-q3_K_L',
  'qwen2.5:7b-instruct-q3_K_M',
  'qwen2.5:7b-instruct-q3_K_S',
  'qwen2.5:7b-instruct-q4_0',
  'qwen2.5:7b-instruct-q4_1',
  'qwen2.5:7b-instruct-q4_K_M',
  'qwen2.5:7b-instruct-q4_K_S',
  'qwen2.5:7b-instruct-q5_0',
  'qwen2.5:7b-instruct-q5_1',
  'qwen2.5:7b-instruct-q5_K_M',
  'qwen2.5:7b-instruct-q5_K_S',
  'qwen2.5:7b-instruct-q6_K',
  'qwen2.5:7b-instruct-q8_0',
  'qwen2.5:latest',
  'qwen2:0.5b',
  'qwen2:0.5b-instruct',
  'qwen2:0.5b-instruct-fp16',
  'qwen2:0.5b-instruct-q2_K',
  'qwen2:0.5b-instruct-q3_K_L',
  'qwen2:0.5b-instruct-q3_K_M',
  'qwen2:0.5b-instruct-q3_K_S',
  'qwen2:0.5b-instruct-q4_0',
  'qwen2:0.5b-instruct-q4_1',
  'qwen2:0.5b-instruct-q4_K_M',
  'qwen2:0.5b-instruct-q4_K_S',
  'qwen2:0.5b-instruct-q5_0',
  'qwen2:0.5b-instruct-q5_1',
  'qwen2:0.5b-instruct-q5_K_M',
  'qwen2:0.5b-instruct-q5_K_S',
  'qwen2:0.5b-instruct-q6_K',
  'qwen2:0.5b-instruct-q8_0',
  'qwen2:1.5b',
  'qwen2:1.5b-instruct',
  'qwen2:1.5b-instruct-fp16',
  'qwen2:1.5b-instruct-q2_K',
  'qwen2:1.5b-instruct-q3_K_L',
  'qwen2:1.5b-instruct-q3_K_M',
  'qwen2:1.5b-instruct-q3_K_S',
  'qwen2:1.5b-instruct-q4_0',
  'qwen2:1.5b-instruct-q4_1',
  'qwen2:1.5b-instruct-q4_K_M',
  'qwen2:1.5b-instruct-q4_K_S',
  'qwen2:1.5b-instruct-q5_0',
  'qwen2:1.5b-instruct-q5_1',
  'qwen2:1.5b-instruct-q5_K_M',
  'qwen2:1.5b-instruct-q5_K_S',
  'qwen2:1.5b-instruct-q6_K',
  'qwen2:1.5b-instruct-q8_0',
  'qwen2:72b',
  'qwen2:72b-instruct',
  'qwen2:72b-instruct-fp16',
  'qwen2:72b-instruct-q2_K',
  'qwen2:72b-instruct-q3_K_L',
  'qwen2:72b-instruct-q3_K_M',
  'qwen2:72b-instruct-q3_K_S',
  'qwen2:72b-instruct-q4_0',
  'qwen2:72b-instruct-q4_1',
  'qwen2:72b-instruct-q4_K_M',
  'qwen2:72b-instruct-q4_K_S',
  'qwen2:72b-instruct-q5_0',
  'qwen2:72b-instruct-q5_1',
  'qwen2:72b-instruct-q5_K_M',
  'qwen2:72b-instruct-q5_K_S',
  'qwen2:72b-instruct-q6_K',
  'qwen2:72b-instruct-q8_0',
  'qwen2:72b-text',
  'qwen2:72b-text-fp16',
  'qwen2:72b-text-q2_K',
  'qwen2:72b-text-q3_K_L',
  'qwen2:72b-text-q3_K_M',
  'qwen2:72b-text-q3_K_S',
  'qwen2:72b-text-q4_0',
  'qwen2:72b-text-q4_1',
  'qwen2:72b-text-q4_K_M',
  'qwen2:72b-text-q4_K_S',
  'qwen2:72b-text-q5_0',
  'qwen2:72b-text-q5_1',
  'qwen2:72b-text-q5_K_M',
  'qwen2:72b-text-q5_K_S',
  'qwen2:72b-text-q6_K',
  'qwen2:72b-text-q8_0',
  'qwen2:7b',
  'qwen2:7b-instruct',
  'qwen2:7b-instruct-fp16',
  'qwen2:7b-instruct-q2_K',
  'qwen2:7b-instruct-q3_K_L',
  'qwen2:7b-instruct-q3_K_M',
  'qwen2:7b-instruct-q3_K_S',
  'qwen2:7b-instruct-q4_0',
  'qwen2:7b-instruct-q4_1',
  'qwen2:7b-instruct-q4_K_M',
  'qwen2:7b-instruct-q4_K_S',
  'qwen2:7b-instruct-q5_0',
  'qwen2:7b-instruct-q5_1',
  'qwen2:7b-instruct-q5_K_M',
  'qwen2:7b-instruct-q5_K_S',
  'qwen2:7b-instruct-q6_K',
  'qwen2:7b-instruct-q8_0',
  'qwen2:7b-text',
  'qwen2:7b-text-q2_K',
  'qwen2:7b-text-q3_K_L',
  'qwen2:7b-text-q3_K_M',
  'qwen2:7b-text-q3_K_S',
  'qwen2:7b-text-q4_0',
  'qwen2:7b-text-q4_1',
  'qwen2:7b-text-q4_K_M',
  'qwen2:7b-text-q4_K_S',
  'qwen2:7b-text-q5_0',
  'qwen2:7b-text-q5_1',
  'qwen2:7b-text-q8_0',
  'qwen2:latest',
  'qwen3',
  'qwen3-coder',
  'qwen3-coder:30b',
  'qwen3-coder:30b-a3b-fp16',
  'qwen3-coder:30b-a3b-q4_K_M',
  'qwen3-coder:30b-a3b-q8_0',
  'qwen3-coder:480b-a35b-fp16',
  'qwen3-coder:latest',
  'qwen3:0.6b',
  'qwen3:0.6b-fp16',
  'qwen3:0.6b-q4_K_M',
  'qwen3:0.6b-q8_0',
  'qwen3:1.7b',
  'qwen3:1.7b-fp16',
  'qwen3:1.7b-q4_K_M',
  'qwen3:1.7b-q8_0',
  'qwen3:14b',
  'qwen3:14b-fp16',
  'qwen3:14b-q4_K_M',
  'qwen3:14b-q8_0',
  'qwen3:235b',
  'qwen3:235b-a22b',
  'qwen3:235b-a22b-fp16',
  'qwen3:235b-a22b-instruct-2507-q4_K_M',
  'qwen3:235b-a22b-instruct-2507-q8_0',
  'qwen3:235b-a22b-q4_K_M',
  'qwen3:235b-a22b-q8_0',
  'qwen3:235b-a22b-thinking-2507-fp16',
  'qwen3:235b-a22b-thinking-2507-q4_K_M',
  'qwen3:235b-a22b-thinking-2507-q8_0',
  'qwen3:235b-thinking',
  'qwen3:30b',
  'qwen3:30b-a3b',
  'qwen3:30b-a3b-fp16',
  'qwen3:30b-a3b-instruct-2507-fp16',
  'qwen3:30b-a3b-instruct-2507-q4_K_M',
  'qwen3:30b-a3b-instruct-2507-q8_0',
  'qwen3:30b-a3b-q4_K_M',
  'qwen3:30b-a3b-q8_0',
  'qwen3:30b-a3b-thinking-2507-fp16',
  'qwen3:30b-a3b-thinking-2507-q4_K_M',
  'qwen3:30b-a3b-thinking-2507-q8_0',
  'qwen3:30b-thinking',
  'qwen3:32b',
  'qwen3:32b-fp16',
  'qwen3:32b-q4_K_M',
  'qwen3:32b-q8_0',
  'qwen3:4b',
  'qwen3:4b-fp16',
  'qwen3:4b-instruct',
  'qwen3:4b-instruct-2507-fp16',
  'qwen3:4b-instruct-2507-q4_K_M',
  'qwen3:4b-instruct-2507-q8_0',
  'qwen3:4b-q4_K_M',
  'qwen3:4b-q8_0',
  'qwen3:4b-thinking',
  'qwen3:4b-thinking-2507-fp16',
  'qwen3:4b-thinking-2507-q4_K_M',
  'qwen3:4b-thinking-2507-q8_0',
  'qwen3:8b',
  'qwen3:8b-fp16',
  'qwen3:8b-q4_K_M',
  'qwen3:8b-q8_0',
  'qwen3:latest',
  'qwen:0.5b',
  'qwen:0.5b-chat',
  'qwen:0.5b-chat-v1.5-fp16',
  'qwen:0.5b-chat-v1.5-q2_K',
  'qwen:0.5b-chat-v1.5-q3_K_L',
  'qwen:0.5b-chat-v1.5-q3_K_M',
  'qwen:0.5b-chat-v1.5-q3_K_S',
  'qwen:0.5b-chat-v1.5-q4_0',
  'qwen:0.5b-chat-v1.5-q4_1',
  'qwen:0.5b-chat-v1.5-q4_K_M',
  'qwen:0.5b-chat-v1.5-q4_K_S',
  'qwen:0.5b-chat-v1.5-q5_0',
  'qwen:0.5b-chat-v1.5-q5_1',
  'qwen:0.5b-chat-v1.5-q5_K_M',
  'qwen:0.5b-chat-v1.5-q5_K_S',
  'qwen:0.5b-chat-v1.5-q6_K',
  'qwen:0.5b-chat-v1.5-q8_0',
  'qwen:0.5b-text',
  'qwen:0.5b-text-v1.5-fp16',
  'qwen:0.5b-text-v1.5-q2_K',
  'qwen:0.5b-text-v1.5-q3_K_L',
  'qwen:0.5b-text-v1.5-q3_K_M',
  'qwen:0.5b-text-v1.5-q3_K_S',
  'qwen:0.5b-text-v1.5-q4_0',
  'qwen:0.5b-text-v1.5-q4_1',
  'qwen:0.5b-text-v1.5-q4_K_M',
  'qwen:0.5b-text-v1.5-q4_K_S',
  'qwen:0.5b-text-v1.5-q5_0',
  'qwen:0.5b-text-v1.5-q5_1',
  'qwen:0.5b-text-v1.5-q5_K_M',
  'qwen:0.5b-text-v1.5-q5_K_S',
  'qwen:0.5b-text-v1.5-q6_K',
  'qwen:0.5b-text-v1.5-q8_0',
  'qwen:1.8b',
  'qwen:1.8b-chat',
  'qwen:1.8b-chat-fp16',
  'qwen:1.8b-chat-q2_K',
  'qwen:1.8b-chat-q3_K_L',
  'qwen:1.8b-chat-q3_K_M',
  'qwen:1.8b-chat-q3_K_S',
  'qwen:1.8b-chat-q4_0',
  'qwen:1.8b-chat-q4_1',
  'qwen:1.8b-chat-q4_K_M',
  'qwen:1.8b-chat-q4_K_S',
  'qwen:1.8b-chat-q5_0',
  'qwen:1.8b-chat-q5_1',
  'qwen:1.8b-chat-q5_K_M',
  'qwen:1.8b-chat-q5_K_S',
  'qwen:1.8b-chat-q6_K',
  'qwen:1.8b-chat-q8_0',
  'qwen:1.8b-chat-v1.5-fp16',
  'qwen:1.8b-chat-v1.5-q2_K',
  'qwen:1.8b-chat-v1.5-q3_K_L',
  'qwen:1.8b-chat-v1.5-q3_K_M',
  'qwen:1.8b-chat-v1.5-q3_K_S',
  'qwen:1.8b-chat-v1.5-q4_0',
  'qwen:1.8b-chat-v1.5-q4_1',
  'qwen:1.8b-chat-v1.5-q4_K_M',
  'qwen:1.8b-chat-v1.5-q4_K_S',
  'qwen:1.8b-chat-v1.5-q5_0',
  'qwen:1.8b-chat-v1.5-q5_1',
  'qwen:1.8b-chat-v1.5-q5_K_M',
  'qwen:1.8b-chat-v1.5-q5_K_S',
  'qwen:1.8b-chat-v1.5-q6_K',
  'qwen:1.8b-chat-v1.5-q8_0',
  'qwen:1.8b-text',
  'qwen:1.8b-text-fp16',
  'qwen:1.8b-text-q2_K',
  'qwen:1.8b-text-q3_K_L',
  'qwen:1.8b-text-q3_K_M',
  'qwen:1.8b-text-q3_K_S',
  'qwen:1.8b-text-q4_0',
  'qwen:1.8b-text-q4_1',
  'qwen:1.8b-text-q4_K_M',
  'qwen:1.8b-text-q4_K_S',
  'qwen:1.8b-text-q5_0',
  'qwen:1.8b-text-q5_1',
  'qwen:1.8b-text-q5_K_M',
  'qwen:1.8b-text-q5_K_S',
  'qwen:1.8b-text-q6_K',
  'qwen:1.8b-text-q8_0',
  'qwen:1.8b-text-v1.5-fp16',
  'qwen:1.8b-text-v1.5-q2_K',
  'qwen:1.8b-text-v1.5-q3_K_L',
  'qwen:1.8b-text-v1.5-q3_K_M',
  'qwen:1.8b-text-v1.5-q3_K_S',
  'qwen:1.8b-text-v1.5-q4_0',
  'qwen:1.8b-text-v1.5-q4_1',
  'qwen:1.8b-text-v1.5-q4_K_M',
  'qwen:1.8b-text-v1.5-q4_K_S',
  'qwen:1.8b-text-v1.5-q5_0',
  'qwen:1.8b-text-v1.5-q5_1',
  'qwen:1.8b-text-v1.5-q5_K_M',
  'qwen:1.8b-text-v1.5-q5_K_S',
  'qwen:1.8b-text-v1.5-q6_K',
  'qwen:1.8b-text-v1.5-q8_0',
  'qwen:110b',
  'qwen:110b-chat',
  'qwen:110b-chat-v1.5-fp16',
  'qwen:110b-chat-v1.5-q2_K',
  'qwen:110b-chat-v1.5-q3_K_L',
  'qwen:110b-chat-v1.5-q3_K_M',
  'qwen:110b-chat-v1.5-q3_K_S',
  'qwen:110b-chat-v1.5-q4_0',
  'qwen:110b-chat-v1.5-q4_1',
  'qwen:110b-chat-v1.5-q4_K_M',
  'qwen:110b-chat-v1.5-q4_K_S',
  'qwen:110b-chat-v1.5-q5_0',
  'qwen:110b-chat-v1.5-q5_1',
  'qwen:110b-chat-v1.5-q5_K_M',
  'qwen:110b-chat-v1.5-q5_K_S',
  'qwen:110b-chat-v1.5-q6_K',
  'qwen:110b-chat-v1.5-q8_0',
  'qwen:110b-text-v1.5-fp16',
  'qwen:110b-text-v1.5-q2_K',
  'qwen:110b-text-v1.5-q3_K_L',
  'qwen:110b-text-v1.5-q3_K_M',
  'qwen:110b-text-v1.5-q3_K_S',
  'qwen:110b-text-v1.5-q4_0',
  'qwen:110b-text-v1.5-q4_1',
  'qwen:110b-text-v1.5-q4_K_M',
  'qwen:110b-text-v1.5-q4_K_S',
  'qwen:110b-text-v1.5-q5_0',
  'qwen:110b-text-v1.5-q5_1',
  'qwen:110b-text-v1.5-q5_K_M',
  'qwen:110b-text-v1.5-q5_K_S',
  'qwen:110b-text-v1.5-q6_K',
  'qwen:110b-text-v1.5-q8_0',
  'qwen:14b',
  'qwen:14b-chat',
  'qwen:14b-chat-fp16',
  'qwen:14b-chat-q2_K',
  'qwen:14b-chat-q3_K_L',
  'qwen:14b-chat-q3_K_M',
  'qwen:14b-chat-q3_K_S',
  'qwen:14b-chat-q4_0',
  'qwen:14b-chat-q4_1',
  'qwen:14b-chat-q4_K_M',
  'qwen:14b-chat-q4_K_S',
  'qwen:14b-chat-q5_0',
  'qwen:14b-chat-q5_1',
  'qwen:14b-chat-q5_K_M',
  'qwen:14b-chat-q5_K_S',
  'qwen:14b-chat-q6_K',
  'qwen:14b-chat-q8_0',
  'qwen:14b-chat-v1.5-fp16',
  'qwen:14b-chat-v1.5-q2_K',
  'qwen:14b-chat-v1.5-q3_K_L',
  'qwen:14b-chat-v1.5-q3_K_M',
  'qwen:14b-chat-v1.5-q3_K_S',
  'qwen:14b-chat-v1.5-q4_0',
  'qwen:14b-chat-v1.5-q4_1',
  'qwen:14b-chat-v1.5-q4_K_M',
  'qwen:14b-chat-v1.5-q4_K_S',
  'qwen:14b-chat-v1.5-q5_0',
  'qwen:14b-chat-v1.5-q5_1',
  'qwen:14b-chat-v1.5-q5_K_M',
  'qwen:14b-chat-v1.5-q5_K_S',
  'qwen:14b-chat-v1.5-q6_K',
  'qwen:14b-chat-v1.5-q8_0',
  'qwen:14b-text',
  'qwen:14b-text-fp16',
  'qwen:14b-text-q2_K',
  'qwen:14b-text-q3_K_L',
  'qwen:14b-text-q3_K_M',
  'qwen:14b-text-q3_K_S',
  'qwen:14b-text-q4_0',
  'qwen:14b-text-q4_1',
  'qwen:14b-text-q4_K_M',
  'qwen:14b-text-q4_K_S',
  'qwen:14b-text-q5_0',
  'qwen:14b-text-q5_1',
  'qwen:14b-text-q5_K_M',
  'qwen:14b-text-q5_K_S',
  'qwen:14b-text-q6_K',
  'qwen:14b-text-q8_0',
  'qwen:14b-text-v1.5-fp16',
  'qwen:14b-text-v1.5-q2_K',
  'qwen:14b-text-v1.5-q3_K_L',
  'qwen:14b-text-v1.5-q3_K_M',
  'qwen:14b-text-v1.5-q3_K_S',
  'qwen:14b-text-v1.5-q4_0',
  'qwen:14b-text-v1.5-q4_1',
  'qwen:14b-text-v1.5-q4_K_M',
  'qwen:14b-text-v1.5-q4_K_S',
  'qwen:14b-text-v1.5-q5_0',
  'qwen:14b-text-v1.5-q5_1',
  'qwen:14b-text-v1.5-q5_K_M',
  'qwen:14b-text-v1.5-q5_K_S',
  'qwen:14b-text-v1.5-q6_K',
  'qwen:14b-text-v1.5-q8_0',
  'qwen:32b',
  'qwen:32b-chat',
  'qwen:32b-chat-v1.5-fp16',
  'qwen:32b-chat-v1.5-q2_K',
  'qwen:32b-chat-v1.5-q3_K_L',
  'qwen:32b-chat-v1.5-q3_K_M',
  'qwen:32b-chat-v1.5-q3_K_S',
  'qwen:32b-chat-v1.5-q4_0',
  'qwen:32b-chat-v1.5-q4_1',
  'qwen:32b-chat-v1.5-q4_K_M',
  'qwen:32b-chat-v1.5-q4_K_S',
  'qwen:32b-chat-v1.5-q5_0',
  'qwen:32b-chat-v1.5-q5_1',
  'qwen:32b-chat-v1.5-q5_K_M',
  'qwen:32b-chat-v1.5-q5_K_S',
  'qwen:32b-chat-v1.5-q6_K',
  'qwen:32b-chat-v1.5-q8_0',
  'qwen:32b-text',
  'qwen:32b-text-v1.5-q2_K',
  'qwen:32b-text-v1.5-q3_K_L',
  'qwen:32b-text-v1.5-q3_K_M',
  'qwen:32b-text-v1.5-q3_K_S',
  'qwen:32b-text-v1.5-q4_0',
  'qwen:32b-text-v1.5-q4_1',
  'qwen:32b-text-v1.5-q4_K_S',
  'qwen:32b-text-v1.5-q5_0',
  'qwen:32b-text-v1.5-q5_1',
  'qwen:32b-text-v1.5-q8_0',
  'qwen:4b',
  'qwen:4b-chat',
  'qwen:4b-chat-v1.5-fp16',
  'qwen:4b-chat-v1.5-q2_K',
  'qwen:4b-chat-v1.5-q3_K_L',
  'qwen:4b-chat-v1.5-q3_K_M',
  'qwen:4b-chat-v1.5-q3_K_S',
  'qwen:4b-chat-v1.5-q4_0',
  'qwen:4b-chat-v1.5-q4_1',
  'qwen:4b-chat-v1.5-q4_K_M',
  'qwen:4b-chat-v1.5-q4_K_S',
  'qwen:4b-chat-v1.5-q5_0',
  'qwen:4b-chat-v1.5-q5_1',
  'qwen:4b-chat-v1.5-q5_K_M',
  'qwen:4b-chat-v1.5-q5_K_S',
  'qwen:4b-chat-v1.5-q6_K',
  'qwen:4b-chat-v1.5-q8_0',
  'qwen:4b-text',
  'qwen:4b-text-v1.5-fp16',
  'qwen:4b-text-v1.5-q2_K',
  'qwen:4b-text-v1.5-q3_K_L',
  'qwen:4b-text-v1.5-q3_K_M',
  'qwen:4b-text-v1.5-q3_K_S',
  'qwen:4b-text-v1.5-q4_0',
  'qwen:4b-text-v1.5-q4_1',
  'qwen:4b-text-v1.5-q4_K_M',
  'qwen:4b-text-v1.5-q4_K_S',
  'qwen:4b-text-v1.5-q5_0',
  'qwen:4b-text-v1.5-q5_1',
  'qwen:4b-text-v1.5-q5_K_M',
  'qwen:4b-text-v1.5-q5_K_S',
  'qwen:4b-text-v1.5-q6_K',
  'qwen:4b-text-v1.5-q8_0',
  'qwen:72b',
  'qwen:72b-chat',
  'qwen:72b-chat-fp16',
  'qwen:72b-chat-q2_K',
  'qwen:72b-chat-q3_K_L',
  'qwen:72b-chat-q3_K_M',
  'qwen:72b-chat-q3_K_S',
  'qwen:72b-chat-q4_0',
  'qwen:72b-chat-q4_1',
  'qwen:72b-chat-q4_K_M',
  'qwen:72b-chat-q4_K_S',
  'qwen:72b-chat-q5_0',
  'qwen:72b-chat-q5_1',
  'qwen:72b-chat-q5_K_M',
  'qwen:72b-chat-q5_K_S',
  'qwen:72b-chat-q6_K',
  'qwen:72b-chat-q8_0',
  'qwen:72b-chat-v1.5-fp16',
  'qwen:72b-chat-v1.5-q2_K',
  'qwen:72b-chat-v1.5-q3_K_L',
  'qwen:72b-chat-v1.5-q3_K_M',
  'qwen:72b-chat-v1.5-q3_K_S',
  'qwen:72b-chat-v1.5-q4_0',
  'qwen:72b-chat-v1.5-q4_1',
  'qwen:72b-chat-v1.5-q4_K_M',
  'qwen:72b-chat-v1.5-q4_K_S',
  'qwen:72b-chat-v1.5-q5_0',
  'qwen:72b-chat-v1.5-q5_1',
  'qwen:72b-chat-v1.5-q5_K_M',
  'qwen:72b-chat-v1.5-q5_K_S',
  'qwen:72b-chat-v1.5-q6_K',
  'qwen:72b-chat-v1.5-q8_0',
  'qwen:72b-text',
  'qwen:72b-text-fp16',
  'qwen:72b-text-q2_K',
  'qwen:72b-text-q3_K_L',
  'qwen:72b-text-q3_K_M',
  'qwen:72b-text-q3_K_S',
  'qwen:72b-text-q4_0',
  'qwen:72b-text-q4_1',
  'qwen:72b-text-q4_K_M',
  'qwen:72b-text-q4_K_S',
  'qwen:72b-text-q5_0',
  'qwen:72b-text-q5_1',
  'qwen:72b-text-q5_K_M',
  'qwen:72b-text-q5_K_S',
  'qwen:72b-text-q6_K',
  'qwen:72b-text-q8_0',
  'qwen:72b-text-v1.5-fp16',
  'qwen:72b-text-v1.5-q2_K',
  'qwen:72b-text-v1.5-q3_K_L',
  'qwen:72b-text-v1.5-q3_K_M',
  'qwen:72b-text-v1.5-q3_K_S',
  'qwen:72b-text-v1.5-q4_0',
  'qwen:72b-text-v1.5-q4_1',
  'qwen:72b-text-v1.5-q4_K_M',
  'qwen:72b-text-v1.5-q4_K_S',
  'qwen:72b-text-v1.5-q5_0',
  'qwen:72b-text-v1.5-q5_1',
  'qwen:72b-text-v1.5-q5_K_M',
  'qwen:72b-text-v1.5-q5_K_S',
  'qwen:72b-text-v1.5-q6_K',
  'qwen:72b-text-v1.5-q8_0',
  'qwen:7b',
  'qwen:7b-chat',
  'qwen:7b-chat-fp16',
  'qwen:7b-chat-q2_K',
  'qwen:7b-chat-q3_K_L',
  'qwen:7b-chat-q3_K_M',
  'qwen:7b-chat-q3_K_S',
  'qwen:7b-chat-q4_0',
  'qwen:7b-chat-q4_1',
  'qwen:7b-chat-q4_K_M',
  'qwen:7b-chat-q4_K_S',
  'qwen:7b-chat-q5_0',
  'qwen:7b-chat-q5_1',
  'qwen:7b-chat-q5_K_M',
  'qwen:7b-chat-q5_K_S',
  'qwen:7b-chat-q6_K',
  'qwen:7b-chat-q8_0',
  'qwen:7b-chat-v1.5-fp16',
  'qwen:7b-chat-v1.5-q2_K',
  'qwen:7b-chat-v1.5-q3_K_L',
  'qwen:7b-chat-v1.5-q3_K_M',
  'qwen:7b-chat-v1.5-q3_K_S',
  'qwen:7b-chat-v1.5-q4_0',
  'qwen:7b-chat-v1.5-q4_1',
  'qwen:7b-chat-v1.5-q4_K_M',
  'qwen:7b-chat-v1.5-q4_K_S',
  'qwen:7b-chat-v1.5-q5_0',
  'qwen:7b-chat-v1.5-q5_1',
  'qwen:7b-chat-v1.5-q5_K_M',
  'qwen:7b-chat-v1.5-q5_K_S',
  'qwen:7b-chat-v1.5-q6_K',
  'qwen:7b-chat-v1.5-q8_0',
  'qwen:7b-fp16',
  'qwen:7b-q2_K',
  'qwen:7b-q3_K_L',
  'qwen:7b-q3_K_M',
  'qwen:7b-q3_K_S',
  'qwen:7b-q4_0',
  'qwen:7b-q4_1',
  'qwen:7b-q4_K_M',
  'qwen:7b-q4_K_S',
  'qwen:7b-q5_0',
  'qwen:7b-q5_1',
  'qwen:7b-q5_K_M',
  'qwen:7b-q5_K_S',
  'qwen:7b-q6_K',
  'qwen:7b-q8_0',
  'qwen:7b-text',
  'qwen:7b-text-v1.5-fp16',
  'qwen:7b-text-v1.5-q2_K',
  'qwen:7b-text-v1.5-q3_K_L',
  'qwen:7b-text-v1.5-q3_K_M',
  'qwen:7b-text-v1.5-q3_K_S',
  'qwen:7b-text-v1.5-q4_0',
  'qwen:7b-text-v1.5-q4_1',
  'qwen:7b-text-v1.5-q4_K_M',
  'qwen:7b-text-v1.5-q4_K_S',
  'qwen:7b-text-v1.5-q5_0',
  'qwen:7b-text-v1.5-q5_1',
  'qwen:7b-text-v1.5-q5_K_M',
  'qwen:7b-text-v1.5-q5_K_S',
  'qwen:7b-text-v1.5-q6_K',
  'qwen:7b-text-v1.5-q8_0',
  'qwen:latest',
  'qwq',
  'qwq:32b',
  'qwq:32b-fp16',
  'qwq:32b-preview-fp16',
  'qwq:32b-preview-q4_K_M',
  'qwq:32b-preview-q8_0',
  'qwq:32b-q4_K_M',
  'qwq:32b-q8_0',
  'qwq:latest',
  'r1-1776',
  'r1-1776:671b',
  'r1-1776:671b-fp16',
  'r1-1776:671b-q4_K_M',
  'r1-1776:671b-q8_0',
  'r1-1776:70b',
  'r1-1776:70b-distill-llama-fp16',
  'r1-1776:70b-distill-llama-q4_K_M',
  'r1-1776:70b-distill-llama-q8_0',
  'r1-1776:latest',
  'reader-lm',
  'reader-lm:0.5b',
  'reader-lm:0.5b-fp16',
  'reader-lm:0.5b-q2_K',
  'reader-lm:0.5b-q3_K_L',
  'reader-lm:0.5b-q3_K_M',
  'reader-lm:0.5b-q3_K_S',
  'reader-lm:0.5b-q4_0',
  'reader-lm:0.5b-q4_1',
  'reader-lm:0.5b-q4_K_M',
  'reader-lm:0.5b-q4_K_S',
  'reader-lm:0.5b-q5_0',
  'reader-lm:0.5b-q5_1',
  'reader-lm:0.5b-q5_K_M',
  'reader-lm:0.5b-q5_K_S',
  'reader-lm:0.5b-q6_K',
  'reader-lm:0.5b-q8_0',
  'reader-lm:1.5b',
  'reader-lm:1.5b-fp16',
  'reader-lm:1.5b-q2_K',
  'reader-lm:1.5b-q3_K_L',
  'reader-lm:1.5b-q3_K_M',
  'reader-lm:1.5b-q3_K_S',
  'reader-lm:1.5b-q4_0',
  'reader-lm:1.5b-q4_1',
  'reader-lm:1.5b-q4_K_M',
  'reader-lm:1.5b-q4_K_S',
  'reader-lm:1.5b-q5_0',
  'reader-lm:1.5b-q5_1',
  'reader-lm:1.5b-q5_K_M',
  'reader-lm:1.5b-q5_K_S',
  'reader-lm:1.5b-q6_K',
  'reader-lm:1.5b-q8_0',
  'reader-lm:latest',
  'reflection',
  'reflection:70b',
  'reflection:70b-fp16',
  'reflection:70b-q2_K',
  'reflection:70b-q3_K_L',
  'reflection:70b-q3_K_M',
  'reflection:70b-q3_K_S',
  'reflection:70b-q4_0',
  'reflection:70b-q4_1',
  'reflection:70b-q4_K_M',
  'reflection:70b-q4_K_S',
  'reflection:70b-q5_0',
  'reflection:70b-q5_1',
  'reflection:70b-q5_K_M',
  'reflection:70b-q5_K_S',
  'reflection:70b-q6_K',
  'reflection:70b-q8_0',
  'reflection:latest',
  'sailor2',
  'sailor2:1b',
  'sailor2:1b-chat-fp16',
  'sailor2:1b-chat-q4_K_M',
  'sailor2:1b-chat-q8_0',
  'sailor2:20b',
  'sailor2:20b-chat-fp16',
  'sailor2:20b-chat-q4_K_M',
  'sailor2:20b-chat-q8_0',
  'sailor2:8b',
  'sailor2:8b-chat-fp16',
  'sailor2:8b-chat-q4_K_M',
  'sailor2:8b-chat-q8_0',
  'sailor2:latest',
  'samantha-mistral',
  'samantha-mistral:7b',
  'samantha-mistral:7b-instruct-fp16',
  'samantha-mistral:7b-instruct-q2_K',
  'samantha-mistral:7b-instruct-q3_K_L',
  'samantha-mistral:7b-instruct-q3_K_M',
  'samantha-mistral:7b-instruct-q3_K_S',
  'samantha-mistral:7b-instruct-q4_0',
  'samantha-mistral:7b-instruct-q4_1',
  'samantha-mistral:7b-instruct-q4_K_M',
  'samantha-mistral:7b-instruct-q4_K_S',
  'samantha-mistral:7b-instruct-q5_0',
  'samantha-mistral:7b-instruct-q5_1',
  'samantha-mistral:7b-instruct-q5_K_M',
  'samantha-mistral:7b-instruct-q5_K_S',
  'samantha-mistral:7b-instruct-q6_K',
  'samantha-mistral:7b-instruct-q8_0',
  'samantha-mistral:7b-text',
  'samantha-mistral:7b-text-fp16',
  'samantha-mistral:7b-text-q2_K',
  'samantha-mistral:7b-text-q3_K_L',
  'samantha-mistral:7b-text-q3_K_M',
  'samantha-mistral:7b-text-q3_K_S',
  'samantha-mistral:7b-text-q4_0',
  'samantha-mistral:7b-text-q4_1',
  'samantha-mistral:7b-text-q4_K_M',
  'samantha-mistral:7b-text-q4_K_S',
  'samantha-mistral:7b-text-q5_0',
  'samantha-mistral:7b-text-q5_1',
  'samantha-mistral:7b-text-q5_K_M',
  'samantha-mistral:7b-text-q5_K_S',
  'samantha-mistral:7b-text-q6_K',
  'samantha-mistral:7b-text-q8_0',
  'samantha-mistral:7b-v1.2-text',
  'samantha-mistral:7b-v1.2-text-fp16',
  'samantha-mistral:7b-v1.2-text-q2_K',
  'samantha-mistral:7b-v1.2-text-q3_K_L',
  'samantha-mistral:7b-v1.2-text-q3_K_M',
  'samantha-mistral:7b-v1.2-text-q3_K_S',
  'samantha-mistral:7b-v1.2-text-q4_0',
  'samantha-mistral:7b-v1.2-text-q4_1',
  'samantha-mistral:7b-v1.2-text-q4_K_M',
  'samantha-mistral:7b-v1.2-text-q4_K_S',
  'samantha-mistral:7b-v1.2-text-q5_0',
  'samantha-mistral:7b-v1.2-text-q5_1',
  'samantha-mistral:7b-v1.2-text-q5_K_M',
  'samantha-mistral:7b-v1.2-text-q5_K_S',
  'samantha-mistral:7b-v1.2-text-q6_K',
  'samantha-mistral:7b-v1.2-text-q8_0',
  'samantha-mistral:latest',
  'shieldgemma',
  'shieldgemma:27b',
  'shieldgemma:27b-fp16',
  'shieldgemma:27b-q2_K',
  'shieldgemma:27b-q3_K_L',
  'shieldgemma:27b-q3_K_M',
  'shieldgemma:27b-q3_K_S',
  'shieldgemma:27b-q4_0',
  'shieldgemma:27b-q4_1',
  'shieldgemma:27b-q4_K_M',
  'shieldgemma:27b-q4_K_S',
  'shieldgemma:27b-q5_0',
  'shieldgemma:27b-q5_1',
  'shieldgemma:27b-q5_K_M',
  'shieldgemma:27b-q5_K_S',
  'shieldgemma:27b-q6_K',
  'shieldgemma:27b-q8_0',
  'shieldgemma:2b',
  'shieldgemma:2b-fp16',
  'shieldgemma:2b-q2_K',
  'shieldgemma:2b-q3_K_L',
  'shieldgemma:2b-q3_K_M',
  'shieldgemma:2b-q3_K_S',
  'shieldgemma:2b-q4_0',
  'shieldgemma:2b-q4_1',
  'shieldgemma:2b-q4_K_M',
  'shieldgemma:2b-q4_K_S',
  'shieldgemma:2b-q5_0',
  'shieldgemma:2b-q5_1',
  'shieldgemma:2b-q5_K_M',
  'shieldgemma:2b-q5_K_S',
  'shieldgemma:2b-q6_K',
  'shieldgemma:2b-q8_0',
  'shieldgemma:9b',
  'shieldgemma:9b-fp16',
  'shieldgemma:9b-q2_K',
  'shieldgemma:9b-q3_K_L',
  'shieldgemma:9b-q3_K_M',
  'shieldgemma:9b-q3_K_S',
  'shieldgemma:9b-q4_0',
  'shieldgemma:9b-q4_1',
  'shieldgemma:9b-q4_K_M',
  'shieldgemma:9b-q4_K_S',
  'shieldgemma:9b-q5_0',
  'shieldgemma:9b-q5_1',
  'shieldgemma:9b-q5_K_M',
  'shieldgemma:9b-q5_K_S',
  'shieldgemma:9b-q6_K',
  'shieldgemma:9b-q8_0',
  'shieldgemma:latest',
  'smallthinker',
  'smallthinker:3b',
  'smallthinker:3b-preview-fp16',
  'smallthinker:3b-preview-q4_K_M',
  'smallthinker:3b-preview-q8_0',
  'smallthinker:latest',
  'smollm',
  'smollm2',
  'smollm2:1.7b',
  'smollm2:1.7b-instruct-fp16',
  'smollm2:1.7b-instruct-q2_K',
  'smollm2:1.7b-instruct-q3_K_L',
  'smollm2:1.7b-instruct-q3_K_M',
  'smollm2:1.7b-instruct-q3_K_S',
  'smollm2:1.7b-instruct-q4_0',
  'smollm2:1.7b-instruct-q4_1',
  'smollm2:1.7b-instruct-q4_K_M',
  'smollm2:1.7b-instruct-q4_K_S',
  'smollm2:1.7b-instruct-q5_0',
  'smollm2:1.7b-instruct-q5_1',
  'smollm2:1.7b-instruct-q5_K_M',
  'smollm2:1.7b-instruct-q5_K_S',
  'smollm2:1.7b-instruct-q6_K',
  'smollm2:1.7b-instruct-q8_0',
  'smollm2:135m',
  'smollm2:135m-instruct-fp16',
  'smollm2:135m-instruct-q2_K',
  'smollm2:135m-instruct-q3_K_L',
  'smollm2:135m-instruct-q3_K_M',
  'smollm2:135m-instruct-q3_K_S',
  'smollm2:135m-instruct-q4_0',
  'smollm2:135m-instruct-q4_1',
  'smollm2:135m-instruct-q4_K_M',
  'smollm2:135m-instruct-q4_K_S',
  'smollm2:135m-instruct-q5_0',
  'smollm2:135m-instruct-q5_1',
  'smollm2:135m-instruct-q5_K_M',
  'smollm2:135m-instruct-q5_K_S',
  'smollm2:135m-instruct-q6_K',
  'smollm2:135m-instruct-q8_0',
  'smollm2:360m',
  'smollm2:360m-instruct-fp16',
  'smollm2:360m-instruct-q2_K',
  'smollm2:360m-instruct-q3_K_L',
  'smollm2:360m-instruct-q3_K_M',
  'smollm2:360m-instruct-q3_K_S',
  'smollm2:360m-instruct-q4_0',
  'smollm2:360m-instruct-q4_1',
  'smollm2:360m-instruct-q4_K_M',
  'smollm2:360m-instruct-q4_K_S',
  'smollm2:360m-instruct-q5_0',
  'smollm2:360m-instruct-q5_1',
  'smollm2:360m-instruct-q5_K_M',
  'smollm2:360m-instruct-q5_K_S',
  'smollm2:360m-instruct-q6_K',
  'smollm2:360m-instruct-q8_0',
  'smollm2:latest',
  'smollm:1.7b',
  'smollm:1.7b-base-v0.2-fp16',
  'smollm:1.7b-base-v0.2-q2_K',
  'smollm:1.7b-base-v0.2-q3_K_L',
  'smollm:1.7b-base-v0.2-q3_K_M',
  'smollm:1.7b-base-v0.2-q3_K_S',
  'smollm:1.7b-base-v0.2-q4_0',
  'smollm:1.7b-base-v0.2-q4_1',
  'smollm:1.7b-base-v0.2-q4_K_M',
  'smollm:1.7b-base-v0.2-q4_K_S',
  'smollm:1.7b-base-v0.2-q5_0',
  'smollm:1.7b-base-v0.2-q5_1',
  'smollm:1.7b-base-v0.2-q5_K_M',
  'smollm:1.7b-base-v0.2-q5_K_S',
  'smollm:1.7b-base-v0.2-q6_K',
  'smollm:1.7b-base-v0.2-q8_0',
  'smollm:1.7b-instruct-v0.2-fp16',
  'smollm:1.7b-instruct-v0.2-q2_K',
  'smollm:1.7b-instruct-v0.2-q3_K_L',
  'smollm:1.7b-instruct-v0.2-q3_K_M',
  'smollm:1.7b-instruct-v0.2-q3_K_S',
  'smollm:1.7b-instruct-v0.2-q4_0',
  'smollm:1.7b-instruct-v0.2-q4_1',
  'smollm:1.7b-instruct-v0.2-q4_K_M',
  'smollm:1.7b-instruct-v0.2-q4_K_S',
  'smollm:1.7b-instruct-v0.2-q5_0',
  'smollm:1.7b-instruct-v0.2-q5_1',
  'smollm:1.7b-instruct-v0.2-q5_K_M',
  'smollm:1.7b-instruct-v0.2-q5_K_S',
  'smollm:1.7b-instruct-v0.2-q6_K',
  'smollm:1.7b-instruct-v0.2-q8_0',
  'smollm:135m',
  'smollm:135m-base-v0.2-fp16',
  'smollm:135m-base-v0.2-q2_K',
  'smollm:135m-base-v0.2-q3_K_L',
  'smollm:135m-base-v0.2-q3_K_M',
  'smollm:135m-base-v0.2-q3_K_S',
  'smollm:135m-base-v0.2-q4_0',
  'smollm:135m-base-v0.2-q4_1',
  'smollm:135m-base-v0.2-q4_K_M',
  'smollm:135m-base-v0.2-q4_K_S',
  'smollm:135m-base-v0.2-q5_0',
  'smollm:135m-base-v0.2-q5_1',
  'smollm:135m-base-v0.2-q5_K_M',
  'smollm:135m-base-v0.2-q5_K_S',
  'smollm:135m-base-v0.2-q6_K',
  'smollm:135m-base-v0.2-q8_0',
  'smollm:135m-instruct-v0.2-fp16',
  'smollm:135m-instruct-v0.2-q2_K',
  'smollm:135m-instruct-v0.2-q3_K_L',
  'smollm:135m-instruct-v0.2-q3_K_M',
  'smollm:135m-instruct-v0.2-q3_K_S',
  'smollm:135m-instruct-v0.2-q4_0',
  'smollm:135m-instruct-v0.2-q4_1',
  'smollm:135m-instruct-v0.2-q4_K_M',
  'smollm:135m-instruct-v0.2-q4_K_S',
  'smollm:135m-instruct-v0.2-q5_0',
  'smollm:135m-instruct-v0.2-q5_1',
  'smollm:135m-instruct-v0.2-q5_K_M',
  'smollm:135m-instruct-v0.2-q5_K_S',
  'smollm:135m-instruct-v0.2-q6_K',
  'smollm:135m-instruct-v0.2-q8_0',
  'smollm:360m',
  'smollm:360m-base-v0.2-fp16',
  'smollm:360m-base-v0.2-q2_K',
  'smollm:360m-base-v0.2-q3_K_L',
  'smollm:360m-base-v0.2-q3_K_M',
  'smollm:360m-base-v0.2-q3_K_S',
  'smollm:360m-base-v0.2-q4_0',
  'smollm:360m-base-v0.2-q4_1',
  'smollm:360m-base-v0.2-q4_K_M',
  'smollm:360m-base-v0.2-q4_K_S',
  'smollm:360m-base-v0.2-q5_0',
  'smollm:360m-base-v0.2-q5_1',
  'smollm:360m-base-v0.2-q5_K_M',
  'smollm:360m-base-v0.2-q5_K_S',
  'smollm:360m-base-v0.2-q6_K',
  'smollm:360m-base-v0.2-q8_0',
  'smollm:360m-instruct-v0.2-fp16',
  'smollm:360m-instruct-v0.2-q2_K',
  'smollm:360m-instruct-v0.2-q3_K_L',
  'smollm:360m-instruct-v0.2-q3_K_M',
  'smollm:360m-instruct-v0.2-q3_K_S',
  'smollm:360m-instruct-v0.2-q4_0',
  'smollm:360m-instruct-v0.2-q4_1',
  'smollm:360m-instruct-v0.2-q4_K_M',
  'smollm:360m-instruct-v0.2-q4_K_S',
  'smollm:360m-instruct-v0.2-q5_0',
  'smollm:360m-instruct-v0.2-q5_1',
  'smollm:360m-instruct-v0.2-q5_K_M',
  'smollm:360m-instruct-v0.2-q5_K_S',
  'smollm:360m-instruct-v0.2-q6_K',
  'smollm:360m-instruct-v0.2-q8_0',
  'smollm:latest',
  'solar',
  'solar-pro',
  'solar-pro:22b',
  'solar-pro:22b-preview-instruct-fp16',
  'solar-pro:22b-preview-instruct-q2_K',
  'solar-pro:22b-preview-instruct-q3_K_L',
  'solar-pro:22b-preview-instruct-q3_K_M',
  'solar-pro:22b-preview-instruct-q3_K_S',
  'solar-pro:22b-preview-instruct-q4_0',
  'solar-pro:22b-preview-instruct-q4_1',
  'solar-pro:22b-preview-instruct-q4_K_M',
  'solar-pro:22b-preview-instruct-q4_K_S',
  'solar-pro:22b-preview-instruct-q5_0',
  'solar-pro:22b-preview-instruct-q5_1',
  'solar-pro:22b-preview-instruct-q5_K_M',
  'solar-pro:22b-preview-instruct-q5_K_S',
  'solar-pro:22b-preview-instruct-q6_K',
  'solar-pro:22b-preview-instruct-q8_0',
  'solar-pro:latest',
  'solar-pro:preview',
  'solar:10.7b',
  'solar:10.7b-instruct-v1-fp16',
  'solar:10.7b-instruct-v1-q2_K',
  'solar:10.7b-instruct-v1-q3_K_L',
  'solar:10.7b-instruct-v1-q3_K_M',
  'solar:10.7b-instruct-v1-q3_K_S',
  'solar:10.7b-instruct-v1-q4_0',
  'solar:10.7b-instruct-v1-q4_1',
  'solar:10.7b-instruct-v1-q4_K_M',
  'solar:10.7b-instruct-v1-q4_K_S',
  'solar:10.7b-instruct-v1-q5_0',
  'solar:10.7b-instruct-v1-q5_1',
  'solar:10.7b-instruct-v1-q5_K_M',
  'solar:10.7b-instruct-v1-q5_K_S',
  'solar:10.7b-instruct-v1-q6_K',
  'solar:10.7b-instruct-v1-q8_0',
  'solar:10.7b-text-v1-fp16',
  'solar:10.7b-text-v1-q2_K',
  'solar:10.7b-text-v1-q3_K_L',
  'solar:10.7b-text-v1-q3_K_M',
  'solar:10.7b-text-v1-q3_K_S',
  'solar:10.7b-text-v1-q4_0',
  'solar:10.7b-text-v1-q4_1',
  'solar:10.7b-text-v1-q4_K_M',
  'solar:10.7b-text-v1-q4_K_S',
  'solar:10.7b-text-v1-q5_0',
  'solar:10.7b-text-v1-q5_1',
  'solar:10.7b-text-v1-q5_K_M',
  'solar:10.7b-text-v1-q5_K_S',
  'solar:10.7b-text-v1-q6_K',
  'solar:10.7b-text-v1-q8_0',
  'solar:latest',
  'sqlcoder',
  'sqlcoder:15b',
  'sqlcoder:15b-fp16',
  'sqlcoder:15b-q2_K',
  'sqlcoder:15b-q3_K_L',
  'sqlcoder:15b-q3_K_M',
  'sqlcoder:15b-q3_K_S',
  'sqlcoder:15b-q4_0',
  'sqlcoder:15b-q4_1',
  'sqlcoder:15b-q4_K_M',
  'sqlcoder:15b-q4_K_S',
  'sqlcoder:15b-q5_0',
  'sqlcoder:15b-q5_1',
  'sqlcoder:15b-q5_K_M',
  'sqlcoder:15b-q5_K_S',
  'sqlcoder:15b-q6_K',
  'sqlcoder:15b-q8_0',
  'sqlcoder:70b-alpha-fp16',
  'sqlcoder:70b-alpha-q2_K',
  'sqlcoder:70b-alpha-q3_K_L',
  'sqlcoder:70b-alpha-q3_K_M',
  'sqlcoder:70b-alpha-q3_K_S',
  'sqlcoder:70b-alpha-q4_0',
  'sqlcoder:70b-alpha-q4_1',
  'sqlcoder:70b-alpha-q4_K_M',
  'sqlcoder:70b-alpha-q4_K_S',
  'sqlcoder:70b-alpha-q5_0',
  'sqlcoder:70b-alpha-q5_1',
  'sqlcoder:70b-alpha-q5_K_M',
  'sqlcoder:70b-alpha-q5_K_S',
  'sqlcoder:70b-alpha-q6_K',
  'sqlcoder:70b-alpha-q8_0',
  'sqlcoder:7b',
  'sqlcoder:7b-fp16',
  'sqlcoder:7b-q2_K',
  'sqlcoder:7b-q3_K_L',
  'sqlcoder:7b-q3_K_M',
  'sqlcoder:7b-q3_K_S',
  'sqlcoder:7b-q4_0',
  'sqlcoder:7b-q4_1',
  'sqlcoder:7b-q4_K_M',
  'sqlcoder:7b-q4_K_S',
  'sqlcoder:7b-q5_0',
  'sqlcoder:7b-q5_1',
  'sqlcoder:7b-q5_K_M',
  'sqlcoder:7b-q5_K_S',
  'sqlcoder:7b-q6_K',
  'sqlcoder:7b-q8_0',
  'sqlcoder:latest',
  'stable-beluga',
  'stable-beluga:13b',
  'stable-beluga:13b-fp16',
  'stable-beluga:13b-q2_K',
  'stable-beluga:13b-q3_K_L',
  'stable-beluga:13b-q3_K_M',
  'stable-beluga:13b-q3_K_S',
  'stable-beluga:13b-q4_0',
  'stable-beluga:13b-q4_1',
  'stable-beluga:13b-q4_K_M',
  'stable-beluga:13b-q4_K_S',
  'stable-beluga:13b-q5_0',
  'stable-beluga:13b-q5_1',
  'stable-beluga:13b-q5_K_M',
  'stable-beluga:13b-q5_K_S',
  'stable-beluga:13b-q6_K',
  'stable-beluga:13b-q8_0',
  'stable-beluga:70b',
  'stable-beluga:70b-fp16',
  'stable-beluga:70b-q2_K',
  'stable-beluga:70b-q3_K_L',
  'stable-beluga:70b-q3_K_M',
  'stable-beluga:70b-q3_K_S',
  'stable-beluga:70b-q4_0',
  'stable-beluga:70b-q4_1',
  'stable-beluga:70b-q4_K_M',
  'stable-beluga:70b-q4_K_S',
  'stable-beluga:70b-q5_0',
  'stable-beluga:70b-q5_1',
  'stable-beluga:70b-q5_K_M',
  'stable-beluga:70b-q5_K_S',
  'stable-beluga:70b-q6_K',
  'stable-beluga:70b-q8_0',
  'stable-beluga:7b',
  'stable-beluga:7b-fp16',
  'stable-beluga:7b-q2_K',
  'stable-beluga:7b-q3_K_L',
  'stable-beluga:7b-q3_K_M',
  'stable-beluga:7b-q3_K_S',
  'stable-beluga:7b-q4_0',
  'stable-beluga:7b-q4_1',
  'stable-beluga:7b-q4_K_M',
  'stable-beluga:7b-q4_K_S',
  'stable-beluga:7b-q5_0',
  'stable-beluga:7b-q5_1',
  'stable-beluga:7b-q5_K_M',
  'stable-beluga:7b-q5_K_S',
  'stable-beluga:7b-q6_K',
  'stable-beluga:7b-q8_0',
  'stable-beluga:latest',
  'stable-code',
  'stable-code:3b',
  'stable-code:3b-code',
  'stable-code:3b-code-fp16',
  'stable-code:3b-code-q2_K',
  'stable-code:3b-code-q3_K_L',
  'stable-code:3b-code-q3_K_M',
  'stable-code:3b-code-q3_K_S',
  'stable-code:3b-code-q4_0',
  'stable-code:3b-code-q4_1',
  'stable-code:3b-code-q4_K_M',
  'stable-code:3b-code-q4_K_S',
  'stable-code:3b-code-q5_0',
  'stable-code:3b-code-q5_1',
  'stable-code:3b-code-q5_K_M',
  'stable-code:3b-code-q5_K_S',
  'stable-code:3b-code-q6_K',
  'stable-code:3b-code-q8_0',
  'stable-code:3b-instruct',
  'stable-code:3b-instruct-fp16',
  'stable-code:3b-instruct-q2_K',
  'stable-code:3b-instruct-q3_K_L',
  'stable-code:3b-instruct-q3_K_M',
  'stable-code:3b-instruct-q3_K_S',
  'stable-code:3b-instruct-q4_0',
  'stable-code:3b-instruct-q4_1',
  'stable-code:3b-instruct-q4_K_M',
  'stable-code:3b-instruct-q4_K_S',
  'stable-code:3b-instruct-q5_0',
  'stable-code:3b-instruct-q5_1',
  'stable-code:3b-instruct-q5_K_M',
  'stable-code:3b-instruct-q5_K_S',
  'stable-code:3b-instruct-q6_K',
  'stable-code:3b-instruct-q8_0',
  'stable-code:code',
  'stable-code:instruct',
  'stable-code:latest',
  'stablelm-zephyr',
  'stablelm-zephyr:3b',
  'stablelm-zephyr:3b-fp16',
  'stablelm-zephyr:3b-q2_K',
  'stablelm-zephyr:3b-q3_K_L',
  'stablelm-zephyr:3b-q3_K_M',
  'stablelm-zephyr:3b-q3_K_S',
  'stablelm-zephyr:3b-q4_0',
  'stablelm-zephyr:3b-q4_1',
  'stablelm-zephyr:3b-q4_K_M',
  'stablelm-zephyr:3b-q4_K_S',
  'stablelm-zephyr:3b-q5_0',
  'stablelm-zephyr:3b-q5_1',
  'stablelm-zephyr:3b-q5_K_M',
  'stablelm-zephyr:3b-q5_K_S',
  'stablelm-zephyr:3b-q6_K',
  'stablelm-zephyr:3b-q8_0',
  'stablelm-zephyr:latest',
  'stablelm2',
  'stablelm2:1.6b',
  'stablelm2:1.6b-chat',
  'stablelm2:1.6b-chat-fp16',
  'stablelm2:1.6b-chat-q2_K',
  'stablelm2:1.6b-chat-q3_K_L',
  'stablelm2:1.6b-chat-q3_K_M',
  'stablelm2:1.6b-chat-q3_K_S',
  'stablelm2:1.6b-chat-q4_0',
  'stablelm2:1.6b-chat-q4_1',
  'stablelm2:1.6b-chat-q4_K_M',
  'stablelm2:1.6b-chat-q4_K_S',
  'stablelm2:1.6b-chat-q5_0',
  'stablelm2:1.6b-chat-q5_1',
  'stablelm2:1.6b-chat-q5_K_M',
  'stablelm2:1.6b-chat-q5_K_S',
  'stablelm2:1.6b-chat-q6_K',
  'stablelm2:1.6b-chat-q8_0',
  'stablelm2:1.6b-fp16',
  'stablelm2:1.6b-q2_K',
  'stablelm2:1.6b-q3_K_L',
  'stablelm2:1.6b-q3_K_M',
  'stablelm2:1.6b-q3_K_S',
  'stablelm2:1.6b-q4_0',
  'stablelm2:1.6b-q4_1',
  'stablelm2:1.6b-q4_K_M',
  'stablelm2:1.6b-q4_K_S',
  'stablelm2:1.6b-q5_0',
  'stablelm2:1.6b-q5_1',
  'stablelm2:1.6b-q5_K_M',
  'stablelm2:1.6b-q5_K_S',
  'stablelm2:1.6b-q6_K',
  'stablelm2:1.6b-q8_0',
  'stablelm2:1.6b-zephyr',
  'stablelm2:1.6b-zephyr-fp16',
  'stablelm2:1.6b-zephyr-q2_K',
  'stablelm2:1.6b-zephyr-q3_K_L',
  'stablelm2:1.6b-zephyr-q3_K_M',
  'stablelm2:1.6b-zephyr-q3_K_S',
  'stablelm2:1.6b-zephyr-q4_0',
  'stablelm2:1.6b-zephyr-q4_1',
  'stablelm2:1.6b-zephyr-q4_K_M',
  'stablelm2:1.6b-zephyr-q4_K_S',
  'stablelm2:1.6b-zephyr-q5_0',
  'stablelm2:1.6b-zephyr-q5_1',
  'stablelm2:1.6b-zephyr-q5_K_M',
  'stablelm2:1.6b-zephyr-q5_K_S',
  'stablelm2:1.6b-zephyr-q6_K',
  'stablelm2:1.6b-zephyr-q8_0',
  'stablelm2:12b',
  'stablelm2:12b-chat',
  'stablelm2:12b-chat-fp16',
  'stablelm2:12b-chat-q2_K',
  'stablelm2:12b-chat-q3_K_L',
  'stablelm2:12b-chat-q3_K_M',
  'stablelm2:12b-chat-q3_K_S',
  'stablelm2:12b-chat-q4_0',
  'stablelm2:12b-chat-q4_1',
  'stablelm2:12b-chat-q4_K_M',
  'stablelm2:12b-chat-q4_K_S',
  'stablelm2:12b-chat-q5_0',
  'stablelm2:12b-chat-q5_1',
  'stablelm2:12b-chat-q5_K_M',
  'stablelm2:12b-chat-q5_K_S',
  'stablelm2:12b-chat-q6_K',
  'stablelm2:12b-chat-q8_0',
  'stablelm2:12b-fp16',
  'stablelm2:12b-q2_K',
  'stablelm2:12b-q3_K_L',
  'stablelm2:12b-q3_K_M',
  'stablelm2:12b-q3_K_S',
  'stablelm2:12b-q4_0',
  'stablelm2:12b-q4_1',
  'stablelm2:12b-q4_K_M',
  'stablelm2:12b-q4_K_S',
  'stablelm2:12b-q5_0',
  'stablelm2:12b-q5_1',
  'stablelm2:12b-q5_K_M',
  'stablelm2:12b-q5_K_S',
  'stablelm2:12b-q6_K',
  'stablelm2:12b-q8_0',
  'stablelm2:12b-text',
  'stablelm2:chat',
  'stablelm2:latest',
  'stablelm2:zephyr',
  'starcoder',
  'starcoder2',
  'starcoder2:15b',
  'starcoder2:15b-fp16',
  'starcoder2:15b-instruct',
  'starcoder2:15b-instruct-q4_0',
  'starcoder2:15b-instruct-v0.1-fp16',
  'starcoder2:15b-instruct-v0.1-q2_K',
  'starcoder2:15b-instruct-v0.1-q3_K_L',
  'starcoder2:15b-instruct-v0.1-q3_K_M',
  'starcoder2:15b-instruct-v0.1-q3_K_S',
  'starcoder2:15b-instruct-v0.1-q4_0',
  'starcoder2:15b-instruct-v0.1-q4_1',
  'starcoder2:15b-instruct-v0.1-q4_K_M',
  'starcoder2:15b-instruct-v0.1-q4_K_S',
  'starcoder2:15b-instruct-v0.1-q5_0',
  'starcoder2:15b-instruct-v0.1-q5_1',
  'starcoder2:15b-instruct-v0.1-q5_K_M',
  'starcoder2:15b-instruct-v0.1-q5_K_S',
  'starcoder2:15b-instruct-v0.1-q6_K',
  'starcoder2:15b-instruct-v0.1-q8_0',
  'starcoder2:15b-q2_K',
  'starcoder2:15b-q3_K_L',
  'starcoder2:15b-q3_K_M',
  'starcoder2:15b-q3_K_S',
  'starcoder2:15b-q4_0',
  'starcoder2:15b-q4_1',
  'starcoder2:15b-q4_K_M',
  'starcoder2:15b-q4_K_S',
  'starcoder2:15b-q5_0',
  'starcoder2:15b-q5_1',
  'starcoder2:15b-q5_K_M',
  'starcoder2:15b-q5_K_S',
  'starcoder2:15b-q6_K',
  'starcoder2:15b-q8_0',
  'starcoder2:3b',
  'starcoder2:3b-fp16',
  'starcoder2:3b-q2_K',
  'starcoder2:3b-q3_K_L',
  'starcoder2:3b-q3_K_M',
  'starcoder2:3b-q3_K_S',
  'starcoder2:3b-q4_0',
  'starcoder2:3b-q4_1',
  'starcoder2:3b-q4_K_M',
  'starcoder2:3b-q4_K_S',
  'starcoder2:3b-q5_0',
  'starcoder2:3b-q5_1',
  'starcoder2:3b-q5_K_M',
  'starcoder2:3b-q5_K_S',
  'starcoder2:3b-q6_K',
  'starcoder2:3b-q8_0',
  'starcoder2:7b',
  'starcoder2:7b-fp16',
  'starcoder2:7b-q2_K',
  'starcoder2:7b-q3_K_L',
  'starcoder2:7b-q3_K_M',
  'starcoder2:7b-q3_K_S',
  'starcoder2:7b-q4_0',
  'starcoder2:7b-q4_1',
  'starcoder2:7b-q4_K_M',
  'starcoder2:7b-q4_K_S',
  'starcoder2:7b-q5_0',
  'starcoder2:7b-q5_1',
  'starcoder2:7b-q5_K_M',
  'starcoder2:7b-q5_K_S',
  'starcoder2:7b-q6_K',
  'starcoder2:7b-q8_0',
  'starcoder2:instruct',
  'starcoder2:latest',
  'starcoder:15b',
  'starcoder:15b-base',
  'starcoder:15b-base-fp16',
  'starcoder:15b-base-q2_K',
  'starcoder:15b-base-q3_K_L',
  'starcoder:15b-base-q3_K_M',
  'starcoder:15b-base-q3_K_S',
  'starcoder:15b-base-q4_0',
  'starcoder:15b-base-q4_1',
  'starcoder:15b-base-q4_K_M',
  'starcoder:15b-base-q4_K_S',
  'starcoder:15b-base-q5_0',
  'starcoder:15b-base-q5_1',
  'starcoder:15b-base-q5_K_M',
  'starcoder:15b-base-q5_K_S',
  'starcoder:15b-base-q6_K',
  'starcoder:15b-base-q8_0',
  'starcoder:15b-fp16',
  'starcoder:15b-plus',
  'starcoder:15b-plus-fp16',
  'starcoder:15b-plus-q2_K',
  'starcoder:15b-plus-q3_K_L',
  'starcoder:15b-plus-q3_K_M',
  'starcoder:15b-plus-q3_K_S',
  'starcoder:15b-plus-q4_0',
  'starcoder:15b-plus-q4_1',
  'starcoder:15b-plus-q4_K_M',
  'starcoder:15b-plus-q4_K_S',
  'starcoder:15b-plus-q5_0',
  'starcoder:15b-plus-q5_1',
  'starcoder:15b-plus-q5_K_M',
  'starcoder:15b-plus-q5_K_S',
  'starcoder:15b-plus-q6_K',
  'starcoder:15b-plus-q8_0',
  'starcoder:15b-q2_K',
  'starcoder:15b-q3_K_L',
  'starcoder:15b-q3_K_M',
  'starcoder:15b-q3_K_S',
  'starcoder:15b-q4_0',
  'starcoder:15b-q4_1',
  'starcoder:15b-q4_K_M',
  'starcoder:15b-q4_K_S',
  'starcoder:15b-q5_0',
  'starcoder:15b-q5_1',
  'starcoder:15b-q5_K_M',
  'starcoder:15b-q5_K_S',
  'starcoder:15b-q6_K',
  'starcoder:15b-q8_0',
  'starcoder:1b',
  'starcoder:1b-base',
  'starcoder:1b-base-fp16',
  'starcoder:1b-base-q2_K',
  'starcoder:1b-base-q3_K_L',
  'starcoder:1b-base-q3_K_M',
  'starcoder:1b-base-q3_K_S',
  'starcoder:1b-base-q4_0',
  'starcoder:1b-base-q4_1',
  'starcoder:1b-base-q4_K_M',
  'starcoder:1b-base-q4_K_S',
  'starcoder:1b-base-q5_0',
  'starcoder:1b-base-q5_1',
  'starcoder:1b-base-q5_K_M',
  'starcoder:1b-base-q5_K_S',
  'starcoder:1b-base-q6_K',
  'starcoder:1b-base-q8_0',
  'starcoder:3b',
  'starcoder:3b-base',
  'starcoder:3b-base-fp16',
  'starcoder:3b-base-q2_K',
  'starcoder:3b-base-q3_K_L',
  'starcoder:3b-base-q3_K_M',
  'starcoder:3b-base-q3_K_S',
  'starcoder:3b-base-q4_0',
  'starcoder:3b-base-q4_1',
  'starcoder:3b-base-q4_K_M',
  'starcoder:3b-base-q4_K_S',
  'starcoder:3b-base-q5_0',
  'starcoder:3b-base-q5_1',
  'starcoder:3b-base-q5_K_M',
  'starcoder:3b-base-q5_K_S',
  'starcoder:3b-base-q6_K',
  'starcoder:3b-base-q8_0',
  'starcoder:7b',
  'starcoder:7b-base',
  'starcoder:7b-base-fp16',
  'starcoder:7b-base-q2_K',
  'starcoder:7b-base-q3_K_L',
  'starcoder:7b-base-q3_K_M',
  'starcoder:7b-base-q3_K_S',
  'starcoder:7b-base-q4_0',
  'starcoder:7b-base-q4_1',
  'starcoder:7b-base-q4_K_M',
  'starcoder:7b-base-q4_K_S',
  'starcoder:7b-base-q5_0',
  'starcoder:7b-base-q5_1',
  'starcoder:7b-base-q5_K_M',
  'starcoder:7b-base-q5_K_S',
  'starcoder:7b-base-q6_K',
  'starcoder:7b-base-q8_0',
  'starcoder:latest',
  'starling-lm',
  'starling-lm:7b',
  'starling-lm:7b-alpha',
  'starling-lm:7b-alpha-fp16',
  'starling-lm:7b-alpha-q2_K',
  'starling-lm:7b-alpha-q3_K_L',
  'starling-lm:7b-alpha-q3_K_M',
  'starling-lm:7b-alpha-q3_K_S',
  'starling-lm:7b-alpha-q4_0',
  'starling-lm:7b-alpha-q4_1',
  'starling-lm:7b-alpha-q4_K_M',
  'starling-lm:7b-alpha-q4_K_S',
  'starling-lm:7b-alpha-q5_0',
  'starling-lm:7b-alpha-q5_1',
  'starling-lm:7b-alpha-q5_K_M',
  'starling-lm:7b-alpha-q5_K_S',
  'starling-lm:7b-alpha-q6_K',
  'starling-lm:7b-alpha-q8_0',
  'starling-lm:7b-beta',
  'starling-lm:7b-beta-fp16',
  'starling-lm:7b-beta-q2_K',
  'starling-lm:7b-beta-q3_K_L',
  'starling-lm:7b-beta-q3_K_M',
  'starling-lm:7b-beta-q3_K_S',
  'starling-lm:7b-beta-q4_0',
  'starling-lm:7b-beta-q4_1',
  'starling-lm:7b-beta-q4_K_M',
  'starling-lm:7b-beta-q4_K_S',
  'starling-lm:7b-beta-q5_0',
  'starling-lm:7b-beta-q5_1',
  'starling-lm:7b-beta-q5_K_M',
  'starling-lm:7b-beta-q5_K_S',
  'starling-lm:7b-beta-q6_K',
  'starling-lm:7b-beta-q8_0',
  'starling-lm:alpha',
  'starling-lm:beta',
  'starling-lm:latest',
  'tinydolphin',
  'tinydolphin:1.1b',
  'tinydolphin:1.1b-v2.8-fp16',
  'tinydolphin:1.1b-v2.8-q2_K',
  'tinydolphin:1.1b-v2.8-q3_K_L',
  'tinydolphin:1.1b-v2.8-q3_K_M',
  'tinydolphin:1.1b-v2.8-q3_K_S',
  'tinydolphin:1.1b-v2.8-q4_0',
  'tinydolphin:1.1b-v2.8-q4_1',
  'tinydolphin:1.1b-v2.8-q4_K_M',
  'tinydolphin:1.1b-v2.8-q4_K_S',
  'tinydolphin:1.1b-v2.8-q5_0',
  'tinydolphin:1.1b-v2.8-q5_1',
  'tinydolphin:1.1b-v2.8-q5_K_M',
  'tinydolphin:1.1b-v2.8-q5_K_S',
  'tinydolphin:1.1b-v2.8-q6_K',
  'tinydolphin:1.1b-v2.8-q8_0',
  'tinydolphin:latest',
  'tinydolphin:v2.8',
  'tinyllama',
  'tinyllama:1.1b',
  'tinyllama:1.1b-chat',
  'tinyllama:1.1b-chat-v0.6-fp16',
  'tinyllama:1.1b-chat-v0.6-q2_K',
  'tinyllama:1.1b-chat-v0.6-q3_K_L',
  'tinyllama:1.1b-chat-v0.6-q3_K_M',
  'tinyllama:1.1b-chat-v0.6-q3_K_S',
  'tinyllama:1.1b-chat-v0.6-q4_0',
  'tinyllama:1.1b-chat-v0.6-q4_1',
  'tinyllama:1.1b-chat-v0.6-q4_K_M',
  'tinyllama:1.1b-chat-v0.6-q4_K_S',
  'tinyllama:1.1b-chat-v0.6-q5_0',
  'tinyllama:1.1b-chat-v0.6-q5_1',
  'tinyllama:1.1b-chat-v0.6-q5_K_M',
  'tinyllama:1.1b-chat-v0.6-q5_K_S',
  'tinyllama:1.1b-chat-v0.6-q6_K',
  'tinyllama:1.1b-chat-v0.6-q8_0',
  'tinyllama:1.1b-chat-v1-fp16',
  'tinyllama:1.1b-chat-v1-q2_K',
  'tinyllama:1.1b-chat-v1-q3_K_L',
  'tinyllama:1.1b-chat-v1-q3_K_M',
  'tinyllama:1.1b-chat-v1-q3_K_S',
  'tinyllama:1.1b-chat-v1-q4_0',
  'tinyllama:1.1b-chat-v1-q4_1',
  'tinyllama:1.1b-chat-v1-q4_K_M',
  'tinyllama:1.1b-chat-v1-q4_K_S',
  'tinyllama:1.1b-chat-v1-q5_0',
  'tinyllama:1.1b-chat-v1-q5_1',
  'tinyllama:1.1b-chat-v1-q5_K_M',
  'tinyllama:1.1b-chat-v1-q5_K_S',
  'tinyllama:1.1b-chat-v1-q6_K',
  'tinyllama:1.1b-chat-v1-q8_0',
  'tinyllama:chat',
  'tinyllama:latest',
  'tinyllama:v0.6',
  'tinyllama:v1',
  'tulu3',
  'tulu3:70b',
  'tulu3:70b-fp16',
  'tulu3:70b-q4_K_M',
  'tulu3:70b-q8_0',
  'tulu3:8b',
  'tulu3:8b-fp16',
  'tulu3:8b-q4_K_M',
  'tulu3:8b-q8_0',
  'tulu3:latest',
  'vicuna',
  'vicuna:13b',
  'vicuna:13b-16k',
  'vicuna:13b-fp16',
  'vicuna:13b-q2_K',
  'vicuna:13b-q3_K_L',
  'vicuna:13b-q3_K_M',
  'vicuna:13b-q3_K_S',
  'vicuna:13b-q4_0',
  'vicuna:13b-q4_1',
  'vicuna:13b-q4_K_M',
  'vicuna:13b-q4_K_S',
  'vicuna:13b-q5_0',
  'vicuna:13b-q5_1',
  'vicuna:13b-q5_K_M',
  'vicuna:13b-q5_K_S',
  'vicuna:13b-q6_K',
  'vicuna:13b-q8_0',
  'vicuna:13b-v1.5-16k-fp16',
  'vicuna:13b-v1.5-16k-q2_K',
  'vicuna:13b-v1.5-16k-q3_K_L',
  'vicuna:13b-v1.5-16k-q3_K_M',
  'vicuna:13b-v1.5-16k-q3_K_S',
  'vicuna:13b-v1.5-16k-q4_0',
  'vicuna:13b-v1.5-16k-q4_1',
  'vicuna:13b-v1.5-16k-q4_K_M',
  'vicuna:13b-v1.5-16k-q4_K_S',
  'vicuna:13b-v1.5-16k-q5_0',
  'vicuna:13b-v1.5-16k-q5_1',
  'vicuna:13b-v1.5-16k-q5_K_M',
  'vicuna:13b-v1.5-16k-q5_K_S',
  'vicuna:13b-v1.5-16k-q6_K',
  'vicuna:13b-v1.5-16k-q8_0',
  'vicuna:13b-v1.5-fp16',
  'vicuna:13b-v1.5-q2_K',
  'vicuna:13b-v1.5-q3_K_L',
  'vicuna:13b-v1.5-q3_K_M',
  'vicuna:13b-v1.5-q3_K_S',
  'vicuna:13b-v1.5-q4_0',
  'vicuna:13b-v1.5-q4_1',
  'vicuna:13b-v1.5-q4_K_M',
  'vicuna:13b-v1.5-q4_K_S',
  'vicuna:13b-v1.5-q5_0',
  'vicuna:13b-v1.5-q5_1',
  'vicuna:13b-v1.5-q5_K_M',
  'vicuna:13b-v1.5-q5_K_S',
  'vicuna:13b-v1.5-q6_K',
  'vicuna:13b-v1.5-q8_0',
  'vicuna:33b',
  'vicuna:33b-fp16',
  'vicuna:33b-q2_K',
  'vicuna:33b-q3_K_L',
  'vicuna:33b-q3_K_M',
  'vicuna:33b-q3_K_S',
  'vicuna:33b-q4_0',
  'vicuna:33b-q4_1',
  'vicuna:33b-q4_K_M',
  'vicuna:33b-q4_K_S',
  'vicuna:33b-q5_0',
  'vicuna:33b-q5_1',
  'vicuna:33b-q5_K_M',
  'vicuna:33b-q5_K_S',
  'vicuna:33b-q6_K',
  'vicuna:33b-q8_0',
  'vicuna:7b',
  'vicuna:7b-16k',
  'vicuna:7b-fp16',
  'vicuna:7b-q2_K',
  'vicuna:7b-q3_K_L',
  'vicuna:7b-q3_K_M',
  'vicuna:7b-q3_K_S',
  'vicuna:7b-q4_0',
  'vicuna:7b-q4_1',
  'vicuna:7b-q4_K_M',
  'vicuna:7b-q4_K_S',
  'vicuna:7b-q5_0',
  'vicuna:7b-q5_1',
  'vicuna:7b-q5_K_M',
  'vicuna:7b-q5_K_S',
  'vicuna:7b-q6_K',
  'vicuna:7b-q8_0',
  'vicuna:7b-v1.5-16k-fp16',
  'vicuna:7b-v1.5-16k-q2_K',
  'vicuna:7b-v1.5-16k-q3_K_L',
  'vicuna:7b-v1.5-16k-q3_K_M',
  'vicuna:7b-v1.5-16k-q3_K_S',
  'vicuna:7b-v1.5-16k-q4_0',
  'vicuna:7b-v1.5-16k-q4_1',
  'vicuna:7b-v1.5-16k-q4_K_M',
  'vicuna:7b-v1.5-16k-q4_K_S',
  'vicuna:7b-v1.5-16k-q5_0',
  'vicuna:7b-v1.5-16k-q5_1',
  'vicuna:7b-v1.5-16k-q5_K_M',
  'vicuna:7b-v1.5-16k-q5_K_S',
  'vicuna:7b-v1.5-16k-q6_K',
  'vicuna:7b-v1.5-16k-q8_0',
  'vicuna:7b-v1.5-fp16',
  'vicuna:7b-v1.5-q2_K',
  'vicuna:7b-v1.5-q3_K_L',
  'vicuna:7b-v1.5-q3_K_M',
  'vicuna:7b-v1.5-q3_K_S',
  'vicuna:7b-v1.5-q4_0',
  'vicuna:7b-v1.5-q4_1',
  'vicuna:7b-v1.5-q4_K_M',
  'vicuna:7b-v1.5-q4_K_S',
  'vicuna:7b-v1.5-q5_0',
  'vicuna:7b-v1.5-q5_1',
  'vicuna:7b-v1.5-q5_K_M',
  'vicuna:7b-v1.5-q5_K_S',
  'vicuna:7b-v1.5-q6_K',
  'vicuna:7b-v1.5-q8_0',
  'vicuna:latest',
  'wizard-math',
  'wizard-math:13b',
  'wizard-math:13b-fp16',
  'wizard-math:13b-q2_K',
  'wizard-math:13b-q3_K_L',
  'wizard-math:13b-q3_K_M',
  'wizard-math:13b-q3_K_S',
  'wizard-math:13b-q4_0',
  'wizard-math:13b-q4_1',
  'wizard-math:13b-q4_K_M',
  'wizard-math:13b-q4_K_S',
  'wizard-math:13b-q5_0',
  'wizard-math:13b-q5_1',
  'wizard-math:13b-q5_K_M',
  'wizard-math:13b-q5_K_S',
  'wizard-math:13b-q6_K',
  'wizard-math:13b-q8_0',
  'wizard-math:70b',
  'wizard-math:70b-fp16',
  'wizard-math:70b-q2_K',
  'wizard-math:70b-q3_K_L',
  'wizard-math:70b-q3_K_M',
  'wizard-math:70b-q3_K_S',
  'wizard-math:70b-q4_0',
  'wizard-math:70b-q4_1',
  'wizard-math:70b-q4_K_M',
  'wizard-math:70b-q4_K_S',
  'wizard-math:70b-q5_0',
  'wizard-math:70b-q5_1',
  'wizard-math:70b-q5_K_M',
  'wizard-math:70b-q5_K_S',
  'wizard-math:70b-q6_K',
  'wizard-math:70b-q8_0',
  'wizard-math:7b',
  'wizard-math:7b-fp16',
  'wizard-math:7b-q2_K',
  'wizard-math:7b-q3_K_L',
  'wizard-math:7b-q3_K_M',
  'wizard-math:7b-q3_K_S',
  'wizard-math:7b-q4_0',
  'wizard-math:7b-q4_1',
  'wizard-math:7b-q4_K_M',
  'wizard-math:7b-q4_K_S',
  'wizard-math:7b-q5_0',
  'wizard-math:7b-q5_1',
  'wizard-math:7b-q5_K_M',
  'wizard-math:7b-q5_K_S',
  'wizard-math:7b-q6_K',
  'wizard-math:7b-q8_0',
  'wizard-math:7b-v1.1-fp16',
  'wizard-math:7b-v1.1-q2_K',
  'wizard-math:7b-v1.1-q3_K_L',
  'wizard-math:7b-v1.1-q3_K_M',
  'wizard-math:7b-v1.1-q3_K_S',
  'wizard-math:7b-v1.1-q4_0',
  'wizard-math:7b-v1.1-q4_1',
  'wizard-math:7b-v1.1-q4_K_M',
  'wizard-math:7b-v1.1-q4_K_S',
  'wizard-math:7b-v1.1-q5_0',
  'wizard-math:7b-v1.1-q5_1',
  'wizard-math:7b-v1.1-q5_K_M',
  'wizard-math:7b-v1.1-q5_K_S',
  'wizard-math:7b-v1.1-q6_K',
  'wizard-math:7b-v1.1-q8_0',
  'wizard-math:latest',
  'wizard-vicuna',
  'wizard-vicuna-uncensored',
  'wizard-vicuna-uncensored:13b',
  'wizard-vicuna-uncensored:13b-fp16',
  'wizard-vicuna-uncensored:13b-q2_K',
  'wizard-vicuna-uncensored:13b-q3_K_L',
  'wizard-vicuna-uncensored:13b-q3_K_M',
  'wizard-vicuna-uncensored:13b-q3_K_S',
  'wizard-vicuna-uncensored:13b-q4_0',
  'wizard-vicuna-uncensored:13b-q4_1',
  'wizard-vicuna-uncensored:13b-q4_K_M',
  'wizard-vicuna-uncensored:13b-q4_K_S',
  'wizard-vicuna-uncensored:13b-q5_0',
  'wizard-vicuna-uncensored:13b-q5_1',
  'wizard-vicuna-uncensored:13b-q5_K_M',
  'wizard-vicuna-uncensored:13b-q5_K_S',
  'wizard-vicuna-uncensored:13b-q6_K',
  'wizard-vicuna-uncensored:13b-q8_0',
  'wizard-vicuna-uncensored:30b',
  'wizard-vicuna-uncensored:30b-fp16',
  'wizard-vicuna-uncensored:30b-q2_K',
  'wizard-vicuna-uncensored:30b-q3_K_L',
  'wizard-vicuna-uncensored:30b-q3_K_M',
  'wizard-vicuna-uncensored:30b-q3_K_S',
  'wizard-vicuna-uncensored:30b-q4_0',
  'wizard-vicuna-uncensored:30b-q4_1',
  'wizard-vicuna-uncensored:30b-q4_K_M',
  'wizard-vicuna-uncensored:30b-q4_K_S',
  'wizard-vicuna-uncensored:30b-q5_0',
  'wizard-vicuna-uncensored:30b-q5_1',
  'wizard-vicuna-uncensored:30b-q5_K_M',
  'wizard-vicuna-uncensored:30b-q5_K_S',
  'wizard-vicuna-uncensored:30b-q6_K',
  'wizard-vicuna-uncensored:30b-q8_0',
  'wizard-vicuna-uncensored:7b',
  'wizard-vicuna-uncensored:7b-fp16',
  'wizard-vicuna-uncensored:7b-q2_K',
  'wizard-vicuna-uncensored:7b-q3_K_L',
  'wizard-vicuna-uncensored:7b-q3_K_M',
  'wizard-vicuna-uncensored:7b-q3_K_S',
  'wizard-vicuna-uncensored:7b-q4_0',
  'wizard-vicuna-uncensored:7b-q4_1',
  'wizard-vicuna-uncensored:7b-q4_K_M',
  'wizard-vicuna-uncensored:7b-q4_K_S',
  'wizard-vicuna-uncensored:7b-q5_0',
  'wizard-vicuna-uncensored:7b-q5_1',
  'wizard-vicuna-uncensored:7b-q5_K_M',
  'wizard-vicuna-uncensored:7b-q5_K_S',
  'wizard-vicuna-uncensored:7b-q6_K',
  'wizard-vicuna-uncensored:7b-q8_0',
  'wizard-vicuna-uncensored:latest',
  'wizard-vicuna:13b',
  'wizard-vicuna:13b-fp16',
  'wizard-vicuna:13b-q2_K',
  'wizard-vicuna:13b-q3_K_L',
  'wizard-vicuna:13b-q3_K_M',
  'wizard-vicuna:13b-q3_K_S',
  'wizard-vicuna:13b-q4_0',
  'wizard-vicuna:13b-q4_1',
  'wizard-vicuna:13b-q4_K_M',
  'wizard-vicuna:13b-q4_K_S',
  'wizard-vicuna:13b-q5_0',
  'wizard-vicuna:13b-q5_1',
  'wizard-vicuna:13b-q5_K_M',
  'wizard-vicuna:13b-q5_K_S',
  'wizard-vicuna:13b-q6_K',
  'wizard-vicuna:13b-q8_0',
  'wizard-vicuna:latest',
  'wizardcoder',
  'wizardcoder:13b-python',
  'wizardcoder:13b-python-fp16',
  'wizardcoder:13b-python-q2_K',
  'wizardcoder:13b-python-q3_K_L',
  'wizardcoder:13b-python-q3_K_M',
  'wizardcoder:13b-python-q3_K_S',
  'wizardcoder:13b-python-q4_0',
  'wizardcoder:13b-python-q4_1',
  'wizardcoder:13b-python-q4_K_M',
  'wizardcoder:13b-python-q4_K_S',
  'wizardcoder:13b-python-q5_0',
  'wizardcoder:13b-python-q5_1',
  'wizardcoder:13b-python-q5_K_M',
  'wizardcoder:13b-python-q5_K_S',
  'wizardcoder:13b-python-q6_K',
  'wizardcoder:13b-python-q8_0',
  'wizardcoder:33b',
  'wizardcoder:33b-v1.1',
  'wizardcoder:33b-v1.1-fp16',
  'wizardcoder:33b-v1.1-q2_K',
  'wizardcoder:33b-v1.1-q3_K_L',
  'wizardcoder:33b-v1.1-q3_K_M',
  'wizardcoder:33b-v1.1-q3_K_S',
  'wizardcoder:33b-v1.1-q4_0',
  'wizardcoder:33b-v1.1-q4_1',
  'wizardcoder:33b-v1.1-q4_K_M',
  'wizardcoder:33b-v1.1-q4_K_S',
  'wizardcoder:33b-v1.1-q5_0',
  'wizardcoder:33b-v1.1-q5_1',
  'wizardcoder:33b-v1.1-q5_K_M',
  'wizardcoder:33b-v1.1-q5_K_S',
  'wizardcoder:33b-v1.1-q6_K',
  'wizardcoder:33b-v1.1-q8_0',
  'wizardcoder:34b-python',
  'wizardcoder:34b-python-fp16',
  'wizardcoder:34b-python-q2_K',
  'wizardcoder:34b-python-q3_K_L',
  'wizardcoder:34b-python-q3_K_M',
  'wizardcoder:34b-python-q3_K_S',
  'wizardcoder:34b-python-q4_0',
  'wizardcoder:34b-python-q4_1',
  'wizardcoder:34b-python-q4_K_M',
  'wizardcoder:34b-python-q4_K_S',
  'wizardcoder:34b-python-q5_0',
  'wizardcoder:34b-python-q5_1',
  'wizardcoder:34b-python-q5_K_M',
  'wizardcoder:34b-python-q5_K_S',
  'wizardcoder:34b-python-q6_K',
  'wizardcoder:34b-python-q8_0',
  'wizardcoder:7b-python',
  'wizardcoder:7b-python-fp16',
  'wizardcoder:7b-python-q2_K',
  'wizardcoder:7b-python-q3_K_L',
  'wizardcoder:7b-python-q3_K_M',
  'wizardcoder:7b-python-q3_K_S',
  'wizardcoder:7b-python-q4_0',
  'wizardcoder:7b-python-q4_1',
  'wizardcoder:7b-python-q4_K_M',
  'wizardcoder:7b-python-q4_K_S',
  'wizardcoder:7b-python-q5_0',
  'wizardcoder:7b-python-q5_1',
  'wizardcoder:7b-python-q5_K_M',
  'wizardcoder:7b-python-q5_K_S',
  'wizardcoder:7b-python-q6_K',
  'wizardcoder:7b-python-q8_0',
  'wizardcoder:latest',
  'wizardcoder:python',
  'wizardlm',
  'wizardlm-uncensored',
  'wizardlm-uncensored:13b',
  'wizardlm-uncensored:13b-llama2',
  'wizardlm-uncensored:13b-llama2-fp16',
  'wizardlm-uncensored:13b-llama2-q2_K',
  'wizardlm-uncensored:13b-llama2-q3_K_L',
  'wizardlm-uncensored:13b-llama2-q3_K_M',
  'wizardlm-uncensored:13b-llama2-q3_K_S',
  'wizardlm-uncensored:13b-llama2-q4_0',
  'wizardlm-uncensored:13b-llama2-q4_1',
  'wizardlm-uncensored:13b-llama2-q4_K_M',
  'wizardlm-uncensored:13b-llama2-q4_K_S',
  'wizardlm-uncensored:13b-llama2-q5_0',
  'wizardlm-uncensored:13b-llama2-q5_1',
  'wizardlm-uncensored:13b-llama2-q5_K_M',
  'wizardlm-uncensored:13b-llama2-q5_K_S',
  'wizardlm-uncensored:13b-llama2-q6_K',
  'wizardlm-uncensored:13b-llama2-q8_0',
  'wizardlm-uncensored:latest',
  'wizardlm2',
  'wizardlm2:7b',
  'wizardlm2:7b-fp16',
  'wizardlm2:7b-q2_K',
  'wizardlm2:7b-q3_K_L',
  'wizardlm2:7b-q3_K_M',
  'wizardlm2:7b-q3_K_S',
  'wizardlm2:7b-q4_0',
  'wizardlm2:7b-q4_1',
  'wizardlm2:7b-q4_K_M',
  'wizardlm2:7b-q4_K_S',
  'wizardlm2:7b-q5_0',
  'wizardlm2:7b-q5_1',
  'wizardlm2:7b-q5_K_M',
  'wizardlm2:7b-q5_K_S',
  'wizardlm2:7b-q6_K',
  'wizardlm2:7b-q8_0',
  'wizardlm2:8x22b',
  'wizardlm2:8x22b-fp16',
  'wizardlm2:8x22b-q2_K',
  'wizardlm2:8x22b-q4_0',
  'wizardlm2:8x22b-q8_0',
  'wizardlm2:latest',
  'wizardlm:13b-fp16',
  'wizardlm:13b-llama2-fp16',
  'wizardlm:13b-llama2-q2_K',
  'wizardlm:13b-llama2-q3_K_L',
  'wizardlm:13b-llama2-q3_K_M',
  'wizardlm:13b-llama2-q3_K_S',
  'wizardlm:13b-llama2-q4_0',
  'wizardlm:13b-llama2-q4_1',
  'wizardlm:13b-llama2-q4_K_M',
  'wizardlm:13b-llama2-q4_K_S',
  'wizardlm:13b-llama2-q5_0',
  'wizardlm:13b-llama2-q5_1',
  'wizardlm:13b-llama2-q5_K_M',
  'wizardlm:13b-llama2-q5_K_S',
  'wizardlm:13b-llama2-q6_K',
  'wizardlm:13b-llama2-q8_0',
  'wizardlm:13b-q2_K',
  'wizardlm:13b-q3_K_L',
  'wizardlm:13b-q3_K_M',
  'wizardlm:13b-q3_K_S',
  'wizardlm:13b-q4_0',
  'wizardlm:13b-q4_1',
  'wizardlm:13b-q4_K_M',
  'wizardlm:13b-q4_K_S',
  'wizardlm:13b-q5_0',
  'wizardlm:13b-q5_1',
  'wizardlm:13b-q5_K_M',
  'wizardlm:13b-q5_K_S',
  'wizardlm:13b-q6_K',
  'wizardlm:13b-q8_0',
  'wizardlm:30b-fp16',
  'wizardlm:30b-q2_K',
  'wizardlm:30b-q3_K_L',
  'wizardlm:30b-q3_K_M',
  'wizardlm:30b-q3_K_S',
  'wizardlm:30b-q4_0',
  'wizardlm:30b-q4_1',
  'wizardlm:30b-q4_K_M',
  'wizardlm:30b-q4_K_S',
  'wizardlm:30b-q5_0',
  'wizardlm:30b-q5_1',
  'wizardlm:30b-q5_K_M',
  'wizardlm:30b-q5_K_S',
  'wizardlm:30b-q6_K',
  'wizardlm:30b-q8_0',
  'wizardlm:70b-llama2-q2_K',
  'wizardlm:70b-llama2-q3_K_L',
  'wizardlm:70b-llama2-q3_K_M',
  'wizardlm:70b-llama2-q3_K_S',
  'wizardlm:70b-llama2-q4_0',
  'wizardlm:70b-llama2-q4_1',
  'wizardlm:70b-llama2-q4_K_M',
  'wizardlm:70b-llama2-q4_K_S',
  'wizardlm:70b-llama2-q5_0',
  'wizardlm:70b-llama2-q5_K_M',
  'wizardlm:70b-llama2-q5_K_S',
  'wizardlm:70b-llama2-q6_K',
  'wizardlm:70b-llama2-q8_0',
  'wizardlm:7b-fp16',
  'wizardlm:7b-q2_K',
  'wizardlm:7b-q3_K_L',
  'wizardlm:7b-q3_K_M',
  'wizardlm:7b-q3_K_S',
  'wizardlm:7b-q4_0',
  'wizardlm:7b-q4_1',
  'wizardlm:7b-q4_K_M',
  'wizardlm:7b-q4_K_S',
  'wizardlm:7b-q5_0',
  'wizardlm:7b-q5_1',
  'wizardlm:7b-q5_K_M',
  'wizardlm:7b-q5_K_S',
  'wizardlm:7b-q6_K',
  'wizardlm:7b-q8_0',
  'xwinlm',
  'xwinlm:13b',
  'xwinlm:13b-v0.1',
  'xwinlm:13b-v0.1-fp16',
  'xwinlm:13b-v0.1-q2_K',
  'xwinlm:13b-v0.1-q3_K_L',
  'xwinlm:13b-v0.1-q3_K_M',
  'xwinlm:13b-v0.1-q3_K_S',
  'xwinlm:13b-v0.1-q4_0',
  'xwinlm:13b-v0.1-q4_1',
  'xwinlm:13b-v0.1-q4_K_M',
  'xwinlm:13b-v0.1-q4_K_S',
  'xwinlm:13b-v0.1-q5_0',
  'xwinlm:13b-v0.1-q5_1',
  'xwinlm:13b-v0.1-q5_K_M',
  'xwinlm:13b-v0.1-q5_K_S',
  'xwinlm:13b-v0.1-q6_K',
  'xwinlm:13b-v0.1-q8_0',
  'xwinlm:13b-v0.2',
  'xwinlm:13b-v0.2-fp16',
  'xwinlm:13b-v0.2-q2_K',
  'xwinlm:13b-v0.2-q3_K_L',
  'xwinlm:13b-v0.2-q3_K_M',
  'xwinlm:13b-v0.2-q3_K_S',
  'xwinlm:13b-v0.2-q4_0',
  'xwinlm:13b-v0.2-q4_1',
  'xwinlm:13b-v0.2-q4_K_M',
  'xwinlm:13b-v0.2-q4_K_S',
  'xwinlm:13b-v0.2-q5_0',
  'xwinlm:13b-v0.2-q5_1',
  'xwinlm:13b-v0.2-q5_K_M',
  'xwinlm:13b-v0.2-q5_K_S',
  'xwinlm:13b-v0.2-q6_K',
  'xwinlm:13b-v0.2-q8_0',
  'xwinlm:70b-v0.1',
  'xwinlm:70b-v0.1-fp16',
  'xwinlm:70b-v0.1-q2_K',
  'xwinlm:70b-v0.1-q3_K_L',
  'xwinlm:70b-v0.1-q3_K_M',
  'xwinlm:70b-v0.1-q3_K_S',
  'xwinlm:70b-v0.1-q4_0',
  'xwinlm:70b-v0.1-q4_1',
  'xwinlm:70b-v0.1-q4_K_M',
  'xwinlm:70b-v0.1-q4_K_S',
  'xwinlm:70b-v0.1-q5_0',
  'xwinlm:70b-v0.1-q5_1',
  'xwinlm:70b-v0.1-q5_K_S',
  'xwinlm:70b-v0.1-q6_K',
  'xwinlm:70b-v0.1-q8_0',
  'xwinlm:7b',
  'xwinlm:7b-v0.1',
  'xwinlm:7b-v0.1-fp16',
  'xwinlm:7b-v0.1-q2_K',
  'xwinlm:7b-v0.1-q3_K_L',
  'xwinlm:7b-v0.1-q3_K_M',
  'xwinlm:7b-v0.1-q3_K_S',
  'xwinlm:7b-v0.1-q4_0',
  'xwinlm:7b-v0.1-q4_1',
  'xwinlm:7b-v0.1-q4_K_M',
  'xwinlm:7b-v0.1-q4_K_S',
  'xwinlm:7b-v0.1-q5_0',
  'xwinlm:7b-v0.1-q5_1',
  'xwinlm:7b-v0.1-q5_K_M',
  'xwinlm:7b-v0.1-q5_K_S',
  'xwinlm:7b-v0.1-q6_K',
  'xwinlm:7b-v0.1-q8_0',
  'xwinlm:7b-v0.2',
  'xwinlm:7b-v0.2-fp16',
  'xwinlm:7b-v0.2-q2_K',
  'xwinlm:7b-v0.2-q3_K_L',
  'xwinlm:7b-v0.2-q3_K_S',
  'xwinlm:7b-v0.2-q4_0',
  'xwinlm:7b-v0.2-q4_1',
  'xwinlm:7b-v0.2-q4_K_M',
  'xwinlm:7b-v0.2-q4_K_S',
  'xwinlm:7b-v0.2-q5_0',
  'xwinlm:7b-v0.2-q5_K_M',
  'xwinlm:7b-v0.2-q5_K_S',
  'xwinlm:7b-v0.2-q6_K',
  'xwinlm:7b-v0.2-q8_0',
  'xwinlm:latest',
  'yarn-llama2',
  'yarn-llama2:13b',
  'yarn-llama2:13b-128k',
  'yarn-llama2:13b-128k-fp16',
  'yarn-llama2:13b-128k-q2_K',
  'yarn-llama2:13b-128k-q3_K_L',
  'yarn-llama2:13b-128k-q3_K_M',
  'yarn-llama2:13b-128k-q3_K_S',
  'yarn-llama2:13b-128k-q4_0',
  'yarn-llama2:13b-128k-q4_1',
  'yarn-llama2:13b-128k-q4_K_M',
  'yarn-llama2:13b-128k-q4_K_S',
  'yarn-llama2:13b-128k-q5_0',
  'yarn-llama2:13b-128k-q5_1',
  'yarn-llama2:13b-128k-q5_K_M',
  'yarn-llama2:13b-128k-q5_K_S',
  'yarn-llama2:13b-128k-q6_K',
  'yarn-llama2:13b-128k-q8_0',
  'yarn-llama2:13b-64k',
  'yarn-llama2:13b-64k-fp16',
  'yarn-llama2:13b-64k-q2_K',
  'yarn-llama2:13b-64k-q3_K_L',
  'yarn-llama2:13b-64k-q3_K_M',
  'yarn-llama2:13b-64k-q3_K_S',
  'yarn-llama2:13b-64k-q4_0',
  'yarn-llama2:13b-64k-q4_1',
  'yarn-llama2:13b-64k-q4_K_M',
  'yarn-llama2:13b-64k-q4_K_S',
  'yarn-llama2:13b-64k-q5_0',
  'yarn-llama2:13b-64k-q5_1',
  'yarn-llama2:13b-64k-q5_K_M',
  'yarn-llama2:13b-64k-q5_K_S',
  'yarn-llama2:13b-64k-q6_K',
  'yarn-llama2:13b-64k-q8_0',
  'yarn-llama2:7b',
  'yarn-llama2:7b-128k',
  'yarn-llama2:7b-128k-fp16',
  'yarn-llama2:7b-128k-q2_K',
  'yarn-llama2:7b-128k-q3_K_L',
  'yarn-llama2:7b-128k-q3_K_M',
  'yarn-llama2:7b-128k-q3_K_S',
  'yarn-llama2:7b-128k-q4_0',
  'yarn-llama2:7b-128k-q4_1',
  'yarn-llama2:7b-128k-q4_K_M',
  'yarn-llama2:7b-128k-q4_K_S',
  'yarn-llama2:7b-128k-q5_0',
  'yarn-llama2:7b-128k-q5_1',
  'yarn-llama2:7b-128k-q5_K_M',
  'yarn-llama2:7b-128k-q5_K_S',
  'yarn-llama2:7b-128k-q6_K',
  'yarn-llama2:7b-128k-q8_0',
  'yarn-llama2:7b-64k',
  'yarn-llama2:7b-64k-fp16',
  'yarn-llama2:7b-64k-q2_K',
  'yarn-llama2:7b-64k-q3_K_L',
  'yarn-llama2:7b-64k-q3_K_M',
  'yarn-llama2:7b-64k-q3_K_S',
  'yarn-llama2:7b-64k-q4_0',
  'yarn-llama2:7b-64k-q4_1',
  'yarn-llama2:7b-64k-q4_K_M',
  'yarn-llama2:7b-64k-q4_K_S',
  'yarn-llama2:7b-64k-q5_0',
  'yarn-llama2:7b-64k-q5_1',
  'yarn-llama2:7b-64k-q5_K_M',
  'yarn-llama2:7b-64k-q5_K_S',
  'yarn-llama2:7b-64k-q6_K',
  'yarn-llama2:7b-64k-q8_0',
  'yarn-llama2:latest',
  'yarn-mistral',
  'yarn-mistral:7b',
  'yarn-mistral:7b-128k',
  'yarn-mistral:7b-128k-fp16',
  'yarn-mistral:7b-128k-q2_K',
  'yarn-mistral:7b-128k-q3_K_L',
  'yarn-mistral:7b-128k-q3_K_M',
  'yarn-mistral:7b-128k-q3_K_S',
  'yarn-mistral:7b-128k-q4_0',
  'yarn-mistral:7b-128k-q4_1',
  'yarn-mistral:7b-128k-q4_K_M',
  'yarn-mistral:7b-128k-q4_K_S',
  'yarn-mistral:7b-128k-q5_0',
  'yarn-mistral:7b-128k-q5_1',
  'yarn-mistral:7b-128k-q5_K_M',
  'yarn-mistral:7b-128k-q5_K_S',
  'yarn-mistral:7b-128k-q6_K',
  'yarn-mistral:7b-128k-q8_0',
  'yarn-mistral:7b-64k',
  'yarn-mistral:7b-64k-q2_K',
  'yarn-mistral:7b-64k-q3_K_L',
  'yarn-mistral:7b-64k-q3_K_M',
  'yarn-mistral:7b-64k-q3_K_S',
  'yarn-mistral:7b-64k-q4_0',
  'yarn-mistral:7b-64k-q4_1',
  'yarn-mistral:7b-64k-q4_K_M',
  'yarn-mistral:7b-64k-q4_K_S',
  'yarn-mistral:7b-64k-q5_0',
  'yarn-mistral:7b-64k-q5_1',
  'yarn-mistral:7b-64k-q5_K_M',
  'yarn-mistral:7b-64k-q5_K_S',
  'yarn-mistral:7b-64k-q6_K',
  'yarn-mistral:7b-64k-q8_0',
  'yarn-mistral:latest',
  'yi',
  'yi-coder',
  'yi-coder:1.5b',
  'yi-coder:1.5b-base',
  'yi-coder:1.5b-base-fp16',
  'yi-coder:1.5b-base-q2_K',
  'yi-coder:1.5b-base-q3_K_L',
  'yi-coder:1.5b-base-q3_K_M',
  'yi-coder:1.5b-base-q3_K_S',
  'yi-coder:1.5b-base-q4_0',
  'yi-coder:1.5b-base-q4_1',
  'yi-coder:1.5b-base-q4_K_M',
  'yi-coder:1.5b-base-q4_K_S',
  'yi-coder:1.5b-base-q5_0',
  'yi-coder:1.5b-base-q5_1',
  'yi-coder:1.5b-base-q5_K_M',
  'yi-coder:1.5b-base-q5_K_S',
  'yi-coder:1.5b-base-q6_K',
  'yi-coder:1.5b-base-q8_0',
  'yi-coder:1.5b-chat',
  'yi-coder:1.5b-chat-fp16',
  'yi-coder:1.5b-chat-q2_K',
  'yi-coder:1.5b-chat-q3_K_L',
  'yi-coder:1.5b-chat-q3_K_M',
  'yi-coder:1.5b-chat-q3_K_S',
  'yi-coder:1.5b-chat-q4_0',
  'yi-coder:1.5b-chat-q4_1',
  'yi-coder:1.5b-chat-q4_K_M',
  'yi-coder:1.5b-chat-q4_K_S',
  'yi-coder:1.5b-chat-q5_0',
  'yi-coder:1.5b-chat-q5_1',
  'yi-coder:1.5b-chat-q5_K_M',
  'yi-coder:1.5b-chat-q5_K_S',
  'yi-coder:1.5b-chat-q6_K',
  'yi-coder:1.5b-chat-q8_0',
  'yi-coder:9b',
  'yi-coder:9b-base',
  'yi-coder:9b-base-fp16',
  'yi-coder:9b-base-q2_K',
  'yi-coder:9b-base-q3_K_L',
  'yi-coder:9b-base-q3_K_M',
  'yi-coder:9b-base-q3_K_S',
  'yi-coder:9b-base-q4_0',
  'yi-coder:9b-base-q4_1',
  'yi-coder:9b-base-q4_K_M',
  'yi-coder:9b-base-q4_K_S',
  'yi-coder:9b-base-q5_0',
  'yi-coder:9b-base-q5_1',
  'yi-coder:9b-base-q5_K_M',
  'yi-coder:9b-base-q5_K_S',
  'yi-coder:9b-base-q6_K',
  'yi-coder:9b-base-q8_0',
  'yi-coder:9b-chat',
  'yi-coder:9b-chat-fp16',
  'yi-coder:9b-chat-q2_K',
  'yi-coder:9b-chat-q3_K_L',
  'yi-coder:9b-chat-q3_K_M',
  'yi-coder:9b-chat-q3_K_S',
  'yi-coder:9b-chat-q4_0',
  'yi-coder:9b-chat-q4_1',
  'yi-coder:9b-chat-q4_K_M',
  'yi-coder:9b-chat-q4_K_S',
  'yi-coder:9b-chat-q5_0',
  'yi-coder:9b-chat-q5_1',
  'yi-coder:9b-chat-q5_K_M',
  'yi-coder:9b-chat-q5_K_S',
  'yi-coder:9b-chat-q6_K',
  'yi-coder:9b-chat-q8_0',
  'yi-coder:latest',
  'yi:34b',
  'yi:34b-chat',
  'yi:34b-chat-fp16',
  'yi:34b-chat-q2_K',
  'yi:34b-chat-q3_K_L',
  'yi:34b-chat-q3_K_M',
  'yi:34b-chat-q3_K_S',
  'yi:34b-chat-q4_0',
  'yi:34b-chat-q4_1',
  'yi:34b-chat-q4_K_M',
  'yi:34b-chat-q4_K_S',
  'yi:34b-chat-q5_0',
  'yi:34b-chat-q5_1',
  'yi:34b-chat-q5_K_M',
  'yi:34b-chat-q5_K_S',
  'yi:34b-chat-q6_K',
  'yi:34b-chat-q8_0',
  'yi:34b-chat-v1.5-fp16',
  'yi:34b-chat-v1.5-q2_K',
  'yi:34b-chat-v1.5-q3_K_L',
  'yi:34b-chat-v1.5-q3_K_M',
  'yi:34b-chat-v1.5-q3_K_S',
  'yi:34b-chat-v1.5-q4_0',
  'yi:34b-chat-v1.5-q4_1',
  'yi:34b-chat-v1.5-q4_K_M',
  'yi:34b-chat-v1.5-q4_K_S',
  'yi:34b-chat-v1.5-q5_0',
  'yi:34b-chat-v1.5-q5_1',
  'yi:34b-chat-v1.5-q5_K_M',
  'yi:34b-chat-v1.5-q5_K_S',
  'yi:34b-chat-v1.5-q6_K',
  'yi:34b-chat-v1.5-q8_0',
  'yi:34b-q2_K',
  'yi:34b-q3_K_L',
  'yi:34b-q3_K_M',
  'yi:34b-q3_K_S',
  'yi:34b-q4_0',
  'yi:34b-q4_1',
  'yi:34b-q4_K_M',
  'yi:34b-q4_K_S',
  'yi:34b-q5_0',
  'yi:34b-q5_1',
  'yi:34b-q5_K_S',
  'yi:34b-q6_K',
  'yi:34b-v1.5',
  'yi:34b-v1.5-fp16',
  'yi:34b-v1.5-q2_K',
  'yi:34b-v1.5-q3_K_L',
  'yi:34b-v1.5-q3_K_M',
  'yi:34b-v1.5-q3_K_S',
  'yi:34b-v1.5-q4_0',
  'yi:34b-v1.5-q4_1',
  'yi:34b-v1.5-q4_K_M',
  'yi:34b-v1.5-q4_K_S',
  'yi:34b-v1.5-q5_0',
  'yi:34b-v1.5-q5_1',
  'yi:34b-v1.5-q5_K_M',
  'yi:34b-v1.5-q5_K_S',
  'yi:34b-v1.5-q6_K',
  'yi:34b-v1.5-q8_0',
  'yi:6b',
  'yi:6b-200k',
  'yi:6b-200k-fp16',
  'yi:6b-200k-q2_K',
  'yi:6b-200k-q3_K_L',
  'yi:6b-200k-q3_K_M',
  'yi:6b-200k-q3_K_S',
  'yi:6b-200k-q4_0',
  'yi:6b-200k-q4_1',
  'yi:6b-200k-q4_K_M',
  'yi:6b-200k-q4_K_S',
  'yi:6b-200k-q5_0',
  'yi:6b-200k-q5_1',
  'yi:6b-200k-q5_K_M',
  'yi:6b-200k-q5_K_S',
  'yi:6b-200k-q6_K',
  'yi:6b-200k-q8_0',
  'yi:6b-chat',
  'yi:6b-chat-fp16',
  'yi:6b-chat-q2_K',
  'yi:6b-chat-q3_K_L',
  'yi:6b-chat-q3_K_M',
  'yi:6b-chat-q3_K_S',
  'yi:6b-chat-q4_0',
  'yi:6b-chat-q4_1',
  'yi:6b-chat-q4_K_M',
  'yi:6b-chat-q4_K_S',
  'yi:6b-chat-q5_0',
  'yi:6b-chat-q5_1',
  'yi:6b-chat-q5_K_M',
  'yi:6b-chat-q5_K_S',
  'yi:6b-chat-q6_K',
  'yi:6b-chat-q8_0',
  'yi:6b-chat-v1.5-fp16',
  'yi:6b-chat-v1.5-q2_K',
  'yi:6b-chat-v1.5-q3_K_L',
  'yi:6b-chat-v1.5-q3_K_M',
  'yi:6b-chat-v1.5-q3_K_S',
  'yi:6b-chat-v1.5-q4_0',
  'yi:6b-chat-v1.5-q4_1',
  'yi:6b-chat-v1.5-q4_K_M',
  'yi:6b-chat-v1.5-q4_K_S',
  'yi:6b-chat-v1.5-q5_0',
  'yi:6b-chat-v1.5-q5_1',
  'yi:6b-chat-v1.5-q5_K_M',
  'yi:6b-chat-v1.5-q5_K_S',
  'yi:6b-chat-v1.5-q6_K',
  'yi:6b-chat-v1.5-q8_0',
  'yi:6b-fp16',
  'yi:6b-q2_K',
  'yi:6b-q3_K_L',
  'yi:6b-q3_K_M',
  'yi:6b-q3_K_S',
  'yi:6b-q4_0',
  'yi:6b-q4_1',
  'yi:6b-q4_K_M',
  'yi:6b-q4_K_S',
  'yi:6b-q5_0',
  'yi:6b-q5_1',
  'yi:6b-q5_K_M',
  'yi:6b-q5_K_S',
  'yi:6b-q6_K',
  'yi:6b-q8_0',
  'yi:6b-v1.5',
  'yi:6b-v1.5-fp16',
  'yi:6b-v1.5-q2_K',
  'yi:6b-v1.5-q3_K_L',
  'yi:6b-v1.5-q3_K_M',
  'yi:6b-v1.5-q3_K_S',
  'yi:6b-v1.5-q4_0',
  'yi:6b-v1.5-q4_1',
  'yi:6b-v1.5-q4_K_M',
  'yi:6b-v1.5-q4_K_S',
  'yi:6b-v1.5-q5_0',
  'yi:6b-v1.5-q5_1',
  'yi:6b-v1.5-q5_K_M',
  'yi:6b-v1.5-q5_K_S',
  'yi:6b-v1.5-q6_K',
  'yi:6b-v1.5-q8_0',
  'yi:9b',
  'yi:9b-chat',
  'yi:9b-chat-v1.5-fp16',
  'yi:9b-chat-v1.5-q2_K',
  'yi:9b-chat-v1.5-q3_K_L',
  'yi:9b-chat-v1.5-q3_K_M',
  'yi:9b-chat-v1.5-q3_K_S',
  'yi:9b-chat-v1.5-q4_0',
  'yi:9b-chat-v1.5-q4_1',
  'yi:9b-chat-v1.5-q4_K_M',
  'yi:9b-chat-v1.5-q4_K_S',
  'yi:9b-chat-v1.5-q5_0',
  'yi:9b-chat-v1.5-q5_1',
  'yi:9b-chat-v1.5-q5_K_M',
  'yi:9b-chat-v1.5-q5_K_S',
  'yi:9b-chat-v1.5-q6_K',
  'yi:9b-chat-v1.5-q8_0',
  'yi:9b-v1.5',
  'yi:9b-v1.5-fp16',
  'yi:9b-v1.5-q2_K',
  'yi:9b-v1.5-q3_K_L',
  'yi:9b-v1.5-q3_K_M',
  'yi:9b-v1.5-q3_K_S',
  'yi:9b-v1.5-q4_0',
  'yi:9b-v1.5-q4_1',
  'yi:9b-v1.5-q4_K_M',
  'yi:9b-v1.5-q4_K_S',
  'yi:9b-v1.5-q5_0',
  'yi:9b-v1.5-q5_1',
  'yi:9b-v1.5-q5_K_M',
  'yi:9b-v1.5-q5_K_S',
  'yi:9b-v1.5-q6_K',
  'yi:9b-v1.5-q8_0',
  'yi:latest',
  'yi:v1.5',
  'zephyr',
  'zephyr:141b',
  'zephyr:141b-v0.1',
  'zephyr:141b-v0.1-fp16',
  'zephyr:141b-v0.1-q2_K',
  'zephyr:141b-v0.1-q4_0',
  'zephyr:141b-v0.1-q8_0',
  'zephyr:7b',
  'zephyr:7b-alpha',
  'zephyr:7b-alpha-fp16',
  'zephyr:7b-alpha-q2_K',
  'zephyr:7b-alpha-q3_K_L',
  'zephyr:7b-alpha-q3_K_M',
  'zephyr:7b-alpha-q3_K_S',
  'zephyr:7b-alpha-q4_0',
  'zephyr:7b-alpha-q4_1',
  'zephyr:7b-alpha-q4_K_M',
  'zephyr:7b-alpha-q4_K_S',
  'zephyr:7b-alpha-q5_0',
  'zephyr:7b-alpha-q5_1',
  'zephyr:7b-alpha-q5_K_M',
  'zephyr:7b-alpha-q5_K_S',
  'zephyr:7b-alpha-q6_K',
  'zephyr:7b-alpha-q8_0',
  'zephyr:7b-beta',
  'zephyr:7b-beta-fp16',
  'zephyr:7b-beta-q2_K',
  'zephyr:7b-beta-q3_K_L',
  'zephyr:7b-beta-q3_K_M',
  'zephyr:7b-beta-q3_K_S',
  'zephyr:7b-beta-q4_0',
  'zephyr:7b-beta-q4_1',
  'zephyr:7b-beta-q4_K_M',
  'zephyr:7b-beta-q4_K_S',
  'zephyr:7b-beta-q5_0',
  'zephyr:7b-beta-q5_1',
  'zephyr:7b-beta-q5_K_M',
  'zephyr:7b-beta-q5_K_S',
  'zephyr:7b-beta-q6_K',
  'zephyr:7b-beta-q8_0',
  'zephyr:latest',
] as const;

// Model Metadata
export interface OllamaModelInfo {
  name: string;
  type: 'chat' | 'embedding' | 'vision';
  tags: string[];
}

// Model Registry
export const OLLAMA_MODELS: Record<string, OllamaModelInfo> = {
  alfred: {
    name: 'alfred',
    type: 'chat',
    tags: [
      'alfred:40b',
      'alfred:40b-1023-q4_0',
      'alfred:40b-1023-q4_1',
      'alfred:40b-1023-q5_0',
      'alfred:40b-1023-q5_1',
      'alfred:40b-1023-q8_0',
      'alfred:latest',
    ],
  },
  'athene-v2': {
    name: 'athene-v2',
    type: 'chat',
    tags: [
      'athene-v2:72b',
      'athene-v2:72b-fp16',
      'athene-v2:72b-q2_K',
      'athene-v2:72b-q3_K_L',
      'athene-v2:72b-q3_K_M',
      'athene-v2:72b-q3_K_S',
      'athene-v2:72b-q4_0',
      'athene-v2:72b-q4_1',
      'athene-v2:72b-q4_K_M',
      'athene-v2:72b-q4_K_S',
      'athene-v2:72b-q5_0',
      'athene-v2:72b-q5_1',
      'athene-v2:72b-q5_K_M',
      'athene-v2:72b-q5_K_S',
      'athene-v2:72b-q6_K',
      'athene-v2:72b-q8_0',
      'athene-v2:latest',
    ],
  },
  aya: {
    name: 'aya',
    type: 'chat',
    tags: [
      'aya:35b',
      'aya:35b-23',
      'aya:35b-23-q2_K',
      'aya:35b-23-q3_K_L',
      'aya:35b-23-q3_K_M',
      'aya:35b-23-q3_K_S',
      'aya:35b-23-q4_0',
      'aya:35b-23-q4_1',
      'aya:35b-23-q4_K_M',
      'aya:35b-23-q4_K_S',
      'aya:35b-23-q5_0',
      'aya:35b-23-q5_1',
      'aya:35b-23-q5_K_M',
      'aya:35b-23-q5_K_S',
      'aya:35b-23-q6_K',
      'aya:35b-23-q8_0',
      'aya:8b',
      'aya:8b-23',
      'aya:8b-23-q2_K',
      'aya:8b-23-q3_K_L',
      'aya:8b-23-q3_K_M',
      'aya:8b-23-q3_K_S',
      'aya:8b-23-q4_0',
      'aya:8b-23-q4_1',
      'aya:8b-23-q4_K_M',
      'aya:8b-23-q4_K_S',
      'aya:8b-23-q5_0',
      'aya:8b-23-q5_1',
      'aya:8b-23-q5_K_M',
      'aya:8b-23-q5_K_S',
      'aya:8b-23-q6_K',
      'aya:8b-23-q8_0',
      'aya:latest',
    ],
  },
  'aya-expanse': {
    name: 'aya-expanse',
    type: 'chat',
    tags: [
      'aya-expanse:32b',
      'aya-expanse:32b-fp16',
      'aya-expanse:32b-q2_K',
      'aya-expanse:32b-q3_K_L',
      'aya-expanse:32b-q3_K_M',
      'aya-expanse:32b-q3_K_S',
      'aya-expanse:32b-q4_0',
      'aya-expanse:32b-q4_1',
      'aya-expanse:32b-q4_K_M',
      'aya-expanse:32b-q4_K_S',
      'aya-expanse:32b-q5_0',
      'aya-expanse:32b-q5_1',
      'aya-expanse:32b-q5_K_M',
      'aya-expanse:32b-q5_K_S',
      'aya-expanse:32b-q6_K',
      'aya-expanse:32b-q8_0',
      'aya-expanse:8b',
      'aya-expanse:8b-fp16',
      'aya-expanse:8b-q2_K',
      'aya-expanse:8b-q3_K_L',
      'aya-expanse:8b-q3_K_M',
      'aya-expanse:8b-q3_K_S',
      'aya-expanse:8b-q4_0',
      'aya-expanse:8b-q4_1',
      'aya-expanse:8b-q4_K_M',
      'aya-expanse:8b-q4_K_S',
      'aya-expanse:8b-q5_0',
      'aya-expanse:8b-q5_1',
      'aya-expanse:8b-q5_K_M',
      'aya-expanse:8b-q5_K_S',
      'aya-expanse:8b-q6_K',
      'aya-expanse:8b-q8_0',
      'aya-expanse:latest',
    ],
  },
  'bespoke-minicheck': {
    name: 'bespoke-minicheck',
    type: 'chat',
    tags: [
      'bespoke-minicheck:7b',
      'bespoke-minicheck:7b-fp16',
      'bespoke-minicheck:7b-q2_K',
      'bespoke-minicheck:7b-q3_K_L',
      'bespoke-minicheck:7b-q3_K_M',
      'bespoke-minicheck:7b-q3_K_S',
      'bespoke-minicheck:7b-q4_0',
      'bespoke-minicheck:7b-q4_1',
      'bespoke-minicheck:7b-q4_K_M',
      'bespoke-minicheck:7b-q4_K_S',
      'bespoke-minicheck:7b-q5_0',
      'bespoke-minicheck:7b-q5_1',
      'bespoke-minicheck:7b-q5_K_M',
      'bespoke-minicheck:7b-q5_K_S',
      'bespoke-minicheck:7b-q6_K',
      'bespoke-minicheck:7b-q8_0',
      'bespoke-minicheck:latest',
    ],
  },
  codebooga: {
    name: 'codebooga',
    type: 'chat',
    tags: [
      'codebooga:34b',
      'codebooga:34b-v0.1-fp16',
      'codebooga:34b-v0.1-q2_K',
      'codebooga:34b-v0.1-q3_K_L',
      'codebooga:34b-v0.1-q3_K_M',
      'codebooga:34b-v0.1-q3_K_S',
      'codebooga:34b-v0.1-q4_0',
      'codebooga:34b-v0.1-q4_1',
      'codebooga:34b-v0.1-q4_K_M',
      'codebooga:34b-v0.1-q5_0',
      'codebooga:34b-v0.1-q5_1',
      'codebooga:34b-v0.1-q5_K_M',
      'codebooga:34b-v0.1-q5_K_S',
      'codebooga:34b-v0.1-q6_K',
      'codebooga:34b-v0.1-q8_0',
      'codebooga:latest',
    ],
  },
  codegeex4: {
    name: 'codegeex4',
    type: 'chat',
    tags: [
      'codegeex4:9b',
      'codegeex4:9b-all-fp16',
      'codegeex4:9b-all-q2_K',
      'codegeex4:9b-all-q3_K_L',
      'codegeex4:9b-all-q3_K_M',
      'codegeex4:9b-all-q3_K_S',
      'codegeex4:9b-all-q4_0',
      'codegeex4:9b-all-q4_1',
      'codegeex4:9b-all-q4_K_M',
      'codegeex4:9b-all-q4_K_S',
      'codegeex4:9b-all-q5_0',
      'codegeex4:9b-all-q5_1',
      'codegeex4:9b-all-q5_K_M',
      'codegeex4:9b-all-q5_K_S',
      'codegeex4:9b-all-q6_K',
      'codegeex4:9b-all-q8_0',
      'codegeex4:latest',
    ],
  },
  codegemma: {
    name: 'codegemma',
    type: 'chat',
    tags: [
      'codegemma:2b',
      'codegemma:2b-code',
      'codegemma:2b-code-fp16',
      'codegemma:2b-code-q2_K',
      'codegemma:2b-code-q3_K_L',
      'codegemma:2b-code-q3_K_M',
      'codegemma:2b-code-q3_K_S',
      'codegemma:2b-code-q4_0',
      'codegemma:2b-code-q4_1',
      'codegemma:2b-code-q4_K_M',
      'codegemma:2b-code-q4_K_S',
      'codegemma:2b-code-q5_0',
      'codegemma:2b-code-q5_1',
      'codegemma:2b-code-q5_K_M',
      'codegemma:2b-code-q5_K_S',
      'codegemma:2b-code-q6_K',
      'codegemma:2b-code-q8_0',
      'codegemma:2b-code-v1.1-fp16',
      'codegemma:2b-code-v1.1-q2_K',
      'codegemma:2b-code-v1.1-q3_K_L',
      'codegemma:2b-code-v1.1-q3_K_M',
      'codegemma:2b-code-v1.1-q3_K_S',
      'codegemma:2b-code-v1.1-q4_0',
      'codegemma:2b-code-v1.1-q4_1',
      'codegemma:2b-code-v1.1-q4_K_M',
      'codegemma:2b-code-v1.1-q4_K_S',
      'codegemma:2b-code-v1.1-q5_0',
      'codegemma:2b-code-v1.1-q5_1',
      'codegemma:2b-code-v1.1-q5_K_M',
      'codegemma:2b-code-v1.1-q5_K_S',
      'codegemma:2b-code-v1.1-q6_K',
      'codegemma:2b-code-v1.1-q8_0',
      'codegemma:2b-v1.1',
      'codegemma:7b',
      'codegemma:7b-code',
      'codegemma:7b-code-fp16',
      'codegemma:7b-code-q2_K',
      'codegemma:7b-code-q3_K_L',
      'codegemma:7b-code-q3_K_M',
      'codegemma:7b-code-q3_K_S',
      'codegemma:7b-code-q4_0',
      'codegemma:7b-code-q4_1',
      'codegemma:7b-code-q4_K_M',
      'codegemma:7b-code-q4_K_S',
      'codegemma:7b-code-q5_0',
      'codegemma:7b-code-q5_1',
      'codegemma:7b-code-q5_K_M',
      'codegemma:7b-code-q5_K_S',
      'codegemma:7b-code-q6_K',
      'codegemma:7b-code-q8_0',
      'codegemma:7b-instruct',
      'codegemma:7b-instruct-fp16',
      'codegemma:7b-instruct-q2_K',
      'codegemma:7b-instruct-q3_K_L',
      'codegemma:7b-instruct-q3_K_M',
      'codegemma:7b-instruct-q3_K_S',
      'codegemma:7b-instruct-q4_0',
      'codegemma:7b-instruct-q4_1',
      'codegemma:7b-instruct-q4_K_M',
      'codegemma:7b-instruct-q4_K_S',
      'codegemma:7b-instruct-q5_0',
      'codegemma:7b-instruct-q5_1',
      'codegemma:7b-instruct-q5_K_M',
      'codegemma:7b-instruct-q5_K_S',
      'codegemma:7b-instruct-q6_K',
      'codegemma:7b-instruct-q8_0',
      'codegemma:7b-instruct-v1.1-fp16',
      'codegemma:7b-instruct-v1.1-q2_K',
      'codegemma:7b-instruct-v1.1-q3_K_L',
      'codegemma:7b-instruct-v1.1-q3_K_M',
      'codegemma:7b-instruct-v1.1-q3_K_S',
      'codegemma:7b-instruct-v1.1-q4_0',
      'codegemma:7b-instruct-v1.1-q4_1',
      'codegemma:7b-instruct-v1.1-q4_K_M',
      'codegemma:7b-instruct-v1.1-q4_K_S',
      'codegemma:7b-instruct-v1.1-q5_0',
      'codegemma:7b-instruct-v1.1-q5_1',
      'codegemma:7b-instruct-v1.1-q5_K_M',
      'codegemma:7b-instruct-v1.1-q5_K_S',
      'codegemma:7b-instruct-v1.1-q6_K',
      'codegemma:7b-instruct-v1.1-q8_0',
      'codegemma:7b-v1.1',
      'codegemma:code',
      'codegemma:instruct',
      'codegemma:latest',
    ],
  },
  codellama: {
    name: 'codellama',
    type: 'chat',
    tags: [
      'codellama:13b',
      'codellama:13b-code',
      'codellama:13b-code-fp16',
      'codellama:13b-code-q2_K',
      'codellama:13b-code-q3_K_L',
      'codellama:13b-code-q3_K_M',
      'codellama:13b-code-q3_K_S',
      'codellama:13b-code-q4_0',
      'codellama:13b-code-q4_1',
      'codellama:13b-code-q4_K_M',
      'codellama:13b-code-q4_K_S',
      'codellama:13b-code-q5_0',
      'codellama:13b-code-q5_1',
      'codellama:13b-code-q5_K_M',
      'codellama:13b-code-q5_K_S',
      'codellama:13b-code-q6_K',
      'codellama:13b-code-q8_0',
      'codellama:13b-instruct',
      'codellama:13b-instruct-fp16',
      'codellama:13b-instruct-q2_K',
      'codellama:13b-instruct-q3_K_L',
      'codellama:13b-instruct-q3_K_M',
      'codellama:13b-instruct-q3_K_S',
      'codellama:13b-instruct-q4_0',
      'codellama:13b-instruct-q4_1',
      'codellama:13b-instruct-q4_K_M',
      'codellama:13b-instruct-q4_K_S',
      'codellama:13b-instruct-q5_0',
      'codellama:13b-instruct-q5_1',
      'codellama:13b-instruct-q5_K_M',
      'codellama:13b-instruct-q5_K_S',
      'codellama:13b-instruct-q6_K',
      'codellama:13b-instruct-q8_0',
      'codellama:13b-python',
      'codellama:13b-python-fp16',
      'codellama:13b-python-q2_K',
      'codellama:13b-python-q3_K_L',
      'codellama:13b-python-q3_K_M',
      'codellama:13b-python-q3_K_S',
      'codellama:13b-python-q4_0',
      'codellama:13b-python-q4_1',
      'codellama:13b-python-q4_K_M',
      'codellama:13b-python-q4_K_S',
      'codellama:13b-python-q5_0',
      'codellama:13b-python-q5_1',
      'codellama:13b-python-q5_K_M',
      'codellama:13b-python-q5_K_S',
      'codellama:13b-python-q6_K',
      'codellama:13b-python-q8_0',
      'codellama:34b',
      'codellama:34b-code',
      'codellama:34b-code-q2_K',
      'codellama:34b-code-q3_K_L',
      'codellama:34b-code-q3_K_M',
      'codellama:34b-code-q3_K_S',
      'codellama:34b-code-q4_0',
      'codellama:34b-code-q4_1',
      'codellama:34b-code-q4_K_M',
      'codellama:34b-code-q4_K_S',
      'codellama:34b-code-q5_0',
      'codellama:34b-code-q5_1',
      'codellama:34b-code-q5_K_M',
      'codellama:34b-code-q5_K_S',
      'codellama:34b-code-q6_K',
      'codellama:34b-code-q8_0',
      'codellama:34b-instruct',
      'codellama:34b-instruct-fp16',
      'codellama:34b-instruct-q2_K',
      'codellama:34b-instruct-q3_K_L',
      'codellama:34b-instruct-q3_K_M',
      'codellama:34b-instruct-q3_K_S',
      'codellama:34b-instruct-q4_0',
      'codellama:34b-instruct-q4_1',
      'codellama:34b-instruct-q4_K_M',
      'codellama:34b-instruct-q4_K_S',
      'codellama:34b-instruct-q5_0',
      'codellama:34b-instruct-q5_1',
      'codellama:34b-instruct-q5_K_M',
      'codellama:34b-instruct-q5_K_S',
      'codellama:34b-instruct-q6_K',
      'codellama:34b-instruct-q8_0',
      'codellama:34b-python',
      'codellama:34b-python-fp16',
      'codellama:34b-python-q2_K',
      'codellama:34b-python-q3_K_L',
      'codellama:34b-python-q3_K_M',
      'codellama:34b-python-q3_K_S',
      'codellama:34b-python-q4_0',
      'codellama:34b-python-q4_1',
      'codellama:34b-python-q4_K_M',
      'codellama:34b-python-q4_K_S',
      'codellama:34b-python-q5_0',
      'codellama:34b-python-q5_1',
      'codellama:34b-python-q5_K_M',
      'codellama:34b-python-q5_K_S',
      'codellama:34b-python-q6_K',
      'codellama:34b-python-q8_0',
      'codellama:70b',
      'codellama:70b-code',
      'codellama:70b-code-fp16',
      'codellama:70b-code-q2_K',
      'codellama:70b-code-q3_K_L',
      'codellama:70b-code-q3_K_M',
      'codellama:70b-code-q3_K_S',
      'codellama:70b-code-q4_0',
      'codellama:70b-code-q4_1',
      'codellama:70b-code-q4_K_M',
      'codellama:70b-code-q4_K_S',
      'codellama:70b-code-q5_0',
      'codellama:70b-code-q5_1',
      'codellama:70b-code-q5_K_M',
      'codellama:70b-code-q5_K_S',
      'codellama:70b-code-q6_K',
      'codellama:70b-code-q8_0',
      'codellama:70b-instruct',
      'codellama:70b-instruct-fp16',
      'codellama:70b-instruct-q2_K',
      'codellama:70b-instruct-q3_K_L',
      'codellama:70b-instruct-q3_K_M',
      'codellama:70b-instruct-q3_K_S',
      'codellama:70b-instruct-q4_0',
      'codellama:70b-instruct-q4_1',
      'codellama:70b-instruct-q4_K_M',
      'codellama:70b-instruct-q4_K_S',
      'codellama:70b-instruct-q5_0',
      'codellama:70b-instruct-q5_1',
      'codellama:70b-instruct-q5_K_M',
      'codellama:70b-instruct-q5_K_S',
      'codellama:70b-instruct-q6_K',
      'codellama:70b-instruct-q8_0',
      'codellama:70b-python',
      'codellama:70b-python-fp16',
      'codellama:70b-python-q2_K',
      'codellama:70b-python-q3_K_L',
      'codellama:70b-python-q3_K_M',
      'codellama:70b-python-q3_K_S',
      'codellama:70b-python-q4_0',
      'codellama:70b-python-q4_1',
      'codellama:70b-python-q4_K_M',
      'codellama:70b-python-q4_K_S',
      'codellama:70b-python-q5_0',
      'codellama:70b-python-q5_1',
      'codellama:70b-python-q5_K_M',
      'codellama:70b-python-q5_K_S',
      'codellama:70b-python-q6_K',
      'codellama:70b-python-q8_0',
      'codellama:7b',
      'codellama:7b-code',
      'codellama:7b-code-fp16',
      'codellama:7b-code-q2_K',
      'codellama:7b-code-q3_K_L',
      'codellama:7b-code-q3_K_M',
      'codellama:7b-code-q3_K_S',
      'codellama:7b-code-q4_0',
      'codellama:7b-code-q4_1',
      'codellama:7b-code-q4_K_M',
      'codellama:7b-code-q4_K_S',
      'codellama:7b-code-q5_0',
      'codellama:7b-code-q5_1',
      'codellama:7b-code-q5_K_M',
      'codellama:7b-code-q5_K_S',
      'codellama:7b-code-q6_K',
      'codellama:7b-code-q8_0',
      'codellama:7b-instruct',
      'codellama:7b-instruct-fp16',
      'codellama:7b-instruct-q2_K',
      'codellama:7b-instruct-q3_K_L',
      'codellama:7b-instruct-q3_K_M',
      'codellama:7b-instruct-q3_K_S',
      'codellama:7b-instruct-q4_0',
      'codellama:7b-instruct-q4_1',
      'codellama:7b-instruct-q4_K_M',
      'codellama:7b-instruct-q4_K_S',
      'codellama:7b-instruct-q5_0',
      'codellama:7b-instruct-q5_1',
      'codellama:7b-instruct-q5_K_M',
      'codellama:7b-instruct-q5_K_S',
      'codellama:7b-instruct-q6_K',
      'codellama:7b-instruct-q8_0',
      'codellama:7b-python',
      'codellama:7b-python-fp16',
      'codellama:7b-python-q2_K',
      'codellama:7b-python-q3_K_L',
      'codellama:7b-python-q3_K_M',
      'codellama:7b-python-q3_K_S',
      'codellama:7b-python-q4_0',
      'codellama:7b-python-q4_1',
      'codellama:7b-python-q4_K_M',
      'codellama:7b-python-q4_K_S',
      'codellama:7b-python-q5_0',
      'codellama:7b-python-q5_1',
      'codellama:7b-python-q5_K_M',
      'codellama:7b-python-q5_K_S',
      'codellama:7b-python-q6_K',
      'codellama:7b-python-q8_0',
      'codellama:code',
      'codellama:instruct',
      'codellama:latest',
      'codellama:python',
    ],
  },
  codeqwen: {
    name: 'codeqwen',
    type: 'chat',
    tags: [
      'codeqwen:7b',
      'codeqwen:7b-chat',
      'codeqwen:7b-chat-v1.5-fp16',
      'codeqwen:7b-chat-v1.5-q2_K',
      'codeqwen:7b-chat-v1.5-q3_K_L',
      'codeqwen:7b-chat-v1.5-q3_K_M',
      'codeqwen:7b-chat-v1.5-q3_K_S',
      'codeqwen:7b-chat-v1.5-q4_0',
      'codeqwen:7b-chat-v1.5-q4_1',
      'codeqwen:7b-chat-v1.5-q4_K_M',
      'codeqwen:7b-chat-v1.5-q4_K_S',
      'codeqwen:7b-chat-v1.5-q5_0',
      'codeqwen:7b-chat-v1.5-q5_1',
      'codeqwen:7b-chat-v1.5-q5_K_M',
      'codeqwen:7b-chat-v1.5-q5_K_S',
      'codeqwen:7b-chat-v1.5-q6_K',
      'codeqwen:7b-chat-v1.5-q8_0',
      'codeqwen:7b-code',
      'codeqwen:7b-code-v1.5-fp16',
      'codeqwen:7b-code-v1.5-q4_0',
      'codeqwen:7b-code-v1.5-q4_1',
      'codeqwen:7b-code-v1.5-q5_0',
      'codeqwen:7b-code-v1.5-q5_1',
      'codeqwen:7b-code-v1.5-q8_0',
      'codeqwen:chat',
      'codeqwen:code',
      'codeqwen:latest',
      'codeqwen:v1.5',
      'codeqwen:v1.5-chat',
      'codeqwen:v1.5-code',
    ],
  },
  codestral: {
    name: 'codestral',
    type: 'chat',
    tags: [
      'codestral:22b',
      'codestral:22b-v0.1-q2_K',
      'codestral:22b-v0.1-q3_K_L',
      'codestral:22b-v0.1-q3_K_M',
      'codestral:22b-v0.1-q3_K_S',
      'codestral:22b-v0.1-q4_0',
      'codestral:22b-v0.1-q4_1',
      'codestral:22b-v0.1-q4_K_M',
      'codestral:22b-v0.1-q4_K_S',
      'codestral:22b-v0.1-q5_0',
      'codestral:22b-v0.1-q5_1',
      'codestral:22b-v0.1-q5_K_M',
      'codestral:22b-v0.1-q5_K_S',
      'codestral:22b-v0.1-q6_K',
      'codestral:22b-v0.1-q8_0',
      'codestral:latest',
      'codestral:v0.1',
    ],
  },
  codeup: {
    name: 'codeup',
    type: 'chat',
    tags: [
      'codeup:13b',
      'codeup:13b-llama2',
      'codeup:13b-llama2-chat',
      'codeup:13b-llama2-chat-fp16',
      'codeup:13b-llama2-chat-q2_K',
      'codeup:13b-llama2-chat-q3_K_L',
      'codeup:13b-llama2-chat-q3_K_M',
      'codeup:13b-llama2-chat-q3_K_S',
      'codeup:13b-llama2-chat-q4_0',
      'codeup:13b-llama2-chat-q4_1',
      'codeup:13b-llama2-chat-q4_K_M',
      'codeup:13b-llama2-chat-q4_K_S',
      'codeup:13b-llama2-chat-q5_0',
      'codeup:13b-llama2-chat-q5_1',
      'codeup:13b-llama2-chat-q5_K_M',
      'codeup:13b-llama2-chat-q5_K_S',
      'codeup:13b-llama2-chat-q6_K',
      'codeup:13b-llama2-chat-q8_0',
      'codeup:latest',
    ],
  },
  cogito: {
    name: 'cogito',
    type: 'chat',
    tags: [
      'cogito:14b',
      'cogito:14b-v1-preview-qwen-fp16',
      'cogito:14b-v1-preview-qwen-q4_K_M',
      'cogito:14b-v1-preview-qwen-q8_0',
      'cogito:32b',
      'cogito:32b-v1-preview-qwen-fp16',
      'cogito:32b-v1-preview-qwen-q4_K_M',
      'cogito:32b-v1-preview-qwen-q8_0',
      'cogito:3b',
      'cogito:3b-v1-preview-llama-fp16',
      'cogito:3b-v1-preview-llama-q4_K_M',
      'cogito:3b-v1-preview-llama-q8_0',
      'cogito:70b',
      'cogito:70b-v1-preview-llama-fp16',
      'cogito:70b-v1-preview-llama-q4_K_M',
      'cogito:70b-v1-preview-llama-q8_0',
      'cogito:8b',
      'cogito:8b-v1-preview-llama-q4_K_M',
      'cogito:8b-v1-preview-llama-q8_0',
      'cogito:latest',
    ],
  },
  'command-a': {
    name: 'command-a',
    type: 'chat',
    tags: [
      'command-a:111b',
      'command-a:111b-03-2025-fp16',
      'command-a:111b-03-2025-q4_K_M',
      'command-a:111b-03-2025-q8_0',
      'command-a:latest',
    ],
  },
  'command-r': {
    name: 'command-r',
    type: 'chat',
    tags: [
      'command-r:35b',
      'command-r:35b-08-2024-fp16',
      'command-r:35b-08-2024-q2_K',
      'command-r:35b-08-2024-q3_K_L',
      'command-r:35b-08-2024-q3_K_M',
      'command-r:35b-08-2024-q3_K_S',
      'command-r:35b-08-2024-q4_0',
      'command-r:35b-08-2024-q4_1',
      'command-r:35b-08-2024-q4_K_M',
      'command-r:35b-08-2024-q4_K_S',
      'command-r:35b-08-2024-q5_0',
      'command-r:35b-08-2024-q5_1',
      'command-r:35b-08-2024-q5_K_M',
      'command-r:35b-08-2024-q5_K_S',
      'command-r:35b-08-2024-q6_K',
      'command-r:35b-08-2024-q8_0',
      'command-r:35b-v0.1-fp16',
      'command-r:35b-v0.1-q2_K',
      'command-r:35b-v0.1-q3_K_L',
      'command-r:35b-v0.1-q3_K_M',
      'command-r:35b-v0.1-q3_K_S',
      'command-r:35b-v0.1-q4_0',
      'command-r:35b-v0.1-q4_1',
      'command-r:35b-v0.1-q4_K_M',
      'command-r:35b-v0.1-q4_K_S',
      'command-r:35b-v0.1-q5_1',
      'command-r:35b-v0.1-q5_K_M',
      'command-r:35b-v0.1-q5_K_S',
      'command-r:35b-v0.1-q6_K',
      'command-r:35b-v0.1-q8_0',
      'command-r:latest',
      'command-r:v0.1',
    ],
  },
  'command-r-plus': {
    name: 'command-r-plus',
    type: 'chat',
    tags: [
      'command-r-plus:104b',
      'command-r-plus:104b-08-2024-fp16',
      'command-r-plus:104b-08-2024-q2_K',
      'command-r-plus:104b-08-2024-q3_K_L',
      'command-r-plus:104b-08-2024-q3_K_M',
      'command-r-plus:104b-08-2024-q3_K_S',
      'command-r-plus:104b-08-2024-q4_0',
      'command-r-plus:104b-08-2024-q4_1',
      'command-r-plus:104b-08-2024-q4_K_M',
      'command-r-plus:104b-08-2024-q4_K_S',
      'command-r-plus:104b-08-2024-q5_0',
      'command-r-plus:104b-08-2024-q5_1',
      'command-r-plus:104b-08-2024-q5_K_M',
      'command-r-plus:104b-08-2024-q5_K_S',
      'command-r-plus:104b-08-2024-q6_K',
      'command-r-plus:104b-08-2024-q8_0',
      'command-r-plus:104b-fp16',
      'command-r-plus:104b-q2_K',
      'command-r-plus:104b-q4_0',
      'command-r-plus:104b-q8_0',
      'command-r-plus:latest',
    ],
  },
  'command-r7b': {
    name: 'command-r7b',
    type: 'chat',
    tags: [
      'command-r7b:7b',
      'command-r7b:7b-12-2024-fp16',
      'command-r7b:7b-12-2024-q4_K_M',
      'command-r7b:7b-12-2024-q8_0',
      'command-r7b:latest',
    ],
  },
  'command-r7b-arabic': {
    name: 'command-r7b-arabic',
    type: 'chat',
    tags: [
      'command-r7b-arabic:7b',
      'command-r7b-arabic:7b-02-2025-fp16',
      'command-r7b-arabic:7b-02-2025-q4_K_M',
      'command-r7b-arabic:7b-02-2025-q8_0',
      'command-r7b-arabic:latest',
    ],
  },
  dbrx: {
    name: 'dbrx',
    type: 'chat',
    tags: [
      'dbrx:132b',
      'dbrx:132b-instruct-fp16',
      'dbrx:132b-instruct-q2_K',
      'dbrx:132b-instruct-q4_0',
      'dbrx:132b-instruct-q8_0',
      'dbrx:instruct',
      'dbrx:latest',
    ],
  },
  deepcoder: {
    name: 'deepcoder',
    type: 'chat',
    tags: [
      'deepcoder:1.5b',
      'deepcoder:1.5b-preview-fp16',
      'deepcoder:1.5b-preview-q4_K_M',
      'deepcoder:1.5b-preview-q8_0',
      'deepcoder:14b',
      'deepcoder:14b-preview-fp16',
      'deepcoder:14b-preview-q4_K_M',
      'deepcoder:14b-preview-q8_0',
      'deepcoder:latest',
    ],
  },
  deepscaler: {
    name: 'deepscaler',
    type: 'chat',
    tags: [
      'deepscaler:1.5b',
      'deepscaler:1.5b-preview-fp16',
      'deepscaler:1.5b-preview-q4_K_M',
      'deepscaler:1.5b-preview-q8_0',
      'deepscaler:latest',
    ],
  },
  'deepseek-coder': {
    name: 'deepseek-coder',
    type: 'chat',
    tags: [
      'deepseek-coder:1.3b',
      'deepseek-coder:1.3b-base',
      'deepseek-coder:1.3b-base-fp16',
      'deepseek-coder:1.3b-base-q2_K',
      'deepseek-coder:1.3b-base-q3_K_L',
      'deepseek-coder:1.3b-base-q3_K_M',
      'deepseek-coder:1.3b-base-q3_K_S',
      'deepseek-coder:1.3b-base-q4_0',
      'deepseek-coder:1.3b-base-q4_1',
      'deepseek-coder:1.3b-base-q4_K_M',
      'deepseek-coder:1.3b-base-q4_K_S',
      'deepseek-coder:1.3b-base-q5_0',
      'deepseek-coder:1.3b-base-q5_1',
      'deepseek-coder:1.3b-base-q5_K_M',
      'deepseek-coder:1.3b-base-q5_K_S',
      'deepseek-coder:1.3b-base-q6_K',
      'deepseek-coder:1.3b-base-q8_0',
      'deepseek-coder:1.3b-instruct',
      'deepseek-coder:1.3b-instruct-fp16',
      'deepseek-coder:1.3b-instruct-q2_K',
      'deepseek-coder:1.3b-instruct-q3_K_L',
      'deepseek-coder:1.3b-instruct-q3_K_M',
      'deepseek-coder:1.3b-instruct-q3_K_S',
      'deepseek-coder:1.3b-instruct-q4_0',
      'deepseek-coder:1.3b-instruct-q4_1',
      'deepseek-coder:1.3b-instruct-q4_K_M',
      'deepseek-coder:1.3b-instruct-q4_K_S',
      'deepseek-coder:1.3b-instruct-q5_0',
      'deepseek-coder:1.3b-instruct-q5_1',
      'deepseek-coder:1.3b-instruct-q5_K_M',
      'deepseek-coder:1.3b-instruct-q5_K_S',
      'deepseek-coder:1.3b-instruct-q6_K',
      'deepseek-coder:1.3b-instruct-q8_0',
      'deepseek-coder:33b',
      'deepseek-coder:33b-base',
      'deepseek-coder:33b-base-fp16',
      'deepseek-coder:33b-base-q2_K',
      'deepseek-coder:33b-base-q3_K_L',
      'deepseek-coder:33b-base-q3_K_M',
      'deepseek-coder:33b-base-q3_K_S',
      'deepseek-coder:33b-base-q4_0',
      'deepseek-coder:33b-base-q4_1',
      'deepseek-coder:33b-base-q4_K_M',
      'deepseek-coder:33b-base-q4_K_S',
      'deepseek-coder:33b-base-q5_0',
      'deepseek-coder:33b-base-q5_1',
      'deepseek-coder:33b-base-q5_K_M',
      'deepseek-coder:33b-base-q5_K_S',
      'deepseek-coder:33b-base-q6_K',
      'deepseek-coder:33b-base-q8_0',
      'deepseek-coder:33b-instruct',
      'deepseek-coder:33b-instruct-fp16',
      'deepseek-coder:33b-instruct-q2_K',
      'deepseek-coder:33b-instruct-q3_K_L',
      'deepseek-coder:33b-instruct-q3_K_M',
      'deepseek-coder:33b-instruct-q3_K_S',
      'deepseek-coder:33b-instruct-q4_0',
      'deepseek-coder:33b-instruct-q4_1',
      'deepseek-coder:33b-instruct-q4_K_M',
      'deepseek-coder:33b-instruct-q4_K_S',
      'deepseek-coder:33b-instruct-q5_0',
      'deepseek-coder:33b-instruct-q5_1',
      'deepseek-coder:33b-instruct-q5_K_M',
      'deepseek-coder:33b-instruct-q5_K_S',
      'deepseek-coder:33b-instruct-q6_K',
      'deepseek-coder:33b-instruct-q8_0',
      'deepseek-coder:6.7b',
      'deepseek-coder:6.7b-base',
      'deepseek-coder:6.7b-base-fp16',
      'deepseek-coder:6.7b-base-q2_K',
      'deepseek-coder:6.7b-base-q3_K_L',
      'deepseek-coder:6.7b-base-q3_K_M',
      'deepseek-coder:6.7b-base-q3_K_S',
      'deepseek-coder:6.7b-base-q4_0',
      'deepseek-coder:6.7b-base-q4_1',
      'deepseek-coder:6.7b-base-q4_K_M',
      'deepseek-coder:6.7b-base-q4_K_S',
      'deepseek-coder:6.7b-base-q5_0',
      'deepseek-coder:6.7b-base-q5_1',
      'deepseek-coder:6.7b-base-q5_K_M',
      'deepseek-coder:6.7b-base-q5_K_S',
      'deepseek-coder:6.7b-base-q6_K',
      'deepseek-coder:6.7b-base-q8_0',
      'deepseek-coder:6.7b-instruct',
      'deepseek-coder:6.7b-instruct-fp16',
      'deepseek-coder:6.7b-instruct-q2_K',
      'deepseek-coder:6.7b-instruct-q3_K_L',
      'deepseek-coder:6.7b-instruct-q3_K_M',
      'deepseek-coder:6.7b-instruct-q3_K_S',
      'deepseek-coder:6.7b-instruct-q4_0',
      'deepseek-coder:6.7b-instruct-q4_1',
      'deepseek-coder:6.7b-instruct-q4_K_M',
      'deepseek-coder:6.7b-instruct-q4_K_S',
      'deepseek-coder:6.7b-instruct-q5_0',
      'deepseek-coder:6.7b-instruct-q5_1',
      'deepseek-coder:6.7b-instruct-q5_K_M',
      'deepseek-coder:6.7b-instruct-q5_K_S',
      'deepseek-coder:6.7b-instruct-q6_K',
      'deepseek-coder:6.7b-instruct-q8_0',
      'deepseek-coder:base',
      'deepseek-coder:instruct',
      'deepseek-coder:latest',
    ],
  },
  'deepseek-coder-v2': {
    name: 'deepseek-coder-v2',
    type: 'chat',
    tags: [
      'deepseek-coder-v2:16b',
      'deepseek-coder-v2:16b-lite-base-fp16',
      'deepseek-coder-v2:16b-lite-base-q2_K',
      'deepseek-coder-v2:16b-lite-base-q3_K_L',
      'deepseek-coder-v2:16b-lite-base-q3_K_M',
      'deepseek-coder-v2:16b-lite-base-q3_K_S',
      'deepseek-coder-v2:16b-lite-base-q4_0',
      'deepseek-coder-v2:16b-lite-base-q4_1',
      'deepseek-coder-v2:16b-lite-base-q4_K_M',
      'deepseek-coder-v2:16b-lite-base-q4_K_S',
      'deepseek-coder-v2:16b-lite-base-q5_0',
      'deepseek-coder-v2:16b-lite-base-q5_1',
      'deepseek-coder-v2:16b-lite-base-q5_K_M',
      'deepseek-coder-v2:16b-lite-base-q5_K_S',
      'deepseek-coder-v2:16b-lite-base-q6_K',
      'deepseek-coder-v2:16b-lite-base-q8_0',
      'deepseek-coder-v2:16b-lite-instruct-fp16',
      'deepseek-coder-v2:16b-lite-instruct-q2_K',
      'deepseek-coder-v2:16b-lite-instruct-q3_K_L',
      'deepseek-coder-v2:16b-lite-instruct-q3_K_M',
      'deepseek-coder-v2:16b-lite-instruct-q3_K_S',
      'deepseek-coder-v2:16b-lite-instruct-q4_0',
      'deepseek-coder-v2:16b-lite-instruct-q4_1',
      'deepseek-coder-v2:16b-lite-instruct-q4_K_M',
      'deepseek-coder-v2:16b-lite-instruct-q4_K_S',
      'deepseek-coder-v2:16b-lite-instruct-q5_0',
      'deepseek-coder-v2:16b-lite-instruct-q5_1',
      'deepseek-coder-v2:16b-lite-instruct-q5_K_M',
      'deepseek-coder-v2:16b-lite-instruct-q5_K_S',
      'deepseek-coder-v2:16b-lite-instruct-q6_K',
      'deepseek-coder-v2:16b-lite-instruct-q8_0',
      'deepseek-coder-v2:236b',
      'deepseek-coder-v2:236b-base-fp16',
      'deepseek-coder-v2:236b-base-q2_K',
      'deepseek-coder-v2:236b-base-q3_K_L',
      'deepseek-coder-v2:236b-base-q3_K_M',
      'deepseek-coder-v2:236b-base-q3_K_S',
      'deepseek-coder-v2:236b-base-q4_0',
      'deepseek-coder-v2:236b-base-q4_1',
      'deepseek-coder-v2:236b-base-q4_K_M',
      'deepseek-coder-v2:236b-base-q4_K_S',
      'deepseek-coder-v2:236b-base-q5_0',
      'deepseek-coder-v2:236b-base-q5_1',
      'deepseek-coder-v2:236b-base-q5_K_M',
      'deepseek-coder-v2:236b-base-q5_K_S',
      'deepseek-coder-v2:236b-base-q6_K',
      'deepseek-coder-v2:236b-base-q8_0',
      'deepseek-coder-v2:236b-instruct-fp16',
      'deepseek-coder-v2:236b-instruct-q2_K',
      'deepseek-coder-v2:236b-instruct-q3_K_L',
      'deepseek-coder-v2:236b-instruct-q3_K_M',
      'deepseek-coder-v2:236b-instruct-q3_K_S',
      'deepseek-coder-v2:236b-instruct-q4_0',
      'deepseek-coder-v2:236b-instruct-q4_1',
      'deepseek-coder-v2:236b-instruct-q4_K_M',
      'deepseek-coder-v2:236b-instruct-q4_K_S',
      'deepseek-coder-v2:236b-instruct-q5_0',
      'deepseek-coder-v2:236b-instruct-q5_1',
      'deepseek-coder-v2:236b-instruct-q5_K_M',
      'deepseek-coder-v2:236b-instruct-q5_K_S',
      'deepseek-coder-v2:236b-instruct-q6_K',
      'deepseek-coder-v2:236b-instruct-q8_0',
      'deepseek-coder-v2:latest',
      'deepseek-coder-v2:lite',
    ],
  },
  'deepseek-llm': {
    name: 'deepseek-llm',
    type: 'chat',
    tags: [
      'deepseek-llm:67b',
      'deepseek-llm:67b-base',
      'deepseek-llm:67b-base-fp16',
      'deepseek-llm:67b-base-q2_K',
      'deepseek-llm:67b-base-q3_K_L',
      'deepseek-llm:67b-base-q3_K_M',
      'deepseek-llm:67b-base-q3_K_S',
      'deepseek-llm:67b-base-q4_0',
      'deepseek-llm:67b-base-q4_1',
      'deepseek-llm:67b-base-q4_K_M',
      'deepseek-llm:67b-base-q4_K_S',
      'deepseek-llm:67b-base-q5_0',
      'deepseek-llm:67b-base-q5_1',
      'deepseek-llm:67b-base-q5_K_M',
      'deepseek-llm:67b-base-q5_K_S',
      'deepseek-llm:67b-base-q6_K',
      'deepseek-llm:67b-base-q8_0',
      'deepseek-llm:67b-chat',
      'deepseek-llm:67b-chat-fp16',
      'deepseek-llm:67b-chat-q2_K',
      'deepseek-llm:67b-chat-q3_K_L',
      'deepseek-llm:67b-chat-q3_K_M',
      'deepseek-llm:67b-chat-q3_K_S',
      'deepseek-llm:67b-chat-q4_0',
      'deepseek-llm:67b-chat-q4_1',
      'deepseek-llm:67b-chat-q4_K_M',
      'deepseek-llm:67b-chat-q4_K_S',
      'deepseek-llm:67b-chat-q5_0',
      'deepseek-llm:67b-chat-q5_1',
      'deepseek-llm:67b-chat-q5_K_S',
      'deepseek-llm:7b',
      'deepseek-llm:7b-base',
      'deepseek-llm:7b-base-fp16',
      'deepseek-llm:7b-base-q2_K',
      'deepseek-llm:7b-base-q3_K_L',
      'deepseek-llm:7b-base-q3_K_M',
      'deepseek-llm:7b-base-q3_K_S',
      'deepseek-llm:7b-base-q4_0',
      'deepseek-llm:7b-base-q4_1',
      'deepseek-llm:7b-base-q4_K_M',
      'deepseek-llm:7b-base-q4_K_S',
      'deepseek-llm:7b-base-q5_0',
      'deepseek-llm:7b-base-q5_1',
      'deepseek-llm:7b-base-q5_K_M',
      'deepseek-llm:7b-base-q5_K_S',
      'deepseek-llm:7b-base-q6_K',
      'deepseek-llm:7b-base-q8_0',
      'deepseek-llm:7b-chat',
      'deepseek-llm:7b-chat-fp16',
      'deepseek-llm:7b-chat-q2_K',
      'deepseek-llm:7b-chat-q3_K_L',
      'deepseek-llm:7b-chat-q3_K_M',
      'deepseek-llm:7b-chat-q3_K_S',
      'deepseek-llm:7b-chat-q4_0',
      'deepseek-llm:7b-chat-q4_1',
      'deepseek-llm:7b-chat-q4_K_M',
      'deepseek-llm:7b-chat-q4_K_S',
      'deepseek-llm:7b-chat-q5_0',
      'deepseek-llm:7b-chat-q5_1',
      'deepseek-llm:7b-chat-q5_K_M',
      'deepseek-llm:7b-chat-q5_K_S',
      'deepseek-llm:7b-chat-q6_K',
      'deepseek-llm:7b-chat-q8_0',
      'deepseek-llm:latest',
    ],
  },
  'deepseek-r1': {
    name: 'deepseek-r1',
    type: 'chat',
    tags: [
      'deepseek-r1:1.5b',
      'deepseek-r1:1.5b-qwen-distill-fp16',
      'deepseek-r1:1.5b-qwen-distill-q4_K_M',
      'deepseek-r1:1.5b-qwen-distill-q8_0',
      'deepseek-r1:14b',
      'deepseek-r1:14b-qwen-distill-fp16',
      'deepseek-r1:14b-qwen-distill-q4_K_M',
      'deepseek-r1:14b-qwen-distill-q8_0',
      'deepseek-r1:32b',
      'deepseek-r1:32b-qwen-distill-fp16',
      'deepseek-r1:32b-qwen-distill-q4_K_M',
      'deepseek-r1:32b-qwen-distill-q8_0',
      'deepseek-r1:671b',
      'deepseek-r1:671b-0528-fp16',
      'deepseek-r1:671b-0528-q4_K_M',
      'deepseek-r1:671b-0528-q8_0',
      'deepseek-r1:671b-fp16',
      'deepseek-r1:671b-q4_K_M',
      'deepseek-r1:671b-q8_0',
      'deepseek-r1:70b',
      'deepseek-r1:70b-llama-distill-fp16',
      'deepseek-r1:70b-llama-distill-q4_K_M',
      'deepseek-r1:70b-llama-distill-q8_0',
      'deepseek-r1:7b',
      'deepseek-r1:7b-qwen-distill-fp16',
      'deepseek-r1:7b-qwen-distill-q4_K_M',
      'deepseek-r1:7b-qwen-distill-q8_0',
      'deepseek-r1:8b',
      'deepseek-r1:8b-0528-qwen3-fp16',
      'deepseek-r1:8b-0528-qwen3-q4_K_M',
      'deepseek-r1:8b-0528-qwen3-q8_0',
      'deepseek-r1:8b-llama-distill-fp16',
      'deepseek-r1:8b-llama-distill-q4_K_M',
      'deepseek-r1:8b-llama-distill-q8_0',
      'deepseek-r1:latest',
    ],
  },
  'deepseek-v2': {
    name: 'deepseek-v2',
    type: 'chat',
    tags: [
      'deepseek-v2:16b',
      'deepseek-v2:16b-lite-chat-fp16',
      'deepseek-v2:16b-lite-chat-q2_K',
      'deepseek-v2:16b-lite-chat-q3_K_L',
      'deepseek-v2:16b-lite-chat-q3_K_M',
      'deepseek-v2:16b-lite-chat-q3_K_S',
      'deepseek-v2:16b-lite-chat-q4_0',
      'deepseek-v2:16b-lite-chat-q4_1',
      'deepseek-v2:16b-lite-chat-q4_K_M',
      'deepseek-v2:16b-lite-chat-q4_K_S',
      'deepseek-v2:16b-lite-chat-q5_0',
      'deepseek-v2:16b-lite-chat-q5_1',
      'deepseek-v2:16b-lite-chat-q5_K_M',
      'deepseek-v2:16b-lite-chat-q5_K_S',
      'deepseek-v2:16b-lite-chat-q6_K',
      'deepseek-v2:16b-lite-chat-q8_0',
      'deepseek-v2:236b',
      'deepseek-v2:236b-chat-fp16',
      'deepseek-v2:236b-chat-q2_K',
      'deepseek-v2:236b-chat-q3_K_L',
      'deepseek-v2:236b-chat-q3_K_M',
      'deepseek-v2:236b-chat-q3_K_S',
      'deepseek-v2:236b-chat-q4_0',
      'deepseek-v2:236b-chat-q4_1',
      'deepseek-v2:236b-chat-q4_K_M',
      'deepseek-v2:236b-chat-q4_K_S',
      'deepseek-v2:236b-chat-q5_0',
      'deepseek-v2:236b-chat-q5_1',
      'deepseek-v2:236b-chat-q5_K_M',
      'deepseek-v2:236b-chat-q5_K_S',
      'deepseek-v2:236b-chat-q6_K',
      'deepseek-v2:236b-chat-q8_0',
      'deepseek-v2:latest',
      'deepseek-v2:lite',
    ],
  },
  'deepseek-v2.5': {
    name: 'deepseek-v2.5',
    type: 'chat',
    tags: [
      'deepseek-v2.5:236b',
      'deepseek-v2.5:236b-q4_0',
      'deepseek-v2.5:236b-q4_1',
      'deepseek-v2.5:236b-q5_0',
      'deepseek-v2.5:236b-q5_1',
      'deepseek-v2.5:236b-q8_0',
      'deepseek-v2.5:latest',
    ],
  },
  'deepseek-v3': {
    name: 'deepseek-v3',
    type: 'chat',
    tags: [
      'deepseek-v3:671b',
      'deepseek-v3:671b-fp16',
      'deepseek-v3:671b-q4_K_M',
      'deepseek-v3:671b-q8_0',
      'deepseek-v3:latest',
    ],
  },
  devstral: {
    name: 'devstral',
    type: 'chat',
    tags: [
      'devstral:24b',
      'devstral:24b-small-2505-fp16',
      'devstral:24b-small-2505-q4_K_M',
      'devstral:24b-small-2505-q8_0',
      'devstral:latest',
    ],
  },
  'dolphin-llama3': {
    name: 'dolphin-llama3',
    type: 'chat',
    tags: [
      'dolphin-llama3:70b',
      'dolphin-llama3:70b-v2.9',
      'dolphin-llama3:70b-v2.9-fp16',
      'dolphin-llama3:70b-v2.9-q2_K',
      'dolphin-llama3:70b-v2.9-q3_K_L',
      'dolphin-llama3:70b-v2.9-q3_K_M',
      'dolphin-llama3:70b-v2.9-q3_K_S',
      'dolphin-llama3:70b-v2.9-q4_0',
      'dolphin-llama3:70b-v2.9-q4_1',
      'dolphin-llama3:70b-v2.9-q4_K_M',
      'dolphin-llama3:70b-v2.9-q4_K_S',
      'dolphin-llama3:70b-v2.9-q5_0',
      'dolphin-llama3:70b-v2.9-q5_1',
      'dolphin-llama3:70b-v2.9-q5_K_M',
      'dolphin-llama3:70b-v2.9-q5_K_S',
      'dolphin-llama3:70b-v2.9-q6_K',
      'dolphin-llama3:70b-v2.9-q8_0',
      'dolphin-llama3:8b',
      'dolphin-llama3:8b-256k',
      'dolphin-llama3:8b-256k-v2.9',
      'dolphin-llama3:8b-256k-v2.9-fp16',
      'dolphin-llama3:8b-256k-v2.9-q2_K',
      'dolphin-llama3:8b-256k-v2.9-q3_K_L',
      'dolphin-llama3:8b-256k-v2.9-q3_K_M',
      'dolphin-llama3:8b-256k-v2.9-q3_K_S',
      'dolphin-llama3:8b-256k-v2.9-q4_0',
      'dolphin-llama3:8b-256k-v2.9-q4_1',
      'dolphin-llama3:8b-256k-v2.9-q4_K_M',
      'dolphin-llama3:8b-256k-v2.9-q4_K_S',
      'dolphin-llama3:8b-256k-v2.9-q5_0',
      'dolphin-llama3:8b-256k-v2.9-q5_1',
      'dolphin-llama3:8b-256k-v2.9-q5_K_M',
      'dolphin-llama3:8b-256k-v2.9-q5_K_S',
      'dolphin-llama3:8b-256k-v2.9-q6_K',
      'dolphin-llama3:8b-256k-v2.9-q8_0',
      'dolphin-llama3:8b-v2.9',
      'dolphin-llama3:8b-v2.9-fp16',
      'dolphin-llama3:8b-v2.9-q2_K',
      'dolphin-llama3:8b-v2.9-q3_K_L',
      'dolphin-llama3:8b-v2.9-q3_K_M',
      'dolphin-llama3:8b-v2.9-q3_K_S',
      'dolphin-llama3:8b-v2.9-q4_0',
      'dolphin-llama3:8b-v2.9-q4_1',
      'dolphin-llama3:8b-v2.9-q4_K_M',
      'dolphin-llama3:8b-v2.9-q4_K_S',
      'dolphin-llama3:8b-v2.9-q5_0',
      'dolphin-llama3:8b-v2.9-q5_1',
      'dolphin-llama3:8b-v2.9-q5_K_M',
      'dolphin-llama3:8b-v2.9-q5_K_S',
      'dolphin-llama3:8b-v2.9-q6_K',
      'dolphin-llama3:8b-v2.9-q8_0',
      'dolphin-llama3:latest',
      'dolphin-llama3:v2.9',
    ],
  },
  'dolphin-mistral': {
    name: 'dolphin-mistral',
    type: 'chat',
    tags: [
      'dolphin-mistral:7b',
      'dolphin-mistral:7b-v2',
      'dolphin-mistral:7b-v2-fp16',
      'dolphin-mistral:7b-v2-q2_K',
      'dolphin-mistral:7b-v2-q3_K_L',
      'dolphin-mistral:7b-v2-q3_K_M',
      'dolphin-mistral:7b-v2-q3_K_S',
      'dolphin-mistral:7b-v2-q4_0',
      'dolphin-mistral:7b-v2-q4_1',
      'dolphin-mistral:7b-v2-q4_K_M',
      'dolphin-mistral:7b-v2-q4_K_S',
      'dolphin-mistral:7b-v2-q5_0',
      'dolphin-mistral:7b-v2-q5_1',
      'dolphin-mistral:7b-v2-q5_K_M',
      'dolphin-mistral:7b-v2-q5_K_S',
      'dolphin-mistral:7b-v2-q6_K',
      'dolphin-mistral:7b-v2-q8_0',
      'dolphin-mistral:7b-v2.1',
      'dolphin-mistral:7b-v2.1-fp16',
      'dolphin-mistral:7b-v2.1-q2_K',
      'dolphin-mistral:7b-v2.1-q3_K_L',
      'dolphin-mistral:7b-v2.1-q3_K_M',
      'dolphin-mistral:7b-v2.1-q3_K_S',
      'dolphin-mistral:7b-v2.1-q4_0',
      'dolphin-mistral:7b-v2.1-q4_1',
      'dolphin-mistral:7b-v2.1-q4_K_M',
      'dolphin-mistral:7b-v2.1-q4_K_S',
      'dolphin-mistral:7b-v2.1-q5_0',
      'dolphin-mistral:7b-v2.1-q5_1',
      'dolphin-mistral:7b-v2.1-q5_K_M',
      'dolphin-mistral:7b-v2.1-q5_K_S',
      'dolphin-mistral:7b-v2.1-q6_K',
      'dolphin-mistral:7b-v2.1-q8_0',
      'dolphin-mistral:7b-v2.2',
      'dolphin-mistral:7b-v2.2-fp16',
      'dolphin-mistral:7b-v2.2-q2_K',
      'dolphin-mistral:7b-v2.2-q3_K_L',
      'dolphin-mistral:7b-v2.2-q3_K_M',
      'dolphin-mistral:7b-v2.2-q3_K_S',
      'dolphin-mistral:7b-v2.2-q4_0',
      'dolphin-mistral:7b-v2.2-q4_1',
      'dolphin-mistral:7b-v2.2-q4_K_M',
      'dolphin-mistral:7b-v2.2-q4_K_S',
      'dolphin-mistral:7b-v2.2-q5_0',
      'dolphin-mistral:7b-v2.2-q5_1',
      'dolphin-mistral:7b-v2.2-q5_K_M',
      'dolphin-mistral:7b-v2.2-q5_K_S',
      'dolphin-mistral:7b-v2.2-q6_K',
      'dolphin-mistral:7b-v2.2-q8_0',
      'dolphin-mistral:7b-v2.2.1',
      'dolphin-mistral:7b-v2.2.1-fp16',
      'dolphin-mistral:7b-v2.2.1-q2_K',
      'dolphin-mistral:7b-v2.2.1-q3_K_L',
      'dolphin-mistral:7b-v2.2.1-q3_K_M',
      'dolphin-mistral:7b-v2.2.1-q3_K_S',
      'dolphin-mistral:7b-v2.2.1-q4_0',
      'dolphin-mistral:7b-v2.2.1-q4_1',
      'dolphin-mistral:7b-v2.2.1-q4_K_M',
      'dolphin-mistral:7b-v2.2.1-q4_K_S',
      'dolphin-mistral:7b-v2.2.1-q5_0',
      'dolphin-mistral:7b-v2.2.1-q5_1',
      'dolphin-mistral:7b-v2.2.1-q5_K_M',
      'dolphin-mistral:7b-v2.2.1-q5_K_S',
      'dolphin-mistral:7b-v2.2.1-q6_K',
      'dolphin-mistral:7b-v2.2.1-q8_0',
      'dolphin-mistral:7b-v2.6',
      'dolphin-mistral:7b-v2.6-dpo-laser',
      'dolphin-mistral:7b-v2.6-dpo-laser-fp16',
      'dolphin-mistral:7b-v2.6-dpo-laser-q2_K',
      'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_L',
      'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_M',
      'dolphin-mistral:7b-v2.6-dpo-laser-q3_K_S',
      'dolphin-mistral:7b-v2.6-dpo-laser-q4_0',
      'dolphin-mistral:7b-v2.6-dpo-laser-q4_1',
      'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_M',
      'dolphin-mistral:7b-v2.6-dpo-laser-q4_K_S',
      'dolphin-mistral:7b-v2.6-dpo-laser-q5_0',
      'dolphin-mistral:7b-v2.6-dpo-laser-q5_1',
      'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_M',
      'dolphin-mistral:7b-v2.6-dpo-laser-q5_K_S',
      'dolphin-mistral:7b-v2.6-dpo-laser-q6_K',
      'dolphin-mistral:7b-v2.6-dpo-laser-q8_0',
      'dolphin-mistral:7b-v2.6-fp16',
      'dolphin-mistral:7b-v2.6-q2_K',
      'dolphin-mistral:7b-v2.6-q3_K_L',
      'dolphin-mistral:7b-v2.6-q3_K_M',
      'dolphin-mistral:7b-v2.6-q3_K_S',
      'dolphin-mistral:7b-v2.6-q4_0',
      'dolphin-mistral:7b-v2.6-q4_1',
      'dolphin-mistral:7b-v2.6-q4_K_M',
      'dolphin-mistral:7b-v2.6-q4_K_S',
      'dolphin-mistral:7b-v2.6-q5_0',
      'dolphin-mistral:7b-v2.6-q5_1',
      'dolphin-mistral:7b-v2.6-q5_K_M',
      'dolphin-mistral:7b-v2.6-q5_K_S',
      'dolphin-mistral:7b-v2.6-q6_K',
      'dolphin-mistral:7b-v2.6-q8_0',
      'dolphin-mistral:7b-v2.8',
      'dolphin-mistral:7b-v2.8-fp16',
      'dolphin-mistral:7b-v2.8-q2_K',
      'dolphin-mistral:7b-v2.8-q3_K_L',
      'dolphin-mistral:7b-v2.8-q3_K_M',
      'dolphin-mistral:7b-v2.8-q3_K_S',
      'dolphin-mistral:7b-v2.8-q4_0',
      'dolphin-mistral:7b-v2.8-q4_1',
      'dolphin-mistral:7b-v2.8-q4_K_M',
      'dolphin-mistral:7b-v2.8-q4_K_S',
      'dolphin-mistral:7b-v2.8-q5_0',
      'dolphin-mistral:7b-v2.8-q5_1',
      'dolphin-mistral:7b-v2.8-q5_K_M',
      'dolphin-mistral:7b-v2.8-q5_K_S',
      'dolphin-mistral:7b-v2.8-q6_K',
      'dolphin-mistral:7b-v2.8-q8_0',
      'dolphin-mistral:latest',
      'dolphin-mistral:v2',
      'dolphin-mistral:v2.1',
      'dolphin-mistral:v2.2',
      'dolphin-mistral:v2.2.1',
      'dolphin-mistral:v2.6',
      'dolphin-mistral:v2.8',
    ],
  },
  'dolphin-mixtral': {
    name: 'dolphin-mixtral',
    type: 'chat',
    tags: [
      'dolphin-mixtral:8x22b',
      'dolphin-mixtral:8x22b-v2.9',
      'dolphin-mixtral:8x22b-v2.9-fp16',
      'dolphin-mixtral:8x22b-v2.9-q2_K',
      'dolphin-mixtral:8x22b-v2.9-q3_K_L',
      'dolphin-mixtral:8x22b-v2.9-q3_K_M',
      'dolphin-mixtral:8x22b-v2.9-q3_K_S',
      'dolphin-mixtral:8x22b-v2.9-q4_0',
      'dolphin-mixtral:8x22b-v2.9-q4_1',
      'dolphin-mixtral:8x22b-v2.9-q4_K_M',
      'dolphin-mixtral:8x22b-v2.9-q4_K_S',
      'dolphin-mixtral:8x22b-v2.9-q5_0',
      'dolphin-mixtral:8x22b-v2.9-q5_1',
      'dolphin-mixtral:8x22b-v2.9-q5_K_M',
      'dolphin-mixtral:8x22b-v2.9-q5_K_S',
      'dolphin-mixtral:8x22b-v2.9-q6_K',
      'dolphin-mixtral:8x22b-v2.9-q8_0',
      'dolphin-mixtral:8x7b',
      'dolphin-mixtral:8x7b-v2.5',
      'dolphin-mixtral:8x7b-v2.5-fp16',
      'dolphin-mixtral:8x7b-v2.5-q2_K',
      'dolphin-mixtral:8x7b-v2.5-q3_K_L',
      'dolphin-mixtral:8x7b-v2.5-q3_K_M',
      'dolphin-mixtral:8x7b-v2.5-q3_K_S',
      'dolphin-mixtral:8x7b-v2.5-q4_0',
      'dolphin-mixtral:8x7b-v2.5-q4_1',
      'dolphin-mixtral:8x7b-v2.5-q4_K_M',
      'dolphin-mixtral:8x7b-v2.5-q4_K_S',
      'dolphin-mixtral:8x7b-v2.5-q5_0',
      'dolphin-mixtral:8x7b-v2.5-q5_1',
      'dolphin-mixtral:8x7b-v2.5-q5_K_M',
      'dolphin-mixtral:8x7b-v2.5-q5_K_S',
      'dolphin-mixtral:8x7b-v2.5-q6_K',
      'dolphin-mixtral:8x7b-v2.5-q8_0',
      'dolphin-mixtral:8x7b-v2.6',
      'dolphin-mixtral:8x7b-v2.6-fp16',
      'dolphin-mixtral:8x7b-v2.6-q2_K',
      'dolphin-mixtral:8x7b-v2.6-q3_K_L',
      'dolphin-mixtral:8x7b-v2.6-q3_K_M',
      'dolphin-mixtral:8x7b-v2.6-q3_K_S',
      'dolphin-mixtral:8x7b-v2.6-q4_0',
      'dolphin-mixtral:8x7b-v2.6-q4_1',
      'dolphin-mixtral:8x7b-v2.6-q4_K_M',
      'dolphin-mixtral:8x7b-v2.6-q4_K_S',
      'dolphin-mixtral:8x7b-v2.6-q5_0',
      'dolphin-mixtral:8x7b-v2.6-q5_1',
      'dolphin-mixtral:8x7b-v2.6-q5_K_M',
      'dolphin-mixtral:8x7b-v2.6-q5_K_S',
      'dolphin-mixtral:8x7b-v2.6-q6_K',
      'dolphin-mixtral:8x7b-v2.6-q8_0',
      'dolphin-mixtral:8x7b-v2.7',
      'dolphin-mixtral:8x7b-v2.7-fp16',
      'dolphin-mixtral:8x7b-v2.7-q2_K',
      'dolphin-mixtral:8x7b-v2.7-q3_K_L',
      'dolphin-mixtral:8x7b-v2.7-q3_K_M',
      'dolphin-mixtral:8x7b-v2.7-q3_K_S',
      'dolphin-mixtral:8x7b-v2.7-q4_0',
      'dolphin-mixtral:8x7b-v2.7-q4_1',
      'dolphin-mixtral:8x7b-v2.7-q4_K_M',
      'dolphin-mixtral:8x7b-v2.7-q4_K_S',
      'dolphin-mixtral:8x7b-v2.7-q5_0',
      'dolphin-mixtral:8x7b-v2.7-q5_1',
      'dolphin-mixtral:8x7b-v2.7-q5_K_M',
      'dolphin-mixtral:8x7b-v2.7-q5_K_S',
      'dolphin-mixtral:8x7b-v2.7-q6_K',
      'dolphin-mixtral:8x7b-v2.7-q8_0',
      'dolphin-mixtral:latest',
      'dolphin-mixtral:v2.5',
      'dolphin-mixtral:v2.6',
      'dolphin-mixtral:v2.7',
    ],
  },
  'dolphin-phi': {
    name: 'dolphin-phi',
    type: 'chat',
    tags: [
      'dolphin-phi:2.7b',
      'dolphin-phi:2.7b-v2.6',
      'dolphin-phi:2.7b-v2.6-q2_K',
      'dolphin-phi:2.7b-v2.6-q3_K_L',
      'dolphin-phi:2.7b-v2.6-q3_K_M',
      'dolphin-phi:2.7b-v2.6-q3_K_S',
      'dolphin-phi:2.7b-v2.6-q4_0',
      'dolphin-phi:2.7b-v2.6-q4_K_M',
      'dolphin-phi:2.7b-v2.6-q4_K_S',
      'dolphin-phi:2.7b-v2.6-q5_0',
      'dolphin-phi:2.7b-v2.6-q5_K_M',
      'dolphin-phi:2.7b-v2.6-q5_K_S',
      'dolphin-phi:2.7b-v2.6-q6_K',
      'dolphin-phi:2.7b-v2.6-q8_0',
      'dolphin-phi:latest',
    ],
  },
  dolphin3: {
    name: 'dolphin3',
    type: 'chat',
    tags: [
      'dolphin3:8b',
      'dolphin3:8b-llama3.1-fp16',
      'dolphin3:8b-llama3.1-q4_K_M',
      'dolphin3:8b-llama3.1-q8_0',
      'dolphin3:latest',
    ],
  },
  dolphincoder: {
    name: 'dolphincoder',
    type: 'chat',
    tags: [
      'dolphincoder:15b',
      'dolphincoder:15b-starcoder2',
      'dolphincoder:15b-starcoder2-fp16',
      'dolphincoder:15b-starcoder2-q2_K',
      'dolphincoder:15b-starcoder2-q3_K_L',
      'dolphincoder:15b-starcoder2-q3_K_M',
      'dolphincoder:15b-starcoder2-q3_K_S',
      'dolphincoder:15b-starcoder2-q4_0',
      'dolphincoder:15b-starcoder2-q4_1',
      'dolphincoder:15b-starcoder2-q4_K_M',
      'dolphincoder:15b-starcoder2-q4_K_S',
      'dolphincoder:15b-starcoder2-q5_0',
      'dolphincoder:15b-starcoder2-q5_1',
      'dolphincoder:15b-starcoder2-q5_K_M',
      'dolphincoder:15b-starcoder2-q5_K_S',
      'dolphincoder:15b-starcoder2-q6_K',
      'dolphincoder:15b-starcoder2-q8_0',
      'dolphincoder:7b',
      'dolphincoder:7b-starcoder2',
      'dolphincoder:7b-starcoder2-fp16',
      'dolphincoder:7b-starcoder2-q2_K',
      'dolphincoder:7b-starcoder2-q3_K_L',
      'dolphincoder:7b-starcoder2-q3_K_M',
      'dolphincoder:7b-starcoder2-q3_K_S',
      'dolphincoder:7b-starcoder2-q4_0',
      'dolphincoder:7b-starcoder2-q4_1',
      'dolphincoder:7b-starcoder2-q4_K_M',
      'dolphincoder:7b-starcoder2-q4_K_S',
      'dolphincoder:7b-starcoder2-q5_0',
      'dolphincoder:7b-starcoder2-q5_1',
      'dolphincoder:7b-starcoder2-q5_K_M',
      'dolphincoder:7b-starcoder2-q5_K_S',
      'dolphincoder:7b-starcoder2-q6_K',
      'dolphincoder:7b-starcoder2-q8_0',
      'dolphincoder:latest',
    ],
  },
  'duckdb-nsql': {
    name: 'duckdb-nsql',
    type: 'chat',
    tags: [
      'duckdb-nsql:7b',
      'duckdb-nsql:7b-fp16',
      'duckdb-nsql:7b-q2_K',
      'duckdb-nsql:7b-q3_K_L',
      'duckdb-nsql:7b-q3_K_M',
      'duckdb-nsql:7b-q3_K_S',
      'duckdb-nsql:7b-q4_0',
      'duckdb-nsql:7b-q4_1',
      'duckdb-nsql:7b-q4_K_M',
      'duckdb-nsql:7b-q4_K_S',
      'duckdb-nsql:7b-q5_0',
      'duckdb-nsql:7b-q5_1',
      'duckdb-nsql:7b-q5_K_M',
      'duckdb-nsql:7b-q5_K_S',
      'duckdb-nsql:7b-q6_K',
      'duckdb-nsql:7b-q8_0',
      'duckdb-nsql:latest',
    ],
  },
  everythinglm: {
    name: 'everythinglm',
    type: 'chat',
    tags: [
      'everythinglm:13b',
      'everythinglm:13b-16k',
      'everythinglm:13b-16k-fp16',
      'everythinglm:13b-16k-q2_K',
      'everythinglm:13b-16k-q3_K_L',
      'everythinglm:13b-16k-q3_K_M',
      'everythinglm:13b-16k-q3_K_S',
      'everythinglm:13b-16k-q4_0',
      'everythinglm:13b-16k-q4_1',
      'everythinglm:13b-16k-q4_K_M',
      'everythinglm:13b-16k-q4_K_S',
      'everythinglm:13b-16k-q5_0',
      'everythinglm:13b-16k-q5_1',
      'everythinglm:13b-16k-q5_K_M',
      'everythinglm:13b-16k-q5_K_S',
      'everythinglm:13b-16k-q6_K',
      'everythinglm:13b-16k-q8_0',
      'everythinglm:latest',
    ],
  },
  'exaone-deep': {
    name: 'exaone-deep',
    type: 'chat',
    tags: [
      'exaone-deep:2.4b',
      'exaone-deep:2.4b-fp16',
      'exaone-deep:2.4b-q4_K_M',
      'exaone-deep:2.4b-q8_0',
      'exaone-deep:32b',
      'exaone-deep:32b-fp16',
      'exaone-deep:32b-q4_K_M',
      'exaone-deep:32b-q8_0',
      'exaone-deep:7.8b',
      'exaone-deep:7.8b-fp16',
      'exaone-deep:7.8b-q4_K_M',
      'exaone-deep:7.8b-q8_0',
      'exaone-deep:latest',
    ],
  },
  'exaone3.5': {
    name: 'exaone3.5',
    type: 'chat',
    tags: [
      'exaone3.5:2.4b',
      'exaone3.5:2.4b-instruct-fp16',
      'exaone3.5:2.4b-instruct-q4_K_M',
      'exaone3.5:2.4b-instruct-q8_0',
      'exaone3.5:32b',
      'exaone3.5:32b-instruct-fp16',
      'exaone3.5:32b-instruct-q4_K_M',
      'exaone3.5:32b-instruct-q8_0',
      'exaone3.5:7.8b',
      'exaone3.5:7.8b-instruct-fp16',
      'exaone3.5:7.8b-instruct-q4_K_M',
      'exaone3.5:7.8b-instruct-q8_0',
      'exaone3.5:latest',
    ],
  },
  falcon: {
    name: 'falcon',
    type: 'chat',
    tags: [
      'falcon:180b',
      'falcon:180b-chat',
      'falcon:180b-chat-q4_0',
      'falcon:180b-text',
      'falcon:180b-text-q4_0',
      'falcon:40b',
      'falcon:40b-instruct',
      'falcon:40b-instruct-fp16',
      'falcon:40b-instruct-q4_0',
      'falcon:40b-instruct-q4_1',
      'falcon:40b-instruct-q5_0',
      'falcon:40b-instruct-q5_1',
      'falcon:40b-instruct-q8_0',
      'falcon:40b-text',
      'falcon:40b-text-fp16',
      'falcon:40b-text-q4_0',
      'falcon:40b-text-q4_1',
      'falcon:40b-text-q5_0',
      'falcon:40b-text-q5_1',
      'falcon:40b-text-q8_0',
      'falcon:7b',
      'falcon:7b-instruct',
      'falcon:7b-instruct-fp16',
      'falcon:7b-instruct-q4_0',
      'falcon:7b-instruct-q4_1',
      'falcon:7b-instruct-q5_0',
      'falcon:7b-instruct-q5_1',
      'falcon:7b-instruct-q8_0',
      'falcon:7b-text',
      'falcon:7b-text-fp16',
      'falcon:7b-text-q4_0',
      'falcon:7b-text-q4_1',
      'falcon:7b-text-q5_0',
      'falcon:7b-text-q5_1',
      'falcon:7b-text-q8_0',
      'falcon:instruct',
      'falcon:latest',
      'falcon:text',
    ],
  },
  falcon2: {
    name: 'falcon2',
    type: 'chat',
    tags: [
      'falcon2:11b',
      'falcon2:11b-fp16',
      'falcon2:11b-q2_K',
      'falcon2:11b-q3_K_L',
      'falcon2:11b-q3_K_M',
      'falcon2:11b-q3_K_S',
      'falcon2:11b-q4_0',
      'falcon2:11b-q4_1',
      'falcon2:11b-q4_K_M',
      'falcon2:11b-q4_K_S',
      'falcon2:11b-q5_0',
      'falcon2:11b-q5_1',
      'falcon2:11b-q5_K_M',
      'falcon2:11b-q5_K_S',
      'falcon2:11b-q6_K',
      'falcon2:11b-q8_0',
      'falcon2:latest',
    ],
  },
  falcon3: {
    name: 'falcon3',
    type: 'chat',
    tags: [
      'falcon3:10b',
      'falcon3:10b-instruct-fp16',
      'falcon3:10b-instruct-q4_K_M',
      'falcon3:10b-instruct-q8_0',
      'falcon3:1b',
      'falcon3:1b-instruct-fp16',
      'falcon3:1b-instruct-q4_K_M',
      'falcon3:1b-instruct-q8_0',
      'falcon3:3b',
      'falcon3:3b-instruct-fp16',
      'falcon3:3b-instruct-q4_K_M',
      'falcon3:3b-instruct-q8_0',
      'falcon3:7b',
      'falcon3:7b-instruct-fp16',
      'falcon3:7b-instruct-q4_K_M',
      'falcon3:7b-instruct-q8_0',
      'falcon3:latest',
    ],
  },
  'firefunction-v2': {
    name: 'firefunction-v2',
    type: 'chat',
    tags: [
      'firefunction-v2:70b',
      'firefunction-v2:70b-fp16',
      'firefunction-v2:70b-q2_K',
      'firefunction-v2:70b-q3_K_L',
      'firefunction-v2:70b-q3_K_M',
      'firefunction-v2:70b-q3_K_S',
      'firefunction-v2:70b-q4_0',
      'firefunction-v2:70b-q4_1',
      'firefunction-v2:70b-q4_K_M',
      'firefunction-v2:70b-q4_K_S',
      'firefunction-v2:70b-q5_0',
      'firefunction-v2:70b-q5_1',
      'firefunction-v2:70b-q5_K_M',
      'firefunction-v2:70b-q5_K_S',
      'firefunction-v2:70b-q6_K',
      'firefunction-v2:70b-q8_0',
      'firefunction-v2:latest',
    ],
  },
  gemma: {
    name: 'gemma',
    type: 'chat',
    tags: [
      'gemma:2b',
      'gemma:2b-instruct',
      'gemma:2b-instruct-fp16',
      'gemma:2b-instruct-q2_K',
      'gemma:2b-instruct-q3_K_L',
      'gemma:2b-instruct-q3_K_M',
      'gemma:2b-instruct-q3_K_S',
      'gemma:2b-instruct-q4_0',
      'gemma:2b-instruct-q4_1',
      'gemma:2b-instruct-q4_K_M',
      'gemma:2b-instruct-q4_K_S',
      'gemma:2b-instruct-q5_0',
      'gemma:2b-instruct-q5_1',
      'gemma:2b-instruct-q5_K_M',
      'gemma:2b-instruct-q5_K_S',
      'gemma:2b-instruct-q6_K',
      'gemma:2b-instruct-q8_0',
      'gemma:2b-instruct-v1.1-fp16',
      'gemma:2b-instruct-v1.1-q2_K',
      'gemma:2b-instruct-v1.1-q3_K_L',
      'gemma:2b-instruct-v1.1-q3_K_M',
      'gemma:2b-instruct-v1.1-q3_K_S',
      'gemma:2b-instruct-v1.1-q4_0',
      'gemma:2b-instruct-v1.1-q4_1',
      'gemma:2b-instruct-v1.1-q4_K_M',
      'gemma:2b-instruct-v1.1-q4_K_S',
      'gemma:2b-instruct-v1.1-q5_0',
      'gemma:2b-instruct-v1.1-q5_1',
      'gemma:2b-instruct-v1.1-q5_K_M',
      'gemma:2b-instruct-v1.1-q5_K_S',
      'gemma:2b-instruct-v1.1-q6_K',
      'gemma:2b-instruct-v1.1-q8_0',
      'gemma:2b-text',
      'gemma:2b-text-fp16',
      'gemma:2b-text-q2_K',
      'gemma:2b-text-q3_K_L',
      'gemma:2b-text-q3_K_M',
      'gemma:2b-text-q3_K_S',
      'gemma:2b-text-q4_0',
      'gemma:2b-text-q4_1',
      'gemma:2b-text-q4_K_M',
      'gemma:2b-text-q4_K_S',
      'gemma:2b-text-q5_0',
      'gemma:2b-text-q5_1',
      'gemma:2b-text-q5_K_M',
      'gemma:2b-text-q5_K_S',
      'gemma:2b-text-q6_K',
      'gemma:2b-text-q8_0',
      'gemma:2b-v1.1',
      'gemma:7b',
      'gemma:7b-instruct',
      'gemma:7b-instruct-fp16',
      'gemma:7b-instruct-q2_K',
      'gemma:7b-instruct-q3_K_L',
      'gemma:7b-instruct-q3_K_M',
      'gemma:7b-instruct-q3_K_S',
      'gemma:7b-instruct-q4_0',
      'gemma:7b-instruct-q4_1',
      'gemma:7b-instruct-q4_K_M',
      'gemma:7b-instruct-q4_K_S',
      'gemma:7b-instruct-q5_0',
      'gemma:7b-instruct-q5_1',
      'gemma:7b-instruct-q5_K_M',
      'gemma:7b-instruct-q5_K_S',
      'gemma:7b-instruct-q6_K',
      'gemma:7b-instruct-q8_0',
      'gemma:7b-instruct-v1.1-fp16',
      'gemma:7b-instruct-v1.1-q2_K',
      'gemma:7b-instruct-v1.1-q3_K_L',
      'gemma:7b-instruct-v1.1-q3_K_M',
      'gemma:7b-instruct-v1.1-q3_K_S',
      'gemma:7b-instruct-v1.1-q4_0',
      'gemma:7b-instruct-v1.1-q4_1',
      'gemma:7b-instruct-v1.1-q4_K_M',
      'gemma:7b-instruct-v1.1-q4_K_S',
      'gemma:7b-instruct-v1.1-q5_0',
      'gemma:7b-instruct-v1.1-q5_1',
      'gemma:7b-instruct-v1.1-q5_K_M',
      'gemma:7b-instruct-v1.1-q5_K_S',
      'gemma:7b-instruct-v1.1-q6_K',
      'gemma:7b-instruct-v1.1-q8_0',
      'gemma:7b-text',
      'gemma:7b-text-fp16',
      'gemma:7b-text-q2_K',
      'gemma:7b-text-q3_K_L',
      'gemma:7b-text-q3_K_M',
      'gemma:7b-text-q3_K_S',
      'gemma:7b-text-q4_0',
      'gemma:7b-text-q4_1',
      'gemma:7b-text-q4_K_M',
      'gemma:7b-text-q4_K_S',
      'gemma:7b-text-q5_0',
      'gemma:7b-text-q5_1',
      'gemma:7b-text-q5_K_M',
      'gemma:7b-text-q5_K_S',
      'gemma:7b-text-q6_K',
      'gemma:7b-text-q8_0',
      'gemma:7b-v1.1',
      'gemma:instruct',
      'gemma:latest',
      'gemma:text',
      'gemma:v1.1',
    ],
  },
  gemma2: {
    name: 'gemma2',
    type: 'chat',
    tags: [
      'gemma2:27b',
      'gemma2:27b-instruct-fp16',
      'gemma2:27b-instruct-q2_K',
      'gemma2:27b-instruct-q3_K_L',
      'gemma2:27b-instruct-q3_K_M',
      'gemma2:27b-instruct-q3_K_S',
      'gemma2:27b-instruct-q4_0',
      'gemma2:27b-instruct-q4_1',
      'gemma2:27b-instruct-q4_K_M',
      'gemma2:27b-instruct-q4_K_S',
      'gemma2:27b-instruct-q5_0',
      'gemma2:27b-instruct-q5_1',
      'gemma2:27b-instruct-q5_K_M',
      'gemma2:27b-instruct-q5_K_S',
      'gemma2:27b-instruct-q6_K',
      'gemma2:27b-instruct-q8_0',
      'gemma2:27b-text-fp16',
      'gemma2:27b-text-q2_K',
      'gemma2:27b-text-q3_K_L',
      'gemma2:27b-text-q3_K_M',
      'gemma2:27b-text-q3_K_S',
      'gemma2:27b-text-q4_0',
      'gemma2:27b-text-q4_1',
      'gemma2:27b-text-q4_K_M',
      'gemma2:27b-text-q4_K_S',
      'gemma2:27b-text-q5_0',
      'gemma2:27b-text-q5_1',
      'gemma2:27b-text-q5_K_M',
      'gemma2:27b-text-q5_K_S',
      'gemma2:27b-text-q6_K',
      'gemma2:27b-text-q8_0',
      'gemma2:2b',
      'gemma2:2b-instruct-fp16',
      'gemma2:2b-instruct-q2_K',
      'gemma2:2b-instruct-q3_K_L',
      'gemma2:2b-instruct-q3_K_M',
      'gemma2:2b-instruct-q3_K_S',
      'gemma2:2b-instruct-q4_0',
      'gemma2:2b-instruct-q4_1',
      'gemma2:2b-instruct-q4_K_M',
      'gemma2:2b-instruct-q4_K_S',
      'gemma2:2b-instruct-q5_0',
      'gemma2:2b-instruct-q5_1',
      'gemma2:2b-instruct-q5_K_M',
      'gemma2:2b-instruct-q5_K_S',
      'gemma2:2b-instruct-q6_K',
      'gemma2:2b-instruct-q8_0',
      'gemma2:2b-text-fp16',
      'gemma2:2b-text-q2_K',
      'gemma2:2b-text-q3_K_L',
      'gemma2:2b-text-q3_K_M',
      'gemma2:2b-text-q3_K_S',
      'gemma2:2b-text-q4_0',
      'gemma2:2b-text-q4_1',
      'gemma2:2b-text-q4_K_M',
      'gemma2:2b-text-q4_K_S',
      'gemma2:2b-text-q5_0',
      'gemma2:2b-text-q5_1',
      'gemma2:2b-text-q5_K_M',
      'gemma2:2b-text-q5_K_S',
      'gemma2:2b-text-q6_K',
      'gemma2:2b-text-q8_0',
      'gemma2:9b',
      'gemma2:9b-instruct-fp16',
      'gemma2:9b-instruct-q2_K',
      'gemma2:9b-instruct-q3_K_L',
      'gemma2:9b-instruct-q3_K_M',
      'gemma2:9b-instruct-q3_K_S',
      'gemma2:9b-instruct-q4_0',
      'gemma2:9b-instruct-q4_1',
      'gemma2:9b-instruct-q4_K_M',
      'gemma2:9b-instruct-q4_K_S',
      'gemma2:9b-instruct-q5_0',
      'gemma2:9b-instruct-q5_1',
      'gemma2:9b-instruct-q5_K_M',
      'gemma2:9b-instruct-q5_K_S',
      'gemma2:9b-instruct-q6_K',
      'gemma2:9b-instruct-q8_0',
      'gemma2:9b-text-fp16',
      'gemma2:9b-text-q2_K',
      'gemma2:9b-text-q3_K_L',
      'gemma2:9b-text-q3_K_M',
      'gemma2:9b-text-q3_K_S',
      'gemma2:9b-text-q4_0',
      'gemma2:9b-text-q4_1',
      'gemma2:9b-text-q4_K_M',
      'gemma2:9b-text-q4_K_S',
      'gemma2:9b-text-q5_0',
      'gemma2:9b-text-q5_1',
      'gemma2:9b-text-q5_K_M',
      'gemma2:9b-text-q5_K_S',
      'gemma2:9b-text-q6_K',
      'gemma2:9b-text-q8_0',
      'gemma2:latest',
    ],
  },
  gemma3n: {
    name: 'gemma3n',
    type: 'chat',
    tags: [
      'gemma3n:e2b',
      'gemma3n:e2b-it-fp16',
      'gemma3n:e2b-it-q4_K_M',
      'gemma3n:e2b-it-q8_0',
      'gemma3n:e4b',
      'gemma3n:e4b-it-fp16',
      'gemma3n:e4b-it-q4_K_M',
      'gemma3n:e4b-it-q8_0',
      'gemma3n:latest',
    ],
  },
  glm4: {
    name: 'glm4',
    type: 'chat',
    tags: [
      'glm4:9b',
      'glm4:9b-chat-fp16',
      'glm4:9b-chat-q2_K',
      'glm4:9b-chat-q3_K_L',
      'glm4:9b-chat-q3_K_M',
      'glm4:9b-chat-q3_K_S',
      'glm4:9b-chat-q4_0',
      'glm4:9b-chat-q4_1',
      'glm4:9b-chat-q4_K_M',
      'glm4:9b-chat-q4_K_S',
      'glm4:9b-chat-q5_0',
      'glm4:9b-chat-q5_1',
      'glm4:9b-chat-q5_K_M',
      'glm4:9b-chat-q5_K_S',
      'glm4:9b-chat-q6_K',
      'glm4:9b-chat-q8_0',
      'glm4:9b-text-fp16',
      'glm4:9b-text-q2_K',
      'glm4:9b-text-q3_K_L',
      'glm4:9b-text-q3_K_M',
      'glm4:9b-text-q3_K_S',
      'glm4:9b-text-q4_0',
      'glm4:9b-text-q4_1',
      'glm4:9b-text-q4_K_M',
      'glm4:9b-text-q4_K_S',
      'glm4:9b-text-q5_0',
      'glm4:9b-text-q5_1',
      'glm4:9b-text-q5_K_M',
      'glm4:9b-text-q5_K_S',
      'glm4:9b-text-q6_K',
      'glm4:9b-text-q8_0',
      'glm4:latest',
    ],
  },
  goliath: {
    name: 'goliath',
    type: 'chat',
    tags: [
      'goliath:120b-fp16',
      'goliath:120b-q2_K',
      'goliath:120b-q3_K_L',
      'goliath:120b-q3_K_M',
      'goliath:120b-q3_K_S',
      'goliath:120b-q4_0',
      'goliath:120b-q4_1',
      'goliath:120b-q4_K_M',
      'goliath:120b-q4_K_S',
      'goliath:120b-q5_0',
      'goliath:120b-q5_1',
      'goliath:120b-q5_K_M',
      'goliath:120b-q5_K_S',
      'goliath:120b-q6_K',
      'goliath:120b-q8_0',
      'goliath:latest',
    ],
  },
  'gpt-oss': {
    name: 'gpt-oss',
    type: 'chat',
    tags: ['gpt-oss:120b', 'gpt-oss:20b', 'gpt-oss:latest'],
  },
  'granite-code': {
    name: 'granite-code',
    type: 'chat',
    tags: [
      'granite-code:20b',
      'granite-code:20b-base',
      'granite-code:20b-base-fp16',
      'granite-code:20b-base-q2_K',
      'granite-code:20b-base-q3_K_L',
      'granite-code:20b-base-q3_K_M',
      'granite-code:20b-base-q3_K_S',
      'granite-code:20b-base-q4_0',
      'granite-code:20b-base-q4_1',
      'granite-code:20b-base-q4_K_M',
      'granite-code:20b-base-q4_K_S',
      'granite-code:20b-base-q5_0',
      'granite-code:20b-base-q5_1',
      'granite-code:20b-base-q5_K_M',
      'granite-code:20b-base-q5_K_S',
      'granite-code:20b-base-q6_K',
      'granite-code:20b-base-q8_0',
      'granite-code:20b-instruct',
      'granite-code:20b-instruct-8k-fp16',
      'granite-code:20b-instruct-8k-q2_K',
      'granite-code:20b-instruct-8k-q3_K_L',
      'granite-code:20b-instruct-8k-q3_K_M',
      'granite-code:20b-instruct-8k-q3_K_S',
      'granite-code:20b-instruct-8k-q4_0',
      'granite-code:20b-instruct-8k-q4_1',
      'granite-code:20b-instruct-8k-q4_K_M',
      'granite-code:20b-instruct-8k-q4_K_S',
      'granite-code:20b-instruct-8k-q5_0',
      'granite-code:20b-instruct-8k-q5_1',
      'granite-code:20b-instruct-8k-q5_K_M',
      'granite-code:20b-instruct-8k-q5_K_S',
      'granite-code:20b-instruct-8k-q6_K',
      'granite-code:20b-instruct-8k-q8_0',
      'granite-code:20b-instruct-q2_K',
      'granite-code:20b-instruct-q3_K_L',
      'granite-code:20b-instruct-q3_K_M',
      'granite-code:20b-instruct-q3_K_S',
      'granite-code:20b-instruct-q4_0',
      'granite-code:20b-instruct-q4_1',
      'granite-code:20b-instruct-q4_K_M',
      'granite-code:20b-instruct-q4_K_S',
      'granite-code:20b-instruct-q5_0',
      'granite-code:20b-instruct-q5_1',
      'granite-code:20b-instruct-q5_K_M',
      'granite-code:20b-instruct-q5_K_S',
      'granite-code:20b-instruct-q6_K',
      'granite-code:20b-instruct-q8_0',
      'granite-code:34b',
      'granite-code:34b-base',
      'granite-code:34b-base-q2_K',
      'granite-code:34b-base-q3_K_L',
      'granite-code:34b-base-q3_K_M',
      'granite-code:34b-base-q3_K_S',
      'granite-code:34b-base-q4_0',
      'granite-code:34b-base-q4_1',
      'granite-code:34b-base-q4_K_M',
      'granite-code:34b-base-q4_K_S',
      'granite-code:34b-base-q5_0',
      'granite-code:34b-base-q5_1',
      'granite-code:34b-base-q5_K_M',
      'granite-code:34b-base-q5_K_S',
      'granite-code:34b-base-q6_K',
      'granite-code:34b-base-q8_0',
      'granite-code:34b-instruct',
      'granite-code:34b-instruct-q2_K',
      'granite-code:34b-instruct-q3_K_L',
      'granite-code:34b-instruct-q3_K_M',
      'granite-code:34b-instruct-q3_K_S',
      'granite-code:34b-instruct-q4_0',
      'granite-code:34b-instruct-q4_1',
      'granite-code:34b-instruct-q4_K_M',
      'granite-code:34b-instruct-q4_K_S',
      'granite-code:34b-instruct-q5_0',
      'granite-code:34b-instruct-q5_1',
      'granite-code:34b-instruct-q5_K_M',
      'granite-code:34b-instruct-q5_K_S',
      'granite-code:34b-instruct-q6_K',
      'granite-code:34b-instruct-q8_0',
      'granite-code:3b',
      'granite-code:3b-base',
      'granite-code:3b-base-fp16',
      'granite-code:3b-base-q2_K',
      'granite-code:3b-base-q3_K_L',
      'granite-code:3b-base-q3_K_M',
      'granite-code:3b-base-q3_K_S',
      'granite-code:3b-base-q4_0',
      'granite-code:3b-base-q4_1',
      'granite-code:3b-base-q4_K_M',
      'granite-code:3b-base-q4_K_S',
      'granite-code:3b-base-q5_0',
      'granite-code:3b-base-q5_1',
      'granite-code:3b-base-q5_K_M',
      'granite-code:3b-base-q5_K_S',
      'granite-code:3b-base-q6_K',
      'granite-code:3b-base-q8_0',
      'granite-code:3b-instruct',
      'granite-code:3b-instruct-128k-fp16',
      'granite-code:3b-instruct-128k-q2_K',
      'granite-code:3b-instruct-128k-q3_K_L',
      'granite-code:3b-instruct-128k-q3_K_M',
      'granite-code:3b-instruct-128k-q3_K_S',
      'granite-code:3b-instruct-128k-q4_0',
      'granite-code:3b-instruct-128k-q4_1',
      'granite-code:3b-instruct-128k-q4_K_M',
      'granite-code:3b-instruct-128k-q4_K_S',
      'granite-code:3b-instruct-128k-q5_0',
      'granite-code:3b-instruct-128k-q5_1',
      'granite-code:3b-instruct-128k-q5_K_M',
      'granite-code:3b-instruct-128k-q5_K_S',
      'granite-code:3b-instruct-128k-q6_K',
      'granite-code:3b-instruct-128k-q8_0',
      'granite-code:3b-instruct-fp16',
      'granite-code:3b-instruct-q2_K',
      'granite-code:3b-instruct-q3_K_L',
      'granite-code:3b-instruct-q3_K_M',
      'granite-code:3b-instruct-q3_K_S',
      'granite-code:3b-instruct-q4_0',
      'granite-code:3b-instruct-q4_1',
      'granite-code:3b-instruct-q4_K_M',
      'granite-code:3b-instruct-q4_K_S',
      'granite-code:3b-instruct-q5_0',
      'granite-code:3b-instruct-q5_1',
      'granite-code:3b-instruct-q5_K_M',
      'granite-code:3b-instruct-q5_K_S',
      'granite-code:3b-instruct-q6_K',
      'granite-code:3b-instruct-q8_0',
      'granite-code:8b',
      'granite-code:8b-base',
      'granite-code:8b-base-fp16',
      'granite-code:8b-base-q2_K',
      'granite-code:8b-base-q3_K_L',
      'granite-code:8b-base-q3_K_M',
      'granite-code:8b-base-q3_K_S',
      'granite-code:8b-base-q4_0',
      'granite-code:8b-base-q4_1',
      'granite-code:8b-base-q4_K_M',
      'granite-code:8b-base-q4_K_S',
      'granite-code:8b-base-q5_0',
      'granite-code:8b-base-q5_1',
      'granite-code:8b-base-q5_K_M',
      'granite-code:8b-base-q5_K_S',
      'granite-code:8b-base-q6_K',
      'granite-code:8b-base-q8_0',
      'granite-code:8b-instruct',
      'granite-code:8b-instruct-128k-q4_0',
      'granite-code:8b-instruct-128k-q4_1',
      'granite-code:8b-instruct-fp16',
      'granite-code:8b-instruct-q2_K',
      'granite-code:8b-instruct-q3_K_L',
      'granite-code:8b-instruct-q3_K_M',
      'granite-code:8b-instruct-q3_K_S',
      'granite-code:8b-instruct-q4_0',
      'granite-code:8b-instruct-q4_1',
      'granite-code:8b-instruct-q4_K_M',
      'granite-code:8b-instruct-q4_K_S',
      'granite-code:8b-instruct-q5_0',
      'granite-code:8b-instruct-q5_1',
      'granite-code:8b-instruct-q5_K_M',
      'granite-code:8b-instruct-q5_K_S',
      'granite-code:8b-instruct-q6_K',
      'granite-code:8b-instruct-q8_0',
      'granite-code:latest',
    ],
  },
  'granite3-dense': {
    name: 'granite3-dense',
    type: 'chat',
    tags: [
      'granite3-dense:2b',
      'granite3-dense:2b-instruct-fp16',
      'granite3-dense:2b-instruct-q2_K',
      'granite3-dense:2b-instruct-q3_K_L',
      'granite3-dense:2b-instruct-q3_K_M',
      'granite3-dense:2b-instruct-q3_K_S',
      'granite3-dense:2b-instruct-q4_0',
      'granite3-dense:2b-instruct-q4_1',
      'granite3-dense:2b-instruct-q4_K_M',
      'granite3-dense:2b-instruct-q4_K_S',
      'granite3-dense:2b-instruct-q5_0',
      'granite3-dense:2b-instruct-q5_1',
      'granite3-dense:2b-instruct-q5_K_M',
      'granite3-dense:2b-instruct-q5_K_S',
      'granite3-dense:2b-instruct-q6_K',
      'granite3-dense:2b-instruct-q8_0',
      'granite3-dense:8b',
      'granite3-dense:8b-instruct-fp16',
      'granite3-dense:8b-instruct-q2_K',
      'granite3-dense:8b-instruct-q3_K_L',
      'granite3-dense:8b-instruct-q3_K_M',
      'granite3-dense:8b-instruct-q3_K_S',
      'granite3-dense:8b-instruct-q4_0',
      'granite3-dense:8b-instruct-q4_1',
      'granite3-dense:8b-instruct-q4_K_M',
      'granite3-dense:8b-instruct-q4_K_S',
      'granite3-dense:8b-instruct-q5_0',
      'granite3-dense:8b-instruct-q5_1',
      'granite3-dense:8b-instruct-q5_K_M',
      'granite3-dense:8b-instruct-q5_K_S',
      'granite3-dense:8b-instruct-q6_K',
      'granite3-dense:8b-instruct-q8_0',
      'granite3-dense:latest',
    ],
  },
  'granite3-guardian': {
    name: 'granite3-guardian',
    type: 'chat',
    tags: [
      'granite3-guardian:2b',
      'granite3-guardian:2b-fp16',
      'granite3-guardian:2b-q8_0',
      'granite3-guardian:8b',
      'granite3-guardian:8b-fp16',
      'granite3-guardian:8b-q5_K_M',
      'granite3-guardian:8b-q5_K_S',
      'granite3-guardian:8b-q6_K',
      'granite3-guardian:8b-q8_0',
      'granite3-guardian:latest',
    ],
  },
  'granite3-moe': {
    name: 'granite3-moe',
    type: 'chat',
    tags: [
      'granite3-moe:1b',
      'granite3-moe:1b-instruct-fp16',
      'granite3-moe:1b-instruct-q2_K',
      'granite3-moe:1b-instruct-q3_K_L',
      'granite3-moe:1b-instruct-q3_K_M',
      'granite3-moe:1b-instruct-q3_K_S',
      'granite3-moe:1b-instruct-q4_0',
      'granite3-moe:1b-instruct-q4_1',
      'granite3-moe:1b-instruct-q4_K_M',
      'granite3-moe:1b-instruct-q4_K_S',
      'granite3-moe:1b-instruct-q5_0',
      'granite3-moe:1b-instruct-q5_1',
      'granite3-moe:1b-instruct-q5_K_M',
      'granite3-moe:1b-instruct-q5_K_S',
      'granite3-moe:1b-instruct-q6_K',
      'granite3-moe:1b-instruct-q8_0',
      'granite3-moe:3b',
      'granite3-moe:3b-instruct-fp16',
      'granite3-moe:3b-instruct-q2_K',
      'granite3-moe:3b-instruct-q3_K_L',
      'granite3-moe:3b-instruct-q3_K_M',
      'granite3-moe:3b-instruct-q3_K_S',
      'granite3-moe:3b-instruct-q4_0',
      'granite3-moe:3b-instruct-q4_1',
      'granite3-moe:3b-instruct-q4_K_M',
      'granite3-moe:3b-instruct-q4_K_S',
      'granite3-moe:3b-instruct-q5_0',
      'granite3-moe:3b-instruct-q5_1',
      'granite3-moe:3b-instruct-q5_K_M',
      'granite3-moe:3b-instruct-q5_K_S',
      'granite3-moe:3b-instruct-q6_K',
      'granite3-moe:3b-instruct-q8_0',
      'granite3-moe:latest',
    ],
  },
  'granite3.1-dense': {
    name: 'granite3.1-dense',
    type: 'chat',
    tags: [
      'granite3.1-dense:2b',
      'granite3.1-dense:2b-instruct-fp16',
      'granite3.1-dense:2b-instruct-q2_K',
      'granite3.1-dense:2b-instruct-q3_K_L',
      'granite3.1-dense:2b-instruct-q3_K_M',
      'granite3.1-dense:2b-instruct-q3_K_S',
      'granite3.1-dense:2b-instruct-q4_0',
      'granite3.1-dense:2b-instruct-q4_1',
      'granite3.1-dense:2b-instruct-q4_K_M',
      'granite3.1-dense:2b-instruct-q4_K_S',
      'granite3.1-dense:2b-instruct-q5_0',
      'granite3.1-dense:2b-instruct-q5_1',
      'granite3.1-dense:2b-instruct-q5_K_M',
      'granite3.1-dense:2b-instruct-q5_K_S',
      'granite3.1-dense:2b-instruct-q6_K',
      'granite3.1-dense:2b-instruct-q8_0',
      'granite3.1-dense:8b',
      'granite3.1-dense:8b-instruct-fp16',
      'granite3.1-dense:8b-instruct-q2_K',
      'granite3.1-dense:8b-instruct-q3_K_L',
      'granite3.1-dense:8b-instruct-q3_K_M',
      'granite3.1-dense:8b-instruct-q3_K_S',
      'granite3.1-dense:8b-instruct-q4_0',
      'granite3.1-dense:8b-instruct-q4_1',
      'granite3.1-dense:8b-instruct-q4_K_M',
      'granite3.1-dense:8b-instruct-q4_K_S',
      'granite3.1-dense:8b-instruct-q5_0',
      'granite3.1-dense:8b-instruct-q5_1',
      'granite3.1-dense:8b-instruct-q5_K_M',
      'granite3.1-dense:8b-instruct-q5_K_S',
      'granite3.1-dense:8b-instruct-q6_K',
      'granite3.1-dense:8b-instruct-q8_0',
      'granite3.1-dense:latest',
    ],
  },
  'granite3.1-moe': {
    name: 'granite3.1-moe',
    type: 'chat',
    tags: [
      'granite3.1-moe:1b',
      'granite3.1-moe:1b-instruct-fp16',
      'granite3.1-moe:1b-instruct-q2_K',
      'granite3.1-moe:1b-instruct-q3_K_L',
      'granite3.1-moe:1b-instruct-q3_K_M',
      'granite3.1-moe:1b-instruct-q3_K_S',
      'granite3.1-moe:1b-instruct-q4_0',
      'granite3.1-moe:1b-instruct-q4_1',
      'granite3.1-moe:1b-instruct-q4_K_M',
      'granite3.1-moe:1b-instruct-q4_K_S',
      'granite3.1-moe:1b-instruct-q5_0',
      'granite3.1-moe:1b-instruct-q5_1',
      'granite3.1-moe:1b-instruct-q5_K_M',
      'granite3.1-moe:1b-instruct-q5_K_S',
      'granite3.1-moe:1b-instruct-q6_K',
      'granite3.1-moe:1b-instruct-q8_0',
      'granite3.1-moe:3b',
      'granite3.1-moe:3b-instruct-fp16',
      'granite3.1-moe:3b-instruct-q2_K',
      'granite3.1-moe:3b-instruct-q3_K_L',
      'granite3.1-moe:3b-instruct-q3_K_M',
      'granite3.1-moe:3b-instruct-q3_K_S',
      'granite3.1-moe:3b-instruct-q4_0',
      'granite3.1-moe:3b-instruct-q4_1',
      'granite3.1-moe:3b-instruct-q4_K_M',
      'granite3.1-moe:3b-instruct-q4_K_S',
      'granite3.1-moe:3b-instruct-q5_0',
      'granite3.1-moe:3b-instruct-q5_1',
      'granite3.1-moe:3b-instruct-q5_K_M',
      'granite3.1-moe:3b-instruct-q5_K_S',
      'granite3.1-moe:3b-instruct-q6_K',
      'granite3.1-moe:3b-instruct-q8_0',
      'granite3.1-moe:latest',
    ],
  },
  'granite3.2': {
    name: 'granite3.2',
    type: 'chat',
    tags: [
      'granite3.2:2b',
      'granite3.2:2b-instruct-fp16',
      'granite3.2:2b-instruct-q4_K_M',
      'granite3.2:2b-instruct-q8_0',
      'granite3.2:8b',
      'granite3.2:8b-instruct-fp16',
      'granite3.2:8b-instruct-q4_K_M',
      'granite3.2:8b-instruct-q8_0',
      'granite3.2:latest',
    ],
  },
  'granite3.3': {
    name: 'granite3.3',
    type: 'chat',
    tags: ['granite3.3:2b', 'granite3.3:8b', 'granite3.3:latest'],
  },
  hermes3: {
    name: 'hermes3',
    type: 'chat',
    tags: [
      'hermes3:3b',
      'hermes3:3b-llama3.2-fp16',
      'hermes3:3b-llama3.2-q2_K',
      'hermes3:3b-llama3.2-q3_K_L',
      'hermes3:3b-llama3.2-q3_K_M',
      'hermes3:3b-llama3.2-q3_K_S',
      'hermes3:3b-llama3.2-q4_0',
      'hermes3:3b-llama3.2-q4_1',
      'hermes3:3b-llama3.2-q4_K_M',
      'hermes3:3b-llama3.2-q4_K_S',
      'hermes3:3b-llama3.2-q5_0',
      'hermes3:3b-llama3.2-q5_1',
      'hermes3:3b-llama3.2-q5_K_M',
      'hermes3:3b-llama3.2-q5_K_S',
      'hermes3:3b-llama3.2-q6_K',
      'hermes3:3b-llama3.2-q8_0',
      'hermes3:405b',
      'hermes3:405b-llama3.1-fp16',
      'hermes3:405b-llama3.1-q2_K',
      'hermes3:405b-llama3.1-q3_K_L',
      'hermes3:405b-llama3.1-q3_K_M',
      'hermes3:405b-llama3.1-q3_K_S',
      'hermes3:405b-llama3.1-q4_0',
      'hermes3:405b-llama3.1-q4_1',
      'hermes3:405b-llama3.1-q4_K_M',
      'hermes3:405b-llama3.1-q4_K_S',
      'hermes3:405b-llama3.1-q5_0',
      'hermes3:405b-llama3.1-q5_1',
      'hermes3:405b-llama3.1-q5_K_M',
      'hermes3:405b-llama3.1-q5_K_S',
      'hermes3:405b-llama3.1-q6_K',
      'hermes3:405b-llama3.1-q8_0',
      'hermes3:70b',
      'hermes3:70b-llama3.1-fp16',
      'hermes3:70b-llama3.1-q2_K',
      'hermes3:70b-llama3.1-q3_K_L',
      'hermes3:70b-llama3.1-q3_K_M',
      'hermes3:70b-llama3.1-q3_K_S',
      'hermes3:70b-llama3.1-q4_0',
      'hermes3:70b-llama3.1-q4_1',
      'hermes3:70b-llama3.1-q4_K_M',
      'hermes3:70b-llama3.1-q4_K_S',
      'hermes3:70b-llama3.1-q5_0',
      'hermes3:70b-llama3.1-q5_1',
      'hermes3:70b-llama3.1-q5_K_M',
      'hermes3:70b-llama3.1-q5_K_S',
      'hermes3:70b-llama3.1-q6_K',
      'hermes3:70b-llama3.1-q8_0',
      'hermes3:8b',
      'hermes3:8b-llama3.1-fp16',
      'hermes3:8b-llama3.1-q2_K',
      'hermes3:8b-llama3.1-q3_K_L',
      'hermes3:8b-llama3.1-q3_K_M',
      'hermes3:8b-llama3.1-q3_K_S',
      'hermes3:8b-llama3.1-q4_0',
      'hermes3:8b-llama3.1-q4_1',
      'hermes3:8b-llama3.1-q4_K_M',
      'hermes3:8b-llama3.1-q4_K_S',
      'hermes3:8b-llama3.1-q5_0',
      'hermes3:8b-llama3.1-q5_1',
      'hermes3:8b-llama3.1-q5_K_M',
      'hermes3:8b-llama3.1-q5_K_S',
      'hermes3:8b-llama3.1-q6_K',
      'hermes3:8b-llama3.1-q8_0',
      'hermes3:latest',
    ],
  },
  internlm2: {
    name: 'internlm2',
    type: 'chat',
    tags: [
      'internlm2:1.8b',
      'internlm2:1.8b-chat-v2.5-fp16',
      'internlm2:1.8b-chat-v2.5-q2_K',
      'internlm2:1.8b-chat-v2.5-q3_K_L',
      'internlm2:1.8b-chat-v2.5-q3_K_M',
      'internlm2:1.8b-chat-v2.5-q3_K_S',
      'internlm2:1.8b-chat-v2.5-q4_0',
      'internlm2:1.8b-chat-v2.5-q4_1',
      'internlm2:1.8b-chat-v2.5-q4_K_M',
      'internlm2:1.8b-chat-v2.5-q4_K_S',
      'internlm2:1.8b-chat-v2.5-q5_0',
      'internlm2:1.8b-chat-v2.5-q5_1',
      'internlm2:1.8b-chat-v2.5-q5_K_M',
      'internlm2:1.8b-chat-v2.5-q5_K_S',
      'internlm2:1.8b-chat-v2.5-q6_K',
      'internlm2:1.8b-chat-v2.5-q8_0',
      'internlm2:1m',
      'internlm2:20b',
      'internlm2:20b-chat-v2.5-fp16',
      'internlm2:20b-chat-v2.5-q2_K',
      'internlm2:20b-chat-v2.5-q3_K_L',
      'internlm2:20b-chat-v2.5-q3_K_M',
      'internlm2:20b-chat-v2.5-q3_K_S',
      'internlm2:20b-chat-v2.5-q4_0',
      'internlm2:20b-chat-v2.5-q4_1',
      'internlm2:20b-chat-v2.5-q4_K_M',
      'internlm2:20b-chat-v2.5-q4_K_S',
      'internlm2:20b-chat-v2.5-q5_0',
      'internlm2:20b-chat-v2.5-q5_1',
      'internlm2:20b-chat-v2.5-q5_K_M',
      'internlm2:20b-chat-v2.5-q5_K_S',
      'internlm2:20b-chat-v2.5-q6_K',
      'internlm2:20b-chat-v2.5-q8_0',
      'internlm2:7b',
      'internlm2:7b-chat-1m-v2.5-fp16',
      'internlm2:7b-chat-1m-v2.5-q2_K',
      'internlm2:7b-chat-1m-v2.5-q3_K_L',
      'internlm2:7b-chat-1m-v2.5-q3_K_M',
      'internlm2:7b-chat-1m-v2.5-q3_K_S',
      'internlm2:7b-chat-1m-v2.5-q4_0',
      'internlm2:7b-chat-1m-v2.5-q4_1',
      'internlm2:7b-chat-1m-v2.5-q4_K_M',
      'internlm2:7b-chat-1m-v2.5-q4_K_S',
      'internlm2:7b-chat-1m-v2.5-q5_0',
      'internlm2:7b-chat-1m-v2.5-q5_1',
      'internlm2:7b-chat-1m-v2.5-q5_K_M',
      'internlm2:7b-chat-1m-v2.5-q5_K_S',
      'internlm2:7b-chat-1m-v2.5-q6_K',
      'internlm2:7b-chat-1m-v2.5-q8_0',
      'internlm2:7b-chat-v2.5-fp16',
      'internlm2:7b-chat-v2.5-q2_K',
      'internlm2:7b-chat-v2.5-q3_K_L',
      'internlm2:7b-chat-v2.5-q3_K_M',
      'internlm2:7b-chat-v2.5-q3_K_S',
      'internlm2:7b-chat-v2.5-q4_0',
      'internlm2:7b-chat-v2.5-q4_1',
      'internlm2:7b-chat-v2.5-q4_K_M',
      'internlm2:7b-chat-v2.5-q4_K_S',
      'internlm2:7b-chat-v2.5-q5_0',
      'internlm2:7b-chat-v2.5-q5_1',
      'internlm2:7b-chat-v2.5-q5_K_M',
      'internlm2:7b-chat-v2.5-q5_K_S',
      'internlm2:7b-chat-v2.5-q6_K',
      'internlm2:7b-chat-v2.5-q8_0',
      'internlm2:latest',
    ],
  },
  'llama-guard3': {
    name: 'llama-guard3',
    type: 'chat',
    tags: [
      'llama-guard3:1b',
      'llama-guard3:1b-fp16',
      'llama-guard3:1b-q2_K',
      'llama-guard3:1b-q3_K_L',
      'llama-guard3:1b-q3_K_M',
      'llama-guard3:1b-q3_K_S',
      'llama-guard3:1b-q4_0',
      'llama-guard3:1b-q4_1',
      'llama-guard3:1b-q4_K_M',
      'llama-guard3:1b-q4_K_S',
      'llama-guard3:1b-q5_0',
      'llama-guard3:1b-q5_1',
      'llama-guard3:1b-q5_K_M',
      'llama-guard3:1b-q5_K_S',
      'llama-guard3:1b-q6_K',
      'llama-guard3:1b-q8_0',
      'llama-guard3:8b',
      'llama-guard3:8b-fp16',
      'llama-guard3:8b-q2_K',
      'llama-guard3:8b-q3_K_L',
      'llama-guard3:8b-q3_K_M',
      'llama-guard3:8b-q3_K_S',
      'llama-guard3:8b-q4_0',
      'llama-guard3:8b-q4_1',
      'llama-guard3:8b-q4_K_M',
      'llama-guard3:8b-q4_K_S',
      'llama-guard3:8b-q5_0',
      'llama-guard3:8b-q5_1',
      'llama-guard3:8b-q5_K_M',
      'llama-guard3:8b-q5_K_S',
      'llama-guard3:8b-q6_K',
      'llama-guard3:8b-q8_0',
      'llama-guard3:latest',
    ],
  },
  'llama-pro': {
    name: 'llama-pro',
    type: 'chat',
    tags: [
      'llama-pro:8b-instruct-fp16',
      'llama-pro:8b-instruct-q2_K',
      'llama-pro:8b-instruct-q3_K_L',
      'llama-pro:8b-instruct-q3_K_M',
      'llama-pro:8b-instruct-q3_K_S',
      'llama-pro:8b-instruct-q4_0',
      'llama-pro:8b-instruct-q4_1',
      'llama-pro:8b-instruct-q4_K_M',
      'llama-pro:8b-instruct-q4_K_S',
      'llama-pro:8b-instruct-q5_0',
      'llama-pro:8b-instruct-q5_1',
      'llama-pro:8b-instruct-q5_K_M',
      'llama-pro:8b-instruct-q5_K_S',
      'llama-pro:8b-instruct-q6_K',
      'llama-pro:8b-instruct-q8_0',
      'llama-pro:8b-text-fp16',
      'llama-pro:8b-text-q2_K',
      'llama-pro:8b-text-q3_K_L',
      'llama-pro:8b-text-q3_K_M',
      'llama-pro:8b-text-q3_K_S',
      'llama-pro:8b-text-q4_0',
      'llama-pro:8b-text-q4_1',
      'llama-pro:8b-text-q4_K_M',
      'llama-pro:8b-text-q4_K_S',
      'llama-pro:8b-text-q5_0',
      'llama-pro:8b-text-q5_1',
      'llama-pro:8b-text-q5_K_M',
      'llama-pro:8b-text-q5_K_S',
      'llama-pro:8b-text-q6_K',
      'llama-pro:8b-text-q8_0',
      'llama-pro:instruct',
      'llama-pro:latest',
      'llama-pro:text',
    ],
  },
  llama2: {
    name: 'llama2',
    type: 'chat',
    tags: [
      'llama2:13b',
      'llama2:13b-chat',
      'llama2:13b-chat-fp16',
      'llama2:13b-chat-q2_K',
      'llama2:13b-chat-q3_K_L',
      'llama2:13b-chat-q3_K_M',
      'llama2:13b-chat-q3_K_S',
      'llama2:13b-chat-q4_0',
      'llama2:13b-chat-q4_1',
      'llama2:13b-chat-q4_K_M',
      'llama2:13b-chat-q4_K_S',
      'llama2:13b-chat-q5_0',
      'llama2:13b-chat-q5_1',
      'llama2:13b-chat-q5_K_M',
      'llama2:13b-chat-q5_K_S',
      'llama2:13b-chat-q6_K',
      'llama2:13b-chat-q8_0',
      'llama2:13b-text',
      'llama2:13b-text-fp16',
      'llama2:13b-text-q2_K',
      'llama2:13b-text-q3_K_L',
      'llama2:13b-text-q3_K_M',
      'llama2:13b-text-q3_K_S',
      'llama2:13b-text-q4_0',
      'llama2:13b-text-q4_1',
      'llama2:13b-text-q4_K_M',
      'llama2:13b-text-q4_K_S',
      'llama2:13b-text-q5_0',
      'llama2:13b-text-q5_1',
      'llama2:13b-text-q5_K_M',
      'llama2:13b-text-q5_K_S',
      'llama2:13b-text-q6_K',
      'llama2:13b-text-q8_0',
      'llama2:70b',
      'llama2:70b-chat',
      'llama2:70b-chat-fp16',
      'llama2:70b-chat-q2_K',
      'llama2:70b-chat-q3_K_L',
      'llama2:70b-chat-q3_K_M',
      'llama2:70b-chat-q3_K_S',
      'llama2:70b-chat-q4_0',
      'llama2:70b-chat-q4_1',
      'llama2:70b-chat-q4_K_M',
      'llama2:70b-chat-q4_K_S',
      'llama2:70b-chat-q5_0',
      'llama2:70b-chat-q5_1',
      'llama2:70b-chat-q5_K_M',
      'llama2:70b-chat-q5_K_S',
      'llama2:70b-chat-q6_K',
      'llama2:70b-chat-q8_0',
      'llama2:70b-text',
      'llama2:70b-text-fp16',
      'llama2:70b-text-q2_K',
      'llama2:70b-text-q3_K_L',
      'llama2:70b-text-q3_K_M',
      'llama2:70b-text-q3_K_S',
      'llama2:70b-text-q4_0',
      'llama2:70b-text-q4_1',
      'llama2:70b-text-q4_K_M',
      'llama2:70b-text-q4_K_S',
      'llama2:70b-text-q5_0',
      'llama2:70b-text-q5_1',
      'llama2:70b-text-q5_K_M',
      'llama2:70b-text-q5_K_S',
      'llama2:70b-text-q6_K',
      'llama2:70b-text-q8_0',
      'llama2:7b',
      'llama2:7b-chat',
      'llama2:7b-chat-fp16',
      'llama2:7b-chat-q2_K',
      'llama2:7b-chat-q3_K_L',
      'llama2:7b-chat-q3_K_M',
      'llama2:7b-chat-q3_K_S',
      'llama2:7b-chat-q4_0',
      'llama2:7b-chat-q4_1',
      'llama2:7b-chat-q4_K_M',
      'llama2:7b-chat-q4_K_S',
      'llama2:7b-chat-q5_0',
      'llama2:7b-chat-q5_1',
      'llama2:7b-chat-q5_K_M',
      'llama2:7b-chat-q5_K_S',
      'llama2:7b-chat-q6_K',
      'llama2:7b-chat-q8_0',
      'llama2:7b-text',
      'llama2:7b-text-fp16',
      'llama2:7b-text-q2_K',
      'llama2:7b-text-q3_K_L',
      'llama2:7b-text-q3_K_M',
      'llama2:7b-text-q3_K_S',
      'llama2:7b-text-q4_0',
      'llama2:7b-text-q4_1',
      'llama2:7b-text-q4_K_M',
      'llama2:7b-text-q4_K_S',
      'llama2:7b-text-q5_0',
      'llama2:7b-text-q5_1',
      'llama2:7b-text-q5_K_M',
      'llama2:7b-text-q5_K_S',
      'llama2:7b-text-q6_K',
      'llama2:7b-text-q8_0',
      'llama2:chat',
      'llama2:latest',
      'llama2:text',
    ],
  },
  'llama2-chinese': {
    name: 'llama2-chinese',
    type: 'chat',
    tags: [
      'llama2-chinese:13b',
      'llama2-chinese:13b-chat',
      'llama2-chinese:13b-chat-fp16',
      'llama2-chinese:13b-chat-q2_K',
      'llama2-chinese:13b-chat-q3_K_L',
      'llama2-chinese:13b-chat-q3_K_M',
      'llama2-chinese:13b-chat-q3_K_S',
      'llama2-chinese:13b-chat-q4_0',
      'llama2-chinese:13b-chat-q4_1',
      'llama2-chinese:13b-chat-q4_K_M',
      'llama2-chinese:13b-chat-q4_K_S',
      'llama2-chinese:13b-chat-q5_0',
      'llama2-chinese:13b-chat-q5_1',
      'llama2-chinese:13b-chat-q5_K_M',
      'llama2-chinese:13b-chat-q5_K_S',
      'llama2-chinese:13b-chat-q6_K',
      'llama2-chinese:13b-chat-q8_0',
      'llama2-chinese:7b',
      'llama2-chinese:7b-chat',
      'llama2-chinese:7b-chat-fp16',
      'llama2-chinese:7b-chat-q2_K',
      'llama2-chinese:7b-chat-q3_K_L',
      'llama2-chinese:7b-chat-q3_K_M',
      'llama2-chinese:7b-chat-q3_K_S',
      'llama2-chinese:7b-chat-q4_0',
      'llama2-chinese:7b-chat-q4_1',
      'llama2-chinese:7b-chat-q4_K_M',
      'llama2-chinese:7b-chat-q4_K_S',
      'llama2-chinese:7b-chat-q5_0',
      'llama2-chinese:7b-chat-q5_1',
      'llama2-chinese:7b-chat-q5_K_M',
      'llama2-chinese:7b-chat-q5_K_S',
      'llama2-chinese:7b-chat-q6_K',
      'llama2-chinese:7b-chat-q8_0',
      'llama2-chinese:latest',
    ],
  },
  'llama2-uncensored': {
    name: 'llama2-uncensored',
    type: 'chat',
    tags: [
      'llama2-uncensored:70b',
      'llama2-uncensored:70b-chat',
      'llama2-uncensored:70b-chat-q2_K',
      'llama2-uncensored:70b-chat-q3_K_L',
      'llama2-uncensored:70b-chat-q3_K_M',
      'llama2-uncensored:70b-chat-q3_K_S',
      'llama2-uncensored:70b-chat-q4_0',
      'llama2-uncensored:70b-chat-q4_1',
      'llama2-uncensored:70b-chat-q4_K_M',
      'llama2-uncensored:70b-chat-q4_K_S',
      'llama2-uncensored:70b-chat-q5_0',
      'llama2-uncensored:70b-chat-q5_1',
      'llama2-uncensored:70b-chat-q5_K_M',
      'llama2-uncensored:70b-chat-q5_K_S',
      'llama2-uncensored:70b-chat-q6_K',
      'llama2-uncensored:70b-chat-q8_0',
      'llama2-uncensored:7b',
      'llama2-uncensored:7b-chat',
      'llama2-uncensored:7b-chat-fp16',
      'llama2-uncensored:7b-chat-q2_K',
      'llama2-uncensored:7b-chat-q3_K_L',
      'llama2-uncensored:7b-chat-q3_K_M',
      'llama2-uncensored:7b-chat-q3_K_S',
      'llama2-uncensored:7b-chat-q4_0',
      'llama2-uncensored:7b-chat-q4_1',
      'llama2-uncensored:7b-chat-q4_K_M',
      'llama2-uncensored:7b-chat-q4_K_S',
      'llama2-uncensored:7b-chat-q5_0',
      'llama2-uncensored:7b-chat-q5_1',
      'llama2-uncensored:7b-chat-q5_K_M',
      'llama2-uncensored:7b-chat-q5_K_S',
      'llama2-uncensored:7b-chat-q6_K',
      'llama2-uncensored:7b-chat-q8_0',
      'llama2-uncensored:latest',
    ],
  },
  llama3: {
    name: 'llama3',
    type: 'chat',
    tags: [
      'llama3:70b',
      'llama3:70b-instruct',
      'llama3:70b-instruct-fp16',
      'llama3:70b-instruct-q2_K',
      'llama3:70b-instruct-q3_K_L',
      'llama3:70b-instruct-q3_K_M',
      'llama3:70b-instruct-q3_K_S',
      'llama3:70b-instruct-q4_0',
      'llama3:70b-instruct-q4_1',
      'llama3:70b-instruct-q4_K_M',
      'llama3:70b-instruct-q4_K_S',
      'llama3:70b-instruct-q5_0',
      'llama3:70b-instruct-q5_1',
      'llama3:70b-instruct-q5_K_M',
      'llama3:70b-instruct-q5_K_S',
      'llama3:70b-instruct-q6_K',
      'llama3:70b-instruct-q8_0',
      'llama3:70b-text',
      'llama3:70b-text-fp16',
      'llama3:70b-text-q2_K',
      'llama3:70b-text-q3_K_L',
      'llama3:70b-text-q3_K_M',
      'llama3:70b-text-q3_K_S',
      'llama3:70b-text-q4_0',
      'llama3:70b-text-q4_1',
      'llama3:70b-text-q4_K_M',
      'llama3:70b-text-q4_K_S',
      'llama3:70b-text-q5_0',
      'llama3:70b-text-q5_1',
      'llama3:70b-text-q5_K_M',
      'llama3:70b-text-q5_K_S',
      'llama3:70b-text-q6_K',
      'llama3:70b-text-q8_0',
      'llama3:8b',
      'llama3:8b-instruct-fp16',
      'llama3:8b-instruct-q2_K',
      'llama3:8b-instruct-q3_K_L',
      'llama3:8b-instruct-q3_K_M',
      'llama3:8b-instruct-q3_K_S',
      'llama3:8b-instruct-q4_0',
      'llama3:8b-instruct-q4_1',
      'llama3:8b-instruct-q4_K_M',
      'llama3:8b-instruct-q4_K_S',
      'llama3:8b-instruct-q5_0',
      'llama3:8b-instruct-q5_1',
      'llama3:8b-instruct-q5_K_M',
      'llama3:8b-instruct-q5_K_S',
      'llama3:8b-instruct-q6_K',
      'llama3:8b-instruct-q8_0',
      'llama3:8b-text',
      'llama3:8b-text-fp16',
      'llama3:8b-text-q2_K',
      'llama3:8b-text-q3_K_L',
      'llama3:8b-text-q3_K_M',
      'llama3:8b-text-q3_K_S',
      'llama3:8b-text-q4_0',
      'llama3:8b-text-q4_1',
      'llama3:8b-text-q4_K_M',
      'llama3:8b-text-q4_K_S',
      'llama3:8b-text-q5_0',
      'llama3:8b-text-q5_1',
      'llama3:8b-text-q5_K_M',
      'llama3:8b-text-q5_K_S',
      'llama3:8b-text-q6_K',
      'llama3:8b-text-q8_0',
      'llama3:instruct',
      'llama3:latest',
      'llama3:text',
    ],
  },
  'llama3-chatqa': {
    name: 'llama3-chatqa',
    type: 'chat',
    tags: [
      'llama3-chatqa:70b',
      'llama3-chatqa:70b-v1.5',
      'llama3-chatqa:70b-v1.5-fp16',
      'llama3-chatqa:70b-v1.5-q2_K',
      'llama3-chatqa:70b-v1.5-q3_K_L',
      'llama3-chatqa:70b-v1.5-q3_K_M',
      'llama3-chatqa:70b-v1.5-q3_K_S',
      'llama3-chatqa:70b-v1.5-q4_0',
      'llama3-chatqa:70b-v1.5-q4_1',
      'llama3-chatqa:70b-v1.5-q4_K_M',
      'llama3-chatqa:70b-v1.5-q4_K_S',
      'llama3-chatqa:70b-v1.5-q5_0',
      'llama3-chatqa:70b-v1.5-q5_1',
      'llama3-chatqa:70b-v1.5-q5_K_M',
      'llama3-chatqa:70b-v1.5-q5_K_S',
      'llama3-chatqa:70b-v1.5-q6_K',
      'llama3-chatqa:70b-v1.5-q8_0',
      'llama3-chatqa:8b',
      'llama3-chatqa:8b-v1.5',
      'llama3-chatqa:8b-v1.5-fp16',
      'llama3-chatqa:8b-v1.5-q2_K',
      'llama3-chatqa:8b-v1.5-q3_K_L',
      'llama3-chatqa:8b-v1.5-q3_K_M',
      'llama3-chatqa:8b-v1.5-q3_K_S',
      'llama3-chatqa:8b-v1.5-q4_0',
      'llama3-chatqa:8b-v1.5-q4_1',
      'llama3-chatqa:8b-v1.5-q4_K_M',
      'llama3-chatqa:8b-v1.5-q4_K_S',
      'llama3-chatqa:8b-v1.5-q5_0',
      'llama3-chatqa:8b-v1.5-q5_1',
      'llama3-chatqa:8b-v1.5-q5_K_M',
      'llama3-chatqa:8b-v1.5-q5_K_S',
      'llama3-chatqa:8b-v1.5-q6_K',
      'llama3-chatqa:8b-v1.5-q8_0',
      'llama3-chatqa:latest',
    ],
  },
  'llama3-gradient': {
    name: 'llama3-gradient',
    type: 'chat',
    tags: [
      'llama3-gradient:1048k',
      'llama3-gradient:70b',
      'llama3-gradient:70b-instruct-1048k-fp16',
      'llama3-gradient:70b-instruct-1048k-q2_K',
      'llama3-gradient:70b-instruct-1048k-q3_K_L',
      'llama3-gradient:70b-instruct-1048k-q3_K_M',
      'llama3-gradient:70b-instruct-1048k-q3_K_S',
      'llama3-gradient:70b-instruct-1048k-q4_0',
      'llama3-gradient:70b-instruct-1048k-q4_1',
      'llama3-gradient:70b-instruct-1048k-q4_K_M',
      'llama3-gradient:70b-instruct-1048k-q4_K_S',
      'llama3-gradient:70b-instruct-1048k-q5_0',
      'llama3-gradient:70b-instruct-1048k-q5_1',
      'llama3-gradient:70b-instruct-1048k-q5_K_M',
      'llama3-gradient:70b-instruct-1048k-q5_K_S',
      'llama3-gradient:70b-instruct-1048k-q6_K',
      'llama3-gradient:70b-instruct-1048k-q8_0',
      'llama3-gradient:8b',
      'llama3-gradient:8b-instruct-1048k-fp16',
      'llama3-gradient:8b-instruct-1048k-q2_K',
      'llama3-gradient:8b-instruct-1048k-q3_K_L',
      'llama3-gradient:8b-instruct-1048k-q3_K_M',
      'llama3-gradient:8b-instruct-1048k-q3_K_S',
      'llama3-gradient:8b-instruct-1048k-q4_0',
      'llama3-gradient:8b-instruct-1048k-q4_1',
      'llama3-gradient:8b-instruct-1048k-q4_K_M',
      'llama3-gradient:8b-instruct-1048k-q4_K_S',
      'llama3-gradient:8b-instruct-1048k-q5_0',
      'llama3-gradient:8b-instruct-1048k-q5_1',
      'llama3-gradient:8b-instruct-1048k-q5_K_M',
      'llama3-gradient:8b-instruct-1048k-q5_K_S',
      'llama3-gradient:8b-instruct-1048k-q6_K',
      'llama3-gradient:8b-instruct-1048k-q8_0',
      'llama3-gradient:instruct',
      'llama3-gradient:latest',
    ],
  },
  'llama3-groq-tool-use': {
    name: 'llama3-groq-tool-use',
    type: 'chat',
    tags: [
      'llama3-groq-tool-use:70b',
      'llama3-groq-tool-use:70b-fp16',
      'llama3-groq-tool-use:70b-q2_K',
      'llama3-groq-tool-use:70b-q3_K_L',
      'llama3-groq-tool-use:70b-q3_K_M',
      'llama3-groq-tool-use:70b-q3_K_S',
      'llama3-groq-tool-use:70b-q4_0',
      'llama3-groq-tool-use:70b-q4_1',
      'llama3-groq-tool-use:70b-q4_K_M',
      'llama3-groq-tool-use:70b-q4_K_S',
      'llama3-groq-tool-use:70b-q5_0',
      'llama3-groq-tool-use:70b-q5_1',
      'llama3-groq-tool-use:70b-q5_K_M',
      'llama3-groq-tool-use:70b-q5_K_S',
      'llama3-groq-tool-use:70b-q6_K',
      'llama3-groq-tool-use:70b-q8_0',
      'llama3-groq-tool-use:8b',
      'llama3-groq-tool-use:8b-fp16',
      'llama3-groq-tool-use:8b-q2_K',
      'llama3-groq-tool-use:8b-q3_K_L',
      'llama3-groq-tool-use:8b-q3_K_M',
      'llama3-groq-tool-use:8b-q3_K_S',
      'llama3-groq-tool-use:8b-q4_0',
      'llama3-groq-tool-use:8b-q4_1',
      'llama3-groq-tool-use:8b-q4_K_M',
      'llama3-groq-tool-use:8b-q4_K_S',
      'llama3-groq-tool-use:8b-q5_0',
      'llama3-groq-tool-use:8b-q5_1',
      'llama3-groq-tool-use:8b-q5_K_M',
      'llama3-groq-tool-use:8b-q5_K_S',
      'llama3-groq-tool-use:8b-q6_K',
      'llama3-groq-tool-use:8b-q8_0',
      'llama3-groq-tool-use:latest',
    ],
  },
  'llama3.1': {
    name: 'llama3.1',
    type: 'chat',
    tags: [
      'llama3.1:405b',
      'llama3.1:405b-instruct-fp16',
      'llama3.1:405b-instruct-q2_K',
      'llama3.1:405b-instruct-q3_K_L',
      'llama3.1:405b-instruct-q3_K_M',
      'llama3.1:405b-instruct-q3_K_S',
      'llama3.1:405b-instruct-q4_0',
      'llama3.1:405b-instruct-q4_1',
      'llama3.1:405b-instruct-q4_K_M',
      'llama3.1:405b-instruct-q4_K_S',
      'llama3.1:405b-instruct-q5_0',
      'llama3.1:405b-instruct-q5_1',
      'llama3.1:405b-instruct-q5_K_M',
      'llama3.1:405b-instruct-q5_K_S',
      'llama3.1:405b-instruct-q6_K',
      'llama3.1:405b-instruct-q8_0',
      'llama3.1:405b-text-fp16',
      'llama3.1:405b-text-q2_K',
      'llama3.1:405b-text-q3_K_L',
      'llama3.1:405b-text-q3_K_M',
      'llama3.1:405b-text-q3_K_S',
      'llama3.1:405b-text-q4_0',
      'llama3.1:405b-text-q4_1',
      'llama3.1:405b-text-q4_K_M',
      'llama3.1:405b-text-q4_K_S',
      'llama3.1:405b-text-q5_0',
      'llama3.1:405b-text-q5_1',
      'llama3.1:405b-text-q5_K_M',
      'llama3.1:405b-text-q5_K_S',
      'llama3.1:405b-text-q6_K',
      'llama3.1:405b-text-q8_0',
      'llama3.1:70b',
      'llama3.1:70b-instruct-fp16',
      'llama3.1:70b-instruct-q2_K',
      'llama3.1:70b-instruct-q3_K_L',
      'llama3.1:70b-instruct-q3_K_M',
      'llama3.1:70b-instruct-q3_K_S',
      'llama3.1:70b-instruct-q4_0',
      'llama3.1:70b-instruct-q4_K_M',
      'llama3.1:70b-instruct-q4_K_S',
      'llama3.1:70b-instruct-q5_0',
      'llama3.1:70b-instruct-q5_1',
      'llama3.1:70b-instruct-q5_K_M',
      'llama3.1:70b-instruct-q5_K_S',
      'llama3.1:70b-instruct-q6_K',
      'llama3.1:70b-instruct-q8_0',
      'llama3.1:70b-text-fp16',
      'llama3.1:70b-text-q2_K',
      'llama3.1:70b-text-q3_K_L',
      'llama3.1:70b-text-q3_K_M',
      'llama3.1:70b-text-q3_K_S',
      'llama3.1:70b-text-q4_0',
      'llama3.1:70b-text-q4_1',
      'llama3.1:70b-text-q4_K_M',
      'llama3.1:70b-text-q4_K_S',
      'llama3.1:70b-text-q5_0',
      'llama3.1:70b-text-q5_1',
      'llama3.1:70b-text-q5_K_M',
      'llama3.1:70b-text-q5_K_S',
      'llama3.1:70b-text-q6_K',
      'llama3.1:70b-text-q8_0',
      'llama3.1:8b',
      'llama3.1:8b-instruct-fp16',
      'llama3.1:8b-instruct-q2_K',
      'llama3.1:8b-instruct-q3_K_L',
      'llama3.1:8b-instruct-q3_K_M',
      'llama3.1:8b-instruct-q3_K_S',
      'llama3.1:8b-instruct-q4_0',
      'llama3.1:8b-instruct-q4_1',
      'llama3.1:8b-instruct-q4_K_M',
      'llama3.1:8b-instruct-q4_K_S',
      'llama3.1:8b-instruct-q5_0',
      'llama3.1:8b-instruct-q5_1',
      'llama3.1:8b-instruct-q5_K_M',
      'llama3.1:8b-instruct-q5_K_S',
      'llama3.1:8b-instruct-q6_K',
      'llama3.1:8b-instruct-q8_0',
      'llama3.1:8b-text-fp16',
      'llama3.1:8b-text-q2_K',
      'llama3.1:8b-text-q3_K_L',
      'llama3.1:8b-text-q3_K_M',
      'llama3.1:8b-text-q3_K_S',
      'llama3.1:8b-text-q4_0',
      'llama3.1:8b-text-q4_1',
      'llama3.1:8b-text-q4_K_M',
      'llama3.1:8b-text-q4_K_S',
      'llama3.1:8b-text-q5_0',
      'llama3.1:8b-text-q5_1',
      'llama3.1:8b-text-q5_K_M',
      'llama3.1:8b-text-q5_K_S',
      'llama3.1:8b-text-q6_K',
      'llama3.1:8b-text-q8_0',
      'llama3.1:latest',
    ],
  },
  'llama3.2': {
    name: 'llama3.2',
    type: 'chat',
    tags: [
      'llama3.2:1b',
      'llama3.2:1b-instruct-fp16',
      'llama3.2:1b-instruct-q2_K',
      'llama3.2:1b-instruct-q3_K_L',
      'llama3.2:1b-instruct-q3_K_M',
      'llama3.2:1b-instruct-q3_K_S',
      'llama3.2:1b-instruct-q4_0',
      'llama3.2:1b-instruct-q4_1',
      'llama3.2:1b-instruct-q4_K_M',
      'llama3.2:1b-instruct-q4_K_S',
      'llama3.2:1b-instruct-q5_0',
      'llama3.2:1b-instruct-q5_1',
      'llama3.2:1b-instruct-q5_K_M',
      'llama3.2:1b-instruct-q5_K_S',
      'llama3.2:1b-instruct-q6_K',
      'llama3.2:1b-instruct-q8_0',
      'llama3.2:1b-text-fp16',
      'llama3.2:1b-text-q2_K',
      'llama3.2:1b-text-q3_K_L',
      'llama3.2:1b-text-q3_K_M',
      'llama3.2:1b-text-q3_K_S',
      'llama3.2:1b-text-q4_0',
      'llama3.2:1b-text-q4_1',
      'llama3.2:1b-text-q4_K_M',
      'llama3.2:1b-text-q4_K_S',
      'llama3.2:1b-text-q5_0',
      'llama3.2:1b-text-q5_1',
      'llama3.2:1b-text-q5_K_M',
      'llama3.2:1b-text-q5_K_S',
      'llama3.2:1b-text-q6_K',
      'llama3.2:1b-text-q8_0',
      'llama3.2:3b',
      'llama3.2:3b-instruct-fp16',
      'llama3.2:3b-instruct-q2_K',
      'llama3.2:3b-instruct-q3_K_L',
      'llama3.2:3b-instruct-q3_K_M',
      'llama3.2:3b-instruct-q3_K_S',
      'llama3.2:3b-instruct-q4_0',
      'llama3.2:3b-instruct-q4_1',
      'llama3.2:3b-instruct-q4_K_M',
      'llama3.2:3b-instruct-q4_K_S',
      'llama3.2:3b-instruct-q5_0',
      'llama3.2:3b-instruct-q5_1',
      'llama3.2:3b-instruct-q5_K_M',
      'llama3.2:3b-instruct-q5_K_S',
      'llama3.2:3b-instruct-q6_K',
      'llama3.2:3b-instruct-q8_0',
      'llama3.2:3b-text-fp16',
      'llama3.2:3b-text-q2_K',
      'llama3.2:3b-text-q3_K_L',
      'llama3.2:3b-text-q3_K_M',
      'llama3.2:3b-text-q3_K_S',
      'llama3.2:3b-text-q4_0',
      'llama3.2:3b-text-q4_1',
      'llama3.2:3b-text-q4_K_M',
      'llama3.2:3b-text-q4_K_S',
      'llama3.2:3b-text-q5_0',
      'llama3.2:3b-text-q5_1',
      'llama3.2:3b-text-q5_K_M',
      'llama3.2:3b-text-q5_K_S',
      'llama3.2:3b-text-q6_K',
      'llama3.2:3b-text-q8_0',
      'llama3.2:latest',
    ],
  },
  'llama3.3': {
    name: 'llama3.3',
    type: 'chat',
    tags: [
      'llama3.3:70b',
      'llama3.3:70b-instruct-fp16',
      'llama3.3:70b-instruct-q2_K',
      'llama3.3:70b-instruct-q3_K_M',
      'llama3.3:70b-instruct-q3_K_S',
      'llama3.3:70b-instruct-q4_0',
      'llama3.3:70b-instruct-q4_K_M',
      'llama3.3:70b-instruct-q4_K_S',
      'llama3.3:70b-instruct-q5_0',
      'llama3.3:70b-instruct-q5_1',
      'llama3.3:70b-instruct-q5_K_M',
      'llama3.3:70b-instruct-q6_K',
      'llama3.3:70b-instruct-q8_0',
      'llama3.3:latest',
    ],
  },
  magicoder: {
    name: 'magicoder',
    type: 'chat',
    tags: [
      'magicoder:7b',
      'magicoder:7b-s-cl',
      'magicoder:7b-s-cl-fp16',
      'magicoder:7b-s-cl-q2_K',
      'magicoder:7b-s-cl-q3_K_L',
      'magicoder:7b-s-cl-q3_K_M',
      'magicoder:7b-s-cl-q3_K_S',
      'magicoder:7b-s-cl-q4_0',
      'magicoder:7b-s-cl-q4_1',
      'magicoder:7b-s-cl-q4_K_M',
      'magicoder:7b-s-cl-q4_K_S',
      'magicoder:7b-s-cl-q5_0',
      'magicoder:7b-s-cl-q5_1',
      'magicoder:7b-s-cl-q5_K_M',
      'magicoder:7b-s-cl-q5_K_S',
      'magicoder:7b-s-cl-q6_K',
      'magicoder:7b-s-cl-q8_0',
      'magicoder:latest',
    ],
  },
  magistral: {
    name: 'magistral',
    type: 'chat',
    tags: [
      'magistral:24b',
      'magistral:24b-small-2506-fp16',
      'magistral:24b-small-2506-q4_K_M',
      'magistral:24b-small-2506-q8_0',
      'magistral:latest',
    ],
  },
  'marco-o1': {
    name: 'marco-o1',
    type: 'chat',
    tags: [
      'marco-o1:7b',
      'marco-o1:7b-fp16',
      'marco-o1:7b-q4_K_M',
      'marco-o1:7b-q8_0',
      'marco-o1:latest',
    ],
  },
  mathstral: {
    name: 'mathstral',
    type: 'chat',
    tags: [
      'mathstral:7b',
      'mathstral:7b-v0.1-fp16',
      'mathstral:7b-v0.1-q2_K',
      'mathstral:7b-v0.1-q3_K_L',
      'mathstral:7b-v0.1-q3_K_M',
      'mathstral:7b-v0.1-q3_K_S',
      'mathstral:7b-v0.1-q4_0',
      'mathstral:7b-v0.1-q4_1',
      'mathstral:7b-v0.1-q4_K_M',
      'mathstral:7b-v0.1-q4_K_S',
      'mathstral:7b-v0.1-q5_0',
      'mathstral:7b-v0.1-q5_1',
      'mathstral:7b-v0.1-q5_K_M',
      'mathstral:7b-v0.1-q5_K_S',
      'mathstral:7b-v0.1-q6_K',
      'mathstral:7b-v0.1-q8_0',
      'mathstral:latest',
    ],
  },
  meditron: {
    name: 'meditron',
    type: 'chat',
    tags: [
      'meditron:70b',
      'meditron:70b-q4_0',
      'meditron:70b-q4_1',
      'meditron:70b-q4_K_S',
      'meditron:70b-q5_1',
      'meditron:7b',
      'meditron:7b-fp16',
      'meditron:7b-q2_K',
      'meditron:7b-q3_K_L',
      'meditron:7b-q3_K_M',
      'meditron:7b-q3_K_S',
      'meditron:7b-q4_0',
      'meditron:7b-q4_1',
      'meditron:7b-q4_K_M',
      'meditron:7b-q4_K_S',
      'meditron:7b-q5_0',
      'meditron:7b-q5_1',
      'meditron:7b-q5_K_M',
      'meditron:7b-q5_K_S',
      'meditron:7b-q6_K',
      'meditron:7b-q8_0',
      'meditron:latest',
    ],
  },
  medllama2: {
    name: 'medllama2',
    type: 'chat',
    tags: [
      'medllama2:7b',
      'medllama2:7b-fp16',
      'medllama2:7b-q2_K',
      'medllama2:7b-q3_K_L',
      'medllama2:7b-q3_K_M',
      'medllama2:7b-q3_K_S',
      'medllama2:7b-q4_0',
      'medllama2:7b-q4_1',
      'medllama2:7b-q4_K_M',
      'medllama2:7b-q4_K_S',
      'medllama2:7b-q5_0',
      'medllama2:7b-q5_1',
      'medllama2:7b-q5_K_M',
      'medllama2:7b-q5_K_S',
      'medllama2:7b-q6_K',
      'medllama2:7b-q8_0',
      'medllama2:latest',
    ],
  },
  megadolphin: {
    name: 'megadolphin',
    type: 'chat',
    tags: [
      'megadolphin:120b',
      'megadolphin:120b-v2.2',
      'megadolphin:120b-v2.2-fp16',
      'megadolphin:120b-v2.2-q2_K',
      'megadolphin:120b-v2.2-q3_K_L',
      'megadolphin:120b-v2.2-q3_K_M',
      'megadolphin:120b-v2.2-q3_K_S',
      'megadolphin:120b-v2.2-q4_0',
      'megadolphin:120b-v2.2-q4_1',
      'megadolphin:120b-v2.2-q4_K_M',
      'megadolphin:120b-v2.2-q4_K_S',
      'megadolphin:120b-v2.2-q5_0',
      'megadolphin:120b-v2.2-q5_1',
      'megadolphin:120b-v2.2-q5_K_M',
      'megadolphin:120b-v2.2-q5_K_S',
      'megadolphin:120b-v2.2-q6_K',
      'megadolphin:120b-v2.2-q8_0',
      'megadolphin:latest',
      'megadolphin:v2.2',
    ],
  },
  mistral: {
    name: 'mistral',
    type: 'chat',
    tags: [
      'mistral:7b',
      'mistral:7b-instruct',
      'mistral:7b-instruct-fp16',
      'mistral:7b-instruct-q2_K',
      'mistral:7b-instruct-q3_K_L',
      'mistral:7b-instruct-q3_K_M',
      'mistral:7b-instruct-q3_K_S',
      'mistral:7b-instruct-q4_0',
      'mistral:7b-instruct-q4_1',
      'mistral:7b-instruct-q4_K_M',
      'mistral:7b-instruct-q4_K_S',
      'mistral:7b-instruct-q5_0',
      'mistral:7b-instruct-q5_1',
      'mistral:7b-instruct-q5_K_M',
      'mistral:7b-instruct-q5_K_S',
      'mistral:7b-instruct-q6_K',
      'mistral:7b-instruct-q8_0',
      'mistral:7b-instruct-v0.2-fp16',
      'mistral:7b-instruct-v0.2-q2_K',
      'mistral:7b-instruct-v0.2-q3_K_L',
      'mistral:7b-instruct-v0.2-q3_K_M',
      'mistral:7b-instruct-v0.2-q3_K_S',
      'mistral:7b-instruct-v0.2-q4_0',
      'mistral:7b-instruct-v0.2-q4_1',
      'mistral:7b-instruct-v0.2-q4_K_M',
      'mistral:7b-instruct-v0.2-q4_K_S',
      'mistral:7b-instruct-v0.2-q5_0',
      'mistral:7b-instruct-v0.2-q5_1',
      'mistral:7b-instruct-v0.2-q5_K_M',
      'mistral:7b-instruct-v0.2-q5_K_S',
      'mistral:7b-instruct-v0.2-q6_K',
      'mistral:7b-instruct-v0.2-q8_0',
      'mistral:7b-instruct-v0.3-fp16',
      'mistral:7b-instruct-v0.3-q2_K',
      'mistral:7b-instruct-v0.3-q3_K_L',
      'mistral:7b-instruct-v0.3-q3_K_M',
      'mistral:7b-instruct-v0.3-q3_K_S',
      'mistral:7b-instruct-v0.3-q4_0',
      'mistral:7b-instruct-v0.3-q4_1',
      'mistral:7b-instruct-v0.3-q4_K_M',
      'mistral:7b-instruct-v0.3-q4_K_S',
      'mistral:7b-instruct-v0.3-q5_0',
      'mistral:7b-instruct-v0.3-q5_1',
      'mistral:7b-instruct-v0.3-q5_K_M',
      'mistral:7b-instruct-v0.3-q5_K_S',
      'mistral:7b-instruct-v0.3-q6_K',
      'mistral:7b-instruct-v0.3-q8_0',
      'mistral:7b-text',
      'mistral:7b-text-fp16',
      'mistral:7b-text-q2_K',
      'mistral:7b-text-q3_K_L',
      'mistral:7b-text-q3_K_M',
      'mistral:7b-text-q3_K_S',
      'mistral:7b-text-q4_0',
      'mistral:7b-text-q4_1',
      'mistral:7b-text-q4_K_M',
      'mistral:7b-text-q4_K_S',
      'mistral:7b-text-q5_0',
      'mistral:7b-text-q5_1',
      'mistral:7b-text-q5_K_M',
      'mistral:7b-text-q5_K_S',
      'mistral:7b-text-q6_K',
      'mistral:7b-text-q8_0',
      'mistral:7b-text-v0.2-fp16',
      'mistral:7b-text-v0.2-q2_K',
      'mistral:7b-text-v0.2-q3_K_L',
      'mistral:7b-text-v0.2-q3_K_M',
      'mistral:7b-text-v0.2-q3_K_S',
      'mistral:7b-text-v0.2-q4_0',
      'mistral:7b-text-v0.2-q4_1',
      'mistral:7b-text-v0.2-q4_K_M',
      'mistral:7b-text-v0.2-q4_K_S',
      'mistral:7b-text-v0.2-q5_0',
      'mistral:7b-text-v0.2-q5_1',
      'mistral:7b-text-v0.2-q5_K_M',
      'mistral:7b-text-v0.2-q5_K_S',
      'mistral:7b-text-v0.2-q6_K',
      'mistral:7b-text-v0.2-q8_0',
      'mistral:instruct',
      'mistral:latest',
      'mistral:text',
      'mistral:v0.1',
      'mistral:v0.2',
      'mistral:v0.3',
    ],
  },
  'mistral-large': {
    name: 'mistral-large',
    type: 'chat',
    tags: [
      'mistral-large:123b',
      'mistral-large:123b-instruct-2407-fp16',
      'mistral-large:123b-instruct-2407-q2_K',
      'mistral-large:123b-instruct-2407-q3_K_L',
      'mistral-large:123b-instruct-2407-q3_K_M',
      'mistral-large:123b-instruct-2407-q3_K_S',
      'mistral-large:123b-instruct-2407-q4_0',
      'mistral-large:123b-instruct-2407-q4_1',
      'mistral-large:123b-instruct-2407-q4_K_M',
      'mistral-large:123b-instruct-2407-q4_K_S',
      'mistral-large:123b-instruct-2407-q5_0',
      'mistral-large:123b-instruct-2407-q5_1',
      'mistral-large:123b-instruct-2407-q5_K_M',
      'mistral-large:123b-instruct-2407-q5_K_S',
      'mistral-large:123b-instruct-2407-q6_K',
      'mistral-large:123b-instruct-2407-q8_0',
      'mistral-large:123b-instruct-2411-fp16',
      'mistral-large:123b-instruct-2411-q2_K',
      'mistral-large:123b-instruct-2411-q3_K_L',
      'mistral-large:123b-instruct-2411-q3_K_M',
      'mistral-large:123b-instruct-2411-q3_K_S',
      'mistral-large:123b-instruct-2411-q4_0',
      'mistral-large:123b-instruct-2411-q4_1',
      'mistral-large:123b-instruct-2411-q4_K_M',
      'mistral-large:123b-instruct-2411-q4_K_S',
      'mistral-large:123b-instruct-2411-q5_0',
      'mistral-large:123b-instruct-2411-q5_1',
      'mistral-large:123b-instruct-2411-q5_K_M',
      'mistral-large:123b-instruct-2411-q5_K_S',
      'mistral-large:123b-instruct-2411-q6_K',
      'mistral-large:123b-instruct-2411-q8_0',
      'mistral-large:latest',
    ],
  },
  'mistral-nemo': {
    name: 'mistral-nemo',
    type: 'chat',
    tags: [
      'mistral-nemo:12b',
      'mistral-nemo:12b-instruct-2407-fp16',
      'mistral-nemo:12b-instruct-2407-q2_K',
      'mistral-nemo:12b-instruct-2407-q3_K_L',
      'mistral-nemo:12b-instruct-2407-q3_K_M',
      'mistral-nemo:12b-instruct-2407-q3_K_S',
      'mistral-nemo:12b-instruct-2407-q4_0',
      'mistral-nemo:12b-instruct-2407-q4_1',
      'mistral-nemo:12b-instruct-2407-q4_K_M',
      'mistral-nemo:12b-instruct-2407-q4_K_S',
      'mistral-nemo:12b-instruct-2407-q5_0',
      'mistral-nemo:12b-instruct-2407-q5_1',
      'mistral-nemo:12b-instruct-2407-q5_K_M',
      'mistral-nemo:12b-instruct-2407-q5_K_S',
      'mistral-nemo:12b-instruct-2407-q6_K',
      'mistral-nemo:12b-instruct-2407-q8_0',
      'mistral-nemo:latest',
    ],
  },
  'mistral-openorca': {
    name: 'mistral-openorca',
    type: 'chat',
    tags: [
      'mistral-openorca:7b',
      'mistral-openorca:7b-fp16',
      'mistral-openorca:7b-q2_K',
      'mistral-openorca:7b-q3_K_L',
      'mistral-openorca:7b-q3_K_M',
      'mistral-openorca:7b-q3_K_S',
      'mistral-openorca:7b-q4_0',
      'mistral-openorca:7b-q4_1',
      'mistral-openorca:7b-q4_K_M',
      'mistral-openorca:7b-q4_K_S',
      'mistral-openorca:7b-q5_0',
      'mistral-openorca:7b-q5_1',
      'mistral-openorca:7b-q5_K_M',
      'mistral-openorca:7b-q5_K_S',
      'mistral-openorca:7b-q6_K',
      'mistral-openorca:7b-q8_0',
      'mistral-openorca:latest',
    ],
  },
  'mistral-small': {
    name: 'mistral-small',
    type: 'chat',
    tags: [
      'mistral-small:22b',
      'mistral-small:22b-instruct-2409-fp16',
      'mistral-small:22b-instruct-2409-q2_K',
      'mistral-small:22b-instruct-2409-q3_K_L',
      'mistral-small:22b-instruct-2409-q3_K_M',
      'mistral-small:22b-instruct-2409-q3_K_S',
      'mistral-small:22b-instruct-2409-q4_0',
      'mistral-small:22b-instruct-2409-q4_1',
      'mistral-small:22b-instruct-2409-q4_K_M',
      'mistral-small:22b-instruct-2409-q4_K_S',
      'mistral-small:22b-instruct-2409-q5_0',
      'mistral-small:22b-instruct-2409-q5_1',
      'mistral-small:22b-instruct-2409-q5_K_M',
      'mistral-small:22b-instruct-2409-q5_K_S',
      'mistral-small:22b-instruct-2409-q6_K',
      'mistral-small:22b-instruct-2409-q8_0',
      'mistral-small:24b',
      'mistral-small:24b-instruct-2501-fp16',
      'mistral-small:24b-instruct-2501-q4_K_M',
      'mistral-small:24b-instruct-2501-q8_0',
      'mistral-small:latest',
    ],
  },
  mistrallite: {
    name: 'mistrallite',
    type: 'chat',
    tags: [
      'mistrallite:7b',
      'mistrallite:7b-v0.1-fp16',
      'mistrallite:7b-v0.1-q2_K',
      'mistrallite:7b-v0.1-q3_K_L',
      'mistrallite:7b-v0.1-q3_K_M',
      'mistrallite:7b-v0.1-q3_K_S',
      'mistrallite:7b-v0.1-q4_0',
      'mistrallite:7b-v0.1-q4_1',
      'mistrallite:7b-v0.1-q4_K_M',
      'mistrallite:7b-v0.1-q4_K_S',
      'mistrallite:7b-v0.1-q5_0',
      'mistrallite:7b-v0.1-q5_1',
      'mistrallite:7b-v0.1-q5_K_M',
      'mistrallite:7b-v0.1-q5_K_S',
      'mistrallite:7b-v0.1-q6_K',
      'mistrallite:7b-v0.1-q8_0',
      'mistrallite:latest',
    ],
  },
  mixtral: {
    name: 'mixtral',
    type: 'chat',
    tags: [
      'mixtral:8x22b',
      'mixtral:8x22b-instruct',
      'mixtral:8x22b-instruct-v0.1-fp16',
      'mixtral:8x22b-instruct-v0.1-q2_K',
      'mixtral:8x22b-instruct-v0.1-q3_K_L',
      'mixtral:8x22b-instruct-v0.1-q3_K_M',
      'mixtral:8x22b-instruct-v0.1-q3_K_S',
      'mixtral:8x22b-instruct-v0.1-q4_0',
      'mixtral:8x22b-instruct-v0.1-q4_1',
      'mixtral:8x22b-instruct-v0.1-q4_K_M',
      'mixtral:8x22b-instruct-v0.1-q4_K_S',
      'mixtral:8x22b-instruct-v0.1-q5_0',
      'mixtral:8x22b-instruct-v0.1-q5_1',
      'mixtral:8x22b-instruct-v0.1-q5_K_M',
      'mixtral:8x22b-instruct-v0.1-q5_K_S',
      'mixtral:8x22b-instruct-v0.1-q6_K',
      'mixtral:8x22b-instruct-v0.1-q8_0',
      'mixtral:8x22b-text',
      'mixtral:8x22b-text-v0.1-fp16',
      'mixtral:8x22b-text-v0.1-q2_K',
      'mixtral:8x22b-text-v0.1-q3_K_L',
      'mixtral:8x22b-text-v0.1-q3_K_M',
      'mixtral:8x22b-text-v0.1-q3_K_S',
      'mixtral:8x22b-text-v0.1-q4_0',
      'mixtral:8x22b-text-v0.1-q4_1',
      'mixtral:8x22b-text-v0.1-q4_K_M',
      'mixtral:8x22b-text-v0.1-q4_K_S',
      'mixtral:8x22b-text-v0.1-q5_0',
      'mixtral:8x22b-text-v0.1-q5_1',
      'mixtral:8x22b-text-v0.1-q5_K_M',
      'mixtral:8x22b-text-v0.1-q5_K_S',
      'mixtral:8x22b-text-v0.1-q6_K',
      'mixtral:8x22b-text-v0.1-q8_0',
      'mixtral:8x7b',
      'mixtral:8x7b-instruct-v0.1-fp16',
      'mixtral:8x7b-instruct-v0.1-q2_K',
      'mixtral:8x7b-instruct-v0.1-q3_K_L',
      'mixtral:8x7b-instruct-v0.1-q3_K_M',
      'mixtral:8x7b-instruct-v0.1-q3_K_S',
      'mixtral:8x7b-instruct-v0.1-q4_0',
      'mixtral:8x7b-instruct-v0.1-q4_1',
      'mixtral:8x7b-instruct-v0.1-q4_K_M',
      'mixtral:8x7b-instruct-v0.1-q4_K_S',
      'mixtral:8x7b-instruct-v0.1-q5_0',
      'mixtral:8x7b-instruct-v0.1-q5_1',
      'mixtral:8x7b-instruct-v0.1-q5_K_M',
      'mixtral:8x7b-instruct-v0.1-q5_K_S',
      'mixtral:8x7b-instruct-v0.1-q6_K',
      'mixtral:8x7b-instruct-v0.1-q8_0',
      'mixtral:8x7b-text',
      'mixtral:8x7b-text-v0.1-fp16',
      'mixtral:8x7b-text-v0.1-q2_K',
      'mixtral:8x7b-text-v0.1-q3_K_L',
      'mixtral:8x7b-text-v0.1-q3_K_M',
      'mixtral:8x7b-text-v0.1-q3_K_S',
      'mixtral:8x7b-text-v0.1-q4_0',
      'mixtral:8x7b-text-v0.1-q4_1',
      'mixtral:8x7b-text-v0.1-q4_K_M',
      'mixtral:8x7b-text-v0.1-q4_K_S',
      'mixtral:8x7b-text-v0.1-q5_0',
      'mixtral:8x7b-text-v0.1-q5_1',
      'mixtral:8x7b-text-v0.1-q5_K_M',
      'mixtral:8x7b-text-v0.1-q5_K_S',
      'mixtral:8x7b-text-v0.1-q6_K',
      'mixtral:8x7b-text-v0.1-q8_0',
      'mixtral:instruct',
      'mixtral:latest',
      'mixtral:text',
      'mixtral:v0.1',
      'mixtral:v0.1-instruct',
    ],
  },
  nemotron: {
    name: 'nemotron',
    type: 'chat',
    tags: [
      'nemotron:70b',
      'nemotron:70b-instruct-fp16',
      'nemotron:70b-instruct-q2_K',
      'nemotron:70b-instruct-q3_K_L',
      'nemotron:70b-instruct-q3_K_M',
      'nemotron:70b-instruct-q3_K_S',
      'nemotron:70b-instruct-q4_0',
      'nemotron:70b-instruct-q4_1',
      'nemotron:70b-instruct-q4_K_M',
      'nemotron:70b-instruct-q4_K_S',
      'nemotron:70b-instruct-q5_0',
      'nemotron:70b-instruct-q5_1',
      'nemotron:70b-instruct-q5_K_M',
      'nemotron:70b-instruct-q5_K_S',
      'nemotron:70b-instruct-q6_K',
      'nemotron:70b-instruct-q8_0',
      'nemotron:latest',
    ],
  },
  'nemotron-mini': {
    name: 'nemotron-mini',
    type: 'chat',
    tags: [
      'nemotron-mini:4b',
      'nemotron-mini:4b-instruct-fp16',
      'nemotron-mini:4b-instruct-q2_K',
      'nemotron-mini:4b-instruct-q3_K_L',
      'nemotron-mini:4b-instruct-q3_K_M',
      'nemotron-mini:4b-instruct-q3_K_S',
      'nemotron-mini:4b-instruct-q4_0',
      'nemotron-mini:4b-instruct-q4_1',
      'nemotron-mini:4b-instruct-q4_K_M',
      'nemotron-mini:4b-instruct-q4_K_S',
      'nemotron-mini:4b-instruct-q5_0',
      'nemotron-mini:4b-instruct-q5_1',
      'nemotron-mini:4b-instruct-q5_K_M',
      'nemotron-mini:4b-instruct-q5_K_S',
      'nemotron-mini:4b-instruct-q6_K',
      'nemotron-mini:4b-instruct-q8_0',
      'nemotron-mini:latest',
    ],
  },
  'neural-chat': {
    name: 'neural-chat',
    type: 'chat',
    tags: [
      'neural-chat:7b',
      'neural-chat:7b-v3.1',
      'neural-chat:7b-v3.1-fp16',
      'neural-chat:7b-v3.1-q2_K',
      'neural-chat:7b-v3.1-q3_K_L',
      'neural-chat:7b-v3.1-q3_K_M',
      'neural-chat:7b-v3.1-q3_K_S',
      'neural-chat:7b-v3.1-q4_0',
      'neural-chat:7b-v3.1-q4_1',
      'neural-chat:7b-v3.1-q4_K_M',
      'neural-chat:7b-v3.1-q4_K_S',
      'neural-chat:7b-v3.1-q5_0',
      'neural-chat:7b-v3.1-q5_1',
      'neural-chat:7b-v3.1-q5_K_M',
      'neural-chat:7b-v3.1-q5_K_S',
      'neural-chat:7b-v3.1-q6_K',
      'neural-chat:7b-v3.1-q8_0',
      'neural-chat:7b-v3.2',
      'neural-chat:7b-v3.2-fp16',
      'neural-chat:7b-v3.2-q2_K',
      'neural-chat:7b-v3.2-q3_K_L',
      'neural-chat:7b-v3.2-q3_K_M',
      'neural-chat:7b-v3.2-q3_K_S',
      'neural-chat:7b-v3.2-q4_0',
      'neural-chat:7b-v3.2-q4_1',
      'neural-chat:7b-v3.2-q4_K_M',
      'neural-chat:7b-v3.2-q4_K_S',
      'neural-chat:7b-v3.2-q5_0',
      'neural-chat:7b-v3.2-q5_1',
      'neural-chat:7b-v3.2-q5_K_M',
      'neural-chat:7b-v3.2-q5_K_S',
      'neural-chat:7b-v3.2-q6_K',
      'neural-chat:7b-v3.2-q8_0',
      'neural-chat:7b-v3.3',
      'neural-chat:7b-v3.3-fp16',
      'neural-chat:7b-v3.3-q2_K',
      'neural-chat:7b-v3.3-q3_K_L',
      'neural-chat:7b-v3.3-q3_K_M',
      'neural-chat:7b-v3.3-q3_K_S',
      'neural-chat:7b-v3.3-q4_0',
      'neural-chat:7b-v3.3-q4_1',
      'neural-chat:7b-v3.3-q4_K_M',
      'neural-chat:7b-v3.3-q4_K_S',
      'neural-chat:7b-v3.3-q5_0',
      'neural-chat:7b-v3.3-q5_1',
      'neural-chat:7b-v3.3-q5_K_M',
      'neural-chat:7b-v3.3-q5_K_S',
      'neural-chat:7b-v3.3-q6_K',
      'neural-chat:7b-v3.3-q8_0',
      'neural-chat:latest',
    ],
  },
  nexusraven: {
    name: 'nexusraven',
    type: 'chat',
    tags: [
      'nexusraven:13b',
      'nexusraven:13b-fp16',
      'nexusraven:13b-q2_K',
      'nexusraven:13b-q3_K_L',
      'nexusraven:13b-q3_K_M',
      'nexusraven:13b-q3_K_S',
      'nexusraven:13b-q4_0',
      'nexusraven:13b-q4_1',
      'nexusraven:13b-q4_K_M',
      'nexusraven:13b-q4_K_S',
      'nexusraven:13b-q5_0',
      'nexusraven:13b-q5_1',
      'nexusraven:13b-q5_K_M',
      'nexusraven:13b-q5_K_S',
      'nexusraven:13b-q6_K',
      'nexusraven:13b-q8_0',
      'nexusraven:13b-v2-fp16',
      'nexusraven:13b-v2-q2_K',
      'nexusraven:13b-v2-q3_K_L',
      'nexusraven:13b-v2-q3_K_M',
      'nexusraven:13b-v2-q3_K_S',
      'nexusraven:13b-v2-q4_0',
      'nexusraven:13b-v2-q4_1',
      'nexusraven:13b-v2-q4_K_M',
      'nexusraven:13b-v2-q4_K_S',
      'nexusraven:13b-v2-q5_0',
      'nexusraven:13b-v2-q5_1',
      'nexusraven:13b-v2-q5_K_M',
      'nexusraven:13b-v2-q5_K_S',
      'nexusraven:13b-v2-q6_K',
      'nexusraven:13b-v2-q8_0',
      'nexusraven:latest',
    ],
  },
  notus: {
    name: 'notus',
    type: 'chat',
    tags: [
      'notus:7b',
      'notus:7b-v1',
      'notus:7b-v1-fp16',
      'notus:7b-v1-q2_K',
      'notus:7b-v1-q3_K_L',
      'notus:7b-v1-q3_K_M',
      'notus:7b-v1-q3_K_S',
      'notus:7b-v1-q4_0',
      'notus:7b-v1-q4_1',
      'notus:7b-v1-q4_K_M',
      'notus:7b-v1-q4_K_S',
      'notus:7b-v1-q5_0',
      'notus:7b-v1-q5_1',
      'notus:7b-v1-q5_K_M',
      'notus:7b-v1-q5_K_S',
      'notus:7b-v1-q6_K',
      'notus:7b-v1-q8_0',
      'notus:latest',
    ],
  },
  notux: {
    name: 'notux',
    type: 'chat',
    tags: [
      'notux:8x7b',
      'notux:8x7b-v1',
      'notux:8x7b-v1-fp16',
      'notux:8x7b-v1-q2_K',
      'notux:8x7b-v1-q3_K_L',
      'notux:8x7b-v1-q3_K_M',
      'notux:8x7b-v1-q3_K_S',
      'notux:8x7b-v1-q4_0',
      'notux:8x7b-v1-q4_1',
      'notux:8x7b-v1-q4_K_M',
      'notux:8x7b-v1-q4_K_S',
      'notux:8x7b-v1-q5_0',
      'notux:8x7b-v1-q5_1',
      'notux:8x7b-v1-q5_K_M',
      'notux:8x7b-v1-q5_K_S',
      'notux:8x7b-v1-q6_K',
      'notux:8x7b-v1-q8_0',
      'notux:latest',
    ],
  },
  'nous-hermes': {
    name: 'nous-hermes',
    type: 'chat',
    tags: [
      'nous-hermes:13b',
      'nous-hermes:13b-fp16',
      'nous-hermes:13b-llama2',
      'nous-hermes:13b-llama2-fp16',
      'nous-hermes:13b-llama2-q2_K',
      'nous-hermes:13b-llama2-q3_K_L',
      'nous-hermes:13b-llama2-q3_K_M',
      'nous-hermes:13b-llama2-q3_K_S',
      'nous-hermes:13b-llama2-q4_0',
      'nous-hermes:13b-llama2-q4_1',
      'nous-hermes:13b-llama2-q4_K_M',
      'nous-hermes:13b-llama2-q4_K_S',
      'nous-hermes:13b-llama2-q5_0',
      'nous-hermes:13b-llama2-q5_1',
      'nous-hermes:13b-llama2-q5_K_M',
      'nous-hermes:13b-llama2-q5_K_S',
      'nous-hermes:13b-llama2-q6_K',
      'nous-hermes:13b-llama2-q8_0',
      'nous-hermes:13b-q2_K',
      'nous-hermes:13b-q3_K_L',
      'nous-hermes:13b-q3_K_M',
      'nous-hermes:13b-q3_K_S',
      'nous-hermes:13b-q4_0',
      'nous-hermes:13b-q4_1',
      'nous-hermes:13b-q4_K_M',
      'nous-hermes:13b-q4_K_S',
      'nous-hermes:13b-q5_0',
      'nous-hermes:13b-q5_1',
      'nous-hermes:13b-q5_K_M',
      'nous-hermes:13b-q5_K_S',
      'nous-hermes:13b-q6_K',
      'nous-hermes:13b-q8_0',
      'nous-hermes:70b-llama2-fp16',
      'nous-hermes:70b-llama2-q2_K',
      'nous-hermes:70b-llama2-q3_K_L',
      'nous-hermes:70b-llama2-q3_K_M',
      'nous-hermes:70b-llama2-q3_K_S',
      'nous-hermes:70b-llama2-q4_0',
      'nous-hermes:70b-llama2-q4_1',
      'nous-hermes:70b-llama2-q4_K_M',
      'nous-hermes:70b-llama2-q4_K_S',
      'nous-hermes:70b-llama2-q5_0',
      'nous-hermes:70b-llama2-q5_1',
      'nous-hermes:70b-llama2-q5_K_M',
      'nous-hermes:70b-llama2-q6_K',
      'nous-hermes:7b',
      'nous-hermes:7b-llama2',
      'nous-hermes:7b-llama2-fp16',
      'nous-hermes:7b-llama2-q2_K',
      'nous-hermes:7b-llama2-q3_K_L',
      'nous-hermes:7b-llama2-q3_K_M',
      'nous-hermes:7b-llama2-q3_K_S',
      'nous-hermes:7b-llama2-q4_0',
      'nous-hermes:7b-llama2-q4_1',
      'nous-hermes:7b-llama2-q4_K_M',
      'nous-hermes:7b-llama2-q4_K_S',
      'nous-hermes:7b-llama2-q5_0',
      'nous-hermes:7b-llama2-q5_1',
      'nous-hermes:7b-llama2-q5_K_M',
      'nous-hermes:7b-llama2-q5_K_S',
      'nous-hermes:7b-llama2-q6_K',
      'nous-hermes:7b-llama2-q8_0',
      'nous-hermes:latest',
    ],
  },
  'nous-hermes2': {
    name: 'nous-hermes2',
    type: 'chat',
    tags: [
      'nous-hermes2:10.7b',
      'nous-hermes2:10.7b-solar-fp16',
      'nous-hermes2:10.7b-solar-q2_K',
      'nous-hermes2:10.7b-solar-q3_K_L',
      'nous-hermes2:10.7b-solar-q3_K_M',
      'nous-hermes2:10.7b-solar-q3_K_S',
      'nous-hermes2:10.7b-solar-q4_0',
      'nous-hermes2:10.7b-solar-q4_1',
      'nous-hermes2:10.7b-solar-q4_K_M',
      'nous-hermes2:10.7b-solar-q4_K_S',
      'nous-hermes2:10.7b-solar-q5_0',
      'nous-hermes2:10.7b-solar-q5_1',
      'nous-hermes2:10.7b-solar-q5_K_M',
      'nous-hermes2:10.7b-solar-q5_K_S',
      'nous-hermes2:10.7b-solar-q6_K',
      'nous-hermes2:10.7b-solar-q8_0',
      'nous-hermes2:34b',
      'nous-hermes2:34b-yi-fp16',
      'nous-hermes2:34b-yi-q2_K',
      'nous-hermes2:34b-yi-q3_K_L',
      'nous-hermes2:34b-yi-q3_K_M',
      'nous-hermes2:34b-yi-q3_K_S',
      'nous-hermes2:34b-yi-q4_0',
      'nous-hermes2:34b-yi-q4_1',
      'nous-hermes2:34b-yi-q4_K_M',
      'nous-hermes2:34b-yi-q4_K_S',
      'nous-hermes2:34b-yi-q5_0',
      'nous-hermes2:34b-yi-q5_1',
      'nous-hermes2:34b-yi-q5_K_M',
      'nous-hermes2:34b-yi-q5_K_S',
      'nous-hermes2:34b-yi-q6_K',
      'nous-hermes2:34b-yi-q8_0',
      'nous-hermes2:latest',
    ],
  },
  'nous-hermes2-mixtral': {
    name: 'nous-hermes2-mixtral',
    type: 'chat',
    tags: [
      'nous-hermes2-mixtral:8x7b',
      'nous-hermes2-mixtral:8x7b-dpo-fp16',
      'nous-hermes2-mixtral:8x7b-dpo-q2_K',
      'nous-hermes2-mixtral:8x7b-dpo-q3_K_L',
      'nous-hermes2-mixtral:8x7b-dpo-q3_K_M',
      'nous-hermes2-mixtral:8x7b-dpo-q3_K_S',
      'nous-hermes2-mixtral:8x7b-dpo-q4_0',
      'nous-hermes2-mixtral:8x7b-dpo-q4_1',
      'nous-hermes2-mixtral:8x7b-dpo-q4_K_M',
      'nous-hermes2-mixtral:8x7b-dpo-q4_K_S',
      'nous-hermes2-mixtral:8x7b-dpo-q5_0',
      'nous-hermes2-mixtral:8x7b-dpo-q5_1',
      'nous-hermes2-mixtral:8x7b-dpo-q5_K_M',
      'nous-hermes2-mixtral:8x7b-dpo-q5_K_S',
      'nous-hermes2-mixtral:8x7b-dpo-q6_K',
      'nous-hermes2-mixtral:8x7b-dpo-q8_0',
      'nous-hermes2-mixtral:dpo',
      'nous-hermes2-mixtral:latest',
    ],
  },
  nuextract: {
    name: 'nuextract',
    type: 'chat',
    tags: [
      'nuextract:3.8b',
      'nuextract:3.8b-fp16',
      'nuextract:3.8b-q2_K',
      'nuextract:3.8b-q3_K_L',
      'nuextract:3.8b-q3_K_M',
      'nuextract:3.8b-q3_K_S',
      'nuextract:3.8b-q4_0',
      'nuextract:3.8b-q4_1',
      'nuextract:3.8b-q4_K_M',
      'nuextract:3.8b-q4_K_S',
      'nuextract:3.8b-q5_0',
      'nuextract:3.8b-q5_1',
      'nuextract:3.8b-q5_K_M',
      'nuextract:3.8b-q5_K_S',
      'nuextract:3.8b-q6_K',
      'nuextract:3.8b-q8_0',
      'nuextract:latest',
    ],
  },
  olmo2: {
    name: 'olmo2',
    type: 'chat',
    tags: [
      'olmo2:13b',
      'olmo2:13b-1124-instruct-fp16',
      'olmo2:13b-1124-instruct-q4_K_M',
      'olmo2:13b-1124-instruct-q8_0',
      'olmo2:7b',
      'olmo2:7b-1124-instruct-fp16',
      'olmo2:7b-1124-instruct-q4_K_M',
      'olmo2:7b-1124-instruct-q8_0',
      'olmo2:latest',
    ],
  },
  'open-orca-platypus2': {
    name: 'open-orca-platypus2',
    type: 'chat',
    tags: [
      'open-orca-platypus2:13b',
      'open-orca-platypus2:13b-fp16',
      'open-orca-platypus2:13b-q2_K',
      'open-orca-platypus2:13b-q3_K_L',
      'open-orca-platypus2:13b-q3_K_M',
      'open-orca-platypus2:13b-q3_K_S',
      'open-orca-platypus2:13b-q4_0',
      'open-orca-platypus2:13b-q4_1',
      'open-orca-platypus2:13b-q4_K_M',
      'open-orca-platypus2:13b-q4_K_S',
      'open-orca-platypus2:13b-q5_0',
      'open-orca-platypus2:13b-q5_1',
      'open-orca-platypus2:13b-q5_K_M',
      'open-orca-platypus2:13b-q5_K_S',
      'open-orca-platypus2:13b-q6_K',
      'open-orca-platypus2:13b-q8_0',
      'open-orca-platypus2:latest',
    ],
  },
  openchat: {
    name: 'openchat',
    type: 'chat',
    tags: [
      'openchat:7b',
      'openchat:7b-v3.5',
      'openchat:7b-v3.5-0106',
      'openchat:7b-v3.5-0106-fp16',
      'openchat:7b-v3.5-0106-q2_K',
      'openchat:7b-v3.5-0106-q3_K_L',
      'openchat:7b-v3.5-0106-q3_K_M',
      'openchat:7b-v3.5-0106-q3_K_S',
      'openchat:7b-v3.5-0106-q4_0',
      'openchat:7b-v3.5-0106-q4_1',
      'openchat:7b-v3.5-0106-q4_K_M',
      'openchat:7b-v3.5-0106-q4_K_S',
      'openchat:7b-v3.5-0106-q5_0',
      'openchat:7b-v3.5-0106-q5_1',
      'openchat:7b-v3.5-0106-q5_K_M',
      'openchat:7b-v3.5-0106-q5_K_S',
      'openchat:7b-v3.5-0106-q6_K',
      'openchat:7b-v3.5-0106-q8_0',
      'openchat:7b-v3.5-1210',
      'openchat:7b-v3.5-1210-fp16',
      'openchat:7b-v3.5-1210-q2_K',
      'openchat:7b-v3.5-1210-q3_K_L',
      'openchat:7b-v3.5-1210-q3_K_M',
      'openchat:7b-v3.5-1210-q3_K_S',
      'openchat:7b-v3.5-1210-q4_0',
      'openchat:7b-v3.5-1210-q4_1',
      'openchat:7b-v3.5-1210-q4_K_M',
      'openchat:7b-v3.5-1210-q4_K_S',
      'openchat:7b-v3.5-1210-q5_0',
      'openchat:7b-v3.5-1210-q5_1',
      'openchat:7b-v3.5-1210-q5_K_M',
      'openchat:7b-v3.5-1210-q5_K_S',
      'openchat:7b-v3.5-1210-q6_K',
      'openchat:7b-v3.5-1210-q8_0',
      'openchat:7b-v3.5-fp16',
      'openchat:7b-v3.5-q2_K',
      'openchat:7b-v3.5-q3_K_L',
      'openchat:7b-v3.5-q3_K_M',
      'openchat:7b-v3.5-q3_K_S',
      'openchat:7b-v3.5-q4_0',
      'openchat:7b-v3.5-q4_1',
      'openchat:7b-v3.5-q4_K_M',
      'openchat:7b-v3.5-q4_K_S',
      'openchat:7b-v3.5-q5_0',
      'openchat:7b-v3.5-q5_1',
      'openchat:7b-v3.5-q5_K_M',
      'openchat:7b-v3.5-q5_K_S',
      'openchat:7b-v3.5-q6_K',
      'openchat:7b-v3.5-q8_0',
      'openchat:latest',
    ],
  },
  opencoder: {
    name: 'opencoder',
    type: 'chat',
    tags: [
      'opencoder:1.5b',
      'opencoder:1.5b-instruct-fp16',
      'opencoder:1.5b-instruct-q4_K_M',
      'opencoder:1.5b-instruct-q8_0',
      'opencoder:8b',
      'opencoder:8b-instruct-fp16',
      'opencoder:8b-instruct-q4_K_M',
      'opencoder:8b-instruct-q8_0',
      'opencoder:latest',
    ],
  },
  openhermes: {
    name: 'openhermes',
    type: 'chat',
    tags: [
      'openhermes:7b-mistral-v2-fp16',
      'openhermes:7b-mistral-v2-q2_K',
      'openhermes:7b-mistral-v2-q3_K_L',
      'openhermes:7b-mistral-v2-q3_K_M',
      'openhermes:7b-mistral-v2-q3_K_S',
      'openhermes:7b-mistral-v2-q4_0',
      'openhermes:7b-mistral-v2-q4_1',
      'openhermes:7b-mistral-v2-q4_K_M',
      'openhermes:7b-mistral-v2-q4_K_S',
      'openhermes:7b-mistral-v2-q5_0',
      'openhermes:7b-mistral-v2-q5_1',
      'openhermes:7b-mistral-v2-q5_K_M',
      'openhermes:7b-mistral-v2-q5_K_S',
      'openhermes:7b-mistral-v2-q6_K',
      'openhermes:7b-mistral-v2-q8_0',
      'openhermes:7b-mistral-v2.5-fp16',
      'openhermes:7b-mistral-v2.5-q2_K',
      'openhermes:7b-mistral-v2.5-q3_K_L',
      'openhermes:7b-mistral-v2.5-q3_K_M',
      'openhermes:7b-mistral-v2.5-q3_K_S',
      'openhermes:7b-mistral-v2.5-q4_0',
      'openhermes:7b-mistral-v2.5-q4_1',
      'openhermes:7b-mistral-v2.5-q4_K_M',
      'openhermes:7b-mistral-v2.5-q4_K_S',
      'openhermes:7b-mistral-v2.5-q5_0',
      'openhermes:7b-mistral-v2.5-q5_1',
      'openhermes:7b-mistral-v2.5-q5_K_M',
      'openhermes:7b-mistral-v2.5-q5_K_S',
      'openhermes:7b-mistral-v2.5-q6_K',
      'openhermes:7b-mistral-v2.5-q8_0',
      'openhermes:7b-v2',
      'openhermes:7b-v2.5',
      'openhermes:latest',
      'openhermes:v2',
      'openhermes:v2.5',
    ],
  },
  openthinker: {
    name: 'openthinker',
    type: 'chat',
    tags: [
      'openthinker:32b',
      'openthinker:32b-fp16',
      'openthinker:32b-q4_K_M',
      'openthinker:32b-q8_0',
      'openthinker:32b-v2-fp16',
      'openthinker:32b-v2-q4_K_M',
      'openthinker:32b-v2-q8_0',
      'openthinker:7b',
      'openthinker:7b-fp16',
      'openthinker:7b-q4_K_M',
      'openthinker:7b-q8_0',
      'openthinker:7b-v2-fp16',
      'openthinker:7b-v2-q4_K_M',
      'openthinker:7b-v2-q8_0',
      'openthinker:latest',
    ],
  },
  'orca-mini': {
    name: 'orca-mini',
    type: 'chat',
    tags: [
      'orca-mini:13b',
      'orca-mini:13b-fp16',
      'orca-mini:13b-q2_K',
      'orca-mini:13b-q3_K_L',
      'orca-mini:13b-q3_K_M',
      'orca-mini:13b-q3_K_S',
      'orca-mini:13b-q4_0',
      'orca-mini:13b-q4_1',
      'orca-mini:13b-q4_K_M',
      'orca-mini:13b-q4_K_S',
      'orca-mini:13b-q5_0',
      'orca-mini:13b-q5_1',
      'orca-mini:13b-q5_K_M',
      'orca-mini:13b-q5_K_S',
      'orca-mini:13b-q6_K',
      'orca-mini:13b-q8_0',
      'orca-mini:13b-v2-fp16',
      'orca-mini:13b-v2-q2_K',
      'orca-mini:13b-v2-q3_K_L',
      'orca-mini:13b-v2-q3_K_M',
      'orca-mini:13b-v2-q3_K_S',
      'orca-mini:13b-v2-q4_0',
      'orca-mini:13b-v2-q4_1',
      'orca-mini:13b-v2-q4_K_M',
      'orca-mini:13b-v2-q4_K_S',
      'orca-mini:13b-v2-q5_0',
      'orca-mini:13b-v2-q5_1',
      'orca-mini:13b-v2-q5_K_M',
      'orca-mini:13b-v2-q5_K_S',
      'orca-mini:13b-v2-q6_K',
      'orca-mini:13b-v2-q8_0',
      'orca-mini:13b-v3',
      'orca-mini:13b-v3-fp16',
      'orca-mini:13b-v3-q2_K',
      'orca-mini:13b-v3-q3_K_L',
      'orca-mini:13b-v3-q3_K_M',
      'orca-mini:13b-v3-q3_K_S',
      'orca-mini:13b-v3-q4_0',
      'orca-mini:13b-v3-q4_1',
      'orca-mini:13b-v3-q4_K_M',
      'orca-mini:13b-v3-q4_K_S',
      'orca-mini:13b-v3-q5_0',
      'orca-mini:13b-v3-q5_1',
      'orca-mini:13b-v3-q5_K_M',
      'orca-mini:13b-v3-q5_K_S',
      'orca-mini:13b-v3-q6_K',
      'orca-mini:13b-v3-q8_0',
      'orca-mini:3b',
      'orca-mini:3b-fp16',
      'orca-mini:3b-q4_0',
      'orca-mini:3b-q4_1',
      'orca-mini:3b-q5_0',
      'orca-mini:3b-q5_1',
      'orca-mini:3b-q8_0',
      'orca-mini:70b',
      'orca-mini:70b-v3',
      'orca-mini:70b-v3-fp16',
      'orca-mini:70b-v3-q2_K',
      'orca-mini:70b-v3-q3_K_L',
      'orca-mini:70b-v3-q3_K_M',
      'orca-mini:70b-v3-q3_K_S',
      'orca-mini:70b-v3-q4_0',
      'orca-mini:70b-v3-q4_1',
      'orca-mini:70b-v3-q4_K_M',
      'orca-mini:70b-v3-q4_K_S',
      'orca-mini:70b-v3-q5_0',
      'orca-mini:70b-v3-q5_1',
      'orca-mini:70b-v3-q5_K_M',
      'orca-mini:70b-v3-q5_K_S',
      'orca-mini:70b-v3-q6_K',
      'orca-mini:70b-v3-q8_0',
      'orca-mini:7b',
      'orca-mini:7b-fp16',
      'orca-mini:7b-q2_K',
      'orca-mini:7b-q3_K_L',
      'orca-mini:7b-q3_K_M',
      'orca-mini:7b-q3_K_S',
      'orca-mini:7b-q4_0',
      'orca-mini:7b-q4_1',
      'orca-mini:7b-q4_K_M',
      'orca-mini:7b-q4_K_S',
      'orca-mini:7b-q5_0',
      'orca-mini:7b-q5_1',
      'orca-mini:7b-q5_K_M',
      'orca-mini:7b-q5_K_S',
      'orca-mini:7b-q6_K',
      'orca-mini:7b-q8_0',
      'orca-mini:7b-v2-fp16',
      'orca-mini:7b-v2-q2_K',
      'orca-mini:7b-v2-q3_K_L',
      'orca-mini:7b-v2-q3_K_M',
      'orca-mini:7b-v2-q3_K_S',
      'orca-mini:7b-v2-q4_0',
      'orca-mini:7b-v2-q4_1',
      'orca-mini:7b-v2-q4_K_M',
      'orca-mini:7b-v2-q4_K_S',
      'orca-mini:7b-v2-q5_0',
      'orca-mini:7b-v2-q5_1',
      'orca-mini:7b-v2-q5_K_M',
      'orca-mini:7b-v2-q5_K_S',
      'orca-mini:7b-v2-q6_K',
      'orca-mini:7b-v2-q8_0',
      'orca-mini:7b-v3',
      'orca-mini:7b-v3-fp16',
      'orca-mini:7b-v3-q2_K',
      'orca-mini:7b-v3-q3_K_L',
      'orca-mini:7b-v3-q3_K_M',
      'orca-mini:7b-v3-q3_K_S',
      'orca-mini:7b-v3-q4_0',
      'orca-mini:7b-v3-q4_1',
      'orca-mini:7b-v3-q4_K_M',
      'orca-mini:7b-v3-q4_K_S',
      'orca-mini:7b-v3-q5_0',
      'orca-mini:7b-v3-q5_1',
      'orca-mini:7b-v3-q5_K_M',
      'orca-mini:7b-v3-q5_K_S',
      'orca-mini:7b-v3-q6_K',
      'orca-mini:7b-v3-q8_0',
      'orca-mini:latest',
    ],
  },
  orca2: {
    name: 'orca2',
    type: 'chat',
    tags: [
      'orca2:13b',
      'orca2:13b-fp16',
      'orca2:13b-q2_K',
      'orca2:13b-q3_K_L',
      'orca2:13b-q3_K_M',
      'orca2:13b-q3_K_S',
      'orca2:13b-q4_0',
      'orca2:13b-q4_1',
      'orca2:13b-q4_K_M',
      'orca2:13b-q4_K_S',
      'orca2:13b-q5_0',
      'orca2:13b-q5_1',
      'orca2:13b-q5_K_M',
      'orca2:13b-q5_K_S',
      'orca2:13b-q6_K',
      'orca2:13b-q8_0',
      'orca2:7b',
      'orca2:7b-fp16',
      'orca2:7b-q2_K',
      'orca2:7b-q3_K_L',
      'orca2:7b-q3_K_M',
      'orca2:7b-q3_K_S',
      'orca2:7b-q4_0',
      'orca2:7b-q4_1',
      'orca2:7b-q4_K_M',
      'orca2:7b-q4_K_S',
      'orca2:7b-q5_0',
      'orca2:7b-q5_1',
      'orca2:7b-q5_K_M',
      'orca2:7b-q5_K_S',
      'orca2:7b-q6_K',
      'orca2:7b-q8_0',
      'orca2:latest',
    ],
  },
  phi: {
    name: 'phi',
    type: 'chat',
    tags: [
      'phi:2.7b',
      'phi:2.7b-chat-v2-fp16',
      'phi:2.7b-chat-v2-q2_K',
      'phi:2.7b-chat-v2-q3_K_L',
      'phi:2.7b-chat-v2-q3_K_M',
      'phi:2.7b-chat-v2-q3_K_S',
      'phi:2.7b-chat-v2-q4_0',
      'phi:2.7b-chat-v2-q4_1',
      'phi:2.7b-chat-v2-q4_K_M',
      'phi:2.7b-chat-v2-q4_K_S',
      'phi:2.7b-chat-v2-q5_0',
      'phi:2.7b-chat-v2-q5_1',
      'phi:2.7b-chat-v2-q5_K_M',
      'phi:2.7b-chat-v2-q5_K_S',
      'phi:2.7b-chat-v2-q6_K',
      'phi:2.7b-chat-v2-q8_0',
      'phi:chat',
      'phi:latest',
    ],
  },
  phi3: {
    name: 'phi3',
    type: 'chat',
    tags: [
      'phi3:14b',
      'phi3:14b-instruct',
      'phi3:14b-medium-128k-instruct-fp16',
      'phi3:14b-medium-128k-instruct-q2_K',
      'phi3:14b-medium-128k-instruct-q3_K_L',
      'phi3:14b-medium-128k-instruct-q3_K_M',
      'phi3:14b-medium-128k-instruct-q3_K_S',
      'phi3:14b-medium-128k-instruct-q4_0',
      'phi3:14b-medium-128k-instruct-q4_1',
      'phi3:14b-medium-128k-instruct-q4_K_M',
      'phi3:14b-medium-128k-instruct-q4_K_S',
      'phi3:14b-medium-128k-instruct-q5_0',
      'phi3:14b-medium-128k-instruct-q5_1',
      'phi3:14b-medium-128k-instruct-q5_K_M',
      'phi3:14b-medium-128k-instruct-q5_K_S',
      'phi3:14b-medium-128k-instruct-q6_K',
      'phi3:14b-medium-128k-instruct-q8_0',
      'phi3:14b-medium-4k-instruct-fp16',
      'phi3:14b-medium-4k-instruct-q2_K',
      'phi3:14b-medium-4k-instruct-q3_K_L',
      'phi3:14b-medium-4k-instruct-q3_K_M',
      'phi3:14b-medium-4k-instruct-q3_K_S',
      'phi3:14b-medium-4k-instruct-q4_0',
      'phi3:14b-medium-4k-instruct-q4_1',
      'phi3:14b-medium-4k-instruct-q4_K_M',
      'phi3:14b-medium-4k-instruct-q4_K_S',
      'phi3:14b-medium-4k-instruct-q5_0',
      'phi3:14b-medium-4k-instruct-q5_1',
      'phi3:14b-medium-4k-instruct-q5_K_M',
      'phi3:14b-medium-4k-instruct-q5_K_S',
      'phi3:14b-medium-4k-instruct-q6_K',
      'phi3:14b-medium-4k-instruct-q8_0',
      'phi3:3.8b',
      'phi3:3.8b-instruct',
      'phi3:3.8b-mini-128k-instruct-fp16',
      'phi3:3.8b-mini-128k-instruct-q2_K',
      'phi3:3.8b-mini-128k-instruct-q3_K_L',
      'phi3:3.8b-mini-128k-instruct-q3_K_M',
      'phi3:3.8b-mini-128k-instruct-q3_K_S',
      'phi3:3.8b-mini-128k-instruct-q4_0',
      'phi3:3.8b-mini-128k-instruct-q4_1',
      'phi3:3.8b-mini-128k-instruct-q4_K_M',
      'phi3:3.8b-mini-128k-instruct-q4_K_S',
      'phi3:3.8b-mini-128k-instruct-q5_0',
      'phi3:3.8b-mini-128k-instruct-q5_1',
      'phi3:3.8b-mini-128k-instruct-q5_K_M',
      'phi3:3.8b-mini-128k-instruct-q5_K_S',
      'phi3:3.8b-mini-128k-instruct-q6_K',
      'phi3:3.8b-mini-128k-instruct-q8_0',
      'phi3:3.8b-mini-4k-instruct-fp16',
      'phi3:3.8b-mini-4k-instruct-q2_K',
      'phi3:3.8b-mini-4k-instruct-q3_K_L',
      'phi3:3.8b-mini-4k-instruct-q3_K_M',
      'phi3:3.8b-mini-4k-instruct-q3_K_S',
      'phi3:3.8b-mini-4k-instruct-q4_0',
      'phi3:3.8b-mini-4k-instruct-q4_1',
      'phi3:3.8b-mini-4k-instruct-q4_K_M',
      'phi3:3.8b-mini-4k-instruct-q4_K_S',
      'phi3:3.8b-mini-4k-instruct-q5_0',
      'phi3:3.8b-mini-4k-instruct-q5_1',
      'phi3:3.8b-mini-4k-instruct-q5_K_M',
      'phi3:3.8b-mini-4k-instruct-q5_K_S',
      'phi3:3.8b-mini-4k-instruct-q6_K',
      'phi3:3.8b-mini-4k-instruct-q8_0',
      'phi3:instruct',
      'phi3:latest',
      'phi3:medium',
      'phi3:medium-128k',
      'phi3:medium-4k',
      'phi3:mini',
      'phi3:mini-128k',
      'phi3:mini-4k',
    ],
  },
  'phi3.5': {
    name: 'phi3.5',
    type: 'chat',
    tags: [
      'phi3.5:3.8b',
      'phi3.5:3.8b-mini-instruct-fp16',
      'phi3.5:3.8b-mini-instruct-q2_K',
      'phi3.5:3.8b-mini-instruct-q3_K_L',
      'phi3.5:3.8b-mini-instruct-q3_K_M',
      'phi3.5:3.8b-mini-instruct-q3_K_S',
      'phi3.5:3.8b-mini-instruct-q4_0',
      'phi3.5:3.8b-mini-instruct-q4_1',
      'phi3.5:3.8b-mini-instruct-q4_K_M',
      'phi3.5:3.8b-mini-instruct-q4_K_S',
      'phi3.5:3.8b-mini-instruct-q5_0',
      'phi3.5:3.8b-mini-instruct-q5_1',
      'phi3.5:3.8b-mini-instruct-q5_K_M',
      'phi3.5:3.8b-mini-instruct-q5_K_S',
      'phi3.5:3.8b-mini-instruct-q6_K',
      'phi3.5:3.8b-mini-instruct-q8_0',
      'phi3.5:latest',
    ],
  },
  phi4: {
    name: 'phi4',
    type: 'chat',
    tags: [
      'phi4:14b',
      'phi4:14b-fp16',
      'phi4:14b-q4_K_M',
      'phi4:14b-q8_0',
      'phi4:latest',
    ],
  },
  'phi4-mini': {
    name: 'phi4-mini',
    type: 'chat',
    tags: [
      'phi4-mini:3.8b',
      'phi4-mini:3.8b-fp16',
      'phi4-mini:3.8b-q4_K_M',
      'phi4-mini:3.8b-q8_0',
      'phi4-mini:latest',
    ],
  },
  'phi4-mini-reasoning': {
    name: 'phi4-mini-reasoning',
    type: 'chat',
    tags: [
      'phi4-mini-reasoning:3.8b',
      'phi4-mini-reasoning:3.8b-fp16',
      'phi4-mini-reasoning:3.8b-q4_K_M',
      'phi4-mini-reasoning:3.8b-q8_0',
      'phi4-mini-reasoning:latest',
    ],
  },
  'phi4-reasoning': {
    name: 'phi4-reasoning',
    type: 'chat',
    tags: [
      'phi4-reasoning:14b',
      'phi4-reasoning:14b-fp16',
      'phi4-reasoning:14b-plus-fp16',
      'phi4-reasoning:14b-plus-q4_K_M',
      'phi4-reasoning:14b-plus-q8_0',
      'phi4-reasoning:14b-q4_K_M',
      'phi4-reasoning:14b-q8_0',
      'phi4-reasoning:latest',
      'phi4-reasoning:plus',
    ],
  },
  'phind-codellama': {
    name: 'phind-codellama',
    type: 'chat',
    tags: [
      'phind-codellama:34b',
      'phind-codellama:34b-fp16',
      'phind-codellama:34b-python',
      'phind-codellama:34b-python-fp16',
      'phind-codellama:34b-python-q2_K',
      'phind-codellama:34b-python-q3_K_L',
      'phind-codellama:34b-python-q3_K_M',
      'phind-codellama:34b-python-q3_K_S',
      'phind-codellama:34b-python-q4_0',
      'phind-codellama:34b-python-q4_1',
      'phind-codellama:34b-python-q4_K_M',
      'phind-codellama:34b-python-q4_K_S',
      'phind-codellama:34b-python-q5_0',
      'phind-codellama:34b-python-q5_1',
      'phind-codellama:34b-python-q5_K_M',
      'phind-codellama:34b-python-q5_K_S',
      'phind-codellama:34b-python-q6_K',
      'phind-codellama:34b-python-q8_0',
      'phind-codellama:34b-q2_K',
      'phind-codellama:34b-q3_K_L',
      'phind-codellama:34b-q3_K_M',
      'phind-codellama:34b-q3_K_S',
      'phind-codellama:34b-q4_0',
      'phind-codellama:34b-q4_1',
      'phind-codellama:34b-q4_K_M',
      'phind-codellama:34b-q4_K_S',
      'phind-codellama:34b-q5_0',
      'phind-codellama:34b-q5_1',
      'phind-codellama:34b-q5_K_M',
      'phind-codellama:34b-q5_K_S',
      'phind-codellama:34b-q6_K',
      'phind-codellama:34b-q8_0',
      'phind-codellama:34b-v2',
      'phind-codellama:34b-v2-fp16',
      'phind-codellama:34b-v2-q2_K',
      'phind-codellama:34b-v2-q3_K_L',
      'phind-codellama:34b-v2-q3_K_M',
      'phind-codellama:34b-v2-q3_K_S',
      'phind-codellama:34b-v2-q4_0',
      'phind-codellama:34b-v2-q4_1',
      'phind-codellama:34b-v2-q4_K_M',
      'phind-codellama:34b-v2-q4_K_S',
      'phind-codellama:34b-v2-q5_0',
      'phind-codellama:34b-v2-q5_1',
      'phind-codellama:34b-v2-q5_K_M',
      'phind-codellama:34b-v2-q5_K_S',
      'phind-codellama:34b-v2-q6_K',
      'phind-codellama:34b-v2-q8_0',
      'phind-codellama:latest',
    ],
  },
  qwen: {
    name: 'qwen',
    type: 'chat',
    tags: [
      'qwen:0.5b',
      'qwen:0.5b-chat',
      'qwen:0.5b-chat-v1.5-fp16',
      'qwen:0.5b-chat-v1.5-q2_K',
      'qwen:0.5b-chat-v1.5-q3_K_L',
      'qwen:0.5b-chat-v1.5-q3_K_M',
      'qwen:0.5b-chat-v1.5-q3_K_S',
      'qwen:0.5b-chat-v1.5-q4_0',
      'qwen:0.5b-chat-v1.5-q4_1',
      'qwen:0.5b-chat-v1.5-q4_K_M',
      'qwen:0.5b-chat-v1.5-q4_K_S',
      'qwen:0.5b-chat-v1.5-q5_0',
      'qwen:0.5b-chat-v1.5-q5_1',
      'qwen:0.5b-chat-v1.5-q5_K_M',
      'qwen:0.5b-chat-v1.5-q5_K_S',
      'qwen:0.5b-chat-v1.5-q6_K',
      'qwen:0.5b-chat-v1.5-q8_0',
      'qwen:0.5b-text',
      'qwen:0.5b-text-v1.5-fp16',
      'qwen:0.5b-text-v1.5-q2_K',
      'qwen:0.5b-text-v1.5-q3_K_L',
      'qwen:0.5b-text-v1.5-q3_K_M',
      'qwen:0.5b-text-v1.5-q3_K_S',
      'qwen:0.5b-text-v1.5-q4_0',
      'qwen:0.5b-text-v1.5-q4_1',
      'qwen:0.5b-text-v1.5-q4_K_M',
      'qwen:0.5b-text-v1.5-q4_K_S',
      'qwen:0.5b-text-v1.5-q5_0',
      'qwen:0.5b-text-v1.5-q5_1',
      'qwen:0.5b-text-v1.5-q5_K_M',
      'qwen:0.5b-text-v1.5-q5_K_S',
      'qwen:0.5b-text-v1.5-q6_K',
      'qwen:0.5b-text-v1.5-q8_0',
      'qwen:1.8b',
      'qwen:1.8b-chat',
      'qwen:1.8b-chat-fp16',
      'qwen:1.8b-chat-q2_K',
      'qwen:1.8b-chat-q3_K_L',
      'qwen:1.8b-chat-q3_K_M',
      'qwen:1.8b-chat-q3_K_S',
      'qwen:1.8b-chat-q4_0',
      'qwen:1.8b-chat-q4_1',
      'qwen:1.8b-chat-q4_K_M',
      'qwen:1.8b-chat-q4_K_S',
      'qwen:1.8b-chat-q5_0',
      'qwen:1.8b-chat-q5_1',
      'qwen:1.8b-chat-q5_K_M',
      'qwen:1.8b-chat-q5_K_S',
      'qwen:1.8b-chat-q6_K',
      'qwen:1.8b-chat-q8_0',
      'qwen:1.8b-chat-v1.5-fp16',
      'qwen:1.8b-chat-v1.5-q2_K',
      'qwen:1.8b-chat-v1.5-q3_K_L',
      'qwen:1.8b-chat-v1.5-q3_K_M',
      'qwen:1.8b-chat-v1.5-q3_K_S',
      'qwen:1.8b-chat-v1.5-q4_0',
      'qwen:1.8b-chat-v1.5-q4_1',
      'qwen:1.8b-chat-v1.5-q4_K_M',
      'qwen:1.8b-chat-v1.5-q4_K_S',
      'qwen:1.8b-chat-v1.5-q5_0',
      'qwen:1.8b-chat-v1.5-q5_1',
      'qwen:1.8b-chat-v1.5-q5_K_M',
      'qwen:1.8b-chat-v1.5-q5_K_S',
      'qwen:1.8b-chat-v1.5-q6_K',
      'qwen:1.8b-chat-v1.5-q8_0',
      'qwen:1.8b-text',
      'qwen:1.8b-text-fp16',
      'qwen:1.8b-text-q2_K',
      'qwen:1.8b-text-q3_K_L',
      'qwen:1.8b-text-q3_K_M',
      'qwen:1.8b-text-q3_K_S',
      'qwen:1.8b-text-q4_0',
      'qwen:1.8b-text-q4_1',
      'qwen:1.8b-text-q4_K_M',
      'qwen:1.8b-text-q4_K_S',
      'qwen:1.8b-text-q5_0',
      'qwen:1.8b-text-q5_1',
      'qwen:1.8b-text-q5_K_M',
      'qwen:1.8b-text-q5_K_S',
      'qwen:1.8b-text-q6_K',
      'qwen:1.8b-text-q8_0',
      'qwen:1.8b-text-v1.5-fp16',
      'qwen:1.8b-text-v1.5-q2_K',
      'qwen:1.8b-text-v1.5-q3_K_L',
      'qwen:1.8b-text-v1.5-q3_K_M',
      'qwen:1.8b-text-v1.5-q3_K_S',
      'qwen:1.8b-text-v1.5-q4_0',
      'qwen:1.8b-text-v1.5-q4_1',
      'qwen:1.8b-text-v1.5-q4_K_M',
      'qwen:1.8b-text-v1.5-q4_K_S',
      'qwen:1.8b-text-v1.5-q5_0',
      'qwen:1.8b-text-v1.5-q5_1',
      'qwen:1.8b-text-v1.5-q5_K_M',
      'qwen:1.8b-text-v1.5-q5_K_S',
      'qwen:1.8b-text-v1.5-q6_K',
      'qwen:1.8b-text-v1.5-q8_0',
      'qwen:110b',
      'qwen:110b-chat',
      'qwen:110b-chat-v1.5-fp16',
      'qwen:110b-chat-v1.5-q2_K',
      'qwen:110b-chat-v1.5-q3_K_L',
      'qwen:110b-chat-v1.5-q3_K_M',
      'qwen:110b-chat-v1.5-q3_K_S',
      'qwen:110b-chat-v1.5-q4_0',
      'qwen:110b-chat-v1.5-q4_1',
      'qwen:110b-chat-v1.5-q4_K_M',
      'qwen:110b-chat-v1.5-q4_K_S',
      'qwen:110b-chat-v1.5-q5_0',
      'qwen:110b-chat-v1.5-q5_1',
      'qwen:110b-chat-v1.5-q5_K_M',
      'qwen:110b-chat-v1.5-q5_K_S',
      'qwen:110b-chat-v1.5-q6_K',
      'qwen:110b-chat-v1.5-q8_0',
      'qwen:110b-text-v1.5-fp16',
      'qwen:110b-text-v1.5-q2_K',
      'qwen:110b-text-v1.5-q3_K_L',
      'qwen:110b-text-v1.5-q3_K_M',
      'qwen:110b-text-v1.5-q3_K_S',
      'qwen:110b-text-v1.5-q4_0',
      'qwen:110b-text-v1.5-q4_1',
      'qwen:110b-text-v1.5-q4_K_M',
      'qwen:110b-text-v1.5-q4_K_S',
      'qwen:110b-text-v1.5-q5_0',
      'qwen:110b-text-v1.5-q5_1',
      'qwen:110b-text-v1.5-q5_K_M',
      'qwen:110b-text-v1.5-q5_K_S',
      'qwen:110b-text-v1.5-q6_K',
      'qwen:110b-text-v1.5-q8_0',
      'qwen:14b',
      'qwen:14b-chat',
      'qwen:14b-chat-fp16',
      'qwen:14b-chat-q2_K',
      'qwen:14b-chat-q3_K_L',
      'qwen:14b-chat-q3_K_M',
      'qwen:14b-chat-q3_K_S',
      'qwen:14b-chat-q4_0',
      'qwen:14b-chat-q4_1',
      'qwen:14b-chat-q4_K_M',
      'qwen:14b-chat-q4_K_S',
      'qwen:14b-chat-q5_0',
      'qwen:14b-chat-q5_1',
      'qwen:14b-chat-q5_K_M',
      'qwen:14b-chat-q5_K_S',
      'qwen:14b-chat-q6_K',
      'qwen:14b-chat-q8_0',
      'qwen:14b-chat-v1.5-fp16',
      'qwen:14b-chat-v1.5-q2_K',
      'qwen:14b-chat-v1.5-q3_K_L',
      'qwen:14b-chat-v1.5-q3_K_M',
      'qwen:14b-chat-v1.5-q3_K_S',
      'qwen:14b-chat-v1.5-q4_0',
      'qwen:14b-chat-v1.5-q4_1',
      'qwen:14b-chat-v1.5-q4_K_M',
      'qwen:14b-chat-v1.5-q4_K_S',
      'qwen:14b-chat-v1.5-q5_0',
      'qwen:14b-chat-v1.5-q5_1',
      'qwen:14b-chat-v1.5-q5_K_M',
      'qwen:14b-chat-v1.5-q5_K_S',
      'qwen:14b-chat-v1.5-q6_K',
      'qwen:14b-chat-v1.5-q8_0',
      'qwen:14b-text',
      'qwen:14b-text-fp16',
      'qwen:14b-text-q2_K',
      'qwen:14b-text-q3_K_L',
      'qwen:14b-text-q3_K_M',
      'qwen:14b-text-q3_K_S',
      'qwen:14b-text-q4_0',
      'qwen:14b-text-q4_1',
      'qwen:14b-text-q4_K_M',
      'qwen:14b-text-q4_K_S',
      'qwen:14b-text-q5_0',
      'qwen:14b-text-q5_1',
      'qwen:14b-text-q5_K_M',
      'qwen:14b-text-q5_K_S',
      'qwen:14b-text-q6_K',
      'qwen:14b-text-q8_0',
      'qwen:14b-text-v1.5-fp16',
      'qwen:14b-text-v1.5-q2_K',
      'qwen:14b-text-v1.5-q3_K_L',
      'qwen:14b-text-v1.5-q3_K_M',
      'qwen:14b-text-v1.5-q3_K_S',
      'qwen:14b-text-v1.5-q4_0',
      'qwen:14b-text-v1.5-q4_1',
      'qwen:14b-text-v1.5-q4_K_M',
      'qwen:14b-text-v1.5-q4_K_S',
      'qwen:14b-text-v1.5-q5_0',
      'qwen:14b-text-v1.5-q5_1',
      'qwen:14b-text-v1.5-q5_K_M',
      'qwen:14b-text-v1.5-q5_K_S',
      'qwen:14b-text-v1.5-q6_K',
      'qwen:14b-text-v1.5-q8_0',
      'qwen:32b',
      'qwen:32b-chat',
      'qwen:32b-chat-v1.5-fp16',
      'qwen:32b-chat-v1.5-q2_K',
      'qwen:32b-chat-v1.5-q3_K_L',
      'qwen:32b-chat-v1.5-q3_K_M',
      'qwen:32b-chat-v1.5-q3_K_S',
      'qwen:32b-chat-v1.5-q4_0',
      'qwen:32b-chat-v1.5-q4_1',
      'qwen:32b-chat-v1.5-q4_K_M',
      'qwen:32b-chat-v1.5-q4_K_S',
      'qwen:32b-chat-v1.5-q5_0',
      'qwen:32b-chat-v1.5-q5_1',
      'qwen:32b-chat-v1.5-q5_K_M',
      'qwen:32b-chat-v1.5-q5_K_S',
      'qwen:32b-chat-v1.5-q6_K',
      'qwen:32b-chat-v1.5-q8_0',
      'qwen:32b-text',
      'qwen:32b-text-v1.5-q2_K',
      'qwen:32b-text-v1.5-q3_K_L',
      'qwen:32b-text-v1.5-q3_K_M',
      'qwen:32b-text-v1.5-q3_K_S',
      'qwen:32b-text-v1.5-q4_0',
      'qwen:32b-text-v1.5-q4_1',
      'qwen:32b-text-v1.5-q4_K_S',
      'qwen:32b-text-v1.5-q5_0',
      'qwen:32b-text-v1.5-q5_1',
      'qwen:32b-text-v1.5-q8_0',
      'qwen:4b',
      'qwen:4b-chat',
      'qwen:4b-chat-v1.5-fp16',
      'qwen:4b-chat-v1.5-q2_K',
      'qwen:4b-chat-v1.5-q3_K_L',
      'qwen:4b-chat-v1.5-q3_K_M',
      'qwen:4b-chat-v1.5-q3_K_S',
      'qwen:4b-chat-v1.5-q4_0',
      'qwen:4b-chat-v1.5-q4_1',
      'qwen:4b-chat-v1.5-q4_K_M',
      'qwen:4b-chat-v1.5-q4_K_S',
      'qwen:4b-chat-v1.5-q5_0',
      'qwen:4b-chat-v1.5-q5_1',
      'qwen:4b-chat-v1.5-q5_K_M',
      'qwen:4b-chat-v1.5-q5_K_S',
      'qwen:4b-chat-v1.5-q6_K',
      'qwen:4b-chat-v1.5-q8_0',
      'qwen:4b-text',
      'qwen:4b-text-v1.5-fp16',
      'qwen:4b-text-v1.5-q2_K',
      'qwen:4b-text-v1.5-q3_K_L',
      'qwen:4b-text-v1.5-q3_K_M',
      'qwen:4b-text-v1.5-q3_K_S',
      'qwen:4b-text-v1.5-q4_0',
      'qwen:4b-text-v1.5-q4_1',
      'qwen:4b-text-v1.5-q4_K_M',
      'qwen:4b-text-v1.5-q4_K_S',
      'qwen:4b-text-v1.5-q5_0',
      'qwen:4b-text-v1.5-q5_1',
      'qwen:4b-text-v1.5-q5_K_M',
      'qwen:4b-text-v1.5-q5_K_S',
      'qwen:4b-text-v1.5-q6_K',
      'qwen:4b-text-v1.5-q8_0',
      'qwen:72b',
      'qwen:72b-chat',
      'qwen:72b-chat-fp16',
      'qwen:72b-chat-q2_K',
      'qwen:72b-chat-q3_K_L',
      'qwen:72b-chat-q3_K_M',
      'qwen:72b-chat-q3_K_S',
      'qwen:72b-chat-q4_0',
      'qwen:72b-chat-q4_1',
      'qwen:72b-chat-q4_K_M',
      'qwen:72b-chat-q4_K_S',
      'qwen:72b-chat-q5_0',
      'qwen:72b-chat-q5_1',
      'qwen:72b-chat-q5_K_M',
      'qwen:72b-chat-q5_K_S',
      'qwen:72b-chat-q6_K',
      'qwen:72b-chat-q8_0',
      'qwen:72b-chat-v1.5-fp16',
      'qwen:72b-chat-v1.5-q2_K',
      'qwen:72b-chat-v1.5-q3_K_L',
      'qwen:72b-chat-v1.5-q3_K_M',
      'qwen:72b-chat-v1.5-q3_K_S',
      'qwen:72b-chat-v1.5-q4_0',
      'qwen:72b-chat-v1.5-q4_1',
      'qwen:72b-chat-v1.5-q4_K_M',
      'qwen:72b-chat-v1.5-q4_K_S',
      'qwen:72b-chat-v1.5-q5_0',
      'qwen:72b-chat-v1.5-q5_1',
      'qwen:72b-chat-v1.5-q5_K_M',
      'qwen:72b-chat-v1.5-q5_K_S',
      'qwen:72b-chat-v1.5-q6_K',
      'qwen:72b-chat-v1.5-q8_0',
      'qwen:72b-text',
      'qwen:72b-text-fp16',
      'qwen:72b-text-q2_K',
      'qwen:72b-text-q3_K_L',
      'qwen:72b-text-q3_K_M',
      'qwen:72b-text-q3_K_S',
      'qwen:72b-text-q4_0',
      'qwen:72b-text-q4_1',
      'qwen:72b-text-q4_K_M',
      'qwen:72b-text-q4_K_S',
      'qwen:72b-text-q5_0',
      'qwen:72b-text-q5_1',
      'qwen:72b-text-q5_K_M',
      'qwen:72b-text-q5_K_S',
      'qwen:72b-text-q6_K',
      'qwen:72b-text-q8_0',
      'qwen:72b-text-v1.5-fp16',
      'qwen:72b-text-v1.5-q2_K',
      'qwen:72b-text-v1.5-q3_K_L',
      'qwen:72b-text-v1.5-q3_K_M',
      'qwen:72b-text-v1.5-q3_K_S',
      'qwen:72b-text-v1.5-q4_0',
      'qwen:72b-text-v1.5-q4_1',
      'qwen:72b-text-v1.5-q4_K_M',
      'qwen:72b-text-v1.5-q4_K_S',
      'qwen:72b-text-v1.5-q5_0',
      'qwen:72b-text-v1.5-q5_1',
      'qwen:72b-text-v1.5-q5_K_M',
      'qwen:72b-text-v1.5-q5_K_S',
      'qwen:72b-text-v1.5-q6_K',
      'qwen:72b-text-v1.5-q8_0',
      'qwen:7b',
      'qwen:7b-chat',
      'qwen:7b-chat-fp16',
      'qwen:7b-chat-q2_K',
      'qwen:7b-chat-q3_K_L',
      'qwen:7b-chat-q3_K_M',
      'qwen:7b-chat-q3_K_S',
      'qwen:7b-chat-q4_0',
      'qwen:7b-chat-q4_1',
      'qwen:7b-chat-q4_K_M',
      'qwen:7b-chat-q4_K_S',
      'qwen:7b-chat-q5_0',
      'qwen:7b-chat-q5_1',
      'qwen:7b-chat-q5_K_M',
      'qwen:7b-chat-q5_K_S',
      'qwen:7b-chat-q6_K',
      'qwen:7b-chat-q8_0',
      'qwen:7b-chat-v1.5-fp16',
      'qwen:7b-chat-v1.5-q2_K',
      'qwen:7b-chat-v1.5-q3_K_L',
      'qwen:7b-chat-v1.5-q3_K_M',
      'qwen:7b-chat-v1.5-q3_K_S',
      'qwen:7b-chat-v1.5-q4_0',
      'qwen:7b-chat-v1.5-q4_1',
      'qwen:7b-chat-v1.5-q4_K_M',
      'qwen:7b-chat-v1.5-q4_K_S',
      'qwen:7b-chat-v1.5-q5_0',
      'qwen:7b-chat-v1.5-q5_1',
      'qwen:7b-chat-v1.5-q5_K_M',
      'qwen:7b-chat-v1.5-q5_K_S',
      'qwen:7b-chat-v1.5-q6_K',
      'qwen:7b-chat-v1.5-q8_0',
      'qwen:7b-fp16',
      'qwen:7b-q2_K',
      'qwen:7b-q3_K_L',
      'qwen:7b-q3_K_M',
      'qwen:7b-q3_K_S',
      'qwen:7b-q4_0',
      'qwen:7b-q4_1',
      'qwen:7b-q4_K_M',
      'qwen:7b-q4_K_S',
      'qwen:7b-q5_0',
      'qwen:7b-q5_1',
      'qwen:7b-q5_K_M',
      'qwen:7b-q5_K_S',
      'qwen:7b-q6_K',
      'qwen:7b-q8_0',
      'qwen:7b-text',
      'qwen:7b-text-v1.5-fp16',
      'qwen:7b-text-v1.5-q2_K',
      'qwen:7b-text-v1.5-q3_K_L',
      'qwen:7b-text-v1.5-q3_K_M',
      'qwen:7b-text-v1.5-q3_K_S',
      'qwen:7b-text-v1.5-q4_0',
      'qwen:7b-text-v1.5-q4_1',
      'qwen:7b-text-v1.5-q4_K_M',
      'qwen:7b-text-v1.5-q4_K_S',
      'qwen:7b-text-v1.5-q5_0',
      'qwen:7b-text-v1.5-q5_1',
      'qwen:7b-text-v1.5-q5_K_M',
      'qwen:7b-text-v1.5-q5_K_S',
      'qwen:7b-text-v1.5-q6_K',
      'qwen:7b-text-v1.5-q8_0',
      'qwen:latest',
    ],
  },
  qwen2: {
    name: 'qwen2',
    type: 'chat',
    tags: [
      'qwen2:0.5b',
      'qwen2:0.5b-instruct',
      'qwen2:0.5b-instruct-fp16',
      'qwen2:0.5b-instruct-q2_K',
      'qwen2:0.5b-instruct-q3_K_L',
      'qwen2:0.5b-instruct-q3_K_M',
      'qwen2:0.5b-instruct-q3_K_S',
      'qwen2:0.5b-instruct-q4_0',
      'qwen2:0.5b-instruct-q4_1',
      'qwen2:0.5b-instruct-q4_K_M',
      'qwen2:0.5b-instruct-q4_K_S',
      'qwen2:0.5b-instruct-q5_0',
      'qwen2:0.5b-instruct-q5_1',
      'qwen2:0.5b-instruct-q5_K_M',
      'qwen2:0.5b-instruct-q5_K_S',
      'qwen2:0.5b-instruct-q6_K',
      'qwen2:0.5b-instruct-q8_0',
      'qwen2:1.5b',
      'qwen2:1.5b-instruct',
      'qwen2:1.5b-instruct-fp16',
      'qwen2:1.5b-instruct-q2_K',
      'qwen2:1.5b-instruct-q3_K_L',
      'qwen2:1.5b-instruct-q3_K_M',
      'qwen2:1.5b-instruct-q3_K_S',
      'qwen2:1.5b-instruct-q4_0',
      'qwen2:1.5b-instruct-q4_1',
      'qwen2:1.5b-instruct-q4_K_M',
      'qwen2:1.5b-instruct-q4_K_S',
      'qwen2:1.5b-instruct-q5_0',
      'qwen2:1.5b-instruct-q5_1',
      'qwen2:1.5b-instruct-q5_K_M',
      'qwen2:1.5b-instruct-q5_K_S',
      'qwen2:1.5b-instruct-q6_K',
      'qwen2:1.5b-instruct-q8_0',
      'qwen2:72b',
      'qwen2:72b-instruct',
      'qwen2:72b-instruct-fp16',
      'qwen2:72b-instruct-q2_K',
      'qwen2:72b-instruct-q3_K_L',
      'qwen2:72b-instruct-q3_K_M',
      'qwen2:72b-instruct-q3_K_S',
      'qwen2:72b-instruct-q4_0',
      'qwen2:72b-instruct-q4_1',
      'qwen2:72b-instruct-q4_K_M',
      'qwen2:72b-instruct-q4_K_S',
      'qwen2:72b-instruct-q5_0',
      'qwen2:72b-instruct-q5_1',
      'qwen2:72b-instruct-q5_K_M',
      'qwen2:72b-instruct-q5_K_S',
      'qwen2:72b-instruct-q6_K',
      'qwen2:72b-instruct-q8_0',
      'qwen2:72b-text',
      'qwen2:72b-text-fp16',
      'qwen2:72b-text-q2_K',
      'qwen2:72b-text-q3_K_L',
      'qwen2:72b-text-q3_K_M',
      'qwen2:72b-text-q3_K_S',
      'qwen2:72b-text-q4_0',
      'qwen2:72b-text-q4_1',
      'qwen2:72b-text-q4_K_M',
      'qwen2:72b-text-q4_K_S',
      'qwen2:72b-text-q5_0',
      'qwen2:72b-text-q5_1',
      'qwen2:72b-text-q5_K_M',
      'qwen2:72b-text-q5_K_S',
      'qwen2:72b-text-q6_K',
      'qwen2:72b-text-q8_0',
      'qwen2:7b',
      'qwen2:7b-instruct',
      'qwen2:7b-instruct-fp16',
      'qwen2:7b-instruct-q2_K',
      'qwen2:7b-instruct-q3_K_L',
      'qwen2:7b-instruct-q3_K_M',
      'qwen2:7b-instruct-q3_K_S',
      'qwen2:7b-instruct-q4_0',
      'qwen2:7b-instruct-q4_1',
      'qwen2:7b-instruct-q4_K_M',
      'qwen2:7b-instruct-q4_K_S',
      'qwen2:7b-instruct-q5_0',
      'qwen2:7b-instruct-q5_1',
      'qwen2:7b-instruct-q5_K_M',
      'qwen2:7b-instruct-q5_K_S',
      'qwen2:7b-instruct-q6_K',
      'qwen2:7b-instruct-q8_0',
      'qwen2:7b-text',
      'qwen2:7b-text-q2_K',
      'qwen2:7b-text-q3_K_L',
      'qwen2:7b-text-q3_K_M',
      'qwen2:7b-text-q3_K_S',
      'qwen2:7b-text-q4_0',
      'qwen2:7b-text-q4_1',
      'qwen2:7b-text-q4_K_M',
      'qwen2:7b-text-q4_K_S',
      'qwen2:7b-text-q5_0',
      'qwen2:7b-text-q5_1',
      'qwen2:7b-text-q8_0',
      'qwen2:latest',
    ],
  },
  'qwen2-math': {
    name: 'qwen2-math',
    type: 'chat',
    tags: [
      'qwen2-math:1.5b',
      'qwen2-math:1.5b-instruct',
      'qwen2-math:1.5b-instruct-fp16',
      'qwen2-math:1.5b-instruct-q2_K',
      'qwen2-math:1.5b-instruct-q3_K_L',
      'qwen2-math:1.5b-instruct-q3_K_M',
      'qwen2-math:1.5b-instruct-q3_K_S',
      'qwen2-math:1.5b-instruct-q4_0',
      'qwen2-math:1.5b-instruct-q4_1',
      'qwen2-math:1.5b-instruct-q4_K_M',
      'qwen2-math:1.5b-instruct-q4_K_S',
      'qwen2-math:1.5b-instruct-q5_0',
      'qwen2-math:1.5b-instruct-q5_1',
      'qwen2-math:1.5b-instruct-q5_K_M',
      'qwen2-math:1.5b-instruct-q5_K_S',
      'qwen2-math:1.5b-instruct-q6_K',
      'qwen2-math:1.5b-instruct-q8_0',
      'qwen2-math:72b',
      'qwen2-math:72b-instruct',
      'qwen2-math:72b-instruct-fp16',
      'qwen2-math:72b-instruct-q2_K',
      'qwen2-math:72b-instruct-q3_K_L',
      'qwen2-math:72b-instruct-q3_K_M',
      'qwen2-math:72b-instruct-q3_K_S',
      'qwen2-math:72b-instruct-q4_0',
      'qwen2-math:72b-instruct-q4_1',
      'qwen2-math:72b-instruct-q4_K_M',
      'qwen2-math:72b-instruct-q4_K_S',
      'qwen2-math:72b-instruct-q5_0',
      'qwen2-math:72b-instruct-q5_1',
      'qwen2-math:72b-instruct-q5_K_M',
      'qwen2-math:72b-instruct-q5_K_S',
      'qwen2-math:72b-instruct-q6_K',
      'qwen2-math:72b-instruct-q8_0',
      'qwen2-math:7b',
      'qwen2-math:7b-instruct',
      'qwen2-math:7b-instruct-fp16',
      'qwen2-math:7b-instruct-q2_K',
      'qwen2-math:7b-instruct-q3_K_L',
      'qwen2-math:7b-instruct-q3_K_M',
      'qwen2-math:7b-instruct-q3_K_S',
      'qwen2-math:7b-instruct-q4_0',
      'qwen2-math:7b-instruct-q4_1',
      'qwen2-math:7b-instruct-q4_K_M',
      'qwen2-math:7b-instruct-q4_K_S',
      'qwen2-math:7b-instruct-q5_0',
      'qwen2-math:7b-instruct-q5_1',
      'qwen2-math:7b-instruct-q5_K_M',
      'qwen2-math:7b-instruct-q5_K_S',
      'qwen2-math:7b-instruct-q6_K',
      'qwen2-math:7b-instruct-q8_0',
      'qwen2-math:latest',
    ],
  },
  'qwen2.5': {
    name: 'qwen2.5',
    type: 'chat',
    tags: [
      'qwen2.5:0.5b',
      'qwen2.5:0.5b-base',
      'qwen2.5:0.5b-base-q2_K',
      'qwen2.5:0.5b-base-q3_K_L',
      'qwen2.5:0.5b-base-q3_K_M',
      'qwen2.5:0.5b-base-q3_K_S',
      'qwen2.5:0.5b-base-q4_0',
      'qwen2.5:0.5b-base-q4_1',
      'qwen2.5:0.5b-base-q4_K_M',
      'qwen2.5:0.5b-base-q4_K_S',
      'qwen2.5:0.5b-base-q5_0',
      'qwen2.5:0.5b-base-q5_1',
      'qwen2.5:0.5b-base-q5_K_S',
      'qwen2.5:0.5b-base-q8_0',
      'qwen2.5:0.5b-instruct',
      'qwen2.5:0.5b-instruct-fp16',
      'qwen2.5:0.5b-instruct-q2_K',
      'qwen2.5:0.5b-instruct-q3_K_L',
      'qwen2.5:0.5b-instruct-q3_K_M',
      'qwen2.5:0.5b-instruct-q3_K_S',
      'qwen2.5:0.5b-instruct-q4_0',
      'qwen2.5:0.5b-instruct-q4_1',
      'qwen2.5:0.5b-instruct-q4_K_M',
      'qwen2.5:0.5b-instruct-q4_K_S',
      'qwen2.5:0.5b-instruct-q5_0',
      'qwen2.5:0.5b-instruct-q5_1',
      'qwen2.5:0.5b-instruct-q5_K_M',
      'qwen2.5:0.5b-instruct-q5_K_S',
      'qwen2.5:0.5b-instruct-q6_K',
      'qwen2.5:0.5b-instruct-q8_0',
      'qwen2.5:1.5b',
      'qwen2.5:1.5b-instruct',
      'qwen2.5:1.5b-instruct-fp16',
      'qwen2.5:1.5b-instruct-q2_K',
      'qwen2.5:1.5b-instruct-q3_K_L',
      'qwen2.5:1.5b-instruct-q3_K_M',
      'qwen2.5:1.5b-instruct-q3_K_S',
      'qwen2.5:1.5b-instruct-q4_0',
      'qwen2.5:1.5b-instruct-q4_1',
      'qwen2.5:1.5b-instruct-q4_K_M',
      'qwen2.5:1.5b-instruct-q4_K_S',
      'qwen2.5:1.5b-instruct-q5_0',
      'qwen2.5:1.5b-instruct-q5_1',
      'qwen2.5:1.5b-instruct-q5_K_M',
      'qwen2.5:1.5b-instruct-q5_K_S',
      'qwen2.5:1.5b-instruct-q6_K',
      'qwen2.5:1.5b-instruct-q8_0',
      'qwen2.5:14b',
      'qwen2.5:14b-instruct',
      'qwen2.5:14b-instruct-fp16',
      'qwen2.5:14b-instruct-q2_K',
      'qwen2.5:14b-instruct-q3_K_L',
      'qwen2.5:14b-instruct-q3_K_M',
      'qwen2.5:14b-instruct-q3_K_S',
      'qwen2.5:14b-instruct-q4_0',
      'qwen2.5:14b-instruct-q4_1',
      'qwen2.5:14b-instruct-q4_K_M',
      'qwen2.5:14b-instruct-q4_K_S',
      'qwen2.5:14b-instruct-q5_0',
      'qwen2.5:14b-instruct-q5_1',
      'qwen2.5:14b-instruct-q5_K_M',
      'qwen2.5:14b-instruct-q5_K_S',
      'qwen2.5:14b-instruct-q6_K',
      'qwen2.5:14b-instruct-q8_0',
      'qwen2.5:32b',
      'qwen2.5:32b-instruct',
      'qwen2.5:32b-instruct-fp16',
      'qwen2.5:32b-instruct-q2_K',
      'qwen2.5:32b-instruct-q3_K_L',
      'qwen2.5:32b-instruct-q3_K_M',
      'qwen2.5:32b-instruct-q3_K_S',
      'qwen2.5:32b-instruct-q4_0',
      'qwen2.5:32b-instruct-q4_1',
      'qwen2.5:32b-instruct-q4_K_M',
      'qwen2.5:32b-instruct-q4_K_S',
      'qwen2.5:32b-instruct-q5_0',
      'qwen2.5:32b-instruct-q5_1',
      'qwen2.5:32b-instruct-q5_K_M',
      'qwen2.5:32b-instruct-q5_K_S',
      'qwen2.5:32b-instruct-q6_K',
      'qwen2.5:32b-instruct-q8_0',
      'qwen2.5:3b',
      'qwen2.5:3b-instruct',
      'qwen2.5:3b-instruct-fp16',
      'qwen2.5:3b-instruct-q2_K',
      'qwen2.5:3b-instruct-q3_K_L',
      'qwen2.5:3b-instruct-q3_K_M',
      'qwen2.5:3b-instruct-q3_K_S',
      'qwen2.5:3b-instruct-q4_0',
      'qwen2.5:3b-instruct-q4_1',
      'qwen2.5:3b-instruct-q4_K_M',
      'qwen2.5:3b-instruct-q4_K_S',
      'qwen2.5:3b-instruct-q5_0',
      'qwen2.5:3b-instruct-q5_1',
      'qwen2.5:3b-instruct-q5_K_M',
      'qwen2.5:3b-instruct-q5_K_S',
      'qwen2.5:3b-instruct-q6_K',
      'qwen2.5:3b-instruct-q8_0',
      'qwen2.5:72b',
      'qwen2.5:72b-instruct',
      'qwen2.5:72b-instruct-fp16',
      'qwen2.5:72b-instruct-q2_K',
      'qwen2.5:72b-instruct-q3_K_L',
      'qwen2.5:72b-instruct-q3_K_M',
      'qwen2.5:72b-instruct-q3_K_S',
      'qwen2.5:72b-instruct-q4_0',
      'qwen2.5:72b-instruct-q4_1',
      'qwen2.5:72b-instruct-q4_K_M',
      'qwen2.5:72b-instruct-q4_K_S',
      'qwen2.5:72b-instruct-q5_0',
      'qwen2.5:72b-instruct-q5_1',
      'qwen2.5:72b-instruct-q5_K_M',
      'qwen2.5:72b-instruct-q5_K_S',
      'qwen2.5:72b-instruct-q6_K',
      'qwen2.5:72b-instruct-q8_0',
      'qwen2.5:7b',
      'qwen2.5:7b-instruct',
      'qwen2.5:7b-instruct-fp16',
      'qwen2.5:7b-instruct-q2_K',
      'qwen2.5:7b-instruct-q3_K_L',
      'qwen2.5:7b-instruct-q3_K_M',
      'qwen2.5:7b-instruct-q3_K_S',
      'qwen2.5:7b-instruct-q4_0',
      'qwen2.5:7b-instruct-q4_1',
      'qwen2.5:7b-instruct-q4_K_M',
      'qwen2.5:7b-instruct-q4_K_S',
      'qwen2.5:7b-instruct-q5_0',
      'qwen2.5:7b-instruct-q5_1',
      'qwen2.5:7b-instruct-q5_K_M',
      'qwen2.5:7b-instruct-q5_K_S',
      'qwen2.5:7b-instruct-q6_K',
      'qwen2.5:7b-instruct-q8_0',
      'qwen2.5:latest',
    ],
  },
  'qwen2.5-coder': {
    name: 'qwen2.5-coder',
    type: 'chat',
    tags: [
      'qwen2.5-coder:0.5b',
      'qwen2.5-coder:0.5b-base',
      'qwen2.5-coder:0.5b-base-fp16',
      'qwen2.5-coder:0.5b-base-q2_K',
      'qwen2.5-coder:0.5b-base-q3_K_L',
      'qwen2.5-coder:0.5b-base-q3_K_M',
      'qwen2.5-coder:0.5b-base-q3_K_S',
      'qwen2.5-coder:0.5b-base-q4_0',
      'qwen2.5-coder:0.5b-base-q4_1',
      'qwen2.5-coder:0.5b-base-q4_K_M',
      'qwen2.5-coder:0.5b-base-q4_K_S',
      'qwen2.5-coder:0.5b-base-q5_0',
      'qwen2.5-coder:0.5b-base-q5_1',
      'qwen2.5-coder:0.5b-base-q5_K_M',
      'qwen2.5-coder:0.5b-base-q5_K_S',
      'qwen2.5-coder:0.5b-base-q6_K',
      'qwen2.5-coder:0.5b-base-q8_0',
      'qwen2.5-coder:0.5b-instruct',
      'qwen2.5-coder:0.5b-instruct-fp16',
      'qwen2.5-coder:0.5b-instruct-q2_K',
      'qwen2.5-coder:0.5b-instruct-q3_K_L',
      'qwen2.5-coder:0.5b-instruct-q3_K_M',
      'qwen2.5-coder:0.5b-instruct-q3_K_S',
      'qwen2.5-coder:0.5b-instruct-q4_0',
      'qwen2.5-coder:0.5b-instruct-q4_1',
      'qwen2.5-coder:0.5b-instruct-q4_K_M',
      'qwen2.5-coder:0.5b-instruct-q4_K_S',
      'qwen2.5-coder:0.5b-instruct-q5_0',
      'qwen2.5-coder:0.5b-instruct-q5_1',
      'qwen2.5-coder:0.5b-instruct-q5_K_M',
      'qwen2.5-coder:0.5b-instruct-q5_K_S',
      'qwen2.5-coder:0.5b-instruct-q6_K',
      'qwen2.5-coder:0.5b-instruct-q8_0',
      'qwen2.5-coder:1.5b',
      'qwen2.5-coder:1.5b-base',
      'qwen2.5-coder:1.5b-base-fp16',
      'qwen2.5-coder:1.5b-base-q2_K',
      'qwen2.5-coder:1.5b-base-q3_K_L',
      'qwen2.5-coder:1.5b-base-q3_K_M',
      'qwen2.5-coder:1.5b-base-q3_K_S',
      'qwen2.5-coder:1.5b-base-q4_0',
      'qwen2.5-coder:1.5b-base-q4_1',
      'qwen2.5-coder:1.5b-base-q4_K_M',
      'qwen2.5-coder:1.5b-base-q4_K_S',
      'qwen2.5-coder:1.5b-base-q5_0',
      'qwen2.5-coder:1.5b-base-q5_1',
      'qwen2.5-coder:1.5b-base-q5_K_M',
      'qwen2.5-coder:1.5b-base-q5_K_S',
      'qwen2.5-coder:1.5b-base-q6_K',
      'qwen2.5-coder:1.5b-base-q8_0',
      'qwen2.5-coder:1.5b-instruct',
      'qwen2.5-coder:1.5b-instruct-fp16',
      'qwen2.5-coder:1.5b-instruct-q2_K',
      'qwen2.5-coder:1.5b-instruct-q3_K_L',
      'qwen2.5-coder:1.5b-instruct-q3_K_M',
      'qwen2.5-coder:1.5b-instruct-q3_K_S',
      'qwen2.5-coder:1.5b-instruct-q4_0',
      'qwen2.5-coder:1.5b-instruct-q4_1',
      'qwen2.5-coder:1.5b-instruct-q4_K_M',
      'qwen2.5-coder:1.5b-instruct-q4_K_S',
      'qwen2.5-coder:1.5b-instruct-q5_0',
      'qwen2.5-coder:1.5b-instruct-q5_1',
      'qwen2.5-coder:1.5b-instruct-q5_K_M',
      'qwen2.5-coder:1.5b-instruct-q5_K_S',
      'qwen2.5-coder:1.5b-instruct-q6_K',
      'qwen2.5-coder:1.5b-instruct-q8_0',
      'qwen2.5-coder:14b',
      'qwen2.5-coder:14b-base',
      'qwen2.5-coder:14b-base-fp16',
      'qwen2.5-coder:14b-base-q2_K',
      'qwen2.5-coder:14b-base-q3_K_L',
      'qwen2.5-coder:14b-base-q3_K_M',
      'qwen2.5-coder:14b-base-q3_K_S',
      'qwen2.5-coder:14b-base-q4_0',
      'qwen2.5-coder:14b-base-q4_1',
      'qwen2.5-coder:14b-base-q4_K_M',
      'qwen2.5-coder:14b-base-q4_K_S',
      'qwen2.5-coder:14b-base-q5_0',
      'qwen2.5-coder:14b-base-q5_1',
      'qwen2.5-coder:14b-base-q5_K_M',
      'qwen2.5-coder:14b-base-q5_K_S',
      'qwen2.5-coder:14b-base-q6_K',
      'qwen2.5-coder:14b-base-q8_0',
      'qwen2.5-coder:14b-instruct',
      'qwen2.5-coder:14b-instruct-fp16',
      'qwen2.5-coder:14b-instruct-q2_K',
      'qwen2.5-coder:14b-instruct-q3_K_L',
      'qwen2.5-coder:14b-instruct-q3_K_M',
      'qwen2.5-coder:14b-instruct-q3_K_S',
      'qwen2.5-coder:14b-instruct-q4_0',
      'qwen2.5-coder:14b-instruct-q4_1',
      'qwen2.5-coder:14b-instruct-q4_K_M',
      'qwen2.5-coder:14b-instruct-q4_K_S',
      'qwen2.5-coder:14b-instruct-q5_0',
      'qwen2.5-coder:14b-instruct-q5_1',
      'qwen2.5-coder:14b-instruct-q5_K_M',
      'qwen2.5-coder:14b-instruct-q5_K_S',
      'qwen2.5-coder:14b-instruct-q6_K',
      'qwen2.5-coder:14b-instruct-q8_0',
      'qwen2.5-coder:32b',
      'qwen2.5-coder:32b-base',
      'qwen2.5-coder:32b-base-fp16',
      'qwen2.5-coder:32b-base-q2_K',
      'qwen2.5-coder:32b-base-q3_K_L',
      'qwen2.5-coder:32b-base-q3_K_M',
      'qwen2.5-coder:32b-base-q3_K_S',
      'qwen2.5-coder:32b-base-q4_0',
      'qwen2.5-coder:32b-base-q4_1',
      'qwen2.5-coder:32b-base-q4_K_M',
      'qwen2.5-coder:32b-base-q4_K_S',
      'qwen2.5-coder:32b-base-q5_0',
      'qwen2.5-coder:32b-base-q5_1',
      'qwen2.5-coder:32b-base-q5_K_M',
      'qwen2.5-coder:32b-base-q5_K_S',
      'qwen2.5-coder:32b-base-q6_K',
      'qwen2.5-coder:32b-base-q8_0',
      'qwen2.5-coder:32b-instruct',
      'qwen2.5-coder:32b-instruct-fp16',
      'qwen2.5-coder:32b-instruct-q2_K',
      'qwen2.5-coder:32b-instruct-q3_K_L',
      'qwen2.5-coder:32b-instruct-q3_K_M',
      'qwen2.5-coder:32b-instruct-q3_K_S',
      'qwen2.5-coder:32b-instruct-q4_0',
      'qwen2.5-coder:32b-instruct-q4_1',
      'qwen2.5-coder:32b-instruct-q4_K_M',
      'qwen2.5-coder:32b-instruct-q4_K_S',
      'qwen2.5-coder:32b-instruct-q5_0',
      'qwen2.5-coder:32b-instruct-q5_1',
      'qwen2.5-coder:32b-instruct-q5_K_M',
      'qwen2.5-coder:32b-instruct-q5_K_S',
      'qwen2.5-coder:32b-instruct-q6_K',
      'qwen2.5-coder:32b-instruct-q8_0',
      'qwen2.5-coder:3b',
      'qwen2.5-coder:3b-base',
      'qwen2.5-coder:3b-base-fp16',
      'qwen2.5-coder:3b-base-q2_K',
      'qwen2.5-coder:3b-base-q3_K_L',
      'qwen2.5-coder:3b-base-q3_K_M',
      'qwen2.5-coder:3b-base-q3_K_S',
      'qwen2.5-coder:3b-base-q4_0',
      'qwen2.5-coder:3b-base-q4_1',
      'qwen2.5-coder:3b-base-q4_K_M',
      'qwen2.5-coder:3b-base-q4_K_S',
      'qwen2.5-coder:3b-base-q5_0',
      'qwen2.5-coder:3b-base-q5_1',
      'qwen2.5-coder:3b-base-q5_K_M',
      'qwen2.5-coder:3b-base-q5_K_S',
      'qwen2.5-coder:3b-base-q6_K',
      'qwen2.5-coder:3b-base-q8_0',
      'qwen2.5-coder:3b-instruct',
      'qwen2.5-coder:3b-instruct-fp16',
      'qwen2.5-coder:3b-instruct-q2_K',
      'qwen2.5-coder:3b-instruct-q3_K_L',
      'qwen2.5-coder:3b-instruct-q3_K_M',
      'qwen2.5-coder:3b-instruct-q3_K_S',
      'qwen2.5-coder:3b-instruct-q4_0',
      'qwen2.5-coder:3b-instruct-q4_1',
      'qwen2.5-coder:3b-instruct-q4_K_M',
      'qwen2.5-coder:3b-instruct-q4_K_S',
      'qwen2.5-coder:3b-instruct-q5_0',
      'qwen2.5-coder:3b-instruct-q5_1',
      'qwen2.5-coder:3b-instruct-q5_K_M',
      'qwen2.5-coder:3b-instruct-q5_K_S',
      'qwen2.5-coder:3b-instruct-q6_K',
      'qwen2.5-coder:3b-instruct-q8_0',
      'qwen2.5-coder:7b',
      'qwen2.5-coder:7b-base',
      'qwen2.5-coder:7b-base-fp16',
      'qwen2.5-coder:7b-base-q2_K',
      'qwen2.5-coder:7b-base-q3_K_L',
      'qwen2.5-coder:7b-base-q3_K_M',
      'qwen2.5-coder:7b-base-q3_K_S',
      'qwen2.5-coder:7b-base-q4_0',
      'qwen2.5-coder:7b-base-q4_1',
      'qwen2.5-coder:7b-base-q4_K_M',
      'qwen2.5-coder:7b-base-q4_K_S',
      'qwen2.5-coder:7b-base-q5_0',
      'qwen2.5-coder:7b-base-q5_1',
      'qwen2.5-coder:7b-base-q5_K_M',
      'qwen2.5-coder:7b-base-q5_K_S',
      'qwen2.5-coder:7b-base-q6_K',
      'qwen2.5-coder:7b-base-q8_0',
      'qwen2.5-coder:7b-instruct',
      'qwen2.5-coder:7b-instruct-fp16',
      'qwen2.5-coder:7b-instruct-q2_K',
      'qwen2.5-coder:7b-instruct-q3_K_L',
      'qwen2.5-coder:7b-instruct-q3_K_M',
      'qwen2.5-coder:7b-instruct-q3_K_S',
      'qwen2.5-coder:7b-instruct-q4_0',
      'qwen2.5-coder:7b-instruct-q4_1',
      'qwen2.5-coder:7b-instruct-q4_K_M',
      'qwen2.5-coder:7b-instruct-q4_K_S',
      'qwen2.5-coder:7b-instruct-q5_0',
      'qwen2.5-coder:7b-instruct-q5_1',
      'qwen2.5-coder:7b-instruct-q5_K_M',
      'qwen2.5-coder:7b-instruct-q5_K_S',
      'qwen2.5-coder:7b-instruct-q6_K',
      'qwen2.5-coder:7b-instruct-q8_0',
      'qwen2.5-coder:latest',
    ],
  },
  qwen3: {
    name: 'qwen3',
    type: 'chat',
    tags: [
      'qwen3:0.6b',
      'qwen3:0.6b-fp16',
      'qwen3:0.6b-q4_K_M',
      'qwen3:0.6b-q8_0',
      'qwen3:1.7b',
      'qwen3:1.7b-fp16',
      'qwen3:1.7b-q4_K_M',
      'qwen3:1.7b-q8_0',
      'qwen3:14b',
      'qwen3:14b-fp16',
      'qwen3:14b-q4_K_M',
      'qwen3:14b-q8_0',
      'qwen3:235b',
      'qwen3:235b-a22b',
      'qwen3:235b-a22b-fp16',
      'qwen3:235b-a22b-instruct-2507-q4_K_M',
      'qwen3:235b-a22b-instruct-2507-q8_0',
      'qwen3:235b-a22b-q4_K_M',
      'qwen3:235b-a22b-q8_0',
      'qwen3:235b-a22b-thinking-2507-fp16',
      'qwen3:235b-a22b-thinking-2507-q4_K_M',
      'qwen3:235b-a22b-thinking-2507-q8_0',
      'qwen3:235b-thinking',
      'qwen3:30b',
      'qwen3:30b-a3b',
      'qwen3:30b-a3b-fp16',
      'qwen3:30b-a3b-instruct-2507-fp16',
      'qwen3:30b-a3b-instruct-2507-q4_K_M',
      'qwen3:30b-a3b-instruct-2507-q8_0',
      'qwen3:30b-a3b-q4_K_M',
      'qwen3:30b-a3b-q8_0',
      'qwen3:30b-a3b-thinking-2507-fp16',
      'qwen3:30b-a3b-thinking-2507-q4_K_M',
      'qwen3:30b-a3b-thinking-2507-q8_0',
      'qwen3:30b-thinking',
      'qwen3:32b',
      'qwen3:32b-fp16',
      'qwen3:32b-q4_K_M',
      'qwen3:32b-q8_0',
      'qwen3:4b',
      'qwen3:4b-fp16',
      'qwen3:4b-instruct',
      'qwen3:4b-instruct-2507-fp16',
      'qwen3:4b-instruct-2507-q4_K_M',
      'qwen3:4b-instruct-2507-q8_0',
      'qwen3:4b-q4_K_M',
      'qwen3:4b-q8_0',
      'qwen3:4b-thinking',
      'qwen3:4b-thinking-2507-fp16',
      'qwen3:4b-thinking-2507-q4_K_M',
      'qwen3:4b-thinking-2507-q8_0',
      'qwen3:8b',
      'qwen3:8b-fp16',
      'qwen3:8b-q4_K_M',
      'qwen3:8b-q8_0',
      'qwen3:latest',
    ],
  },
  'qwen3-coder': {
    name: 'qwen3-coder',
    type: 'chat',
    tags: [
      'qwen3-coder:30b',
      'qwen3-coder:30b-a3b-fp16',
      'qwen3-coder:30b-a3b-q4_K_M',
      'qwen3-coder:30b-a3b-q8_0',
      'qwen3-coder:480b-a35b-fp16',
      'qwen3-coder:latest',
    ],
  },
  qwq: {
    name: 'qwq',
    type: 'chat',
    tags: [
      'qwq:32b',
      'qwq:32b-fp16',
      'qwq:32b-preview-fp16',
      'qwq:32b-preview-q4_K_M',
      'qwq:32b-preview-q8_0',
      'qwq:32b-q4_K_M',
      'qwq:32b-q8_0',
      'qwq:latest',
    ],
  },
  'r1-1776': {
    name: 'r1-1776',
    type: 'chat',
    tags: [
      'r1-1776:671b',
      'r1-1776:671b-fp16',
      'r1-1776:671b-q4_K_M',
      'r1-1776:671b-q8_0',
      'r1-1776:70b',
      'r1-1776:70b-distill-llama-fp16',
      'r1-1776:70b-distill-llama-q4_K_M',
      'r1-1776:70b-distill-llama-q8_0',
      'r1-1776:latest',
    ],
  },
  'reader-lm': {
    name: 'reader-lm',
    type: 'chat',
    tags: [
      'reader-lm:0.5b',
      'reader-lm:0.5b-fp16',
      'reader-lm:0.5b-q2_K',
      'reader-lm:0.5b-q3_K_L',
      'reader-lm:0.5b-q3_K_M',
      'reader-lm:0.5b-q3_K_S',
      'reader-lm:0.5b-q4_0',
      'reader-lm:0.5b-q4_1',
      'reader-lm:0.5b-q4_K_M',
      'reader-lm:0.5b-q4_K_S',
      'reader-lm:0.5b-q5_0',
      'reader-lm:0.5b-q5_1',
      'reader-lm:0.5b-q5_K_M',
      'reader-lm:0.5b-q5_K_S',
      'reader-lm:0.5b-q6_K',
      'reader-lm:0.5b-q8_0',
      'reader-lm:1.5b',
      'reader-lm:1.5b-fp16',
      'reader-lm:1.5b-q2_K',
      'reader-lm:1.5b-q3_K_L',
      'reader-lm:1.5b-q3_K_M',
      'reader-lm:1.5b-q3_K_S',
      'reader-lm:1.5b-q4_0',
      'reader-lm:1.5b-q4_1',
      'reader-lm:1.5b-q4_K_M',
      'reader-lm:1.5b-q4_K_S',
      'reader-lm:1.5b-q5_0',
      'reader-lm:1.5b-q5_1',
      'reader-lm:1.5b-q5_K_M',
      'reader-lm:1.5b-q5_K_S',
      'reader-lm:1.5b-q6_K',
      'reader-lm:1.5b-q8_0',
      'reader-lm:latest',
    ],
  },
  reflection: {
    name: 'reflection',
    type: 'chat',
    tags: [
      'reflection:70b',
      'reflection:70b-fp16',
      'reflection:70b-q2_K',
      'reflection:70b-q3_K_L',
      'reflection:70b-q3_K_M',
      'reflection:70b-q3_K_S',
      'reflection:70b-q4_0',
      'reflection:70b-q4_1',
      'reflection:70b-q4_K_M',
      'reflection:70b-q4_K_S',
      'reflection:70b-q5_0',
      'reflection:70b-q5_1',
      'reflection:70b-q5_K_M',
      'reflection:70b-q5_K_S',
      'reflection:70b-q6_K',
      'reflection:70b-q8_0',
      'reflection:latest',
    ],
  },
  sailor2: {
    name: 'sailor2',
    type: 'chat',
    tags: [
      'sailor2:1b',
      'sailor2:1b-chat-fp16',
      'sailor2:1b-chat-q4_K_M',
      'sailor2:1b-chat-q8_0',
      'sailor2:20b',
      'sailor2:20b-chat-fp16',
      'sailor2:20b-chat-q4_K_M',
      'sailor2:20b-chat-q8_0',
      'sailor2:8b',
      'sailor2:8b-chat-fp16',
      'sailor2:8b-chat-q4_K_M',
      'sailor2:8b-chat-q8_0',
      'sailor2:latest',
    ],
  },
  'samantha-mistral': {
    name: 'samantha-mistral',
    type: 'chat',
    tags: [
      'samantha-mistral:7b',
      'samantha-mistral:7b-instruct-fp16',
      'samantha-mistral:7b-instruct-q2_K',
      'samantha-mistral:7b-instruct-q3_K_L',
      'samantha-mistral:7b-instruct-q3_K_M',
      'samantha-mistral:7b-instruct-q3_K_S',
      'samantha-mistral:7b-instruct-q4_0',
      'samantha-mistral:7b-instruct-q4_1',
      'samantha-mistral:7b-instruct-q4_K_M',
      'samantha-mistral:7b-instruct-q4_K_S',
      'samantha-mistral:7b-instruct-q5_0',
      'samantha-mistral:7b-instruct-q5_1',
      'samantha-mistral:7b-instruct-q5_K_M',
      'samantha-mistral:7b-instruct-q5_K_S',
      'samantha-mistral:7b-instruct-q6_K',
      'samantha-mistral:7b-instruct-q8_0',
      'samantha-mistral:7b-text',
      'samantha-mistral:7b-text-fp16',
      'samantha-mistral:7b-text-q2_K',
      'samantha-mistral:7b-text-q3_K_L',
      'samantha-mistral:7b-text-q3_K_M',
      'samantha-mistral:7b-text-q3_K_S',
      'samantha-mistral:7b-text-q4_0',
      'samantha-mistral:7b-text-q4_1',
      'samantha-mistral:7b-text-q4_K_M',
      'samantha-mistral:7b-text-q4_K_S',
      'samantha-mistral:7b-text-q5_0',
      'samantha-mistral:7b-text-q5_1',
      'samantha-mistral:7b-text-q5_K_M',
      'samantha-mistral:7b-text-q5_K_S',
      'samantha-mistral:7b-text-q6_K',
      'samantha-mistral:7b-text-q8_0',
      'samantha-mistral:7b-v1.2-text',
      'samantha-mistral:7b-v1.2-text-fp16',
      'samantha-mistral:7b-v1.2-text-q2_K',
      'samantha-mistral:7b-v1.2-text-q3_K_L',
      'samantha-mistral:7b-v1.2-text-q3_K_M',
      'samantha-mistral:7b-v1.2-text-q3_K_S',
      'samantha-mistral:7b-v1.2-text-q4_0',
      'samantha-mistral:7b-v1.2-text-q4_1',
      'samantha-mistral:7b-v1.2-text-q4_K_M',
      'samantha-mistral:7b-v1.2-text-q4_K_S',
      'samantha-mistral:7b-v1.2-text-q5_0',
      'samantha-mistral:7b-v1.2-text-q5_1',
      'samantha-mistral:7b-v1.2-text-q5_K_M',
      'samantha-mistral:7b-v1.2-text-q5_K_S',
      'samantha-mistral:7b-v1.2-text-q6_K',
      'samantha-mistral:7b-v1.2-text-q8_0',
      'samantha-mistral:latest',
    ],
  },
  shieldgemma: {
    name: 'shieldgemma',
    type: 'chat',
    tags: [
      'shieldgemma:27b',
      'shieldgemma:27b-fp16',
      'shieldgemma:27b-q2_K',
      'shieldgemma:27b-q3_K_L',
      'shieldgemma:27b-q3_K_M',
      'shieldgemma:27b-q3_K_S',
      'shieldgemma:27b-q4_0',
      'shieldgemma:27b-q4_1',
      'shieldgemma:27b-q4_K_M',
      'shieldgemma:27b-q4_K_S',
      'shieldgemma:27b-q5_0',
      'shieldgemma:27b-q5_1',
      'shieldgemma:27b-q5_K_M',
      'shieldgemma:27b-q5_K_S',
      'shieldgemma:27b-q6_K',
      'shieldgemma:27b-q8_0',
      'shieldgemma:2b',
      'shieldgemma:2b-fp16',
      'shieldgemma:2b-q2_K',
      'shieldgemma:2b-q3_K_L',
      'shieldgemma:2b-q3_K_M',
      'shieldgemma:2b-q3_K_S',
      'shieldgemma:2b-q4_0',
      'shieldgemma:2b-q4_1',
      'shieldgemma:2b-q4_K_M',
      'shieldgemma:2b-q4_K_S',
      'shieldgemma:2b-q5_0',
      'shieldgemma:2b-q5_1',
      'shieldgemma:2b-q5_K_M',
      'shieldgemma:2b-q5_K_S',
      'shieldgemma:2b-q6_K',
      'shieldgemma:2b-q8_0',
      'shieldgemma:9b',
      'shieldgemma:9b-fp16',
      'shieldgemma:9b-q2_K',
      'shieldgemma:9b-q3_K_L',
      'shieldgemma:9b-q3_K_M',
      'shieldgemma:9b-q3_K_S',
      'shieldgemma:9b-q4_0',
      'shieldgemma:9b-q4_1',
      'shieldgemma:9b-q4_K_M',
      'shieldgemma:9b-q4_K_S',
      'shieldgemma:9b-q5_0',
      'shieldgemma:9b-q5_1',
      'shieldgemma:9b-q5_K_M',
      'shieldgemma:9b-q5_K_S',
      'shieldgemma:9b-q6_K',
      'shieldgemma:9b-q8_0',
      'shieldgemma:latest',
    ],
  },
  smallthinker: {
    name: 'smallthinker',
    type: 'chat',
    tags: [
      'smallthinker:3b',
      'smallthinker:3b-preview-fp16',
      'smallthinker:3b-preview-q4_K_M',
      'smallthinker:3b-preview-q8_0',
      'smallthinker:latest',
    ],
  },
  smollm: {
    name: 'smollm',
    type: 'chat',
    tags: [
      'smollm:1.7b',
      'smollm:1.7b-base-v0.2-fp16',
      'smollm:1.7b-base-v0.2-q2_K',
      'smollm:1.7b-base-v0.2-q3_K_L',
      'smollm:1.7b-base-v0.2-q3_K_M',
      'smollm:1.7b-base-v0.2-q3_K_S',
      'smollm:1.7b-base-v0.2-q4_0',
      'smollm:1.7b-base-v0.2-q4_1',
      'smollm:1.7b-base-v0.2-q4_K_M',
      'smollm:1.7b-base-v0.2-q4_K_S',
      'smollm:1.7b-base-v0.2-q5_0',
      'smollm:1.7b-base-v0.2-q5_1',
      'smollm:1.7b-base-v0.2-q5_K_M',
      'smollm:1.7b-base-v0.2-q5_K_S',
      'smollm:1.7b-base-v0.2-q6_K',
      'smollm:1.7b-base-v0.2-q8_0',
      'smollm:1.7b-instruct-v0.2-fp16',
      'smollm:1.7b-instruct-v0.2-q2_K',
      'smollm:1.7b-instruct-v0.2-q3_K_L',
      'smollm:1.7b-instruct-v0.2-q3_K_M',
      'smollm:1.7b-instruct-v0.2-q3_K_S',
      'smollm:1.7b-instruct-v0.2-q4_0',
      'smollm:1.7b-instruct-v0.2-q4_1',
      'smollm:1.7b-instruct-v0.2-q4_K_M',
      'smollm:1.7b-instruct-v0.2-q4_K_S',
      'smollm:1.7b-instruct-v0.2-q5_0',
      'smollm:1.7b-instruct-v0.2-q5_1',
      'smollm:1.7b-instruct-v0.2-q5_K_M',
      'smollm:1.7b-instruct-v0.2-q5_K_S',
      'smollm:1.7b-instruct-v0.2-q6_K',
      'smollm:1.7b-instruct-v0.2-q8_0',
      'smollm:135m',
      'smollm:135m-base-v0.2-fp16',
      'smollm:135m-base-v0.2-q2_K',
      'smollm:135m-base-v0.2-q3_K_L',
      'smollm:135m-base-v0.2-q3_K_M',
      'smollm:135m-base-v0.2-q3_K_S',
      'smollm:135m-base-v0.2-q4_0',
      'smollm:135m-base-v0.2-q4_1',
      'smollm:135m-base-v0.2-q4_K_M',
      'smollm:135m-base-v0.2-q4_K_S',
      'smollm:135m-base-v0.2-q5_0',
      'smollm:135m-base-v0.2-q5_1',
      'smollm:135m-base-v0.2-q5_K_M',
      'smollm:135m-base-v0.2-q5_K_S',
      'smollm:135m-base-v0.2-q6_K',
      'smollm:135m-base-v0.2-q8_0',
      'smollm:135m-instruct-v0.2-fp16',
      'smollm:135m-instruct-v0.2-q2_K',
      'smollm:135m-instruct-v0.2-q3_K_L',
      'smollm:135m-instruct-v0.2-q3_K_M',
      'smollm:135m-instruct-v0.2-q3_K_S',
      'smollm:135m-instruct-v0.2-q4_0',
      'smollm:135m-instruct-v0.2-q4_1',
      'smollm:135m-instruct-v0.2-q4_K_M',
      'smollm:135m-instruct-v0.2-q4_K_S',
      'smollm:135m-instruct-v0.2-q5_0',
      'smollm:135m-instruct-v0.2-q5_1',
      'smollm:135m-instruct-v0.2-q5_K_M',
      'smollm:135m-instruct-v0.2-q5_K_S',
      'smollm:135m-instruct-v0.2-q6_K',
      'smollm:135m-instruct-v0.2-q8_0',
      'smollm:360m',
      'smollm:360m-base-v0.2-fp16',
      'smollm:360m-base-v0.2-q2_K',
      'smollm:360m-base-v0.2-q3_K_L',
      'smollm:360m-base-v0.2-q3_K_M',
      'smollm:360m-base-v0.2-q3_K_S',
      'smollm:360m-base-v0.2-q4_0',
      'smollm:360m-base-v0.2-q4_1',
      'smollm:360m-base-v0.2-q4_K_M',
      'smollm:360m-base-v0.2-q4_K_S',
      'smollm:360m-base-v0.2-q5_0',
      'smollm:360m-base-v0.2-q5_1',
      'smollm:360m-base-v0.2-q5_K_M',
      'smollm:360m-base-v0.2-q5_K_S',
      'smollm:360m-base-v0.2-q6_K',
      'smollm:360m-base-v0.2-q8_0',
      'smollm:360m-instruct-v0.2-fp16',
      'smollm:360m-instruct-v0.2-q2_K',
      'smollm:360m-instruct-v0.2-q3_K_L',
      'smollm:360m-instruct-v0.2-q3_K_M',
      'smollm:360m-instruct-v0.2-q3_K_S',
      'smollm:360m-instruct-v0.2-q4_0',
      'smollm:360m-instruct-v0.2-q4_1',
      'smollm:360m-instruct-v0.2-q4_K_M',
      'smollm:360m-instruct-v0.2-q4_K_S',
      'smollm:360m-instruct-v0.2-q5_0',
      'smollm:360m-instruct-v0.2-q5_1',
      'smollm:360m-instruct-v0.2-q5_K_M',
      'smollm:360m-instruct-v0.2-q5_K_S',
      'smollm:360m-instruct-v0.2-q6_K',
      'smollm:360m-instruct-v0.2-q8_0',
      'smollm:latest',
    ],
  },
  smollm2: {
    name: 'smollm2',
    type: 'chat',
    tags: [
      'smollm2:1.7b',
      'smollm2:1.7b-instruct-fp16',
      'smollm2:1.7b-instruct-q2_K',
      'smollm2:1.7b-instruct-q3_K_L',
      'smollm2:1.7b-instruct-q3_K_M',
      'smollm2:1.7b-instruct-q3_K_S',
      'smollm2:1.7b-instruct-q4_0',
      'smollm2:1.7b-instruct-q4_1',
      'smollm2:1.7b-instruct-q4_K_M',
      'smollm2:1.7b-instruct-q4_K_S',
      'smollm2:1.7b-instruct-q5_0',
      'smollm2:1.7b-instruct-q5_1',
      'smollm2:1.7b-instruct-q5_K_M',
      'smollm2:1.7b-instruct-q5_K_S',
      'smollm2:1.7b-instruct-q6_K',
      'smollm2:1.7b-instruct-q8_0',
      'smollm2:135m',
      'smollm2:135m-instruct-fp16',
      'smollm2:135m-instruct-q2_K',
      'smollm2:135m-instruct-q3_K_L',
      'smollm2:135m-instruct-q3_K_M',
      'smollm2:135m-instruct-q3_K_S',
      'smollm2:135m-instruct-q4_0',
      'smollm2:135m-instruct-q4_1',
      'smollm2:135m-instruct-q4_K_M',
      'smollm2:135m-instruct-q4_K_S',
      'smollm2:135m-instruct-q5_0',
      'smollm2:135m-instruct-q5_1',
      'smollm2:135m-instruct-q5_K_M',
      'smollm2:135m-instruct-q5_K_S',
      'smollm2:135m-instruct-q6_K',
      'smollm2:135m-instruct-q8_0',
      'smollm2:360m',
      'smollm2:360m-instruct-fp16',
      'smollm2:360m-instruct-q2_K',
      'smollm2:360m-instruct-q3_K_L',
      'smollm2:360m-instruct-q3_K_M',
      'smollm2:360m-instruct-q3_K_S',
      'smollm2:360m-instruct-q4_0',
      'smollm2:360m-instruct-q4_1',
      'smollm2:360m-instruct-q4_K_M',
      'smollm2:360m-instruct-q4_K_S',
      'smollm2:360m-instruct-q5_0',
      'smollm2:360m-instruct-q5_1',
      'smollm2:360m-instruct-q5_K_M',
      'smollm2:360m-instruct-q5_K_S',
      'smollm2:360m-instruct-q6_K',
      'smollm2:360m-instruct-q8_0',
      'smollm2:latest',
    ],
  },
  solar: {
    name: 'solar',
    type: 'chat',
    tags: [
      'solar:10.7b',
      'solar:10.7b-instruct-v1-fp16',
      'solar:10.7b-instruct-v1-q2_K',
      'solar:10.7b-instruct-v1-q3_K_L',
      'solar:10.7b-instruct-v1-q3_K_M',
      'solar:10.7b-instruct-v1-q3_K_S',
      'solar:10.7b-instruct-v1-q4_0',
      'solar:10.7b-instruct-v1-q4_1',
      'solar:10.7b-instruct-v1-q4_K_M',
      'solar:10.7b-instruct-v1-q4_K_S',
      'solar:10.7b-instruct-v1-q5_0',
      'solar:10.7b-instruct-v1-q5_1',
      'solar:10.7b-instruct-v1-q5_K_M',
      'solar:10.7b-instruct-v1-q5_K_S',
      'solar:10.7b-instruct-v1-q6_K',
      'solar:10.7b-instruct-v1-q8_0',
      'solar:10.7b-text-v1-fp16',
      'solar:10.7b-text-v1-q2_K',
      'solar:10.7b-text-v1-q3_K_L',
      'solar:10.7b-text-v1-q3_K_M',
      'solar:10.7b-text-v1-q3_K_S',
      'solar:10.7b-text-v1-q4_0',
      'solar:10.7b-text-v1-q4_1',
      'solar:10.7b-text-v1-q4_K_M',
      'solar:10.7b-text-v1-q4_K_S',
      'solar:10.7b-text-v1-q5_0',
      'solar:10.7b-text-v1-q5_1',
      'solar:10.7b-text-v1-q5_K_M',
      'solar:10.7b-text-v1-q5_K_S',
      'solar:10.7b-text-v1-q6_K',
      'solar:10.7b-text-v1-q8_0',
      'solar:latest',
    ],
  },
  'solar-pro': {
    name: 'solar-pro',
    type: 'chat',
    tags: [
      'solar-pro:22b',
      'solar-pro:22b-preview-instruct-fp16',
      'solar-pro:22b-preview-instruct-q2_K',
      'solar-pro:22b-preview-instruct-q3_K_L',
      'solar-pro:22b-preview-instruct-q3_K_M',
      'solar-pro:22b-preview-instruct-q3_K_S',
      'solar-pro:22b-preview-instruct-q4_0',
      'solar-pro:22b-preview-instruct-q4_1',
      'solar-pro:22b-preview-instruct-q4_K_M',
      'solar-pro:22b-preview-instruct-q4_K_S',
      'solar-pro:22b-preview-instruct-q5_0',
      'solar-pro:22b-preview-instruct-q5_1',
      'solar-pro:22b-preview-instruct-q5_K_M',
      'solar-pro:22b-preview-instruct-q5_K_S',
      'solar-pro:22b-preview-instruct-q6_K',
      'solar-pro:22b-preview-instruct-q8_0',
      'solar-pro:latest',
      'solar-pro:preview',
    ],
  },
  sqlcoder: {
    name: 'sqlcoder',
    type: 'chat',
    tags: [
      'sqlcoder:15b',
      'sqlcoder:15b-fp16',
      'sqlcoder:15b-q2_K',
      'sqlcoder:15b-q3_K_L',
      'sqlcoder:15b-q3_K_M',
      'sqlcoder:15b-q3_K_S',
      'sqlcoder:15b-q4_0',
      'sqlcoder:15b-q4_1',
      'sqlcoder:15b-q4_K_M',
      'sqlcoder:15b-q4_K_S',
      'sqlcoder:15b-q5_0',
      'sqlcoder:15b-q5_1',
      'sqlcoder:15b-q5_K_M',
      'sqlcoder:15b-q5_K_S',
      'sqlcoder:15b-q6_K',
      'sqlcoder:15b-q8_0',
      'sqlcoder:70b-alpha-fp16',
      'sqlcoder:70b-alpha-q2_K',
      'sqlcoder:70b-alpha-q3_K_L',
      'sqlcoder:70b-alpha-q3_K_M',
      'sqlcoder:70b-alpha-q3_K_S',
      'sqlcoder:70b-alpha-q4_0',
      'sqlcoder:70b-alpha-q4_1',
      'sqlcoder:70b-alpha-q4_K_M',
      'sqlcoder:70b-alpha-q4_K_S',
      'sqlcoder:70b-alpha-q5_0',
      'sqlcoder:70b-alpha-q5_1',
      'sqlcoder:70b-alpha-q5_K_M',
      'sqlcoder:70b-alpha-q5_K_S',
      'sqlcoder:70b-alpha-q6_K',
      'sqlcoder:70b-alpha-q8_0',
      'sqlcoder:7b',
      'sqlcoder:7b-fp16',
      'sqlcoder:7b-q2_K',
      'sqlcoder:7b-q3_K_L',
      'sqlcoder:7b-q3_K_M',
      'sqlcoder:7b-q3_K_S',
      'sqlcoder:7b-q4_0',
      'sqlcoder:7b-q4_1',
      'sqlcoder:7b-q4_K_M',
      'sqlcoder:7b-q4_K_S',
      'sqlcoder:7b-q5_0',
      'sqlcoder:7b-q5_1',
      'sqlcoder:7b-q5_K_M',
      'sqlcoder:7b-q5_K_S',
      'sqlcoder:7b-q6_K',
      'sqlcoder:7b-q8_0',
      'sqlcoder:latest',
    ],
  },
  'stable-beluga': {
    name: 'stable-beluga',
    type: 'chat',
    tags: [
      'stable-beluga:13b',
      'stable-beluga:13b-fp16',
      'stable-beluga:13b-q2_K',
      'stable-beluga:13b-q3_K_L',
      'stable-beluga:13b-q3_K_M',
      'stable-beluga:13b-q3_K_S',
      'stable-beluga:13b-q4_0',
      'stable-beluga:13b-q4_1',
      'stable-beluga:13b-q4_K_M',
      'stable-beluga:13b-q4_K_S',
      'stable-beluga:13b-q5_0',
      'stable-beluga:13b-q5_1',
      'stable-beluga:13b-q5_K_M',
      'stable-beluga:13b-q5_K_S',
      'stable-beluga:13b-q6_K',
      'stable-beluga:13b-q8_0',
      'stable-beluga:70b',
      'stable-beluga:70b-fp16',
      'stable-beluga:70b-q2_K',
      'stable-beluga:70b-q3_K_L',
      'stable-beluga:70b-q3_K_M',
      'stable-beluga:70b-q3_K_S',
      'stable-beluga:70b-q4_0',
      'stable-beluga:70b-q4_1',
      'stable-beluga:70b-q4_K_M',
      'stable-beluga:70b-q4_K_S',
      'stable-beluga:70b-q5_0',
      'stable-beluga:70b-q5_1',
      'stable-beluga:70b-q5_K_M',
      'stable-beluga:70b-q5_K_S',
      'stable-beluga:70b-q6_K',
      'stable-beluga:70b-q8_0',
      'stable-beluga:7b',
      'stable-beluga:7b-fp16',
      'stable-beluga:7b-q2_K',
      'stable-beluga:7b-q3_K_L',
      'stable-beluga:7b-q3_K_M',
      'stable-beluga:7b-q3_K_S',
      'stable-beluga:7b-q4_0',
      'stable-beluga:7b-q4_1',
      'stable-beluga:7b-q4_K_M',
      'stable-beluga:7b-q4_K_S',
      'stable-beluga:7b-q5_0',
      'stable-beluga:7b-q5_1',
      'stable-beluga:7b-q5_K_M',
      'stable-beluga:7b-q5_K_S',
      'stable-beluga:7b-q6_K',
      'stable-beluga:7b-q8_0',
      'stable-beluga:latest',
    ],
  },
  'stable-code': {
    name: 'stable-code',
    type: 'chat',
    tags: [
      'stable-code:3b',
      'stable-code:3b-code',
      'stable-code:3b-code-fp16',
      'stable-code:3b-code-q2_K',
      'stable-code:3b-code-q3_K_L',
      'stable-code:3b-code-q3_K_M',
      'stable-code:3b-code-q3_K_S',
      'stable-code:3b-code-q4_0',
      'stable-code:3b-code-q4_1',
      'stable-code:3b-code-q4_K_M',
      'stable-code:3b-code-q4_K_S',
      'stable-code:3b-code-q5_0',
      'stable-code:3b-code-q5_1',
      'stable-code:3b-code-q5_K_M',
      'stable-code:3b-code-q5_K_S',
      'stable-code:3b-code-q6_K',
      'stable-code:3b-code-q8_0',
      'stable-code:3b-instruct',
      'stable-code:3b-instruct-fp16',
      'stable-code:3b-instruct-q2_K',
      'stable-code:3b-instruct-q3_K_L',
      'stable-code:3b-instruct-q3_K_M',
      'stable-code:3b-instruct-q3_K_S',
      'stable-code:3b-instruct-q4_0',
      'stable-code:3b-instruct-q4_1',
      'stable-code:3b-instruct-q4_K_M',
      'stable-code:3b-instruct-q4_K_S',
      'stable-code:3b-instruct-q5_0',
      'stable-code:3b-instruct-q5_1',
      'stable-code:3b-instruct-q5_K_M',
      'stable-code:3b-instruct-q5_K_S',
      'stable-code:3b-instruct-q6_K',
      'stable-code:3b-instruct-q8_0',
      'stable-code:code',
      'stable-code:instruct',
      'stable-code:latest',
    ],
  },
  'stablelm-zephyr': {
    name: 'stablelm-zephyr',
    type: 'chat',
    tags: [
      'stablelm-zephyr:3b',
      'stablelm-zephyr:3b-fp16',
      'stablelm-zephyr:3b-q2_K',
      'stablelm-zephyr:3b-q3_K_L',
      'stablelm-zephyr:3b-q3_K_M',
      'stablelm-zephyr:3b-q3_K_S',
      'stablelm-zephyr:3b-q4_0',
      'stablelm-zephyr:3b-q4_1',
      'stablelm-zephyr:3b-q4_K_M',
      'stablelm-zephyr:3b-q4_K_S',
      'stablelm-zephyr:3b-q5_0',
      'stablelm-zephyr:3b-q5_1',
      'stablelm-zephyr:3b-q5_K_M',
      'stablelm-zephyr:3b-q5_K_S',
      'stablelm-zephyr:3b-q6_K',
      'stablelm-zephyr:3b-q8_0',
      'stablelm-zephyr:latest',
    ],
  },
  stablelm2: {
    name: 'stablelm2',
    type: 'chat',
    tags: [
      'stablelm2:1.6b',
      'stablelm2:1.6b-chat',
      'stablelm2:1.6b-chat-fp16',
      'stablelm2:1.6b-chat-q2_K',
      'stablelm2:1.6b-chat-q3_K_L',
      'stablelm2:1.6b-chat-q3_K_M',
      'stablelm2:1.6b-chat-q3_K_S',
      'stablelm2:1.6b-chat-q4_0',
      'stablelm2:1.6b-chat-q4_1',
      'stablelm2:1.6b-chat-q4_K_M',
      'stablelm2:1.6b-chat-q4_K_S',
      'stablelm2:1.6b-chat-q5_0',
      'stablelm2:1.6b-chat-q5_1',
      'stablelm2:1.6b-chat-q5_K_M',
      'stablelm2:1.6b-chat-q5_K_S',
      'stablelm2:1.6b-chat-q6_K',
      'stablelm2:1.6b-chat-q8_0',
      'stablelm2:1.6b-fp16',
      'stablelm2:1.6b-q2_K',
      'stablelm2:1.6b-q3_K_L',
      'stablelm2:1.6b-q3_K_M',
      'stablelm2:1.6b-q3_K_S',
      'stablelm2:1.6b-q4_0',
      'stablelm2:1.6b-q4_1',
      'stablelm2:1.6b-q4_K_M',
      'stablelm2:1.6b-q4_K_S',
      'stablelm2:1.6b-q5_0',
      'stablelm2:1.6b-q5_1',
      'stablelm2:1.6b-q5_K_M',
      'stablelm2:1.6b-q5_K_S',
      'stablelm2:1.6b-q6_K',
      'stablelm2:1.6b-q8_0',
      'stablelm2:1.6b-zephyr',
      'stablelm2:1.6b-zephyr-fp16',
      'stablelm2:1.6b-zephyr-q2_K',
      'stablelm2:1.6b-zephyr-q3_K_L',
      'stablelm2:1.6b-zephyr-q3_K_M',
      'stablelm2:1.6b-zephyr-q3_K_S',
      'stablelm2:1.6b-zephyr-q4_0',
      'stablelm2:1.6b-zephyr-q4_1',
      'stablelm2:1.6b-zephyr-q4_K_M',
      'stablelm2:1.6b-zephyr-q4_K_S',
      'stablelm2:1.6b-zephyr-q5_0',
      'stablelm2:1.6b-zephyr-q5_1',
      'stablelm2:1.6b-zephyr-q5_K_M',
      'stablelm2:1.6b-zephyr-q5_K_S',
      'stablelm2:1.6b-zephyr-q6_K',
      'stablelm2:1.6b-zephyr-q8_0',
      'stablelm2:12b',
      'stablelm2:12b-chat',
      'stablelm2:12b-chat-fp16',
      'stablelm2:12b-chat-q2_K',
      'stablelm2:12b-chat-q3_K_L',
      'stablelm2:12b-chat-q3_K_M',
      'stablelm2:12b-chat-q3_K_S',
      'stablelm2:12b-chat-q4_0',
      'stablelm2:12b-chat-q4_1',
      'stablelm2:12b-chat-q4_K_M',
      'stablelm2:12b-chat-q4_K_S',
      'stablelm2:12b-chat-q5_0',
      'stablelm2:12b-chat-q5_1',
      'stablelm2:12b-chat-q5_K_M',
      'stablelm2:12b-chat-q5_K_S',
      'stablelm2:12b-chat-q6_K',
      'stablelm2:12b-chat-q8_0',
      'stablelm2:12b-fp16',
      'stablelm2:12b-q2_K',
      'stablelm2:12b-q3_K_L',
      'stablelm2:12b-q3_K_M',
      'stablelm2:12b-q3_K_S',
      'stablelm2:12b-q4_0',
      'stablelm2:12b-q4_1',
      'stablelm2:12b-q4_K_M',
      'stablelm2:12b-q4_K_S',
      'stablelm2:12b-q5_0',
      'stablelm2:12b-q5_1',
      'stablelm2:12b-q5_K_M',
      'stablelm2:12b-q5_K_S',
      'stablelm2:12b-q6_K',
      'stablelm2:12b-q8_0',
      'stablelm2:12b-text',
      'stablelm2:chat',
      'stablelm2:latest',
      'stablelm2:zephyr',
    ],
  },
  starcoder: {
    name: 'starcoder',
    type: 'chat',
    tags: [
      'starcoder:15b',
      'starcoder:15b-base',
      'starcoder:15b-base-fp16',
      'starcoder:15b-base-q2_K',
      'starcoder:15b-base-q3_K_L',
      'starcoder:15b-base-q3_K_M',
      'starcoder:15b-base-q3_K_S',
      'starcoder:15b-base-q4_0',
      'starcoder:15b-base-q4_1',
      'starcoder:15b-base-q4_K_M',
      'starcoder:15b-base-q4_K_S',
      'starcoder:15b-base-q5_0',
      'starcoder:15b-base-q5_1',
      'starcoder:15b-base-q5_K_M',
      'starcoder:15b-base-q5_K_S',
      'starcoder:15b-base-q6_K',
      'starcoder:15b-base-q8_0',
      'starcoder:15b-fp16',
      'starcoder:15b-plus',
      'starcoder:15b-plus-fp16',
      'starcoder:15b-plus-q2_K',
      'starcoder:15b-plus-q3_K_L',
      'starcoder:15b-plus-q3_K_M',
      'starcoder:15b-plus-q3_K_S',
      'starcoder:15b-plus-q4_0',
      'starcoder:15b-plus-q4_1',
      'starcoder:15b-plus-q4_K_M',
      'starcoder:15b-plus-q4_K_S',
      'starcoder:15b-plus-q5_0',
      'starcoder:15b-plus-q5_1',
      'starcoder:15b-plus-q5_K_M',
      'starcoder:15b-plus-q5_K_S',
      'starcoder:15b-plus-q6_K',
      'starcoder:15b-plus-q8_0',
      'starcoder:15b-q2_K',
      'starcoder:15b-q3_K_L',
      'starcoder:15b-q3_K_M',
      'starcoder:15b-q3_K_S',
      'starcoder:15b-q4_0',
      'starcoder:15b-q4_1',
      'starcoder:15b-q4_K_M',
      'starcoder:15b-q4_K_S',
      'starcoder:15b-q5_0',
      'starcoder:15b-q5_1',
      'starcoder:15b-q5_K_M',
      'starcoder:15b-q5_K_S',
      'starcoder:15b-q6_K',
      'starcoder:15b-q8_0',
      'starcoder:1b',
      'starcoder:1b-base',
      'starcoder:1b-base-fp16',
      'starcoder:1b-base-q2_K',
      'starcoder:1b-base-q3_K_L',
      'starcoder:1b-base-q3_K_M',
      'starcoder:1b-base-q3_K_S',
      'starcoder:1b-base-q4_0',
      'starcoder:1b-base-q4_1',
      'starcoder:1b-base-q4_K_M',
      'starcoder:1b-base-q4_K_S',
      'starcoder:1b-base-q5_0',
      'starcoder:1b-base-q5_1',
      'starcoder:1b-base-q5_K_M',
      'starcoder:1b-base-q5_K_S',
      'starcoder:1b-base-q6_K',
      'starcoder:1b-base-q8_0',
      'starcoder:3b',
      'starcoder:3b-base',
      'starcoder:3b-base-fp16',
      'starcoder:3b-base-q2_K',
      'starcoder:3b-base-q3_K_L',
      'starcoder:3b-base-q3_K_M',
      'starcoder:3b-base-q3_K_S',
      'starcoder:3b-base-q4_0',
      'starcoder:3b-base-q4_1',
      'starcoder:3b-base-q4_K_M',
      'starcoder:3b-base-q4_K_S',
      'starcoder:3b-base-q5_0',
      'starcoder:3b-base-q5_1',
      'starcoder:3b-base-q5_K_M',
      'starcoder:3b-base-q5_K_S',
      'starcoder:3b-base-q6_K',
      'starcoder:3b-base-q8_0',
      'starcoder:7b',
      'starcoder:7b-base',
      'starcoder:7b-base-fp16',
      'starcoder:7b-base-q2_K',
      'starcoder:7b-base-q3_K_L',
      'starcoder:7b-base-q3_K_M',
      'starcoder:7b-base-q3_K_S',
      'starcoder:7b-base-q4_0',
      'starcoder:7b-base-q4_1',
      'starcoder:7b-base-q4_K_M',
      'starcoder:7b-base-q4_K_S',
      'starcoder:7b-base-q5_0',
      'starcoder:7b-base-q5_1',
      'starcoder:7b-base-q5_K_M',
      'starcoder:7b-base-q5_K_S',
      'starcoder:7b-base-q6_K',
      'starcoder:7b-base-q8_0',
      'starcoder:latest',
    ],
  },
  starcoder2: {
    name: 'starcoder2',
    type: 'chat',
    tags: [
      'starcoder2:15b',
      'starcoder2:15b-fp16',
      'starcoder2:15b-instruct',
      'starcoder2:15b-instruct-q4_0',
      'starcoder2:15b-instruct-v0.1-fp16',
      'starcoder2:15b-instruct-v0.1-q2_K',
      'starcoder2:15b-instruct-v0.1-q3_K_L',
      'starcoder2:15b-instruct-v0.1-q3_K_M',
      'starcoder2:15b-instruct-v0.1-q3_K_S',
      'starcoder2:15b-instruct-v0.1-q4_0',
      'starcoder2:15b-instruct-v0.1-q4_1',
      'starcoder2:15b-instruct-v0.1-q4_K_M',
      'starcoder2:15b-instruct-v0.1-q4_K_S',
      'starcoder2:15b-instruct-v0.1-q5_0',
      'starcoder2:15b-instruct-v0.1-q5_1',
      'starcoder2:15b-instruct-v0.1-q5_K_M',
      'starcoder2:15b-instruct-v0.1-q5_K_S',
      'starcoder2:15b-instruct-v0.1-q6_K',
      'starcoder2:15b-instruct-v0.1-q8_0',
      'starcoder2:15b-q2_K',
      'starcoder2:15b-q3_K_L',
      'starcoder2:15b-q3_K_M',
      'starcoder2:15b-q3_K_S',
      'starcoder2:15b-q4_0',
      'starcoder2:15b-q4_1',
      'starcoder2:15b-q4_K_M',
      'starcoder2:15b-q4_K_S',
      'starcoder2:15b-q5_0',
      'starcoder2:15b-q5_1',
      'starcoder2:15b-q5_K_M',
      'starcoder2:15b-q5_K_S',
      'starcoder2:15b-q6_K',
      'starcoder2:15b-q8_0',
      'starcoder2:3b',
      'starcoder2:3b-fp16',
      'starcoder2:3b-q2_K',
      'starcoder2:3b-q3_K_L',
      'starcoder2:3b-q3_K_M',
      'starcoder2:3b-q3_K_S',
      'starcoder2:3b-q4_0',
      'starcoder2:3b-q4_1',
      'starcoder2:3b-q4_K_M',
      'starcoder2:3b-q4_K_S',
      'starcoder2:3b-q5_0',
      'starcoder2:3b-q5_1',
      'starcoder2:3b-q5_K_M',
      'starcoder2:3b-q5_K_S',
      'starcoder2:3b-q6_K',
      'starcoder2:3b-q8_0',
      'starcoder2:7b',
      'starcoder2:7b-fp16',
      'starcoder2:7b-q2_K',
      'starcoder2:7b-q3_K_L',
      'starcoder2:7b-q3_K_M',
      'starcoder2:7b-q3_K_S',
      'starcoder2:7b-q4_0',
      'starcoder2:7b-q4_1',
      'starcoder2:7b-q4_K_M',
      'starcoder2:7b-q4_K_S',
      'starcoder2:7b-q5_0',
      'starcoder2:7b-q5_1',
      'starcoder2:7b-q5_K_M',
      'starcoder2:7b-q5_K_S',
      'starcoder2:7b-q6_K',
      'starcoder2:7b-q8_0',
      'starcoder2:instruct',
      'starcoder2:latest',
    ],
  },
  'starling-lm': {
    name: 'starling-lm',
    type: 'chat',
    tags: [
      'starling-lm:7b',
      'starling-lm:7b-alpha',
      'starling-lm:7b-alpha-fp16',
      'starling-lm:7b-alpha-q2_K',
      'starling-lm:7b-alpha-q3_K_L',
      'starling-lm:7b-alpha-q3_K_M',
      'starling-lm:7b-alpha-q3_K_S',
      'starling-lm:7b-alpha-q4_0',
      'starling-lm:7b-alpha-q4_1',
      'starling-lm:7b-alpha-q4_K_M',
      'starling-lm:7b-alpha-q4_K_S',
      'starling-lm:7b-alpha-q5_0',
      'starling-lm:7b-alpha-q5_1',
      'starling-lm:7b-alpha-q5_K_M',
      'starling-lm:7b-alpha-q5_K_S',
      'starling-lm:7b-alpha-q6_K',
      'starling-lm:7b-alpha-q8_0',
      'starling-lm:7b-beta',
      'starling-lm:7b-beta-fp16',
      'starling-lm:7b-beta-q2_K',
      'starling-lm:7b-beta-q3_K_L',
      'starling-lm:7b-beta-q3_K_M',
      'starling-lm:7b-beta-q3_K_S',
      'starling-lm:7b-beta-q4_0',
      'starling-lm:7b-beta-q4_1',
      'starling-lm:7b-beta-q4_K_M',
      'starling-lm:7b-beta-q4_K_S',
      'starling-lm:7b-beta-q5_0',
      'starling-lm:7b-beta-q5_1',
      'starling-lm:7b-beta-q5_K_M',
      'starling-lm:7b-beta-q5_K_S',
      'starling-lm:7b-beta-q6_K',
      'starling-lm:7b-beta-q8_0',
      'starling-lm:alpha',
      'starling-lm:beta',
      'starling-lm:latest',
    ],
  },
  tinydolphin: {
    name: 'tinydolphin',
    type: 'chat',
    tags: [
      'tinydolphin:1.1b',
      'tinydolphin:1.1b-v2.8-fp16',
      'tinydolphin:1.1b-v2.8-q2_K',
      'tinydolphin:1.1b-v2.8-q3_K_L',
      'tinydolphin:1.1b-v2.8-q3_K_M',
      'tinydolphin:1.1b-v2.8-q3_K_S',
      'tinydolphin:1.1b-v2.8-q4_0',
      'tinydolphin:1.1b-v2.8-q4_1',
      'tinydolphin:1.1b-v2.8-q4_K_M',
      'tinydolphin:1.1b-v2.8-q4_K_S',
      'tinydolphin:1.1b-v2.8-q5_0',
      'tinydolphin:1.1b-v2.8-q5_1',
      'tinydolphin:1.1b-v2.8-q5_K_M',
      'tinydolphin:1.1b-v2.8-q5_K_S',
      'tinydolphin:1.1b-v2.8-q6_K',
      'tinydolphin:1.1b-v2.8-q8_0',
      'tinydolphin:latest',
      'tinydolphin:v2.8',
    ],
  },
  tinyllama: {
    name: 'tinyllama',
    type: 'chat',
    tags: [
      'tinyllama:1.1b',
      'tinyllama:1.1b-chat',
      'tinyllama:1.1b-chat-v0.6-fp16',
      'tinyllama:1.1b-chat-v0.6-q2_K',
      'tinyllama:1.1b-chat-v0.6-q3_K_L',
      'tinyllama:1.1b-chat-v0.6-q3_K_M',
      'tinyllama:1.1b-chat-v0.6-q3_K_S',
      'tinyllama:1.1b-chat-v0.6-q4_0',
      'tinyllama:1.1b-chat-v0.6-q4_1',
      'tinyllama:1.1b-chat-v0.6-q4_K_M',
      'tinyllama:1.1b-chat-v0.6-q4_K_S',
      'tinyllama:1.1b-chat-v0.6-q5_0',
      'tinyllama:1.1b-chat-v0.6-q5_1',
      'tinyllama:1.1b-chat-v0.6-q5_K_M',
      'tinyllama:1.1b-chat-v0.6-q5_K_S',
      'tinyllama:1.1b-chat-v0.6-q6_K',
      'tinyllama:1.1b-chat-v0.6-q8_0',
      'tinyllama:1.1b-chat-v1-fp16',
      'tinyllama:1.1b-chat-v1-q2_K',
      'tinyllama:1.1b-chat-v1-q3_K_L',
      'tinyllama:1.1b-chat-v1-q3_K_M',
      'tinyllama:1.1b-chat-v1-q3_K_S',
      'tinyllama:1.1b-chat-v1-q4_0',
      'tinyllama:1.1b-chat-v1-q4_1',
      'tinyllama:1.1b-chat-v1-q4_K_M',
      'tinyllama:1.1b-chat-v1-q4_K_S',
      'tinyllama:1.1b-chat-v1-q5_0',
      'tinyllama:1.1b-chat-v1-q5_1',
      'tinyllama:1.1b-chat-v1-q5_K_M',
      'tinyllama:1.1b-chat-v1-q5_K_S',
      'tinyllama:1.1b-chat-v1-q6_K',
      'tinyllama:1.1b-chat-v1-q8_0',
      'tinyllama:chat',
      'tinyllama:latest',
      'tinyllama:v0.6',
      'tinyllama:v1',
    ],
  },
  tulu3: {
    name: 'tulu3',
    type: 'chat',
    tags: [
      'tulu3:70b',
      'tulu3:70b-fp16',
      'tulu3:70b-q4_K_M',
      'tulu3:70b-q8_0',
      'tulu3:8b',
      'tulu3:8b-fp16',
      'tulu3:8b-q4_K_M',
      'tulu3:8b-q8_0',
      'tulu3:latest',
    ],
  },
  vicuna: {
    name: 'vicuna',
    type: 'chat',
    tags: [
      'vicuna:13b',
      'vicuna:13b-16k',
      'vicuna:13b-fp16',
      'vicuna:13b-q2_K',
      'vicuna:13b-q3_K_L',
      'vicuna:13b-q3_K_M',
      'vicuna:13b-q3_K_S',
      'vicuna:13b-q4_0',
      'vicuna:13b-q4_1',
      'vicuna:13b-q4_K_M',
      'vicuna:13b-q4_K_S',
      'vicuna:13b-q5_0',
      'vicuna:13b-q5_1',
      'vicuna:13b-q5_K_M',
      'vicuna:13b-q5_K_S',
      'vicuna:13b-q6_K',
      'vicuna:13b-q8_0',
      'vicuna:13b-v1.5-16k-fp16',
      'vicuna:13b-v1.5-16k-q2_K',
      'vicuna:13b-v1.5-16k-q3_K_L',
      'vicuna:13b-v1.5-16k-q3_K_M',
      'vicuna:13b-v1.5-16k-q3_K_S',
      'vicuna:13b-v1.5-16k-q4_0',
      'vicuna:13b-v1.5-16k-q4_1',
      'vicuna:13b-v1.5-16k-q4_K_M',
      'vicuna:13b-v1.5-16k-q4_K_S',
      'vicuna:13b-v1.5-16k-q5_0',
      'vicuna:13b-v1.5-16k-q5_1',
      'vicuna:13b-v1.5-16k-q5_K_M',
      'vicuna:13b-v1.5-16k-q5_K_S',
      'vicuna:13b-v1.5-16k-q6_K',
      'vicuna:13b-v1.5-16k-q8_0',
      'vicuna:13b-v1.5-fp16',
      'vicuna:13b-v1.5-q2_K',
      'vicuna:13b-v1.5-q3_K_L',
      'vicuna:13b-v1.5-q3_K_M',
      'vicuna:13b-v1.5-q3_K_S',
      'vicuna:13b-v1.5-q4_0',
      'vicuna:13b-v1.5-q4_1',
      'vicuna:13b-v1.5-q4_K_M',
      'vicuna:13b-v1.5-q4_K_S',
      'vicuna:13b-v1.5-q5_0',
      'vicuna:13b-v1.5-q5_1',
      'vicuna:13b-v1.5-q5_K_M',
      'vicuna:13b-v1.5-q5_K_S',
      'vicuna:13b-v1.5-q6_K',
      'vicuna:13b-v1.5-q8_0',
      'vicuna:33b',
      'vicuna:33b-fp16',
      'vicuna:33b-q2_K',
      'vicuna:33b-q3_K_L',
      'vicuna:33b-q3_K_M',
      'vicuna:33b-q3_K_S',
      'vicuna:33b-q4_0',
      'vicuna:33b-q4_1',
      'vicuna:33b-q4_K_M',
      'vicuna:33b-q4_K_S',
      'vicuna:33b-q5_0',
      'vicuna:33b-q5_1',
      'vicuna:33b-q5_K_M',
      'vicuna:33b-q5_K_S',
      'vicuna:33b-q6_K',
      'vicuna:33b-q8_0',
      'vicuna:7b',
      'vicuna:7b-16k',
      'vicuna:7b-fp16',
      'vicuna:7b-q2_K',
      'vicuna:7b-q3_K_L',
      'vicuna:7b-q3_K_M',
      'vicuna:7b-q3_K_S',
      'vicuna:7b-q4_0',
      'vicuna:7b-q4_1',
      'vicuna:7b-q4_K_M',
      'vicuna:7b-q4_K_S',
      'vicuna:7b-q5_0',
      'vicuna:7b-q5_1',
      'vicuna:7b-q5_K_M',
      'vicuna:7b-q5_K_S',
      'vicuna:7b-q6_K',
      'vicuna:7b-q8_0',
      'vicuna:7b-v1.5-16k-fp16',
      'vicuna:7b-v1.5-16k-q2_K',
      'vicuna:7b-v1.5-16k-q3_K_L',
      'vicuna:7b-v1.5-16k-q3_K_M',
      'vicuna:7b-v1.5-16k-q3_K_S',
      'vicuna:7b-v1.5-16k-q4_0',
      'vicuna:7b-v1.5-16k-q4_1',
      'vicuna:7b-v1.5-16k-q4_K_M',
      'vicuna:7b-v1.5-16k-q4_K_S',
      'vicuna:7b-v1.5-16k-q5_0',
      'vicuna:7b-v1.5-16k-q5_1',
      'vicuna:7b-v1.5-16k-q5_K_M',
      'vicuna:7b-v1.5-16k-q5_K_S',
      'vicuna:7b-v1.5-16k-q6_K',
      'vicuna:7b-v1.5-16k-q8_0',
      'vicuna:7b-v1.5-fp16',
      'vicuna:7b-v1.5-q2_K',
      'vicuna:7b-v1.5-q3_K_L',
      'vicuna:7b-v1.5-q3_K_M',
      'vicuna:7b-v1.5-q3_K_S',
      'vicuna:7b-v1.5-q4_0',
      'vicuna:7b-v1.5-q4_1',
      'vicuna:7b-v1.5-q4_K_M',
      'vicuna:7b-v1.5-q4_K_S',
      'vicuna:7b-v1.5-q5_0',
      'vicuna:7b-v1.5-q5_1',
      'vicuna:7b-v1.5-q5_K_M',
      'vicuna:7b-v1.5-q5_K_S',
      'vicuna:7b-v1.5-q6_K',
      'vicuna:7b-v1.5-q8_0',
      'vicuna:latest',
    ],
  },
  'wizard-math': {
    name: 'wizard-math',
    type: 'chat',
    tags: [
      'wizard-math:13b',
      'wizard-math:13b-fp16',
      'wizard-math:13b-q2_K',
      'wizard-math:13b-q3_K_L',
      'wizard-math:13b-q3_K_M',
      'wizard-math:13b-q3_K_S',
      'wizard-math:13b-q4_0',
      'wizard-math:13b-q4_1',
      'wizard-math:13b-q4_K_M',
      'wizard-math:13b-q4_K_S',
      'wizard-math:13b-q5_0',
      'wizard-math:13b-q5_1',
      'wizard-math:13b-q5_K_M',
      'wizard-math:13b-q5_K_S',
      'wizard-math:13b-q6_K',
      'wizard-math:13b-q8_0',
      'wizard-math:70b',
      'wizard-math:70b-fp16',
      'wizard-math:70b-q2_K',
      'wizard-math:70b-q3_K_L',
      'wizard-math:70b-q3_K_M',
      'wizard-math:70b-q3_K_S',
      'wizard-math:70b-q4_0',
      'wizard-math:70b-q4_1',
      'wizard-math:70b-q4_K_M',
      'wizard-math:70b-q4_K_S',
      'wizard-math:70b-q5_0',
      'wizard-math:70b-q5_1',
      'wizard-math:70b-q5_K_M',
      'wizard-math:70b-q5_K_S',
      'wizard-math:70b-q6_K',
      'wizard-math:70b-q8_0',
      'wizard-math:7b',
      'wizard-math:7b-fp16',
      'wizard-math:7b-q2_K',
      'wizard-math:7b-q3_K_L',
      'wizard-math:7b-q3_K_M',
      'wizard-math:7b-q3_K_S',
      'wizard-math:7b-q4_0',
      'wizard-math:7b-q4_1',
      'wizard-math:7b-q4_K_M',
      'wizard-math:7b-q4_K_S',
      'wizard-math:7b-q5_0',
      'wizard-math:7b-q5_1',
      'wizard-math:7b-q5_K_M',
      'wizard-math:7b-q5_K_S',
      'wizard-math:7b-q6_K',
      'wizard-math:7b-q8_0',
      'wizard-math:7b-v1.1-fp16',
      'wizard-math:7b-v1.1-q2_K',
      'wizard-math:7b-v1.1-q3_K_L',
      'wizard-math:7b-v1.1-q3_K_M',
      'wizard-math:7b-v1.1-q3_K_S',
      'wizard-math:7b-v1.1-q4_0',
      'wizard-math:7b-v1.1-q4_1',
      'wizard-math:7b-v1.1-q4_K_M',
      'wizard-math:7b-v1.1-q4_K_S',
      'wizard-math:7b-v1.1-q5_0',
      'wizard-math:7b-v1.1-q5_1',
      'wizard-math:7b-v1.1-q5_K_M',
      'wizard-math:7b-v1.1-q5_K_S',
      'wizard-math:7b-v1.1-q6_K',
      'wizard-math:7b-v1.1-q8_0',
      'wizard-math:latest',
    ],
  },
  'wizard-vicuna': {
    name: 'wizard-vicuna',
    type: 'chat',
    tags: [
      'wizard-vicuna:13b',
      'wizard-vicuna:13b-fp16',
      'wizard-vicuna:13b-q2_K',
      'wizard-vicuna:13b-q3_K_L',
      'wizard-vicuna:13b-q3_K_M',
      'wizard-vicuna:13b-q3_K_S',
      'wizard-vicuna:13b-q4_0',
      'wizard-vicuna:13b-q4_1',
      'wizard-vicuna:13b-q4_K_M',
      'wizard-vicuna:13b-q4_K_S',
      'wizard-vicuna:13b-q5_0',
      'wizard-vicuna:13b-q5_1',
      'wizard-vicuna:13b-q5_K_M',
      'wizard-vicuna:13b-q5_K_S',
      'wizard-vicuna:13b-q6_K',
      'wizard-vicuna:13b-q8_0',
      'wizard-vicuna:latest',
    ],
  },
  'wizard-vicuna-uncensored': {
    name: 'wizard-vicuna-uncensored',
    type: 'chat',
    tags: [
      'wizard-vicuna-uncensored:13b',
      'wizard-vicuna-uncensored:13b-fp16',
      'wizard-vicuna-uncensored:13b-q2_K',
      'wizard-vicuna-uncensored:13b-q3_K_L',
      'wizard-vicuna-uncensored:13b-q3_K_M',
      'wizard-vicuna-uncensored:13b-q3_K_S',
      'wizard-vicuna-uncensored:13b-q4_0',
      'wizard-vicuna-uncensored:13b-q4_1',
      'wizard-vicuna-uncensored:13b-q4_K_M',
      'wizard-vicuna-uncensored:13b-q4_K_S',
      'wizard-vicuna-uncensored:13b-q5_0',
      'wizard-vicuna-uncensored:13b-q5_1',
      'wizard-vicuna-uncensored:13b-q5_K_M',
      'wizard-vicuna-uncensored:13b-q5_K_S',
      'wizard-vicuna-uncensored:13b-q6_K',
      'wizard-vicuna-uncensored:13b-q8_0',
      'wizard-vicuna-uncensored:30b',
      'wizard-vicuna-uncensored:30b-fp16',
      'wizard-vicuna-uncensored:30b-q2_K',
      'wizard-vicuna-uncensored:30b-q3_K_L',
      'wizard-vicuna-uncensored:30b-q3_K_M',
      'wizard-vicuna-uncensored:30b-q3_K_S',
      'wizard-vicuna-uncensored:30b-q4_0',
      'wizard-vicuna-uncensored:30b-q4_1',
      'wizard-vicuna-uncensored:30b-q4_K_M',
      'wizard-vicuna-uncensored:30b-q4_K_S',
      'wizard-vicuna-uncensored:30b-q5_0',
      'wizard-vicuna-uncensored:30b-q5_1',
      'wizard-vicuna-uncensored:30b-q5_K_M',
      'wizard-vicuna-uncensored:30b-q5_K_S',
      'wizard-vicuna-uncensored:30b-q6_K',
      'wizard-vicuna-uncensored:30b-q8_0',
      'wizard-vicuna-uncensored:7b',
      'wizard-vicuna-uncensored:7b-fp16',
      'wizard-vicuna-uncensored:7b-q2_K',
      'wizard-vicuna-uncensored:7b-q3_K_L',
      'wizard-vicuna-uncensored:7b-q3_K_M',
      'wizard-vicuna-uncensored:7b-q3_K_S',
      'wizard-vicuna-uncensored:7b-q4_0',
      'wizard-vicuna-uncensored:7b-q4_1',
      'wizard-vicuna-uncensored:7b-q4_K_M',
      'wizard-vicuna-uncensored:7b-q4_K_S',
      'wizard-vicuna-uncensored:7b-q5_0',
      'wizard-vicuna-uncensored:7b-q5_1',
      'wizard-vicuna-uncensored:7b-q5_K_M',
      'wizard-vicuna-uncensored:7b-q5_K_S',
      'wizard-vicuna-uncensored:7b-q6_K',
      'wizard-vicuna-uncensored:7b-q8_0',
      'wizard-vicuna-uncensored:latest',
    ],
  },
  wizardcoder: {
    name: 'wizardcoder',
    type: 'chat',
    tags: [
      'wizardcoder:13b-python',
      'wizardcoder:13b-python-fp16',
      'wizardcoder:13b-python-q2_K',
      'wizardcoder:13b-python-q3_K_L',
      'wizardcoder:13b-python-q3_K_M',
      'wizardcoder:13b-python-q3_K_S',
      'wizardcoder:13b-python-q4_0',
      'wizardcoder:13b-python-q4_1',
      'wizardcoder:13b-python-q4_K_M',
      'wizardcoder:13b-python-q4_K_S',
      'wizardcoder:13b-python-q5_0',
      'wizardcoder:13b-python-q5_1',
      'wizardcoder:13b-python-q5_K_M',
      'wizardcoder:13b-python-q5_K_S',
      'wizardcoder:13b-python-q6_K',
      'wizardcoder:13b-python-q8_0',
      'wizardcoder:33b',
      'wizardcoder:33b-v1.1',
      'wizardcoder:33b-v1.1-fp16',
      'wizardcoder:33b-v1.1-q2_K',
      'wizardcoder:33b-v1.1-q3_K_L',
      'wizardcoder:33b-v1.1-q3_K_M',
      'wizardcoder:33b-v1.1-q3_K_S',
      'wizardcoder:33b-v1.1-q4_0',
      'wizardcoder:33b-v1.1-q4_1',
      'wizardcoder:33b-v1.1-q4_K_M',
      'wizardcoder:33b-v1.1-q4_K_S',
      'wizardcoder:33b-v1.1-q5_0',
      'wizardcoder:33b-v1.1-q5_1',
      'wizardcoder:33b-v1.1-q5_K_M',
      'wizardcoder:33b-v1.1-q5_K_S',
      'wizardcoder:33b-v1.1-q6_K',
      'wizardcoder:33b-v1.1-q8_0',
      'wizardcoder:34b-python',
      'wizardcoder:34b-python-fp16',
      'wizardcoder:34b-python-q2_K',
      'wizardcoder:34b-python-q3_K_L',
      'wizardcoder:34b-python-q3_K_M',
      'wizardcoder:34b-python-q3_K_S',
      'wizardcoder:34b-python-q4_0',
      'wizardcoder:34b-python-q4_1',
      'wizardcoder:34b-python-q4_K_M',
      'wizardcoder:34b-python-q4_K_S',
      'wizardcoder:34b-python-q5_0',
      'wizardcoder:34b-python-q5_1',
      'wizardcoder:34b-python-q5_K_M',
      'wizardcoder:34b-python-q5_K_S',
      'wizardcoder:34b-python-q6_K',
      'wizardcoder:34b-python-q8_0',
      'wizardcoder:7b-python',
      'wizardcoder:7b-python-fp16',
      'wizardcoder:7b-python-q2_K',
      'wizardcoder:7b-python-q3_K_L',
      'wizardcoder:7b-python-q3_K_M',
      'wizardcoder:7b-python-q3_K_S',
      'wizardcoder:7b-python-q4_0',
      'wizardcoder:7b-python-q4_1',
      'wizardcoder:7b-python-q4_K_M',
      'wizardcoder:7b-python-q4_K_S',
      'wizardcoder:7b-python-q5_0',
      'wizardcoder:7b-python-q5_1',
      'wizardcoder:7b-python-q5_K_M',
      'wizardcoder:7b-python-q5_K_S',
      'wizardcoder:7b-python-q6_K',
      'wizardcoder:7b-python-q8_0',
      'wizardcoder:latest',
      'wizardcoder:python',
    ],
  },
  wizardlm: {
    name: 'wizardlm',
    type: 'chat',
    tags: [
      'wizardlm:13b-fp16',
      'wizardlm:13b-llama2-fp16',
      'wizardlm:13b-llama2-q2_K',
      'wizardlm:13b-llama2-q3_K_L',
      'wizardlm:13b-llama2-q3_K_M',
      'wizardlm:13b-llama2-q3_K_S',
      'wizardlm:13b-llama2-q4_0',
      'wizardlm:13b-llama2-q4_1',
      'wizardlm:13b-llama2-q4_K_M',
      'wizardlm:13b-llama2-q4_K_S',
      'wizardlm:13b-llama2-q5_0',
      'wizardlm:13b-llama2-q5_1',
      'wizardlm:13b-llama2-q5_K_M',
      'wizardlm:13b-llama2-q5_K_S',
      'wizardlm:13b-llama2-q6_K',
      'wizardlm:13b-llama2-q8_0',
      'wizardlm:13b-q2_K',
      'wizardlm:13b-q3_K_L',
      'wizardlm:13b-q3_K_M',
      'wizardlm:13b-q3_K_S',
      'wizardlm:13b-q4_0',
      'wizardlm:13b-q4_1',
      'wizardlm:13b-q4_K_M',
      'wizardlm:13b-q4_K_S',
      'wizardlm:13b-q5_0',
      'wizardlm:13b-q5_1',
      'wizardlm:13b-q5_K_M',
      'wizardlm:13b-q5_K_S',
      'wizardlm:13b-q6_K',
      'wizardlm:13b-q8_0',
      'wizardlm:30b-fp16',
      'wizardlm:30b-q2_K',
      'wizardlm:30b-q3_K_L',
      'wizardlm:30b-q3_K_M',
      'wizardlm:30b-q3_K_S',
      'wizardlm:30b-q4_0',
      'wizardlm:30b-q4_1',
      'wizardlm:30b-q4_K_M',
      'wizardlm:30b-q4_K_S',
      'wizardlm:30b-q5_0',
      'wizardlm:30b-q5_1',
      'wizardlm:30b-q5_K_M',
      'wizardlm:30b-q5_K_S',
      'wizardlm:30b-q6_K',
      'wizardlm:30b-q8_0',
      'wizardlm:70b-llama2-q2_K',
      'wizardlm:70b-llama2-q3_K_L',
      'wizardlm:70b-llama2-q3_K_M',
      'wizardlm:70b-llama2-q3_K_S',
      'wizardlm:70b-llama2-q4_0',
      'wizardlm:70b-llama2-q4_1',
      'wizardlm:70b-llama2-q4_K_M',
      'wizardlm:70b-llama2-q4_K_S',
      'wizardlm:70b-llama2-q5_0',
      'wizardlm:70b-llama2-q5_K_M',
      'wizardlm:70b-llama2-q5_K_S',
      'wizardlm:70b-llama2-q6_K',
      'wizardlm:70b-llama2-q8_0',
      'wizardlm:7b-fp16',
      'wizardlm:7b-q2_K',
      'wizardlm:7b-q3_K_L',
      'wizardlm:7b-q3_K_M',
      'wizardlm:7b-q3_K_S',
      'wizardlm:7b-q4_0',
      'wizardlm:7b-q4_1',
      'wizardlm:7b-q4_K_M',
      'wizardlm:7b-q4_K_S',
      'wizardlm:7b-q5_0',
      'wizardlm:7b-q5_1',
      'wizardlm:7b-q5_K_M',
      'wizardlm:7b-q5_K_S',
      'wizardlm:7b-q6_K',
      'wizardlm:7b-q8_0',
    ],
  },
  'wizardlm-uncensored': {
    name: 'wizardlm-uncensored',
    type: 'chat',
    tags: [
      'wizardlm-uncensored:13b',
      'wizardlm-uncensored:13b-llama2',
      'wizardlm-uncensored:13b-llama2-fp16',
      'wizardlm-uncensored:13b-llama2-q2_K',
      'wizardlm-uncensored:13b-llama2-q3_K_L',
      'wizardlm-uncensored:13b-llama2-q3_K_M',
      'wizardlm-uncensored:13b-llama2-q3_K_S',
      'wizardlm-uncensored:13b-llama2-q4_0',
      'wizardlm-uncensored:13b-llama2-q4_1',
      'wizardlm-uncensored:13b-llama2-q4_K_M',
      'wizardlm-uncensored:13b-llama2-q4_K_S',
      'wizardlm-uncensored:13b-llama2-q5_0',
      'wizardlm-uncensored:13b-llama2-q5_1',
      'wizardlm-uncensored:13b-llama2-q5_K_M',
      'wizardlm-uncensored:13b-llama2-q5_K_S',
      'wizardlm-uncensored:13b-llama2-q6_K',
      'wizardlm-uncensored:13b-llama2-q8_0',
      'wizardlm-uncensored:latest',
    ],
  },
  wizardlm2: {
    name: 'wizardlm2',
    type: 'chat',
    tags: [
      'wizardlm2:7b',
      'wizardlm2:7b-fp16',
      'wizardlm2:7b-q2_K',
      'wizardlm2:7b-q3_K_L',
      'wizardlm2:7b-q3_K_M',
      'wizardlm2:7b-q3_K_S',
      'wizardlm2:7b-q4_0',
      'wizardlm2:7b-q4_1',
      'wizardlm2:7b-q4_K_M',
      'wizardlm2:7b-q4_K_S',
      'wizardlm2:7b-q5_0',
      'wizardlm2:7b-q5_1',
      'wizardlm2:7b-q5_K_M',
      'wizardlm2:7b-q5_K_S',
      'wizardlm2:7b-q6_K',
      'wizardlm2:7b-q8_0',
      'wizardlm2:8x22b',
      'wizardlm2:8x22b-fp16',
      'wizardlm2:8x22b-q2_K',
      'wizardlm2:8x22b-q4_0',
      'wizardlm2:8x22b-q8_0',
      'wizardlm2:latest',
    ],
  },
  xwinlm: {
    name: 'xwinlm',
    type: 'chat',
    tags: [
      'xwinlm:13b',
      'xwinlm:13b-v0.1',
      'xwinlm:13b-v0.1-fp16',
      'xwinlm:13b-v0.1-q2_K',
      'xwinlm:13b-v0.1-q3_K_L',
      'xwinlm:13b-v0.1-q3_K_M',
      'xwinlm:13b-v0.1-q3_K_S',
      'xwinlm:13b-v0.1-q4_0',
      'xwinlm:13b-v0.1-q4_1',
      'xwinlm:13b-v0.1-q4_K_M',
      'xwinlm:13b-v0.1-q4_K_S',
      'xwinlm:13b-v0.1-q5_0',
      'xwinlm:13b-v0.1-q5_1',
      'xwinlm:13b-v0.1-q5_K_M',
      'xwinlm:13b-v0.1-q5_K_S',
      'xwinlm:13b-v0.1-q6_K',
      'xwinlm:13b-v0.1-q8_0',
      'xwinlm:13b-v0.2',
      'xwinlm:13b-v0.2-fp16',
      'xwinlm:13b-v0.2-q2_K',
      'xwinlm:13b-v0.2-q3_K_L',
      'xwinlm:13b-v0.2-q3_K_M',
      'xwinlm:13b-v0.2-q3_K_S',
      'xwinlm:13b-v0.2-q4_0',
      'xwinlm:13b-v0.2-q4_1',
      'xwinlm:13b-v0.2-q4_K_M',
      'xwinlm:13b-v0.2-q4_K_S',
      'xwinlm:13b-v0.2-q5_0',
      'xwinlm:13b-v0.2-q5_1',
      'xwinlm:13b-v0.2-q5_K_M',
      'xwinlm:13b-v0.2-q5_K_S',
      'xwinlm:13b-v0.2-q6_K',
      'xwinlm:13b-v0.2-q8_0',
      'xwinlm:70b-v0.1',
      'xwinlm:70b-v0.1-fp16',
      'xwinlm:70b-v0.1-q2_K',
      'xwinlm:70b-v0.1-q3_K_L',
      'xwinlm:70b-v0.1-q3_K_M',
      'xwinlm:70b-v0.1-q3_K_S',
      'xwinlm:70b-v0.1-q4_0',
      'xwinlm:70b-v0.1-q4_1',
      'xwinlm:70b-v0.1-q4_K_M',
      'xwinlm:70b-v0.1-q4_K_S',
      'xwinlm:70b-v0.1-q5_0',
      'xwinlm:70b-v0.1-q5_1',
      'xwinlm:70b-v0.1-q5_K_S',
      'xwinlm:70b-v0.1-q6_K',
      'xwinlm:70b-v0.1-q8_0',
      'xwinlm:7b',
      'xwinlm:7b-v0.1',
      'xwinlm:7b-v0.1-fp16',
      'xwinlm:7b-v0.1-q2_K',
      'xwinlm:7b-v0.1-q3_K_L',
      'xwinlm:7b-v0.1-q3_K_M',
      'xwinlm:7b-v0.1-q3_K_S',
      'xwinlm:7b-v0.1-q4_0',
      'xwinlm:7b-v0.1-q4_1',
      'xwinlm:7b-v0.1-q4_K_M',
      'xwinlm:7b-v0.1-q4_K_S',
      'xwinlm:7b-v0.1-q5_0',
      'xwinlm:7b-v0.1-q5_1',
      'xwinlm:7b-v0.1-q5_K_M',
      'xwinlm:7b-v0.1-q5_K_S',
      'xwinlm:7b-v0.1-q6_K',
      'xwinlm:7b-v0.1-q8_0',
      'xwinlm:7b-v0.2',
      'xwinlm:7b-v0.2-fp16',
      'xwinlm:7b-v0.2-q2_K',
      'xwinlm:7b-v0.2-q3_K_L',
      'xwinlm:7b-v0.2-q3_K_S',
      'xwinlm:7b-v0.2-q4_0',
      'xwinlm:7b-v0.2-q4_1',
      'xwinlm:7b-v0.2-q4_K_M',
      'xwinlm:7b-v0.2-q4_K_S',
      'xwinlm:7b-v0.2-q5_0',
      'xwinlm:7b-v0.2-q5_K_M',
      'xwinlm:7b-v0.2-q5_K_S',
      'xwinlm:7b-v0.2-q6_K',
      'xwinlm:7b-v0.2-q8_0',
      'xwinlm:latest',
    ],
  },
  'yarn-llama2': {
    name: 'yarn-llama2',
    type: 'chat',
    tags: [
      'yarn-llama2:13b',
      'yarn-llama2:13b-128k',
      'yarn-llama2:13b-128k-fp16',
      'yarn-llama2:13b-128k-q2_K',
      'yarn-llama2:13b-128k-q3_K_L',
      'yarn-llama2:13b-128k-q3_K_M',
      'yarn-llama2:13b-128k-q3_K_S',
      'yarn-llama2:13b-128k-q4_0',
      'yarn-llama2:13b-128k-q4_1',
      'yarn-llama2:13b-128k-q4_K_M',
      'yarn-llama2:13b-128k-q4_K_S',
      'yarn-llama2:13b-128k-q5_0',
      'yarn-llama2:13b-128k-q5_1',
      'yarn-llama2:13b-128k-q5_K_M',
      'yarn-llama2:13b-128k-q5_K_S',
      'yarn-llama2:13b-128k-q6_K',
      'yarn-llama2:13b-128k-q8_0',
      'yarn-llama2:13b-64k',
      'yarn-llama2:13b-64k-fp16',
      'yarn-llama2:13b-64k-q2_K',
      'yarn-llama2:13b-64k-q3_K_L',
      'yarn-llama2:13b-64k-q3_K_M',
      'yarn-llama2:13b-64k-q3_K_S',
      'yarn-llama2:13b-64k-q4_0',
      'yarn-llama2:13b-64k-q4_1',
      'yarn-llama2:13b-64k-q4_K_M',
      'yarn-llama2:13b-64k-q4_K_S',
      'yarn-llama2:13b-64k-q5_0',
      'yarn-llama2:13b-64k-q5_1',
      'yarn-llama2:13b-64k-q5_K_M',
      'yarn-llama2:13b-64k-q5_K_S',
      'yarn-llama2:13b-64k-q6_K',
      'yarn-llama2:13b-64k-q8_0',
      'yarn-llama2:7b',
      'yarn-llama2:7b-128k',
      'yarn-llama2:7b-128k-fp16',
      'yarn-llama2:7b-128k-q2_K',
      'yarn-llama2:7b-128k-q3_K_L',
      'yarn-llama2:7b-128k-q3_K_M',
      'yarn-llama2:7b-128k-q3_K_S',
      'yarn-llama2:7b-128k-q4_0',
      'yarn-llama2:7b-128k-q4_1',
      'yarn-llama2:7b-128k-q4_K_M',
      'yarn-llama2:7b-128k-q4_K_S',
      'yarn-llama2:7b-128k-q5_0',
      'yarn-llama2:7b-128k-q5_1',
      'yarn-llama2:7b-128k-q5_K_M',
      'yarn-llama2:7b-128k-q5_K_S',
      'yarn-llama2:7b-128k-q6_K',
      'yarn-llama2:7b-128k-q8_0',
      'yarn-llama2:7b-64k',
      'yarn-llama2:7b-64k-fp16',
      'yarn-llama2:7b-64k-q2_K',
      'yarn-llama2:7b-64k-q3_K_L',
      'yarn-llama2:7b-64k-q3_K_M',
      'yarn-llama2:7b-64k-q3_K_S',
      'yarn-llama2:7b-64k-q4_0',
      'yarn-llama2:7b-64k-q4_1',
      'yarn-llama2:7b-64k-q4_K_M',
      'yarn-llama2:7b-64k-q4_K_S',
      'yarn-llama2:7b-64k-q5_0',
      'yarn-llama2:7b-64k-q5_1',
      'yarn-llama2:7b-64k-q5_K_M',
      'yarn-llama2:7b-64k-q5_K_S',
      'yarn-llama2:7b-64k-q6_K',
      'yarn-llama2:7b-64k-q8_0',
      'yarn-llama2:latest',
    ],
  },
  'yarn-mistral': {
    name: 'yarn-mistral',
    type: 'chat',
    tags: [
      'yarn-mistral:7b',
      'yarn-mistral:7b-128k',
      'yarn-mistral:7b-128k-fp16',
      'yarn-mistral:7b-128k-q2_K',
      'yarn-mistral:7b-128k-q3_K_L',
      'yarn-mistral:7b-128k-q3_K_M',
      'yarn-mistral:7b-128k-q3_K_S',
      'yarn-mistral:7b-128k-q4_0',
      'yarn-mistral:7b-128k-q4_1',
      'yarn-mistral:7b-128k-q4_K_M',
      'yarn-mistral:7b-128k-q4_K_S',
      'yarn-mistral:7b-128k-q5_0',
      'yarn-mistral:7b-128k-q5_1',
      'yarn-mistral:7b-128k-q5_K_M',
      'yarn-mistral:7b-128k-q5_K_S',
      'yarn-mistral:7b-128k-q6_K',
      'yarn-mistral:7b-128k-q8_0',
      'yarn-mistral:7b-64k',
      'yarn-mistral:7b-64k-q2_K',
      'yarn-mistral:7b-64k-q3_K_L',
      'yarn-mistral:7b-64k-q3_K_M',
      'yarn-mistral:7b-64k-q3_K_S',
      'yarn-mistral:7b-64k-q4_0',
      'yarn-mistral:7b-64k-q4_1',
      'yarn-mistral:7b-64k-q4_K_M',
      'yarn-mistral:7b-64k-q4_K_S',
      'yarn-mistral:7b-64k-q5_0',
      'yarn-mistral:7b-64k-q5_1',
      'yarn-mistral:7b-64k-q5_K_M',
      'yarn-mistral:7b-64k-q5_K_S',
      'yarn-mistral:7b-64k-q6_K',
      'yarn-mistral:7b-64k-q8_0',
      'yarn-mistral:latest',
    ],
  },
  yi: {
    name: 'yi',
    type: 'chat',
    tags: [
      'yi:34b',
      'yi:34b-chat',
      'yi:34b-chat-fp16',
      'yi:34b-chat-q2_K',
      'yi:34b-chat-q3_K_L',
      'yi:34b-chat-q3_K_M',
      'yi:34b-chat-q3_K_S',
      'yi:34b-chat-q4_0',
      'yi:34b-chat-q4_1',
      'yi:34b-chat-q4_K_M',
      'yi:34b-chat-q4_K_S',
      'yi:34b-chat-q5_0',
      'yi:34b-chat-q5_1',
      'yi:34b-chat-q5_K_M',
      'yi:34b-chat-q5_K_S',
      'yi:34b-chat-q6_K',
      'yi:34b-chat-q8_0',
      'yi:34b-chat-v1.5-fp16',
      'yi:34b-chat-v1.5-q2_K',
      'yi:34b-chat-v1.5-q3_K_L',
      'yi:34b-chat-v1.5-q3_K_M',
      'yi:34b-chat-v1.5-q3_K_S',
      'yi:34b-chat-v1.5-q4_0',
      'yi:34b-chat-v1.5-q4_1',
      'yi:34b-chat-v1.5-q4_K_M',
      'yi:34b-chat-v1.5-q4_K_S',
      'yi:34b-chat-v1.5-q5_0',
      'yi:34b-chat-v1.5-q5_1',
      'yi:34b-chat-v1.5-q5_K_M',
      'yi:34b-chat-v1.5-q5_K_S',
      'yi:34b-chat-v1.5-q6_K',
      'yi:34b-chat-v1.5-q8_0',
      'yi:34b-q2_K',
      'yi:34b-q3_K_L',
      'yi:34b-q3_K_M',
      'yi:34b-q3_K_S',
      'yi:34b-q4_0',
      'yi:34b-q4_1',
      'yi:34b-q4_K_M',
      'yi:34b-q4_K_S',
      'yi:34b-q5_0',
      'yi:34b-q5_1',
      'yi:34b-q5_K_S',
      'yi:34b-q6_K',
      'yi:34b-v1.5',
      'yi:34b-v1.5-fp16',
      'yi:34b-v1.5-q2_K',
      'yi:34b-v1.5-q3_K_L',
      'yi:34b-v1.5-q3_K_M',
      'yi:34b-v1.5-q3_K_S',
      'yi:34b-v1.5-q4_0',
      'yi:34b-v1.5-q4_1',
      'yi:34b-v1.5-q4_K_M',
      'yi:34b-v1.5-q4_K_S',
      'yi:34b-v1.5-q5_0',
      'yi:34b-v1.5-q5_1',
      'yi:34b-v1.5-q5_K_M',
      'yi:34b-v1.5-q5_K_S',
      'yi:34b-v1.5-q6_K',
      'yi:34b-v1.5-q8_0',
      'yi:6b',
      'yi:6b-200k',
      'yi:6b-200k-fp16',
      'yi:6b-200k-q2_K',
      'yi:6b-200k-q3_K_L',
      'yi:6b-200k-q3_K_M',
      'yi:6b-200k-q3_K_S',
      'yi:6b-200k-q4_0',
      'yi:6b-200k-q4_1',
      'yi:6b-200k-q4_K_M',
      'yi:6b-200k-q4_K_S',
      'yi:6b-200k-q5_0',
      'yi:6b-200k-q5_1',
      'yi:6b-200k-q5_K_M',
      'yi:6b-200k-q5_K_S',
      'yi:6b-200k-q6_K',
      'yi:6b-200k-q8_0',
      'yi:6b-chat',
      'yi:6b-chat-fp16',
      'yi:6b-chat-q2_K',
      'yi:6b-chat-q3_K_L',
      'yi:6b-chat-q3_K_M',
      'yi:6b-chat-q3_K_S',
      'yi:6b-chat-q4_0',
      'yi:6b-chat-q4_1',
      'yi:6b-chat-q4_K_M',
      'yi:6b-chat-q4_K_S',
      'yi:6b-chat-q5_0',
      'yi:6b-chat-q5_1',
      'yi:6b-chat-q5_K_M',
      'yi:6b-chat-q5_K_S',
      'yi:6b-chat-q6_K',
      'yi:6b-chat-q8_0',
      'yi:6b-chat-v1.5-fp16',
      'yi:6b-chat-v1.5-q2_K',
      'yi:6b-chat-v1.5-q3_K_L',
      'yi:6b-chat-v1.5-q3_K_M',
      'yi:6b-chat-v1.5-q3_K_S',
      'yi:6b-chat-v1.5-q4_0',
      'yi:6b-chat-v1.5-q4_1',
      'yi:6b-chat-v1.5-q4_K_M',
      'yi:6b-chat-v1.5-q4_K_S',
      'yi:6b-chat-v1.5-q5_0',
      'yi:6b-chat-v1.5-q5_1',
      'yi:6b-chat-v1.5-q5_K_M',
      'yi:6b-chat-v1.5-q5_K_S',
      'yi:6b-chat-v1.5-q6_K',
      'yi:6b-chat-v1.5-q8_0',
      'yi:6b-fp16',
      'yi:6b-q2_K',
      'yi:6b-q3_K_L',
      'yi:6b-q3_K_M',
      'yi:6b-q3_K_S',
      'yi:6b-q4_0',
      'yi:6b-q4_1',
      'yi:6b-q4_K_M',
      'yi:6b-q4_K_S',
      'yi:6b-q5_0',
      'yi:6b-q5_1',
      'yi:6b-q5_K_M',
      'yi:6b-q5_K_S',
      'yi:6b-q6_K',
      'yi:6b-q8_0',
      'yi:6b-v1.5',
      'yi:6b-v1.5-fp16',
      'yi:6b-v1.5-q2_K',
      'yi:6b-v1.5-q3_K_L',
      'yi:6b-v1.5-q3_K_M',
      'yi:6b-v1.5-q3_K_S',
      'yi:6b-v1.5-q4_0',
      'yi:6b-v1.5-q4_1',
      'yi:6b-v1.5-q4_K_M',
      'yi:6b-v1.5-q4_K_S',
      'yi:6b-v1.5-q5_0',
      'yi:6b-v1.5-q5_1',
      'yi:6b-v1.5-q5_K_M',
      'yi:6b-v1.5-q5_K_S',
      'yi:6b-v1.5-q6_K',
      'yi:6b-v1.5-q8_0',
      'yi:9b',
      'yi:9b-chat',
      'yi:9b-chat-v1.5-fp16',
      'yi:9b-chat-v1.5-q2_K',
      'yi:9b-chat-v1.5-q3_K_L',
      'yi:9b-chat-v1.5-q3_K_M',
      'yi:9b-chat-v1.5-q3_K_S',
      'yi:9b-chat-v1.5-q4_0',
      'yi:9b-chat-v1.5-q4_1',
      'yi:9b-chat-v1.5-q4_K_M',
      'yi:9b-chat-v1.5-q4_K_S',
      'yi:9b-chat-v1.5-q5_0',
      'yi:9b-chat-v1.5-q5_1',
      'yi:9b-chat-v1.5-q5_K_M',
      'yi:9b-chat-v1.5-q5_K_S',
      'yi:9b-chat-v1.5-q6_K',
      'yi:9b-chat-v1.5-q8_0',
      'yi:9b-v1.5',
      'yi:9b-v1.5-fp16',
      'yi:9b-v1.5-q2_K',
      'yi:9b-v1.5-q3_K_L',
      'yi:9b-v1.5-q3_K_M',
      'yi:9b-v1.5-q3_K_S',
      'yi:9b-v1.5-q4_0',
      'yi:9b-v1.5-q4_1',
      'yi:9b-v1.5-q4_K_M',
      'yi:9b-v1.5-q4_K_S',
      'yi:9b-v1.5-q5_0',
      'yi:9b-v1.5-q5_1',
      'yi:9b-v1.5-q5_K_M',
      'yi:9b-v1.5-q5_K_S',
      'yi:9b-v1.5-q6_K',
      'yi:9b-v1.5-q8_0',
      'yi:latest',
      'yi:v1.5',
    ],
  },
  'yi-coder': {
    name: 'yi-coder',
    type: 'chat',
    tags: [
      'yi-coder:1.5b',
      'yi-coder:1.5b-base',
      'yi-coder:1.5b-base-fp16',
      'yi-coder:1.5b-base-q2_K',
      'yi-coder:1.5b-base-q3_K_L',
      'yi-coder:1.5b-base-q3_K_M',
      'yi-coder:1.5b-base-q3_K_S',
      'yi-coder:1.5b-base-q4_0',
      'yi-coder:1.5b-base-q4_1',
      'yi-coder:1.5b-base-q4_K_M',
      'yi-coder:1.5b-base-q4_K_S',
      'yi-coder:1.5b-base-q5_0',
      'yi-coder:1.5b-base-q5_1',
      'yi-coder:1.5b-base-q5_K_M',
      'yi-coder:1.5b-base-q5_K_S',
      'yi-coder:1.5b-base-q6_K',
      'yi-coder:1.5b-base-q8_0',
      'yi-coder:1.5b-chat',
      'yi-coder:1.5b-chat-fp16',
      'yi-coder:1.5b-chat-q2_K',
      'yi-coder:1.5b-chat-q3_K_L',
      'yi-coder:1.5b-chat-q3_K_M',
      'yi-coder:1.5b-chat-q3_K_S',
      'yi-coder:1.5b-chat-q4_0',
      'yi-coder:1.5b-chat-q4_1',
      'yi-coder:1.5b-chat-q4_K_M',
      'yi-coder:1.5b-chat-q4_K_S',
      'yi-coder:1.5b-chat-q5_0',
      'yi-coder:1.5b-chat-q5_1',
      'yi-coder:1.5b-chat-q5_K_M',
      'yi-coder:1.5b-chat-q5_K_S',
      'yi-coder:1.5b-chat-q6_K',
      'yi-coder:1.5b-chat-q8_0',
      'yi-coder:9b',
      'yi-coder:9b-base',
      'yi-coder:9b-base-fp16',
      'yi-coder:9b-base-q2_K',
      'yi-coder:9b-base-q3_K_L',
      'yi-coder:9b-base-q3_K_M',
      'yi-coder:9b-base-q3_K_S',
      'yi-coder:9b-base-q4_0',
      'yi-coder:9b-base-q4_1',
      'yi-coder:9b-base-q4_K_M',
      'yi-coder:9b-base-q4_K_S',
      'yi-coder:9b-base-q5_0',
      'yi-coder:9b-base-q5_1',
      'yi-coder:9b-base-q5_K_M',
      'yi-coder:9b-base-q5_K_S',
      'yi-coder:9b-base-q6_K',
      'yi-coder:9b-base-q8_0',
      'yi-coder:9b-chat',
      'yi-coder:9b-chat-fp16',
      'yi-coder:9b-chat-q2_K',
      'yi-coder:9b-chat-q3_K_L',
      'yi-coder:9b-chat-q3_K_M',
      'yi-coder:9b-chat-q3_K_S',
      'yi-coder:9b-chat-q4_0',
      'yi-coder:9b-chat-q4_1',
      'yi-coder:9b-chat-q4_K_M',
      'yi-coder:9b-chat-q4_K_S',
      'yi-coder:9b-chat-q5_0',
      'yi-coder:9b-chat-q5_1',
      'yi-coder:9b-chat-q5_K_M',
      'yi-coder:9b-chat-q5_K_S',
      'yi-coder:9b-chat-q6_K',
      'yi-coder:9b-chat-q8_0',
      'yi-coder:latest',
    ],
  },
  zephyr: {
    name: 'zephyr',
    type: 'chat',
    tags: [
      'zephyr:141b',
      'zephyr:141b-v0.1',
      'zephyr:141b-v0.1-fp16',
      'zephyr:141b-v0.1-q2_K',
      'zephyr:141b-v0.1-q4_0',
      'zephyr:141b-v0.1-q8_0',
      'zephyr:7b',
      'zephyr:7b-alpha',
      'zephyr:7b-alpha-fp16',
      'zephyr:7b-alpha-q2_K',
      'zephyr:7b-alpha-q3_K_L',
      'zephyr:7b-alpha-q3_K_M',
      'zephyr:7b-alpha-q3_K_S',
      'zephyr:7b-alpha-q4_0',
      'zephyr:7b-alpha-q4_1',
      'zephyr:7b-alpha-q4_K_M',
      'zephyr:7b-alpha-q4_K_S',
      'zephyr:7b-alpha-q5_0',
      'zephyr:7b-alpha-q5_1',
      'zephyr:7b-alpha-q5_K_M',
      'zephyr:7b-alpha-q5_K_S',
      'zephyr:7b-alpha-q6_K',
      'zephyr:7b-alpha-q8_0',
      'zephyr:7b-beta',
      'zephyr:7b-beta-fp16',
      'zephyr:7b-beta-q2_K',
      'zephyr:7b-beta-q3_K_L',
      'zephyr:7b-beta-q3_K_M',
      'zephyr:7b-beta-q3_K_S',
      'zephyr:7b-beta-q4_0',
      'zephyr:7b-beta-q4_1',
      'zephyr:7b-beta-q4_K_M',
      'zephyr:7b-beta-q4_K_S',
      'zephyr:7b-beta-q5_0',
      'zephyr:7b-beta-q5_1',
      'zephyr:7b-beta-q5_K_M',
      'zephyr:7b-beta-q5_K_S',
      'zephyr:7b-beta-q6_K',
      'zephyr:7b-beta-q8_0',
      'zephyr:latest',
    ],
  },
  'all-minilm': {
    name: 'all-minilm',
    type: 'embedding',
    tags: [
      'all-minilm:22m',
      'all-minilm:22m-l6-v2-fp16',
      'all-minilm:33m',
      'all-minilm:33m-l12-v2-fp16',
      'all-minilm:l12',
      'all-minilm:l12-v2',
      'all-minilm:l6',
      'all-minilm:l6-v2',
      'all-minilm:latest',
      'all-minilm:v2',
    ],
  },
  'bge-large': {
    name: 'bge-large',
    type: 'embedding',
    tags: ['bge-large:335m', 'bge-large:335m-en-v1.5-fp16', 'bge-large:latest'],
  },
  'bge-m3': {
    name: 'bge-m3',
    type: 'embedding',
    tags: ['bge-m3:567m', 'bge-m3:567m-fp16', 'bge-m3:latest'],
  },
  'granite-embedding': {
    name: 'granite-embedding',
    type: 'embedding',
    tags: [
      'granite-embedding:278m',
      'granite-embedding:278m-fp16',
      'granite-embedding:30m',
      'granite-embedding:30m-en',
      'granite-embedding:30m-en-fp16',
      'granite-embedding:latest',
    ],
  },
  'mxbai-embed-large': {
    name: 'mxbai-embed-large',
    type: 'embedding',
    tags: [
      'mxbai-embed-large:335m',
      'mxbai-embed-large:335m-v1-fp16',
      'mxbai-embed-large:latest',
      'mxbai-embed-large:v1',
    ],
  },
  'nomic-embed-text': {
    name: 'nomic-embed-text',
    type: 'embedding',
    tags: [
      'nomic-embed-text:137m-v1.5-fp16',
      'nomic-embed-text:latest',
      'nomic-embed-text:v1.5',
    ],
  },
  'paraphrase-multilingual': {
    name: 'paraphrase-multilingual',
    type: 'embedding',
    tags: [
      'paraphrase-multilingual:278m',
      'paraphrase-multilingual:278m-mpnet-base-v2-fp16',
      'paraphrase-multilingual:latest',
    ],
  },
  'snowflake-arctic-embed': {
    name: 'snowflake-arctic-embed',
    type: 'embedding',
    tags: [
      'snowflake-arctic-embed:110m',
      'snowflake-arctic-embed:110m-m-fp16',
      'snowflake-arctic-embed:137m',
      'snowflake-arctic-embed:137m-m-long-fp16',
      'snowflake-arctic-embed:22m',
      'snowflake-arctic-embed:22m-xs-fp16',
      'snowflake-arctic-embed:335m',
      'snowflake-arctic-embed:335m-l-fp16',
      'snowflake-arctic-embed:33m',
      'snowflake-arctic-embed:33m-s-fp16',
      'snowflake-arctic-embed:l',
      'snowflake-arctic-embed:latest',
      'snowflake-arctic-embed:m',
      'snowflake-arctic-embed:m-long',
      'snowflake-arctic-embed:s',
      'snowflake-arctic-embed:xs',
    ],
  },
  'snowflake-arctic-embed2': {
    name: 'snowflake-arctic-embed2',
    type: 'embedding',
    tags: [
      'snowflake-arctic-embed2:568m',
      'snowflake-arctic-embed2:568m-l-fp16',
      'snowflake-arctic-embed2:latest',
    ],
  },
  bakllava: {
    name: 'bakllava',
    type: 'vision',
    tags: [
      'bakllava:7b',
      'bakllava:7b-v1-fp16',
      'bakllava:7b-v1-q2_K',
      'bakllava:7b-v1-q3_K_L',
      'bakllava:7b-v1-q3_K_M',
      'bakllava:7b-v1-q3_K_S',
      'bakllava:7b-v1-q4_0',
      'bakllava:7b-v1-q4_1',
      'bakllava:7b-v1-q4_K_M',
      'bakllava:7b-v1-q4_K_S',
      'bakllava:7b-v1-q5_0',
      'bakllava:7b-v1-q5_1',
      'bakllava:7b-v1-q5_K_M',
      'bakllava:7b-v1-q5_K_S',
      'bakllava:7b-v1-q6_K',
      'bakllava:7b-v1-q8_0',
      'bakllava:latest',
    ],
  },
  gemma3: {
    name: 'gemma3',
    type: 'vision',
    tags: [
      'gemma3:12b',
      'gemma3:12b-it-fp16',
      'gemma3:12b-it-q4_K_M',
      'gemma3:12b-it-q8_0',
      'gemma3:12b-it-qat',
      'gemma3:1b',
      'gemma3:1b-it-fp16',
      'gemma3:1b-it-q4_K_M',
      'gemma3:1b-it-q8_0',
      'gemma3:1b-it-qat',
      'gemma3:27b',
      'gemma3:27b-it-fp16',
      'gemma3:27b-it-q4_K_M',
      'gemma3:27b-it-q8_0',
      'gemma3:27b-it-qat',
      'gemma3:4b',
      'gemma3:4b-it-fp16',
      'gemma3:4b-it-q4_K_M',
      'gemma3:4b-it-q8_0',
      'gemma3:4b-it-qat',
      'gemma3:latest',
    ],
  },
  'granite3.2-vision': {
    name: 'granite3.2-vision',
    type: 'vision',
    tags: [
      'granite3.2-vision:2b',
      'granite3.2-vision:2b-fp16',
      'granite3.2-vision:2b-q4_K_M',
      'granite3.2-vision:2b-q8_0',
      'granite3.2-vision:latest',
    ],
  },
  'llama3.2-vision': {
    name: 'llama3.2-vision',
    type: 'vision',
    tags: [
      'llama3.2-vision:11b',
      'llama3.2-vision:11b-instruct-fp16',
      'llama3.2-vision:11b-instruct-q4_K_M',
      'llama3.2-vision:11b-instruct-q8_0',
      'llama3.2-vision:90b',
      'llama3.2-vision:90b-instruct-fp16',
      'llama3.2-vision:90b-instruct-q4_K_M',
      'llama3.2-vision:90b-instruct-q8_0',
      'llama3.2-vision:latest',
    ],
  },
  llama4: {
    name: 'llama4',
    type: 'vision',
    tags: [
      'llama4:128x17b',
      'llama4:16x17b',
      'llama4:17b-maverick-128e-instruct-fp16',
      'llama4:17b-maverick-128e-instruct-q4_K_M',
      'llama4:17b-maverick-128e-instruct-q8_0',
      'llama4:17b-scout-16e-instruct-fp16',
      'llama4:17b-scout-16e-instruct-q4_K_M',
      'llama4:17b-scout-16e-instruct-q8_0',
      'llama4:latest',
      'llama4:maverick',
      'llama4:scout',
    ],
  },
  llava: {
    name: 'llava',
    type: 'vision',
    tags: [
      'llava:13b',
      'llava:13b-v1.5-fp16',
      'llava:13b-v1.5-q2_K',
      'llava:13b-v1.5-q3_K_L',
      'llava:13b-v1.5-q3_K_M',
      'llava:13b-v1.5-q3_K_S',
      'llava:13b-v1.5-q4_0',
      'llava:13b-v1.5-q4_1',
      'llava:13b-v1.5-q4_K_M',
      'llava:13b-v1.5-q4_K_S',
      'llava:13b-v1.5-q5_0',
      'llava:13b-v1.5-q5_1',
      'llava:13b-v1.5-q5_K_M',
      'llava:13b-v1.5-q5_K_S',
      'llava:13b-v1.5-q6_K',
      'llava:13b-v1.5-q8_0',
      'llava:13b-v1.6',
      'llava:13b-v1.6-vicuna-fp16',
      'llava:13b-v1.6-vicuna-q2_K',
      'llava:13b-v1.6-vicuna-q3_K_L',
      'llava:13b-v1.6-vicuna-q3_K_M',
      'llava:13b-v1.6-vicuna-q3_K_S',
      'llava:13b-v1.6-vicuna-q4_0',
      'llava:13b-v1.6-vicuna-q4_1',
      'llava:13b-v1.6-vicuna-q4_K_M',
      'llava:13b-v1.6-vicuna-q4_K_S',
      'llava:13b-v1.6-vicuna-q5_0',
      'llava:13b-v1.6-vicuna-q5_1',
      'llava:13b-v1.6-vicuna-q5_K_M',
      'llava:13b-v1.6-vicuna-q5_K_S',
      'llava:13b-v1.6-vicuna-q6_K',
      'llava:13b-v1.6-vicuna-q8_0',
      'llava:34b',
      'llava:34b-v1.6',
      'llava:34b-v1.6-fp16',
      'llava:34b-v1.6-q2_K',
      'llava:34b-v1.6-q3_K_L',
      'llava:34b-v1.6-q3_K_M',
      'llava:34b-v1.6-q3_K_S',
      'llava:34b-v1.6-q4_0',
      'llava:34b-v1.6-q4_1',
      'llava:34b-v1.6-q4_K_M',
      'llava:34b-v1.6-q4_K_S',
      'llava:34b-v1.6-q5_0',
      'llava:34b-v1.6-q5_1',
      'llava:34b-v1.6-q5_K_M',
      'llava:34b-v1.6-q5_K_S',
      'llava:34b-v1.6-q6_K',
      'llava:34b-v1.6-q8_0',
      'llava:7b',
      'llava:7b-v1.5-fp16',
      'llava:7b-v1.5-q2_K',
      'llava:7b-v1.5-q3_K_L',
      'llava:7b-v1.5-q3_K_M',
      'llava:7b-v1.5-q3_K_S',
      'llava:7b-v1.5-q4_0',
      'llava:7b-v1.5-q4_1',
      'llava:7b-v1.5-q4_K_M',
      'llava:7b-v1.5-q4_K_S',
      'llava:7b-v1.5-q5_0',
      'llava:7b-v1.5-q5_1',
      'llava:7b-v1.5-q5_K_M',
      'llava:7b-v1.5-q5_K_S',
      'llava:7b-v1.5-q6_K',
      'llava:7b-v1.5-q8_0',
      'llava:7b-v1.6',
      'llava:7b-v1.6-mistral-fp16',
      'llava:7b-v1.6-mistral-q2_K',
      'llava:7b-v1.6-mistral-q3_K_L',
      'llava:7b-v1.6-mistral-q3_K_M',
      'llava:7b-v1.6-mistral-q3_K_S',
      'llava:7b-v1.6-mistral-q4_0',
      'llava:7b-v1.6-mistral-q4_1',
      'llava:7b-v1.6-mistral-q4_K_M',
      'llava:7b-v1.6-mistral-q4_K_S',
      'llava:7b-v1.6-mistral-q5_0',
      'llava:7b-v1.6-mistral-q5_1',
      'llava:7b-v1.6-mistral-q5_K_M',
      'llava:7b-v1.6-mistral-q5_K_S',
      'llava:7b-v1.6-mistral-q6_K',
      'llava:7b-v1.6-mistral-q8_0',
      'llava:7b-v1.6-vicuna-fp16',
      'llava:7b-v1.6-vicuna-q2_K',
      'llava:7b-v1.6-vicuna-q3_K_L',
      'llava:7b-v1.6-vicuna-q3_K_M',
      'llava:7b-v1.6-vicuna-q3_K_S',
      'llava:7b-v1.6-vicuna-q4_0',
      'llava:7b-v1.6-vicuna-q4_1',
      'llava:7b-v1.6-vicuna-q4_K_M',
      'llava:7b-v1.6-vicuna-q4_K_S',
      'llava:7b-v1.6-vicuna-q5_0',
      'llava:7b-v1.6-vicuna-q5_1',
      'llava:7b-v1.6-vicuna-q5_K_M',
      'llava:7b-v1.6-vicuna-q5_K_S',
      'llava:7b-v1.6-vicuna-q6_K',
      'llava:7b-v1.6-vicuna-q8_0',
      'llava:latest',
      'llava:v1.6',
    ],
  },
  'llava-llama3': {
    name: 'llava-llama3',
    type: 'vision',
    tags: [
      'llava-llama3:8b',
      'llava-llama3:8b-v1.1-fp16',
      'llava-llama3:8b-v1.1-q4_0',
      'llava-llama3:latest',
    ],
  },
  'llava-phi3': {
    name: 'llava-phi3',
    type: 'vision',
    tags: [
      'llava-phi3:3.8b',
      'llava-phi3:3.8b-mini-fp16',
      'llava-phi3:3.8b-mini-q4_0',
      'llava-phi3:latest',
    ],
  },
  'minicpm-v': {
    name: 'minicpm-v',
    type: 'vision',
    tags: [
      'minicpm-v:8b',
      'minicpm-v:8b-2.6-fp16',
      'minicpm-v:8b-2.6-q2_K',
      'minicpm-v:8b-2.6-q3_K_L',
      'minicpm-v:8b-2.6-q3_K_M',
      'minicpm-v:8b-2.6-q3_K_S',
      'minicpm-v:8b-2.6-q4_0',
      'minicpm-v:8b-2.6-q4_1',
      'minicpm-v:8b-2.6-q4_K_M',
      'minicpm-v:8b-2.6-q4_K_S',
      'minicpm-v:8b-2.6-q5_0',
      'minicpm-v:8b-2.6-q5_1',
      'minicpm-v:8b-2.6-q5_K_M',
      'minicpm-v:8b-2.6-q5_K_S',
      'minicpm-v:8b-2.6-q6_K',
      'minicpm-v:8b-2.6-q8_0',
      'minicpm-v:latest',
    ],
  },
  'mistral-small3.1': {
    name: 'mistral-small3.1',
    type: 'vision',
    tags: [
      'mistral-small3.1:24b',
      'mistral-small3.1:24b-instruct-2503-fp16',
      'mistral-small3.1:24b-instruct-2503-q4_K_M',
      'mistral-small3.1:24b-instruct-2503-q8_0',
      'mistral-small3.1:latest',
    ],
  },
  'mistral-small3.2': {
    name: 'mistral-small3.2',
    type: 'vision',
    tags: [
      'mistral-small3.2:24b',
      'mistral-small3.2:24b-instruct-2506-fp16',
      'mistral-small3.2:24b-instruct-2506-q4_K_M',
      'mistral-small3.2:24b-instruct-2506-q8_0',
      'mistral-small3.2:latest',
    ],
  },
  moondream: {
    name: 'moondream',
    type: 'vision',
    tags: [
      'moondream:1.8b',
      'moondream:1.8b-v2-fp16',
      'moondream:1.8b-v2-q2_K',
      'moondream:1.8b-v2-q3_K_L',
      'moondream:1.8b-v2-q3_K_M',
      'moondream:1.8b-v2-q3_K_S',
      'moondream:1.8b-v2-q4_0',
      'moondream:1.8b-v2-q4_1',
      'moondream:1.8b-v2-q4_K_M',
      'moondream:1.8b-v2-q4_K_S',
      'moondream:1.8b-v2-q5_0',
      'moondream:1.8b-v2-q5_1',
      'moondream:1.8b-v2-q5_K_M',
      'moondream:1.8b-v2-q5_K_S',
      'moondream:1.8b-v2-q6_K',
      'moondream:1.8b-v2-q8_0',
      'moondream:latest',
      'moondream:v2',
    ],
  },
  'qwen2.5vl': {
    name: 'qwen2.5vl',
    type: 'vision',
    tags: [
      'qwen2.5vl:32b',
      'qwen2.5vl:32b-fp16',
      'qwen2.5vl:32b-q4_K_M',
      'qwen2.5vl:32b-q8_0',
      'qwen2.5vl:3b',
      'qwen2.5vl:3b-fp16',
      'qwen2.5vl:3b-q4_K_M',
      'qwen2.5vl:3b-q8_0',
      'qwen2.5vl:72b',
      'qwen2.5vl:72b-fp16',
      'qwen2.5vl:72b-q4_K_M',
      'qwen2.5vl:72b-q8_0',
      'qwen2.5vl:7b',
      'qwen2.5vl:7b-fp16',
      'qwen2.5vl:7b-q4_K_M',
      'qwen2.5vl:7b-q8_0',
      'qwen2.5vl:latest',
    ],
  },
};

// Helper functions
export function isEmbeddingModel(
  model: string,
): model is OllamaEmbeddingModelId {
  return [
    'all-minilm',
    'bge-large',
    'bge-m3',
    'granite-embedding',
    'mxbai-embed-large',
    'nomic-embed-text',
    'paraphrase-multilingual',
    'snowflake-arctic-embed',
    'snowflake-arctic-embed2',
  ].includes(model);
}

export function isVisionModel(model: string): model is OllamaVisionModelId {
  return [
    'bakllava',
    'gemma3',
    'granite3.2-vision',
    'llama3.2-vision',
    'llama4',
    'llava',
    'llava-llama3',
    'llava-phi3',
    'minicpm-v',
    'mistral-small3.1',
    'mistral-small3.2',
    'moondream',
    'qwen2.5vl',
  ].includes(model);
}

export function isChatModel(model: string): model is OllamaChatModelId {
  return [
    'alfred',
    'athene-v2',
    'aya',
    'aya-expanse',
    'bespoke-minicheck',
    'codebooga',
    'codegeex4',
    'codegemma',
    'codellama',
    'codeqwen',
    'codestral',
    'codeup',
    'cogito',
    'command-a',
    'command-r',
    'command-r-plus',
    'command-r7b',
    'command-r7b-arabic',
    'dbrx',
    'deepcoder',
    'deepscaler',
    'deepseek-coder',
    'deepseek-coder-v2',
    'deepseek-llm',
    'deepseek-r1',
    'deepseek-v2',
    'deepseek-v2.5',
    'deepseek-v3',
    'devstral',
    'dolphin-llama3',
    'dolphin-mistral',
    'dolphin-mixtral',
    'dolphin-phi',
    'dolphin3',
    'dolphincoder',
    'duckdb-nsql',
    'everythinglm',
    'exaone-deep',
    'exaone3.5',
    'falcon',
    'falcon2',
    'falcon3',
    'firefunction-v2',
    'gemma',
    'gemma2',
    'gemma3n',
    'glm4',
    'goliath',
    'gpt-oss',
    'granite-code',
    'granite3-dense',
    'granite3-guardian',
    'granite3-moe',
    'granite3.1-dense',
    'granite3.1-moe',
    'granite3.2',
    'granite3.3',
    'hermes3',
    'internlm2',
    'llama-guard3',
    'llama-pro',
    'llama2',
    'llama2-chinese',
    'llama2-uncensored',
    'llama3',
    'llama3-chatqa',
    'llama3-gradient',
    'llama3-groq-tool-use',
    'llama3.1',
    'llama3.2',
    'llama3.3',
    'magicoder',
    'magistral',
    'marco-o1',
    'mathstral',
    'meditron',
    'medllama2',
    'megadolphin',
    'mistral',
    'mistral-large',
    'mistral-nemo',
    'mistral-openorca',
    'mistral-small',
    'mistrallite',
    'mixtral',
    'nemotron',
    'nemotron-mini',
    'neural-chat',
    'nexusraven',
    'notus',
    'notux',
    'nous-hermes',
    'nous-hermes2',
    'nous-hermes2-mixtral',
    'nuextract',
    'olmo2',
    'open-orca-platypus2',
    'openchat',
    'opencoder',
    'openhermes',
    'openthinker',
    'orca-mini',
    'orca2',
    'phi',
    'phi3',
    'phi3.5',
    'phi4',
    'phi4-mini',
    'phi4-mini-reasoning',
    'phi4-reasoning',
    'phind-codellama',
    'qwen',
    'qwen2',
    'qwen2-math',
    'qwen2.5',
    'qwen2.5-coder',
    'qwen3',
    'qwen3-coder',
    'qwq',
    'r1-1776',
    'reader-lm',
    'reflection',
    'sailor2',
    'samantha-mistral',
    'shieldgemma',
    'smallthinker',
    'smollm',
    'smollm2',
    'solar',
    'solar-pro',
    'sqlcoder',
    'stable-beluga',
    'stable-code',
    'stablelm-zephyr',
    'stablelm2',
    'starcoder',
    'starcoder2',
    'starling-lm',
    'tinydolphin',
    'tinyllama',
    'tulu3',
    'vicuna',
    'wizard-math',
    'wizard-vicuna',
    'wizard-vicuna-uncensored',
    'wizardcoder',
    'wizardlm',
    'wizardlm-uncensored',
    'wizardlm2',
    'xwinlm',
    'yarn-llama2',
    'yarn-mistral',
    'yi',
    'yi-coder',
    'zephyr',
  ].includes(model);
}

export function getModelType(
  model: string,
): 'chat' | 'embedding' | 'vision' | 'unknown' {
  if (isEmbeddingModel(model)) return 'embedding';
  if (isVisionModel(model)) return 'vision';
  if (isChatModel(model)) return 'chat';
  return 'unknown';
}

// Model counts
export const MODEL_COUNTS = {
  chat: 6589,
  embedding: 60,
  vision: 244,
  total: 6893,
} as const;
