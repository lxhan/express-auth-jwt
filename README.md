## API
```
# sign up
curl -X POST localhost:8000/signup \
-H 'Content-Type: application/json' \
-d '{"email": "test@gmail.com", "password": "12345678", "confirm": "12345678"}'

# sign in
curl -X POST localhost:8000/signin \
-H 'Content-Type: application/json' \
-d '{"email": "test@gmail.com", "password": "12345678"}'

# get users
curl -X GET \
  --url http://localhost:8000/api/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDlmNjRjNmQ1ZGE1OTE5Njc1ZDcxMSIsImVtYWlsIjoiYXNkZkBhc2RmLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc1MjI5MzE5LCJleHAiOjE2NzUzMTU3MTl9.51UGPgylHgktSlnTDSaan1WCrQ78D0dAckWvK3VS3Tw'

```