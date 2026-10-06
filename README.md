# OPENAGENTHACKATHON2026
yes
open Agent Hackathon 2026 is a 144-hour online build event 
Sponsor workshops	8 and 12 October 2026, 22:00 UTC (3:00 PM PT)
Registration closes	13 October 2026, 00:00 UTC
Participant onboarding	14 October 2026, 16:00–17:30 UTC (9:00–10:30 AM PT)
Build window	15 October 2026, 00:00 UTC to 20 October 2026, 23:45 UTC
Submissions close	20 October 2026, 23:45 UTC
Results announced	30 October 2026, 16:00 UTC
#What You Need to Submit
Submissions close on 20 October 2026 at 23:45 UTC. This is a hard deadline. Submit through HackOS.

Component	Requirement
Demo video	1–4 minutes, showing the main workflow, how the agent solves the selected challenge, its key features, and how Zetaris and Meterless are integrated
Slide deck	The problem and target users, the solution, the agent workflow or architecture, the technical stack, how Zetaris and Meterless were used, what was unique about your use of the sponsor technologies, product visuals, and future enhancements
GitHub repository	All source code and a README covering setup, usage and dependencies. If your agents run in Google Colab, include the Colab links
Sponsor technology explanation	How Zetaris and Meterless were integrated, how Cursor was used during development, where NVIDIA technology contributes, and what was unique about your use of the sponsor technologies

#Rule
- build ai agent
- using sponsor technology to handle technical plumbing
- Participants work across three challenge tracks and the bonus Wildcard [Tinkerer] track, supported by sponsor technologies, live technical workshops, mentors, and resources.
- Event platform	HackOS (all hackathon operations)
- Sponsors	NVIDIA, Zetaris, Cursor, Meterless
Focus on this
Focus	Not This	Why
Systems	Prompt experiments	Agents should act, coordinate, recover, and produce useful outputs.
Real problems	Novelty alone	Strong submissions solve meaningful problems for real users.
Working solutions	Slides and mockups	Judges need to see the solution run.
Using the sponsor technology well	Rebuilding foundations	Sponsor technology is there so you can focus on value.
Clarity	UI polish only	A clear, explainable solution is stronger than a polished interface over a weak system.

# Must show 
Requirement	What It Means
Technical Execution	The project must be functional and demonstrate a working implementation.
Real-World Impact	The project must address a clear, meaningful problem or user need.
Innovation	The submission should demonstrate a novel or creative approach to the problem.
Demo Quality	You must clearly demonstrate how the product works and its key functionality.
Use of Technology	The project must integrate Zetaris and Meterless, be developed using Cursor, and use NVIDIA technology wherever it contributes.


Strong
Strong submissions include:

Agents that delegate tasks dynamically.
Agents that critique or validate outputs.
Iterative loops such as:
Planner ↔ Executor ↔ Evaluator
Shared memory or shared context.
Branching, retries, escalation, and recovery.
Logs or traces showing how the system reasoned and refined its work.
Example of a stronger design:

Planner creates approach
Executor attempts task
Evaluator detects missing evidence
Planner revises plan
Research Agent retrieves new context
Executor reruns task
Evaluator approves or requests another iteration
Final Agent produces answer

# 3 Tracks
Solving Fragmented Intelligence	Demonstrate a clever ability to discover and work across fragmented data sources.
2	The Agent That Can Explain Why	Build agents that investigate complex questions across multiple data sources, connect findings, and produce evidence-backed answers or recommendations.
3	Reasoning Architecture	Demonstrate a novel ability to turn data, knowledge, memory, and reasoning into reliable decisions and actions.
Bonus track: Wildcard [Tinkerer]: Bring Your Own Project
Track	What You Build	Sponsor Technology
Wildcard [Tinkerer]	Bring an existing project, prototype or concept and extend it using Zetaris and Meterless. Judged on the same criteria as the other tracks and scored on the new work rather than prior development.	Zetaris, Meterless

#Key dates
Welcome Guide
OPEN AGENT HACKATHON 2026
Welcome to the Open Agent Hackathon 2026, a fully online global hackathon for builders creating real agentic solutions to meaningful real-world problems.

This guide is your pre-event orientation resource. Read it before participant onboarding on 14 October 2026 and keep it open during your first build session.

The goal is simple:

> Build working AI agents that solve real problems, using sponsor technology to handle the technical plumbing so you can focus on the solution and the value it creates.

1. What Is the Open Agent Hackathon?
The Open Agent Hackathon 2026 is a 144-hour online build event where participants build AI agents that can access relevant information, understand context and relationships, reason across multiple steps, maintain useful context, and turn that understanding into a useful outcome. Participants work across three challenge tracks and the bonus Wildcard [Tinkerer] track, supported by sponsor technologies, live technical workshops, mentors, and resources.

Item	Detail
Event name	Open Agent Hackathon 2026
Format	Fully online, 144 hours
Eligibility	Open worldwide to anyone aged 16 or older at the start of the build window
Team size	1–5 builders; solo entries compete in the same pool as teams
Cost	Free
Event platform	HackOS (all hackathon operations)
Community	Discord (community chat and post-event activities)
Challenge tracks	3, plus the bonus Wildcard [Tinkerer] track
Sponsors	NVIDIA, Zetaris, Cursor, Meterless
Prize pool	Up to $20,000 ($15,000 in cash prizes and $5,000 in in-kind rewards)
Sponsor workshops	8 and 12 October 2026, 22:00 UTC (3:00 PM PT)
Registration closes	13 October 2026, 00:00 UTC
Participant onboarding	14 October 2026, 16:00–17:30 UTC (9:00–10:30 AM PT)
Build window	15 October 2026, 00:00 UTC to 20 October 2026, 23:45 UTC
Submissions close	20 October 2026, 23:45 UTC
Results announced	30 October 2026, 16:00 UTC
Employees of the organizer and of judging sponsors may participate but are not eligible for cash prizes. One account per participant; duplicate accounts disqualify the whole team. Full details are in the Official Rules on the event page.

2. The Mission: Build Real Agentic Work
This hackathon is about building agents that do useful work, not demos.

The sponsor technology exists to reduce the infrastructure burden. Instead of spending most of the event rebuilding data integration, context infrastructure, and other foundations, you can spend your time on the problem, the agent design, and the outcome.

Focus on this
Focus	Not This	Why
Systems	Prompt experiments	Agents should act, coordinate, recover, and produce useful outputs.
Real problems	Novelty alone	Strong submissions solve meaningful problems for real users.
Working solutions	Slides and mockups	Judges need to see the solution run.
Using the sponsor technology well	Rebuilding foundations	Sponsor technology is there so you can focus on value.
Clarity	UI polish only	A clear, explainable solution is stronger than a polished interface over a weak system.
What your solution must demonstrate
Requirement	What It Means
Technical Execution	The project must be functional and demonstrate a working implementation.
Real-World Impact	The project must address a clear, meaningful problem or user need.
Innovation	The submission should demonstrate a novel or creative approach to the problem.
Demo Quality	You must clearly demonstrate how the product works and its key functionality.
Use of Technology	The project must integrate Zetaris and Meterless, be developed using Cursor, and use NVIDIA technology wherever it contributes.
3. What Makes a Strong Agent System?
Judges will look at whether your agents do real work and whether the system holds up.

Weak
Avoid submissions where:

Agent A simply passes output to Agent B, then Agent B passes output to Agent C.
There are no feedback loops.
Agents are only wrappers around prompts.
There is no evidence of decision-making.
Nothing shows how the system reached its output.
Example of a weak design:

User input → Planner → Writer → Summarizer → Final answer
This is a pipeline, not an agent system.

Strong
Strong submissions include:

Agents that delegate tasks dynamically.
Agents that critique or validate outputs.
Iterative loops such as:
Planner ↔ Executor ↔ Evaluator
Shared memory or shared context.
Branching, retries, escalation, and recovery.
Logs or traces showing how the system reasoned and refined its work.
Example of a stronger design:

Planner creates approach
Executor attempts task
Evaluator detects missing evidence
Planner revises plan
Research Agent retrieves new context
Executor reruns task
Evaluator approves or requests another iteration
Final Agent produces answer
4. Your Starting Point: The Challenge Tracks
Every submission selects exactly one primary track, which determines the judging panel and the prizes it competes for. You can change your track any time before the submission deadline from your team workspace.

#	Track	What You Build
1	Solving Fragmented Intelligence	Demonstrate a clever ability to discover and work across fragmented data sources.
2	The Agent That Can Explain Why	Build agents that investigate complex questions across multiple data sources, connect findings, and produce evidence-backed answers or recommendations.
3	Reasoning Architecture	Demonstrate a novel ability to turn data, knowledge, memory, and reasoning into reliable decisions and actions.
Bonus track: Wildcard [Tinkerer]: Bring Your Own Project
Track	What You Build	Sponsor Technology
Wildcard [Tinkerer]	Bring an existing project, prototype or concept and extend it using Zetaris and Meterless. Judged on the same criteria as the other tracks and scored on the new work rather than prior development.	Zetaris, Meterless
Each challenge page on HackOS includes:

Challenge statement
Problem and use case
What you are expected to build
Sponsor technology involved
Submission requirements
Recommendation: Pick a track where you can build a reliable, working solution within the build window. A focused solution that runs is stronger than an ambitious one that does not.

5. Key Dates You Must Know
All times are in UTC.

Date	Milestone	What You Should Do
8 October, 22:00	NVIDIA and Meterless workshop	Attend live where possible. Recording is added to HackOS.
12 October, 22:00	Zetaris and Cursor workshop	Attend live where possible. Recording is added to HackOS.
13 October, 00:00	Registration closes	Hard deadline to register.
14 October, 16:00–17:30	Participant onboarding	Attend live. Confirm your track and how you will build.
15 October, 00:00	Build window opens	Start building.
15–20 October	Build period	Use HackOS, mentors, and resources. Ask questions early.
20 October, 00:00	Judging opens	Judging begins while final submissions come in.
20 October, 23:45	Submissions close	Hard deadline. Submit all required materials.
30 October, 16:00	Results announced	Live results call on HackOS.

7. How to Get Set Up on HackOS
HackOS runs all hackathon operations. Everything during the event happens there.

Use HackOS to:

Receive official announcements.
Access challenge pages and resources.
Watch sponsor workshop recordings.
Find teammates and create or manage your team.
Attend mentor office hours.
Ask technical questions in the #help desk channel.
Submit your project.
Join the live results call.

#Security rule
Never commit API keys or credentials.

Do not place real keys in:

Repository files
README.md
Notebooks
Screenshots
Logs
.env.example
Keep secrets in a local .env file, add it to .gitignore, and include a .env.example with placeholder values only.

