# javascript_basic

도커 컨테이너 환경에서 개발하기<br><br>


## 컨테이너 띄우기
Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
~~~
docker run -d -it --name node_app -v /Users/yanghaechan/vscode_workspace/node_test/node-app:/app node:16.13.2
~~~

## 컨테이너 쉘 접속(로컬과 마운트)
~~~
docker exec -it node_app /bin/bash
~~~