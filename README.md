## Description
使用 Nest 框架開發簡易卡片功能
##  DB design
![Picture1](https://user-images.githubusercontent.com/54132183/175822353-01f603fe-997a-4f95-a61b-b10b07dc6abe.png)

## Api 
### User
1. Get all user -> Get: `/user`

![image](https://user-images.githubusercontent.com/54132183/175982285-39cb52b5-332c-4be7-bdd0-40ff0626cf3c.png)

2. Create user -> Post: `/user`
3. login -> Post: `/user/login`

![image](https://user-images.githubusercontent.com/54132183/175982260-fc06ba31-8152-41ee-ad6b-02f302cc84fd.png)


### Card
1. Get all card -> Get: `/card`
1. Create card -> Post: `/card`

![image](https://user-images.githubusercontent.com/54132183/175982338-5e969073-b27d-4c28-8e58-7df9f8921367.png)

## Docker run
```bash
$ docker-compose build --no-cache
$ docker-compose up -d
```


## Author

- Author - [Kelly,Ko](https://github.com/KE-CY)


