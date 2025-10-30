# Client
FROM node:lts-bookworm-slim AS build-client
ARG artifact=false

USER node

WORKDIR /app/client

COPY --chown=node:node client/package*.json .

RUN npm ci
RUN npm install @rollup/rollup-linux-x64-gnu

COPY --chown=node:node client/ .

RUN npm run build

# Server
FROM node:lts-bookworm-slim AS run-server

WORKDIR /app/server

COPY --chown=node:node server/package*.json .
RUN npm ci

COPY --chown=node:node server/ .

RUN npm run build

RUN rm -rf src/
RUN mv dist/* .
RUN rm -rf dist/

COPY --from=build-client /app/client/dist /app/client/dist 

EXPOSE 3000

ENV NODE_ENV="production"

ENTRYPOINT ["node", "src/bin/www.js"]