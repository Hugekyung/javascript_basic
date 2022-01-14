# javascript_basic

도커 컨테이너 환경에서 개발하기<br>
version: **node:16.13.2 LTS** <br><br>



## 컨테이너 생성(이미지 기반)
Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]<br>
~~~
docker run -d -it --name node_app -v /Users/yanghaechan/vscode_workspace/node_test/node-app:/app node:16.13.2
~~~

## 컨테이너 띄우기(시작)
~~~
docker start [APP_NAMES]
~~~

## 컨테이너 쉘 접속(로컬과 마운트)
실행중인 Docker 컨테이너는 마치 프로세스처럼 동작하지만, 컨테이너 실행 환경에 접속해야 할 경우가 있다. 컨테이너는 일반적인 리눅스와는 다르게 SSH 서버가 없다. 이 때 사용할 수 있는 명령어가 바로 ***dokcer exec***이다.
~~~
docker exec -it node_app /bin/bash
~~~