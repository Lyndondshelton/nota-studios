# NOTA Studios

The official website for NOTA Studios.  
The repo is public for devs to copy its architecture for similar projects.

## Project Overview
- Public-facing website
- Artist portfolios
- Business service listings
- Business hours
- Admin dashboard for managing content
- Media storage through Amazon S3

### Architecture Diagram
The application uses a Next.js frontend with a Django backend and PostgreSQL database.

Browser  
│  
Next.js (Vercel)  
│  
REST API  
|  
Django  
├─────────────► PostgreSQL (Neon)  
└─────────────► Amazon S3  

### Why Django?
- Built-in admin interface
- Object-Relational Mapping
- Widely used backend framework; Large set of libraries and third party plugins available

### Why Next.js?
- React ecosystem
- Server Components
- Vercel integration

### Why PostgreSQL?
- Production-ready
- Better concurrency
- Cloud hosted

### Why Amazon S3?
- Durable object storage
- Keeps application stateless
- Low cost ~$0.02/GB

### Project Structure
- backend/  
  - Django REST API
  - Business logic
  - Database models
  - Admin CMS
- frontend/
  - Next.js application
  - React components
  - Server-side rendering


## Prerequisites

- Python 3.14+
- Node.js 24+
- AWS CLI
- Neon for PostgreSQL

