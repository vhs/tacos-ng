FROM node:lts-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM base AS build

WORKDIR /build

COPY . /build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile && pnpm run -r build

FROM build AS stage-backend

WORKDIR /build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm deploy --filter=@vhs/tacos-backend --prod /stage

FROM base AS backend

EXPOSE 7000

WORKDIR /app

COPY --from=stage-backend /stage/ /app/

CMD [ "pnpm", "start" ]

FROM nginx:alpine AS frontend

WORKDIR /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/

COPY --from=build /build/packages/frontend/dist/ /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
