## Description
使用 Nest 框架開發簡易卡片功能
##  DB design
![Picture1](https://user-images.githubusercontent.com/54132183/175822353-01f603fe-997a-4f95-a61b-b10b07dc6abe.png)

## Api 
### User
1. Get all user -> Get: `/user`
2. Create user -> Post: `/user`
3. login -> Post: `/user/login`

### Card
1. Get all card -> Get: `/card`
1. Create card -> Post: `/card`

## Docker run
```bash
$ docker-compose build --no-cache
$ docker-compose up -d
```


## Author

- Author - [Kelly,Ko](https://github.com/KE-CY)


