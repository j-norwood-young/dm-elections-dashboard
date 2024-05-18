# Daily Maverick Elections Dashboard IEC API

Feed results from the IEC API to various services

## Requirements

-   IEC username and password
-   Redis server

## Config

Environmental variables:

| Variable       | Example                                    | Required | Default                |
| -------------- | ------------------------------------------ | -------- | ---------------------- |
| IEC_USERNAME   | username                                   | Required |                        |
| IEC_PASSWORD   | password                                   | Required |                        |
| ADMIN_USERNAME | admin_user                                 | Required |                        |
| ADMIN_PASSWORD | admin_password                             | Required |                        |
| IEC_URL        | "https://api.elections.org.za"             |          |                        |
| REDIS_URL      | "redis://alice:foobared@redis.server:6380" |          | redis://localhost:6379 |
| PORT           | 8080                                       |          | 8080                   |
| HOST           | "0.0.0.0"                                  |          | 127.0.0.1              |

## Endpoint Structure

/{election}/{level?}/{year}/{province_name?}

-   election: national, provincial
-   level: national (default), provincial
-   year: 2009, 2014, 2019

## Example

Get the top-level results for the 2019 national elections:

```
GET /national/2019
```

Get the results for the 2019 national elections in the Western Cape:

```
GET /national/2019/Western%20Cape
```

Get the results for the 2019 provincial elections in the Western Cape:

```
GET /provincial/2019/Western%20Cape
```
