export interface JournalArticle {
    slug: string;
    title: string;
    subtitle?: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    alt: string;
    content: string; // HTML content for simplicity
    author: {
        name: string;
        role: string;
        image: string;
        bio: string;
    };
    relatedArticles: string[]; // slugs of related articles
}

export const journalArticles: JournalArticle[] = [
    {
        slug: "future-of-ai-agents",
        title: "The Future of AI Agents: From Tools to Teammates",
        date: "Oct 12, 2024",
        category: "AI Strategy",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        alt: "Abstract visualization of autonomous AI agents collaborating in a digital environment",
        content: `
            <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-[#2e616b] first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8] mb-6 line-clamp-none">
                AI agents are no longer passive tools waiting for prompts. They are evolving into autonomous collaborators capable of planning, reasoning, acting, and learning across complex systems.
            </p>
            <p class="mb-6">
                The shift from single-purpose automation to goal-driven agents marks a fundamental change in how software is built. Instead of rigid workflows, we now design intent, constraints, and feedback loops.
            </p>
            <h2 class="text-2xl md:text-3xl font-semibold mt-10 mb-4">Agency as a System Design Problem</h2>
            <p class="mb-6">
                True agency emerges when perception, memory, reasoning, and execution are tightly integrated. Frameworks like ReAct, Tree-of-Thought, and multi-agent orchestration enable systems to decompose problems dynamically.
            </p>
            <div class="my-12 relative py-2 pl-0 md:pl-8 border-l-0 md:border-l-4 border-[#2e616b]">
                <blockquote class="text-2xl md:text-3xl font-medium leading-snug text-[#2e616b] italic">
                    "The most powerful AI systems won't replace teams — they'll become part of them."
                </blockquote>
            </div>
            <p class="mb-6">
                Early adopters are already deploying agent swarms for customer support, cyber triage, software testing, and research synthesis. The competitive edge lies in orchestration, not just models.
            </p>
        `,
        author: {
            name: "Dr. Ayaan Mehta",
            role: "AI Systems Architect",
            image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
            bio: "AI Systems Architect specializing in autonomous agents, LLM orchestration, and applied multi-agent systems in production environments."
        },
        relatedArticles: ["multi-agent-orchestration", "agent-observability", "llmops-for-agents"]
    },
    {
        slug: "multi-agent-orchestration",
        title: "Multi-Agent Orchestration: Designing AI Teams",
        date: "Oct 10, 2024",
        category: "Architecture",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
        alt: "Diagram-like visualization of multiple AI agents communicating across nodes",
        content: `
            <p class="first-letter:text-5xl first-letter:font-bold first-letter:text-[#2e616b] first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8] mb-6 line-clamp-none">
                A single AI agent can reason — but a coordinated group of agents can solve systems-level problems.
            </p>
            <p class="mb-6">
                Multi-agent orchestration introduces roles, communication protocols, task delegation, and conflict resolution. Think of it as distributed systems meets cognitive architecture.
            </p>
            <p class="mb-6">
                Production-grade orchestration requires message queues, shared memory, vector databases, and governance layers to prevent runaway behavior.
            </p>
        `,
        author: {
            name: "Dr. Ayaan Mehta",
            role: "AI Systems Architect",
            image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
            bio: "Expert in designing scalable AI agent infrastructures across enterprise and startup ecosystems."
        },
        relatedArticles: ["future-of-ai-agents", "agent-observability", "security-for-ai-agents"]
    },
    {
        slug: "agent-observability",
        title: "Agent Observability: Debugging Autonomous Systems",
        date: "Oct 08, 2024",
        category: "AI Infrastructure",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        alt: "Dark analytics dashboard displaying AI logs and traces",
        content: `
            <p class="mb-6">
                When agents act independently, visibility becomes non-negotiable. Observability is the difference between scalable autonomy and silent failure.
            </p>
            <p class="mb-6">
                Logs, traces, reasoning steps, tool calls, and memory snapshots form the backbone of agent debugging. Without them, failures become impossible to diagnose.
            </p>
        `,
        author: {
            name: "Lena Rodriguez",
            role: "AI Platform Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
            bio: "Platform engineer focused on observability, reliability, and governance of autonomous AI systems."
        },
        relatedArticles: ["multi-agent-orchestration", "llmops-for-agents"]
    },
    {
        slug: "llmops-for-agents",
        title: "LLMOps for AI Agents: Beyond Model Deployment",
        date: "Sep 30, 2024",
        category: "MLOps",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        alt: "Cloud infrastructure illustrating AI pipelines and deployment flows",
        content: `
            <p class="mb-6">
                Traditional MLOps stops at inference. AI agents demand lifecycle management across memory, tools, prompts, and policies.
            </p>
            <p class="mb-6">
                Versioning agent behavior, evaluating decision quality, and rolling back unsafe reasoning paths are now core operational concerns.
            </p>
        `,
        author: {
            name: "Lena Rodriguez",
            role: "AI Platform Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
            bio: "Specialist in LLMOps pipelines, evaluation frameworks, and AI reliability engineering."
        },
        relatedArticles: ["agent-observability", "security-for-ai-agents"]
    },
    {
        slug: "security-for-ai-agents",
        title: "Security for AI Agents: Identity, Permissions, and Trust",
        date: "Sep 20, 2024",
        category: "AI Security",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
        alt: "Cybersecurity themed visualization with AI and lock symbols",
        content: `
            <p class="mb-6">
                AI agents operate without human supervision — which makes security architecture critical.
            </p>
            <p class="mb-6">
                Identity for agents must be cryptographic, ephemeral, and verifiable. Permissions should be least-privilege and context-aware.
            </p>
        `,
        author: {
            name: "Marcus Lee",
            role: "AI Security Researcher",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            bio: "Researcher focused on securing autonomous AI agents, tool access control, and adversarial safety."
        },
        relatedArticles: ["llmops-for-agents", "multi-agent-orchestration"]
    },
    {
        slug: "agent-use-cases-2025",
        title: "Real-World AI Agent Use Cases in 2025",
        date: "Sep 05, 2024",
        category: "Applications",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
        alt: "AI-driven systems operating across healthcare, finance, and engineering domains",
        content: `
            <p class="mb-6">
                From autonomous SOC analysts to research copilots and software engineering agents, AI systems are moving from experiments to core business infrastructure.
            </p>
        `,
        author: {
            name: "Dr. Ayaan Mehta",
            role: "AI Systems Architect",
            image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
            bio: "Advisor to startups and enterprises deploying AI agents in real-world environments."
        },
        relatedArticles: ["future-of-ai-agents"]
    }
];


export function getArticleBySlug(slug: string) {
    return journalArticles.find(article => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
    const article = getArticleBySlug(currentSlug);
    if (!article) return [];

    // Return articles that match the related slugs
    return journalArticles.filter(a => article.relatedArticles.includes(a.slug));
}
