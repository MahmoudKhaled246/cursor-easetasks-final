"use client";

import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { codeSnippets } from "@/lib/data";

/** Syntax token types for the code editor mockup */
type TokenType =
  | "keyword"
  | "string"
  | "function"
  | "component"
  | "prop"
  | "number"
  | "punctuation"
  | "plain"
  | "comment";

interface Token {
  text: string;
  type: TokenType;
}

const tokenColors: Record<TokenType, string> = {
  keyword: "text-purple-400",
  string: "text-accent",
  function: "text-sky-400",
  component: "text-orange-400",
  prop: "text-yellow-300",
  number: "text-blue-300",
  punctuation: "text-text-muted",
  plain: "text-text-primary",
  comment: "text-text-muted/60",
};

/** Tokenize a line of TypeScript/JSX for syntax highlighting */
function tokenizeLine(line: string): Token[] {
  const tokens: Token[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    // Whitespace
    const wsMatch = remaining.match(/^(\s+)/);
    if (wsMatch) {
      tokens.push({ text: wsMatch[1], type: "plain" });
      remaining = remaining.slice(wsMatch[1].length);
      continue;
    }

    // Keywords
    const kwMatch = remaining.match(
      /^(import|export|from|const|function|return|async|await|default)\b/
    );
    if (kwMatch) {
      tokens.push({ text: kwMatch[1], type: "keyword" });
      remaining = remaining.slice(kwMatch[1].length);
      continue;
    }

    // Strings
    const strMatch = remaining.match(/^('[^']*'|"[^"]*"|`[^`]*`)/);
    if (strMatch) {
      tokens.push({ text: strMatch[1], type: "string" });
      remaining = remaining.slice(strMatch[1].length);
      continue;
    }

    // JSX components (<Platform>, </Platform>)
    const jsxMatch = remaining.match(/^<\/?[A-Z][a-zA-Z]*/);
    if (jsxMatch) {
      tokens.push({ text: jsxMatch[0], type: "component" });
      remaining = remaining.slice(jsxMatch[0].length);
      continue;
    }

    // Function/hook names
    const fnMatch = remaining.match(/^(useState|useEffect|createClient|deploy|Engine|connect)\b/);
    if (fnMatch) {
      tokens.push({ text: fnMatch[1], type: "function" });
      remaining = remaining.slice(fnMatch[1].length);
      continue;
    }

    // Props (speed=, limit=)
    const propMatch = remaining.match(/^([a-z][a-zA-Z]*)(=)/);
    if (propMatch) {
      tokens.push({ text: propMatch[1], type: "prop" });
      tokens.push({ text: propMatch[2], type: "punctuation" });
      remaining = remaining.slice(propMatch[0].length);
      continue;
    }

    // Numbers
    const numMatch = remaining.match(/^(\d+)/);
    if (numMatch) {
      tokens.push({ text: numMatch[1], type: "number" });
      remaining = remaining.slice(numMatch[1].length);
      continue;
    }

    // Infinity
    if (remaining.startsWith("Infinity")) {
      tokens.push({ text: "Infinity", type: "number" });
      remaining = remaining.slice(8);
      continue;
    }

    // Punctuation
    const punctMatch = remaining.match(/^([{}()[\];:,.<>/])/);
    if (punctMatch) {
      tokens.push({ text: punctMatch[1], type: "punctuation" });
      remaining = remaining.slice(1);
      continue;
    }

    // Default: single character as plain
    tokens.push({ text: remaining[0], type: "plain" });
    remaining = remaining.slice(1);
  }

  return tokens;
}

function HighlightedCode({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, lineIdx) => {
        const tokens = tokenizeLine(line);
        const isLastLine = lineIdx === lines.length - 1;

        return (
          <div key={lineIdx} className="leading-6">
            {tokens.map((token, tokenIdx) => (
              <span key={tokenIdx} className={tokenColors[token.type]}>
                {token.text}
              </span>
            ))}
            {isLastLine && (
              <span className="ml-0.5 inline-block h-4 w-0.5 animate-blink bg-accent align-middle" />
            )}
          </div>
        );
      })}
      {text.length === 0 && (
        <span className="inline-block h-4 w-0.5 animate-blink bg-accent" />
      )}
    </>
  );
}

export function CodeEditor() {
  const { displayText } = useTypingAnimation({
    snippets: codeSnippets,
    typingSpeed: 35,
    deletingSpeed: 18,
    pauseDuration: 2000,
  });

  return (
    <div className="relative">
      {/* Glow behind editor */}
      <div className="absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl" />

      <div className="relative overflow-hidden rounded-card border border-white/10 bg-[#1a1b1f] shadow-card shadow-glow-sm">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-white/5 bg-[#222328] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-xs text-text-muted">
            App.tsx — EaseTasks
          </span>
        </div>

        {/* Code area */}
        <div className="min-h-[220px] p-5 font-mono text-[13px]">
          <HighlightedCode text={displayText} />
        </div>

        {/* Build output footer */}
        <div className="flex items-center justify-between border-t border-white/5 bg-[#222328] px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-text-muted">
              Build Output:{" "}
              <span className="text-accent">Deployment Successful</span>
            </span>
          </div>
          <span className="text-xs text-text-muted">
            Load Time: <span className="text-text-primary">14ms</span>
          </span>
        </div>
      </div>
    </div>
  );
}
