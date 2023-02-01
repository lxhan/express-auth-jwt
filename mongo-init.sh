mongo -- "$MONGO_INITDB_DATABASE" << EOF
  db.createUser({
    user: "$MONGO_USER",
    pwd: "$MONGO_PASS",
    roles: [
      {
        role: 'readWrite',
        db: "$MONGO_INITDB_DATABASE"
      }
    ]
  })
EOF