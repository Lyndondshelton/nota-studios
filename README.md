Main code for NOTA Studios website it located in nota-studios/nota-studios. Code is deployed through Vercel and is hosted at the following locations:

Production Environment - [nota-studios.vercel.app](https://nota-studios.vercel.app)
Testing Environment    - [tenv-nota-studios.vercel.app](https://tenv-nota-studios.vercel.app)

Coding changes will take place in "coding branches" with the following naming convention: _"B-123456"_ and should be created from branch _main_ and no other branch. 

All new coding changes should be pushed to the repository in the following order:
 1. Coding Branch _(B-******)_ -> tenv
    a. Complete dev/qa testing in [Testing Environment](https://tenv-nota-studios.vercel.app)
 2. tenv -> main


Knowledge Base   - [Evernote](https://evernote.com/)
Component Design - [Figma](https://www.figma.com/)
Auth App         - [Clerk](https://clerk.com/nextjs-authentication)
Transactions     - [Stripe](https://docs.stripe.com/api)
    Beat Store   - [Vercel](https://vercel.com/templates/next.js/nextjs-commerce)
                 - [Howler.js](https://howlerjs.com/)
File Handling    - [AmazonS3](https://aws.amazon.com/s3/?nc=sn&loc=1)
Scheduling       - [Calendly](https://calendly.com/)
CMS              - [Strapi](https://strapi.io/)