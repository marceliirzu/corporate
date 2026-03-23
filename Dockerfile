FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm ci

COPY . .

ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z2VuZXJvdXMtZHJha2UtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA
ENV NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
ENV NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
ENV CLERK_SECRET_KEY=sk_test_gzVgHF3xj5A2VXzvlaxVqtkhrAtgv3mWIewM61ZGap

RUN npx prisma generate
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

CMD HOSTNAME=0.0.0.0 node server.js
