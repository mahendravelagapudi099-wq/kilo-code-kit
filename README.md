# Kilo Code Kit

Kilo Code Kit provides a modular AI development system built around **Agents, Skills, and Workflows**.

It installs a ready-to-use AI architecture that automatically selects specialist agents and loads the correct skills for each task.

---

# Features

- Automatic AI agent routing
- Modular skills system
- Reusable workflows
- Security and coding standards
- Designed for Kilo Code environments

---

# Quick Install

Run:

```bash
npx kilo-code-kit init
```

This installs the following into your project:

- `.kilo/`
- `.kilocode/`
- `scripts/`
- `AGENTS.md`
- `GEMINI.md`
- `kilo.json`

---

# Project Structure

After installation your project will contain:

```
.kilo/
  agents/

.kilocode/
  skills/
  workflows/
  rules/

scripts/

AGENTS.md
GEMINI.md
kilo.json
```

---

# Agents

Agents are **specialist AI personas**.

Each agent focuses on a specific domain.

Examples include:

- Frontend Specialist
- Backend Specialist
- Security Auditor
- Debugger
- Project Planner

Agents automatically activate when the system detects a relevant request.

**Example:**

> User: Add JWT authentication
>
> AI: 🤖 Applying @security-auditor + @backend-specialist

Agents are stored in:

```
.kilo/agents/
```

Each agent defines:

- role
- expertise
- behavior rules

---

# Skills

Skills are **knowledge modules that agents load when needed**.

Skills provide domain expertise such as:

- clean code practices
- API design patterns
- database architecture
- testing strategies
- performance optimization

Skills are stored in:

```
.kilocode/skills/
```

Each skill contains a **SKILL.md file** that describes:

- best practices
- guidelines
- implementation patterns

Agents read skill descriptions and load them automatically when tasks match their domain.

---

# Workflows

Workflows automate common development tasks.

They define step-by-step procedures for solving problems.

Examples include:

- brainstorming ideas
- creating new features
- debugging issues
- running tests
- deploying applications

Workflows can be triggered using slash commands.

**Example:**

```
/create authentication system
/debug login error
/test API endpoints
```

Workflows are stored in:

```
.kilocode/workflows/
```

---

# How Automatic Agent Routing Works

The system automatically detects the best agent for a request.

**Steps:**

1. Analyze the user request
2. Detect relevant domains (frontend, backend, security, etc.)
3. Select specialist agents
4. Load relevant skills
5. Generate expert-level responses

This allows developers to simply describe their task without manually selecting agents.

**Example:**

> User: Fix the login button
>
> AI: 🤖 Applying @frontend-specialist

---

# CLI Tool

The toolkit includes a CLI installer.

**Command:**

```bash
npx kilo-code-kit init
```

This copies the AI configuration files into your project.

**Option:** `--force`

**Example:**

```bash
npx kilo-code-kit init --force
```

This overwrites existing files.

---

# Safe Installation

The installer automatically protects existing configurations. If `.kilo` or `.kilocode` folders already exist in your project, the installer will warn you and skip the installation.

**Example output:**

```
Installing Kilo Code Kit...

⚠ .kilo already exists in the target project
⚠ .kilocode already exists in the target project

⚠ Kilo Code configuration already exists
Use --force to overwrite existing files
```

---

# License

MIT License

---

# Contributing

Contributions are welcome.

You can add:

- new agents
- new skills
- new workflows

to expand the toolkit.
