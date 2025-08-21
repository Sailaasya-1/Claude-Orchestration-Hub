### Claude-Orchestration-Hub

# MCP Server Automation with LLM (Claude)

Automates login verification, data fetching, and recording using a **custom-trained LLM (Claude)** with **MCP servers**, integrating **Playwright, Azure MySQL, REST API, File System, and Excel**.

---

## Workflow

1. **Playwright Server**: Automates web interactions via Node.js.  
2. **Azure MySQL**: Fetches and fill out user data.  
3. **REST API**: Handles login requests; checks Postman responses for success/failure.  
4. **File System**: Reads/writes response files for LLM processing.  
5. **Excel**: Stores processed login results for reporting.  
6. **LLM (Claude)**: Orchestrates workflow using MCP protocol.

---

## Requirements

- Node.js & Playwright (`npm install playwright`)  
- Python 3.x  
- Azure MySQL Database  
- Postman response collection  
- Git & Excel  

---

## Setup

1. Clone the repo:  
   ```bash
   git clone <repo_url>
   cd <repo_directory>
2. ```bash
   npm install



