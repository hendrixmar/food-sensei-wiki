# Food Sensei Wiki Schema

## Overview

This is a **Spanish-language nutrition and metabolic health knowledge base** maintained by LLMs. The wiki synthesizes knowledge from books about diabetes, metabolism, brain health, and glucose management.

## Architecture

```
food_sensei/
├── raw/                    # Immutable source documents
│   ├── qdrant_export/      # Exported chunks from Qdrant vector DB
│   └── books/              # Original book files (PDF, etc.)
├── wiki/                   # LLM-maintained knowledge base
│   ├── entities/           # People, conditions, foods
│   ├── concepts/           # Key topics and principles
│   ├── sources/            # Source summaries
│   ├── syntheses/          # Cross-source analyses
│   ├── index.md            # Master catalog
│   └── log.md              # Chronological activity log
└── scripts/                # Import/export tools
```

## Wiki Conventions

### File Naming
- **Entities**: `entities/nombre-propio.md` (e.g., `entities/frank-suarez.md`)
- **Concepts**: `concepts/nombre-concepto.md` (e.g., `concepts/dieta-3x1.md`)
- **Sources**: `sources/libro-resumen.md` (e.g., `sources/diabetes-sin-problemas.md`)
- **Syntheses**: `syntheses/tema-analisis.md` (e.g., `syntheses/carbohidratos-vs-grasas.md`)

### Frontmatter Template
```markdown
---
title: "Display Name"
type: "entity|concept|source|synthesis"
aliases: ["alternative names", "search terms"]
tags: [tag1, tag2]
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [list of source files]
related: [linked wiki pages]
---

# Content below
```

### Page Structure

#### Entities
```markdown
---
title: "Frank Suarez"
type: "entity"
category: "author|doctor|nutrient|condition"
aliases: []
tags: [nutrition, diabetes, metabolism]
---

# Frank Suarez

## Biografía
Brief background.

## Obras Principales
- [[sources/diabetes-sin-problemas]]
- [[sources/metabolismo-ultra-poderoso]]

## Conceptos Clave
- [[concepts/dieta-3x1]]
- [[concepts/restauracion-metabolismo]]

## Controversias / Críticas
Any criticisms or debates.

## Síntesis
Cross-book analysis.
```

#### Concepts
```markdown
---
title: "Dieta 3x1"
type: "concept"
aliases: ["dieta tres por uno", "3x1 diet"]
tags: [diabetes, metabolismo, alimentacion]
sources: ["diabetes-sin-problemas", "metabolismo-ultra-poderoso"]
related: [dieta-baja-carbohidratos, resistencia-insulina]
---

# Dieta 3x1

## Definición
What it is.

## Principios
1. Principle one
2. Principle two
3. Principle three

## Base Científica
Evidence and mechanisms.

## Aplicación Práctica
How to implement.

## Críticas y Limitaciones
Known limitations.

## Conexiones
- Related concept 1
- Related concept 2
```

#### Sources
```markdown
---
title: "Diabetes sin problemas"
type: "source"
author: "Frank Suarez"
year: null
pages: 5248 chunks
original_file: "..."
summary_status: "in-progress|complete|stale"
last_reviewed: YYYY-MM-DD
---

# Diabetes sin problemas

## Resumen Ejecutivo
One-paragraph summary.

## Temas Principales
1. Topic one
2. Topic two

## Conceptos Introducidos
- [[concepts/new-concept]]

## Datos Clave
Notable statistics or findings.

## Mi Análisis
Personal/LLM interpretation.

## Pendiente
Questions, contradictions, areas needing review.
```

## Workflows

### Ingest (Adding a New Source)
1. Export chunks from Qdrant using `scripts/export_qdrant.py`
2. Create source summary page in `sources/`
3. Create entity pages for new authors mentioned
4. Identify and create concept pages for key terms
5. Update `index.md` with new pages
6. Append entry to `log.md`

### Query (Answering Questions)
1. Read `index.md` to find relevant pages
2. Read relevant pages with citations
3. Synthesize answer
4. If answer creates new knowledge: file as new wiki page

### Lint (Health Check)
Run monthly or after major additions:
1. Check for contradictions between pages
2. Identify orphan pages with no inbound links
3. Find concepts mentioned but lacking pages
4. Verify citations point to valid sources
5. Update stale pages

## Index Format

```markdown
# Wiki Index

## Fuentes (6)
| Libro | Autor | Chunks | Estado |
|-------|-------|--------|--------|
| [[sources/diabetes-sin-problemas]] | Frank Suarez | 5248 | complete |
| [[sources/cerebro-de-pan]] | David Perlmutter | 1677 | complete |

## Entidades
### Autores
- [[entities/frank-suarez]] - Nutrición y diabetes
- [[entities/david-perlmutter]] - Salud cerebral

### Condiciones
- [[entities/diabetes-tipo-2]]
- [[entities/resistencia-insulina]]

## Conceptos
- [[concepts/dieta-3x1]] - Sistema alimenticio de Frank Suarez
- [[concepts/metabolismo]] - Concepto central
- [[concepts/glucosa]] - Azúcar en sangre
```

## Log Format

```markdown
# Activity Log

## [2026-04-08] ingest | Diabetes sin problemas
- Created source summary (5248 chunks)
- Extracted 15 key concepts
- Identified 3 new entities
- Notes: Key work on Dieta 3x1 and metabolism restoration

## [2026-04-08] query | "¿Cuál es la mejor dieta para diabetes?"
- Synthesized answer from 4 sources
- Created [[syntheses/dieta-para-diabetes-comparacion]]
- Suggested: Add more recent research on continuous glucose monitoring

## [2026-04-08] lint | Monthly health check
- Found 3 orphan pages
- Updated 2 stale concept pages
- No contradictions detected
```

## Topics Covered

### By Author
- **Frank Suarez**: Dieta 3x1, metabolismo, diabetes, resistencia a insulina, presión arterial, colesterol
- **David Perlmutter**: Cerebro, carbohidratos, gluten, inflamación, neurodegeneración
- **Jessie Inchauspé**: Glucosa, picos de azúcar, vinagre, fructosa

### Key Concepts
- Metabolismo y su restauración
- Diabetes tipo 2 y manejo
- Resistencia a insulina
- Carbohidratos vs grasas
- Glucosa y sus efectos
- Presión arterial y alimentación
- Colesterol y triglicéridos
- Hormonas y alimentación
- Vitaminas y minerales

## Maintenance

- **Ingest frequency**: As new sources become available
- **Lint frequency**: Monthly
- **Review frequency**: Quarterly deep review of key concepts
- **Backup**: Git commit after each session

## Language

All wiki content is in **Spanish**. Use Spanish terminology and concepts. When referencing English terms, provide Spanish translation in parentheses.
