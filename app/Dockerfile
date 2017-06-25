FROM justinribeiro/chrome-headless
USER root
RUN apt-get update && \
    apt-get install -y curl gnupg default-jre unzip && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g yarn && \
    curl -o /selenium.jar http://selenium-release.storage.googleapis.com/3.4/selenium-server-standalone-3.4.0.jar && \
    curl -o /chromedriver.zip https://chromedriver.storage.googleapis.com/2.30/chromedriver_linux64.zip && \
    unzip /chromedriver.zip && \
    apt-get purge --auto-remove -y curl gnupg && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 9222

VOLUME /app
WORKDIR /app

ENTRYPOINT []
CMD ["/app/run.sh"]