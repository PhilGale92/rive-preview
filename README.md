## Rive_PREVIEW

### What is it?

While working with Rive; we found a rive file could preview perfectly fine within the Rive app itself.
But within a browser it would error due to the Rive runtime not being able to parse a file (due to an animation error or similar).

To assist motion people out there I put this little tool together so they can see how the Rive file would act within a browser without needing a developer.

## Infra/ built with

Built with Node 20.x

Just use `npm run dev` or `npm run build`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result if in dev mode..

Living on vercel. Just using SSG so no files are uploaded to a server! All parsing in browser.