FROM --platform=linux/amd64 node:16-alpine
COPY index.js /index.js
CMD ["node", "/index.js"]
#CMD node /index.js




# 生成鏡像
# docker build -t #path .
# 查看已生成的鏡像
# docker image ls
# 運行鏡像
# docker run $packageName

# 上傳到 docker hub
# docker tag 5f88412215ec yushulin/$repo
# docker push yushulin/$repo

# https://labs.play-with-docker.com/