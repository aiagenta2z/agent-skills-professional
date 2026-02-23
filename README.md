# Agent Skills Professional: agent-skills-professional

[Github](https://github.com/aiagenta2z/agent-skills-professional) | [Search Agent](https://www.deepnlp.org/search/agent) | [Marketplace GitHub](https://github.com/aiagenta2z/ai-agent-marketplace) | [AI Agent Marketplace](https://www.deepnlp.org/store/ai-agent) | [Live Agent Deployment](https://deepnlp.org/doc/agent_mcp_deployment) | [Agent Router](https://agent.deepnlp.org)

Open-source professional agent skills library for AI employees and AI coworkers. Modular, reusable agent skills covering 30+ real-world professions.

Our mission is simple:

> 📌 **Build professional AI employee skill modules that match real LinkedIn job profiles and cover more than 30+ job categories**

This project enables people to use AI as professional co-workers — structured, reliable, and role-specific.

Each skill represents a profession and includes structured prompts, behavioral guidelines, and optional helper utilities so agents (Codex, Claude Code, Cursor, etc.) can perform like specialized AI employees that help you get real work done.

---

## Mission

We are building a **Professional AI Skill Library** where AI Employees can assist you across industries and departments.

Imagine having AI CoWorkers such as:

- Human Resources Manager  
- Retirement Planning Advisor  
- Marketing Manager  
- Product Manager  
- Sales Executive  
- Software Engineer  
- Data Analyst  
- Legal Counsel  
- Operations Manager  
- Customer Support Specialist  
- Recruiter  
- Content Strategist  
- Financial Analyst  
- UX Designer  
- Cybersecurity Analyst  
- And 20+ more...

Each skill is designed to function like a **real professional teammate**, with:

- Defined responsibilities  
- Clear communication style  
- Business-ready deliverables  
- Structured outputs  
- Optional helper functions  

This is not just prompts — this is a growing workforce of AI Employees.

---

## 📁 Repository Structure

```
skills/
├── human_resource_skills/
│   ├── SKILL.md
│   └── index.ts (optional helpers)
│
├── financial_planning_retirement/
│   ├── SKILL.md
│   └── index.ts (optional helpers)
│
└── your_new_profession_skill/
    ├── SKILL.md
    └── index.ts
```

Each profession lives in its own subdirectory.

---

# Current AI Employees

### `human_resource_skills`
AI HR professional specializing in drafting PIP notifications, offer letters, interview feedback, policy documents, and handling sensitive employee communications.

### `financial_planning_retirement`
AI Retirement Planning Advisor specializing in retirement income projections, portfolio allocation guidance, risk profiling summaries, long-term financial planning drafts, and client-ready advisory reports.


# ⚙️ Skills Usage Guide

This repo contains reusable AI Employee skills under `skills/`. Below are quick-start examples for Codex, Claude Code, and Cursor.

---

## 🧩 Codex

Reference the skill name and ask the agent to load it.

**open codex**
```commandline
codex
```

**enter prompt**
```text
Use the human_resource_skills skill and draft a PIP notification email for a software engineer name is Jason.
```

**Result**
```commandline
### Below is a neutral, HR‑appropriate PIP notification email to John. I left placeholders for missing details.

  Draft Email

  Subject: Performance Improvement Plan (PIP) Notification

  Hello John,

  This email is to inform you that we are initiating a Performance Improvement Plan (PIP) due to not meeting performance expectations.

  The PIP is intended to clarify expectations and provide structured support to help you be successful. We will review the plan together in a meeting on [DATE] at
  [TIME]. Your manager and HR will be present.

  You will receive a written plan that includes:

  - Specific performance expectations
  - Support and resources available
  - Milestones and check‑in schedule
  - Timeline and next steps

  If you have questions before the meeting, please reply to this email.

  Regards,
  [HR NAME]
  Human Resources
  [COMPANY NAME]
```

---

## 🤖 Claude Code

Reference the skill name and instruct Claude Code to use it.

```text
Use the human_resource_skills skill.
Generate a PIP email draft and return a TypeScript draft object.
```

---

## 🧭 Cursor

Reference the skill name so the agent loads the instructions.

```text
Load human_resource_skills and create a PIP email template.
Also export a helper function from skills/human_resource_skills/index.ts.
```

---

# 🏗 How to Contribute

We welcome contributors who want to help expand the AI Workforce.

Pick a real-world profession commonly found on LinkedIn.

- Marketing Manager  
- DevOps Engineer  
- Compliance Officer  
- Healthcare Administrator  
- Supply Chain Manager  
- Investment Banker  
- Real Estate Agent  
- Growth Hacker  
- Technical Recruiter  

---

## Create a New Skill Folder

```
skills/your_profession_name/
```

Include:

- `SKILL.md` (required)
- `index.ts` (optional helper utilities)
- more folder like ./scripts
---

## Step 3: Define the Skill Properly

Your `SKILL.md` should include:

### 1. Role Identity
- Job title
- Seniority level
- Core responsibilities

### 2. Behavioral Guidelines
- Tone
- Professional standards
- Compliance considerations

### 3. Deliverables
- Email templates
- Reports
- Structured JSON outputs
- Draft documents

### 4. Scripts Typescript/Python/more


### 5. Example Prompts
Show how the skill should be used in real work scenarios.

---

# 🎯 Long-Term Goal

We aim to:

- Build **30–40 professional AI Employees**
- Cover major corporate functions
- Enable plug-and-play AI CoWorkers
- Make this the go-to open repository for professional AI workforce skills

If we succeed, this repository could become:

> 🏢 The Open Workforce of AI Employees  
> 🤝 Your Always-Available AI CoWork Team  
> 🔥 A trending reference for professional AI agents  

---

# ⭐ Support the Project

If you find this useful:

- Star the repository  
- Share it  
- Contribute a profession  
- Improve documentation  
- Add structured helper utilities  

Let’s build the future of AI CoWork together.

---

# 📜 License

MIT License (recommended)
