FROM golang:1.21.6 AS builder

ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64

WORKDIR /app

COPY ./go.mod ./go.sum ./
RUN go mod download

COPY . .
RUN go build -o server .

FROM alpine:latest

WORKDIR /root

COPY --from=builder /app/server .

COPY .env .

EXPOSE 4000

CMD ["./server"]