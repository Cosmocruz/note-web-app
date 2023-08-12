# Fetching the latest node image on apline linux
FROM mhart/alpine-node:16.4 AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY ./dist ./dist

# # Building our application
# RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf