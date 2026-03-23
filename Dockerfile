FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm ci

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["npm", "run", "start"]
