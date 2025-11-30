# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is OUI (Onchain UI Registry) - a component registry for blockchain-ready React components built on the shadcn/ui infrastructure. It serves as a distribution platform for web3-native UI components, hooks, and pages.

## Key Architecture

### Component Registry System
- **Registry Definition**: `registry.json` defines all available components with their metadata, dependencies, and file paths
- **API Route**: `app/registry/[name]/route.ts` serves components dynamically by reading files and returning them with content
- **Static Files**: Components are also pre-built as static JSON files in `public/r/[name].json`
- **Component Structure**: Registry components live in `registry/[component-name]/` with organized subdirectories for components, hooks, libs, and pages

### Next.js App Structure
- **App Router**: Uses Next.js 15 with App Router (`app/` directory)
- **Layout System**: Main layout in `app/layout.tsx` with component-specific layout in `registry/layout.tsx`
- **Path Aliases**: Uses `@/*` for root-level imports (configured in `tsconfig.json` and `components.json`)

### Component Organization
- **UI Components**: Base shadcn/ui components in `components/ui/`
- **Custom Components**: Application-specific components in `components/`
- **Registry Components**: Distributable components in `registry/[name]/`
- **Utilities**: Shared utilities in `lib/utils.ts`

### Technology Stack
- **Framework**: Next.js 15 with React 19 and TypeScript
- **Styling**: Tailwind CSS with shadcn/ui design system
- **State Management**: TanStack Query for data fetching
- **Validation**: Zod for runtime type validation
- **Icons**: Lucide React
- **Package Manager**: bun

## Common Commands

```bash
# Development
bun dev              # Start development server with Turbopack
bun run build        # Build for production
bun start            # Start production server
bun lint             # Run ESLint

# Registry Management
bun registry:build   # Build registry components using shadcn CLI
```

## Development Patterns

### Adding New Registry Components
1. Create component directory in `registry/[component-name]/`
2. Organize files in subdirectories: `components/`, `hooks/`, `lib/`, `page.tsx`
3. Update `registry.json` with component metadata and file paths
4. Run `bun registry:build` to generate static files
5. Components must be compatible with shadcn/ui installation patterns

### Component Dependencies
- Use `registryDependencies` in `registry.json` for shadcn/ui components
- External dependencies should be listed in package.json
- Components should use Zod for validation and TanStack Query for data fetching when needed

### File Naming and Structure
- Use kebab-case for component directories and files
- Follow shadcn/ui conventions for component exports
- Use TypeScript for all components and utilities
- Include proper type definitions and validation schemas