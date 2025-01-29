FROM ubuntu:22.04
LABEL authors="PC"

RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/* \

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

WORKDIR /app

RUN npm install
RUN npm run build
CMD ["npm", "start"]



ENTRYPOINT ["top", "-b"]