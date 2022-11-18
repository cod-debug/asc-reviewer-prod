docker stop asc_reviewer_fe
docker rm asc_reviewer_fe
docker rmi asc_reviewer_fe_v1

docker build -t asc_reviewer_fe_v1 .
docker run -d -p 1318:1318 --name asc_reviewer_fe asc_reviewer_fe_v1
docker image prune -f

