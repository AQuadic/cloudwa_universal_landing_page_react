import React, { useState } from "react";
import { Terminal, Copy, Check } from "lucide-react";

const codeSamples = {
  official: {
    curl: `curl -X POST "https://official.cloudwa.net/api/v1/messages" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "messaging_product": "whatsapp",
    "to": "201000000000",
    "type": "template",
    "template": {
      "name": "hello_world",
      "language": { "code": "en_US" }
    }
  }'`,
    node: `const axios = require('axios');

axios.post('https://official.cloudwa.net/api/v1/messages', {
  messaging_product: 'whatsapp',
  to: '201000000000',
  type: 'template',
  template: {
    name: 'hello_world',
    language: { code: 'en_US' }
  }
}, {
  headers: { 
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
}).then(res => console.log(res.data));`,
    python: `import requests

url = "https://official.cloudwa.net/api/v1/messages"
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "messaging_product": "whatsapp",
    "to": "201000000000",
    "type": "template",
    "template": {
        "name": "hello_world",
        "language": { "code": "en_US" }
    }
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`
  },
  unofficial: {
    curl: `curl -X POST "https://cloudwa.net/api/send" \\
  -H "Content-Type: application/json" \\
  -d '{
    "number": "201000000000",
    "message": "Hello from CloudWA Unofficial API!",
    "instance_id": "YOUR_INSTANCE_ID",
    "access_token": "YOUR_ACCESS_TOKEN"
  }'`,
    node: `const axios = require('axios');

axios.post('https://cloudwa.net/api/send', {
  number: '201000000000',
  message: 'Hello from CloudWA Unofficial API!',
  instance_id: 'YOUR_INSTANCE_ID',
  access_token: 'YOUR_ACCESS_TOKEN'
}, {
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => console.log(res.data));`,
    python: `import requests

url = "https://cloudwa.net/api/send"
payload = {
    "number": "201000000000",
    "message": "Hello from CloudWA Unofficial API!",
    "instance_id": "YOUR_INSTANCE_ID",
    "access_token": "YOUR_ACCESS_TOKEN"
}

response = requests.post(url, json=payload)
print(response.json())`
  }
};

export default function Developer({ lang, t }) {
  const [apiType, setApiType] = useState("official"); // 'official' or 'unofficial'
  const [language, setLanguage] = useState("curl"); // 'curl', 'node', or 'python'
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = codeSamples[apiType][language];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer" className="py-20 bg-gray-55/30 dark:bg-gray-950/20 transition-theme border-y border-gray-200/50 dark:border-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple dark:text-brand-violet mb-4">
              <Terminal className="h-5 w-5" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-alexandria text-gray-900 dark:text-white mb-4">
              {t.developer.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-alexandria leading-relaxed mb-8">
              {t.developer.subtitle}
            </p>

            {/* Toggle endpoint button selection */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setApiType("official")}
                className={`rounded-xl px-5 py-3.5 text-xs font-bold font-alexandria border text-center transition-all ${
                  apiType === "official"
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-450 scale-[1.01]"
                    : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                {t.developer.officialEndpoint}
              </button>
              <button
                onClick={() => setApiType("unofficial")}
                className={`rounded-xl px-5 py-3.5 text-xs font-bold font-alexandria border text-center transition-all ${
                  apiType === "unofficial"
                    ? "bg-indigo-500/10 border-indigo-500 text-indigo-650 dark:text-indigo-400 scale-[1.01]"
                    : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-white/40 dark:bg-gray-950/40 hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
              >
                {t.developer.unofficialEndpoint}
              </button>
            </div>
          </div>

          {/* Right IDE sandbox mockup */}
          <div className="lg:col-span-7 rounded-3xl bg-gray-900 dark:bg-gray-950 border border-gray-800/80 shadow-2xl overflow-hidden text-start">
            
            {/* Header Tabs */}
            <div className="bg-gray-850 px-6 py-4 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("curl")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-outfit transition-colors ${
                    language === "curl" ? "bg-gray-800 text-brand-violet" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  cURL
                </button>
                <button
                  onClick={() => setLanguage("node")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-outfit transition-colors ${
                    language === "node" ? "bg-gray-800 text-brand-violet" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Node.js
                </button>
                <button
                  onClick={() => setLanguage("python")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-outfit transition-colors ${
                    language === "python" ? "bg-gray-800 text-brand-violet" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Python
                </button>
              </div>

              {/* Copy action */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white font-bold font-alexandria transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? t.developer.copySuccess : t.developer.copyBtn}</span>
              </button>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto min-h-[300px]">
              <pre className="font-mono text-xs sm:text-sm text-gray-350 leading-relaxed">
                <code>{codeSamples[apiType][language]}</code>
              </pre>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
