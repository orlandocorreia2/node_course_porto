FROM node:22.12

LABEL maintainer 'Orlando Nascimento <ocnasicmento2@gmail.com>'

WORKDIR /usr/src

RUN apt-get update \
  && apt-get install -yq --no-install-recommends \
  # TOOLS
  curl \
  git \
  unzip \
  # CLEAR 
  && apt-get clean

EXPOSE 3000

# ENTRYPOINT ["/bin/ping"]
# CMD ["localhost"]

ENTRYPOINT [".docker/start.sh"]