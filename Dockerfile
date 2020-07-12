FROM node:10-slim as builder

WORKDIR /app

COPY package.json yarn.lock /app/
RUN set -x && \
	apt update && \
	apt install -y build-essential zlib1g-dev && \
	NODE_ENV=development yarn

COPY . /app/
RUN NODE_ENV=production yarn run build


FROM node:10-alpine

EXPOSE 3000
WORKDIR /app
CMD ["yarn", "dev"]

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV PORT=3000

COPY --from=builder /app ./
