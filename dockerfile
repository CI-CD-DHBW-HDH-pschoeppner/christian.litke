FROM ubuntu:latest

COPY ./* ./Klausur/

RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash - &&\
apt-get install -y nodejs
RUN npm install -g npm@latest
WORKDIR /Klausur
RUN ls -la
# Hier fehlt ein install der Dependencies (npm install), daher geht das leider nicht
RUN npm run build

ARG buildarg

# Ich bin mir nicht ganz sicher, was du hier ausführen möchtest.
CMD [ "-parameter=test" ]