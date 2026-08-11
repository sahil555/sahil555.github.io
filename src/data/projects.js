export const projects = [
    {
        id: "payment-platform",
        title: "Unified Payment Platform",
        category: "Distributed Payment Infrastructure",
        featured: true,

        summary:
            "A unified payment infrastructure abstracting multiple payment providers behind scalable backend services.",

        story:
            "The platform integrated payment aggregators such as Juspay and Razorpay while supporting payment processing, KYC verification and bank-account validation. The main architectural challenge was handling provider-specific behavior, asynchronous callbacks, retries and high transaction volume without making external dependencies part of the critical synchronous path.",

        scale: [
            "100M+ transactions/day",
            "1M transactions/minute"
        ],

        architecture: [
            "API Gateway / AWS WAF",
            "Spring Boot / FastAPI services",
            "AWS ECS / Lambda",
            "DynamoDB / RDS",
            "RabbitMQ / Kafka",
            "Juspay / Razorpay"
        ],

        decisions: [
            {
                title: "Asynchronous Processing",
                description:
                    "Moved webhook processing, reconciliation and downstream synchronization away from the latency-sensitive API path."
            },
            {
                title: "Idempotency",
                description:
                    "Designed retry-safe payment workflows to handle duplicate callbacks and repeated provider requests."
            },
            {
                title: "Provider Abstraction",
                description:
                    "Kept provider-specific integrations behind a common payment interface so the core platform remained independent of individual aggregators."
            },
            {
                title: "Horizontal Scaling",
                description:
                    "Used ECS and Lambda-based workloads to independently scale different parts of the platform."
            }
        ],

        technologies: [
            "Java",
            "Spring Boot",
            "Python",
            "FastAPI",
            "Django",
            "Node.js",
            "AWS",
            "ECS",
            "Lambda",
            "API Gateway",
            "DynamoDB",
            "RDS",
            "RabbitMQ",
            "Kafka",
            "Docker"
        ]
    },

    {
        id: "reconciliation-engine",
        title: "Distributed Reconciliation Engine",
        category: "Financial Infrastructure",
        featured: true,

        summary:
            "Event-driven financial reconciliation infrastructure designed to detect and resolve discrepancies across multiple ledger systems.",

        story:
            "The reconciliation engine processed transaction changes from multiple financial systems and automatically identified discrepancies. The architecture was designed around asynchronous processing so that spikes in reconciliation workloads would not block financial APIs or require the entire workload to be processed synchronously.",

        scale: [
            "500K+ transactions/day",
            "2,000+ concurrent requests/sec",
            "99.9% automated discrepancy detection",
            "15+ hours/week manual effort saved"
        ],

        architecture: [
            "DynamoDB Streams",
            "AWS Lambda",
            "RabbitMQ",
            "Concurrent Workers",
            "PostgreSQL",
            "AWS ECS"
        ],

        decisions: [
            {
                title: "Event-Driven Processing",
                description:
                    "Used DynamoDB Streams and Lambda to trigger reconciliation workflows without coupling ingestion directly to processing."
            },
            {
                title: "Worker Concurrency",
                description:
                    "Used concurrent workers with explicit concurrency controls to process large workloads efficiently."
            },
            {
                title: "Fault Tolerance",
                description:
                    "Added retries, scheduled jobs, logging and audit tracking to handle transient failures."
            },
            {
                title: "Independent Scaling",
                description:
                    "Separated ingestion, reconciliation and reporting workloads so each could scale independently."
            }
        ],

        technologies: [
            "Python",
            "Java",
            "Node.js",
            "DynamoDB Streams",
            "AWS Lambda",
            "AWS ECS",
            "RabbitMQ",
            "PostgreSQL",
            "Docker"
        ]
    },

    {
        id: "banking-platform",
        title: "Banking Backend Platform",
        category: "Transactional Financial Infrastructure",

        summary:
            "Backend platform for account management and financial operations with transactional ledger processing.",

        story:
            "The platform separated financially critical transactional workloads from operational data and asynchronous synchronization. PostgreSQL/RDS was used where ACID guarantees were required, while MongoDB handled operational data and RabbitMQ decoupled synchronization workflows.",

        architecture: [
            "Flask REST APIs",
            "Authentication Middleware",
            "AWS RDS / PostgreSQL",
            "MongoDB",
            "RabbitMQ",
            "Docker"
        ],

        decisions: [
            {
                title: "ACID for Financial Operations",
                description:
                    "Kept critical ledger operations on RDS/PostgreSQL to preserve transactional consistency."
            },
            {
                title: "Operational Data Separation",
                description:
                    "Used MongoDB for operational workloads where flexible schemas were more appropriate."
            },
            {
                title: "Asynchronous Synchronization",
                description:
                    "Used RabbitMQ to keep synchronization work outside critical transaction paths."
            }
        ],

        technologies: [
            "Python",
            "Flask",
            "PostgreSQL",
            "AWS RDS",
            "MongoDB",
            "RabbitMQ",
            "Docker"
        ]
    },

    {
        id: "tourism-ai",
        title: "AI Tourism Recommendation Platform",
        category: "Machine Learning & Recommendation Systems",

        summary:
            "AI-powered tourism platform generating personalized multi-destination travel itineraries.",

        story:
            "The platform combined collaborative filtering and content-based recommendation models with scalable data pipelines. Offline data processing and model generation were separated from online recommendation serving to keep user-facing APIs responsive.",

        scale: [
            "92% recommendation accuracy",
            "25% increase in itinerary acceptance",
            "GiBs of travel and destination data"
        ],

        architecture: [
            "Kafka",
            "Apache Spark",
            "Apache Airflow",
            "TensorFlow / Scikit-learn",
            "FastAPI / Django",
            "Redis",
            "MongoDB",
            "Aurora PostgreSQL"
        ],

        decisions: [
            {
                title: "Offline / Online Separation",
                description:
                    "Separated expensive feature processing and model generation from low-latency recommendation serving."
            },
            {
                title: "Distributed Data Processing",
                description:
                    "Used Spark and Airflow for large-scale data processing and pipeline orchestration."
            },
            {
                title: "Low-Latency Serving",
                description:
                    "Used Redis and optimized application APIs to keep recommendation responses fast."
            }
        ],

        technologies: [
            "Python",
            "Django",
            "FastAPI",
            "TensorFlow",
            "Scikit-learn",
            "Spark",
            "Airflow",
            "Kafka",
            "Redis",
            "MongoDB",
            "PostgreSQL",
            "Docker"
        ]
    },

    {
        id: "project-dynamo",
        title: "Project Dynamo / Terminal-Bench 2",
        category: "AI Coding-Agent Evaluation",
        featured: true,

        summary:
            "Repository-level engineering environments and tasks for evaluating AI coding agents in realistic terminal environments.",

        story:
            "The work focuses on creating realistic software-engineering tasks where coding agents must navigate repositories, understand existing code, implement changes, execute tests and produce validated solutions.",

        architecture: [
            "Repository Scaffolding",
            "Docker Environments",
            "Python / FastAPI / Django",
            "Node.js / Express",
            "Java / Spring Boot",
            "DynamoDB / RDS",
            "RAG Applications",
            "Validation Pipelines"
        ],

        decisions: [
            {
                title: "Reproducible Environments",
                description:
                    "Use containerized environments so agent tasks can be evaluated consistently."
            },
            {
                title: "Repository-Level Tasks",
                description:
                    "Design tasks around realistic multi-file engineering workflows rather than isolated coding exercises."
            },
            {
                title: "Automated Validation",
                description:
                    "Use tests and validation workflows to determine whether an agent successfully completed the engineering task."
            }
        ],

        technologies: [
            "Python",
            "FastAPI",
            "Django",
            "Node.js",
            "Express.js",
            "Java",
            "Spring Boot",
            "RAG",
            "LLMs",
            "Docker",
            "DynamoDB",
            "RDS"
        ]
    }
];