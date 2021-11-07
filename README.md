# nextjs11_13mysql

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2021/11/06

 update  :

***
### Summary

Next.js 11 + apollo-server-micro + prisma + mysql 5.7, sample

***
### Setup

* npm install

* .env : DATABASE_URL: user, password, host, portNo. dbname
```
DATABASE_URL="mysql://user1234:password@host1234:3306/dbname"
```

* apollo-client.ts

uri: if change domain, setting require
```
uri: 'http://localhost:3000/api/graphql',
```

***
### Start server
* start :

yarn dev

***
### Blog:
* vercel + apollo-server-micro + prisma の例

 https://zenn.dev/knaka0209/books/261398faf9b13a/viewer/7688dc

***

