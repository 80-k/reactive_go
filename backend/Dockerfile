FROM golang

VOLUME [ "/work/src" ]

COPY . /work/src

WORKDIR /work/src

RUN go mod download

CMD [ "go","run", "main.go" ]