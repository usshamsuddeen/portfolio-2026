const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '../src/data/repo-snapshots.json');

const mockData = {
  "behavioral-agentic-ai": {
    "name": "behavioral-agentic-ai",
    "description": "Sentiment-Aware Escalation System Mock Data",
    "url": "https://github.com/usshamsuddeen",
    "private": true,
    "data": {
      "tree": [
        { "path": "main.py", "type": "blob" },
        { "path": "utils/sentiment.py", "type": "blob" },
        { "path": "README.md", "type": "blob" }
      ],
      "files": {
        "main.py": "import os\nfrom utils.sentiment import analyze\n\ndef main():\n    print('Starting Agentic AI...')\n    sentiment = analyze('I love this product!')\n    print(f'Sentiment: {sentiment}')\n\nif __name__ == '__main__':\n    main()",
        "utils/sentiment.py": "def analyze(text):\n    # This is a mock sentiment analyzer\n    if 'love' in text.lower():\n        return 'Positive'\n    return 'Neutral'",
        "README.md": "# Behavioral Agentic AI\n\nThis is a mock project demonstrating the Code Explorer functionality."
      }
    }
  }
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mockData, null, 2));
console.log("Mock data generated for testing.");
