# Daily Maverick Elections Dashboard IEC API

Feed results from the IEC API to various services

## Requirements

- IEC username and password
- Redis server

## Config

Environmental variables:

| Variable       | Example                                              | Required | Default            |
|----------------|------------------------------------------------------|----------|--------------------|
| IEC_USERNAME   | username                                             | Required |                    |
| IEC_PASSWORD   | password                                             | Required |                    |
| ADMIN_USERNAME | admin_user                                           | Required |                    |
| ADMIN_PASSWORD | admin_password                                       | Required |                    |
| IEC_URL        | "https://api.elections.org.za"                       |          |                    |
| REDIS_URL      | "redis://alice:foobared@redis.server:6380"           |          | redis://localhost:6379 |
| PORT           | 8080                                                 |          | 8080               |
| HOST           | "0.0.0.0"                                            |          | 127.0.0.1          |